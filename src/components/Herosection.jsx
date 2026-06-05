import styles from './Herosection.module.css'

function FloatCardFunnel() {
  return (
    <div className={styles.floatCard}>
      <div className={styles.floatCardHead}>
        <span className={styles.floatCardDot} style={{ background: '#f5820a' }} />
        <span>Funnel</span>
      </div>
      <div className={styles.floatCardBars}>
        {[100, 72, 48, 26].map((w, i) => (
          <div key={i} className={styles.floatCardBar}><div style={{ width: `${w}%` }} /></div>
        ))}
      </div>
      <div className={styles.floatCardFoot}>Step 3 drop 58%</div>
    </div>
  )
}

function FloatCardRetention() {
  return (
    <div className={styles.floatCard}>
      <div className={styles.floatCardHead}>
        <span className={styles.floatCardDot} style={{ background: '#4a9e1a' }} />
        <span>Retention</span>
      </div>
      <svg className={styles.floatCardSpark} viewBox="0 0 120 44" preserveAspectRatio="none">
        <path d="M0 38 L20 30 L40 32 L60 22 L80 18 L100 12 L120 8"
          fill="none" stroke="#4a9e1a" strokeWidth="2" strokeLinecap="round" />
        <path d="M0 38 L20 30 L40 32 L60 22 L80 18 L100 12 L120 8 L120 44 L0 44 Z"
          fill="rgba(74,158,26,0.12)" />
      </svg>
      <div className={styles.floatCardFoot}>D30 · 71%  <span style={{ color: '#4a9e1a', fontWeight: 700 }}>+5%</span></div>
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
    <div className={styles.floatCard}>
      <div className={styles.floatCardHead}>
        <span className={styles.floatCardDot} style={{ background: '#f5d000' }} />
        <span>Cohort</span>
      </div>
      <div className={styles.floatCardGrid}>
        {COHORT_ALPHAS.map((a, i) => (
          <span key={i} style={{ background: `rgba(74,158,26,${a})` }} />
        ))}
      </div>
      <div className={styles.floatCardFoot}>Mar 2026 · 1.8k users</div>
    </div>
  )
}

function DashboardStack() {
  return (
    <div className={styles.stack} aria-hidden="true">
      <div className={styles.stackScene}>
        <div className={`${styles.stackCard} ${styles.stackCardFront}`}>
          <img src="/dashboard.png" alt="" draggable="false" />
        </div>

        <div className={`${styles.float} ${styles.floatOne}`}><FloatCardFunnel /></div>
        <div className={`${styles.float} ${styles.floatTwo}`}><FloatCardRetention /></div>
        <div className={`${styles.float} ${styles.floatThree}`}><FloatCardCohort /></div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section
      className={`${styles.heroSection} pt-10 pb-0 relative overflow-hidden`}
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
          <h1 className="text-jet-black mb-6" style={{ fontSize: 'clamp(34px, 7vw, 64px)', lineHeight: 1.1, letterSpacing: '-0.04em', fontWeight: '500', maxWidth: '900px', textAlign: 'left' }}>
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
              className={`${styles.featurePill} ${styles.animPillOne} flex items-center gap-2 px-4 py-2.5`}
              style={{ textDecoration: 'none' }}
            >
              <img src="/i-hub.png" alt="iHub Gujarat" style={{ height: '18px', width: 'auto', objectFit: 'contain' }} />
              <span style={{ fontSize: '13px', fontWeight: '500', color: '#111' }}>Backed by iHub</span>
            </a>
            <a
              href="https://ihubgujarat.in/srujan"
              target="_blank"
              rel="noreferrer"
              className={`${styles.featurePill} ${styles.animPillTwo} flex items-center gap-2 px-4 py-2.5`}
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
        <div className={`${styles.ctaWrap} flex justify-end`}>
          <div className={`${styles.ctaGrid} grid grid-cols-2`}>
            <a
              href="https://signup.acaiplatform.ai/"
              className={`arrow-button anim-card-1 ${styles.ctaButton} ${styles.ctaPrimary}`}
            >
              Get started
              <svg className="arrow-icon" width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M3 3h12v12M3 15L15 3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
            <a
              href='#'
              className={`arrow-button anim-card-2 ${styles.ctaButton} ${styles.ctaSecondary}`}
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
