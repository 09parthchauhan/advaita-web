import { useEffect, useRef, useState } from 'react'

function FanAnimation() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width, H = canvas.height
    const ox = W * 0.08, oy = H * 0.5
    const numLines = 20
    let frame = 0
    let raf

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      frame++
      for (let i = 0; i < numLines; i++) {
        const spread = 0.62
        const angle = -spread / 2 + (i / (numLines - 1)) * spread
        const len = W * 0.9
        const ex = ox + Math.cos(angle) * len
        const ey = oy + Math.sin(angle) * len
        // control point for curve — bows outward
        const curve = (i - numLines / 2) * 18
        const cpx = ox + (ex - ox) * 0.5
        const cpy = oy + (ey - oy) * 0.5 + curve

        // curved static line
        ctx.beginPath()
        ctx.moveTo(ox, oy)
        ctx.quadraticCurveTo(cpx, cpy, ex, ey)
        ctx.strokeStyle = `rgba(160,175,200,0.22)`
        ctx.lineWidth = 1.4
        ctx.stroke()

        // moving dot along the quadratic curve
        const prog = ((frame * 0.006 + i * 0.05) % 1)
        const t = prog
        const px = (1-t)*(1-t)*ox + 2*(1-t)*t*cpx + t*t*ex
        const py2 = (1-t)*(1-t)*oy + 2*(1-t)*t*cpy + t*t*ey
        const alpha = Math.sin(prog * Math.PI)
        ctx.beginPath()
        ctx.arc(px, py2, 2.8, 0, Math.PI * 2)
        const colors = ['26,107,26', '245,130,10', '74,100,200']
        ctx.fillStyle = `rgba(${colors[i % 3]},${alpha * 0.9})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [])
  return (
    <canvas
      ref={canvasRef}
      width={560}
      height={380}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    />
  )
}

const STEPS = [
  {
    num: '.01',
    title: 'Drop in the SDK',
    desc: 'One line per platform. SDKs for every language your team ships — no infra changes required.',
  },
  {
    num: '.02',
    title: 'Capture every event',
    desc: 'Events flow in real-time through your pipeline — validated, enriched, and stored automatically.',
  },
  {
    num: '.03',
    title: 'Query with AI',
    desc: 'Plain-English questions, SQL-free answers. Share any insight with your team in a single click.',
  },
]

export default function HowItWorksSection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} style={{ background: '#f5f5f3', padding: '100px 0' }}>
      <div className="hiw-container" style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 40px' }}>
        <div className="hiw-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '80px', alignItems: 'center' }}>

          {/* LEFT — headline + fan */}
          <div>
          <div className={`scroll-reveal flex items-center gap-2 mb-5 ml-3 ${visible ? 'is-visible' : ''}`}>
          <div style={{ width: '12px', height: '12px', background: '#f5820a', flexShrink: 0, alignSelf: 'center' }} />
          <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase', alignSelf: 'center' }}>
            How It Works
          </span>
        </div>
            <h3 style={{ fontSize: 'clamp(32px, 6vw, 54px)', fontWeight: '500', letterSpacing: '-0.04em', color: '#111', lineHeight: 1.1, marginBottom: '48px' }}>
              <span className="block overflow-hidden">
                <span className={`headline-reveal-line ${visible ? 'is-visible' : ''}`}>Designed to turn</span>
              </span>
              <span className="block overflow-hidden">
                <span className={`headline-reveal-line headline-reveal-line-2 ${visible ? 'is-visible' : ''}`}>complexity into clarity</span>
              </span>
            </h3>
            <FanAnimation />
          </div>

          {/* RIGHT — 3 steps + CTA */}
          <div>
            {STEPS.map((s, i) => (
              <div
                key={i}
                className={`scroll-reveal-right ${visible ? 'is-visible' : ''}`}
                style={{ padding: '18px 0', transitionDelay: `${0.18 + i * 0.12}s` }}
              >
                <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '36px', fontWeight: '800', letterSpacing: '-0.04em', color: '#f5820a', marginBottom: '4px' }}>{s.num}</div>
                <div style={{ fontSize: 'clamp(22px, 5vw, 30px)', fontWeight: '700', color: '#111', marginBottom: '6px' }}>{s.title}</div>
                <div className="hiw-step-desc" style={{ fontSize: '15px', color: '#828282', lineHeight: 1.7, width: '70%'}}>{s.desc}</div>
              </div>
            ))}

            <div className={`scroll-reveal-right ${visible ? 'is-visible' : ''}`} style={{ paddingTop: '18px', transitionDelay: '0.58s' }}>
              <a
                href="https://signup.acaiplatform.ai/"
                className="arrow-button"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#111', color: '#fff', padding: '14px 28px', fontSize: '14px', 
                  fontWeight: '600', textDecoration: 'none', transition: 'opacity 0.2s' }}
              >
                GET STARTED
                <svg className="arrow-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2h10v10M2 12L12 2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
