import { useEffect, useRef, useState } from 'react'

const footerColumns = [
  {
    title: 'PRODUCT',
    links: [
      { label: 'AI Q&A', href: '/product/features/ai-qa' },
      { label: 'Experiment Analysis', href: '/product/features/experiment-analysis' },
      { label: 'Root Cause Analysis', href: '/product/features/root-cause-analysis' },
      { label: 'KPI Tracking', href: '/product/features/kpi-tracking' },
    ],
  },
  {
    title: 'PLATFORM',
    links: [
      { label: 'Platform', href: '/platforms' },
      { label: 'Web Analysis', href: '/product/analysis/web' },
      { label: 'Product Analysis', href: '/product/analysis/product' },
      { label: 'Mobile Analysis', href: '/product/analysis/mobile' },
    ],
  },
  {
    title: 'DOCS',
    links: [
      { label: 'Get Started', href: '/docs#getting-started' },
      { label: 'SDK', href: '/docs#sdks' },
      { label: 'Video Tutorials', href: '/docs#video-tutorials', badge: 'Soon' },
      { label: 'Integrations', href: '/docs#sdks', badge: 'Soon' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { label: 'About', href: '/company/about' },
      { label: 'Careers', href: '/company/careers' },
      { label: 'Contact Us', href: '/company/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
  {
    title: 'SOCIALS',
    links: [
      { label: 'X', href: 'https://x.com/' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/advaita-intelligence/' },
      { label: 'GitHub', href: 'https://github.com/' },
    ],
  },
]

export default function Footer() {
  const [visible, setVisible] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.18 })

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className={`site-footer ${visible ? 'is-visible' : ''}`}>
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <a href="/" className="site-footer-logo-row brand-home-link" aria-label="Go to Advaita Intelligence home">
            <img src="/logo.png" alt="Advaita Intelligence" className="site-footer-logo" />
            <span>ADVAITA INTELLIGENCE</span>
          </a>
          <p>Product intelligence starts here</p>
        </div>

        <nav className="site-footer-nav" aria-label="Footer navigation">
          {footerColumns.map((column, index) => (
            <div key={column.title} className="site-footer-column" style={{ transitionDelay: `${0.08 + index * 0.06}s` }}>
              <h4>{column.title}</h4>
              <div>
                {column.links.map((link) => (
                  <a key={link.label} href={link.href}>
                    <span>{link.label}</span>
                    {link.badge && <span className="footer-link-badge">{link.badge}</span>}
                    <svg className="footer-link-arrow" width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      <div className="site-footer-bottom">
        <p>© 2026 Advaita Intelligence Private Limited.</p>
        <p>Ahmedabad, India</p>
      </div>
    </footer>
  )
}
