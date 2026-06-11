import { useEffect, useRef, useState } from 'react'
import AnnouncementBar from '../components/Announcementbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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

const sections = [
  {
    id: 'overview',
    title: 'Overview',
    content: [
      {
        text: 'This Refund & Cancellation Policy explains how subscriptions to Advaita Intelligence are cancelled and when fees are eligible for a refund. It applies to all paid plans — Basic, Pro, and Max — across monthly, quarterly, and annual billing cycles. This policy should be read together with our Terms of Service.',
      },
      {
        subtitle: 'Who This Covers',
        text: 'These terms apply to self-serve subscriptions purchased through advaita-tech.com. Enterprise and Private Hosting agreements are governed by the specific commercial terms in your signed order form, which take precedence over this policy where they differ.',
      },
    ],
  },
  {
    id: 'billing-cycles',
    title: 'Subscription Plans & Billing',
    content: [
      {
        subtitle: 'Billing Cycles',
        text: 'Advaita is offered on monthly, quarterly, and annual billing cycles. Quarterly and annual plans are billed upfront for the full term and include a discount compared to month-to-month pricing. Current pricing is published at advaita-tech.com/pricing.',
      },
      {
        subtitle: 'Automatic Renewal',
        text: 'All subscriptions renew automatically at the end of each billing cycle using your saved payment method, at the then-current rate for your plan. You may cancel auto-renewal at any time before the next renewal date from your account settings.',
      },
      {
        subtitle: 'AI Credits',
        text: 'Paid plans include a monthly allotment of AI Credits. Credits reset at the start of each billing cycle and do not carry over. Consumed credits represent services already rendered and are not refundable.',
      },
    ],
  },
  {
    id: 'cancellation',
    title: 'How to Cancel',
    content: [
      {
        subtitle: 'Self-Serve Cancellation',
        text: 'You can cancel your subscription at any time from Account Settings → Billing, or by emailing billing@advaita-tech.com. No phone call or retention process is required — cancellation is a single confirmation step.',
      },
      {
        subtitle: 'When Cancellation Takes Effect',
        text: 'When you cancel, your plan remains active until the end of the current paid billing period. You retain full access to dashboards, AI insights, and data export until that date, after which the account moves to a limited free state.',
      },
      {
        subtitle: 'Your Data After Cancellation',
        text: 'Following cancellation we retain your data for 30 days so you can reactivate or export it. After this window, event data and account data are permanently deleted from our systems and backups, as described in our Privacy Policy.',
      },
    ],
  },
  {
    id: 'refund-eligibility',
    title: 'Refund Eligibility',
    content: [
      {
        subtitle: 'Monthly Plans',
        text: 'Monthly subscriptions can be cancelled at any time, but fees already charged for the current month are non-refundable. You keep access for the remainder of the month you have paid for.',
      },
      {
        subtitle: '30-Day Guarantee on Annual & Quarterly Plans',
        text: 'New quarterly and annual subscriptions are eligible for a full refund if you request it within 30 days of the initial purchase and the service has not met your requirements. This guarantee applies to the first term only, not to renewals.',
      },
      {
        subtitle: 'After the First 30 Days',
        text: 'Beyond the 30-day window, prepaid annual and quarterly plans are non-refundable for the remainder of the committed term. You may still cancel to stop future renewals, and your plan stays active until the term ends.',
      },
    ],
  },
  {
    id: 'non-refundable',
    title: 'Non-Refundable Charges',
    content: [
      {
        text: 'Certain charges are not eligible for refund under any plan. These include AI Credits that have already been consumed, one-time onboarding or implementation fees, usage-based overage charges beyond your plan allotment, optional add-ons that have been activated, and applicable taxes or payment-processing fees.',
      },
      {
        subtitle: 'Renewals',
        text: 'Renewal charges are not covered by the 30-day guarantee. Because we send a renewal reminder before each cycle, we encourage you to cancel ahead of the renewal date if you do not intend to continue.',
      },
    ],
  },
  {
    id: 'refund-process',
    title: 'Refund Process & Timeline',
    content: [
      {
        subtitle: 'How to Request',
        text: 'To request a refund, email billing@advaita-tech.com from your account email with your workspace name and the charge in question. We aim to acknowledge every request within two business days.',
      },
      {
        subtitle: 'Processing Time',
        text: 'Approved refunds are issued to the original payment method. Once processed, funds typically appear within 5–10 business days, depending on your bank or card issuer. Refunds are made in the original currency of the transaction.',
      },
    ],
  },
  {
    id: 'plan-changes',
    title: 'Upgrades, Downgrades & Proration',
    content: [
      {
        subtitle: 'Upgrades',
        text: 'When you upgrade mid-cycle (for example, Basic to Pro), the change takes effect immediately and we charge a prorated amount for the remainder of the current billing period.',
      },
      {
        subtitle: 'Downgrades',
        text: 'Downgrades take effect at the start of your next billing cycle so you keep the higher-tier features you have already paid for. We do not issue refunds for the price difference when downgrading mid-cycle.',
      },
    ],
  },
  {
    id: 'free-trial',
    title: 'Free Trials',
    content: [
      {
        text: 'If your plan includes a free trial, you will not be charged until the trial ends. You can cancel any time before the trial concludes to avoid being billed. Once the trial converts to a paid subscription, the standard refund terms for your chosen plan apply. Promotional or complimentary AI Credits hold no cash value and are non-refundable and non-transferable.',
      },
    ],
  },
  {
    id: 'enterprise',
    title: 'Enterprise & Private Hosting',
    content: [
      {
        text: 'Enterprise and Private Hosting customers are billed under a custom order form or master services agreement. Cancellation notice periods, committed terms, and refund eligibility are defined in that agreement and override this policy where they conflict. For changes to an enterprise contract, contact your account manager or sales@advaita-tech.com.',
      },
    ],
  },
  {
    id: 'exceptions',
    title: 'Exceptions & Billing Errors',
    content: [
      {
        subtitle: 'Duplicate or Incorrect Charges',
        text: 'If you are charged in error — for example a duplicate transaction or an incorrect amount — we will refund the affected charge in full once verified, regardless of the standard refund windows above.',
      },
      {
        subtitle: 'Extended Service Outages',
        text: 'Where an outage within our control breaches our uptime commitment, eligible customers may receive service credits as described in the SLA section of our Terms of Service. Service credits are applied to future invoices rather than refunded as cash, unless required by law.',
      },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    content: [
      {
        text: 'We may update this Refund & Cancellation Policy to reflect changes in our plans, payment providers, or legal requirements. Material changes are communicated by email and in-app notice at least 30 days before they take effect. The latest version is always available at this URL.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: [
      {
        text: 'For any billing, cancellation, or refund questions, contact our team at billing@advaita-tech.com or write to Advaita Intelligence Private Limited, Ahmedabad, Gujarat, India. We are happy to help.',
      },
    ],
  },
]

export default function RefundPolicy() {
  const [heroRef, heroVisible] = useReveal(0.1)

  return (
    <div className="min-h-screen bg-soft-gray text-jet-black">
      <AnnouncementBar />
      <Navbar />

      <main>
        {/* Hero */}
        <section ref={heroRef} className="pt-28 pb-20 overflow-hidden">
          <div className="w-full max-w-[1480px] mx-auto px-5">
            <div className={`anim-label inline-flex items-center gap-2.5 mb-8 text-gray-cloud text-[11px] font-bold tracking-[0.16em] uppercase ${heroVisible ? 'is-visible' : ''}`}>
              <span className="w-2.5 h-2.5 bg-brand-orange" />
              Legal
            </div>
            <h1>
              <span className="block overflow-hidden">
                <span className={`headline-reveal-line text-jet-black font-medium ${heroVisible ? 'is-visible' : ''}`} style={{ fontSize: 'clamp(42px, 5.6vw, 64px)', lineHeight: 1.1, letterSpacing: '-0.04em' }}>
                  Refund &amp; Cancellation Policy
                </span>
              </span>
            </h1>
            <p className={`scroll-reveal max-w-[700px] text-[#565653] text-[17px] font-medium leading-[1.65] mt-7 ${heroVisible ? 'is-visible' : ''}`}>
              How subscriptions to Advaita Intelligence are cancelled and when fees can be refunded. Clear rules, fair windows, no hidden retention tactics.
            </p>
            <div className={`scroll-reveal mt-6 inline-flex items-center gap-2.5 text-gray-cloud text-[13px] font-semibold ${heroVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
              <span className="w-[7px] h-[7px] bg-[#4a9e1a]" />
              Last updated — June 1, 2026
            </div>
          </div>
        </section>

        {/* Table of Contents + Content */}
        <section className="pb-28">
          <div className="w-full max-w-[1480px] mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-16 items-start">

              {/* Sidebar TOC */}
              <nav className="hidden lg:block sticky top-28 self-start">
                <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-gray-cloud mb-6">On this page</p>
                <div className="grid gap-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block px-4 py-2.5 text-[15px] font-medium text-[#676665] no-underline hover:text-jet-black hover:bg-[#eeece4] transition-colors duration-200"
                    >
                      {section.title}
                    </a>
                  ))}
                </div>
              </nav>

              {/* Content Sections */}
              <div className="max-w-[860px]">
                {sections.map((section, sectionIndex) => (
                  <RefundSection key={section.id} section={section} index={sectionIndex} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function RefundSection({ section, index }) {
  const [ref, visible] = useReveal(0.12)

  return (
    <section
      ref={ref}
      id={section.id}
      className="scroll-mt-28 pb-14 mb-4 border-b border-black/10 last:border-b-0"
    >
      <div className={`scroll-reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.06s' }}>
        <span className="inline-block text-[12px] font-extrabold text-[#8b7b68] mb-3 tracking-wide">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="text-jet-black font-medium mb-8" style={{ fontSize: 'clamp(28px, 3.2vw, 38px)', lineHeight: 1.12, letterSpacing: '-0.04em' }}>
          {section.title}
        </h2>
      </div>

      <div className="grid gap-8">
        {section.content.map((block, i) => (
          <div
            key={i}
            className={`scroll-reveal ${visible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${0.12 + i * 0.08}s` }}
          >
            {block.subtitle && (
              <h3 className="text-jet-black text-[17px] font-semibold mb-2 tracking-[-0.02em]">
                {block.subtitle}
              </h3>
            )}
            <p className="text-[#565653] text-[16px] font-medium leading-[1.72]">
              {block.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
