function FloatCardFunnel() {
  return (
    <div className="hero-fc hero-fc-funnel">
      <div className="hero-fc-head">
        <span className="hero-fc-dot" style={{ background: '#f5820a' }} />
        <span>Funnel</span>
      </div>
      <div className="hero-fc-bars">
        {[100, 72, 48, 26].map((w, i) => (
          <div key={i} className="hero-fc-bar"><div style={{ width: `${w}%` }} /></div>
        ))}
      </div>
      <div className="hero-fc-foot">Step 3 drop 58%</div>
    </div>
  )
}

function FloatCardRetention() {
  return (
    <div className="hero-fc hero-fc-retention">
      <div className="hero-fc-head">
        <span className="hero-fc-dot" style={{ background: '#4a9e1a' }} />
        <span>Retention</span>
      </div>
      <svg className="hero-fc-spark" viewBox="0 0 120 44" preserveAspectRatio="none">
        <path d="M0 38 L20 30 L40 32 L60 22 L80 18 L100 12 L120 8"
          fill="none" stroke="#4a9e1a" strokeWidth="2" strokeLinecap="round" />
        <path d="M0 38 L20 30 L40 32 L60 22 L80 18 L100 12 L120 8 L120 44 L0 44 Z"
          fill="rgba(74,158,26,0.12)" />
      </svg>
      <div className="hero-fc-foot">D30 · 71%  <span style={{ color: '#4a9e1a', fontWeight: 700 }}>+5%</span></div>
    </div>
  )
}

const COHORT_ALPHAS = [
  0.62, 0.48, 0.71, 0.55, 0.4, 0.58, 0.66, 0.45, 0.52, 0.6,
  0.5, 0.42, 0.55, 0.38, 0.46, 0.5, 0.42, 0.36, 0.44, 0.48,
  0.34, 0.3, 0.38, 0.32, 0.28, 0.32, 0.26, 0.22, 0.28, 0.24,
]

function FloatCardCohort() {
  return (
    <div className="hero-fc hero-fc-cohort">
      <div className="hero-fc-head">
        <span className="hero-fc-dot" style={{ background: '#f5d000' }} />
        <span>Cohort</span>
      </div>
      <div className="hero-fc-grid">
        {COHORT_ALPHAS.map((a, i) => (
          <span key={i} style={{ background: `rgba(74,158,26,${a})` }} />
        ))}
      </div>
      <div className="hero-fc-foot">Mar 2026 · 1.8k users</div>
    </div>
  )
}

