import { useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './AnalysisPage.module.css'

const ANALYSIS_COPY = {
  web: {
    eyebrow: 'Web Analysis',
    title: ['Web journeys become', 'measurable product decisions.'],
    copy: 'Understand how users arrive, move through pages, trigger events, and leave. ACAI turns web behaviour into funnels, conversion paths, and AI-generated explanations.',
    primary: 'Start web analysis',
    carousel: [
      { label: 'Activation path',  value: '64%',    change: '+9.4%', positive: true,  title: 'First-session activation improved after reducing two onboarding fields.' },
      { label: 'Bounce risk',      value: '21%',    change: '-6.1%', positive: true,  title: 'Docs traffic converts better when the SDK example is above the fold.' },
      { label: 'Revenue intent',   value: '2.4×',   change: '+18%',  positive: true,  title: 'Pricing visitors who open AI Agent examples become high-intent accounts.' },
    ],
    outcomes: ['Reduce page-level drop-offs', 'Improve signup and checkout paths', 'Find segments with higher purchase intent'],
  },
  product: {
    eyebrow: 'Product Analysis',
    title: ['Product behaviour becomes', 'a clear operating rhythm.'],
    copy: 'Track feature adoption, cohort health, account expansion, and repeated product actions. ACAI helps teams explain what changed and what to build next.',
    primary: 'Start product analysis',
    carousel: [
      { label: 'Feature adoption', value: '47%',    change: '+12%',  positive: true,  title: 'AI chat adoption is strongest in accounts that invite a second teammate.' },
      { label: 'Retention cohort', value: '31d',    change: '+5d',   positive: true,  title: 'Teams that complete setup in one session retain longer than delayed setups.' },
      { label: 'Drop-off moment',  value: 'Step 3', change: '1.2k',  positive: false, title: 'Most onboarding loss happens after SDK selection but before verification.' },
    ],
    outcomes: ['Prioritize feature work with evidence', 'Diagnose retention and churn patterns', 'Turn product usage into weekly team rituals'],
  },
  mobile: {
    eyebrow: 'Mobile Analysis',
    title: ['Mobile sessions reveal', 'the moments users keep or leave.'],
    copy: 'Analyse installs, screen flows, device behaviour, session depth, and mobile cohort retention. ACAI explains where mobile users stall and what segments need attention.',
    primary: 'Start mobile analysis',
    carousel: [
      { label: 'Screen completion', value: '72%',  change: '+7%',   positive: true,  title: 'Users who reach the second insight screen are more likely to return on D7.' },
      { label: 'Device churn',      value: '14%',  change: '-3%',   positive: true,  title: 'Low-memory Android devices show higher drop-off during chart rendering.' },
      { label: 'Push recovery',     value: '5.6k', change: '+21%',  positive: true,  title: 'Reactivation messages work best after a completed dashboard view.' },
    ],
    outcomes: ['Improve mobile activation flows', 'Segment churn by device and session depth', 'Catch screen-level friction before releases'],
  },
}

const analysisMethods = [
  { title: 'Build funnels from real events',    copy: 'Turn page views, clicks, screens, purchases, and custom events into measured paths with clear conversion and drop-off points.' },
  { title: 'Compare cohorts and segments',      copy: 'Understand retained users, churned users, high-intent accounts, mobile devices, traffic sources, and product roles without waiting on a manual report.' },
  { title: 'Ask ACAI for the explanation',      copy: 'Use plain-language questions to generate summaries, charts, and hypotheses grounded in the captured clickstream.' },
]

function useReveal(threshold = 0.16) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(e.target) } },
      { threshold, rootMargin: '0px 0px -60px 0px' },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function ArrowIcon() {
  return (
    <svg className="arrow-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

// ─── Hero SVGs ────────────────────────────────────────────────────────────────

function PlusGrid({ cols = 15, rows = 13, opacity = 0.07 }) {
  return Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => (
      <path
        key={`${r}-${c}`}
        d={`M${c * 32 + 16} ${r * 32 + 11}v10M${c * 32 + 11} ${r * 32 + 16}h10`}
        stroke="#111" strokeOpacity={opacity} strokeWidth="0.9" strokeLinecap="round"
      />
    ))
  )
}

