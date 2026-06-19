"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ArrowRight, Star, Check, HelpCircle, Mail, Phone, MapPin, Building2, Layers, Box, Activity, Cpu, Database, Globe, Rocket } from "lucide-react";
import { PORTFOLIO, TESTIMONIALS, PROCESS_STEPS, FAQS, PRICING_TIERS, NAV_LINKS } from "@/lib/constants";

const words = ["Build.", "Launch.", "Grow.", "Scale."];
const LOGO_ICONS = [Building2, Layers, Box, Activity, Cpu, Database, Globe, Rocket];
const BRAND_NAMES = ["Apex Corp", "Synthex", "Pulse.io", "NeuralNet", "DataFlow", "GlobalSync", "BlockBase", "AeroLaunch"];

function MiniLanding({ isMobile = false }) {
  const sections = (
    <div className="ms-scroll-content">
      {/* 1. Hero */}
      <section className="ms-section ms-hero-mini">
        <div className="ms-pill">STRATEGIC DIGITAL AGENCY</div>
        <h4 className="ms-h1">WE HELP YOU<br /><span style={{color: 'var(--purple)'}}>SCALE FAST</span></h4>
        <p className="ms-p-mini">Premium digital solutions for modern founders.</p>
        <div className="ms-btn">Start Project</div>
      </section>

      {/* 2. Brands (Social Proof) */}
      <div className="ms-brands-mini">
        <div className="ms-brands-track">
          {BRAND_NAMES.map((name, i) => {
            const Icon = LOGO_ICONS[i % LOGO_ICONS.length];
            return (
              <div key={i} className="ms-brand-item">
                <Icon size={8} className="ms-brand-icon" />
                <span className="ms-brand-name">{name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Portfolio */}
      <section className="ms-section">
        <div className="ms-label">FEATURED PROJECTS</div>
        <div className="ms-grid">
          {PORTFOLIO.slice(0, 4).map((project, i) => (
            <div key={i} className="ms-project-card">
              <div className="ms-project-img" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover' }}>
                 <div className="ms-project-overlay" />
              </div>
              <div className="ms-project-info">
                <div className="ms-project-title">{project.title}</div>
                <div className="ms-project-cat">{project.category}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Testimonials */}
      <section className="ms-section ms-bg-alt">
        <div className="ms-label">HAPPY CLIENTS</div>
        <div className="ms-testimonials-list">
          {TESTIMONIALS.slice(0, 2).map((t, i) => (
            <div key={i} className="ms-review-card">
              <div className="ms-review-stars">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={6} fill="currentColor" />)}
              </div>
              <p className="ms-review-text">"{t.quote.substring(0, 60)}..."</p>
              <div className="ms-review-user">
                <div className="ms-avatar-mini">{t.initials}</div>
                <div>
                  <div className="ms-user-name">{t.name}</div>
                  <div className="ms-user-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Process */}
      <section className="ms-section">
        <div className="ms-label">OUR PROCESS</div>
        <div className="ms-process-mini">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="ms-p-item">
              <div className="ms-p-dot">{i + 1}</div>
              <div className="ms-p-text">
                <div className="ms-p-title">{step.title}</div>
                <div className="ms-p-line" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Pricing */}
      <section className="ms-section ms-bg-alt">
        <div className="ms-label">PRICING PLANS</div>
        <div className="ms-pricing-mini">
          {PRICING_TIERS.map((tier, i) => (
            <div key={i} className={`ms-p-card ${tier.isPopular ? 'ms-p-popular' : ''}`}>
              <div className="ms-p-name">{tier.name}</div>
              <div className="ms-p-price">{tier.oneTimePrice}</div>
              <div className="ms-p-btn">Select</div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="ms-section">
        <div className="ms-label">FAQ</div>
        <div className="ms-faq-list">
          {FAQS.slice(0, 3).map((f, i) => (
            <div key={i} className="ms-faq-mini">
              <div className="ms-faq-q">
                 <HelpCircle size={8} />
                 {f.question.substring(0, 30)}...
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA Banner */}
      <section className="ms-cta-mini">
        <div className="ms-h2">READY TO<br />LAUNCH?</div>
        <div className="ms-btn-white">Get Started</div>
      </section>

      {/* 9. Contact */}
      <section className="ms-section">
        <div className="ms-label">GET IN TOUCH</div>
        <div className="ms-form-mini">
          <div className="ms-in" />
          <div className="ms-in" />
          <div className="ms-in" style={{height: '30px'}} />
          <div className="ms-btn">Send Message</div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="ms-footer-mini">
        <div className="ms-f-top">
          <div className="ms-f-logo">D</div>
          <div className="ms-f-links">
            <div className="ms-l-dot" />
            <div className="ms-l-dot" />
            <div className="ms-l-dot" />
          </div>
        </div>
        <div className="ms-copyright">© 2026 Dslash</div>
      </footer>
    </div>
  );

  return (
    <div className={`mini-landing ${isMobile ? 'mini-mobile' : 'mini-desktop'}`}>
      <div className="mini-header">
        <div className="mini-logo">D</div>
        {isMobile ? (
          <div className="mini-burger">
            <div />
            <div />
          </div>
        ) : (
          <div className="mini-nav">
            {NAV_LINKS.map(link => (
              <span key={link.label} className="mini-link">{link.label}</span>
            ))}
            <div className="mini-btn-small">Get Quote</div>
          </div>
        )}
      </div>
      <div className="ms-viewport">
        {sections}
        {sections} {/* Duplicate for seamless loop */}
      </div>
    </div>
  );
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 280);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);


  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --bg: #FFFFFF;
          --border: #DEDFE0;
          --border2: #DEDFE0;
          --text: #0F0F0F;
          --muted: #838585;
          --accent: #FF5E00;
          --purple: #FF5E00;
          --cyan: #FF5E00;
          --green: #FF5E00;
          --mono: 'JetBrains Mono', monospace;
        }

        /* cursor glow */
        .cg {
          pointer-events: none;
          position: fixed;
          width: 800px;
          height: 800px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 94, 0, 0.04) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          z-index: 0;
          transition: left .1s, top .1s;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          pointer-events: none;
          z-index: 1;
        }
        .ba { width: 600px; height: 600px; background: rgba(255, 94, 0, 0.03); top: -140px; right: 60px; }
        .bb { width: 360px; height: 360px; background: rgba(255, 94, 0, 0.025); bottom: -80px; left: -100px; }
        .bc { width: 240px; height: 240px; background: rgba(255, 94, 0, 0.02); top: 42%; left: 40%; }

        /* wrap */
        .hw {
          min-height: 100vh;
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', sans-serif;
        }

        /* grid */
        .hg {
          position: relative;
          z-index: 5;
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1380px;
          margin: 0 auto;
          width: 100%;
          padding: 0 64px;
        }

        /* left content */
        .hl {
          padding: 80px 0 64px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          animation: fu .7s ease both;
        }
        .ey {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 32px;
          background: rgba(255, 94, 0, 0.06);
          padding: 8px 16px;
          border-radius: 40px;
          width: fit-content;
          border: 1px solid rgba(255, 94, 0, 0.1);
        }
        .ed {
          width: 8px;
          height: 8px;
          background: var(--accent);
          border-radius: 50%;
          box-shadow: 0 0 12px var(--accent);
          animation: p 2s infinite;
        }
        @keyframes p { 0%, 100% { opacity: .5 } 50% { opacity: 1 } }
        .et {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--purple);
        }

        .h1 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(60px, 8vw, 110px);
          line-height: .9;
          letter-spacing: -2px;
          margin-bottom: 24px;
        }
        .h1d { display: block; color: var(--muted); }

        .hp {
          font-size: 18px;
          line-height: 1.6;
          color: var(--muted);
          max-width: 540px;
          margin-bottom: 40px;
        }

        /* right scene */
        .hr {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fu .7s ease .2s both;
        }
        .scene {
          position: relative;
          width: 560px;
          height: 420px;
        }

        /* monitor */
        .monitor {
          position: absolute;
          top: 0;
          left: 0;
          width: 520px;
          height: 340px;
          background: #F4F5F5;
          border: 1px solid var(--border2);
          border-radius: 16px;
          box-shadow: 0 40px 100px rgba(0,0,0,0.06);
          overflow: hidden;
          z-index: 2;
        }
        .mon-bar {
          height: 34px;
          background: #fff;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          padding: 0 16px;
          gap: 8px;
        }
        .mdot { width: 8px; height: 8px; border-radius: 50%; }
        .mon-url {
          margin: 0 auto;
          background: #DEDFE0;
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 10px;
          color: var(--muted);
          font-family: var(--mono);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .mon-screen {
          height: calc(100% - 34px);
          padding: 16px;
          overflow: hidden;
          background: #fff;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .ms-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .ms-stat {
          background: #F4F5F5;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid var(--border);
        }
        .mss-l {
          font-size: 10px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          font-weight: 700;
        }
        .mss-v {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          line-height: 1;
        }
        .mss-d { font-size: 10px; color: var(--accent); font-weight: 700; margin-top: 4px; }

        .ms-chart {
          flex: 1;
          background: #F4F5F5;
          border-radius: 12px;
          padding: 20px;
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
        }
        .msc-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .msc-title { font-size: 12px; font-weight: 700; color: var(--text); }
        .msc-badge {
          font-size: 9px;
          background: rgba(255, 94, 0, 0.1);
          color: var(--accent);
          padding: 4px 8px;
          border-radius: 4px;
          font-weight: 700;
        }
        .mbars {
          flex: 1;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 8px;
          padding-top: 10px;
        }
        .mbw { flex: 1; display: flex; flex-direction: column; justify-content: flex-end; gap: 8px; }
        .mb {
          border-radius: 4px 4px 0 0;
          width: 100%;
          transition: height .6s ease;
          animation: gf 1s ease both;
        }
        @keyframes gf { from { transform: scaleY(0); transform-origin: bottom; } to { transform: scaleY(1); } }
        .mbl { font-size: 8px; color: var(--muted); text-align: center; font-weight: 600; }

        /* phone */
        .phone {
          position: absolute;
          bottom: 40px;
          right: 20px;
          width: 190px;
          height: 380px;
          background: #F4F5F5;
          border: 8px solid #0F0F0F;
          border-radius: 32px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          overflow: hidden;
          z-index: 3;
        }
        .ph-top { height: 24px; background: #0F0F0F; display: flex; justify-content: center; align-items: center; }
        .notch { width: 60px; height: 12px; background: #000; border-radius: 0 0 10px 10px; }
        .ph-screen { height: calc(100% - 24px); background: #fff; padding: 20px; display: flex; flex-direction: column; gap: 16px; }

        /* floating badges */
        .fb {
          position: absolute;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 12px 16px;
          border-radius: 16px;
          border: 1px solid var(--border2);
          box-shadow: 0 20px 40px rgba(0,0,0,0.04);
          white-space: nowrap;
          z-index: 4;
          display: flex;
          flex-direction: column;
          gap: 4px;
          animation: fu .7s ease .4s both;
        }
        
        .fb-live { top: 40px; right: -30px; }
        .fbl-row { display: flex; align-items: center; gap: 12px; }
        .fbl-dot { width: 6px; height: 6px; background: #FF5E00; border-radius: 50%; }
        .fbl-val { font-family: 'Bebas Neue', sans-serif; font-size: 24px; color: var(--text); line-height: 1; }
        .fbl-sub { font-size: 10px; color: var(--muted); font-weight: 700; text-transform: uppercase; }

        .fb-rating { bottom: 80px; left: -60px; animation-delay: .5s; }
        .fbr-stars { color: #FF5E00; font-size: 12px; margin-bottom: 4px; }
        .fbr-val { font-size: 16px; font-weight: 800; color: var(--text); line-height: 1; }
        .fbr-sub { font-size: 9px; color: var(--muted); font-weight: 700; margin-top: 2px; }

        .fb-conv { bottom: 40px; right: 180px; animation-delay: .6s; }
        .fbc-icon { font-size: 14px; margin-bottom: 4px; }
        .fbc-val { font-family: 'Bebas Neue', sans-serif; font-size: 22px; color: var(--purple); line-height: 1; }
        .fbc-lbl { font-size: 9px; color: var(--muted); letter-spacing: 1px; text-transform: uppercase; font-weight: 700; }

        /* buttons */
        .ha { display: flex; gap: 16px; margin-top: 8px; margin-bottom: 40px; }
        .bp {
          background: var(--purple);
          color: #fff;
          border: none;
          padding: 16px 32px;
          border-radius: 12px;
          font-family: inherit;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          text-decoration: none;
          transition: transform .2s, box-shadow .2s;
        }
        .bp:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(255, 94, 0, 0.25); }
        .bg2 {
          background: #fff;
          color: var(--text);
          border: 1px solid var(--border2);
          padding: 16px 32px;
          border-radius: 12px;
          font-family: inherit;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background .2s, border-color .2s;
        }
        .bg2:hover { background: #F4F5F5; border-color: var(--purple); }

        /* trust */
        .tr { display: flex; align-items: center; gap: 16px; }
        .ta { display: flex; margin-left: 12px; }
        .av {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 3px solid #fff;
          margin-left: -12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 800;
          cursor: default;
          color: #fff;
        }
        .tt { font-size: 14px; line-height: 1.4; color: var(--muted); font-weight: 500; }
        .tt strong { color: var(--text); font-weight: 700; }

        /* pills */
        .sp { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 32px; }
        .pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: #F4F5F5;
          border: 1px solid var(--border);
          border-radius: 30px;
          font-size: 12px;
          font-weight: 600;
          color: var(--text);
        }
        .pdot { width: 6px; height: 6px; border-radius: 50%; }

        /* stats strip */
        .ss {
          position: relative;
          z-index: 5;
          border-top: 1px solid var(--border);
          display: flex;
          background: #fff;
          animation: fu .7s ease .65s both;
        }
        .st {
          flex: 1;
          padding: 32px 64px;
          border-right: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .st:last-child { border-right: none; }
        .sn { font-family: 'Bebas Neue', sans-serif; font-size: 48px; color: var(--text); letter-spacing: 1px; line-height: 1; }
        .sn em { color: var(--accent); font-style: normal; }
        .sl { font-size: 11px; color: var(--muted); letter-spacing: 1.5px; text-transform: uppercase; font-weight: 700; }

        /* MINI LANDING - REAL SITE MIRROR */
        .mini-landing { height: 100%; display: flex; flex-direction: column; background: #fff; font-family: 'Inter', sans-serif; overflow: hidden; }
        .mini-header { display: flex; justify-content: space-between; align-items: center; padding: 6px 12px; border-bottom: 1px solid rgba(15, 15, 15, 0.04); z-index: 10; background: #fff; }
        .mini-logo { font-weight: 1000; font-size: 14px; color: var(--purple); letter-spacing: -1.5px; }
        .mini-burger { display: flex; flex-direction: column; gap: 2.5px; }
        .mini-burger div { width: 14px; height: 2px; background: var(--text); border-radius: 1px; }
        
        .mini-nav { display: flex; align-items: center; gap: 10px; }
        .mini-link { font-size: 7px; color: var(--muted); font-weight: 800; cursor: pointer; }
        .mini-btn-small { font-size: 7px; background: var(--purple); color: #fff; padding: 4px 10px; border-radius: 4px; font-weight: 800; }

        .ms-viewport { flex: 1; overflow: hidden; position: relative; }
        .ms-scroll-content { display: flex; flex-direction: column; animation: ms-scroll 60s linear infinite; }
        @keyframes ms-scroll { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }

        .ms-section { padding: 16px 14px; border-bottom: 1px solid rgba(15, 15, 15, 0.03); }
        .ms-bg-alt { background: #F4F5F5; }
        .ms-hero-mini { height: 220px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 10px; background: radial-gradient(circle at top right, rgba(255, 94, 0, 0.05), transparent); }
        .ms-pill { font-size: 7px; background: rgba(255, 94, 0, 0.08); color: var(--purple); padding: 4px 10px; border-radius: 20px; font-weight: 900; letter-spacing: 1px; text-transform: uppercase; }
        .ms-h1 { font-size: 32px; font-family: 'Bebas Neue', sans-serif; line-height: 0.85; color: var(--text); margin: 6px 0; letter-spacing: -0.5px; }
        .ms-p-mini { font-size: 10px; color: var(--muted); max-width: 140px; margin: 0 auto; line-height: 1.4; }
        .ms-btn { background: var(--purple); color: #fff; padding: 8px 18px; border-radius: 8px; font-size: 9px; font-weight: 800; margin-top: 8px; box-shadow: 0 4px 12px rgba(255, 94, 0, 0.2); }

        .ms-brands-mini { background: #fff; padding: 12px 0; border-bottom: 1px solid rgba(15, 15, 15, 0.03); overflow: hidden; }
        .ms-brands-track { display: flex; gap: 20px; padding: 0 14px; }
        .ms-brand-item { display: flex; align-items: center; gap: 4px; opacity: 0.4; }
        .ms-brand-name { font-size: 8px; font-weight: 900; font-family: 'Bebas Neue', sans-serif; }

        .ms-label { font-size: 8px; font-weight: 1000; color: var(--muted); margin-bottom: 14px; letter-spacing: 1.5px; text-transform: uppercase; border-left: 2px solid var(--purple); padding-left: 8px; }
        
        .ms-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .ms-project-card { border-radius: 10px; overflow: hidden; background: #fff; border: 1px solid rgba(15, 15, 15, 0.04); box-shadow: 0 4px 10px rgba(0,0,0,0.02); }
        .ms-project-img { height: 60px; position: relative; }
        .ms-project-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.4), transparent); }
        .ms-project-info { padding: 8px; }
        .ms-project-title { font-size: 8px; font-weight: 800; color: var(--text); margin-bottom: 2px; }
        .ms-project-cat { font-size: 7px; color: var(--purple); font-weight: 700; opacity: 0.7; }

        .ms-testimonials-list { display: flex; flex-direction: column; gap: 10px; }
        .ms-review-card { padding: 12px; background: #fff; border-radius: 12px; border: 1px solid var(--border); box-shadow: 0 2px 8px rgba(0,0,0,0.02); }
        .ms-review-stars { display: flex; gap: 2px; color: #FF5E00; margin-bottom: 6px; }
        .ms-review-text { font-size: 9px; line-height: 1.4; color: var(--text); font-style: italic; margin-bottom: 8px; }
        .ms-review-user { display: flex; align-items: center; gap: 8px; }
        .ms-avatar-mini { width: 18px; height: 18px; border-radius: 50%; background: #DEDFE0; font-size: 7px; display: flex; align-items: center; justify-content: center; font-weight: 900; }
        .ms-user-name { font-size: 8px; font-weight: 800; color: var(--text); }
        .ms-user-role { font-size: 7px; color: var(--muted); }

        .ms-process-mini { display: flex; flex-direction: column; gap: 14px; }
        .ms-p-item { display: flex; align-items: center; gap: 10px; }
        .ms-p-dot { width: 18px; height: 18px; border-radius: 50%; border: 1.5px solid var(--purple); color: var(--purple); font-size: 8px; display: flex; align-items: center; justify-content: center; font-weight: 1000; flex-shrink: 0; }
        .ms-p-text { flex: 1; display: flex; align-items: center; gap: 8px; }
        .ms-p-title { font-size: 9px; font-weight: 800; color: var(--text); white-space: nowrap; }
        .ms-p-line { height: 1px; flex: 1; background: #DEDFE0; }

        .ms-pricing-mini { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
        .ms-p-card { padding: 10px 4px; background: #fff; border: 1px solid var(--border); border-radius: 10px; text-align: center; display: flex; flex-direction: column; gap: 4px; }
        .ms-p-popular { border-color: var(--purple); background: rgba(255, 94, 0, 0.02); transform: scale(1.05); }
        .ms-p-name { font-size: 7px; font-weight: 700; color: var(--muted); text-transform: uppercase; }
        .ms-p-price { font-size: 10px; font-weight: 1000; font-family: 'Bebas Neue', sans-serif; color: var(--text); }
        .ms-p-btn { font-size: 7px; background: #DEDFE0; padding: 4px; border-radius: 4px; font-weight: 800; }
        .ms-p-popular .ms-p-btn { background: var(--purple); color: #fff; }

        .ms-faq-mini { padding: 8px; background: #fff; border-radius: 6px; border: 1px solid var(--border); margin-bottom: 6px; }
        .ms-faq-q { display: flex; align-items: center; gap: 6px; font-size: 8px; font-weight: 700; color: var(--text); }

        .ms-cta-mini { padding: 40px 14px; background: var(--purple); text-align: center; display: flex; flex-direction: column; align-items: center; gap: 12px; position: relative; overflow: hidden; }
        .ms-cta-mini::after { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.1), transparent); }
        .ms-h2 { font-family: 'Bebas Neue', sans-serif; font-size: 28px; color: #fff; line-height: 0.9; margin: 0; position: relative; z-index: 1; }
        .ms-btn-white { background: #fff; color: var(--purple); padding: 10px 20px; border-radius: 8px; font-size: 9px; font-weight: 1000; position: relative; z-index: 1; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }

        .ms-form-mini { display: flex; flex-direction: column; gap: 8px; }
        .ms-in { height: 20px; background: #F4F5F5; border: 1px solid var(--border); border-radius: 6px; }

        .ms-footer-mini { padding: 24px 14px; background: #0F0F0F; color: #fff; display: flex; flex-direction: column; gap: 14px; }
        .ms-f-top { display: flex; justify-content: space-between; align-items: center; }
        .ms-f-logo { font-size: 14px; font-weight: 1000; letter-spacing: -1px; color: var(--purple); }
        .ms-f-links { display: flex; gap: 6px; }
        .ms-l-dot { width: 4px; height: 4px; background: rgba(255,255,255,0.2); border-radius: 50%; }
        .ms-copyright { font-size: 7px; color: rgba(255,255,255,0.3); font-weight: 600; letter-spacing: 0.5px; }

        .mini-mobile .ms-h1 { font-size: 26px; }
        .mini-mobile .ms-hero-mini { height: 180px; }
        .mini-mobile .ms-p-mini { font-size: 9px; }
        .mini-mobile .ms-grid { grid-template-columns: 1fr; }
        .mini-mobile .ms-pricing-mini { grid-template-columns: 1fr; gap: 8px; }
        .mini-mobile .ms-p-card { padding: 12px; }

        @keyframes fu { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        @media(max-width: 960px) {
          .hg { grid-template-columns: 1fr; padding: 0 24px; }
          .hl { padding: 80px 0 48px; text-align: center; align-items: center; }
          .h1 { font-size: 80px; }
          .hp { margin-left: auto; margin-right: auto; }
          .ha { justify-content: center; }
          .tr { justify-content: center; }
          .sp { justify-content: center; }
          .hr { display: none; }
          .st { padding: 24px; text-align: center; }
          .sn { font-size: 36px; }
        }
      ` }} />

      <div className="hw">
        <div className="cg" ref={glowRef} />
        <div className="blob ba" />
        <div className="blob bb" />
        <div className="blob bc" />

        <div className="hg">
          {/* LEFT CONTENT */}
          <div className="hl">
            <div className="ey">
              <div className="ed" />
              <span className="et">Digital Agency · Full-Stack Studio</span>
            </div>

            <h1 className="h1">
              We Help You
              <span className="h1d">
                <span
                  style={{
                    color: "var(--accent)",
                    display: "inline-block",
                    opacity: mounted && visible ? 1 : 0,
                    transform: mounted && visible ? "translateY(0)" : "translateY(14px)",
                    transition: "opacity .24s ease, transform .24s ease",
                  }}
                >
                  {mounted ? words[wordIndex] : words[0]}
                </span>
              </span>
            </h1>

            <p className="hp">
              From pixel-perfect websites to powerful apps, high-converting
              e-commerce stores &amp; data-driven marketing — we build digital
              products that grow your business.
            </p>

            <div className="sp">
              {[
                { label: "Web Development", color: "#FF5E00" },
                { label: "App Development", color: "#0F0F0F" },
                { label: "E-Commerce", color: "#838585" },
                { label: "Digital Marketing", color: "#FF5E00" },
              ].map((s) => (
                <div className="pill" key={s.label}>
                  <div className="pdot" style={{ background: s.color }} />
                  {s.label}
                </div>
              ))}
            </div>

            <div className="ha">
              <a href="#contact" className="bp">
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#portfolio" className="bg2">View Our Work</a>
            </div>

            <div className="tr">
              <div className="ta">
                {[
                  { bg: "#FF5E00", l: "A" },
                  { bg: "#0F0F0F", l: "R" },
                  { bg: "#838585", l: "K" },
                  { bg: "#FF5E00", l: "S" },
                ].map((a, i) => (
                  <div
                    key={i}
                    className="av"
                    style={{ background: a.bg }}
                  >
                    {a.l}
                  </div>
                ))}
              </div>
              <div className="tt">
                <strong>40+ happy clients worldwide</strong>
                <br />
                ⭐ 4.9 / 5 average rating
              </div>
            </div>
          </div>

          {/* RIGHT SCENE */}
          <div className="hr">
            <div className="scene">
              {/* MONITOR */}
              <div className="monitor">
                <div className="mon-bar">
                  <div className="mdot" style={{ background: "#DEDFE0" }} />
                  <div className="mdot" style={{ background: "#C2C3C4" }} />
                  <div className="mdot" style={{ background: "#838585" }} />
                  <div className="mon-url">
                    <span style={{ color: "var(--green)", fontSize: "8px" }}>🔒</span>
                    dslash.agency/dashboard
                  </div>
                </div>

                <div className="mon-screen">
                  <MiniLanding />
                </div>
              </div>

              {/* PHONE */}
              <div className="phone">
                <div className="ph-top">
                  <div className="notch" />
                </div>
                <div className="ph-screen">
                  <MiniLanding isMobile />
                </div>
              </div>

              {/* BADGES */}
            </div>

          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="ss">
          <div className="st">
            <div className="sn">50<em>+</em></div>
            <div className="sl">Projects Built</div>
          </div>
          <div className="st">
            <div className="sn">98<em>%</em></div>
            <div className="sl">Happy Founders</div>
          </div>
          <div className="st">
            <div className="sn">24<em>/</em>7</div>
            <div className="sl">Global Support</div>
          </div>
        </div>
      </div>
    </>
  );
}
