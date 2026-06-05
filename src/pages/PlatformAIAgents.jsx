import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useScrollLift from '../hooks/useScrollLift'

const agentPrompts = [
  'Analyze churn drivers and generate charts',
  'Run deep research on drop-off cohorts',
  'Create a PDF report for weekly retention',
  'Export Python script for revenue segments',
]

const generatedFiles = [
  { type: 'PNG', name: 'churn-risk-chart.png', meta: 'Cohort risk visualization' },
  { type: 'PDF', name: 'retention-analysis.pdf', meta: 'Executive analysis report' },
  { type: 'PY', name: 'segment_model.py', meta: 'Python analysis script' },
]

const agentCapabilities = [
  {
    title: 'Deep answers from clickstream',
    copy: 'Ask product questions in plain English and get analysis grounded in events, cohorts, funnels and user journeys.',
  },
  {
    title: 'Research-grade workflows',
    copy: 'ACAI can investigate churn, activation, revenue segments and behavioural anomalies across multiple analysis passes.',
  },
  {
    title: 'Generated files, not just text',
    copy: 'Receive PNG charts, PDF summaries and Python scripts so analysis can move into reviews, notebooks and team workflows.',
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

function AgentChatMock() {
  return (
    <div className="agent-chat-mock" aria-label="ACAI chat analysis interface preview">
      <aside className="agent-mock-sidebar">
        <div className="agent-mock-brand">
          <img src="/acai-agent.png" alt="" />
          <div>
            <strong>ACAI</strong>
            <span>Clickstream AI</span>
          </div>
        </div>
        <nav>
          <div className="is-active">Chat</div>
          <div>Dashboard</div>
        </nav>
        <button>+ New Chat</button>
        <p>This session</p>
        {[4, 3, 2, 1].map((item) => (
          <div key={item} className={item === 4 ? 'is-selected' : ''}>
            <span>{item}</span>
            New Chat
          </div>
        ))}
      </aside>

      <main className="agent-mock-main">
        <header>
          <img src="/acai-agent.png" alt="" />
          <div>
            <strong>Test App - Android</strong>
            <span>acai-kotlin</span>
          </div>
        </header>

        <section className="agent-mock-center">
          <div className="agent-logo-orb">
            <img src="/acai-agent.png" alt="" />
          </div>
          <h2>ACAI Model + ACAI Harness</h2>
          <p>Ask anything about your clickstream data. Charts, deep research and generated files appear here.</p>
          <div className="agent-chip-row">
            <span>ACAI Model</span>
            <span>ACAI Harness</span>
            <span>Deep Research</span>
          </div>
        </section>

        <section className="agent-mock-workspace">
          <div className="agent-answer-card">
            <div>
              <span>Deep Product Research</span>
              <strong>Why are new users churning after onboarding?</strong>
            </div>
            <p>
              Churn is concentrated in users who skipped workspace setup and never reached the first tracked event. The strongest signal is a 28% drop after SDK install instructions.
            </p>
            <div className="agent-mini-chart">
              {[62, 82, 54, 38, 71, 48, 34].map((height, index) => (
                <span key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>

          <div className="agent-files-card">
            <strong>Generated files</strong>
            {generatedFiles.map((file) => (
              <div key={file.name}>
                <span>{file.type}</span>
                <p>{file.name}<small>{file.meta}</small></p>
              </div>
            ))}
          </div>
        </section>

        <footer>
          <div className="agent-prompt-cloud">
            {agentPrompts.map((prompt) => (
              <span key={prompt}>{prompt}</span>
            ))}
          </div>
          <div className="agent-input-row">
            <span>Ask ACAI Model or run Deep Research on your data...</span>
            <button aria-label="Send prompt">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M15 3 7.5 15l-1.2-5.3L2 7.8 15 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default function PlatformAIAgents() {
  const [heroRef, heroVisible] = useReveal(0.1)
  const [capabilityRef, capabilityVisible] = useReveal(0.14)
  const [filesRef, filesVisible] = useReveal(0.18)
  const previewLifted = useScrollLift(90)

  return (
    <div className="platform-page platform-agent-page">
      <Navbar />

      <main>
        <section ref={heroRef} className="agent-hero">
          <div className="platform-shell agent-hero-inner">
            <div className="agent-hero-copy">
              <div className={`platform-kicker anim-label ${heroVisible ? 'is-visible' : ''}`}>
                <span />
                ACAI Analysis Agent
              </div>
              <h1>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line ${heroVisible ? 'is-visible' : ''}`}>AI analysis agents</span>
                </span>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line headline-reveal-line-2 ${heroVisible ? 'is-visible' : ''}`}>that ship the evidence.</span>
                </span>
              </h1>
              <p className={`scroll-reveal ${heroVisible ? 'is-visible' : ''}`}>
                ACAI turns clickstream data into deep answers, product research, charts, PDFs and Python analysis scripts your team can inspect, share and rerun.
              </p>
              <div className={`platform-hero-actions scroll-reveal ${heroVisible ? 'is-visible' : ''}`}>
                <a href="https://signup.acaiplatform.ai/" className="platform-primary-action arrow-button">
                  Try ACAI agent
                  <svg className="arrow-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </a>
                <a href="/docs#getting-started" className="platform-secondary-action arrow-button">
                  View setup
                  <svg className="arrow-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </a>
              </div>
            </div>

            <div className={`agent-hero-preview platform-preview-lift scroll-reveal ${heroVisible ? 'is-visible' : ''} ${previewLifted ? 'is-lifted' : ''}`}>
              <AgentChatMock />
            </div>
          </div>
        </section>

        <section ref={capabilityRef} className="agent-capability-section">
          <div className="platform-shell">
            <div className="platform-section-heading">
              <div className={`platform-kicker scroll-reveal ${capabilityVisible ? 'is-visible' : ''}`}>
                <span />
                Analysis Workflow
              </div>
              <h2>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line ${capabilityVisible ? 'is-visible' : ''}`}>From question to research</span>
                </span>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line headline-reveal-line-2 ${capabilityVisible ? 'is-visible' : ''}`}>to generated artifacts.</span>
                </span>
              </h2>
            </div>

            <div className="platform-feature-grid">
              {agentCapabilities.map((capability, index) => (
                <article
                  key={capability.title}
                  className={`platform-feature-card agent-feature-card scroll-reveal ${capabilityVisible ? 'is-visible' : ''}`}
                  style={{ transitionDelay: `${0.18 + index * 0.12}s` }}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section ref={filesRef} className="agent-files-section">
          <div className={`platform-shell agent-file-system scroll-reveal ${filesVisible ? 'is-visible' : ''}`}>
            <div>
              <div className="platform-kicker">
                <span />
                Output System
              </div>
              <h2>ACAI produces files your team can use beyond the chat.</h2>
              <p>
                Every analysis can become a chart, written report or reproducible script, so product research can move from chat to planning, reviews and experimentation.
              </p>
            </div>
            <div className="agent-output-stack">
              {generatedFiles.map((file) => (
                <div key={file.name}>
                  <span>{file.type}</span>
                  <strong>{file.name}</strong>
                  <p>{file.meta}</p>
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
