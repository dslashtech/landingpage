'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Background colors for initials circles
const AVATAR_COLORS = [
  '#FF5E00', '#0F0F0F', '#838585', '#FF5E00', '#2A2B2B', '#FF5E00', '#5C5E5E',
];

// Avatar positions for the scattered layout (percentage-based for responsiveness)
const AVATAR_LAYOUT = [
  { left: 5, top: 18, size: 100, ring: true },
  { left: 18, top: 52, size: 110, ring: false },
  { left: 32, top: 12, size: 100, ring: true },
  { left: 45, top: 38, size: 130, ring: false },
  { left: 60, top: 14, size: 105, ring: true },
  { left: 72, top: 50, size: 100, ring: false },
  { left: 84, top: 18, size: 100, ring: true },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section
      id="testimonials"
      className="py-14 relative overflow-hidden bg-white border-t border-slate-50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="heading-luxury mb-4"
          >
            What Our <span className="text-gradient">Customers</span> Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-textMuted text-lg max-w-xl mx-auto leading-relaxed mb-6"
          >
            Real stories from real people! See how our services have transformed their experiences.
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="inline-block px-8 py-3 rounded-full border-2 border-textPrimary text-textPrimary font-bold text-sm hover:bg-textPrimary hover:text-white transition-all duration-300"
          >
            Book Now
          </motion.a>
        </div>

        {/* Scattered Avatars — Desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full hidden md:block"
          style={{ height: '280px' }}
        >
          {TESTIMONIALS.map((testimonial, index) => {
            const layout = AVATAR_LAYOUT[index];
            if (!layout) return null;
            const isActive = activeIndex === index;
            const bgColor = AVATAR_COLORS[index % AVATAR_COLORS.length];

            return (
              <motion.button
                key={testimonial.name}
                onClick={() => setActiveIndex(index)}
                className="absolute group"
                style={{
                  left: `${layout.left}%`,
                  top: `${layout.top}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: isActive ? 20 : 10,
                }}
                animate={{
                  scale: isActive ? 1.1 : 1,
                }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Dotted ring */}
                {layout.ring && (
                  <div
                    className="absolute rounded-full border-2 border-dashed pointer-events-none transition-colors duration-300"
                    style={{
                      width: layout.size + 24,
                      height: layout.size + 24,
                      top: -12,
                      left: -12,
                      borderColor: isActive ? '#FF5E00' : '#d1d5db',
                    }}
                  />
                )}

                {/* Initials Circle */}
                <div
                  className="rounded-full flex items-center justify-center border-4 transition-all duration-500 shadow-lg"
                  style={{
                    width: layout.size,
                    height: layout.size,
                    backgroundColor: bgColor,
                    borderColor: isActive ? '#FF5E00' : '#fff',
                  }}
                >
                  <span
                    className="text-white font-bold font-display select-none"
                    style={{ fontSize: layout.size * 0.32 }}
                  >
                    {testimonial.initials}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Single Avatar — Mobile */}
        <div className="flex flex-col items-center my-8 md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Dotted ring */}
              <div
                className="absolute rounded-full border-2 border-dashed pointer-events-none"
                style={{
                  width: 108,
                  height: 108,
                  top: -10,
                  left: -10,
                  borderColor: '#FF5E00',
                }}
              />
              <div
                className="rounded-full flex items-center justify-center shadow-lg"
                style={{
                  width: 88,
                  height: 88,
                  backgroundColor: AVATAR_COLORS[activeIndex % AVATAR_COLORS.length],
                  borderWidth: '4px',
                  borderColor: '#FF5E00',
                }}
              >
                <span className="text-white font-bold font-display text-2xl select-none">
                  {TESTIMONIALS[activeIndex].initials}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
          <p className="text-textPrimary font-bold text-sm mt-4">{TESTIMONIALS[activeIndex].name}</p>
          <p className="text-textMuted text-xs uppercase tracking-widest">{TESTIMONIALS[activeIndex].role}</p>
        </div>

        {/* Bottom Quote Carousel */}
        <div className="max-w-3xl mx-auto mt-4 md:mt-6">
          <div className="flex items-center gap-6">
            {/* Left Arrow */}
            <button
              onClick={goPrev}
              className="w-11 h-11 shrink-0 rounded-full border border-slate-200 flex items-center justify-center text-textPrimary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Quote Content */}
            <div className="flex-1 text-center min-h-[100px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
                >
                  <p className="text-textPrimary text-base md:text-lg leading-relaxed italic mb-4">
                    &ldquo;{TESTIMONIALS[activeIndex].quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-textPrimary font-bold text-sm">
                      {TESTIMONIALS[activeIndex].name}
                    </p>
                    <p className="text-textMuted text-xs uppercase tracking-widest">
                      {TESTIMONIALS[activeIndex].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Arrow */}
            <button
              onClick={goNext}
              className="w-11 h-11 shrink-0 rounded-full border border-slate-200 flex items-center justify-center text-textPrimary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeIndex === i ? 'w-8 bg-primary' : 'w-3 bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
