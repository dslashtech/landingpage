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
  { icon: Building2, name: 'Apex Corp' },
  { icon: Layers, name: 'Synthex' },
  { icon: Activity, name: 'Pulse.io' },
  { icon: Cpu, name: 'NeuralNet' },
  { icon: Database, name: 'DataFlow' },
  { icon: Globe, name: 'GlobalSync' },
  { icon: Box, name: 'BlockBase' },
  { icon: Rocket, name: 'AeroLaunch' },
];

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-slate-100 bg-white relative overflow-hidden">
      {/* Standardized 60px Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,15,15,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,15,15,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />


      {/* Marquee */}
      <div className="relative flex overflow-x-hidden border-t border-slate-100 bg-slate-50/50 py-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />
        
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-32 px-8">
          {[...LOGOS, ...LOGOS].map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div key={index} className="flex items-center gap-3 text-textMuted hover:text-textPrimary transition-colors grayscale hover:grayscale-0 opacity-60 hover:opacity-100">
                <Icon className="w-8 h-8" />
                <span className="text-xl font-display font-bold">{logo.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
