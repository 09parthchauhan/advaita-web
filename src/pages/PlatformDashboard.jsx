import { useEffect, useRef, useState } from 'react'
import AnnouncementBar from '../components/Announcementbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useScrollLift from '../hooks/useScrollLift'

const clickstreamMetrics = [
  { label: 'Activation rate', value: '64.8%', delta: '+8.2%', tone: 'green' },
  { label: 'Churn rate', value: '3.9%', delta: '-1.1%', tone: 'orange' },
  { label: 'Retention D30', value: '42.4%', delta: '+4.7%', tone: 'green' },
  { label: 'Sessions', value: '18.6k', delta: '+12%', tone: 'yellow' },
]

const dashboardRows = [
  ['Project ID', 'proj_f4558a36a045f7a', 'Primary key'],
  ['SDK', 'Python', 'Server-side'],
  ['Capture endpoint', '/api/v1/capture', 'Receiving'],
  ['Migration', 'GA4 guide', '4/5 reviewed'],
]

const platformFeatures = [
  {
    title: 'Project information in one place',
    copy: 'See project ID, API key state, selected SDK, setup progress and ownership without moving across disconnected tools.',
  },
  {
    title: 'Operational status without noise',
    copy: 'Connection health, latest checks, received events and AI credits stay visible so teams know what is ready to use.',
  },
  {
    title: 'A command layer for every workspace',
    copy: 'Move from setup to clickstream, AI analysis, exports and settings while keeping the same active project context.',
  },
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

function DashboardMock() {
  return (
    <div className="platform-dashboard-mock" aria-label="Advaita Dashboard product preview">
      <aside>
        <div className="mock-brand-row">
          <img src="/logo.png" alt="" />
          <strong>Advaita</strong>
        </div>
        <span className="mock-project-label">Project</span>
        <div className="mock-project-select">
          <span>Meetscribe</span>
          <small>Java SDK</small>
        </div>
        {['Home', 'Live Events', 'Funnels', 'Retention', 'Cohorts', 'AI Agent', 'Raw Events'].map((item, index) => (
          <div key={item} className={index === 0 ? 'is-active' : ''}>{item}</div>
        ))}
      </aside>

      <main>
        <div className="mock-status-banner">
          <span />
          <p><strong>No data</strong> Connect your SDK to start capturing events, analyzing user behavior, and getting insights.</p>
          <button>Set up Advaita</button>
        </div>
        <div className="mock-header">
          <div>
            <small>Hello, Parthchauhan</small>
            <h2>Product command center</h2>
            <p>A unified control room for the active project, built for analytics and AI workflows.</p>
          </div>
          <button>New project</button>
        </div>
        <div className="mock-stat-grid">
          {clickstreamMetrics.map((metric) => (
            <div key={metric.label} className={`mock-stat-card mock-stat-${metric.tone}`}>
              <small>{metric.label}</small>
              <strong>{metric.value}</strong>
              <em>{metric.delta}</em>
            </div>
          ))}
        </div>
        <div className="mock-dashboard-grid">
          <div className="mock-progress-card">
            <strong>Setup progress</strong>
            {['Project selected', 'Local auth wired', 'Clickstream view ready', 'AI agent connected'].map((item) => (
              <span key={item}>{item}</span>
            ))}
            <em>Production routing not enabled</em>
          </div>
          <div className="mock-chart-card">
            <div className="mock-chart-head">
              <strong>Activation trend</strong>
              <small>Last 30 days</small>
            </div>
            <svg viewBox="0 0 280 120" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 94 C35 70 54 86 84 58 C116 28 132 78 164 48 C195 20 214 45 242 26 C260 16 270 18 280 12" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <path d="M0 94 C35 70 54 86 84 58 C116 28 132 78 164 48 C195 20 214 45 242 26 C260 16 270 18 280 12 L280 120 L0 120 Z" fill="currentColor" opacity="0.08" />
            </svg>
          </div>
        </div>
        <div className="mock-table">
          {dashboardRows.map((row) => (
            <div key={row[0]}>
              <span>{row[0]}</span>
              <strong>{row[1]}</strong>
              <em>{row[2]}</em>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default function PlatformDashboard() {
  const [heroRef, heroVisible] = useReveal(0.1)
  const [featuresRef, featuresVisible] = useReveal(0.14)
  const [systemRef, systemVisible] = useReveal(0.18)
  const previewLifted = useScrollLift(90)

  return (
    <div className="platform-page platform-dashboard-page">
      <Navbar />

      <main>
        <section ref={heroRef} className="platform-hero">
          <div className="platform-shell platform-hero-grid">
            <div className="platform-hero-copy">
              <div className={`platform-kicker anim-label ${heroVisible ? 'is-visible' : ''}`}>
                <span />
                Advaita Platform
              </div>
              <h1>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line ${heroVisible ? 'is-visible' : ''}`}>Advaita Dashboard</span>
                </span>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line headline-reveal-line-2 ${heroVisible ? 'is-visible' : ''}`}>for project command.</span>
                </span>
              </h1>
              <p className={`scroll-reveal ${heroVisible ? 'is-visible' : ''}`}>
                A single operating surface for project details, SDK setup, connection status, AI credits and the clickstream metrics that keep teams moving.
              </p>
              <div className={`platform-hero-actions scroll-reveal ${heroVisible ? 'is-visible' : ''}`}>
                <a href="https://signup.acaiplatform.ai/" className="platform-primary-action arrow-button">
                  Open dashboard
                  <svg className="arrow-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </a>
                <a href="/docs#getting-started" className="platform-secondary-action arrow-button">
                  Read docs
                  <svg className="arrow-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </a>
              </div>
            </div>

            <div className={`platform-hero-visual platform-preview-lift scroll-reveal-right ${heroVisible ? 'is-visible' : ''} ${previewLifted ? 'is-lifted' : ''}`}>
              <DashboardMock />
            </div>
          </div>
        </section>

        <section ref={featuresRef} className="platform-feature-section">
          <div className="platform-shell">
            <div className="platform-section-heading">
              <div className={`platform-kicker scroll-reveal ${featuresVisible ? 'is-visible' : ''}`}>
                <span />
                Control Layer
              </div>
              <h2>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line ${featuresVisible ? 'is-visible' : ''}`}>The dashboard keeps</span>
                </span>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line headline-reveal-line-2 ${featuresVisible ? 'is-visible' : ''}`}>product setup clear and accountable.</span>
                </span>
              </h2>
            </div>

            <div className="platform-feature-grid">
              {platformFeatures.map((feature, index) => (
                <article
                  key={feature.title}
                  className={`platform-feature-card scroll-reveal ${featuresVisible ? 'is-visible' : ''}`}
                  style={{ transitionDelay: `${0.18 + index * 0.12}s` }}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section ref={systemRef} className="platform-system-section">
          <div className={`platform-shell platform-system-card scroll-reveal ${systemVisible ? 'is-visible' : ''}`}>
            <div>
              <div className="platform-kicker">
                <span />
                Platform Map
              </div>
              <h2>Dashboard first, charts when you need them.</h2>
              <p>
                Advaita Dashboard is the project command layer. Clickstream dashboards take over when teams need charts, funnels, cohorts and behaviour analysis.
              </p>
            </div>
            <div className="platform-map">
              <div className="is-current">Dashboard</div>
              <span />
              <div>Clickstream</div>
              <span />
              <div>AI Analysis</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
