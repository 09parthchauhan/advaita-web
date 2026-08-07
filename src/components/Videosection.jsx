import { useEffect, useRef, useState } from 'react'

const VIDEO_ID = 'lEEDp1pOf2g'
const WATCH_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`

export default function VideoSection() {
  const [visible, setVisible] = useState(false)
  const [playing, setPlaying] = useState(false)
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
    <section ref={sectionRef} style={{ background: '#ffffff', padding: '96px 0' }}>
      <style>{`
        .video-facade:hover .video-play-btn { background: #f5820a; transform: scale(1.06); }
        .video-facade:hover .video-thumb { transform: scale(1.03); }
        @media (max-width: 768px) {
          .video-container { padding: 0 20px !important; }
        }
      `}</style>

      <div className="video-container" style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>

          <div className={`scroll-reveal ${visible ? 'is-visible' : ''}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
            <div style={{ width: '10px', height: '10px', background: '#f5820a', flexShrink: 0 }} />
            <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase' }}>
              Product Tutorial
            </span>
          </div>

          <h3 style={{ fontSize: 'clamp(30px, 6vw, 52px)', fontWeight: '500', letterSpacing: '-0.04em', color: '#111', lineHeight: 1.1, marginBottom: '18px' }}>
            <span className="block overflow-hidden">
              <span className={`headline-reveal-line ${visible ? 'is-visible' : ''}`}>Get started with the</span>
            </span>
            <span className="block overflow-hidden">
              <span className={`headline-reveal-line headline-reveal-line-2 ${visible ? 'is-visible' : ''}`}>Acai chatbot</span>
            </span>
          </h3>

          <p className={`scroll-reveal ${visible ? 'is-visible' : ''}`} style={{ fontSize: '17px', color: '#828282', lineHeight: 1.65, maxWidth: '560px', margin: '0 auto 40px', transitionDelay: '0.28s' }}>
            A short walkthrough of connecting your data and asking your first questions in plain English.
          </p>

          <div className={`scroll-reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', background: '#111', overflow: 'hidden', border: '1px solid #e5e5e3' }}>
              {playing ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                  title="Get started with the Acai chatbot"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                />
              ) : (
                <button
                  type="button"
                  className="video-facade"
                  onClick={() => setPlaying(true)}
                  aria-label="Play tutorial video"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', padding: 0, border: 0, background: 'none', cursor: 'pointer', overflow: 'hidden' }}
                >
                  <img
                    className="video-thumb"
                    src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                    alt="Acai chatbot tutorial"
                    loading="lazy"
                    draggable="false"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  />
                  <span style={{ position: 'absolute', inset: 0, background: 'rgba(3,3,3,0.28)' }} />
                  <span
                    className="video-play-btn"
                    style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '74px', height: '74px', borderRadius: '50%', background: '#111', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.25s ease, transform 0.25s ease' }}
                  >
                    <svg width="22" height="26" viewBox="0 0 22 26" fill="none" aria-hidden="true">
                      <path d="M21 13L1 25V1l20 12z" fill="#fff" />
                    </svg>
                  </span>
                </button>
              )}
            </div>
          </div>

          <div className={`scroll-reveal ${visible ? 'is-visible' : ''}`} style={{ marginTop: '28px', transitionDelay: '0.5s' }}>
            <a
              href={WATCH_URL}
              target="_blank"
              rel="noreferrer"
              className="arrow-button"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#111', color: '#fff', padding: '14px 28px', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}
            >
              WATCH ON YOUTUBE
              <svg className="arrow-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2h10v10M2 12L12 2" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