function WebSvg() {
  const bars = [
    { label: 'Landing',   pct: 100, color: '#f5820a', delay: '0.5s' },
    { label: 'Pricing',   pct: 63,  color: '#e07a08', delay: '0.65s' },
    { label: 'Signup',    pct: 36,  color: '#4a9e1a', delay: '0.8s' },
    { label: 'Activated', pct: 14,  color: '#327211', delay: '0.95s' },
  ]
  const BW = 340

  return (
    <svg viewBox="0 0 520 400" fill="none" aria-hidden="true" className={styles.heroSvg}>
      <PlusGrid cols={17} rows={13} />

      {bars.map((bar, i) => {
        const y = 38 + i * 84
        const bw = BW * bar.pct / 100
        return (
          <g key={bar.label}>
            <rect x="80" y={y} width={BW} height="50" rx="8" fill="rgba(17,17,17,0.04)" />
            <rect
              x="80" y={y} width={bw} height="50" rx="8"
              fill={bar.color} fillOpacity="0.18"
              className={styles.funnelBar}
              style={{ transformOrigin: '80px center', animationDelay: bar.delay }}
            />
            <rect x="80" y={y + 10} width="3.5" height="30" rx="2" fill={bar.color} />
            <text x="93" y={y + 30} fontSize="13" fontWeight="600" fill="#111" fontFamily="inherit">{bar.label}</text>
            <text x={80 + bw + 10} y={y + 30} fontSize="14" fontWeight="700" fill={bar.color} fontFamily="inherit"
              className={styles.funnelPct} style={{ animationDelay: `${parseFloat(bar.delay) + 0.6}s` }}>
              {bar.pct}%
            </text>
            {i < 3 && (
              <path
                d={`M${80 + bw} ${y + 50} Q${80 + bw + 28} ${y + 50} ${80 + bw + 28} ${y + 84}`}
                stroke="rgba(17,17,17,0.1)" strokeWidth="1.5" strokeDasharray="4 3"
              />
            )}
          </g>
        )
      })}

      <circle cx="450" cy="200" r="42" fill="rgba(245,130,10,0.06)" stroke="rgba(245,130,10,0.2)" strokeWidth="1.5" className={styles.floatA} />
      <text x="450" y="194" fontSize="11" fontWeight="700" fill="#f5820a" textAnchor="middle" fontFamily="inherit">ACAI</text>
      <text x="450" y="210" fontSize="11" fontWeight="500" fill="#888" textAnchor="middle" fontFamily="inherit">insight</text>
      <path d={`M${80 + 340} 63 L408 200`} stroke="rgba(245,130,10,0.15)" strokeWidth="1" strokeDasharray="4 3" />
    </svg>
  )
}

