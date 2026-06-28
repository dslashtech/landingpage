'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, MessageCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
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

const GRAPHIC_POSTERS = [
  "1 (1).jpg", "1 (1).png", "1 (13).jpg", "1 (14).jpg", "1 (15).jpg",
  "1 (16).jpg", "1 (17).jpg", "1 (18).jpg", "1 (19).jpg", "1 (20).jpg",
  "1 (21).jpg", "1 (22).jpg", "1 (23).jpg", "1 (24).jpg", "1 (25).jpg",
  "1 (26).jpg", "1 (27).jpg", "1 (28).jpg", "1 (29).jpg", "1 (30).jpg",
  "1 (31).jpg", "1 (32).jpg", "1 (33).jpg", "1 (34).jpg", "1 (35).jpg"
];

export default function ServicePageClient({ serviceId }: Props) {
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  const showNext = useCallback(() => {
    if (!selectedPoster) return;
    const index = GRAPHIC_POSTERS.indexOf(selectedPoster);
    setSelectedPoster(GRAPHIC_POSTERS[(index + 1) % GRAPHIC_POSTERS.length]);
  }, [selectedPoster]);

  const showPrev = useCallback(() => {
    if (!selectedPoster) return;
    const index = GRAPHIC_POSTERS.indexOf(selectedPoster);
    setSelectedPoster(GRAPHIC_POSTERS[(index - 1 + GRAPHIC_POSTERS.length) % GRAPHIC_POSTERS.length]);
  }, [selectedPoster]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPoster(null);
      }
      if (e.key === 'ArrowRight') {
        showNext();
      }
      if (e.key === 'ArrowLeft') {
        showPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showNext, showPrev]);

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

          {serviceId === 'design' ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
              {GRAPHIC_POSTERS.map((poster, index) => (
                <motion.div
                  key={poster}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="break-inside-avoid inline-block w-full mb-6 relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300 border border-slate-100 bg-slate-50 cursor-pointer"
                  onClick={() => setSelectedPoster(poster)}
                >
                  <Image
                    src={`/projects/graphics_designs/${poster}`}
                    alt={`Graphic Design Poster ${index + 1}`}
                    width={800}
                    height={1000}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                </motion.div>
              ))}
            </div>
          ) : projects.length > 0 ? (
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
                    <div className={`relative overflow-hidden ${'mobileImages' in project ? 'bg-[#fdfaf2] h-72 flex items-center justify-center' : `bg-slate-50 border-b border-slate-100 ${project.category.includes('Resume') ? 'aspect-[4/3]' : ''}`}`}>
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
                      ) : project.category.includes('Resume') ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setSelectedPoster(null)}
          >
            <div className="absolute top-6 right-6 z-[110]">
              <button
                onClick={() => setSelectedPoster(null)}
                className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors duration-200"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Desktop Prev Button */}
            <button
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              className="hidden sm:flex absolute left-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors duration-200 z-[110]"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Desktop Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="hidden sm:flex absolute right-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors duration-200 z-[110]"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[75vh] sm:max-h-[90vh] max-w-[95vw] sm:max-w-[90vw] flex items-center justify-center mb-16 sm:mb-0"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/projects/graphics_designs/${selectedPoster}`}
                alt="Selected Poster"
                width={1600}
                height={2000}
                className="w-auto h-auto max-w-full max-h-[75vh] sm:max-h-[90vh] object-contain rounded-xl shadow-2xl"
                priority
              />
            </motion.div>

            {/* Mobile Navigation (Bottom Center) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 sm:hidden z-[110]">
              <button onClick={(e) => { e.stopPropagation(); showPrev(); }} className="p-3 bg-white/10 active:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors" aria-label="Previous image">
                <ChevronLeft size={28} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); showNext(); }} className="p-3 bg-white/10 active:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors" aria-label="Next image">
                <ChevronRight size={28} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
