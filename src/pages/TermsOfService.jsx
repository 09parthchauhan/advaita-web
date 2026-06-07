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
    id: 'account-terms',
    title: 'Account Terms',
    content: [
      {
        subtitle: 'Eligibility',
        text: 'You must be at least 18 years old and have the legal authority to bind the organisation you represent. By creating an account, you confirm that the information you provide is accurate and complete.',
      },
      {
        subtitle: 'Account Security',
        text: 'You are responsible for maintaining the security of your account credentials. Notify us immediately at security@advaita-tech.com if you suspect unauthorised access. We are not liable for losses caused by compromised credentials that were not reported promptly.',
      },
      {
        subtitle: 'Team Access',
        text: 'Account administrators can invite team members and assign roles. You are responsible for the activity of all users under your account, including ensuring they comply with these terms.',
      },
    ],
  },
  {
    id: 'service-usage',
    title: 'Use of the Service',
    content: [
      {
        subtitle: 'Permitted Use',
        text: 'Advaita is provided for lawful product analytics purposes. You may integrate our SDK, access dashboards, use AI-powered insights, and export data in accordance with your subscription plan.',
      },
      {
        subtitle: 'Restrictions',
        text: 'You may not reverse-engineer, decompile, or attempt to extract the source code of Advaita. You may not use the service to collect data in violation of applicable privacy laws, or to build a competing product using our platform.',
      },
      {
        subtitle: 'Fair Use',
        text: 'Each plan includes defined event volumes and query limits. If your usage consistently exceeds your plan limits, we will notify you and work with you to find the right plan. We do not throttle without notice.',
      },
    ],
  },
  {
    id: 'data-ownership',
    title: 'Data Ownership & Licensing',
    content: [
      {
        subtitle: 'Your Data',
        text: 'You retain full ownership of all data you send to Advaita. We do not claim any intellectual property rights over your product data, event streams, or analytics configurations. Your data is yours.',
      },
      {
        subtitle: 'License to Process',
        text: 'By using Advaita, you grant us a limited, non-exclusive licence to process your data solely to deliver the analytics service. This licence terminates when your account is closed and data is deleted.',
      },
      {
        subtitle: 'Aggregated Insights',
        text: 'We may use aggregated, de-identified data to improve Advaita\'s performance and AI models. This data cannot be reverse-engineered to identify any individual customer or their end users.',
      },
    ],
  },
  {
    id: 'payment',
    title: 'Payment & Billing',
    content: [
      {
        subtitle: 'Subscription Plans',
        text: 'Advaita offers monthly and annual subscription plans. Pricing is published at advaita-tech.com/pricing. Annual plans are billed upfront and offer a discount compared to monthly billing.',
      },
      {
        subtitle: 'Payment Processing',
        text: 'Payments are processed through secure third-party providers. We do not store your full credit card details on our servers. All billing information is encrypted and handled in compliance with PCI DSS standards.',
      },
      {
        subtitle: 'Refund Policy',
        text: 'Monthly plans may be cancelled at any time; no refunds are issued for partial months. Annual plans are eligible for a pro-rated refund within the first 30 days if the service does not meet your requirements.',
      },
    ],
  },
  {
    id: 'availability',
    title: 'Service Availability & SLA',
    content: [
      {
        subtitle: 'Uptime Commitment',
        text: 'We target 99.9% uptime for all paid plans. Scheduled maintenance windows are communicated at least 72 hours in advance via email and the status page at status.advaita-tech.com.',
      },
      {
        subtitle: 'Service Credits',
        text: 'If monthly uptime falls below 99.9% due to issues within our control, Pro and Enterprise customers are eligible for service credits. Credit claims must be submitted within 30 days of the incident.',
      },
      {
        subtitle: 'Force Majeure',
        text: 'Neither party is liable for failure to perform obligations due to circumstances beyond reasonable control, including natural disasters, acts of government, internet infrastructure failures, or third-party service outages.',
      },
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: [
      {
        subtitle: 'Advaita Platform',
        text: 'All rights, title, and interest in the Advaita platform — including software, AI models, documentation, design, and trademarks — remain the exclusive property of Advaita Intelligence Private Limited.',
      },
      {
        subtitle: 'Feedback',
        text: 'If you provide suggestions, feature requests, or feedback, we may use them to improve the service without obligation to you. You are not required to provide feedback.',
      },
    ],
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    content: [
      {
        subtitle: 'Service Disclaimer',
        text: 'Advaita is provided "as is" without warranties of any kind, express or implied. While we strive for accuracy in all analytics and AI-generated insights, we do not guarantee that outputs will be error-free or suitable for any specific business decision.',
      },
      {
        subtitle: 'Liability Cap',
        text: 'To the maximum extent permitted by law, Advaita Intelligence\'s total liability for any claim arising from these terms or your use of the service is limited to the fees you paid in the twelve months preceding the claim.',
      },
    ],
  },
  {
    id: 'termination',
    title: 'Termination',
    content: [
      {
        subtitle: 'By You',
        text: 'You may close your account at any time from the account settings page. Upon closure, we will retain your data for 30 days (for recovery purposes), after which it is permanently deleted from all systems and backups.',
      },
      {
        subtitle: 'By Us',
        text: 'We may suspend or terminate your account if you materially breach these terms, use the service for illegal purposes, or fail to pay outstanding invoices after 30 days. We will provide notice and an opportunity to remedy wherever possible.',
      },
      {
        subtitle: 'Effect of Termination',
        text: 'Upon termination, your right to use the service ceases immediately. You may export your data before closure. Sections relating to data ownership, limitation of liability, and governing law survive termination.',
      },
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law & Disputes',
    content: [
      {
        text: 'These terms are governed by the laws of India. Any disputes arising from these terms or your use of the service shall be resolved through arbitration in Ahmedabad, Gujarat, in accordance with the Arbitration and Conciliation Act, 1996. Both parties agree to attempt good-faith resolution before initiating formal proceedings.',
      },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to These Terms',
    content: [
      {
        text: 'We may update these terms to reflect changes in our service or legal requirements. Material changes are communicated via email and in-app notification at least 30 days in advance. Continued use of the service after the effective date constitutes acceptance. If you do not agree with the changes, you may close your account before they take effect.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: [
      {
        text: 'For questions about these terms, contact us at legal@advaita-tech.com or write to Advaita Intelligence Private Limited, Ahmedabad, Gujarat, India.',
      },
    ],
  },
]

export default function TermsOfService() {
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
                  Terms of Service
                </span>
              </span>
            </h1>
            <p className={`scroll-reveal max-w-[700px] text-[#565653] text-[17px] font-medium leading-[1.65] mt-7 ${heroVisible ? 'is-visible' : ''}`}>
              The agreement between you and Advaita Intelligence when you use our product analytics platform. Plain language, no surprises.
            </p>
            <div className={`scroll-reveal mt-6 inline-flex items-center gap-2.5 text-gray-cloud text-[13px] font-semibold ${heroVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
              <span className="w-[7px] h-[7px] bg-[#4a9e1a]" />
              Effective — June 1, 2026
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
                  <TermsSection key={section.id} section={section} index={sectionIndex} />
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

function TermsSection({ section, index }) {
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
