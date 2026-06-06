import { useEffect, useRef, useState } from 'react'

export default function AnalysisCardsSection() {
    const [visible, setVisible] = useState(false)
    const sectionRef = useRef(null)

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

    return (
      <section ref={sectionRef} style={{ background: '#f5f5f3', padding: '96px 0' }}>
        <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 20px' }}>
  
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className={`scroll-reveal ${visible ? 'is-visible' : ''}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <div style={{ width: '10px', height: '10px', background: '#f5820a' }} />
              <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', color: '#666', textTransform: 'uppercase' }}>Analysis Platform</span>
            </div>
            <h3 style={{ fontSize: 'clamp(30px, 6vw, 54px)', fontWeight: '500', letterSpacing: '-0.04em', color: '#111', lineHeight: 1.1, marginBottom: '18px' }}>
              <span className="block overflow-hidden">
                <span className={`headline-reveal-line ${visible ? 'is-visible' : ''}`}>Analyse Everywhere Your Users Are</span>
              </span>
            </h3>
            <p className={`scroll-reveal ${visible ? 'is-visible' : ''}`} style={{ fontSize: '18px', color: '#4d4d4d', lineHeight: 1.35, maxWidth: '500px', margin: '0 auto', transitionDelay: '0.3s' }}>
              From product flows to web journeys and mobile sessions — Advaita gives you the full picture across every surface.
            </p>
          </div>
  
          {/* 3 Cards */}
          <div className="analysis-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
  
            {/* Card 1 — Product Analysis */}
            <div className={`scroll-reveal ${visible ? 'is-visible' : ''}`} style={{ background: '#111111', borderRadius: '16px', overflow: 'hidden', minHeight: '440px', padding: '32px', position: 'relative', display: 'flex', flexDirection: 'column', transitionDelay: '0.42s' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '28px', position: 'relative', zIndex: 1 }}>Product Analysis</h3>
  
              {/* Workflow cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, position: 'relative', zIndex: 1 }}>
                {/* Trigger */}
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#f5820a', color: '#fff', fontSize: '10px', fontWeight: '700', padding: '4px 10px', borderRadius: '6px', marginBottom: '8px' }}>
                    <span>⚡</span> Trigger
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.08)', border: '0.5px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '12px 14px' }}>
                    <div style={{ fontSize: '9px', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', marginBottom: '4px' }}>ACTIVATION DROP</div>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#fff' }}>IF Activation Rate &lt; 60%</div>
                  </div>
                </div>
  
                {/* Arrow */}
                <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '20px' }}>
                  <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
                    <path d="M8 0v20M2 14l6 8 6-8" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
  
                {/* Then 1 */}
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#4a9e1a', color: '#fff', fontSize: '10px', fontWeight: '700', padding: '4px 10px', borderRadius: '6px', marginBottom: '8px' }}>
                    <span>⚡</span> Then
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '12px 14px' }}>
                    <div style={{ fontSize: '9px', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', marginBottom: '4px' }}>AI ROOT-CAUSE</div>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#fff' }}>Analyse Onboarding Drop-off</div>
                  </div>
                </div>
  
                {/* Arrow */}
                <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '20px' }}>
                  <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
                    <path d="M8 0v20M2 14l6 8 6-8" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
  
                {/* Then 2 */}
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#4a9e1a', color: '#fff', fontSize: '10px', fontWeight: '700', padding: '4px 10px', borderRadius: '6px', marginBottom: '8px' }}>
                    <span>⚡</span> Then
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '12px 14px' }}>
                    <div style={{ fontSize: '9px', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', marginBottom: '4px' }}>ALERT TEAM</div>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#fff' }}>Send Slack + Fix Suggestion</div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Card 2 — Web Analysis */}
            <div className={`scroll-reveal ${visible ? 'is-visible' : ''}`} style={{ background: '#f5820a', borderRadius: '16px', overflow: 'hidden', minHeight: '440px', padding: '32px', position: 'relative', display: 'flex', flexDirection: 'column', transitionDelay: '0.58s' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#111', marginBottom: '28px', position: 'relative', zIndex: 1 }}>Web Analysis</h3>
  
              {/* Web journey insight */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1, position: 'relative', zIndex: 1 }}>
                <div style={{ background: '#fff4df', border: '0.5px solid rgba(17,17,17,0.14)', borderRadius: '10px', padding: '16px' }}>
                  <div style={{ fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(17,17,17,0.48)', textTransform: 'uppercase', marginBottom: '12px' }}>Top web journey</div>
                  {[
                    ['Landing', '100%'],
                    ['Pricing', '62%'],
                    ['Signup', '28%'],
                    ['Activated', '11%'],
                  ].map(([label, value], i) => (
                    <div key={label} style={{ marginBottom: i === 3 ? 0 : '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                        <span style={{ fontSize: '12px', color: 'rgba(17,17,17,0.72)', fontWeight: '600' }}>{label}</span>
                        <span style={{ fontSize: '12px', color: '#111', fontWeight: '700' }}>{value}</span>
                      </div>
                      <div style={{ height: '8px', background: 'rgba(17,17,17,0.16)' }}>
                        <div style={{ width: value, height: '100%', background: i < 2 ? '#111111' : '#4a9e1a' }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ background: '#111111', border: '0.5px solid rgba(17,17,17,0.2)', borderRadius: '10px', padding: '14px 16px' }}>
                  <div style={{ fontSize: '11px', color: '#f5d000', fontWeight: '700', marginBottom: '4px' }}>Drop-off insight</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.78)', lineHeight: 1.45 }}>Pricing visitors who view integrations convert 2.4x better than users who jump straight to signup.</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: 'auto' }}>
                  {[
                    ['Bounce', '34%', '#111111'],
                    ['Qualified', '18.6k', '#4a9e1a'],
                  ].map(([label, value, color]) => (
                    <div key={label} style={{ background: '#fff4df', border: '0.5px solid rgba(17,17,17,0.14)', borderRadius: '10px', padding: '13px' }}>
                      <div style={{ fontSize: '10px', color: 'rgba(17,17,17,0.52)', marginBottom: '4px' }}>{label}</div>
                      <div style={{ fontSize: '24px', fontWeight: '800', color }}>{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Card 3 — Mobile Analysis */}
            <div className={`scroll-reveal ${visible ? 'is-visible' : ''}`} style={{ background: '#dcefd6', borderRadius: '16px', overflow: 'hidden', minHeight: '440px', padding: '32px', position: 'relative', display: 'flex', flexDirection: 'column', transitionDelay: '0.74s' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#111', marginBottom: '28px', position: 'relative', zIndex: 1 }}>Mobile Analysis</h3>
  
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, position: 'relative', zIndex: 1 }}>
                {/* Alert tag */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#f5820a', color: '#fff', fontSize: '10px', fontWeight: '700', padding: '5px 12px', borderRadius: '6px', width: 'fit-content', marginBottom: '4px' }}>
                  <span>⚡</span> Session drop detected
                </div>
  
                {/* Insight card */}
                <div style={{ background: '#fff', borderRadius: '12px', padding: '18px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(135deg, #f5820a, #f5d800)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>✦</div>
                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#111' }}>Advaita Insight</span>
                  </div>
                  {[
                    { label: 'SESSION DURATION', value: '2m 34s', icon: '⏱' },
                    { label: 'CRASH RATE', value: '0.3%', icon: '⚠' },
                    { label: 'SCREEN FLOW', value: 'Home → Cart → Exit', icon: '📱' },
                  ].map((m) => (
                    <div key={m.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f6f6f1', borderRadius: '8px', padding: '10px 14px', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '14px' }}>{m.icon}</span>
                        <span style={{ fontSize: '10px', letterSpacing: '0.06em', color: '#828282' }}>{m.label}</span>
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: '700', color: '#111' }}>{m.value}</span>
                    </div>
                  ))}
                </div>
  
                {/* Platforms */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                  {[{ name: 'iOS', color: '#111' }, { name: 'Android', color: '#4a9e1a' }, { name: 'Flutter', color: '#54C5F8' }, { name: 'React Native', color: '#61DAFB' }].map(p => (
                    <div key={p.name} style={{ background: 'rgba(255,255,255,0.7)', border: `1px solid ${p.color}30`, borderRadius: '6px', padding: '5px 10px', fontSize: '10px', fontWeight: '600', color: p.color }}>
                      {p.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    )
  }
