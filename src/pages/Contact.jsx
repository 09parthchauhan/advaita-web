import { useEffect, useRef, useState } from 'react'
import AnnouncementBar from '../components/Announcementbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FaqSection from '../components/Faqsection'
import FinalCtaSection from '../components/Finalctasection'

const contactCards = [
  {
    title: 'Support',
    email: 'support@advaita-tech.com',
    copy: 'Get help with setup, troubleshooting, or day-to-day product analytics questions.',
  },
  {
    title: 'Sales',
    email: 'sales@advaita-tech.com',
    copy: 'Have questions about plans, private hosting, or the right solution for your team?',
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

export default function Contact() {
  const [heroRef, heroVisible] = useReveal(0.1)
  const [formRef, formVisible] = useReveal(0.12)

  return (
    <div className="contact-page min-h-screen bg-soft-gray">
      <AnnouncementBar />
      <Navbar />

      <main>
        <section ref={heroRef} className="contact-hero">
          <div className="contact-shell">
            <div className={`contact-kicker anim-label ${heroVisible ? 'is-visible' : ''}`}>
              <span />
              Contact
            </div>
            <h1>
              <span className="block overflow-hidden">
                <span className={`headline-reveal-line ${heroVisible ? 'is-visible' : ''}`}>Get In Touch</span>
              </span>
            </h1>
            <p className={`scroll-reveal ${heroVisible ? 'is-visible' : ''}`}>
              Tell us what you are trying to understand, and we will help you find the right path through your product data.
            </p>
          </div>
        </section>

        <section ref={formRef} className="contact-section">
          <div className="contact-shell contact-stack">
            <div className="contact-card-grid">
              {contactCards.map((card, index) => (
                <article
                  key={card.title}
                  className={`contact-info-card scroll-reveal ${formVisible ? 'is-visible' : ''}`}
                  style={{ transitionDelay: `${0.08 + index * 0.12}s` }}
                >
                  <h2>{card.title}</h2>
                  <a href={`mailto:${card.email}`}>{card.email}</a>
                  <p>{card.copy}</p>
                </article>
              ))}
            </div>

            <div className="contact-form-wrap">
              <div className={`contact-gradient-panel ${formVisible ? 'is-visible' : ''}`} aria-hidden="true" />

              <form className={`contact-form scroll-reveal ${formVisible ? 'is-visible' : ''}`}>
                <div className="contact-form-row">
                  <label>
                    <span>Name</span>
                    <input type="text" name="firstName" placeholder="John" autoComplete="given-name" />
                  </label>
                  <label>
                    <span>Last name</span>
                    <input type="text" name="lastName" placeholder="Doe" autoComplete="family-name" />
                  </label>
                </div>

                <label>
                  <span>Email</span>
                  <input type="email" name="email" placeholder="johndoe@gmail.com" autoComplete="email" />
                </label>

                <div className="contact-form-row">
                  <label>
                    <span>Company name</span>
                    <input type="text" name="company" placeholder="Acme.me" autoComplete="organization" />
                  </label>
                  <label>
                    <span>Business Type</span>
                    <input type="text" name="businessType" placeholder="e.g., Technology, Retail, Education" />
                  </label>
                </div>

                <label>
                  <span>How can we help you?</span>
                  <input type="text" name="request" placeholder="Tell us your question or request" />
                </label>

                <label>
                  <span>Additional info</span>
                  <textarea name="message" placeholder="Write here" rows="7" />
                </label>

                <button type="submit" className="contact-submit arrow-button">
                  Submit
                  <svg className="arrow-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </section>

        <FaqSection />
        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  )
}
