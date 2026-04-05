import { useState } from 'react'
import logoImg from '../assets/Logo.jpeg'

/* ─── Data ─────────────────────────────────────────────────── */

const BILLING_CYCLES = [
  { key: 'monthly',   label: 'Monthly' },
  { key: 'quarterly', label: 'Quarterly' },
  { key: 'yearly',    label: 'Yearly' },
]

const PLANS = [
  {
    key: 'basic',
    name: 'Basic',
    badge: null,
    highlight: false,
    tagline: 'Perfect for growing startups and small teams.',
    prices: {
      monthly:   { monthly: 20000, billing: null },
      quarterly: { monthly: 15000, billing: '₹45,000 billed every 3 months' },
      yearly:    { monthly: 12000, billing: '₹1,44,000 billed annually' },
    },
    credits: '2,000 credits / month',
    features: [
      'Up to 2,000 AI credits/month',
      '1 AI credit = 20 advanced AI operations',
      'Real-time event ingestion',
      'Funnel & retention analytics',
      'Self-hosted or cloud',
      'Data hosting included',
      'Community support',
    ],
    cta: 'Get started',
  },
  {
    key: 'pro',
    name: 'Pro',
    badge: 'Most popular',
    highlight: true,
    tagline: 'For teams that run serious analytics at scale.',
    prices: {
      monthly:   { monthly: 50000, billing: null },
      quarterly: { monthly: 37500, billing: '₹1,12,500 billed every 3 months' },
      yearly:    { monthly: 30000, billing: '₹3,60,000 billed annually' },
    },
    credits: '5,000 credits / month',
    features: [
      'Up to 5,000 AI credits/month',
      '1 AI credit = 20 advanced AI operations',
      'Everything in Basic',
      'AI anomaly detection',
      'Natural language queries (DS Bot)',
      'Priority event processing',
      'Data hosting included',
      'Email + Slack support',
    ],
    cta: 'Start free trial',
  },
  {
    key: 'max',
    name: 'Max',
    badge: null,
    highlight: false,
    tagline: 'Enterprise-grade power for high-volume products.',
    prices: {
      monthly:   { monthly: 100000, billing: null },
      quarterly: { monthly: 75000,  billing: '₹2,25,000 billed every 3 months' },
      yearly:    { monthly: 60000,  billing: '₹7,20,000 billed annually' },
    },
    credits: '10,000 credits / month',
    features: [
      'Up to 10,000 AI credits/month',
      '1 AI credit = 20 advanced AI operations',
      'Everything in Pro',
      'Dedicated infrastructure',
      'Custom event schemas',
      'Advanced user segmentation',
      'Data hosting included',
      'SLA + dedicated support',
    ],
    cta: 'Contact sales',
  },
]

const FAQS = [
  {
    q: 'What is a credit?',
    a: 'One credit powers 20 advanced AI operations — including natural language queries, anomaly alerts, DS Bot reports, and AI-generated insights. Basic event tracking does not consume credits.',
  },
  {
    q: 'Is data hosting included?',
    a: 'Yes. All plans include data hosting. You can also self-host Advaita on your own infrastructure at no extra cost — it\'s fully open source.',
  },
  {
    q: 'Why is Advaita ~10x cheaper than competitors?',
    a: 'Advaita is built on open-source infrastructure (ClickHouse, Kafka, FastAPI) with no legacy overhead. We pass those savings directly to you — no per-event surcharges, no surprise bills.',
  },
  {
    q: 'Can I switch plans later?',
    a: 'Absolutely. You can upgrade or downgrade at any time. Prorated billing applies for mid-cycle changes.',
  },
  {
    q: 'Do quarterly and yearly plans auto-renew?',
    a: 'Yes, unless you cancel before the renewal date. You can manage billing from your workspace settings.',
  },
]

/* ─── Helpers ───────────────────────────────────────────────── */

