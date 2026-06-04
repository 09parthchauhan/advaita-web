import { useEffect, useRef, useState } from 'react'

function CtaParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let frame = 0

    const resize = () => {
      const ratio = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * ratio
      canvas.height = canvas.offsetHeight * ratio
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      ctx.clearRect(0, 0, width, height)
      frame += 0.01

      const cols = 110
      const rows = 20

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const xFrac = c / (cols - 1)
          const yFrac = r / (rows - 1)
          const rowSpread = yFrac - 0.5

          const baseX = width * (0.02 + xFrac * 0.96)
          const baseY = height * (0.76 - xFrac * 0.42)
          const wave = Math.sin(xFrac * 7 + frame + r * 0.38) * height * 0.022
          const x = baseX + rowSpread * width * 0.1
          const y = baseY + rowSpread * height * 0.5 + wave

          const edgeFade = Math.min(1, xFrac * 2.8, (1 - xFrac) * 2.8)
          const distFromCenter = Math.abs(yFrac - 0.5)
          const depth = Math.max(0, Math.min(1, 1 - distFromCenter * 1.55)) * edgeFade
          const size = depth * 2.4 + 0.25

          if (size < 0.45) continue

          const fill = xFrac < 0.36
            ? `rgba(245,130,10,${depth * 0.38})`
            : xFrac < 0.68
            ? `rgba(245,208,0,${depth * 0.3})`
            : `rgba(134,210,150,${depth * 0.34})`

          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fillStyle = fill
          ctx.fill()
        }
      }

      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.9,
        pointerEvents: 'none',
      }}
    />
  )
}

export default function FinalCtaSection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.2 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} style={{ background: '#F6F6F1', padding: '0' }}>
      <div style={{ position: 'relative', overflow: 'hidden', background: '#030303', minHeight: 'clamp(360px, 42vh, 440px)', display: 'flex', alignItems: 'center' }}>
        <CtaParticleField />

        <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 20px', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <div className={`scroll-reveal ${visible ? 'is-visible' : ''}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
              <div style={{ width: '10px', height: '10px', background: '#f5820a' }} />
              <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.16em', color: 'rgba(255,255,255,0.78)', textTransform: 'uppercase' }}>
                Ready to grow?
              </span>
            </div>

            <h3 style={{ fontSize: '64px', fontWeight: '500', letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.05, marginBottom: '22px' }}>
              <span className="block overflow-hidden">
                <span className={`headline-reveal-line ${visible ? 'is-visible' : ''}`}>Start Understanding</span>
              </span>
              <span className="block overflow-hidden">
                <span className={`headline-reveal-line headline-reveal-line-2 ${visible ? 'is-visible' : ''}`}>Your Users Today</span>
              </span>
            </h3>

            <p className={`scroll-reveal ${visible ? 'is-visible' : ''}`} style={{ fontSize: '20px', color: 'rgba(255,255,255,0.48)', lineHeight: 1.45, margin: '0 auto 36px', maxWidth: '560px', transitionDelay: '0.3s' }}>
              Turn product behaviour into decisions your whole team can trust.
            </p>

            <div className={`scroll-reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.44s' }}>
              <a
                href="https://signup.acaiplatform.ai/"
                className="arrow-button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: '#F6F6F1',
                  color: '#111',
                  border: '1px solid #F6F6F1',
                  padding: '17px 30px',
                  fontSize: '18px',
                  fontWeight: '600',
                  textDecoration: 'none',
                }}
              >
                Get started
                <svg className="arrow-icon" width="15" height="15" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
