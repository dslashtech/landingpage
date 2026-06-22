import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { Header } from '@/components/ui/header-3';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service',
};

export default function TermsPage() {
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
          <h1 className="heading-luxury mb-8">Terms of Service</h1>
          <p className="text-textMuted text-sm mb-12">Last updated: June 22, 2026</p>

          <div className="prose prose-slate max-w-none space-y-8 text-textPrimary/80 leading-relaxed">
            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Dslash website and services, you agree to be bound by these Terms of Service.
                If you do not agree with any part of these terms, you should not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">2. Services</h2>
              <p>
                Dslash provides web design, development, custom software solutions, UI/UX design, and consulting services
                (&ldquo;Services&rdquo;). The specific scope, deliverables, timelines, and pricing for each project will
                be outlined in a separate agreement or statement of work signed by both parties.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">3. Intellectual Property</h2>
              <p>
                Upon full payment for Services, we transfer ownership of the final deliverables (code, designs, assets)
                to you. We retain the right to display the work in our portfolio unless otherwise agreed in writing.
              </p>
              <p className="mt-3">
                You retain all intellectual property rights to your brand materials, content, and data provided to us
                for the purpose of delivering Services.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">4. Client Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide accurate and complete information required for the project.</li>
                <li>Provide timely feedback, approvals, and necessary assets to meet project deadlines.</li>
                <li>Ensure you have the legal right to use any materials, content, or third-party assets provided to us.</li>
                <li>Make timely payments as outlined in the project agreement.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">5. Pricing and Payment</h2>
              <p>
                Pricing for Services will be quoted on a per-project basis unless otherwise agreed. Payment terms,
                including deposits, milestones, and final payments, will be specified in the project agreement.
                Late payments may result in project delays or suspension of Services.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">6. Revisions and Changes</h2>
              <p>
                Our standard process includes a defined number of revision rounds as specified in the project agreement.
                Additional revisions or scope changes beyond the original agreement may incur extra charges.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">7. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential all proprietary information shared during the course of the
                project. This includes business strategies, technical specifications, and any non-public information.
                This obligation survives the termination of our agreement.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">8. Limitation of Liability</h2>
              <p>
                Dslash shall not be liable for any indirect, incidental, special, or consequential damages arising from
                the use or inability to use our Services. Our total liability for any claim shall not exceed the total
                amount paid for the specific Service giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">9. Termination</h2>
              <p>
                Either party may terminate the project agreement with written notice. In the event of termination,
                you shall pay for all work completed up to the termination date. We will deliver all work products
                produced up to that point upon receipt of payment.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">10. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes
                arising from these terms shall be resolved in the courts of Bengaluru, Karnataka.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately
                upon posting. Your continued use of our Services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-textPrimary mb-3">12. Contact</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
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
