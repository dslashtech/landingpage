import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { Header } from '@/components/ui/header-3';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <section className="pt-24 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="mb-8">
            <Link
              href="/"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-semibold text-textMuted overflow-hidden shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <span className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out rounded-full" />
              <ArrowLeft size={15} className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:-translate-x-0.5" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Back to Home</span>
            </Link>
          </div>
          <h1 className="heading-luxury mb-8">Privacy Policy</h1>
          <p className="text-textMuted text-sm mb-12">Last updated: June 22, 2026</p>

          <div className="prose prose-slate max-w-none space-y-8 text-textPrimary/80 leading-relaxed">
            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">1. Introduction</h2>
              <p>
                Dslash (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                or use our services.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and company details when you fill out our contact form or book a consultation.</li>
                <li><strong>Project Information:</strong> Details about your project requirements, goals, and technical specifications shared during consultations.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referral sources.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and operating system.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">3. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>To respond to your inquiries and provide consultation services.</li>
                <li>To deliver the services you requested, including web design, development, and software solutions.</li>
                <li>To improve our website, services, and customer experience.</li>
                <li>To send relevant communications about our services, updates, and promotions (with your consent).</li>
                <li>To comply with legal obligations and protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">4. Data Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Trusted service providers who assist us in operating our website and conducting our business (e.g., hosting providers, payment processors), subject to confidentiality agreements.</li>
                <li>Legal authorities when required by law or to protect our rights, property, or safety.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
                Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">6. Cookies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing experience.
                You can control cookie preferences through your browser settings. Disabling cookies may affect certain
                features of our website.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">7. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access, correct, or delete your personal information.</li>
                <li>Withdraw consent at any time where we rely on your consent to process your data.</li>
                <li>Object to or restrict the processing of your data.</li>
                <li>Request data portability.</li>
                <li>Lodge a complaint with a data protection authority.</li>
              </ul>
              <p className="mt-3">To exercise these rights, please contact us using the information below.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party sites. We are not responsible for the privacy practices or
                content of such external sites. We encourage you to review their privacy policies before providing any
                personal information.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
                revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">10. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:
              </p>
              <ul className="list-none mt-2 space-y-1 text-textPrimary">
                <li>Email: <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:underline">{CONTACT_INFO.email}</a></li>
                <li>Phone: {CONTACT_INFO.phone}</li>
                <li>Location: {CONTACT_INFO.location}</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
