'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '@/lib/constants';
import { Search, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import FAQsImage from '@/public/FAQs.png';
import dynamic from "next/dynamic";

const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false },
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = FAQS.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-12 relative bg-background overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Content & FAQs */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl text-textPrimary font-display font-bold leading-tight mb-6"
            >
              Frequently Asked Questions
            </motion.h2>

            {/* Search Input */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative mb-6"
            >
              <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
                <Search className="w-5 h-5 text-slate-400" />
              </div>
              <input 
                type="text"
                placeholder="Search question here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 text-slate-700 placeholder:text-slate-400 py-3.5 pl-6 pr-14 rounded-full border border-slate-100 focus:border-primary/20 focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all outline-none italic"
              />
            </motion.div>

            {/* Accordion List */}
            <div className="space-y-0">
              <AnimatePresence mode="popLayout">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    
                    return (
                      <motion.div
                        key={faq.question}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className={`border-b border-slate-200 overflow-hidden ${index === 0 ? 'border-t' : ''}`}
                      >
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
                        >
                          <span className={`text-lg font-bold font-display leading-snug transition-colors duration-300 pr-6 ${isOpen ? 'text-textPrimary' : 'text-slate-800 group-hover:text-primary'}`}>
                            {faq.question}
                          </span>
                          <div className={`shrink-0 transition-all duration-300 ${isOpen ? 'text-slate-300' : 'text-slate-300 group-hover:text-primary'}`}>
                            {isOpen ? <Minus size={20} strokeWidth={2.5} /> : <Plus size={20} strokeWidth={2.5} />}
                          </div>
                        </button>
                        
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                              <div className="pb-5 text-textMuted text-base leading-relaxed">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-12 text-center"
                  >
                    <p className="text-textMuted text-lg">No questions found matching your search.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Illustration */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:pl-10">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full flex-grow flex flex-col items-center lg:items-start"
                      >
                        {/* Lottie Animation */}
                        <div className="w-full max-w-[600px] lg:max-w-none pointer-events-none scale-[3.0] md:scale-[3.8] transform-gpu origin-center lg:translate-y-[200px] mb-[240px] ml-[100px]">
                          <DotLottieReact src="/FAQ.lottie" autoplay loop />
                        </div>
                      </motion.div>
                    </div>

        </div>
      </div>
    </section>
  );
}
