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
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: [
      {
        subtitle: 'Product Usage Data',
        text: 'When you integrate Advaita into your product, our SDK collects behavioural event data from your end users — such as page views, clicks, session duration, and custom events you define. This data is processed to generate analytics insights for your team.',
      },
      {
        subtitle: 'Account Information',
        text: 'When you create an Advaita account, we collect your name, email address, company name, and billing information. This is used to manage your account, communicate with you, and process payments.',
      },
      {
        subtitle: 'Technical Data',
        text: 'We automatically collect device type, browser version, IP address (anonymised), operating system, and referral source to ensure platform compatibility and improve our service.',
      },
    ],
  },
  {
    id: 'how-we-use-data',
    title: 'How We Use Your Data',
    content: [
      {
        subtitle: 'Analytics Processing',
        text: 'We process event data to power your dashboards, AI-generated insights, root cause analysis, experiment tracking, and KPI monitoring. Your product data is used exclusively to deliver analytics back to your team.',
      },
      {
        subtitle: 'Service Improvement',
        text: 'Aggregated, de-identified usage patterns help us improve Advaita\'s AI models, interface design, and system performance. We never use your raw product data to train models shared with other customers.',
      },
      {
        subtitle: 'Communication',
        text: 'We use your contact information to send product updates, security notices, billing confirmations, and — only with your consent — marketing communications. You can opt out at any time.',
      },
    ],
  },
  {
    id: 'data-storage',
    title: 'Data Storage & Security',
    content: [
      {
        subtitle: 'Infrastructure',
        text: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Our infrastructure is hosted on SOC 2 Type II certified cloud providers with data centres in regions you select during onboarding.',
      },
      {
        subtitle: 'Retention',
        text: 'Event data is retained for the duration specified in your plan (default 12 months). Account data is retained for the life of your account plus 30 days after deletion. You can request earlier deletion at any time.',
      },
      {
        subtitle: 'Private Hosting',
        text: 'Enterprise customers can deploy Advaita on their own infrastructure via our private hosting option. In this configuration, no product data ever leaves your network.',
      },
    ],
  },
  {
    id: 'data-sharing',
    title: 'Data Sharing & Third Parties',
    content: [
      {
        subtitle: 'Sub-processors',
        text: 'We use a limited number of sub-processors for infrastructure (cloud hosting), payment processing, and email delivery. A current list is available at advaita-tech.com/sub-processors.',
      },
      {
        subtitle: 'No Selling of Data',
        text: 'We do not sell, rent, or trade your data or your end users\' data to any third party. Period. Your data exists to serve your analytics needs and nothing else.',
      },
      {
        subtitle: 'Legal Requirements',
        text: 'We may disclose data if required by law, regulation, or valid legal process. We will notify you before disclosure unless legally prohibited from doing so.',
      },
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    content: [
      {
        subtitle: 'Access & Portability',
        text: 'You can export all your data at any time through the Advaita dashboard or via our API. We support standard formats (JSON, CSV) for full data portability.',
      },
      {
        subtitle: 'Deletion',
        text: 'You can delete individual events, user profiles, or your entire dataset. Account deletion requests are processed within 30 days and include removal of all associated data from our systems and backups.',
      },
      {
        subtitle: 'Correction & Objection',
        text: 'You have the right to correct inaccurate personal data and to object to specific processing activities. Contact privacy@advaita-tech.com for any data rights requests.',
      },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies & Tracking',
    content: [
      {
        subtitle: 'Our Website',
        text: 'advaita-tech.com uses essential cookies for authentication and preferences. We use privacy-respecting analytics (no cross-site tracking) to understand how visitors use our marketing site.',
      },
      {
        subtitle: 'Our SDK',
        text: 'The Advaita SDK uses a first-party session identifier to group events within a user session. It does not set third-party cookies and does not track users across websites or apps.',
      },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    content: [
      {
        text: 'We may update this policy to reflect changes in our practices or legal requirements. Material changes will be communicated via email and an in-app notification at least 30 days before they take effect. The latest version is always available at this URL.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: [
      {
        text: 'For any privacy-related questions, concerns, or data rights requests, contact our team at privacy@advaita-tech.com or write to us at Advaita Intelligence Private Limited, Ahmedabad, Gujarat, India.',
      },
    ],
  },
]

export default function PrivacyPolicy() {
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
                  Privacy Policy
                </span>
              </span>
            </h1>
            <p className={`scroll-reveal max-w-[700px] text-[#565653] text-[17px] font-medium leading-[1.65] mt-7 ${heroVisible ? 'is-visible' : ''}`}>
              How Advaita Intelligence collects, uses, and protects your data. We believe in transparency and give you full control over your information.
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
                  <PolicySection key={section.id} section={section} index={sectionIndex} />
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

function PolicySection({ section, index }) {
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
