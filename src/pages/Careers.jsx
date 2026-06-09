import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const signals = [
  'Product-minded engineering',
  'Clear thinking over heavy process',
  'Care for data ownership and trust',
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

export default function Careers() {
  const [heroRef, heroVisible] = useReveal(0.1)
  const [statusRef, statusVisible] = useReveal(0.18)
  const [noteRef, noteVisible] = useReveal(0.18)

  return (
    <div className="careers-page min-h-screen bg-soft-gray">
      <Navbar />

      <main>
        <section ref={heroRef} className="careers-hero">
          <div className="careers-shell">
            <div className={`careers-kicker anim-label ${heroVisible ? 'is-visible' : ''}`}>
              <span />
              Careers
            </div>
            <h1>
              <span className="block overflow-hidden">
                <span className={`headline-reveal-line ${heroVisible ? 'is-visible' : ''}`}>Build the future of product intelligence.</span>
              </span>
            </h1>
            <p className={`scroll-reveal ${heroVisible ? 'is-visible' : ''}`}>
              We are building Advaita carefully with a small team. There are no open roles right now, but we are always glad to hear from people who care deeply about product data and AI-native workflows.
            </p>
          </div>
        </section>

        <section ref={statusRef} className="careers-status-section">
          <div className="careers-shell careers-status-grid">
            <article className={`careers-status-card scroll-reveal-left ${statusVisible ? 'is-visible' : ''}`}>
              <div className="careers-status-pill">
                <span />
                Not hiring right now
              </div>
              <h2>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line ${statusVisible ? 'is-visible' : ''}`}>No open positions at the moment.</span>
                </span>
              </h2>
              <p>
                We are focused on building the product and working closely with early teams. When roles open, this page will be the first place we update.
              </p>
            </article>

            <aside className={`careers-note-card scroll-reveal-right ${statusVisible ? 'is-visible' : ''}`}>
              <span>Future team signals</span>
              <div>
                {signals.map((signal, index) => (
                  <p key={signal} style={{ transitionDelay: `${0.18 + index * 0.08}s` }}>
                    {signal}
                  </p>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section ref={noteRef} className="careers-open-note-section">
          <div className="careers-shell">
            <div className={`careers-open-note scroll-reveal ${noteVisible ? 'is-visible' : ''}`}>
              <div>
                <div className="careers-section-label">
                  <span />
                  Stay In Touch
                </div>
                <h2>
                  <span className="block overflow-hidden">
                    <span className={`headline-reveal-line ${noteVisible ? 'is-visible' : ''}`}>Want to be on our radar?</span>
                  </span>
                </h2>
              </div>
              <p>
                Send us a short note about what you like building and how you think about product intelligence. We will keep it for future conversations.
              </p>
              <a href="/company/contact" className="careers-contact-button arrow-button">
                Contact Us
                <svg className="arrow-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
