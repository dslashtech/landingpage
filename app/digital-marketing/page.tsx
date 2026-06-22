'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, MousePointerClick, Eye, IndianRupee } from 'lucide-react';
import { Header } from '@/components/ui/header-3';
import Footer from '@/components/Footer';

const STATS = [
  { label: 'Total Impressions', value: '3.18M+', icon: Eye, color: 'from-blue-500 to-blue-600' },
  { label: 'Total Clicks', value: '4.56K+', icon: MousePointerClick, color: 'from-orange-500 to-orange-600' },
  { label: 'Avg. CTR', value: '8.94%', icon: TrendingUp, color: 'from-green-500 to-green-600' },
  { label: 'Ad Spend Managed', value: '₹7.6M+', icon: IndianRupee, color: 'from-purple-500 to-purple-600' },
];

const CAMPAIGNS = [
  {
    id: 1,
    src: '/campigns/1.jpeg',
    title: 'CarQure — Google Ads',
    description: 'App install campaign: 3.46K clicks · 8.94% CTR · ₹5.98 Avg. CPC',
    platform: 'Google Ads',
    platformColor: 'bg-blue-100 text-blue-700',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 2,
    src: '/campigns/2.jpeg',
    title: 'Smart Cool Technologies',
    description: 'Long-running campaign: 55K impressions · 4.56K clicks · ₹67.6K spend',
    platform: 'Google Ads',
    platformColor: 'bg-blue-100 text-blue-700',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    src: '/campigns/3.jpeg',
    title: 'Multi-Brand Search Campaign',
    description: 'Lenovo & Asus: 373K clicks · 3.18M impressions · ₹7.6M spend · 68.6K conversions',
    platform: 'Google Ads',
    platformColor: 'bg-blue-100 text-blue-700',
    span: 'col-span-1 lg:col-span-2 row-span-1',
  },
  {
    id: 4,
    src: '/campigns/4.jpeg',
    title: 'Lenovo.com Campaign Deep-Dive',
    description: '373K clicks · 3.18M impressions · ₹7.6M cost · 68.6K conversions (Feb 2024 – Nov 2025)',
    platform: 'Google Ads',
    platformColor: 'bg-blue-100 text-blue-700',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 5,
    src: '/campigns/5.jpeg',
    title: 'CarQure — Meta Ads',
    description: '5.6M reach · 5.8 frequency · 0.7 CTR · ₹8.54 CPC (Jan–Jun 2026)',
    platform: 'Meta Ads',
    platformColor: 'bg-indigo-100 text-indigo-700',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    src: '/campigns/6.jpeg',
    title: 'CarQure — Meta Campaign Manager',
    description: '41 active campaigns · ₹1.44M total spend · Multiple conversions across services',
    platform: 'Meta Ads',
    platformColor: 'bg-indigo-100 text-indigo-700',
    span: 'col-span-1 row-span-1',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function DigitalMarketingPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Subtle background blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-32 right-1/4 w-64 h-64 bg-orange-100/60 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative">
          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-8"
          >
            <Link
              href="/"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-semibold text-textMuted overflow-hidden shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <span className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out rounded-full" />
              <ArrowLeft size={15} className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:-translate-x-0.5" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Back to Home</span>
            </Link>
          </motion.div>

          {/* Page Title */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-14">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
              >
                <TrendingUp size={13} />
                Digital Marketing
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="heading-luxury mb-5"
              >
                Our <span className="text-gradient">Campaign</span> Results
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-textMuted text-lg leading-relaxed"
              >
                Real results from real campaigns — Google Ads & Meta Ads strategies that drove millions of impressions, thousands of conversions, and measurable ROI for our clients.
              </motion.p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-3xl bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-3 shadow-md`}>
                  <stat.icon size={18} strokeWidth={2.5} />
                </div>
                <p className="text-2xl font-display font-black text-textPrimary mb-1">{stat.value}</p>
                <p className="text-xs font-semibold text-textMuted uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Gallery */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-display font-bold text-textPrimary mb-1">Campaign Screenshots</h2>
            <p className="text-textMuted text-sm">Live dashboard captures from Google Ads &amp; Meta Ads Manager</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAMPAIGNS.map((campaign, i) => (
              <motion.div
                key={campaign.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`group flex flex-col rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 bg-white ${campaign.id === 3 ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-slate-50">
                  <Image
                    src={campaign.src}
                    alt={campaign.title}
                    width={1200}
                    height={800}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-grow p-5">
                  <div className="mb-3">
                    <span className={`inline-block text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${campaign.platformColor}`}>
                      {campaign.platform}
                    </span>
                  </div>
                  <h3 className="text-base font-display font-bold text-textPrimary mb-2 group-hover:text-primary transition-colors duration-300">
                    {campaign.title}
                  </h3>
                  <p className="text-textMuted text-sm leading-relaxed">
                    {campaign.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <p className="text-textMuted mb-5 text-base">Want results like these for your business?</p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold text-sm shadow-xl shadow-primary/25 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
            >
              Start a Campaign →
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
