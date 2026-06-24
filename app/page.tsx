import { Header } from '@/components/ui/header-3';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      <SocialProof />
      <Services />
      <Testimonials />
      <Process />
      <Pricing />
      <FAQ />
      {/* <CTABanner /> */}
      <Contact />
      <Footer />
    </main>
  );
}
