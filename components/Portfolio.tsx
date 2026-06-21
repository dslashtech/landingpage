'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO } from '@/lib/constants';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const CATEGORIES = ['All', 'Portfolio', 'Landing Pages', 'Web Apps', 'E-commerce'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = PORTFOLIO.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="pt-24 pb-10 relative overflow-hidden bg-white border-t border-slate-50">
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
              Featured <span className="text-gradient">Work</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.1 }}
              className="text-textMuted text-lg leading-relaxed"
            >
              Explore our recent projects and see how we&apos;ve helped businesses like yours scale and succeed.
            </motion.p>
          </div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-wrap justify-center lg:justify-end gap-2"
          >
            {CATEGORIES.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                    active ? 'text-white' : 'text-textMuted hover:text-textPrimary'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} — ${project.category}`}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="group flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-slate-50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={800}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Arrow */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-textPrimary shadow-sm opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
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
        </div>

      </div>
    </section>
  );
}
