import { useState, useEffect, useRef } from 'react'

const navLinks = [
  {
    label: 'PRODUCT',
    groups: [
      {
        title: 'By Teams',
        items: [
          { label: 'Product Teams', href: '/product/teams/product' },
          { label: 'Growth Teams', href: '/product/teams/growth' },
          { label: 'Data Teams', href: '/product/teams/data' },
        ],
      },
      {
        title: 'By Features',
        items: [
          { label: 'AI Q&A', href: '/product/features/ai-qa' },
          { label: 'Experiment Analysis', href: '/product/features/experiment-analysis' },
          { label: 'Root Cause Analysis', href: '/product/features/root-cause-analysis' },
          { label: 'KPI Tracking', href: '/product/features/kpi-tracking' },
        ],
      },
      {
        title: 'Analysis',
        items: [
          { label: 'Web Analysis', href: '/product/analysis/web' },
          { label: 'Product Analysis', href: '/product/analysis/product' },
          { label: 'Mobile Analysis', href: '/product/analysis/mobile' },
        ],
      },
    ],
  },
  {
    label: 'PLATFORMS',
    groups: [
      {
        title: 'Advaita Platform',
        items: [
          { label: 'Advaita Dashboard', href: '/platforms/dashboard', icon: 'dashboard', accent: '#f5820a' },
          { label: 'Advaita AI Analysis Agents', href: '/platforms/ai-analysis-agents', icon: 'agent', accent: '#4a9e1a' },
          { label: 'Data Interface', href: '/platforms/data-intelligence', icon: 'data', accent: '#f5d000' },
        ],
      },
    ],
    featured: {
      title: 'Advaita Dashboard',
      eyebrow: 'Platform',
      description: 'One workspace for product metrics, cohorts and AI analysis.',
      href: '/platforms/dashboard',
      tone: 'platform',
    },
  },
  {
    label: 'COMPANY',
    groups: [
      {
        title: 'Company',
        items: [
          { label: 'About', href: '/company/about', icon: 'about', accent: '#f5820a' },
          { label: 'Careers', href: '/company/careers', icon: 'careers', accent: '#4a9e1a' },
          { label: 'Contact Us', href: '/company/contact', icon: 'contact', accent: '#f5d000' },
        ],
      },
    ],
    featured: {
      title: 'Build With Advaita',
      eyebrow: 'Company',
      description: 'Meet the team building AI-native product intelligence.',
      href: '/company/about',
      tone: 'company',
    },
  },
  {
    label: 'DOCS',
    groups: [
      {
        title: 'Documentation',
        items: [
          { label: 'SDK', href: '/docs#sdks', icon: 'sdk', accent: '#f5820a' },
          { label: 'Get Started', href: '/docs#getting-started', icon: 'start', accent: '#4a9e1a' },
          { label: 'Video Tutorials', href: '/docs#video-tutorials', icon: 'video', accent: '#f5d000' },
        ],
      },
    ],
    featured: {
      title: 'Get Started',
      eyebrow: 'Docs',
      description: 'Install the SDK and send your first product event.',
      href: '/docs#getting-started',
      tone: 'docs',
    },
  },
  { label: 'PRICING', href: '/pricing' },
]

