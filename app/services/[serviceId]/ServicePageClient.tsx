'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { DETAILED_SERVICES, PORTFOLIO } from '@/lib/constants';

type Props = {
  serviceId: string;
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicePageClient({ serviceId }: Props) {
  const service = DETAILED_SERVICES.find((s) => s.id === serviceId);
  
  // If we're on the Website Development page, show a mix of all related web projects
  const projects = PORTFOLIO.filter((p) => {
    if (serviceId === 'web') {
      return ['web', 'ecommerce', 'design', 'erp'].includes(p.serviceId);
    }
    if (serviceId === 'student') {
      return ['student', 'design'].includes(p.serviceId);
    }
    return p.serviceId === serviceId;
  });

  if (!service) return null;

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-8 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-8"
          >
            <Link
              href="/#services"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-semibold text-textMuted overflow-hidden shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <span className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out rounded-full" />
              <ArrowLeft
                size={15}
                className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:-translate-x-0.5"
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Back to Services
              </span>
            </Link>
          </motion.div>

          {/* Title & Description */}
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="heading-luxury mb-5"
            >
              {service.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-gradient">
                {service.title.split(' ').slice(-1)}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-textMuted text-lg leading-relaxed"
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="pt-10 pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-display font-bold text-textPrimary mb-2">
              Related <span className="text-gradient">Projects</span>
            </h2>
          </motion.div>

          {projects.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {projects.map((project) => (
                  <motion.a
                    key={project.title}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title}`}
                    variants={cardVariants}
                    layout
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="group flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Image */}
                    <div className={`relative overflow-hidden ${'mobileImages' in project ? 'bg-[#fdfaf2] h-64 flex items-center justify-center' : 'bg-slate-50'}`}>
                      {'mobileImages' in project && project.mobileImages ? (
                        <div className="relative w-full h-full flex items-center justify-center mt-10">
                          {/* Left Phone */}
                          <div className="absolute w-[110px] h-[230px] rounded-[1.5rem] border-[6px] border-slate-900 overflow-hidden shadow-xl -rotate-[15deg] -translate-x-[4.5rem] translate-y-4 bg-white z-0 transition-transform duration-500 group-hover:-rotate-[18deg] group-hover:-translate-x-[5rem]">
                            <Image src={project.mobileImages[0]} alt="Screen 1" fill className="object-cover" />
                          </div>
                          {/* Right Phone */}
                          <div className="absolute w-[110px] h-[230px] rounded-[1.5rem] border-[6px] border-slate-900 overflow-hidden shadow-xl rotate-[15deg] translate-x-[4.5rem] translate-y-4 bg-white z-0 transition-transform duration-500 group-hover:rotate-[18deg] group-hover:translate-x-[5rem]">
                            <Image src={project.mobileImages[2]} alt="Screen 3" fill className="object-cover" />
                          </div>
                          {/* Center Phone */}
                          <div className="absolute w-[130px] h-[270px] rounded-[1.75rem] border-[7px] border-slate-900 overflow-hidden shadow-2xl bg-white z-10 transition-transform duration-500 group-hover:-translate-y-2">
                            {/* Dynamic Island / Notch */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-[12px] bg-slate-900 rounded-full z-20"></div>
                            <Image src={project.mobileImages[1]} alt="Screen 2" fill className="object-cover" />
                          </div>
                        </div>
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={1200}
                          height={800}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-textPrimary shadow-sm opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 z-30">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex flex-col flex-grow p-6">
                      <div className="mb-4">
                        <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-secondary bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-display font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-textMuted text-sm leading-relaxed mb-5 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium text-textMuted px-3 py-1 bg-slate-50 border border-slate-100 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center py-20 rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50/50"
            >
              <div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                <MessageCircle size={28} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-display font-bold text-textPrimary mb-3">
                Projects Coming Soon
              </h3>
              <p className="text-textMuted text-sm max-w-sm leading-relaxed mb-8">
                We&apos;re actively working in this space. Get in touch to be one of our first partners and shape something remarkable together.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30"
              >
                Start a Project
                <ArrowUpRight size={15} />
              </Link>
            </motion.div>
          )}

        </div>
      </section>
    </>
  );
}
