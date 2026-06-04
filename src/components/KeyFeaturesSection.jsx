import { useState, useEffect, useRef } from 'react'

const DURATION = 4500

const FEATURES = [
  { id: 0, num: '1', title: 'AI Chatbot Analytics Agent', desc: 'Ask product-data questions in plain English. Get instant answers backed by real clickstream evidence.', preview: 'chat' },
  { id: 1, num: '2', title: 'Experiment Analysis', desc: 'Compare variants, cohorts and conversion paths. See what is winning and what to ship next.', preview: 'experiment' },
  { id: 2, num: '3', title: 'KPI Growth Rate Tracking', desc: 'Track activation, retention, conversion and churn. Get AI alerts when important metrics shift.', preview: 'dashboard' },
  { id: 3, num: '4', title: 'AI Root-Cause Analysis', desc: 'Find why a metric changed without digging manually. Advaita explains the cause with evidence.', preview: 'rootcause' },
]

/* ─── CHAT PREVIEW ─── */
function ChatPreview() {
  const messages = [
    { role: 'user', text: 'What are the top user journeys?' },
    { role: 'ai', text: 'The top 3 journeys are: Home → Search → Product (42%), Direct → Product → Checkout (31%), and Home → Category → Product (27%).' },
    { role: 'user', text: 'Show me conversion rates by device' },
    { role: 'ai', text: 'Desktop: 5.8% · Mobile: 3.1% · Tablet: 2.4%. Desktop converts 87% better than mobile — consider optimising the mobile checkout flow.' },
    { role: 'user', text: 'Which pages have highest drop-off?' },
    { role: 'ai', text: 'Top drop-offs: Onboarding step 3 (68%), Pricing page (54%), Checkout (41%). Step 3 is your biggest leak — users who complete it retain at 84%.' },
  ]
  const [shown, setShown] = useState(2)
  useEffect(() => {
    if (shown >= messages.length) return
    const t = setTimeout(() => setShown(s => s + 1), 1400)
    return () => clearTimeout(t)
  }, [shown])

  return (
    <div style={{ background: '#13131a', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ background: '#1a1a2e', padding: '12px 16px', borderBottom: '0.5px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="/Logo.png" alt="" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
        <div>
          <div style={{ fontSize: '12px', fontWeight: '600', color: '#fff' }}>ACAI · Clickstream AI</div>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}>Test App - Android · acai-kotlin</div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4a9e1a' }} />
          <span style={{ fontSize: '10px', color: '#4a9e1a' }}>Live</span>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {messages.slice(0, shown).map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start', animation: 'msgIn 0.3s ease' }}>
            {m.role === 'ai' && (
              <img src="/Logo.png" alt="" style={{ width: '22px', height: '22px', borderRadius: '50%', marginRight: '8px', flexShrink: 0, marginTop: '2px' }} />
            )}
            <div style={{
              maxWidth: '80%', padding: '9px 12px', borderRadius: m.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
              background: m.role === 'user' ? 'rgba(167,139,250,0.2)' : 'rgba(255,255,255,0.07)',
              border: m.role === 'user' ? '0.5px solid rgba(167,139,250,0.3)' : '0.5px solid rgba(255,255,255,0.08)',
              fontSize: '12px', color: '#fff', lineHeight: 1.55,
            }}>{m.text}</div>
          </div>
        ))}
        {shown < messages.length && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingLeft: '30px' }}>
            {[0,1,2].map(i => <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)', animation: `bounce 1.2s ${i*0.2}s infinite` }} />)}
          </div>
        )}
      </div>

      {/* Input */}
      <div style={{ padding: '12px 16px', borderTop: '0.5px solid rgba(255,255,255,0.08)', display: 'flex', gap: '8px' }}>
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '9px 12px', fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>Ask about your clickstream data...</div>
        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #7b00f5, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l10-5-5 10-1.5-4.5L2 7z" fill="white"/></svg>
        </div>
      </div>
    </div>
  )
}