function NavIcon({ type }) {
  if (type === 'dashboard') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 4h14v12H3V4Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 13V9M10 13V7M14 13v-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'agent') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 3v3M6 17h8M5 8h10v7H5V8Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 11h.01M12 11h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'data') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 6c0-1.1 2.7-2 6-2s6 .9 6 2-2.7 2-6 2-6-.9-6-2Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 6v4c0 1.1 2.7 2 6 2s6-.9 6-2V6M4 10v4c0 1.1 2.7 2 6 2s6-.9 6-2v-4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }

  if (type === 'careers') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M7 6V5c0-1 1-2 3-2s3 1 3 2v1M4 7h12v9H4V7Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M4 10h12" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }

  if (type === 'contact') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 5h12v10H4V5Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="m4 6 6 5 6-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (type === 'sdk') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="m8 6-4 4 4 4M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (type === 'start') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 10h10M10 6l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 4v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'video') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 6h9v8H4V6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="m13 8 4-2v8l-4-2V8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    )
  }

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 16V4h7l3 3v9H5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 4v4h4M8 12h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState('PRODUCT')
  const [activeDesktopIndex, setActiveDesktopIndex] = useState(null)
  const [dropdownDirection, setDropdownDirection] = useState('right')
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)
  const lastDesktopMenuIndex = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = currentScrollY - lastScrollY.current

      if (currentScrollY <= 120) {
        setVisible(true)
      } else if (scrollDelta > 4) {
        setVisible(false)
        setMobileOpen(false)
      } else if (scrollDelta < -4) {
        setVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleDesktopMenuEnter = (index) => {
    if (!navLinks[index].groups) {
      setActiveDesktopIndex(null)
      return
    }

    if (lastDesktopMenuIndex.current !== null) {
      setDropdownDirection(index > lastDesktopMenuIndex.current ? 'right' : 'left')
    }

    setActiveDesktopIndex(index)
    lastDesktopMenuIndex.current = index
  }

  const activeDesktopLink = activeDesktopIndex !== null ? navLinks[activeDesktopIndex] : null

  return (
    <nav
      className="anim-navbar w-full z-50"
      style={{
        position: 'sticky',
        top: visible ? 0 : '-96px',
        backgroundColor: '#F6F6F1',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'top 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease',
      }}
    >
      <div className="max-w-[1480px] mx-auto px-5 py-4 flex items-center justify-between">

        {/* Left: Logo */}
        <div className="flex items-center">
          <a href="/" className="brand-home-link flex items-center gap-2" aria-label="Go to Advaita Intelligence home" style={{ marginLeft: '3px' }}>
            <img src="/public/logo.png" alt="Advaita Intelligence" className="w-11 h-11 rounded-full" style={{ alignSelf: 'center' }} />
            <span className="text-jet-black font-semibold text-[20px] whitespace-nowrap" style={{ alignSelf: 'center' }}>ADVAITA INTELLIGENCE</span>
          </a>
        </div>

        {/* Right: Nav Links + CTA */}
        <div
          className={`nav-desktop-shell hidden md:flex items-center gap-10 relative ${activeDesktopLink ? 'is-dropdown-open' : ''}`}
          onMouseLeave={() => setActiveDesktopIndex(null)}
        >
          <div className="flex items-center gap-10">
            {navLinks.map((link, index) => (
              <div
                key={link.label}
                className="nav-menu-item"
                onMouseEnter={() => handleDesktopMenuEnter(index)}
                onFocus={() => handleDesktopMenuEnter(index)}
              >
                {link.groups ? (
                  <button
                    className="nav-link-item text-[14px] font-medium flex items-center bg-transparent border-none cursor-pointer"
                    aria-haspopup="true"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="nav-link-item text-[14px] font-medium flex items-center gap-1 bg-transparent border-none cursor-pointer"
                    style={{ textDecoration: 'none' }}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>
          <a
            href="https://signup.acaiplatform.ai/login"
            className="arrow-button text-[13px] font-medium text-jet-black border border-jet-black px-5 py-2 hover:bg-[#d4d4d4] transition-all duration-200 cursor-pointer"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
          >
            LOGIN
            <svg className="arrow-icon" width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </a>
          {activeDesktopLink && (
            <div className={`nav-dropdown ${activeDesktopLink.label === 'PRODUCT' ? 'nav-dropdown-wide' : 'nav-dropdown-featured-layout'} nav-dropdown-from-${dropdownDirection}`}>
              <div className="nav-dropdown-motion" key={activeDesktopLink.label}>
                <div className="nav-dropdown-content">
                  {activeDesktopLink.groups.map((group) => (
                    <div key={group.title} className="nav-dropdown-group">
                      <p className="nav-dropdown-title">{group.title}</p>
                      <div className="nav-dropdown-links">
                        {group.items.map((item) => (
                          <a key={item.label} href={item.href} className="nav-dropdown-link">
                            {item.icon && (
                              <span className="nav-dropdown-icon" style={{ color: item.accent }}>
                                <NavIcon type={item.icon} />
                              </span>
                            )}
                            <span>{item.label}</span>
                            <svg className="arrow-icon" width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                              <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {activeDesktopLink.featured && (
                  <a href={activeDesktopLink.featured.href} className={`nav-feature-card nav-feature-card-${activeDesktopLink.featured.tone}`}>
                    <div className="nav-feature-art">
                      <span>{activeDesktopLink.featured.eyebrow}</span>
                    </div>
                    <div className="nav-feature-copy">
                      <div>
                        <p>{activeDesktopLink.featured.title}</p>
                        <span>{activeDesktopLink.featured.description}</span>
                      </div>
                      <svg className="arrow-icon" width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`block w-5 h-0.5 bg-jet-black transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-jet-black transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-jet-black transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/10 px-8 py-4 flex flex-col gap-3 md:hidden" style={{ background: 'rgba(246,246,241,0.98)' }}>
          {navLinks.map((link) => (
            <div key={link.label} className="mobile-nav-group">
              {link.groups ? (
                <>
                  <button
                    className="mobile-nav-trigger text-body-sm text-charcoal text-left bg-transparent border-none cursor-pointer"
                    onClick={() => setMobileExpanded(mobileExpanded === link.label ? '' : link.label)}
                  >
                    <span>{link.label}</span>
                    <svg className={`mobile-nav-chevron ${mobileExpanded === link.label ? 'is-open' : ''}`} width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {mobileExpanded === link.label && (
                    <div className="mobile-nav-panel">
                      {link.groups.map((group) => (
                        <div key={group.title} className="mobile-nav-column">
                          <p className="mobile-nav-title">{group.title}</p>
                          {group.items.map((item) => (
                            <a key={item.label} href={item.href} className="mobile-nav-link">
                              {item.label}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={link.href} className="mobile-nav-trigger text-body-sm text-charcoal text-left" style={{ textDecoration: 'none' }}>
                  <span>{link.label}</span>
                </a>
              )}
            </div>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-black/10">
            <a href="https://signup.acaiplatform.ai/login" className="arrow-button text-[13px] font-medium text-jet-black border border-jet-black px-4 py-2.5 w-full justify-center" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              LOGIN
              <svg className="arrow-icon" width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </a>
            <a href="https://signup.acaiplatform.ai/" className="arrow-button btn-get-started text-[13px] font-semibold px-4 py-2.5 w-full justify-center" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              GET STARTED
              <svg className="arrow-icon" width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
