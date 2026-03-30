import { motion } from 'framer-motion'
import { DashboardPreview } from '../components/DashboardPreview.jsx'
import { stagger, fadeUp } from '../constants/index.jsx'

export function Hero() {
  return (
    // Outer section: page bg color, inset margins (ZeroDrift style)
    <section style={{ background: '#F0EEE8', padding: '16px 20px 32px' }}>
      {/* Dark hero card */}
      <div style={{
        position: 'relative',
        minHeight: '90vh',
        background: '#0D0D0D',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
      }}>

        {/* Background layers — clipped to rounded corners */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, borderRadius: 8, overflow: 'hidden', pointerEvents: 'none' }}>
          {/* Grid pattern */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.032) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.032) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }} />
          {/* Orange radial glow — top right */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 78% 8%, rgba(244,123,32,0.18) 0%, transparent 52%)',
          }} />
          {/* Secondary glow — bottom left */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 5% 95%, rgba(244,123,32,0.07) 0%, transparent 40%)',
          }} />
        </div>

        {/* Main content */}
        <div className="lp-hero-content">

          {/* Left column: text anchored to bottom */}
          <motion.div
            variants={stagger} initial="hidden" animate="visible"
            className="lp-hero-col-text"
          >
            {/* Label */}
            <motion.div variants={fadeUp} style={{ marginBottom: 20 }}>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                color: '#F47B20',
                textTransform: 'uppercase',
                fontFamily: "'Space Grotesk', sans-serif",
              }}>
                // Analytics Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(3rem, 5vw, 5rem)',
                lineHeight: 1.04,
                letterSpacing: '-0.035em',
                color: '#EDEAE2',
                margin: '0 0 24px',
              }}
            >
              Stop reading<br/>
              dashboards.<br/>
              <span style={{ color: '#F47B20' }}>Start understanding</span><br/>
              your users.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '1.025rem',
                color: 'rgba(237,234,226,0.48)',
                lineHeight: 1.72,
                margin: '0 0 40px',
                maxWidth: 450,
                fontWeight: 400,
              }}
            >
              Advaita captures every user action and uses AI to explain what it means — no dashboards to build, no SQL to write. Self-hosted and open-source.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 12, marginBottom: 44, flexWrap: 'wrap' }}>
              <a href="#waitlist" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 28px', background: '#F47B20', color: '#fff',
                borderRadius: 4, fontWeight: 700, fontSize: '0.875rem',
                textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase',
                fontFamily: "'Space Grotesk', sans-serif",
                transition: 'background 0.15s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#E06910'}
                onMouseLeave={e => e.currentTarget.style.background = '#F47B20'}
              >
                Get early access <span>→</span>
              </a>
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 28px', background: 'transparent',
                border: '1.5px solid rgba(237,234,226,0.2)', color: '#EDEAE2',
                borderRadius: 4, fontWeight: 700, fontSize: '0.875rem',
                textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase',
                fontFamily: "'Space Grotesk', sans-serif",
                transition: 'border-color 0.15s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(237,234,226,0.45)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(237,234,226,0.2)'}
              >
                talk to sales <span>→</span>
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {[
                { label: '99.9% uptime', color: '#34D399' },
                { label: '<5ms latency', color: '#60A5FA' },
                { label: 'SOC2 ready', color: '#F47B20' },
                { label: 'Open source', color: '#A78BFA' },
              ].map(({ label, color }) => (
                <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.76rem', color: 'rgba(237,234,226,0.32)', fontWeight: 500 }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: color, display: 'inline-block', flexShrink: 0 }} />
                  {label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column: dashboard preview floating card */}
          <div className="lp-hero-col-preview">
            <motion.div
              initial={{ opacity: 0, y: 36, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: '100%',
                maxWidth: 500,
                background: '#161616',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 8,
                boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(244,123,32,0.05)',
              }}
            >
              {/* Dark browser chrome */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '10px 14px',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                background: '#111111',
              }}>
                <div style={{ display: 'flex', gap: 5 }}>
                  {['#FF5F57', '#FFBD2E', '#28CA41'].map(c => (
                    <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, opacity: 0.65 }} />
                  ))}
                </div>
                <div style={{
                  flex: 1, height: 20,
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8,
                }}>
                  <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.22)', fontFamily: 'monospace' }}>
                    acaiplatform.ai/dashboard
                  </span>
                </div>
              </div>
              {/* Dashboard content */}
              <div style={{ padding: 20, background: '#141414' }}>
                <DashboardPreview />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
