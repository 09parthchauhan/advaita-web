import { useEffect, useRef, useState } from 'react'

const QUESTIONS = [
  {
    question: 'What is Advaita?',
    answer: 'Advaita is an AI analytics platform that helps product, data and growth teams understand user behaviour across product, web and mobile surfaces.',
  },
  {
    question: 'How does Advaita improve my product decisions?',
    answer: 'Advaita turns clickstream data into clear answers, root-cause explanations and experiment insights so teams can decide what to fix, test or ship next.',
  },
  {
    question: 'Do I need technical skills to use Advaita?',
    answer: 'Non-technical teammates can ask questions in plain English and explore insights without writing SQL. Technical teams still get the control they need for custom events and deeper analysis.',
  },
  {
    question: 'Can Advaita integrate with our existing tools?',
    answer: 'Yes. Advaita is designed to connect with your existing analytics, warehouse and workflow stack so insights can move into the tools your team already uses.',
  },
  {
    question: 'Is my data really mine when self-hosted?',
    answer: 'Yes. In a self-hosted setup, your data stays inside your infrastructure while Advaita provides the analytics and AI layer on top of it.',
  },
  {
    question: 'How do I get started?',
    answer: 'Start by connecting your product data source or adding event tracking. From there, your team can ask questions, monitor KPIs and investigate user journeys.',
  },
]

export default function FaqSection() {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(2)
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.18 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} style={{ background: '#F6F6F1', padding: '110px 0' }}>
      <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 20px' }}>
        <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.25fr', gap: '96px', alignItems: 'start' }}>
          <div className="faq-left" style={{ position: 'sticky', top: '120px' }}>
            <div className={`scroll-reveal ${visible ? 'is-visible' : ''}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '34px' }}>
              <div style={{ width: '10px', height: '10px', background: '#f5820a' }} />
              <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.16em', color: '#111', textTransform: 'uppercase' }}>Questions</span>
            </div>

            <h3 style={{ fontSize: 'clamp(32px, 6vw, 54px)', fontWeight: '550', letterSpacing: '-0.04em', color: '#111', lineHeight: 1.1, margin: 0 }}>
              <span className="block overflow-hidden">
                <span className={`headline-reveal-line ${visible ? 'is-visible' : ''}`}>Questions Are To</span>
              </span>
              <span className="block overflow-hidden">
                <span className={`headline-reveal-line headline-reveal-line-2 ${visible ? 'is-visible' : ''}`}>Be Asked</span>
              </span>
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {QUESTIONS.map((item, index) => {
              const isOpen = open === index

              return (
                <button
                  key={item.question}
                  type="button"
                  className={`faq-item scroll-reveal ${visible ? 'is-visible' : ''}`}
                  onClick={() => setOpen(isOpen ? null : index)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: isOpen ? '#ededeb' : '#fbfbf8',
                    border: '1px solid rgba(17,17,17,0.12)',
                    borderRadius: '0px',
                    padding: isOpen ? '30px 34px 34px' : '26px 34px',
                    cursor: 'pointer',
                    transition: 'background 0.24s ease, border-color 0.24s ease, transform 1.15s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.15s cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: `${0.18 + index * 0.08}s`,
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
                    <span style={{ fontSize: 'clamp(18px, 4.5vw, 23px)', fontWeight: '500', color: '#111', lineHeight: 1.25 }}>{item.question}</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      style={{ flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.24s ease' }}
                    >
                      <path d="M3 6.5L9 12.5L15 6.5" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>

                  <span
                    className="faq-answer"
                    style={{
                      display: 'block',
                      maxHeight: isOpen ? '320px' : '0px',
                      opacity: isOpen ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.32s ease, opacity 0.24s ease, margin-top 0.24s ease',
                      marginTop: isOpen ? '20px' : '0px',
                      fontSize: '18px',
                      color: '#5f5f5b',
                      lineHeight: 1.55,
                      maxWidth: '760px',
                    }}
                  >
                    {item.answer}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