/* ─── EXPERIMENT PREVIEW ─── */
function ExperimentPreview() {
  const variants = [
    { name: 'Control', rate: 3.8, lift: 'Baseline', color: '#8b8b8b' },
    { name: 'Variant A', rate: 4.9, lift: '+28.9%', color: '#f5820a' },
    { name: 'Variant B', rate: 5.6, lift: '+47.4%', color: '#4a9e1a' },
  ]

  return (
    <div style={{ background: '#10120f', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ padding: '14px 16px', borderBottom: '0.5px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#fff' }}>Checkout Experiment</div>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>14 days · 42,680 sessions · AI confidence 96%</div>
        </div>
        <div style={{ background: 'rgba(74,158,26,0.14)', border: '0.5px solid rgba(74,158,26,0.35)', borderRadius: '6px', padding: '6px 9px', fontSize: '10px', color: '#86d296', fontWeight: '700' }}>Variant B wins</div>
      </div>

      <div style={{ padding: '18px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
        {variants.map(v => (
          <div key={v.name} style={{ background: 'rgba(255,255,255,0.045)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '13px' }}>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.38)', marginBottom: '9px' }}>{v.name}</div>
            <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '24px', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>{v.rate}%</div>
            <div style={{ fontSize: '10px', fontWeight: '700', color: v.color }}>{v.lift}</div>
          </div>
        ))}
      </div>

      <div style={{ flex: 1, padding: '0 18px 18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ background: '#181b17', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginBottom: '14px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Conversion by day</div>
          <div style={{ height: '150px', display: 'flex', alignItems: 'end', gap: '8px' }}>
            {[42, 48, 51, 46, 58, 61, 65, 70, 74, 77, 82, 86].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: i < 4 ? 'rgba(255,255,255,0.18)' : i < 8 ? 'rgba(245,130,10,0.62)' : 'rgba(74,158,26,0.72)', borderRadius: '4px 4px 0 0', animation: `previewRise 0.7s ${i * 0.04}s both cubic-bezier(0.16,1,0.3,1)` }} />
            ))}
          </div>
        </div>

        {[
          ['Primary driver', 'One-page checkout reduced payment-step exits by 31%.', '#f5820a'],
          ['Best segment', 'Returning mobile users show the strongest lift at +62%.', '#4a9e1a'],
          ['Ship recommendation', 'Roll out Variant B, keep monitoring first-time users.', '#f5d000'],
        ].map(([label, detail, color]) => (
          <div key={label} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: '9px', padding: '11px 12px' }}>
            <div style={{ width: '8px', height: '8px', background: color, marginTop: '5px', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '11px', fontWeight: '700', color: '#fff', marginBottom: '2px' }}>{label}</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.52)', lineHeight: 1.45 }}>{detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── DASHBOARD PREVIEW ─── */
function DashboardPreview() {
  const metrics = [
    { label: 'Activation Rate', tag: 'Activation', value: '68.4%', delta: '+12%', positive: true },
    { label: 'Conversion Rate', tag: 'Acquisition', value: '4.2%', delta: '+3%', positive: true },
    { label: 'Total Active Users', tag: 'Engagement', value: '1,840', delta: '+890', positive: true },
    { label: 'New Users', tag: 'Activation', value: '342', delta: '+28%', positive: true },
    { label: 'Churn Rate', tag: 'Retention', value: '8.3%', delta: '-2%', positive: false },
    { label: 'Retention Rate', tag: 'Retention', value: '71%', delta: '+5%', positive: true },
  ]
  return (
    <div style={{ background: '#13131f', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ padding: '12px 16px', borderBottom: '0.5px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#fff' }}>Clickstream Dashboard</div>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', marginTop: '1px' }}>Last updated 14:41 · <span style={{ color: '#a78bfa' }}>AI analysing...</span></div>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ background: 'rgba(167,139,250,0.12)', border: '0.5px solid rgba(167,139,250,0.3)', borderRadius: '6px', padding: '5px 9px', fontSize: '10px', color: '#a78bfa' }}>✦ Deep Research</div>
          <div style={{ background: 'rgba(167,139,250,0.18)', border: '0.5px solid rgba(167,139,250,0.35)', borderRadius: '6px', padding: '5px 9px', fontSize: '10px', color: '#a78bfa' }}>+ Create Metric</div>
        </div>
      </div>
      <div style={{ flex: 1, padding: '12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', overflowY: 'auto' }}>
        {metrics.map(m => (
          <div key={m.label} style={{ background: '#1c1c2e', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '13px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '8px' }}>
              <div style={{ width: '26px', height: '26px', borderRadius: '7px', background: m.positive ? 'rgba(74,158,26,0.2)' : 'rgba(245,130,10,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', flexShrink: 0 }}>{m.positive ? '↗' : '↘'}</div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#fff', lineHeight: 1.2 }}>{m.label}</div>
                <span style={{ fontSize: '9px', color: m.positive ? '#4a9e1a' : '#f5820a', background: m.positive ? 'rgba(74,158,26,0.12)' : 'rgba(245,130,10,0.12)', padding: '1px 5px', borderRadius: '3px' }}>{m.tag}</span>
              </div>
            </div>
            <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '2px' }}>{m.value}</div>
            <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '11px', color: m.positive ? '#4a9e1a' : '#f5820a', fontWeight: '600' }}>{m.delta}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── ROOT CAUSE PREVIEW ─── */
function RootCausePreview() {
  return (
    <div style={{ background: '#0f0f0f', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ padding: '12px 16px', borderBottom: '0.5px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f5820a' }} />
        <span style={{ fontSize: '12px', fontWeight: '600', color: '#fff' }}>AI Root-Cause Analysis</span>
        <span style={{ marginLeft: 'auto', fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>Mar 2024 cohort</span>
      </div>
      <div style={{ flex: 1, padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px', overflowY: 'auto' }}>
        <div style={{ background: 'rgba(245,130,10,0.1)', border: '0.5px solid rgba(245,130,10,0.3)', borderRadius: '8px', padding: '12px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#f5820a', marginBottom: '3px' }}>⚠ Churn spike detected — +8.3%</div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>March cohort churn increased significantly vs February baseline</div>
        </div>
        {[
          { step: '01', label: 'Segment Isolation', detail: 'Users who skipped onboarding step 3', color: '#a78bfa' },
          { step: '02', label: 'Behaviour Pattern', detail: '3× higher churn than users who completed onboarding', color: '#f5820a' },
          { step: '03', label: 'Drop-off Point', detail: '72% exit before completing the setup checklist', color: '#4a9e1a' },
        ].map(s => (
          <div key={s.step} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: `${s.color}20`, border: `0.5px solid ${s.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '9px', fontWeight: '700', color: s.color }}>{s.step}</span>
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: '600', color: '#fff', marginBottom: '2px' }}>{s.label}</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>{s.detail}</div>
            </div>
          </div>
        ))}
        <div style={{ background: 'rgba(74,158,26,0.08)', border: '0.5px solid rgba(74,158,26,0.25)', borderRadius: '8px', padding: '12px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#4a9e1a', marginBottom: '4px' }}>✓ Recommended Fix</div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Add guided tooltip on the setup checklist. Estimated impact: <strong style={{ color: '#fff' }}>-40% churn</strong> in next cohort.</div>
        </div>
      </div>
    </div>
  )
}

const PREVIEWS = { chat: ChatPreview, experiment: ExperimentPreview, dashboard: DashboardPreview, rootcause: RootCausePreview }

export default function KeyFeaturesSection() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)
  const timerRef = useRef(null)
  const activeRef = useRef(0)
  const barRefs = useRef({})

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.18 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    activeRef.current = active
    let p = 0
    FEATURES.forEach((_, i) => { if (barRefs.current[i]) barRefs.current[i].style.width = '0%' })
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      p += 100 / (DURATION / 50)
      if (p >= 100) {
        clearInterval(timerRef.current)
        setActive((activeRef.current + 1) % FEATURES.length)
      } else {
        if (barRefs.current[activeRef.current]) barRefs.current[activeRef.current].style.width = p + '%'
      }
    }, 50)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [active])

  const handleSelect = (idx) => { if (timerRef.current) clearInterval(timerRef.current); setActive(idx) }
  const PreviewComponent = PREVIEWS[FEATURES[active].preview]

  return (
    <section ref={sectionRef} style={{ background: '#F6F6F1', padding: '96px 0' }}>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes msgIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounce { 0%,80%,100% { transform: scale(0); } 40% { transform: scale(1); } }
        @keyframes previewFade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes previewRise { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Top centered header */}
      <div className={`scroll-reveal ${visible ? 'is-visible' : ''}`} style={{ textAlign: 'center', marginBottom: '64px', padding: '0 20px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <div style={{ width: '10px', height: '10px', background: '#f5820a' }} />
          <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', color: '#666', textTransform: 'uppercase' }}>Driving Your Product</span>
        </div>
        <h3 style={{ fontSize: '50px', fontWeight: '500', letterSpacing: '-0.04em', color: '#111', lineHeight: 1.1, marginBottom: '20px' }}>
          <span className="block overflow-hidden">
            <span className={`headline-reveal-line ${visible ? 'is-visible' : ''}`}>Product Intelligence That Drives Decisions</span>
          </span>
        </h3>
        <p style={{ fontSize: '18px', color: '#4d4d4d', lineHeight: 1.3, maxWidth: '500px', margin: '0 auto', fontWeight: '400'}}>
          From automated workflows to real-time alerts, Advaita brings clarity to your products so you can scale with confidence.
        </p>
      </div>

      {/* Split layout */}
      <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '440px 1fr', gap: '72px', alignItems: 'start' }}>

        {/* LEFT */}
        <div className={`scroll-reveal-left ${visible ? 'is-visible' : ''}`} style={{ width:'100%', transitionDelay: '140ms' }}>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontFamily: "'Faculty Glyphic', 'Geist', sans-serif", fontSize: '32px', fontWeight: '520', letterSpacing: '-0.04em', color: '#111', lineHeight: 1.3}}>Grow Smarter, Not Harder</h3>
            <p style={{ fontSize: '18px', color: '#4d4d4d', lineHeight: 1.4, marginTop: '20px', fontWeight: '400', letterSpacing: '-0.02em' }}>Gain deep, AI-powered visibility into every user interaction and uncover insights you never knew you were missing.</p>
          </div>

          {FEATURES.map((f, i) => (
            <div key={f.id} onClick={() => handleSelect(i)} style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', padding: '22px 0', position: 'relative', cursor: 'pointer' }}>
              {/* Progress bar fills the bottom border */}
              <div ref={el => barRefs.current[i] = el} style={{ position: 'absolute', bottom: '-1px', left: 0, height: '2px', background: '#111', width: '0%', transition: 'width 50ms linear', display: active === i ? 'block' : 'none' }} />

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: active === i ? '3px' : '0' }}>
                <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '20px', fontWeight: '700', color: active === i ? '#111' : '#bbb', minWidth: '20px', transition: 'color 0.25s', fontVariantNumeric: 'tabular-nums' }}>{f.num}.</span>
                <span style={{ fontSize: '20px', fontWeight: active === i ? '700' : '500', color: active === i ? '#111' : '#777', transition: 'all 0.25s', lineHeight: 1.3 }}>{f.title}</span>
              </div>
              <div style={{ overflow: 'hidden', maxHeight: active === i ? '80px' : '0', opacity: active === i ? 1 : 0, transition: 'max-height 0.35s ease, opacity 0.25s ease', paddingLeft: '32px' }}>
                <p style={{ fontSize: '16px', color: '#888', lineHeight: 1.65, fontWeight: '400' }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — large rounded gradient bg, preview floats inside */}
        <div className={`scroll-reveal-right ${visible ? 'is-visible' : ''}`} style={{ position: 'sticky', top: '80px', height: '750px', borderRadius: '0px', overflow: 'hidden', marginLeft: '40px', transitionDelay: '260ms' }}>

          {/* Gradient background */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #f5c4a0 0%, #f5d890 30%, #c8f0c8 65%, #c4c8f5 100%)' }} />

          {/* Noise texture */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.4, mixBlendMode: 'overlay', pointerEvents: 'none' }}>
            <filter id="kf-noise"><feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
            <rect width="100%" height="100%" filter="url(#kf-noise)"/>
          </svg>

          {/* Floating inner card — shifted right */}
          <div key={active} style={{
            position: 'absolute',
            top: '36px', bottom: '0px', left: '40px', right: '0px',
            borderRadius: '0px', overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.12)',
          }}>
            <PreviewComponent />
          </div>
        </div>

      </div>
    </section>
  )
}
