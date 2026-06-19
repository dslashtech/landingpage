'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRICING_TIERS } from '@/lib/constants';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 relative overflow-hidden bg-background">
      

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="heading-luxury mb-6"
          >
            Transparent <span className="text-gradient">Pricing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-textMuted text-lg"
          >
            Invest in a digital asset that pays for itself. No hidden fees, no surprises.
          </motion.p>
        </div>

        {/* Pricing Cards - Using flex for desktop overlapping */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 md:gap-6 max-w-5xl mx-auto isolate pt-6">
          {PRICING_TIERS.map((tier, index) => {
            const priceText = tier.oneTimePrice;
            const isCustom = priceText.toLowerCase() === 'custom';
            const currency = priceText.startsWith('$') ? '$' : '';
            const amount = priceText.startsWith('$') ? priceText.slice(1) : priceText;

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative bg-white flex flex-col w-full max-w-[300px] overflow-hidden ${
                  tier.isPopular 
                    ? 'rounded-[2rem] shadow-2xl shadow-primary/30 z-20 md:scale-[1.08]' 
                    : 'rounded-2xl shadow-xl shadow-slate-200/50 z-10'
                }`}
              >
                {/* Curved Header */}
                <div 
                  className={`pt-10 pb-12 flex flex-col items-center relative z-10 ${
                    tier.isPopular ? 'bg-primary' : 'bg-slate-200'
                  }`}
                  style={{ borderBottomLeftRadius: '50% 20%', borderBottomRightRadius: '50% 20%' }}
                >
                  <span className={`text-sm font-bold uppercase tracking-widest mb-4 ${
                    tier.isPopular ? 'text-white' : 'text-primary'
                  }`}>
                    {tier.name}
                  </span>
                  
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-start mb-1">
                      {currency && (
                        <span className={`text-xl font-bold mt-1 mr-1 ${tier.isPopular ? 'text-white/90' : 'text-primary'}`}>
                          {currency}
                        </span>
                      )}
                      <span className={`text-5xl font-display font-bold ${tier.isPopular ? 'text-white' : 'text-primary'}`}>
                        {amount}
                      </span>
                    </div>
                    {!isCustom && (
                      <span className={`text-xs mt-1 font-medium tracking-wide ${tier.isPopular ? 'text-white/70' : 'text-slate-400'}`}>
                        per month
                      </span>
                    )}
                  </div>
                </div>

                {/* Features & CTA */}
                <div className="px-6 pt-8 pb-8 flex flex-col flex-grow bg-white z-0">
                  <div className="space-y-3 flex-grow flex flex-col items-center text-center">
                    {tier.features.map((feature, i) => (
                      <span key={i} className={`text-sm font-medium transition-colors ${tier.isPopular ? 'text-slate-600' : 'text-slate-500'}`}>
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-8 flex justify-center w-full">
                    <a 
                      href="#contact"
                      className={`w-[85%] py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 text-center flex items-center justify-center ${
                        tier.isPopular 
                          ? 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-primary/30' 
                          : 'bg-transparent text-primary hover:bg-slate-50 border border-slate-200 hover:border-primary/30'
                      }`}
                    >
                      {tier.name === 'Enterprise' ? 'Contact Sales' : 'Select Plan'}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
