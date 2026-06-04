import { useEffect, useRef, useState } from 'react'
import AnnouncementBar from '../components/Announcementbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const principles = [
  {
    eyebrow: '01',
    title: 'Answers over dashboards',
    copy: 'Teams should not need ten charts to understand one decision. Advaita turns behaviour data into direct, inspectable answers.',
  },
  {
    eyebrow: '02',
    title: 'Evidence before opinion',
    copy: 'Every insight should connect back to the journeys, cohorts and events that caused it, so teams can trust what they ship.',
  },
  {
    eyebrow: '03',
    title: 'Built for every function',
    copy: 'Product, growth and data teams should work from the same behavioural truth without waiting on manual analysis loops.',
  },
]

const operatingNotes = [
  'Plain-English product analytics',
  'AI agents that explain behaviour',
  'Self-hosted paths for data ownership',
  'Fast setup for modern product teams',
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

function AboutVisual() {
  return (
    <div className="about-visual" aria-hidden="true">
      <div className="about-visual-header">
        <img src="/Logo.png" alt="" />
        <span>Advaita Intelligence</span>
      </div>
      <div className="about-visual-flow">
        <div>
          <span>Events</span>
          <strong>42.8k</strong>
        </div>
        <div>
          <span>Questions</span>
          <strong>186</strong>
        </div>
        <div>
          <span>Decisions</span>
          <strong>34</strong>
        </div>
      </div>
      <div className="about-visual-lines">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="about-visual-insight">
        <span />
        <p>Activation drop traced to onboarding step 3</p>
      </div>
    </div>
  )
}

export default function About() {
  const [heroRef, heroVisible] = useReveal(0.1)
  const [storyRef, storyVisible] = useReveal(0.18)
  const [principlesRef, principlesVisible] = useReveal(0.16)
  const [systemRef, systemVisible] = useReveal(0.18)

  return (
    <div className="about-page min-h-screen bg-soft-gray">
      <AnnouncementBar />
      <Navbar />

      <main>
        <section ref={heroRef} className="about-hero">
          <div className="about-shell about-hero-grid">
            <div>
              <div className={`about-kicker anim-label ${heroVisible ? 'is-visible' : ''}`}>
                <span />
                About Advaita
              </div>
              <h1>
                <span className="block overflow-hidden" style={{ fontSize: '64px', lineHeight: 1.1, letterSpacing: '-0.04em', fontWeight: '500', maxWidth: '900px', textAlign: 'left' }}>
                  <span className={`headline-reveal-line ${heroVisible ? 'is-visible' : ''}`}>We build product intelligence for teams that move fast.</span>
                </span>
              </h1>
              <p className={`scroll-reveal ${heroVisible ? 'is-visible' : ''}`} style={{ fontSize: '17px', color: '#111111', lineHeight: 1.65, maxWidth: '700px' }}>
                Advaita helps teams understand what users are doing, why metrics are moving, and what to improve next without getting buried in dashboards.
              </p>
            </div>

            <div className={`about-hero-card scroll-reveal-right ${heroVisible ? 'is-visible' : ''}`}>
              <AboutVisual />
            </div>
          </div>
        </section>

        <section ref={storyRef} className="about-story-section">
          <div className="about-shell about-story-grid">
            <div className={`about-section-label scroll-reveal-left ${storyVisible ? 'is-visible' : ''}`}>
              <span />
              Our Story
            </div>
            <div>
              <h2>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line ${storyVisible ? 'is-visible' : ''}`}>Most teams collect more product data than they can use.</span>
                </span>
              </h2>
              <p className={`scroll-reveal ${storyVisible ? 'is-visible' : ''}`}>
                We started Advaita to close that gap. Instead of asking teams to manually stitch funnels, cohorts, experiments and user paths together, we are building an AI-native layer that can reason across them and explain what matters.
              </p>
              <p className={`scroll-reveal ${storyVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.16s' }}>
                The goal is simple: give every team the confidence of a strong analytics partner, without slowing down the speed of product work.
              </p>
            </div>
          </div>
        </section>

        <section ref={principlesRef} className="about-principles-section">
          <div className="about-shell">
            <div className="about-section-heading">
              <div className={`about-section-label scroll-reveal ${principlesVisible ? 'is-visible' : ''}`}>
                <span />
                What We Believe
              </div>
              <h2>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line ${principlesVisible ? 'is-visible' : ''}`}>Analytics should feel clear,</span>
                </span>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line headline-reveal-line-2 ${principlesVisible ? 'is-visible' : ''}`}>not heavy.</span>
                </span>
              </h2>
            </div>

            <div className="about-principles-grid">
              {principles.map((principle, index) => (
                <article
                  key={principle.title}
                  className={`about-principle-card scroll-reveal ${principlesVisible ? 'is-visible' : ''}`}
                  style={{ transitionDelay: `${0.2 + index * 0.12}s` }}
                >
                  <span>{principle.eyebrow}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section ref={systemRef} className="about-system-section">
          <div className="about-shell about-system-card">
            <div>
              <div className={`about-section-label scroll-reveal ${systemVisible ? 'is-visible' : ''}`}>
                <span />
                How We Build
              </div>
              <h2>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line ${systemVisible ? 'is-visible' : ''}`}>Quiet software for</span>
                </span>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line headline-reveal-line-2 ${systemVisible ? 'is-visible' : ''}`}>serious decisions.</span>
                </span>
              </h2>
            </div>

            <div className={`about-system-list scroll-reveal-right ${systemVisible ? 'is-visible' : ''}`}>
              {operatingNotes.map((note) => (
                <div key={note}>
                  <span />
                  <p>{note}</p>
                </div>
              ))}
              <a href="/company/contact" className="about-system-cta arrow-button">
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
