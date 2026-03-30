import { memo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FEATURES } from '../constants/index.jsx'

const FeatureCard = memo(function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      className="feature-card"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      style={{ background: '#fff', borderRadius: 20, border: '1px solid rgba(0,0,0,0.05)', padding: 24 }}
    >
      <div style={{ width: 42, height: 42, borderRadius: 13, background: feature.bg, color: feature.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, transition: 'transform 0.2s ease' }}>
        {feature.icon}
      </div>
      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111111', marginBottom: 8, fontFamily: 'inherit' }}>
        {feature.title}
      </h3>
      <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.65 }}>
        {feature.desc}
      </p>
    </motion.div>
  )
})

export function Features() {
  return (
    <section style={{ padding: '96px 0', background: '#FAFAF8' }}>
      <div className="lp-wrap">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#EEF2FF', color: '#4F46E5', fontSize: '0.75rem', fontWeight: 700, padding: '6px 14px', borderRadius: 999, marginBottom: 18 }}
          >
            Everything you need
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#0F172A', lineHeight: 1.15, marginBottom: 16 }}
          >
            All the analytics.<br />
            <span style={{ color: '#4F46E5' }}>None for the guesswork.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.14 }}
            style={{ fontSize: '1.05rem', color: '#64748B', maxWidth: 500, margin: '0 auto', fontWeight: 300, lineHeight: 1.7 }}
          >
            Built for modern engineering teams who need answers, not just charts.
          </motion.p>
        </div>
        <div className="lp-features-grid">
          {FEATURES.map((f, i) => <FeatureCard key={f.title} feature={f} index={i} />)}
        </div>
      </div>
    </section>
  )
}
