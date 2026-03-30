import { motion } from 'framer-motion'
import { Sparkline } from './Sparkline.jsx'
import { LiveFeedCard } from './LiveFeedCard.jsx'

export function DashboardPreview() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 860, margin: '0 auto' }}>
      {/* Main analytics card */}
      <div style={{ background: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 24px 64px rgba(79,70,229,0.1), 0 8px 24px rgba(0,0,0,0.06)', padding: 28 }}>
        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 11, color: '#64748B', fontWeight: 600, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Total Events · 7d</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: '2.25rem', color: '#111', lineHeight: 1 }}>
              2.4<span style={{ color: '#4F46E5' }}>M</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#ECFDF5', color: '#059669', fontSize: 12, fontWeight: 700, padding: '5px 10px', borderRadius: 999 }}>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" width="11" height="11">
              <polyline points="15 4 9 10.5 5.5 7 1 12" />
            </svg>
            +18.2%
          </div>
        </div>

        <Sparkline width={480} />

        {/* KPI row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginTop: 18 }}>
          {[
            { label: 'Conversion', value: '6.8%', delta: '+0.4%', c: '#059669' },
            { label: 'Session', value: '4m 21s', delta: '+12s', c: '#4F46E5' },
            { label: 'Bounce', value: '31%', delta: '–3.1%', c: '#F47B20' },
          ].map(({ label, value, delta, c }) => (
            <div key={label} style={{ background: '#F8FAFC', borderRadius: 12, padding: '10px 12px' }}>
              <div style={{ fontSize: 10, color: '#94A3B8', marginBottom: 4, fontWeight: 600 }}>{label}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#111', marginBottom: 2 }}>{value}</div>
              <div style={{ fontSize: 10, fontWeight: 600, color: c }}>{delta}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating: Live events card */}
      <motion.div
        className="dashboard-float-badge"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.6, ease: 'easeInOut', repeat: Infinity }}
        style={{ position: 'absolute', top: 16, right: -32, zIndex: 10 }}
      >
        <LiveFeedCard />
      </motion.div>

      {/* Floating: AI insight */}
      <motion.div
        className="dashboard-float-badge"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 4.2, ease: 'easeInOut', repeat: Infinity, delay: 1.2 }}
        style={{ position: 'absolute', bottom: 20, left: -24, zIndex: 10, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.95)', boxShadow: '0 8px 24px rgba(0,0,0,0.07)', padding: '12px 14px', display: 'flex', alignItems: 'flex-start', gap: 10, maxWidth: 196 }}
      >
        <div style={{ width: 28, height: 28, borderRadius: 10, background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg viewBox="0 0 20 20" fill="none" stroke="#7C3AED" strokeWidth="1.8" width="14" height="14">
            <circle cx="10" cy="10" r="8" /><path d="M7.5 7.5a2.5 2.5 0 0 1 4.83.83c0 1.67-2.5 2.5-2.5 2.5" /><path d="M10 14h.01" />
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#7C3AED', marginBottom: 3 }}>AI Insight</div>
          <div style={{ fontSize: 10, color: '#334155', lineHeight: 1.5 }}>Checkout drop-off ↑22% after Tuesday deploy</div>
        </div>
      </motion.div>
    </div>
  )
}
