import { notFound } from 'next/navigation';
import { DETAILED_SERVICES, PORTFOLIO } from '@/lib/constants';
import { Header } from '@/components/ui/header-3';
import Footer from '@/components/Footer';
import ServicePageClient from './ServicePageClient';

type Props = {
  params: { serviceId: string };
};

export async function generateStaticParams() {
  return DETAILED_SERVICES.map((s) => ({ serviceId: s.id }));
}

export async function generateMetadata({ params }: Props) {
  const service = DETAILED_SERVICES.find((s) => s.id === params.serviceId);
  if (!service) return {};
  return {
    title: `${service.title} | D Slash`,
    description: service.description,
  };
}

export default function ServicePage({ params }: Props) {
  const service = DETAILED_SERVICES.find((s) => s.id === params.serviceId);
  if (!service) notFound();

  return (
    <main className="relative min-h-screen">
      <Header />
      <ServicePageClient serviceId={params.serviceId} />
      <Footer />
    </main>
  );
}
