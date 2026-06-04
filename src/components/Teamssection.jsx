import { useState, useEffect, useRef } from 'react'

const TEAMS = [
  {
    id: 0,
    tag: 'PRODUCT TEAMS',
    label: 'PRODUCT',
    headline: 'Build What Users Actually Want',
    sub: 'Stop guessing. See exactly where users drop off, what features drive retention, and which flows convert — all through a simple conversation with your data.',
    cta: 'EXPLORE FOR PRODUCT TEAMS',
  },
  {
    id: 1,
    tag: 'DATA ANALYSIS TEAMS',
    label: 'DATA',
    headline: 'From Raw Clickstream To Clear Answers',
    sub: 'Query your entire event stream with natural language. Build custom metrics, segment cohorts, and surface insights — without writing a single line of SQL.',
    cta: 'EXPLORE FOR DATA TEAMS',
  },
  {
    id: 2,
    tag: 'MARKETING TEAMS',
    label: 'MARKETING',
    headline: 'Know Which Campaigns Actually Convert',
    sub: 'Track CTR, activation, and revenue per user across every campaign. Ask Advaita which channels drive your best cohorts — and get a straight answer.',
    cta: 'EXPLORE FOR MARKETING TEAMS',
  },
  {
    id: 3,
    tag: 'ENGINEERING TEAMS',
    label: 'ENGINEERING',
    headline: 'Instrument Once, Insight Forever',
    sub: 'Drop in our SDK in minutes. Monitor event pipelines, validate data quality, and give every team real-time access to clean clickstream data.',
    cta: 'EXPLORE FOR ENGINEERING TEAMS',
  },
]

/* ── Animated SVG Illustrations ── */

function ProductIllustration() {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setTick(p => p + 1), 1800)
    return () => clearInterval(t)
  }, [])
  const bars = [100, 68, 42, 24]
  const labels = ['Visited', 'Signed Up', 'Activated', 'Converted']
  return (
    <svg width="100%" height="100%" viewBox="0 0 500 380" fill="none">
      <style>{`
        .bar-fill { transition: width 0.8s cubic-bezier(0.16,1,0.3,1); }
        @keyframes fadeSlide { from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)} }
        .msg { animation: fadeSlide 0.5s ease both; }
      `}</style>
      {/* Funnel bars */}
      <text x="40" y="45" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="Geist, sans-serif" letterSpacing="2">USER FUNNEL</text>
      {bars.map((w, i) => (
        <g key={i}>
          <text x="40" y={80 + i * 56} fill="rgba(255,255,255,0.45)" fontSize="11">{labels[i]}</text>
          <rect x="40" y={88 + i * 56} width="320" height="18" rx="0" fill="rgba(255,255,255,0.06)"/>
          <rect x="40" y={88 + i * 56} width={w / 100 * 320} height="18" rx="0" fill="rgba(255,255,255,0.2)" className="bar-fill"/>
          <text x={40 + w / 100 * 320 + 8} y={101 + i * 56} fill="rgba(255,255,255,0.5)" fontSize="11">{w}%</text>
        </g>
      ))}
      {/* Animated chat bubble */}
      <g key={tick} className="msg" style={{ animationDelay: '0.1s' }}>
        <rect x="40" y="318" width="320" height="42" rx="0" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/>
        <text x="56" y="335" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="Geist, sans-serif">✦ ADVAITA</text>
        <text x="56" y="351" fill="rgba(255,255,255,0.75)" fontSize="10">
          {tick % 2 === 0 ? 'Step 3 has 58% drop-off — SDK setup is the bottleneck.' : 'Users who complete step 3 retain at 84% after 30 days.'}
        </text>
      </g>
    </svg>
  )
}

function DataIllustration() {
  const [line, setLine] = useState(0)
  const lines = [
    'SELECT * FROM events',
    'WHERE action = \'purchase\'',
    'GROUP BY cohort_month',
    '→ 342 matched · 8.3% base',
    '→ 3× mobile vs desktop',
    '→ Avg LTV: $148',
  ]
  useEffect(() => {
    if (line >= lines.length) return
    const t = setTimeout(() => setLine(l => l + 1), 500)
    return () => clearTimeout(t)
  }, [line])
  return (
    <svg width="100%" height="100%" viewBox="0 0 500 380" fill="none">
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
      {/* Terminal */}
      <rect x="40" y="30" width="420" height="300" rx="0" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8"/>
      <rect x="40" y="30" width="420" height="28" rx="0" fill="rgba(255,255,255,0.07)"/>
      <circle cx="60" cy="44" r="5" fill="rgba(255,95,86,0.6)"/>
      <circle cx="76" cy="44" r="5" fill="rgba(254,188,46,0.6)"/>
      <circle cx="92" cy="44" r="5" fill="rgba(40,200,64,0.6)"/>
      <text x="200" y="49" fill="rgba(255,255,255,0.3)" fontSize="10" textAnchor="middle" fontFamily="Geist, sans-serif">acai-query · natural language</text>
      <text x="58" y="82" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="Geist, sans-serif">$ ask "which users churned in March?"</text>
      {lines.slice(0, line).map((l, i) => (
        <text key={i} x="58" y={100 + i * 22} fill={l.startsWith('→') ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.4)'} fontSize="11" fontFamily="Geist, sans-serif"
          style={{ animation: 'fadeSlide 0.3s ease' }}>
          {l}
        </text>
      ))}
      {line < lines.length && (
        <rect x="58" y={95 + line * 22} width="8" height="13" fill="rgba(255,255,255,0.6)" style={{ animation: 'blink 1s infinite' }}/>
      )}
      {/* Stats row */}
      {[{ l: 'Total Events', v: '6,725', d: '+28%' }, { l: 'Matched', v: '342', d: '8.3%' }, { l: 'Avg LTV', v: '$148', d: '+$12' }].map((s, i) => (
        <g key={i}>
          <rect x={40 + i * 142} y="348" width="130" height="24" rx="0" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
          <text x={50 + i * 142} y="357" fill="rgba(255,255,255,0.35)" fontSize="8">{s.l}</text>
          <text x={50 + i * 142} y="367" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="bold">{s.v}</text>
          <text x={100 + i * 142} y="367" fill="rgba(255,255,255,0.4)" fontSize="9">{s.d}</text>
        </g>
      ))}
    </svg>
  )
}

