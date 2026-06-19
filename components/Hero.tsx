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
          height: 500px;
        }

        /* hero gradient orb */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .orb-1 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(255, 94, 0, 0.15), transparent 70%);
          top: 20px; left: 80px;
          animation: orbFloat 8s ease-in-out infinite;
        }
        .orb-2 {
          width: 250px; height: 250px;
          background: radial-gradient(circle, rgba(255, 94, 0, 0.08), transparent 70%);
          bottom: 40px; right: 40px;
          animation: orbFloat 12s ease-in-out infinite reverse;
        }
        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -20px) scale(1.05); }
          66% { transform: translate(-10px, 15px) scale(0.95); }
        }

        /* dashboard card */
        .dash-card {
          position: relative;
          width: 480px;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 24px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.06), 0 0 0 1px rgba(255, 94, 0, 0.05);
          z-index: 2;
          padding: 28px;
          animation: fu .7s ease .3s both, floatCard 6s ease-in-out 1s infinite;
        }
        .dash-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        .dash-title {
          font-size: 14px;
          font-weight: 700;
          color: var(--text);
          letter-spacing: -0.3px;
        }
        .dash-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #22c55e;
          font-weight: 600;
        }
        .dash-dot {
          width: 6px; height: 6px;
          background: #22c55e;
          border-radius: 50%;
          animation: p 2s infinite;
        }

        .dash-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 16px;
        }
        .dash-metric {
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(15, 15, 15, 0.04);
          border-radius: 16px;
          padding: 16px;
        }
        .dm-label {
          font-size: 11px;
          color: var(--muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
        }
        .dm-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          color: var(--text);
          line-height: 1;
        }
        .dm-change {
          font-size: 11px;
          font-weight: 700;
          color: #22c55e;
          margin-top: 4px;
        }
        .dm-change.down { color: #ef4444; }

        .dash-chart {
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(15, 15, 15, 0.04);
          border-radius: 16px;
          padding: 16px;
        }
        .dc-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .dc-title {
          font-size: 11px;
          font-weight: 700;
          color: var(--text);
        }
        .dc-badge {
          font-size: 9px;
          background: rgba(255, 94, 0, 0.08);
          color: var(--accent);
          padding: 3px 8px;
          border-radius: 6px;
          font-weight: 700;
        }
        .dc-bars {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          height: 100px;
        }
        .dc-bar-wrap {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .dc-bar {
          width: 100%;
          border-radius: 6px 6px 0 0;
          min-height: 4px;
          transform-origin: bottom;
          animation: gf 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
        .dc-bar-label {
          font-size: 8px;
          color: var(--muted);
          font-weight: 600;
        }

        /* floating card */
        .float-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 16px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.04);
          z-index: 3;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .fc-1 { top: 30px; right: -30px; animation: fu .7s ease .5s both, floatCard 5s ease-in-out 1.2s infinite; }
        .fc-2 { bottom: 30px; left: -40px; animation: fu .7s ease .6s both, floatCard 7s ease-in-out 1.3s infinite reverse; }
        .fc-3 { bottom: 160px; right: -20px; animation: fu .7s ease .7s both, floatCard 6s ease-in-out 1.4s infinite; }
        .fc-icon {
          width: 38px; height: 38px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }
        .fc-icon.green { background: rgba(34, 197, 94, 0.1); color: #22c55e; }
        .fc-icon.orange { background: rgba(255, 94, 0, 0.1); color: var(--accent); }
        .fc-icon.blue { background: rgba(59, 130, 246, 0.1); color: #3b82f6; }
        .fc-info { display: flex; flex-direction: column; }
        .fc-val { font-family: 'Bebas Neue', sans-serif; font-size: 22px; color: var(--text); line-height: 1.1; }
        .fc-label { font-size: 9px; color: var(--muted); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }

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

              <div className="dash-card">
                <div className="dash-header">
                  <span className="dash-title">Dashboard Overview</span>
                  <div className="dash-status">
                    <div className="dash-dot" />
                    Live
                  </div>
                </div>

                <div className="dash-grid">
                  <div className="dash-metric">
                    <div className="dm-label">Revenue</div>
                    <div className="dm-value">$128.4k</div>
                    <div className="dm-change">↑ 12.3%</div>
                  </div>
                  <div className="dash-metric">
                    <div className="dm-label">Users</div>
                    <div className="dm-value">24.8k</div>
                    <div className="dm-change">↑ 8.1%</div>
                  </div>
                  <div className="dash-metric">
                    <div className="dm-label">Conversion</div>
                    <div className="dm-value">4.8%</div>
                    <div className="dm-change down">↓ 0.6%</div>
                  </div>
                  <div className="dash-metric">
                    <div className="dm-label">Page Speed</div>
                    <div className="dm-value">96</div>
                    <div className="dm-change">↑ 3pts</div>
                  </div>
                </div>

                <div className="dash-chart">
                  <div className="dc-head">
                    <span className="dc-title">Monthly Growth</span>
                    <span className="dc-badge">+24% this month</span>
                  </div>
                  <div className="dc-bars">
                    {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 100].map((h, i) => (
                      <div key={i} className="dc-bar-wrap">
                        <div
                          className="dc-bar"
                          style={{
                            height: `${h}%`,
                            background: i === 11 ? 'linear-gradient(to top, #FF5E00, #ff8c40)' : 'rgba(255, 94, 0, 0.12)',
                            animationDelay: `${i * 0.05}s`,
                          }}
                        />
                        <span className="dc-bar-label">
                          {['J','F','M','A','M','J','J','A','S','O','N','D'][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="float-card fc-1">
                <div className="fc-icon green">↑</div>
                <div className="fc-info">
                  <span className="fc-val">98.2%</span>
                  <span className="fc-label">Uptime</span>
                </div>
              </div>
              <div className="float-card fc-2">
                <div className="fc-icon orange">★</div>
                <div className="fc-info">
                  <span className="fc-val">4.9/5</span>
                  <span className="fc-label">Client Rating</span>
                </div>
              </div>
              <div className="float-card fc-3">
                <div className="fc-icon blue">⚡</div>
                <div className="fc-info">
                  <span className="fc-val">0.8s</span>
                  <span className="fc-label">Avg Load Time</span>
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
