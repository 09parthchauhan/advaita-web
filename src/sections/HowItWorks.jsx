import { useState, useEffect } from 'react'

const F = "'Manrope', sans-serif"
const B = '1px solid rgba(255,255,255,0.07)'

/* ══════════════════════════════════════════════════════════════
   STEP 01 — Install the SDK
══════════════════════════════════════════════════════════════ */
function IllustrationSDK() {
  const badges = [
    { label: 'JavaScript', dot: '#F5D000' },
    { label: 'Python',     dot: '#3B82F6' },
    { label: 'Go',         dot: '#06B6D4' },
    { label: 'Swift',      dot: '#F47B20' },
    { label: 'Kotlin',     dot: '#A855F7' },
    { label: 'Flutter',    dot: '#22D3EE' },
  ]
  return (
    <div style={{ marginTop: 18 }}>
      {/* badge grid */}
      <div style={{
        background: 'rgba(255,255,255,0.04)',
        border: B,
        borderRadius: 10,
        padding: '16px 14px',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
          {badges.map(b => (
            <div key={b.label} style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 6, padding: '5px 8px',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: b.dot, flexShrink: 0 }} />
              <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'rgba(240,235,224,0.6)', fontFamily: F }}>{b.label}</span>
            </div>
          ))}
        </div>

        {/* arrow */}
        <div style={{ textAlign: 'center', fontSize: '0.85rem', color: 'rgba(255,255,255,0.2)', margin: '10px 0 8px', fontWeight: 700 }}>↓</div>

        {/* Advaita hub pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: '#0F172A', borderRadius: 999,
          padding: '7px 16px', margin: '0 auto',
          width: '100%', justifyContent: 'center',
        }}>
          {/* conic-gradient logo mark */}
          <div style={{
            width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
            background: 'conic-gradient(#F47B20 0deg 120deg, #F5D000 120deg 240deg, #1A7A2E 240deg 360deg)',
          }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#fff', letterSpacing: '0.1em', fontFamily: F }}>ADVAITA</span>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   STEP 02 — Events Flow In
══════════════════════════════════════════════════════════════ */
function IllustrationFlow() {
  const nodes = [
    {
      label: 'User\nDevice',
      bg: '#EFF6FF',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round">
          <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01"/>
        </svg>
      ),
    },
    {
      label: 'Acai\nSDK',
      bg: '#FFF7ED',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F47B20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/>
        </svg>
      ),
    },
    {
      label: 'Advaita\nServer',
      bg: '#F0FDF4',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A7A2E" strokeWidth="1.8" strokeLinecap="round">
          <rect x="2" y="3" width="20" height="5" rx="1"/>
          <rect x="2" y="10" width="20" height="5" rx="1"/>
          <circle cx="18" cy="5.5" r="1" fill="#1A7A2E"/>
          <circle cx="18" cy="12.5" r="1" fill="#1A7A2E"/>
        </svg>
      ),
    },
  ]
  const dotColors = ['#F47B20', '#1A7A2E', '#3B82F6']

  return (
    <div style={{ marginTop: 18 }}>
      <div style={{
        background: 'rgba(255,255,255,0.04)', border: B, borderRadius: 10,
        padding: '16px 12px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {nodes.map((n, ni) => (
          <div key={ni} style={{ display: 'flex', alignItems: 'center', gap: 0, flex: ni < nodes.length - 1 ? 1 : 'none' }}>
            {/* node */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {n.icon}
              </div>
              <span style={{ fontSize: '0.6rem', color: 'rgba(240,235,224,0.4)', textAlign: 'center', fontFamily: F, fontWeight: 600, whiteSpace: 'pre-line', lineHeight: 1.4 }}>{n.label}</span>
            </div>
            {/* dots connector */}
            {ni < nodes.length - 1 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 3, flex: 1, justifyContent: 'center', paddingBottom: 18 }}>
                {[1, 0.55, 0.25].map((op, di) => (
                  <div key={di} style={{ width: 5, height: 5, borderRadius: '50%', background: dotColors[ni], opacity: op }} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   STEP 03 — Processed & Stored
══════════════════════════════════════════════════════════════ */
function IllustrationProcess() {
  return (
    <div style={{ marginTop: 18 }}>
      <div style={{ background: 'rgba(255,255,255,0.04)', border: B, borderRadius: 10, padding: '14px 14px' }}>

        {/* Raw row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <span style={{ fontSize: '0.58rem', color: 'rgba(240,235,224,0.3)', fontFamily: F, fontWeight: 600, minWidth: 56 }}>Raw event</span>
          {['type: page_view', 'userId: ?'].map(t => (
            <span key={t} style={{
              fontSize: '0.62rem', fontFamily: 'monospace',
              background: 'rgba(253,230,138,0.08)', border: '1px solid rgba(253,230,138,0.2)',
              color: '#FDE68A', borderRadius: 4, padding: '2px 7px', fontWeight: 600,
            }}>{t}</span>
          ))}
        </div>

        {/* Pipeline row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, margin: '8px 0', paddingLeft: 56 }}>
          {[
            { label: 'validate', bg: '#EFF6FF', stroke: '#3B82F6',
              icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
            { label: 'enrich',   bg: '#FFF7ED', stroke: '#F47B20',
              icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#F47B20" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/></svg> },
            { label: 'store',    bg: '#F0FDF4', stroke: '#1A7A2E',
              icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1A7A2E" strokeWidth="2" strokeLinecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg> },
          ].map((step, i) => (
            <div key={step.label} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 4,
                background: 'rgba(255,255,255,0.06)', border: `1px solid ${step.stroke}33`,
                borderRadius: 6, padding: '4px 8px',
              }}>
                {step.icon}
                <span style={{ fontSize: '0.6rem', fontFamily: F, fontWeight: 700, color: 'rgba(240,235,224,0.6)' }}>{step.label}</span>
              </div>
              {i < 2 && <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.15)', fontWeight: 700 }}>→</span>}
            </div>
          ))}
        </div>

        {/* Enriched row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: '0.58rem', color: 'rgba(240,235,224,0.3)', fontFamily: F, fontWeight: 600, minWidth: 56 }}>Enriched</span>
          {['geo: US · CA', 'session: s_9x', 'device: mobile'].map(t => (
            <span key={t} style={{
              fontSize: '0.62rem', fontFamily: 'monospace',
              background: 'rgba(26,122,46,0.12)', border: '1px solid rgba(26,122,46,0.3)',
              color: '#4ADE80', borderRadius: 4, padding: '2px 7px', fontWeight: 600,
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   STEP 04 — Unlock Insights
══════════════════════════════════════════════════════════════ */
function IllustrationChart() {
  const pts = '20,72 80,65 150,55 220,40 300,28 380,14'
  return (
    <div style={{ marginTop: 18 }}>
      <div style={{ background: 'rgba(255,255,255,0.04)', border: B, borderRadius: 10, padding: '14px 14px' }}>
        {/* header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <span style={{ fontSize: '0.62rem', fontFamily: F, fontWeight: 700, color: 'rgba(240,235,224,0.35)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Weekly Active Users</span>
          <span style={{ fontSize: '0.72rem', fontFamily: F, fontWeight: 800, color: '#1A7A2E' }}>↑ 34%</span>
        </div>
        {/* SVG chart */}
        <svg width="100%" viewBox="0 0 400 90" style={{ display: 'block', overflow: 'visible' }}>
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1A7A2E" stopOpacity="0.18"/>
              <stop offset="100%" stopColor="#1A7A2E" stopOpacity="0"/>
            </linearGradient>
          </defs>
          {/* fill */}
          <polygon
            points={`20,72 80,65 150,55 220,40 300,28 380,14 380,80 20,80`}
            fill="url(#chartGrad)"
          />
          {/* line */}
          <polyline points={pts} fill="none" stroke="#1A7A2E" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
          {/* peak dot */}
          <circle cx="380" cy="14" r="4" fill="#1A7A2E"/>
          <circle cx="380" cy="14" r="7" fill="#1A7A2E" fillOpacity="0.18"/>
          {/* x-axis labels */}
          {['Jan','Feb','Mar','Apr','May','Jun'].map((m, i) => (
            <text key={m} x={20 + i * 72} y="88" fontSize="8" fill="rgba(240,235,224,0.25)" textAnchor="middle" fontFamily="Manrope, sans-serif">{m}</text>
          ))}
        </svg>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   STEP 05 — Ask the AI (wide card right panel)
══════════════════════════════════════════════════════════════ */
function AIInterface() {
  return (
    <div style={{
      background: '#0F172A', borderRadius: 10,
      overflow: 'hidden', border: '1px solid #1E293B',
      flex: 1,
    }}>
      {/* traffic lights bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
        padding: '8px 12px', borderBottom: '1px solid #1E293B',
        background: '#0F172A',
      }}>
        <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#EF4444' }}/>
        <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#F59E0B' }}/>
        <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#22C55E' }}/>
        <span style={{ marginLeft: 8, fontSize: '0.58rem', fontFamily: 'monospace', color: '#64748B' }}>app.advaita.io / ai-insights</span>
      </div>

      <div style={{ padding: '12px 14px' }}>
        {/* prompt bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: '#1E293B', borderRadius: 7,
          padding: '8px 12px', marginBottom: 10,
          border: '1px solid #334155',
        }}>
          <span style={{ color: '#F47B20', fontSize: '0.85rem' }}>✦</span>
          <span style={{ fontSize: '0.68rem', color: '#CBD5E1', fontFamily: F, flex: 1 }}>
            Which cohort has the highest 30-day retention?
          </span>
          <span style={{
            display: 'inline-block',
            width: 2, height: 14,
            background: '#F47B20',
            borderRadius: 1,
            animation: 'blinkCursor 1s step-end infinite',
          }}/>
        </div>

        {/* chips */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
          {['Where do users drop off?', 'Top converting paths?', 'Compare segments'].map(c => (
            <span key={c} style={{
              fontSize: '0.58rem', fontFamily: F, fontWeight: 600,
              color: '#94A3B8', background: '#1E293B',
              border: '1px solid #334155', borderRadius: 999,
              padding: '3px 9px', cursor: 'pointer',
            }}>{c}</span>
          ))}
        </div>

        {/* results card */}
        <div style={{ background: '#1E293B', borderRadius: 7, padding: '10px 12px', border: '1px solid #334155' }}>
          <div style={{ fontSize: '0.58rem', fontFamily: F, fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
            Retention by cohort — Week 4
          </div>
          {[
            { label: 'Mar cohort', pct: 82 },
            { label: 'Feb cohort', pct: 74 },
            { label: 'Jan cohort', pct: 61 },
          ].map(row => (
            <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <span style={{ fontSize: '0.62rem', color: '#94A3B8', fontFamily: F, minWidth: 62 }}>{row.label}</span>
              <div style={{ flex: 1, height: 6, background: '#0F172A', borderRadius: 99, overflow: 'hidden' }}>
                <div style={{
                  width: `${row.pct}%`, height: '100%',
                  background: 'linear-gradient(90deg, #1A7A2E, #4ADE80)',
                  borderRadius: 99,
                }}/>
              </div>
              <span style={{ fontSize: '0.62rem', fontFamily: F, fontWeight: 700, color: '#E2E8F0', minWidth: 24, textAlign: 'right' }}>{row.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   CARD WRAPPER
══════════════════════════════════════════════════════════════ */
function Card({ stepNum, title, desc, illustration, wide, isRight, isBottom, children, isMobile }) {
  return (
    <div style={{
      gridColumn: wide && !isMobile ? 'span 2' : undefined,
      padding: '22px 24px 20px',
      borderRight: isMobile || isRight || wide ? 'none' : B,
      borderBottom: isBottom ? 'none' : B,
      display: wide && !isMobile ? 'flex' : 'block',
      gap: wide && !isMobile ? 48 : 0,
      alignItems: wide && !isMobile ? 'flex-start' : undefined,
    }}>
      {/* left content (always shown) */}
      <div style={{ flex: wide && !isMobile ? '0 0 340px' : undefined }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#F47B20', letterSpacing: '0.06em', fontFamily: F, marginBottom: 6 }}>
          {stepNum}
        </div>
        <div style={{ fontSize: '1rem', fontWeight: 800, color: '#F0EBE0', letterSpacing: '-0.02em', fontFamily: F, marginBottom: 6 }}>
          {title}
        </div>
        <div style={{ fontSize: '0.78rem', color: 'rgba(240,235,224,0.45)', lineHeight: 1.65, fontFamily: F }}>
          {desc}
        </div>
        {illustration}
      </div>
      {/* right content (step 05 only) */}
      {children}
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════════════════════ */
export function HowItWorks() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <section style={{
      position: 'relative',
      background: '#0E0E0E',
      padding: isMobile ? '60px 20px 80px' : '80px 40px 96px',
      overflow: 'hidden',
    }}>
      {/* notebook grid bg */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '36px 36px',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 75% at 50% 50%, black 20%, transparent 80%)',
        maskImage: 'radial-gradient(ellipse 80% 75% at 50% 50%, black 20%, transparent 80%)',
        pointerEvents: 'none',
        zIndex: 0,
      }}/>

      {/* content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto' }}>

        {/* heading */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            fontSize: '0.68rem', fontWeight: 600, color: '#F47B20',
            textTransform: 'uppercase', letterSpacing: '0.12em',
            fontFamily: F, marginBottom: 14,
          }}>
            How it Works
          </div>
          <h2 style={{
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
            color: '#F0EBE0',
            letterSpacing: '-0.025em',
            maxWidth: 640,
            margin: '0 auto',
            fontFamily: F,
            lineHeight: 1.2,
          }}>
            From a single snippet to complete user intelligence.
            <span style={{ color: 'rgba(240,235,224,0.35)', fontWeight: 500 }}> In minutes, not months.</span>
          </h2>
        </div>

        {/* bento grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          border: B,
          borderRadius: 14,
          overflow: 'hidden',
          background: '#111111',
        }}>

          {/* 01 */}
          <Card stepNum="01" title="Install the SDK"
            desc="One package, any platform. Works on Web, iOS, Android, Node, Go, Flutter, and more."
            illustration={<IllustrationSDK />}
            isRight={false} isBottom={false} isMobile={isMobile}
          />

          {/* 02 */}
          <Card stepNum="02" title="Events Flow In"
            desc="Every user action is captured automatically and streamed to Advaita in real-time — with zero latency overhead."
            illustration={<IllustrationFlow />}
            isRight={true} isBottom={false} isMobile={isMobile}
          />

          {/* 03 */}
          <Card stepNum="03" title="Processed & Stored"
            desc="Raw events are validated, geo-enriched, deduplicated and written to ClickHouse for sub-second analytics queries."
            illustration={<IllustrationProcess />}
            isRight={false} isBottom={false} isMobile={isMobile}
          />

          {/* 04 */}
          <Card stepNum="04" title="Unlock Insights"
            desc="Retention curves, cohort heatmaps, conversion funnels — all visualised instantly across your entire user base."
            illustration={<IllustrationChart />}
            isRight={true} isBottom={false} isMobile={isMobile}
          />

          {/* 05 — wide */}
          <Card
            stepNum="05" title="Ask the AI" wide isRight isBottom isMobile={isMobile}
            desc="Your built-in data scientist. Ask any question about your users in plain English — get instant answers, charts, and recommendations. No SQL, no analyst needed."
            illustration={
              <div style={{ display: 'flex', gap: 8, marginTop: 18, flexWrap: 'wrap' }}>
                {[
                  'Natural language',
                  'Zero SQL',
                  'Instant answers',
                ].map(label => (
                  <span key={label} style={{
                    fontSize: '0.68rem', fontFamily: F, fontWeight: 600,
                    color: 'rgba(240,235,224,0.45)',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 999, padding: '4px 12px',
                  }}>{label}</span>
                ))}
              </div>
            }
          >
            <AIInterface />
          </Card>

        </div>
      </div>

      <style>{`
        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </section>
  )
}