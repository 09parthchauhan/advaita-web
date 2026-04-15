import { useState } from 'react'
import { motion } from 'framer-motion'

/* ── Price data ─────────────────────────────────────────── */

const PRICES = {
  Basic:  { monthly: 20000, quarterly: 15000, annually: 12000 },
  Pro:    { monthly: 50000, quarterly: 37500, annually: 30000 },
  Max:    { monthly: 100000, quarterly: 75000, annually: 60000 },
}


const FEATURES = {
  Basic: [
    'Up to 10M events/month',
    '5 team members',
    '3-month data retention',
    'Core funnels & retention',
    '3 data destinations',
    '2,000 AI credits/mo',
    'Email support',
  ],
  Pro: [
    'Up to 50M events/month',
    '20 team members',
    '1-year data retention',
    'Advanced funnels, cohorts & A/B testing',
    'Unlimited data destinations',
    'API access',
    '5,000 AI credits/mo',
    'Priority support',
  ],
  Max: [
    'Unlimited events',
    'Unlimited team members',
    'Custom data retention',
    'All Pro features',
    'SSO & SAML',
    'On-premise deployment option',
    'Dedicated support + SLA',
    '10,000 AI credits/mo',
  ],
}

const CYCLES = ['monthly', 'quarterly', 'annually']
const SAVINGS = { monthly: null, quarterly: '−25%', annually: '−40%' }

function formatINR(amount) {
  if (amount >= 100000) {
    const val = amount / 100000
    return `₹${val % 1 === 0 ? val.toFixed(0) : val.toFixed(1)}L`
  }
  if (amount >= 1000) {
    const val = amount / 1000
    return `₹${val % 1 === 0 ? val.toFixed(0) : val.toFixed(1)}K`
  }
  return `₹${amount}`
}

/* ── Sub-components ─────────────────────────────────────── */

