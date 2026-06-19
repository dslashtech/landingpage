'use client';

import { motion } from 'framer-motion';
import { 
  Building2, 
  Layers, 
  Box, 
  Activity, 
  Cpu, 
  Database,
  Globe,
  Rocket
} from 'lucide-react';

const LOGOS = [
  { icon: Building2, name: 'SunDrift Luxury Resort' },
  { icon: Layers, name: 'Premium Portfolio UI' },
  { icon: Activity, name: 'Belle Aura Studio' },
  { icon: Cpu, name: 'Smart Cool Technologies' },
  { icon: Database, name: 'Modern Dashboard Design' },
  { icon: Globe, name: 'Elegance Boutique' },
  { icon: Box, name: 'Meera UPVC & Interiors' },
  { icon: Rocket, name: 'CareConnect' },
];

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-slate-100 bg-white relative overflow-hidden">
      {/* Marquee */}
      <div className="relative flex overflow-x-hidden border-t border-slate-100 bg-slate-50/50 py-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />
        
        <div className="animate-marquee whitespace-nowrap flex items-center w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32">
              {LOGOS.map((logo, index) => {
                const Icon = logo.icon;
                return (
                  <div key={index} className="flex items-center gap-3 text-textMuted hover:text-textPrimary transition-colors grayscale hover:grayscale-0 opacity-60 hover:opacity-100">
                    <Icon className="w-8 h-8" />
                    <span className="text-xl font-display font-bold">{logo.name}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
