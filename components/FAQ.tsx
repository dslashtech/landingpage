'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '@/lib/constants';
import { Search, ChevronDown } from 'lucide-react';
import dynamic from 'next/dynamic';

const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
  { ssr: false },
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section className="py-16 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">

          {/* Left: Header + Search + Accordion */}
          <div>
            {/* Section Header */}
            <div className="mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                className="heading-luxury mb-4 !text-4xl md:!text-5xl lg:!text-6xl xl:whitespace-nowrap"
              >
                Frequently Asked <span className="text-gradient">Questions</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: 0.2 }}
                className="text-textMuted text-lg max-w-2xl"
              >
                Everything you need to know before we start building together.
              </motion.p>
            </div>
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative mb-6 group"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search question here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 text-slate-700 placeholder:text-slate-400 py-3.5 pl-11 pr-5 rounded-full border border-slate-200 focus:border-primary/30 focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all outline-none text-sm italic"
              />
            </motion.div>

            {/* Accordion */}
            <div className="space-y-2">
              <AnimatePresence mode="popLayout">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                      <motion.div
                        key={faq.question}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.25, delay: index * 0.04 }}
                        className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                          isOpen
                            ? 'border-primary/20 bg-primary/5'
                            : 'border-slate-100 bg-white hover:border-slate-200'
                        }`}
                      >
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full flex items-center gap-3 px-5 py-4 text-left focus:outline-none"
                        >
                          <span
                            className={`shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                              isOpen ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'
                            }`}
                          >
                            {String(index + 1).padStart(2, '0')}
                          </span>

                          <span
                            className={`flex-1 text-base font-bold font-display leading-snug transition-colors duration-300 ${
                              isOpen ? 'text-textPrimary' : 'text-slate-800'
                            }`}
                          >
                            {faq.question}
                          </span>

                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`shrink-0 transition-colors duration-300 ${
                              isOpen ? 'text-primary' : 'text-slate-300'
                            }`}
                          >
                            <ChevronDown size={18} strokeWidth={2.5} />
                          </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                              <div className="px-5 pb-4 pl-14 text-textMuted text-sm leading-relaxed">
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
                    className="py-10 text-center"
                  >
                    <p className="text-textMuted text-base">No questions found matching your search.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Lottie */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block w-full"
            style={{ height: '560px' }}
          >
            <DotLottieReact
              src="/faq_orange.json"
              autoplay
              loop
              style={{ width: '100%', height: '560px' }}
            />
          </motion.div>

        </div>

        {/* CTA below grid */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-sm text-textMuted"
        >
          Still have questions?{' '}
          <a href="#contact" className="text-primary font-semibold hover:underline">
            Reach out to us →
          </a>
        </motion.p>

      </div>
    </section>
  );
}
