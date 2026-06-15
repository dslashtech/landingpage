'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      
      {/* Standardized 60px Grid */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" /> */}
      
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-[150px] pointer-events-none rounded-full" /> */}

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Banner Container */}
        <div className="relative w-full rounded-[3rem] bg-primary text-white overflow-hidden shadow-3xl flex flex-col lg:flex-row items-center px-8 md:px-16 py-16 border border-white/10 group min-h-[450px]">
          
          {/* Left Content Column */}
          <div className="relative z-10 flex flex-col items-start text-left w-full lg:w-[65%]">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold font-display mb-6 text-white leading-[1.1]"
            >
              Let's Get In Touch.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
            >
              Ready to transform your digital presence? We're here to help you scale your business with full-stack excellence and pixel-perfect design.
            </motion.p>
            
            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full lg:w-auto">
              {/* Primary Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="#contact"
                  className="group/btn relative inline-flex h-16 w-full sm:w-auto items-center justify-between rounded-full bg-black pl-10 pr-3 py-3 font-bold text-white transition-all hover:scale-[1.05] shadow-2xl active:scale-95 border border-white/5"
                >
                  <span className="text-base tracking-tight mr-10 whitespace-nowrap">
                    Book a discovery call
                  </span>
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center transition-all group-hover/btn:bg-white/40 backdrop-blur-md">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </Link>
              </motion.div>
              
              {/* Secondary Button */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="#portfolio"
                  className="group/btn relative inline-flex h-16 w-full sm:w-auto items-center justify-between rounded-full bg-black pl-10 pr-3 py-3 font-bold text-white transition-all hover:scale-[1.05] shadow-2xl active:scale-95 border border-white/5"
                >
                  <span className="text-base tracking-tight mr-10 whitespace-nowrap">
                    Explore our projects
                  </span>
                  <div className="w-12 h-12 rounded-full bg-slate-400/20 flex items-center justify-center transition-all group-hover/btn:bg-white/40 backdrop-blur-md">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-white/60 to-white/10 shadow-inner" />
                  </div>
                </Link>
              </motion.div> */}
            </div>
          </div>

          {/* Right Content Column (Ripple 'Half Orbs') */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] pointer-events-none flex items-center justify-center overflow-visible">
            {/* Outer large orb */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute w-full h-full rounded-full bg-white/[0.03] border border-white/5" 
            />
            {/* Middle larger orb */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="absolute w-[80%] h-[80%] rounded-full bg-white/[0.05] border border-white/10" 
            />
            {/* Middle orb */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute w-[60%] h-[60%] rounded-full bg-white/[0.08] border border-white/15 shadow-[-20px_0_40px_rgba(0,0,0,0.05)]" 
            />
            {/* Inner orb */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute w-[40%] h-[40%] rounded-full bg-white/[0.12] border border-white/20 shadow-[-30px_0_60px_rgba(0,0,0,0.1)]" 
            />
            {/* Core orb */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute w-[20%] h-[20%] rounded-full bg-white/40 shadow-[-40px_0_80px_rgba(255,255,255,0.2)]" 
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
