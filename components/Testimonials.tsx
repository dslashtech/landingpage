'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/constants';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Word Reveal Component for the Cinematic Text Effect
const WordReveal = ({ text }: { text: string }) => {
  const words = text.split(' ');
  return (
    <div className="flex flex-wrap gap-x-[0.2em] gap-y-[0.1em]">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1">
          <motion.span
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.03,
              ease: [0.2, 0.65, 0.3, 0.9],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Auto-cycle effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Bezier positioning for the orbit
  const getPosition = (index: number) => {
    const total = TESTIMONIALS.length;
    const t = index / (total - 1);
    const P0 = { x: 40, y: 40 };
    const P1 = { x: 140, y: 200 };
    const P2 = { x: 40, y: 360 };
    
    // Quadratic Bézier formula
    const x = Math.pow(1 - t, 2) * P0.x + 2 * (1 - t) * t * P1.x + Math.pow(t, 2) * P2.x;
    const y = Math.pow(1 - t, 2) * P0.y + 2 * (1 - t) * t * P1.y + Math.pow(t, 2) * P2.y;
    
    // Center the avatar (w-14 = 56px) exactly on the path (x, y)
    return { x: x - 28, y: y - 28 };
  };

  return (
    <section 
      ref={sectionRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="py-16 relative overflow-hidden bg-white"
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-textPrimary tracking-tight"
          >
            What Our <span className="text-primary">Clients</span> Say
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto mt-16">
          
          <div className="hidden lg:block lg:col-span-4 relative h-[400px]">
            <svg 
              viewBox="0 0 200 400" 
              className="absolute left-0 h-full w-[200px] pointer-events-none"
              style={{ zIndex: 0 }}
              fill="none"
            >
              <motion.path 
                d="M 40 40 Q 140 200 40 360" 
                stroke="url(#arc-gradient)" 
                strokeWidth="2" 
                strokeDasharray="4 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="arc-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF5E00" stopOpacity="0" />
                  <stop offset="50%" stopColor="#FF5E00" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#FF5E00" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute inset-0" style={{ zIndex: 10 }}>
              {TESTIMONIALS.map((testimonial, index) => {
                const { x, y } = getPosition(index);
                const isActive = activeIndex === index;

                return (
                  <motion.button
                    key={testimonial.name}
                    initial={false}
                    animate={{ 
                      x: x, 
                      y: y,
                      scale: isActive ? 1.2 : 0.8,
                      zIndex: isActive ? 40 : 20
                    }}
                    whileHover={{ scale: isActive ? 1.2 : 0.9 }}
                    onClick={() => setActiveIndex(index)}
                    className="absolute top-0 left-0 group"
                  >
                    <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full p-1 transition-all duration-500 bg-white shadow-lg ${isActive ? 'ring-2 ring-primary/20' : ''}`}>
                      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-100 bg-white">
                        <Image 
                          src={testimonial.avatar || ''} 
                          alt={testimonial.name}
                          fill
                          className={`object-cover transition-all duration-500 ${isActive ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale uppercase'}`}
                        />
                      </div>
                    </div>

                    <div className={`absolute left-full ml-4 top-1/2 -translate-y-1/2 transition-all duration-300 pointer-events-none ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                      <p className="text-textPrimary font-bold whitespace-nowrap">{testimonial.name}</p>
                      <div className="flex text-secondary gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-[10px] font-bold">{testimonial.rating}</span>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right: Immersive Showcase (9 columns) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              {/* Quote Block */}
              <div className="order-2 md:order-1 relative">
                <Quote className="w-24 h-24 text-primary/10 absolute -top-12 -left-8 pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                  >
                    <div className="text-2xl md:text-3xl font-serif text-textPrimary leading-[1.2] italic mb-6">
                      <WordReveal text={TESTIMONIALS[activeIndex].quote} />
                    </div>

                    <div className="space-y-4">
                      <div className="h-0.5 w-10 bg-gradient-to-r from-primary to-secondary" />
                      <div>
                        <h3 className="text-xl font-display font-bold text-textPrimary tracking-tight">
                          {TESTIMONIALS[activeIndex].name}
                        </h3>
                        <p className="text-textMuted font-sans font-medium uppercase tracking-[0.2em] text-[10px] mt-0.5">
                          {TESTIMONIALS[activeIndex].role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex gap-4 mt-8">
                  <button 
                    onClick={() => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                    className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-textPrimary hover:bg-primary hover:text-white transition-all shadow-sm"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
                    className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-textPrimary hover:bg-primary hover:text-white transition-all shadow-sm"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Large Portrait Showcase */}
              <div className="order-1 md:order-2 relative aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-[80px] scale-90 translate-x-4 translate-y-4" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white group"
                  >
                    <Image 
                      src={TESTIMONIALS[activeIndex].avatar || ''} 
                      alt={TESTIMONIALS[activeIndex].name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  </motion.div>
                </AnimatePresence>
                
                {/* Mobile Pagination Dots */}
                <div className="flex gap-2 justify-center mt-6 lg:hidden">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${activeIndex === i ? 'w-8 bg-primary' : 'bg-slate-200'}`}
                    />
                  ))}
                </div>
                
                {/* Float Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 glass-card p-6 shadow-2xl hidden lg:block z-20"
                >
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(TESTIMONIALS[activeIndex].rating) ? 'fill-secondary text-secondary' : 'text-slate-200'}`} />
                    ))}
                  </div>
                  <p className="text-textPrimary font-bold">Verified User</p>
                  <p className="text-textMuted text-xs uppercase tracking-wider">{TESTIMONIALS[activeIndex].date}</p>
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