function MarketingIllustration() {
  const [hovered, setHovered] = useState(null)
  const bars = [
    { h: 120, l: 'Jan', v: '+28%' },
    { h: 90, l: 'Feb', v: '+18%' },
    { h: 155, l: 'Mar', v: '+47%' },
    { h: 65, l: 'Apr', v: '+12%' },
    { h: 80, l: 'May', v: '+19%' },
    { h: 60, l: 'Jun', v: '+9%' },
  ]
  return (
    <svg width="100%" height="100%" viewBox="0 0 500 380" fill="none">
      <style>{`@keyframes barRise{from{transform:scaleY(0);transform-origin:bottom}to{transform:scaleY(1);transform-origin:bottom}}`}</style>
      <text x="40" y="38" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="Geist, sans-serif" letterSpacing="2">CTR BY MONTH</text>
      <line x1="40" y1="290" x2="460" y2="290" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      {[0,50,100,150].map(v => (
        <line key={v} x1="40" y1={290 - v} x2="460" y2={290 - v} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
      ))}
      {bars.map((b, i) => (
        <g key={i} style={{ cursor: 'pointer' }} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
          <rect x={48 + i * 70} y={290 - b.h} width="44" height={b.h} rx="0"
            fill={hovered === i ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'}
            style={{ transition: 'fill 0.2s', animation: `barRise 0.6s ${i * 0.1}s both cubic-bezier(0.16,1,0.3,1)` }}/>
          <text x={70 + i * 70} y="305" fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="middle">{b.l}</text>
          {hovered === i && (
            <g>
              <rect x={44 + i * 70} y={278 - b.h} width="52" height="18" rx="3" fill="rgba(255,255,255,0.12)"/>
              <text x={70 + i * 70} y={290 - b.h} fill="rgba(255,255,255,0.9)" fontSize="10" textAnchor="middle">{b.v}</text>
            </g>
          )}
        </g>
      ))}
      {/* KPI strip */}
      {[{ l: 'Avg CTR', v: '7.9%' }, { l: 'ARPU', v: '$38.5' }, { l: 'Conv Rate', v: '4.2%' }].map((k, i) => (
        <g key={i}>
          <rect x={40 + i * 142} y="325" width="130" height="40" rx="0" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
          <text x={50 + i * 142} y="342" fill="rgba(255,255,255,0.35)" fontSize="9">{k.l}</text>
          <text x={50 + i * 142} y="358" fill="rgba(255,255,255,0.85)" fontSize="14" fontWeight="700">{k.v}</text>
        </g>
      ))}
    </svg>
  )
}

function EngineeringIllustration() {
  const [step, setStep] = useState(0)
  const steps = [
    { icon: '⬇', label: 'Install SDK', status: 'done' },
    { icon: '⚙', label: 'Init project', status: 'done' },
    { icon: '●', label: 'Events streaming', status: 'live' },
    { icon: '✓', label: 'Pipeline healthy', status: 'done' },
  ]
  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % 4), 1600)
    return () => clearInterval(t)
  }, [])
  return (
    <svg width="100%" height="100%" viewBox="0 0 500 380" fill="none">
      <style>{`@keyframes pulse{0%,100%{opacity:0.4}50%{opacity:1}}`}</style>
      {/* Pipeline flow */}
      <text x="40" y="38" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="Geist, sans-serif" letterSpacing="2">SDK PIPELINE</text>
      {steps.map((s, i) => (
        <g key={i}>
          <circle cx="60" cy={72 + i * 64} r="18" fill={i <= step ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)'} 
            stroke={i <= step ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)'} strokeWidth="1"/>
          <text x="60" y={77 + i * 64} fill={i <= step ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.2)'} fontSize="13" textAnchor="middle">{s.icon}</text>
          <text x="88" y={68 + i * 64} fill={i <= step ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.2)'} fontSize="12">{s.label}</text>
          <text x="88" y={83 + i * 64} fill={s.status === 'live' ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.3)'} fontSize="10"
            style={s.status === 'live' && i <= step ? { animation: 'pulse 1.5s infinite' } : {}}>
            {s.status === 'live' ? '● streaming live' : i <= step ? '✓ complete' : '○ pending'}
          </text>
          {i < steps.length - 1 && (
            <line x1="60" y1={92 + i * 64} x2="60" y2={52 + (i + 1) * 64} stroke={i < step ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)'} strokeWidth="1" strokeDasharray={i < step ? '0' : '4,3'}/>
          )}
        </g>
      ))}
      {/* Platform badges */}
      <text x="240" y="38" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="Geist, sans-serif" letterSpacing="2">PLATFORMS</text>
      {['iOS', 'Android', 'Kotlin', 'Swift', 'React', 'Next.js', 'Node', 'Python', 'Flutter', 'RUST'].map((p, i) => (
        <g key={p}>
          <rect x={240 + (i % 2) * 130} y={52 + Math.floor(i / 2) * 38} width="118" height="28" rx="0"
            fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8"/>
          <text x={299 + (i % 2) * 130} y={71 + Math.floor(i / 2) * 38} fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">{p}</text>
        </g>
      ))}
      {/* Latency badge */}
      <rect x="240" y="432" width="248" height="36" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5"/>
    </svg>
  )
}

