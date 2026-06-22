import Link from 'next/link';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 pt-24 pb-8 border-t border-slate-200 relative overflow-hidden">
      
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block text-3xl font-display font-bold tracking-tighter mb-6">
              <span className="text-primary">D</span>
              <span className="text-textPrimary">slash</span>
            </Link>
            <p className="text-textMuted max-w-sm mb-8 leading-relaxed">
              We design and build high-converting landing pages and custom software tailored to scale your operations rapidly.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Github, href: '#' },
                { icon: Instagram, href: '#' },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={i} 
                    href={social.href} 
                    className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-textMuted hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-sm"
                    aria-label="Social Link"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-textPrimary font-display font-bold mb-6 tracking-wider text-sm uppercase">Services</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-textMuted hover:text-primary transition-colors text-sm">Landing Pages</Link></li>
              <li><Link href="#" className="text-textMuted hover:text-primary transition-colors text-sm">Custom Software</Link></li>
              <li><Link href="#" className="text-textMuted hover:text-primary transition-colors text-sm">UI/UX Design</Link></li>
              <li><Link href="#" className="text-textMuted hover:text-primary transition-colors text-sm">Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-textPrimary font-display font-bold mb-6 tracking-wider text-sm uppercase">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-textMuted hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="#" className="text-textMuted hover:text-primary transition-colors text-sm">Careers</Link></li>
              <li><Link href="/portfolio" className="text-textMuted hover:text-primary transition-colors text-sm">Portfolio</Link></li>
              <li><Link href="#" className="text-textMuted hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-textPrimary font-display font-bold mb-6 tracking-wider text-sm uppercase">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-textMuted hover:text-primary transition-colors text-sm">Blog</Link></li>
              <li><Link href="#" className="text-textMuted hover:text-primary transition-colors text-sm">Help Center</Link></li>
              <li><Link href="#" className="text-textMuted hover:text-primary transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="#" className="text-textMuted hover:text-primary transition-colors text-sm">Webinars</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-textMuted text-sm">
            &copy; {currentYear} Dslash. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-textMuted hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-textMuted hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
