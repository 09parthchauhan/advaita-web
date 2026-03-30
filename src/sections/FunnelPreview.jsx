import { motion } from 'framer-motion'

const FUNNEL_STEPS = [
  { label: 'Visited',                pct: 100, color: '#6366F1' },
  { label: 'Signed Up',              pct: 68,  color: '#818CF8' },
  { label: 'Completed Onboarding',   pct: 45,  color: '#F47B20' },
  { label: 'Used Core Feature',      pct: 28,  color: '#FB923C' },
  { label: 'Upgraded to Pro',        pct: 12,  color: '#F59E0B' },
]

export function FunnelPreview() {
  return (
    <section style={{ padding: '96px 0', background: '#0F172A', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle background glow */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: 700, height: 700, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%)', filter: 'blur(80px)' }} />
      </div>

      <div className="lp-wrap" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(99,102,241,0.15)', color: '#818CF8', fontSize: '0.75rem', fontWeight: 700, padding: '6px 14px', borderRadius: 999, marginBottom: 18, border: '1px solid rgba(99,102,241,0.25)' }}>
            Conversion Funnels
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#F0EBE0', lineHeight: 1.15, marginBottom: 16 }}>
            See where users <span style={{ color: '#F47B20', fontStyle: 'italic' }}>drop off.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(240,235,224,0.5)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
            Visual funnel analysis with instant root-cause detection — no SQL required.
          </p>
        </motion.div>

        {/* Funnel card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', maxWidth: 780, margin: '0 auto' }}
        >
          <div style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.08)', padding: 32, boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}>
            {/* Card header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(240,235,224,0.35)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 4 }}>Funnel · Last 30 days</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.5rem', color: '#F0EBE0' }}>Signup → Upgrade</div>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                {['#FF5F57','#FFBD2E','#28CA41'].map(c => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                ))}
              </div>
            </div>

            {/* Funnel bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {FUNNEL_STEPS.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: 'flex', alignItems: 'center', gap: 14 }}
                >
                  {/* Step label */}
                  <div style={{ width: 200, flexShrink: 0, fontSize: '0.82rem', fontWeight: 500, color: 'rgba(240,235,224,0.75)', textAlign: 'right', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {step.label}
                  </div>
                  {/* Bar track */}
                  <div style={{ flex: 1, height: 36, background: 'rgba(255,255,255,0.05)', borderRadius: 8, overflow: 'hidden', position: 'relative' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${step.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.1 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        height: '100%',
                        background: `linear-gradient(90deg, ${step.color}cc, ${step.color})`,
                        borderRadius: 8,
                        position: 'relative',
                      }}
                    />
                    {/* Step number overlay */}
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', paddingLeft: 12 }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', fontFamily: 'monospace' }}>
                        Step {i + 1}
                      </span>
                    </div>
                  </div>
                  {/* Percentage */}
                  <div style={{ width: 44, flexShrink: 0, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: step.color, textAlign: 'right' }}>
                    {step.pct}%
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Conversion summary row */}
            <div style={{ display: 'flex', gap: 16, marginTop: 28, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              {[
                { label: 'Overall conversion', value: '12%', color: '#F59E0B' },
                { label: 'Avg drop per step', value: '22%', color: '#F47B20' },
                { label: 'Total users',        value: '18.4k', color: '#818CF8' },
              ].map(({ label, value, color }) => (
                <div key={label} style={{ flex: 1, background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '12px 14px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 600, color: 'rgba(240,235,224,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>{label}</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.3rem', color }}>{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating drop-off badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              top: -18,
              right: 24,
              background: '#FEF2F2',
              border: '1px solid rgba(239,68,68,0.25)',
              borderRadius: 12,
              padding: '8px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              boxShadow: '0 8px 24px rgba(239,68,68,0.15)',
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444', flexShrink: 0, boxShadow: '0 0 0 3px rgba(239,68,68,0.2)' }} />
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#DC2626', whiteSpace: 'nowrap' }}>27% drop at step 3</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
