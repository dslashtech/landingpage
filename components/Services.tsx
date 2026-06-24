'use client';

import { motion } from 'framer-motion';
import { DETAILED_SERVICES } from '@/lib/constants';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="pt-24 pb-16 relative overflow-hidden bg-white border-t border-slate-50"
    >
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="heading-luxury mb-6"
            >
              Services We <span className="text-gradient">Offer</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.1 }}
              className="text-textMuted text-lg leading-relaxed"
            >
              Think of us as your digital team. We build, market, and grow your business online. Explore our services and see what fits you.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-textPrimary text-textPrimary font-bold text-sm hover:bg-textPrimary hover:text-white transition-all duration-300"
            >
              View All Projects
              <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* Service Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {DETAILED_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={cardVariants}>
                <Link
                  href={`/services/${service.id}`}
                  className="group relative flex flex-col h-full bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:border-primary/25 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient blob on hover */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none" />

                  {/* Icon */}
                  <div className="mb-6 w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-display font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-textMuted text-sm leading-relaxed mb-6 flex-grow line-clamp-2">
                    {service.description}
                  </p>

                  {/* Tag pill row */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(service.tags ?? service.techStack.slice(0, 3).map(t => t.name)).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold tracking-wide uppercase text-secondary bg-slate-50 border border-slate-200 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Row */}
                  <div className="flex items-center gap-2 text-sm font-bold text-primary mt-auto">
                    <span>View Projects</span>
                    <ArrowUpRight
                      size={16}
                      className="translate-x-0 translate-y-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
