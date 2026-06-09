import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const billingOptions = [
  { id: 'monthly', label: 'Monthly', suffix: '/month', multiplier: 1 },
  { id: 'quarterly', label: 'Quarterly', suffix: '/quarter', multiplier: 2.7 },
  { id: 'annual', label: 'Annual', suffix: '/year', multiplier: 7.2, badge: 'Save up to 40%' },
]

const plans = [
  {
    name: 'Basic',
    description: 'Perfect for small teams getting started',
    price: 209,
    credits: '2,000 AI Credits',
    creditNote: 'Advanced Interlinked Operations',
    accent: '#f5820a',
    tone: 'orange',
    icon: 'bolt',
    features: [
      'Instant account activation',
      'Up to 10 team members',
      'Cloud-hosted infrastructure',
      'Email support (24-48h)',
      'Standard API access',
    ],
  },
  {
    name: 'Pro',
    description: 'For growing teams with advanced needs',
    price: 519,
    credits: '5,000 AI Credits',
    creditNote: 'Advanced Interlinked Operations',
    accent: '#4a9e1a',
    tone: 'green',
    icon: 'spark',
    popular: true,
    features: [
      'Everything in Basic',
      'Up to 50 team members',
      'Priority email support (12-24h)',
      'Advanced analytics features',
      'Custom integrations',
    ],
  },
  {
    name: 'Max',
    description: 'Maximum power for large teams',
    price: 1039,
    credits: '10,000 AI Credits',
    creditNote: 'Advanced Interlinked Operations',
    accent: '#f5d000',
    tone: 'yellow',
    icon: 'crown',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      '24/7 priority support',
      'Dedicated account manager',
      'Premium API limits',
    ],
  },
]

const privateHostingFeatures = [
  'On-premises or private cloud deployment',
  'Unlimited team members',
  'Unlimited data processing',
  'Dedicated infrastructure',
  '24/7 priority support with SLA',
  'Custom integrations and API limits',
  'Advanced security and compliance',
  'White-label options available',
]

function useReveal(threshold = 0.16) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.unobserve(entry.target)
      }
    }, { threshold })

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}

function PlanIcon({ type }) {
  if (type === 'spark') {
    return (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <path d="M15 3l2.6 8.2L26 14l-8.4 2.8L15 25l-2.6-8.2L4 14l8.4-2.8L15 3Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M6 4v4M4 6h4M24 20v5M21.5 22.5h5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'crown') {
    return (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <path d="M5 10l6 5 4-8 4 8 6-5-2.5 12h-15L5 10Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M8 25h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <path d="M16 3 7 17h8l-1 10 9-15h-8l1-9Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.2 6.4 11.5 13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ServerIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
      <path d="M10 9h22v9H10V9ZM10 24h22v9H10v-9Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M15 13.5h1M15 28.5h1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function formatUsd(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

function PricingCard({ plan, billing, index }) {
  const displayPrice = Math.round(plan.price * billing.multiplier)

  return (
    <article
      className={`pricing-card pricing-card-${plan.tone}`}
      style={{
        '--plan-accent': plan.accent,
        transitionDelay: `${0.22 + index * 0.1}s`,
      }}
    >
      {plan.popular && <div className="pricing-popular-badge">Most Popular</div>}

      <div className="pricing-card-summary">
        <div className="pricing-plan-label">
          <PlanIcon type={plan.icon} />
          <span>{plan.name} Plan</span>
        </div>
        <div className="pricing-price-row">
          <span>{formatUsd(displayPrice)}</span>
          <small>{billing.suffix}</small>
        </div>
        <h2>{plan.name}</h2>
        <p>{plan.description}</p>
      </div>

      <div className="pricing-credits">
        <div>
          <span className="pricing-info-dot">i</span>
          <strong>{plan.credits}</strong>
        </div>
        <p>{plan.creditNote}</p>
      </div>

      <ul className="pricing-feature-list">
        {plan.features.map((feature) => (
          <li key={feature}>
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a href="https://signup.acaiplatform.ai/" className="pricing-plan-button arrow-button">
        Get Started
        <svg className="arrow-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </a>
    </article>
  )
}

export default function Pricing() {
  const [billingId, setBillingId] = useState('monthly')
  const [heroRef, heroVisible] = useReveal(0.1)
  const [plansRef, plansVisible] = useReveal(0.12)
  const [hostingRef, hostingVisible] = useReveal(0.16)
  const billing = billingOptions.find((option) => option.id === billingId) || billingOptions[0]

  return (
    <div className="pricing-page min-h-screen bg-soft-gray">
      <Navbar />

      <main>
        <section ref={heroRef} className="pricing-hero">
          <div className="pricing-hero-bg" aria-hidden="true" />
          <div className="pricing-shell pricing-hero-inner">
            <div className={`pricing-kicker anim-label ${heroVisible ? 'is-visible' : ''}`}>
              <span />
              Pricing
            </div>
            <h2>
              <span className="block overflow-hidden" style={{fontSize:'54px', fontWeight:'500'}}>
                <span className={`headline-reveal-line ${heroVisible ? 'is-visible' : ''}`}>Pricing Plan</span>
              </span>
            </h2>
            <p className={`scroll-reveal ${heroVisible ? 'is-visible' : ''}`}>
              Choose the plan that fits your product intelligence workflow.
            </p>

            <div className={`pricing-toggle scroll-reveal ${heroVisible ? 'is-visible' : ''}`}>
              {billingOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={billingId === option.id ? 'is-active' : ''}
                  onClick={() => setBillingId(option.id)}
                >
                  <span>{option.label}</span>
                  {option.badge && <small>{option.badge}</small>}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section ref={plansRef} className="pricing-plans-section">
          <div className="pricing-shell">
            <div className={`pricing-grid ${plansVisible ? 'is-visible' : ''}`}>
              {plans.map((plan, index) => (
                <PricingCard key={plan.name} plan={plan} billing={billing} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section ref={hostingRef} className="private-hosting-section">
          <div className="pricing-shell">
            <h3 className={`pricing-section-title scroll-reveal ${hostingVisible ? 'is-visible' : ''}`}>Private Hosting</h3>
            <div className={`private-hosting-card ${hostingVisible ? 'is-visible' : ''}`}>
              <div className="private-hosting-icon">
                <ServerIcon />
              </div>
              <h2>Enterprise Private Hosting</h2>
              <p>
                Tailored solutions for organisations requiring on-premises or private cloud deployment with complete control and customisation.
              </p>
              <div className="private-hosting-price">Custom</div>
              <span className="private-hosting-note">Pricing based on your infrastructure and requirements</span>

              <ul className="private-hosting-features">
                {privateHostingFeatures.map((feature) => (
                  <li key={feature}>
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="/company/contact" className="private-hosting-button arrow-button">
                Contact Sales Team
                <svg className="arrow-icon" width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </a>
            </div>
            <p className={`pricing-tax-note scroll-reveal ${hostingVisible ? 'is-visible' : ''}`}>
              All plans include 18% GST · Need help deciding? <a href="/company/contact">Compare plans in detail</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
