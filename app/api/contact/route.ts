import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

type ContactPayload = { name?: string; email?: string; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = (body.name ?? '').trim();
  const email = (body.email ?? '').trim();
  const message = (body.message ?? '').trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Please fill in all fields.' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: 'Message is too long.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? 'Dslash <onboarding@resend.dev>';

  // If email delivery isn't configured yet, log server-side so submissions aren't
  // silently lost, and return a clear error rather than a fake success.
  if (!apiKey || !to) {
    console.warn(
      '[contact] RESEND_API_KEY / CONTACT_TO_EMAIL not set — submission was NOT delivered:',
      { name, email },
    );
    return NextResponse.json(
      { error: 'The contact form is not configured yet. Please email us directly.' },
      { status: 503 },
    );
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error('[contact] Resend error:', res.status, detail);
      return NextResponse.json(
        { error: 'Could not send your message. Please try again.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return NextResponse.json(
      { error: 'Could not send your message. Please try again.' },
      { status: 500 },
    );
  }
}
