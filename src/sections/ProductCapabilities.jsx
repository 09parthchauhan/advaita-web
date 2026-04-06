/* ProductCapabilities.jsx
   Replaces the MetricsBar section.
   Showcases what Advaita does — self-hosted analytics, capabilities, and why developers choose it.
*/

const CAPABILITIES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    color: '#F47B20',
    bg: 'rgba(244,123,32,0.10)',
    title: 'Real-time Event Tracking',
    desc: 'Capture every click, page view, and custom event in under 5ms. Auto-detect schemas with no config required.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    color: '#F5D000',
    bg: 'rgba(245,208,0,0.10)',
    title: 'Funnels & Conversion',
    desc: 'Build multi-step funnels in seconds. Spot exactly where users drop off and fix it before it costs revenue.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    color: '#1A7A2E',
    bg: 'rgba(26,122,46,0.10)',
    title: 'Cohort Retention',
    desc: 'Measure how well you retain users over any time window. Identify high-value cohorts and optimize onboarding.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: '#4F46E5',
    bg: 'rgba(79,70,229,0.10)',
    title: 'User Journeys',
    desc: 'Trace every path a user takes through your product. Uncover the routes that lead to activation and conversion.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: '#0D9488',
    bg: 'rgba(13,148,136,0.10)',
    title: 'AI Insights — DS Bot',
    desc: 'Ask questions in plain English. DS Bot answers with data — no SQL, no BI team, no waiting.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    color: '#C026D3',
    bg: 'rgba(192,38,211,0.10)',
    title: 'Privacy-first by Default',
    desc: 'GDPR-compliant out of the box. Your data never leaves your infrastructure when self-hosted.',
  },
]

const WHY_REASONS = [
  {
    icon: '◎',
    color: '#F47B20',
    title: 'Fully Open Source',
    desc: 'Apache 2.0. Fork it, extend it, self-host it. No lock-in, ever.',
  },
  {
    icon: '◈',
    color: '#F5D000',
    title: 'SDKs for Every Platform',
    desc: 'TypeScript, Python, Go, Kotlin, Flutter — one unified protocol, all platforms.',
  },
  {
    icon: '◉',
    color: '#1A7A2E',
    title: 'Data Stays Yours',
    desc: 'Self-host on your infra or use our cloud. Either way, you own every byte.',
  },
  {
    icon: '◆',
    color: '#4F46E5',
    title: '~10x Cheaper than Amplitude',
    desc: 'Built on ClickHouse + Kafka. No per-event pricing, no seat taxes, no surprises.',
  },
]

export function ProductCapabilities() {
  return (
    <section style={{
      background: '#0E0E0E',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      padding: '96px 0',
    }}>
      <div className="lp-wrap">

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(244,123,32,0.08)',
            border: '1px solid rgba(244,123,32,0.2)',
            borderRadius: 999,
            padding: '4px 16px',
            marginBottom: 20,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F47B20', flexShrink: 0 }} />
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 800,
              color: '#F47B20',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontFamily: "'Manrope', sans-serif",
            }}>
              What Advaita can do
            </span>
          </div>

          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: '#F0EBE0',
            margin: '0 0 16px',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}>
            The full analytics stack,
            <br />
            <span style={{ color: '#F47B20' }}>self-hosted and AI-powered.</span>
          </h2>

          <p style={{
            fontSize: '1rem',
            color: 'rgba(240,235,224,0.5)',
            maxWidth: 520,
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: "'Manrope', sans-serif",
          }}>
            From raw event capture to AI-generated insights — Advaita gives
            engineering teams the entire analytics pipeline in a single,
            open-source platform.
          </p>
        </div>

        {/* Capabilities grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 1,
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 20,
          overflow: 'hidden',
          marginBottom: 80,
        }}>
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap.title}
              style={{
                padding: '32px 28px',
                background: '#161616',
                borderRight: (i % 3 !== 2) ? '1px solid rgba(255,255,255,0.07)' : 'none',
                borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1a1a1a' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#161616' }}
            >
              {/* Icon */}
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: cap.bg,
                border: `1px solid ${cap.color}26`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: cap.color,
                marginBottom: 18,
                flexShrink: 0,
              }}>
                {cap.icon}
              </div>

              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '1rem',
                color: '#F0EBE0',
                margin: '0 0 10px',
                letterSpacing: '-0.01em',
              }}>
                {cap.title}
              </h3>

              <p style={{
                fontSize: '0.85rem',
                color: 'rgba(240,235,224,0.5)',
                margin: 0,
                lineHeight: 1.6,
                fontFamily: "'Manrope', sans-serif",
              }}>
                {cap.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Why developers choose Advaita */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          alignItems: 'center',
        }}>
          {/* Left: heading */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(26,122,46,0.08)',
              border: '1px solid rgba(26,122,46,0.22)',
              borderRadius: 999,
              padding: '4px 14px',
              marginBottom: 20,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#1A7A2E' }} />
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 800,
                color: '#1A7A2E',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontFamily: "'Manrope', sans-serif",
              }}>
                Why developers choose it
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.75rem, 3vw, 2.4rem)',
              color: '#F0EBE0',
              margin: '0 0 16px',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}>
              Open source.
              <br />No compromises.
            </h2>

            <p style={{
              fontSize: '0.9rem',
              color: 'rgba(240,235,224,0.5)',
              lineHeight: 1.7,
              maxWidth: 380,
              fontFamily: "'Manrope', sans-serif",
              margin: 0,
            }}>
              Advaita is built on battle-tested open infrastructure — ClickHouse,
              Kafka, FastAPI — giving you enterprise-grade analytics at a fraction
              of the cost. Your data. Your infra. Your rules.
            </p>
          </div>

          {/* Right: reason cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {WHY_REASONS.map(reason => (
              <div
                key={reason.title}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                  padding: '18px 20px',
                  background: '#161616',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 14,
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${reason.color}33` }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}
              >
                <span style={{
                  fontSize: '1.2rem',
                  color: reason.color,
                  flexShrink: 0,
                  marginTop: 1,
                  lineHeight: 1,
                }}>
                  {reason.icon}
                </span>
                <div>
                  <div style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: '#F0EBE0',
                    marginBottom: 4,
                    fontFamily: "'Manrope', sans-serif",
                  }}>
                    {reason.title}
                  </div>
                  <div style={{
                    fontSize: '0.82rem',
                    color: 'rgba(240,235,224,0.48)',
                    lineHeight: 1.5,
                    fontFamily: "'Manrope', sans-serif",
                  }}>
                    {reason.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