function BillingToggle({ cycle, onChange }) {
  return (
    <div
      role="group"
      aria-label="Billing cycle"
      style={{
        display: 'flex',
        width: 'fit-content',
        margin: '0 auto 40px',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 10,
        overflow: 'hidden',
      }}
    >
      {CYCLES.map((c) => (
        <button
          key={c}
          type="button"
          aria-pressed={cycle === c}
          onClick={() => onChange(c)}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: '0.78rem',
            fontWeight: 600,
            padding: '8px 20px',
            color: cycle === c ? '#F0EBE0' : 'rgba(255,255,255,0.35)',
            background: cycle === c ? 'rgba(255,255,255,0.07)' : 'transparent',
            border: 'none',
            borderRight: c !== 'annually' ? '1px solid rgba(255,255,255,0.1)' : 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            transition: 'background 0.15s, color 0.15s',
          }}
        >
          {c.charAt(0).toUpperCase() + c.slice(1)}
          {SAVINGS[c] && (
            <span style={{
              background: '#1A7A2E',
              color: '#fff',
              fontSize: '0.55rem',
              padding: '1px 5px',
              borderRadius: 4,
              fontWeight: 700,
            }}>
              {SAVINGS[c]}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
      <circle cx="7" cy="7" r="7" fill="rgba(244,123,32,0.15)" />
      <path d="M3.5 7l2.5 2.5L10.5 4.5" stroke="#F47B20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PricingCard({ tier, cycle, featured, delay }) {
  const price = PRICES[tier][cycle]
  const ctaLabel = tier === 'Basic' ? 'Get Started' : tier === 'Pro' ? 'Get Early Access' : 'Contact Us'
  const ctaHref = tier === 'Max' ? '#contact' : '#waitlist'

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      style={{
        background: featured ? 'rgba(244,123,32,0.07)' : 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: featured
          ? '1px solid rgba(244,123,32,0.3)'
          : '1px solid rgba(255,255,255,0.08)',
        borderRadius: 20,
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {featured && (
        <div style={{ marginBottom: 8 }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(244,123,32,0.15)',
            border: '1px solid rgba(244,123,32,0.35)',
            borderRadius: 6,
            padding: '2px 10px',
            fontSize: '0.6rem',
            fontWeight: 700,
            color: '#F47B20',
            fontFamily: "'Manrope', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}>
            Recommended
          </span>
        </div>
      )}

      <div style={{
        fontSize: '0.65rem',
        fontWeight: 700,
        color: featured ? '#F47B20' : 'rgba(255,255,255,0.3)',
        fontFamily: "'Manrope', sans-serif",
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        marginBottom: 8,
      }}>
        {tier}
      </div>

      <div style={{
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 700,
        fontSize: '2.2rem',
        color: '#F0EBE0',
        letterSpacing: '-0.03em',
        lineHeight: 1,
        marginBottom: 4,
      }}>
        {formatINR(price)}
      </div>
      <div style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: '0.72rem',
        color: 'rgba(255,255,255,0.25)',
        marginBottom: 20,
      }}>
        per month
      </div>

      <a
        href={ctaHref}
        style={{
          display: 'block',
          textAlign: 'center',
          padding: '11px 0',
          borderRadius: 8,
          fontWeight: 700,
          fontSize: '0.875rem',
          textDecoration: 'none',
          fontFamily: "'Manrope', sans-serif",
          background: featured
            ? 'linear-gradient(135deg, #F47B20, #F5D000)'
            : 'rgba(255,255,255,0.06)',
          color: featured ? '#000' : 'rgba(255,255,255,0.6)',
          border: featured ? 'none' : '1px solid rgba(255,255,255,0.1)',
          transition: 'opacity 0.15s',
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
      >
        {ctaLabel}
      </a>

      <hr style={{
        border: 'none',
        borderTop: featured
          ? '1px solid rgba(244,123,32,0.15)'
          : '1px solid rgba(255,255,255,0.07)',
        margin: '20px 0 0',
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 16 }}>
        {FEATURES[tier].map((f) => (
          <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <CheckIcon />
            <span style={{
              fontSize: '0.78rem',
              color: featured ? 'rgba(240,235,224,0.75)' : 'rgba(240,235,224,0.45)',
              fontFamily: "'Manrope', sans-serif",
              lineHeight: 1.5,
            }}>
              {f}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

/* ── Main component ─────────────────────────────────────── */

export function PricingSection() {
  const [cycle, setCycle] = useState('monthly')

  return (
    <section id="pricing" style={{
      background: '#0E0E0E',
      padding: '96px 0 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle top-center glow */}
      <div aria-hidden style={{
        position: 'absolute',
        top: '-80px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 700,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(244,123,32,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="lp-wrap" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              color: '#F0EBE0',
              margin: '0 0 12px',
              letterSpacing: '-0.025em',
            }}
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '1rem',
              color: 'rgba(240,235,224,0.4)',
              margin: '0 0 32px',
            }}
          >
            Choose the plan that fits your team.
          </motion.p>
          <BillingToggle cycle={cycle} onChange={setCycle} />
        </div>

        {/* Three cards */}
        <div
          style={{
            display: 'grid',
            gap: 20,
            alignItems: 'stretch',
            maxWidth: 1100,
            margin: '0 auto',
          }}
          className="pricing-cards-grid"
        >
          <PricingCard tier="Basic" cycle={cycle} featured={false} delay={0.05} />
          <PricingCard tier="Pro"   cycle={cycle} featured={true}  delay={0.12} />
          <PricingCard tier="Max"   cycle={cycle} featured={false} delay={0.19} />
        </div>

        {/* AI credits note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            textAlign: 'center',
            fontFamily: "'Manrope', sans-serif",
            fontSize: '0.75rem',
            color: 'rgba(240,235,224,0.25)',
            marginTop: 24,
          }}
        >
          1 AI credit = 20 AI operations · Basic 2K · Pro 5K · Max 10K credits/mo
        </motion.p>
      </div>

      <style>{`
        .pricing-cards-grid { grid-template-columns: 1fr 1fr 1fr; }
        @media (max-width: 860px) {
          .pricing-cards-grid { grid-template-columns: 1fr; }
        }
        @media (min-width: 861px) and (max-width: 1060px) {
          .pricing-cards-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </section>
  )
}