function ProductSvg() {
  const bars = [
    { label: 'W1', h: 220, color: '#f5820a', delay: '0.5s' },
    { label: 'W2', h: 190, color: '#f5820a', delay: '0.6s' },
    { label: 'W3', h: 160, color: '#f07a09', delay: '0.7s' },
    { label: 'W4', h: 175, color: '#d06d08', delay: '0.8s' },
    { label: 'W5', h: 145, color: '#4a9e1a', delay: '0.9s' },
    { label: 'W6', h: 120, color: '#327211', delay: '1.0s' },
  ]
  const BX = 60
  const BY = 320
  const barW = 52
  const gap = 18

  const peaks = bars.map((b, i) => ({ x: BX + i * (barW + gap) + barW / 2, y: BY - b.h }))
  const linePath = peaks.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x} ${p.y}`).join(' ')

  return (
    <svg viewBox="0 0 520 400" fill="none" aria-hidden="true" className={styles.heroSvg}>
      <PlusGrid cols={17} rows={13} />

      <line x1={BX - 10} y1={BY} x2={BX + bars.length * (barW + gap) + 10} y2={BY} stroke="rgba(17,17,17,0.12)" strokeWidth="1" />

      {bars.map((bar, i) => {
        const x = BX + i * (barW + gap)
        return (
          <g key={bar.label}>
            <rect x={x} y={BY - bar.h} width={barW} height={bar.h} rx="6"
              fill={bar.color} fillOpacity="0.18"
            />
            <rect
              x={x} y={BY - bar.h} width={barW} height={bar.h} rx="6"
              fill={bar.color} fillOpacity="0.55"
              className={styles.vBar}
              style={{ transformOrigin: `${x + barW / 2}px ${BY}px`, animationDelay: bar.delay }}
            />
            <text x={x + barW / 2} y={BY + 18} fontSize="11" fontWeight="600" fill="#888" textAnchor="middle" fontFamily="inherit">{bar.label}</text>
            <text x={x + barW / 2} y={BY - bar.h - 8} fontSize="12" fontWeight="700" fill={bar.color} textAnchor="middle" fontFamily="inherit"
              className={styles.vBarLabel} style={{ animationDelay: `${parseFloat(bar.delay) + 0.5}s` }}>
              {Math.round(bar.h / 220 * 81)}%
            </text>
          </g>
        )
      })}

      <path d={linePath} stroke="#f5820a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray="600" strokeDashoffset="600" className={styles.trendLine} style={{ animationDelay: '1.2s' }} />

      {peaks.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="5" fill="#fff" stroke="#f5820a" strokeWidth="2"
          className={styles.trendDot} style={{ animationDelay: `${1.2 + i * 0.08}s` }} />
      ))}

      <rect x="360" y="30" width="130" height="72" rx="10" fill="#fff" stroke="rgba(17,17,17,0.1)" strokeWidth="1" />
      <text x="374" y="56" fontSize="10" fontWeight="700" fill="#888" letterSpacing="0.1em" fontFamily="inherit">RETENTION</text>
      <text x="374" y="82" fontSize="28" fontWeight="700" fill="#f5820a" letterSpacing="-0.04em" fontFamily="inherit">+12%</text>
      <text x="452" y="82" fontSize="11" fontWeight="500" fill="#888" fontFamily="inherit">D30</text>
    </svg>
  )
}

function MobileSvg() {
  const PX = 185
  const PY = 40
  const PW = 150
  const PH = 280

  return (
    <svg viewBox="0 0 520 400" fill="none" aria-hidden="true" className={styles.heroSvg}>
      <PlusGrid cols={17} rows={13} />

      {/* Phone outline */}
      <rect x={PX} y={PY} width={PW} height={PH} rx="22" fill="#fff" stroke="rgba(17,17,17,0.14)" strokeWidth="2" />
      <rect x={PX + 8} y={PY + 8} width={PW - 16} height={PH - 16} rx="16" fill="#f9f9f9" />
      <rect x={PX + PW / 2 - 18} y={PY + 12} width="36" height="6" rx="3" fill="rgba(17,17,17,0.1)" />
      <rect x={PX + PW / 2 - 20} y={PY + PH - 22} width="40" height="6" rx="3" fill="rgba(17,17,17,0.1)" />

      {/* Screen bars */}
      {[
        { label: 'Screen A', pct: 100, y: PY + 50, delay: '0.5s' },
        { label: 'Screen B', pct: 74,  y: PY + 82, delay: '0.65s' },
        { label: 'Screen C', pct: 48,  y: PY + 114, delay: '0.8s' },
        { label: 'Screen D', pct: 22,  y: PY + 146, delay: '0.95s' },
      ].map((row) => {
        const bw = (PW - 32) * row.pct / 100
        return (
          <g key={row.label}>
            <rect x={PX + 16} y={row.y} width={PW - 32} height="20" rx="4" fill="rgba(17,17,17,0.05)" />
            <rect x={PX + 16} y={row.y} width={bw} height="20" rx="4"
              fill="#f5820a" fillOpacity="0.55"
              className={styles.phoneBar}
              style={{ transformOrigin: `${PX + 16}px center`, animationDelay: row.delay }}
            />
          </g>
        )
      })}

      {/* Mini sparkline inside phone */}
      <polyline
        points={`${PX+16},${PY+200} ${PX+40},${PY+188} ${PX+62},${PY+193} ${PX+84},${PY+178} ${PX+106},${PY+172} ${PX+128},${PY+165} ${PX+142},${PY+162}`}
        stroke="#4a9e1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        fill="none"
        strokeDasharray="200" strokeDashoffset="200"
        className={styles.phoneLine} style={{ animationDelay: '1.2s' }}
      />

      {/* Floating cards */}
      <g className={styles.floatA} style={{ animationDelay: '0s' }}>
        <rect x="22" y="80" width="120" height="62" rx="10" fill="#fff" stroke="rgba(17,17,17,0.1)" strokeWidth="1" />
        <text x="36" y="104" fontSize="10" fontWeight="700" fill="#888" letterSpacing="0.1em" fontFamily="inherit">D7 RETENTION</text>
        <text x="36" y="130" fontSize="24" fontWeight="700" fill="#4a9e1a" letterSpacing="-0.04em" fontFamily="inherit">72%</text>
      </g>

      <g className={styles.floatB} style={{ animationDelay: '0.8s' }}>
        <rect x="378" y="80" width="110" height="62" rx="10" fill="#fff" stroke="rgba(17,17,17,0.1)" strokeWidth="1" />
        <text x="392" y="104" fontSize="10" fontWeight="700" fill="#888" letterSpacing="0.1em" fontFamily="inherit">CRASH RATE</text>
        <text x="392" y="130" fontSize="24" fontWeight="700" fill="#f5820a" letterSpacing="-0.04em" fontFamily="inherit">0.3%</text>
      </g>

      <g className={styles.floatA} style={{ animationDelay: '1.4s' }}>
        <rect x="22" y="240" width="120" height="62" rx="10" fill="#fff" stroke="rgba(17,17,17,0.1)" strokeWidth="1" />
        <text x="36" y="264" fontSize="10" fontWeight="700" fill="#888" letterSpacing="0.1em" fontFamily="inherit">SESSIONS</text>
        <text x="36" y="290" fontSize="24" fontWeight="700" fill="#111" letterSpacing="-0.04em" fontFamily="inherit">5.6k</text>
      </g>

      <g className={styles.floatB} style={{ animationDelay: '0.4s' }}>
        <rect x="378" y="240" width="110" height="62" rx="10" fill="#fff" stroke="rgba(17,17,17,0.1)" strokeWidth="1" />
        <text x="392" y="264" fontSize="10" fontWeight="700" fill="#888" letterSpacing="0.1em" fontFamily="inherit">AVG SESSION</text>
        <text x="392" y="290" fontSize="24" fontWeight="700" fill="#111" letterSpacing="-0.04em" fontFamily="inherit">2m 34s</text>
      </g>
    </svg>
  )
}

function HeroSvg({ type }) {
  if (type === 'web')    return <WebSvg />
  if (type === 'mobile') return <MobileSvg />
  return <ProductSvg />
}

// ─── Carousel ─────────────────────────────────────────────────────────────────

function AnalysisCarousel({ cards }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    setActive(0)
  }, [cards])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setActive(c => (c + 1) % cards.length), 4200)
    return () => clearInterval(t)
  }, [cards.length, paused])

  const prev = () => { setPaused(true); setActive(c => (c - 1 + cards.length) % cards.length) }
  const next = () => { setPaused(true); setActive(c => (c + 1) % cards.length) }

  const card = cards[active]

  return (
    <div className={styles.carousel} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Single card view with cross-fade */}
      <div className={styles.carouselInner} key={active}>
        <span className={styles.carouselLabel}>{card.label}</span>
        <div className={styles.carouselValueRow}>
          <strong className={styles.carouselValue}>{card.value}</strong>
          <span className={`${styles.carouselChange} ${card.positive ? styles.changePos : styles.changeNeg}`}>
            {card.positive ? '↑' : '↓'} {card.change}
          </span>
        </div>
        <p className={styles.carouselInsight}>{card.title}</p>
      </div>

      {/* Arrow controls — bottom right */}
      <div className={styles.carouselArrows}>
        <span className={styles.carouselCount}>{active + 1} / {cards.length}</span>
        <button className={styles.arrowBtn} onClick={prev} aria-label="Previous">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className={styles.arrowBtn} onClick={next} aria-label="Next">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      {!paused && <div className={styles.carouselProgress} key={`${active}-progress`} />}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AnalysisPage() {
  const { type = 'web' } = useParams()
  const page = useMemo(() => ANALYSIS_COPY[type] || ANALYSIS_COPY.web, [type])
  const [methodRef, methodVisible] = useReveal(0.18)
  const [agentRef, agentVisible] = useReveal(0.18)
  const [outcomesRef, outcomesVisible] = useReveal(0.18)

  return (
    <div className={styles.page}>
      <Navbar bg="#ffffff" />

      <main>
        {/* ═══ HERO ════════════════════════════════════════════════════════ */}
        <section className={styles.hero}>
          <div className={styles.shell}>
            <div className={styles.heroCopy}>
              <p className={`${styles.kicker} anim-label`}><span />{page.eyebrow}</p>
              <h1>
                {page.title.map((line, i) => (
                  <span key={line} className={styles.lineClip}>
                    <span className={`anim-word-${i + 1}`}>{line}</span>
                  </span>
                ))}
              </h1>
              <p className="anim-sub">{page.copy}</p>
              <div className={`${styles.heroActions} anim-cta`}>
                <a href="https://signup.acaiplatform.ai/" className={`arrow-button ${styles.primaryAction}`}>
                  {page.primary}<ArrowIcon />
                </a>
              </div>
            </div>

            <div className={`${styles.heroSvgWrap} anim-card-1`}>
              <HeroSvg type={type} />
            </div>
          </div>
        </section>

        {/* ═══ METHOD ══════════════════════════════════════════════════════ */}
        <section ref={methodRef} className={styles.methodSection}>
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <p className={`${styles.kicker} scroll-reveal ${methodVisible ? 'is-visible' : ''}`}><span />Analysis Workflow</p>
              <h2>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line ${methodVisible ? 'is-visible' : ''}`}>From captured behaviour to</span>
                </span>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line headline-reveal-line-2 ${methodVisible ? 'is-visible' : ''}`}>a decision your team can trust.</span>
                </span>
              </h2>
            </div>

            <div className={styles.methodGrid}>
              {analysisMethods.map((method, i) => (
                <article key={method.title} className={`scroll-reveal ${methodVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${0.12 + i * 0.1}s` }}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{method.title}</h3>
                  <p>{method.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ ACAI AGENT ══════════════════════════════════════════════════ */}
        <section ref={agentRef} className={styles.agentSection}>
          <div className={`${styles.shell} ${styles.agentGrid}`}>
            <div className={`scroll-reveal ${agentVisible ? 'is-visible' : ''}`}>
              <p className={styles.kicker}><span />ACAI Chatbot</p>
              <h2>Ask the analysis agent what changed, why it changed, and what to do next.</h2>
              <p>ACAI inspects funnels, segments cohorts, explains churn, generates chart-ready summaries, and creates reports from the same clickstream data your dashboards use.</p>
              <div className={styles.promptList}>
                <span>Show users who dropped after setup</span>
                <span>Explain why activation moved this week</span>
                <span>Generate a retention chart and summary</span>
              </div>
            </div>
            <div className={`scroll-reveal-right ${agentVisible ? 'is-visible' : ''}`}>
              <AnalysisCarousel key={type} cards={page.carousel} />
            </div>
          </div>
        </section>

        {/* ═══ OUTCOMES ════════════════════════════════════════════════════ */}
        <section ref={outcomesRef} className={styles.outcomesSection}>
          <div className={styles.shell}>
            <div className={styles.outcomesCard}>
              <div className={`scroll-reveal ${outcomesVisible ? 'is-visible' : ''}`}>
                <p className={styles.kicker}><span />Outcomes</p>
                <h2>Analytics that end in action, not another dashboard tab.</h2>
              </div>
              <div className={styles.outcomeList}>
                {page.outcomes.map((outcome, i) => (
                  <article key={outcome} className={`scroll-reveal ${outcomesVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${0.14 + i * 0.1}s` }}>
                    <span />
                    <p>{outcome}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
