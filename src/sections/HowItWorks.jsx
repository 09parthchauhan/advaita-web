import { motion } from 'framer-motion'
import { STEPS } from '../constants/index.jsx'

export function HowItWorks() {
  return (
    <section id="how" style={{ padding: '96px 0', background: '#F0F4FF' }}>
      <div className="lp-wrap">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ display: 'inline-flex', background: '#FFF7ED', color: '#F47B20', fontSize: '0.75rem', fontWeight: 700, padding: '6px 14px', borderRadius: 999, marginBottom: 18 }}
          >
            Three steps
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#0F172A', lineHeight: 1.15 }}
          >
            Three lines of code.<br />
            <span style={{ color: '#F47B20' }}>Full visibility.</span>
          </motion.h2>
        </div>

        <div className="lp-steps-grid" style={{ marginBottom: 56 }}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 14, background: step.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.8rem', fontWeight: 800, marginBottom: 20 }}>
                {step.n}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111', marginBottom: 10 }}>{step.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.65 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Code block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          style={{ background: '#0F172A', borderRadius: 20, overflow: 'hidden', boxShadow: '0 24px 48px rgba(15,23,42,0.18)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            {['#FF5F57','#FFBD2E','#28CA41'].map(c => <span key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />)}
            <span style={{ marginLeft: 10, fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>analytics.js</span>
          </div>
          <div style={{ padding: '24px 28px', fontFamily: 'monospace', fontSize: '0.875rem', lineHeight: 1.8, color: '#F0EBE0' }}>
            <div><span style={{ color: '#7DD3FC' }}>import</span> <span style={{ color: '#F0EBE0' }}>analytics</span> <span style={{ color: '#7DD3FC' }}>from</span> <span style={{ color: '#86EFAC' }}>'@advaita/acai'</span></div>
            <div style={{ marginTop: 12 }}>
              <span style={{ color: '#C084FC' }}>analytics</span>
              <span>.</span>
              <span style={{ color: '#FCD34D' }}>track</span>
              <span>(</span>
              <span style={{ color: '#86EFAC' }}>'Button Clicked'</span>
              <span>, {'{'}</span>
            </div>
            <div style={{ paddingLeft: 24 }}><span style={{ color: '#94A3B8' }}>page</span><span>: </span><span style={{ color: '#86EFAC' }}>'dashboard'</span><span>,</span></div>
            <div style={{ paddingLeft: 24 }}><span style={{ color: '#94A3B8' }}>userId</span><span>: currentUser.id,</span></div>
            <div><span>{'}'}</span><span>)</span></div>
            <div style={{ marginTop: 12, color: '#475569' }}>{'// That\'s it. AI does the rest.'}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
