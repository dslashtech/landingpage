"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const words = ["Build.", "Launch.", "Grow.", "Scale."];

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
          min-height: 85vh;
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
          font-size: clamp(48px, 6vw, 84px);
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
          width: 520px;
          height: 460px;
        }

        /* hero gradient orb */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .orb-1 {
          width: 350px; height: 350px;
          background: radial-gradient(circle, rgba(255, 94, 0, 0.12), transparent 70%);
          top: 10px; left: 60px;
          animation: orbFloat 8s ease-in-out infinite;
        }
        .orb-2 {
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(255, 94, 0, 0.06), transparent 70%);
          bottom: 30px; right: 30px;
          animation: orbFloat 12s ease-in-out infinite reverse;
        }
        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -20px) scale(1.05); }
          66% { transform: translate(-10px, 15px) scale(0.95); }
        }

        /* bento grid */
        .bento {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto auto;
          gap: 14px;
          width: 100%;
          animation: fu .7s ease .3s both;
        }
        .bento-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          padding: 22px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02);
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .bento-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(255, 94, 0, 0.08), 0 0 0 1px rgba(255, 94, 0, 0.08);
        }
        .bento-wide { grid-column: 1 / -1; }
        .bento-label {
          font-size: 10px;
          color: var(--muted);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }
        .bento-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 36px;
          color: var(--text);
          line-height: 1;
        }
        .bento-change {
          font-size: 11px;
          font-weight: 700;
          margin-top: 4px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 2px 8px;
          border-radius: 20px;
        }
        .bento-change.up {
          color: #22c55e;
          background: rgba(34, 197, 94, 0.08);
        }
        .bento-change.down {
          color: #ef4444;
          background: rgba(239, 68, 68, 0.08);
        }

        /* sparkline */
        .spark-row {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          height: 48px;
          margin-top: 12px;
        }
        .spark-bar {
          flex: 1;
          border-radius: 4px;
          min-height: 4px;
          transform-origin: bottom;
          animation: gf 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }

        /* donut chart */
        .donut-wrap {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 10px;
        }
        .donut-legend {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .donut-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: var(--text);
          font-weight: 600;
        }
        .donut-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        /* status row */
        .status-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 8px;
        }
        .status-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .status-text {
          font-size: 12px;
          font-weight: 600;
          color: var(--text);
        }
        .status-val {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          color: var(--text);
          line-height: 1;
        }

        /* bento card stagger animations */
        .bento-card {
          opacity: 0;
          transform: translateY(24px);
          animation: bentoIn 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .bento-card:nth-child(1) { animation: bentoIn 0.6s cubic-bezier(0.2,0.8,0.2,1) 0.3s forwards, bentoFloat1 5s ease-in-out 1s infinite; }
        .bento-card:nth-child(2) { animation: bentoIn 0.6s cubic-bezier(0.2,0.8,0.2,1) 0.45s forwards, bentoFloat2 6s ease-in-out 1.2s infinite; }
        .bento-card:nth-child(3) { animation: bentoIn 0.6s cubic-bezier(0.2,0.8,0.2,1) 0.6s forwards, bentoFloat3 5.5s ease-in-out 1.4s infinite; }
        .bento-card:nth-child(4) { animation: bentoIn 0.6s cubic-bezier(0.2,0.8,0.2,1) 0.75s forwards, bentoFloat1 7s ease-in-out 1.5s infinite reverse; }
        .bento-card:nth-child(5) { animation: bentoIn 0.6s cubic-bezier(0.2,0.8,0.2,1) 0.9s forwards, bentoFloat2 5.5s ease-in-out 1.6s infinite reverse; }
        @keyframes bentoIn {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bentoFloat1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes bentoFloat2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-4px) translateX(3px); }
        }
        @keyframes bentoFloat3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px) translateX(-2px); }
        }

        /* progress bar */
        .progress-track {
          width: 100%;
          height: 6px;
          background: rgba(0,0,0,0.05);
          border-radius: 3px;
          overflow: hidden;
          margin-top: 8px;
        }
        .progress-fill {
          height: 100%;
          border-radius: 3px;
          transform-origin: left;
          animation: progressGrow 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) 0.8s both;
        }
        @keyframes progressGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        /* tech stack pills */
        .tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 10px;
        }
        .tech-pill {
          font-size: 10px;
          font-weight: 700;
          padding: 5px 10px;
          border-radius: 20px;
          border: 1px solid rgba(0,0,0,0.06);
          color: var(--text);
          background: rgba(255,255,255,0.8);
          opacity: 0;
          animation: pillIn 0.4s ease forwards;
        }
        .tech-pill:nth-child(1) { animation-delay: 1s; }
        .tech-pill:nth-child(2) { animation-delay: 1.1s; }
        .tech-pill:nth-child(3) { animation-delay: 1.2s; }
        .tech-pill:nth-child(4) { animation-delay: 1.3s; }
        .tech-pill:nth-child(5) { animation-delay: 1.4s; }
        .tech-pill:nth-child(6) { animation-delay: 1.5s; }
        .tech-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 5px;
          vertical-align: middle;
        }
        @keyframes pillIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        /* active users row */
        .users-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
        }
        .users-avatars {
          display: flex;
        }
        .user-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          border: 2px solid #fff;
          margin-left: -8px;
          opacity: 0;
          animation: pillIn 0.4s ease forwards;
        }
        .user-circle:first-child { margin-left: 0; }
        .user-circle:nth-child(1) { animation-delay: 0.9s; }
        .user-circle:nth-child(2) { animation-delay: 1.0s; }
        .user-circle:nth-child(3) { animation-delay: 1.1s; }
        .user-circle:nth-child(4) { animation-delay: 1.2s; }
        .user-circle:nth-child(5) { animation-delay: 1.3s; }
        .users-count {
          display: flex;
          flex-direction: column;
        }
        .users-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          color: var(--text);
          line-height: 1;
        }
        .users-label {
          font-size: 9px;
          color: var(--muted);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

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
          align-items: center;
          text-align: center;
          gap: 4px;
        }
        .st:last-child { border-right: none; }
        .sn { font-family: 'Bebas Neue', sans-serif; font-size: 48px; color: var(--text); letter-spacing: 1px; line-height: 1; }
        .sn em { color: var(--accent); font-style: normal; }
        .sl { font-size: 11px; color: var(--muted); letter-spacing: 1.5px; text-transform: uppercase; font-weight: 700; }

        @keyframes fu { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes floatCard { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes gf { from { transform: scaleY(0); } to { transform: scaleY(1); } }

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
              <div className="orb orb-1" />
              <div className="orb orb-2" />

              <div className="bento">
                {/* Revenue Card */}
                <div className="bento-card">
                  <div className="bento-label">Revenue</div>
                  <div className="bento-value">$128.4K</div>
                  <span className="bento-change up">↑ 12.3%</span>
                  <div className="spark-row">
                    {[35, 50, 40, 65, 55, 80, 70, 85, 75, 92, 84, 100].map((h, i) => (
                      <div
                        key={i}
                        className="spark-bar"
                        style={{
                          height: `${h}%`,
                          background: i >= 9 ? 'linear-gradient(to top, #FF5E00, #ff8c40)' : 'rgba(255, 94, 0, 0.12)',
                          animationDelay: `${0.3 + i * 0.04}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Traffic Breakdown Card */}
                <div className="bento-card">
                  <div className="bento-label">Traffic Source</div>
                  <div className="donut-wrap">
                    <svg width="80" height="80" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(255,94,0,0.1)" strokeWidth="10" />
                      <circle cx="40" cy="40" r="30" fill="none" stroke="#FF5E00" strokeWidth="10" strokeDasharray="113 188" strokeDashoffset="0" strokeLinecap="round" style={{ transform: 'rotate(-90deg)', transformOrigin: 'center', animation: 'gf 1.2s ease both' }} />
                      <circle cx="40" cy="40" r="30" fill="none" stroke="#0F0F0F" strokeWidth="10" strokeDasharray="47 188" strokeDashoffset="-113" strokeLinecap="round" style={{ transform: 'rotate(-90deg)', transformOrigin: 'center', animation: 'gf 1.2s ease 0.2s both' }} />
                      <circle cx="40" cy="40" r="30" fill="none" stroke="#838585" strokeWidth="10" strokeDasharray="28 188" strokeDashoffset="-160" strokeLinecap="round" style={{ transform: 'rotate(-90deg)', transformOrigin: 'center', animation: 'gf 1.2s ease 0.4s both' }} />
                      <text x="40" y="38" textAnchor="middle" fill="var(--text)" fontFamily="'Bebas Neue', sans-serif" fontSize="18">60%</text>
                      <text x="40" y="50" textAnchor="middle" fill="var(--muted)" fontSize="7" fontWeight="700">ORGANIC</text>
                    </svg>
                    <div className="donut-legend">
                      <div className="donut-item"><div className="donut-dot" style={{ background: '#FF5E00' }} />Organic — 60%</div>
                      <div className="donut-item"><div className="donut-dot" style={{ background: '#0F0F0F' }} />Direct — 25%</div>
                      <div className="donut-item"><div className="donut-dot" style={{ background: '#838585' }} />Social — 15%</div>
                    </div>
                  </div>
                </div>

                {/* Wide Status Card */}
                <div className="bento-card bento-wide">
                  <div className="bento-label">System Status</div>
                  <div className="status-row">
                    <div className="status-item">
                      <div className="status-dot" style={{ background: '#22c55e', boxShadow: '0 0 8px rgba(34,197,94,0.4)' }} />
                      <span className="status-text">Uptime</span>
                      <span className="status-val">99.9%</span>
                    </div>
                    <div className="status-item">
                      <div className="status-dot" style={{ background: '#FF5E00', boxShadow: '0 0 8px rgba(255,94,0,0.4)' }} />
                      <span className="status-text">Speed</span>
                      <span className="status-val">0.8s</span>
                    </div>
                    <div className="status-item">
                      <div className="status-dot" style={{ background: '#3b82f6', boxShadow: '0 0 8px rgba(59,130,246,0.4)' }} />
                      <span className="status-text">Rating</span>
                      <span className="status-val">4.9/5</span>
                    </div>
                  </div>
                </div>

                {/* Active Users Card */}
                <div className="bento-card">
                  <div className="bento-label">Active Users</div>
                  <div className="users-row">
                    <div className="users-avatars">
                      <div className="user-circle" style={{ background: '#FF5E00' }}>KR</div>
                      <div className="user-circle" style={{ background: '#0F0F0F' }}>MS</div>
                      <div className="user-circle" style={{ background: '#838585' }}>AK</div>
                      <div className="user-circle" style={{ background: '#FF5E00' }}>DN</div>
                      <div className="user-circle" style={{ background: '#2A2B2B' }}>+8</div>
                    </div>
                    <div className="users-count">
                      <span className="users-num">1,247</span>
                      <span className="users-label">Online Now</span>
                    </div>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: '78%', background: 'linear-gradient(to right, #FF5E00, #ff8c40)' }} />
                  </div>
                  <div style={{ fontSize: '9px', color: 'var(--muted)', fontWeight: 700, marginTop: '4px', textTransform: 'uppercase' as const, letterSpacing: '0.5px' }}>78% Server Capacity</div>
                </div>

                {/* Tech Stack Card */}
                <div className="bento-card">
                  <div className="bento-label">Tech Stack</div>
                  <div className="tech-pills">
                    <span className="tech-pill"><span className="tech-dot" style={{background:'#61DAFB'}}></span>React</span>
                    <span className="tech-pill"><span className="tech-dot" style={{background:'#0F0F0F'}}></span>Next.js</span>
                    <span className="tech-pill"><span className="tech-dot" style={{background:'#3178C6'}}></span>TypeScript</span>
                    <span className="tech-pill"><span className="tech-dot" style={{background:'#38BDF8'}}></span>Tailwind</span>
                    <span className="tech-pill"><span className="tech-dot" style={{background:'#FF5E00'}}></span>Firebase</span>
                    <span className="tech-pill"><span className="tech-dot" style={{background:'#68A063'}}></span>Node.js</span>
                  </div>
                </div>
              </div>
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
