'use client';

import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '@/lib/constants';

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50 relative border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-8 md:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="heading-luxury mb-4"
          >
            How We Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-textMuted text-lg max-w-2xl"
          >
            A streamlined, transparent process designed to move fast without compromising quality.
          </motion.p>
        </div>

        {/* Timeline Desktop (Wavy layout) */}
        <div className="hidden md:block pb-12">
          <div className="relative w-full h-[400px]">
            {/* The SVG Track */}
            <motion.svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 1000 100" 
              preserveAspectRatio="none"
              initial={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
              whileInView={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
            >
              {/* Segment 1: 01 to 02 */}
              <path d="M 100 25 C 200 25, 200 75, 300 75" className="stroke-primary/30" strokeWidth="2" strokeDasharray="10 10" vectorEffect="non-scaling-stroke" fill="transparent" />
              {/* Segment 2: 02 to 03 */}
              <path d="M 300 75 C 400 75, 400 25, 500 25" className="stroke-primary/30" strokeWidth="2" strokeDasharray="10 10" vectorEffect="non-scaling-stroke" fill="transparent" />
              {/* Segment 3: 03 to 04 */}
              <path d="M 500 25 C 600 25, 600 75, 700 75" className="stroke-primary/30" strokeWidth="2" strokeDasharray="10 10" vectorEffect="non-scaling-stroke" fill="transparent" />
              {/* Segment 4: 04 to 05 */}
              <path d="M 700 75 C 800 75, 800 25, 900 25" className="stroke-primary/30" strokeWidth="2" strokeDasharray="10 10" vectorEffect="non-scaling-stroke" fill="transparent" />
            </motion.svg>

            <div className="grid grid-cols-5 h-full relative z-10 w-full">
              {PROCESS_STEPS.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div 
                    key={step.title}
                    initial={{ opacity: 0, y: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
                    className="flex flex-col relative z-10 w-full h-full items-center"
                  >
                    {isEven ? (
                      <>
                        {/* Top Icon (Even) */}
                        <div className="h-[200px] shrink-0 flex flex-col justify-center w-full items-center">
                          <div className="w-20 h-20 rounded-full border-4 border-primary bg-white text-primary flex items-center justify-center relative shadow-lg">
                            {step.icon ? <step.icon className="w-8 h-8" /> : <span className="text-xl font-bold">0{index + 1}</span>}
                          </div>
                        </div>
                        {/* Bottom Text */}
                        <div className="h-[200px] shrink-0 flex flex-col justify-start pt-6 text-center px-4 w-full">
                          <h3 className="text-xl font-bold text-textPrimary mb-2 font-display">
                            <span className="text-primary mr-2">0{index + 1}</span>
                            {step.title}
                          </h3>
                          <p className="text-textMuted text-sm">{step.description}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Top Text (Odd) */}
                        <div className="h-[200px] shrink-0 flex flex-col justify-end pb-6 text-center px-4 w-full">
                          <h3 className="text-xl font-bold text-textPrimary mb-2 font-display">
                            <span className="text-primary mr-2">0{index + 1}</span>
                            {step.title}
                          </h3>
                          <p className="text-textMuted text-sm">{step.description}</p>
                        </div>
                        {/* Bottom Icon */}
                        <div className="h-[200px] shrink-0 flex flex-col justify-center w-full items-center">
                          <div className="w-20 h-20 rounded-full border-4 border-primary bg-white text-primary flex items-center justify-center relative shadow-lg">
                            {step.icon ? <step.icon className="w-8 h-8" /> : <span className="text-xl font-bold">0{index + 1}</span>}
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Timeline Mobile */}
        <div className="md:hidden relative">
          {/* Vertical Line */}
          <div className="absolute top-12 left-[39px] w-[2px] h-[calc(100%-100px)] bg-transparent z-0 border-l-[2px] border-dashed border-primary/30" />
          
          <div className="flex flex-col gap-12 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex items-start"
              >
                {/* Icon */}
                <div className="w-[80px] h-[80px] min-w-[80px] rounded-full border-4 border-primary bg-white text-primary flex items-center justify-center shadow-md relative z-10">
                  {step.icon ? <step.icon className="w-8 h-8" /> : <span className="font-bold text-xl">0{index + 1}</span>}
                </div>
                {/* Text */}
                <div className="ml-6 pt-2">
                  <h3 className="text-xl font-bold text-textPrimary mb-2 font-display">
                    <span className="text-primary mr-2">0{index + 1}</span>
                    {step.title}
                  </h3>
                  <p className="text-textMuted text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
