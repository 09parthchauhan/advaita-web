import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useScrollLift from '../hooks/useScrollLift'

const liveEvents = [
  { type: 'button_clicked', user: 'user_4832', source: 'Web', time: '12s ago', status: 'Captured' },
  { type: 'checkout_started', user: 'user_1290', source: 'Android', time: '28s ago', status: 'Queued' },
  { type: 'plan_selected', user: 'user_7718', source: 'iOS', time: '41s ago', status: 'Captured' },
  { type: 'agent_prompted', user: 'user_6421', source: 'Server', time: '1m ago', status: 'Indexed' },
]

const dataTypes = [
  { label: 'Identity', count: '12 fields', tone: 'green' },
  { label: 'Events', count: '48 schemas', tone: 'orange' },
  { label: 'Sessions', count: '7 models', tone: 'yellow' },
  { label: 'Properties', count: '134 keys', tone: 'mist' },
]

const trainingSignals = [
  'Event naming consistency',
  'User journey sequences',
  'Revenue and churn labels',
  'Segment-level behavior patterns',
]

function MiniTrend() {
  return (
    <svg className="data-interface-trend" viewBox="0 0 320 130" fill="none" aria-hidden="true">
      <path d="M18 102C47 74 61 82 84 67C107 51 120 30 150 45C181 60 195 91 225 70C252 51 268 31 303 24" stroke="rgba(246,246,241,0.18)" strokeWidth="2" strokeDasharray="7 8" />
      <path d="M18 104C49 82 66 84 92 73C116 63 129 46 154 54C185 65 197 96 226 78C253 60 270 42 303 35" stroke="#86d296" strokeWidth="3" />
      <circle cx="92" cy="73" r="5" fill="#f5d000" />
      <circle cx="154" cy="54" r="5" fill="#f5820a" />
      <circle cx="226" cy="78" r="5" fill="#86d296" />
      <circle cx="303" cy="35" r="5" fill="#f6f6f1" />
    </svg>
  )
}

function QueryConsole() {
  return (
    <div className="data-query-console" aria-label="Data query console preview">
      <div className="data-console-top">
        <span />
        <span />
        <span />
        <p>event_query.sql</p>
      </div>
      <pre>{`select event_type, count(*) as volume
from live_events
where project = 'growth-experiments'
group by event_type
order by volume desc;`}</pre>
      <div className="data-console-result">
        <div><span>button_clicked</span><strong>18,204</strong></div>
        <div><span>checkout_started</span><strong>7,910</strong></div>
        <div><span>plan_selected</span><strong>4,482</strong></div>
      </div>
    </div>
  )
}

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

export default function PlatformDataInterface() {
  const [heroRef, heroVisible] = useReveal(0.1)
  const previewLifted = useScrollLift(90)

  return (
    <div className="platform-page data-interface-page">
      <Navbar />

      <main>
        <section ref={heroRef} className="data-interface-hero">
          <div className="platform-shell">
            <div className="data-interface-hero-copy">
              <p className={`platform-kicker anim-label ${heroVisible ? 'is-visible' : ''}`}><span />Data Interface</p>
              <h1>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line ${heroVisible ? 'is-visible' : ''}`}>See every signal before it</span>
                </span>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line headline-reveal-line-2 ${heroVisible ? 'is-visible' : ''}`}>becomes a decision.</span>
                </span>
              </h1>
              <p className={`scroll-reveal ${heroVisible ? 'is-visible' : ''}`}>
                Advaita Data Interface gives teams a single place to inspect live events, validate capture,
                query product data, understand field types, and train AI models on trusted behavioral data.
              </p>
            </div>

            <div className={`data-interface-preview platform-preview-lift scroll-reveal ${heroVisible ? 'is-visible' : ''} ${previewLifted ? 'is-lifted' : ''}`}>
              <div className="data-interface-os" aria-label="Advaita data interface preview">
                <div className="data-os-sidebar">
                  <strong>Data</strong>
                  <span className="is-active">Live Events</span>
                  <span>Capture</span>
                  <span>Queries</span>
                  <span>AI Training</span>
                </div>
                <div className="data-os-main">
                  <div className="data-os-header">
                    <div>
                      <span>LIVE STREAM</span>
                      <strong>42 events/min</strong>
                    </div>
                    <button type="button">Export</button>
                  </div>
                  <div className="data-os-grid">
                    <div className="data-os-card data-os-card-wide">
                      <p>Capture health</p>
                      <MiniTrend />
                    </div>
                    <div className="data-os-card">
                      <p>Schema coverage</p>
                      <strong>94%</strong>
                      <span>validated fields</span>
                    </div>
                    <div className="data-os-card">
                      <p>Query latency</p>
                      <strong>184ms</strong>
                      <span>median response</span>
                    </div>
                  </div>
                  <div className="data-event-stack">
                    {liveEvents.slice(0, 3).map((event) => (
                      <div key={event.type}>
                        <span>{event.type}</span>
                        <small>{event.source} / {event.time}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="platform-section">
          <div className="platform-shell data-interface-grid">
            <article className="data-live-card">
              <p className="platform-kicker"><span />Live Events</p>
              <h2>Every event is inspectable the moment it lands.</h2>
              <div className="data-live-table">
                {liveEvents.map((event) => (
                  <div key={`${event.type}-${event.user}`} className="data-live-row">
                    <span className="data-live-dot" />
                    <strong>{event.type}</strong>
                    <span>{event.user}</span>
                    <span>{event.source}</span>
                    <span>{event.time}</span>
                    <em>{event.status}</em>
                  </div>
                ))}
              </div>
            </article>

            <article className="data-capture-card">
              <p className="platform-kicker"><span />Data Capture</p>
              <h2>Capture health stays visible.</h2>
              <div className="data-health-meter">
                <span style={{ width: '86%' }} />
              </div>
              <div className="data-health-stats">
                <div><strong>99.4%</strong><span>ingestion success</span></div>
                <div><strong>6.7k</strong><span>events received</span></div>
                <div><strong>4</strong><span>active SDKs</span></div>
              </div>
            </article>
          </div>
        </section>

        <section className="platform-section data-query-section">
          <div className="platform-shell data-query-layout">
            <div>
              <p className="platform-kicker"><span />Data Query</p>
              <h2>Ask sharper questions with a query layer built for product data.</h2>
              <p>
                Filter by user, event, session, cohort, device, or custom property. Teams can move from raw
                clickstream to reusable answers without waiting for a custom dashboard.
              </p>
            </div>
            <QueryConsole />
          </div>
        </section>

        <section className="platform-section">
          <div className="platform-shell data-type-layout">
            <div className="data-type-heading">
              <p className="platform-kicker"><span />Type Of Data</p>
              <h2>Structured signals keep analysis honest.</h2>
            </div>
            <div className="data-type-grid">
              {dataTypes.map((item) => (
                <article key={item.label} className={`data-type-card data-type-${item.tone}`}>
                  <span />
                  <strong>{item.label}</strong>
                  <p>{item.count}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="platform-section data-training-section">
          <div className="platform-shell data-training-card">
            <div>
              <p className="platform-kicker"><span />AI Training</p>
              <h2>Train product AI on the data your team already trusts.</h2>
              <p>
                Use captured events, schemas, and human-approved labels to prepare models for churn research,
                funnel explanation, retention diagnosis, and generated analysis artifacts.
              </p>
            </div>
            <div className="data-training-list">
              {trainingSignals.map((signal, index) => (
                <div key={signal}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{signal}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