function DashboardStack() {
  return (
    <div className="hero-stack" aria-hidden="true">
      <div className="hero-stack-scene">
        <div className="hero-stack-card hero-stack-card-front">
          <img src="/dashboard.png" alt="" draggable="false" />
        </div>

        <div className="hero-float hero-float-1"><FloatCardFunnel /></div>
        <div className="hero-float hero-float-2"><FloatCardRetention /></div>
        <div className="hero-float hero-float-3"><FloatCardCohort /></div>
      </div>

      <style>{`
        .hero-stack {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 0;
        }
        .hero-stack-scene {
          position: absolute;
          top: 16%;
          right: 3%;
          width: 46%;
          height: 74%;
          animation: heroStackIn 1.1s cubic-bezier(0.16,1,0.3,1) both;
        }
        .hero-stack-card {
          position: absolute;
          inset: 0;
          transform-origin: 50% 50%;
          will-change: transform;
        }
        .hero-stack-card img {
          width: 100%;
          height: auto;
          display: block;
          border: 1px solid rgba(17,17,17,0.08);
          background: #fff;
          user-select: none;
          box-shadow:
            0 60px 120px -30px rgba(17,17,17,0.38),
            0 30px 60px -20px rgba(17,17,17,0.22),
            0 8px 16px rgba(17,17,17,0.08);
        }

        .hero-stack-card-front {
          transform: translate3d(0, 0, 0);
          opacity: 1;
          animation: heroFloatFront 8s ease-in-out infinite;
        }

        @keyframes heroStackIn {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFloatFront {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50%      { transform: translate3d(0, -10px, 0); }
        }

        /* ───── Floating mini cards ───── */
        .hero-float {
          position: absolute;
          will-change: transform;
        }
        .hero-float-1 {
          top: 4%;
          left: -14%;
          width: 200px;
          animation: heroBob1 7s ease-in-out infinite;
          z-index: 4;
        }
        .hero-float-2 {
          bottom: 6%;
          left: -10%;
          width: 210px;
          animation: heroBob2 8.5s ease-in-out infinite;
          z-index: 4;
        }
        .hero-float-3 {
          top: -6%;
          right: -6%;
          width: 200px;
          animation: heroBob3 9.5s ease-in-out infinite;
          z-index: 4;
        }

        @keyframes heroBob1 {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }
        @keyframes heroBob2 {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(10px); }
        }
        @keyframes heroBob3 {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-14px); }
        }

        .hero-fc {
          background: #ffffff;
          border: 1px solid rgba(17,17,17,0.08);
          padding: 12px 14px;
          font-family: 'Geist', sans-serif;
          color: #111;
          box-shadow:
            0 30px 60px -20px rgba(17,17,17,0.28),
            0 10px 22px -10px rgba(17,17,17,0.18),
            0 2px 6px rgba(17,17,17,0.05);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .hero-fc-head {
          display: flex; align-items: center; gap: 6px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #555;
        }
        .hero-fc-dot { width: 8px; height: 8px; }
        .hero-fc-foot {
          font-size: 10px; color: #888;
          letter-spacing: 0.02em;
        }

        .hero-fc-bars { display: flex; flex-direction: column; gap: 4px; }
        .hero-fc-bar {
          height: 6px;
          background: rgba(17,17,17,0.06);
          position: relative;
        }
        .hero-fc-bar > div {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, #f5820a, #f5d000);
        }

        .hero-fc-spark {
          width: 100%;
          height: 44px;
          display: block;
        }

        .hero-fc-grid {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          gap: 2px;
        }
        .hero-fc-grid span {
          aspect-ratio: 1;
          background: rgba(17,17,17,0.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-stack-scene,
          .hero-stack-card-front,
          .hero-float-1,
          .hero-float-2,
          .hero-float-3 { animation: none; }
        }

        @media (max-width: 1280px) {
          .hero-float-1 { left: -4%; width: 180px; }
          .hero-float-2 { left: -2%; width: 190px; }
          .hero-float-3 { right: -2%; width: 180px; }
        }
        @media (max-width: 1024px) {
          .hero-stack-scene { right: 2%; width: 60%; }
          .hero-float-1, .hero-float-2 { display: none; }
        }
        @media (max-width: 720px) {
          .hero-stack { display: none; }
        }
      `}</style>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section
      className="pt-10 pb-0 relative overflow-hidden"
      style={{ minHeight: '85vh', display: 'flex', flexDirection: 'column' }}
    >
      {/* Stacked dashboard background */}
      <DashboardStack />

      {/* Content — full height flex column */}
      <div className="max-w-[1480px] mx-auto px-5 w-full relative z-10 flex flex-col" style={{ flex: 1 }}>

        {/* Top — headline left */}
        <div className="mt-10">
          {/* Label */}
          <div className="anim-label flex items-start gap-2 mb-5" style={{ marginLeft: '10px' }}>
            <div style={{ width: '12px', height: '12px', background: '#f5820a', flexShrink: 0, marginTop: '2px' }} />
            <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase' }}>
              Smarter Analytics Decisions
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-jet-black mb-6" style={{ fontSize: '64px', lineHeight: 1.1, letterSpacing: '-0.04em', fontWeight: '500', maxWidth: '900px', textAlign: 'left' }}>
            <span className="block overflow-hidden">
              <span className="anim-word-1 block">AI Analytics Platform</span>
            </span>
            <span className="block overflow-hidden">
              <span className="anim-word-2 block">With Product Sense</span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="anim-sub mb-8" style={{ fontSize: '17px', color: '#111111', lineHeight: 1.65, maxWidth: '440px' }}>
            From data overload to unified memory — Advaita helps you see the complete picture of your users.
          </p>

          {/* Investment Info */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://ihubgujarat.in/"
              target="_blank"
              rel="noreferrer"
              className="feature-pill anim-pill-1 flex items-center gap-2 px-4 py-2.5"
              style={{ textDecoration: 'none' }}
            >
              <img src="/i-hub.png" alt="iHub Gujarat" style={{ height: '18px', width: 'auto', objectFit: 'contain' }} />
              <span style={{ fontSize: '13px', fontWeight: '500', color: '#111' }}>Backed by iHub</span>
            </a>
            <a
              href="https://ihubgujarat.in/srujan"
              target="_blank"
              rel="noreferrer"
              className="feature-pill anim-pill-2 flex items-center gap-2 px-4 py-2.5"
              style={{ textDecoration: 'none', minWidth: '265px', justifyContent: 'space-between' }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', background: '#f5820a', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#111', lineHeight: 1 }}>Startup Srujan - Grant S4 Recipient</span>
              </span>
            </a>
          </div>
        </div>

        {/* Bottom — CTA right */}
        <div className="mt-auto flex justify-end">
          <div className="grid grid-cols-2" style={{ width: '440px' }}>
            <a
              href="https://signup.acaiplatform.ai/"
              className="arrow-button anim-card-1"
              style={{
                display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                padding: '22px 20px', background: '#111', color: '#fff',
                textDecoration: 'none', fontSize: '16px', fontWeight: '600',
                minHeight: '110px', transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Get started
              <svg className="arrow-icon" width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M3 3h12v12M3 15L15 3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
            <a
              href='#'
              className="arrow-button anim-card-2"
              style={{
                display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                padding: '22px 20px', background: '#252525', color: '#fff',
                textDecoration: 'none', fontSize: '16px', fontWeight: '600',
                minHeight: '110px', transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Contact Us
              <svg className="arrow-icon" width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M3 3h12v12M3 15L15 3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