const ILLUSTRATIONS = [ProductIllustration, DataIllustration, MarketingIllustration, EngineeringIllustration]

export default function TeamsSection() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)
  const team = TEAMS[active]
  const Illustration = ILLUSTRATIONS[active]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} style={{ background: '#0a0a0a', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 0' }}>
      <style>{`
        @keyframes teamFadeUp { from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)} }
        @keyframes fadeSlide { from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)} }
      `}</style>

      <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 20px', width: '100%' }}>

        {/* Center header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className={`scroll-reveal ${visible ? 'is-visible' : ''}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{ width: '10px', height: '10px', background: '#f5820a' }} />
            <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>
              Everything You Need to Drive Results
            </span>
          </div>
          <h3 style={{ fontSize: 'clamp(30px, 6vw, 54px)', fontWeight: '500', letterSpacing: '-0.04em', color: 'white', lineHeight: 1.1, marginBottom: '18px' }}>
            <span className="block overflow-hidden">
              <span className={`headline-reveal-line ${visible ? 'is-visible' : ''}`}>Built for Every Team That Touches Product</span>
            </span>
          </h3>
          <p className={`scroll-reveal ${visible ? 'is-visible' : ''}`} style={{ fontSize: '18px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.4, maxWidth: '500px', margin: '0 auto', transitionDelay: '0.3s' }}>
            Turn conversations into action, anticipate trends, and understand your users — so every team can make better decisions faster.
          </p>
        </div>

        {/* Tab selector — no inner borders */}
        <div className={`team-inner-reveal ${visible ? 'is-visible' : ''}`} style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px', transitionDelay: '0.42s' }}>
          <div className="teams-tabs" style={{ display: 'inline-flex', border: '0.5px solid #fff3', borderRadius: '0px', overflow: 'hidden' }}>
            {TEAMS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className="teams-tab-btn"
                style={{
                  padding: '12px 36px', fontSize: '15px', fontWeight: '500',
                  border: 'none', cursor: 'pointer',
                  background: active === i ? '#fff' : 'transparent',
                  color: active === i ? '#111' : 'rgba(255,255,255,0.45)',
                  transition: 'all 0.2s ease',
                  borderRight: 'none',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content card — no vertical divider */}
        <div
          key={active}
          className={`teams-card team-card-reveal ${visible ? 'is-visible' : ''}`}
          style={{
            border: '0.5px solid #fff3',
            borderRadius: '0px',
            background: '#0a0a0a',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            minHeight: '480px',
            transitionDelay: '0.56s',
          }}
        >
          {/* Left — text */}
          <div className="teams-card-left" style={{ padding: '72px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px', marginLeft: '3px'}}>
                <div style={{ width: '8px', height: '8px', background: '#f5820a' }} />
                <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase'}}>{team.tag}</span>
              </div>
              <h6 style={{ fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: '500', letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.12, marginBottom: '24px', whiteSpace: 'pre-line' }}>
                {team.headline}
              </h6>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, maxWidth: '400px' }}>
                {team.sub}
              </p>
            </div>
            <div className={`team-cta-reveal ${visible ? 'is-visible' : ''}`} style={{ marginTop: '48px', transitionDelay: '0.78s' }}>
              <span
                className="arrow-button"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: '700', letterSpacing: '0.13em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase',
                   paddingBottom: '4px', borderBottom: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer', transition: 'color 0.2s, border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
              >
                {team.cta}
                <svg className="arrow-icon" width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>

          {/* Right — illustration, no border-left */}
          <div className="teams-card-right" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 32px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.03) 0%, transparent 70%)' }} />
            <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
              <Illustration />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