function formatINR(amount) {
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(amount % 100000 === 0 ? 0 : 1)} L`
  }
  return `₹${amount.toLocaleString('en-IN')}`
}

/* ─── Sub-components ────────────────────────────────────────── */

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <circle cx="7.5" cy="7.5" r="7.5" fill="rgba(26,122,46,0.18)" />
      <path d="M4.5 7.5l2 2 4-4" stroke="#1A7A2E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BillingToggle({ active, onChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, paddingTop: 18 }}>
      <div style={{
        display: 'inline-flex',
        background: '#1a1a1a',
        border: '1px solid rgba(255,255,255,0.09)',
        borderRadius: 999,
        padding: '4px 4px',
        gap: 2,
        alignItems: 'center',
      }}>
        {BILLING_CYCLES.map(c => {
          const savingsBadge = c.key === 'quarterly'
            ? { text: 'SAVE 25%', bg: '#F5D000', color: '#0E0E0E' }
            : c.key === 'yearly'
            ? { text: 'SAVE 40%', bg: '#F5D000', color: '#0E0E0E' }
            : null
          return (
            <div key={c.key} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {savingsBadge && (
                <span style={{
                  position: 'absolute',
                  top: -20,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: savingsBadge.bg,
                  color: savingsBadge.color,
                  fontSize: '0.55rem',
                  fontWeight: 800,
                  padding: '2px 7px',
                  borderRadius: 999,
                  letterSpacing: '0.06em',
                  whiteSpace: 'nowrap',
                  fontFamily: "'Manrope', sans-serif",
                  lineHeight: 1.5,
                }}>
                  {savingsBadge.text}
                </span>
              )}
              <button
                onClick={() => onChange(c.key)}
                style={{
                  padding: '8px 22px',
                  borderRadius: 999,
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  fontFamily: "'Manrope', sans-serif",
                  background: active === c.key ? '#F47B20' : 'transparent',
                  color: active === c.key ? '#ffffff' : 'rgba(240,235,224,0.55)',
                  transition: 'background 0.2s, color 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {c.label}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function PlanCard({ plan, cycle, onCta }) {
  const price = plan.prices[cycle]
  const isHighlight = plan.highlight

  return (
    <div style={{
      position: 'relative',
      background: isHighlight ? 'linear-gradient(160deg, #1a1208 0%, #161616 60%)' : '#161616',
      borderRadius: 20,
      border: isHighlight ? '1.5px solid rgba(244,123,32,0.35)' : '1px solid rgba(255,255,255,0.07)',
      padding: '32px 28px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      boxShadow: isHighlight ? '0 0 40px rgba(244,123,32,0.08)' : 'none',
      transition: 'transform 0.2s, box-shadow 0.2s',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = isHighlight
          ? '0 8px 48px rgba(244,123,32,0.14)'
          : '0 8px 32px rgba(0,0,0,0.25)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = isHighlight ? '0 0 40px rgba(244,123,32,0.08)' : 'none'
      }}
    >
      {/* Popular badge */}
      {plan.badge && (
        <div style={{
          position: 'absolute',
          top: -13,
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#F47B20',
          color: '#fff',
          fontSize: '0.7rem',
          fontWeight: 700,
          padding: '3px 14px',
          borderRadius: 999,
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          fontFamily: "'Manrope', sans-serif",
        }}>
          {plan.badge}
        </div>
      )}

      {/* Plan name */}
      <div style={{ marginBottom: 4 }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '1.35rem',
          color: '#F0EBE0',
        }}>
          {plan.name}
        </span>
      </div>

      {/* Tagline */}
      <p style={{
        fontSize: '0.825rem',
        color: 'rgba(240,235,224,0.5)',
        margin: '0 0 24px',
        lineHeight: 1.5,
        fontFamily: "'Manrope', sans-serif",
      }}>
        {plan.tagline}
      </p>

      {/* Price */}
      <div style={{ marginBottom: 4 }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 900,
          fontSize: '2.4rem',
          color: '#F0EBE0',
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}>
          {formatINR(price.monthly)}
        </span>
        <span style={{
          fontSize: '0.825rem',
          color: 'rgba(240,235,224,0.4)',
          marginLeft: 4,
          fontFamily: "'Manrope', sans-serif",
        }}>
          / month
        </span>
      </div>

      {/* Billing note */}
      <p style={{
        fontSize: '0.75rem',
        color: 'rgba(240,235,224,0.35)',
        margin: '4px 0 20px',
        minHeight: 18,
        fontFamily: "'Manrope', sans-serif",
      }}>
        {price.billing || '\u00A0'}
      </p>

      {/* Credits pill */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: 'rgba(245,208,0,0.07)',
        border: '1px solid rgba(245,208,0,0.18)',
        borderRadius: 999,
        padding: '5px 12px',
        marginBottom: 24,
        alignSelf: 'flex-start',
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F5D000', flexShrink: 0 }} />
        <span style={{
          fontSize: '0.775rem',
          color: '#F5D000',
          fontWeight: 600,
          fontFamily: "'Manrope', sans-serif",
          letterSpacing: '0.01em',
        }}>
          {plan.credits}
        </span>
      </div>

      {/* CTA */}
      <button
        onClick={() => onCta && onCta(plan)}
        style={{
          width: '100%',
          padding: '13px 0',
          borderRadius: 10,
          border: isHighlight ? 'none' : '1.5px solid rgba(255,255,255,0.12)',
          background: isHighlight ? '#F47B20' : 'transparent',
          color: isHighlight ? '#fff' : '#F0EBE0',
          fontSize: '0.9rem',
          fontWeight: 700,
          fontFamily: "'Manrope', sans-serif",
          cursor: 'pointer',
          letterSpacing: '0.02em',
          transition: 'background 0.18s, transform 0.15s, box-shadow 0.15s',
          marginBottom: 24,
        }}
        onMouseEnter={e => {
          if (isHighlight) {
            e.currentTarget.style.background = '#e0701c'
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(244,123,32,0.35)'
          } else {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
          }
        }}
        onMouseLeave={e => {
          if (isHighlight) {
            e.currentTarget.style.background = '#F47B20'
            e.currentTarget.style.boxShadow = 'none'
          } else {
            e.currentTarget.style.background = 'transparent'
          }
        }}
      >
        {plan.cta} {isHighlight ? '→' : ''}
      </button>

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginBottom: 20 }} />

      {/* Features */}
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
        {plan.features.map(f => (
          <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <span style={{ flexShrink: 0, marginTop: 1 }}><CheckIcon /></span>
            <span style={{
              fontSize: '0.83rem',
              color: 'rgba(240,235,224,0.7)',
              lineHeight: 1.45,
              fontFamily: "'Manrope', sans-serif",
            }}>
              {f}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      paddingBottom: 0,
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '20px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          fontFamily: "'Manrope', sans-serif",
        }}
      >
        <span style={{
          fontSize: '0.925rem',
          fontWeight: 600,
          color: '#F0EBE0',
          lineHeight: 1.4,
        }}>
          {q}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{
            flexShrink: 0,
            color: 'rgba(240,235,224,0.4)',
            transition: 'transform 0.22s',
            transform: open ? 'rotate(180deg)' : 'none',
          }}
        >
          <path d="M3 5.5l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <p style={{
          fontSize: '0.875rem',
          color: 'rgba(240,235,224,0.55)',
          lineHeight: 1.65,
          margin: '0 0 20px',
          fontFamily: "'Manrope', sans-serif",
        }}>
          {a}
        </p>
      )}
    </div>
  )
}

/* ─── Main Page ─────────────────────────────────────────────── */

export default function Pricing({ onBack }) {
  const [cycle, setCycle] = useState('monthly')

  const handleCta = (plan) => {
    if (plan.key === 'max') {
      window.location.hash = '#contact'
    } else {
      window.location.hash = '#waitlist'
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0E0E0E',
      color: '#F0EBE0',
      fontFamily: "'Manrope', sans-serif",
    }}>

      {/* ── Navbar ─────────────────────────────────────────────── */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        background: 'rgba(14,14,14,0.92)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '0 28px',
      }}>
        <div style={{
          maxWidth: 1180,
          margin: '0 auto',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <a
            href="#"
            onClick={e => { e.preventDefault(); onBack && onBack() }}
            style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
          >
            <img
              src={logoImg}
              alt="Advaita logo"
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                mixBlendMode: 'lighten',
                objectFit: 'cover',
              }}
            />
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '1.15rem',
              color: '#F0EBE0',
              letterSpacing: '0.02em',
            }}>
              ADVAITA
            </span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a
              href="#"
              onClick={e => { e.preventDefault(); onBack && onBack() }}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'rgba(240,235,224,0.5)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#F0EBE0'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,235,224,0.5)'}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to home
            </a>
            <a
              href="#waitlist"
              onClick={() => onBack && onBack()}
              style={{
                padding: '8px 18px',
                background: '#F47B20',
                color: '#fff',
                borderRadius: 7,
                fontSize: '0.875rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'background 0.15s',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#e0701c'}
              onMouseLeave={e => e.currentTarget.style.background = '#F47B20'}
            >
              Get early access
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: '88px 28px 48px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* Value callout badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(14,14,14,0.9)',
          border: '1px solid rgba(26,122,46,0.45)',
          borderRadius: 999,
          padding: '5px 16px',
          marginBottom: 28,
        }}>
          <span style={{ color: '#F47B20', fontSize: '0.85rem', lineHeight: 1 }}>★</span>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 800,
            color: '#F0EBE0',
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            fontFamily: "'Manrope', sans-serif",
          }}>
            ~10X LESS THAN AMPLITUDE &amp; MIXPANEL
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(2.6rem, 5.5vw, 4rem)',
          color: '#F0EBE0',
          margin: '0 0 20px',
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
        }}>
          Simple, honest pricing
        </h1>

        <p style={{
          fontSize: '1rem',
          color: 'rgba(240,235,224,0.5)',
          maxWidth: 500,
          margin: '0 auto 40px',
          lineHeight: 1.7,
          fontFamily: "'Manrope', sans-serif",
        }}>
          Full-stack analytics with AI insights, data hosting included —
          no per-event surcharges, no seat taxes, no surprises.
        </p>

        <BillingToggle active={cycle} onChange={setCycle} />
      </section>

      {/* ── Competitor comparison bar ──────────────────────────── */}
      <div style={{ padding: '0 28px 52px' }}>
        <div style={{
          maxWidth: 1180,
          margin: '0 auto',
          background: '#161616',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 16,
          padding: '18px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
        }}>
          {/* Left label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <span style={{ fontSize: '1.1rem' }}>💡</span>
            <span style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              color: '#F0EBE0',
              fontFamily: "'Manrope', sans-serif",
              whiteSpace: 'nowrap',
            }}>
              Advaita vs Amplitude / Mixpanel
            </span>
          </div>

          {/* Center prices */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {/* Amplitude strikethrough */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '0.65rem',
                color: 'rgba(240,235,224,0.35)',
                fontFamily: "'Manrope', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: 2,
              }}>
                AMPLITUDE (EQUIVALENT)
              </div>
              <div style={{
                fontSize: '1rem',
                fontWeight: 700,
                fontFamily: "'Manrope', sans-serif",
                color: 'rgba(240,235,224,0.28)',
                textDecoration: 'line-through',
              }}>
                ~₹5,00,000/mo
              </div>
            </div>

            <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />

            {/* Advaita price */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '0.65rem',
                color: 'rgba(240,235,224,0.35)',
                fontFamily: "'Manrope', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: 2,
              }}>
                ADVAITA PRO
              </div>
              <div style={{
                fontSize: '1rem',
                fontWeight: 800,
                fontFamily: "'Manrope', sans-serif",
                color: '#F47B20',
              }}>
                ₹50,000/mo
              </div>
            </div>
          </div>

          {/* Right badge */}
          <div style={{
            background: '#1A7A2E',
            color: '#fff',
            fontSize: '0.72rem',
            fontWeight: 800,
            padding: '5px 14px',
            borderRadius: 999,
            fontFamily: "'Manrope', sans-serif",
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}>
            10X SAVINGS
          </div>
        </div>
      </div>

      {/* ── Plan cards ─────────────────────────────────────────── */}
      <section style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: '0 28px 80px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
          alignItems: 'start',
        }}>
          {PLANS.map(plan => (
            <PlanCard key={plan.key} plan={plan} cycle={cycle} onCta={handleCta} />
          ))}
        </div>
      </section>

      {/* ── Included in all plans ──────────────────────────────── */}
      <section style={{
        background: '#161616',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '56px 28px',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '1.6rem',
            color: '#F0EBE0',
            marginBottom: 8,
          }}>
            Included in every plan
          </h2>
          <p style={{
            fontSize: '0.875rem',
            color: 'rgba(240,235,224,0.45)',
            marginBottom: 36,
            fontFamily: "'Manrope', sans-serif",
          }}>
            No add-ons, no gotchas — these come standard.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 20,
          }}>
            {[
              { icon: '🗄️', title: 'Data hosting', desc: 'Managed storage on secure cloud infrastructure.' },
              { icon: '🔒', title: 'GDPR compliant', desc: 'Privacy-first defaults, data deletion on request.' },
              { icon: '⚡', title: '<5ms latency', desc: 'Sub-5ms event ingestion, always.' },
              { icon: '🌐', title: 'Self-hostable', desc: 'Deploy on your own infra — 100% open source.' },
              { icon: '🤖', title: 'DS Bot', desc: 'AI analyst built in, answers in plain English.' },
              { icon: '📊', title: 'Unlimited events', desc: 'Track every event with no per-event caps.' },
            ].map(item => (
              <div key={item.title} style={{
                background: '#0E0E0E',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 14,
                padding: '22px 20px',
                textAlign: 'left',
              }}>
                <div style={{ fontSize: '1.4rem', marginBottom: 10 }}>{item.icon}</div>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: '#F0EBE0',
                  marginBottom: 5,
                  fontFamily: "'Manrope', sans-serif",
                }}>
                  {item.title}
                </div>
                <div style={{
                  fontSize: '0.8rem',
                  color: 'rgba(240,235,224,0.45)',
                  lineHeight: 1.5,
                  fontFamily: "'Manrope', sans-serif",
                }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: '72px 28px 80px',
      }}>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '1.75rem',
          color: '#F0EBE0',
          marginBottom: 8,
          textAlign: 'center',
        }}>
          Frequently asked questions
        </h2>
        <p style={{
          fontSize: '0.875rem',
          color: 'rgba(240,235,224,0.45)',
          textAlign: 'center',
          marginBottom: 40,
          fontFamily: "'Manrope', sans-serif",
        }}>
          Still have questions?{' '}
          <a href="#contact" style={{ color: '#F47B20', textDecoration: 'none', fontWeight: 600 }}>
            Talk to us
          </a>
        </p>

        <div>
          {FAQS.map(faq => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ─────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #111 0%, #1a0e05 50%, #111 100%)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{
          maxWidth: 680,
          margin: '0 auto',
          padding: '72px 28px',
          textAlign: 'center',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <img
              src={logoImg}
              alt="Advaita"
              style={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                mixBlendMode: 'lighten',
                objectFit: 'cover',
              }}
            />
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
            color: '#F0EBE0',
            margin: '0 0 14px',
            lineHeight: 1.2,
          }}>
            Start tracking in under 5 minutes
          </h2>
          <p style={{
            fontSize: '0.975rem',
            color: 'rgba(240,235,224,0.5)',
            marginBottom: 32,
            lineHeight: 1.6,
            fontFamily: "'Manrope', sans-serif",
          }}>
            Three lines of code. Full visibility. Backed by iHub.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#waitlist"
              onClick={() => onBack && onBack()}
              style={{
                padding: '13px 28px',
                background: '#F47B20',
                color: '#fff',
                borderRadius: 8,
                fontSize: '0.95rem',
                fontWeight: 700,
                textDecoration: 'none',
                fontFamily: "'Manrope', sans-serif",
                letterSpacing: '0.02em',
                transition: 'background 0.15s, box-shadow 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#e0701c'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(244,123,32,0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#F47B20'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Join the waitlist →
            </a>
            <a
              href="#contact"
              style={{
                padding: '13px 28px',
                background: 'transparent',
                color: '#F0EBE0',
                border: '1.5px solid rgba(255,255,255,0.14)',
                borderRadius: 8,
                fontSize: '0.95rem',
                fontWeight: 600,
                textDecoration: 'none',
                fontFamily: "'Manrope', sans-serif",
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'}
            >
              Contact sales
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '24px 28px',
        textAlign: 'center',
      }}>
        <p style={{
          fontSize: '0.78rem',
          color: 'rgba(240,235,224,0.3)',
          margin: 0,
          fontFamily: "'Manrope', sans-serif",
        }}>
          © {new Date().getFullYear()} Advaita. Open source. Self-hostable. Backed by iHub.
        </p>
      </footer>
    </div>
  )
}
