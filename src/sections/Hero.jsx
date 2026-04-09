import React from 'react'
import { motion } from 'framer-motion'
import { stagger, fadeUp } from '../constants/index.jsx'
import './Hero.css'

function ClothCanvas() {
  const canvasRef = React.useRef(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    function resize() {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Light direction (upper-left, toward viewer) — normalised
    const LX = -0.45, LY = -0.75, LZ = 0.48
    const LEN = Math.sqrt(LX*LX + LY*LY + LZ*LZ)
    const lx = LX/LEN, ly = LY/LEN, lz = LZ/LEN

    // Wave parameters: N fold layers
    const N = 8
    const STEP = 3 // px per column
    let t = 0
    let rafId

    // Wave y for layer i at x
    function wy(i, x, w, h) {
      const base = h * (0.1 + i * (0.85 / (N - 1)))
      const freq1 = 0.0055 + i * 0.0003
      const freq2 = freq1 * 1.97
      const freq3 = freq1 * 4.1
      const speed1 = 0.8 + i * 0.07
      const speed2 = speed1 * 1.3
      const speed3 = speed1 * 2.1
      const amp1 = h * (0.055 - i * 0.002)
      const amp2 = amp1 * 0.4
      const amp3 = amp1 * 0.15
      const phase = i * 0.72
      return base
        + amp1 * Math.sin(x * freq1 + t * speed1 + phase)
        + amp2 * Math.sin(x * freq2 - t * speed2 + phase * 1.3)
        + amp3 * Math.sin(x * freq3 + t * speed3 + phase * 0.7)
    }

    // Slope of wave (finite difference)
    function wSlope(i, x, w, h) {
      return (wy(i, x + 1, w, h) - wy(i, x - 1, w, h)) / 2
    }

    // Lambertian + Blinn-Phong shading → intensity 0..1
    function shade(slope) {
      // Surface normal from slope (dx, 1, nz tilt for roundness)
      const nz = 0.55
      const nx = -slope
      const ny = 1
      const nLen = Math.sqrt(nx*nx + ny*ny + nz*nz)
      const nx_ = nx/nLen, ny_ = ny/nLen, nz_ = nz/nLen

      const diffuse = Math.max(0, nx_*lx + ny_*ly + nz_*lz)

      // Half-vector for specular
      const hx = lx, hy = ly, hz = lz + 1
      const hLen = Math.sqrt(hx*hx + hy*hy + hz*hz)
      const spec = Math.pow(Math.max(0, nx_*(hx/hLen) + ny_*(hy/hLen) + nz_*(hz/hLen)), 18) * 0.45

      return Math.min(1, diffuse * 0.85 + spec)
    }

    function draw() {
      const w = canvas.width, h = canvas.height
      if (!w || !h) { rafId = requestAnimationFrame(draw); t += 0.011; return }

      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < N; i++) {
        // Draw fold as a filled band from this wave to the next (or bottom)
        const nextBase = i < N - 1
          ? h * (0.1 + (i + 1) * (0.85 / (N - 1)))
          : h * 1.1

        // Column-by-column rendering
        for (let x = 0; x < w; x += STEP) {
          const y = wy(i, x, w, h)
          const slope = wSlope(i, x, w, h)
          const I = shade(slope)

          // Orange palette: shadow rgb(28,9,2) → highlight rgb(255,180,70)
          const r = Math.round(28 + 227 * I)
          const g = Math.round(9 + 171 * I)
          const b = Math.round(2 + 68 * I)

          // Height of this column's fold band
          const bandH = nextBase - y + STEP * 2

          ctx.fillStyle = `rgb(${r},${g},${b})`
          ctx.fillRect(x, y, STEP, Math.max(0, bandH))
        }
      }

      // Soft radial bloom overlay
      const grad = ctx.createRadialGradient(w * 0.55, h * 0.22, 0, w * 0.55, h * 0.22, w * 0.45)
      grad.addColorStop(0, 'rgba(244,110,18,0.10)')
      grad.addColorStop(1, 'rgba(244,110,18,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      t += 0.011
      rafId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    />
  )
}

export function Hero() {
  return (
    <section style={{ background: '#ffffff', minHeight: '90vh', display: 'flex', alignItems: 'stretch', overflow: 'hidden', width: '100%' }}>
      <div style={{ display: 'flex', width: '100%', minHeight: '90vh', alignItems: 'stretch' }}>

        {/* ── Left column (50%) ── */}
        <motion.div
          className="hero-left-grid"
          variants={stagger} initial="hidden" animate="visible"
          style={{
            flex: '0 0 50%',
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(100px,10vw,120px) clamp(32px,5vw,72px) clamp(60px,6vw,80px)',
            position: 'relative',
            overflow: 'hidden',
            background: '#ffffff',
          }}
        >
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', width: '100%' }}>
          {/* Badge */}
          <motion.div variants={fadeUp} style={{ marginBottom: 24 }}>
            <span style={{
              display: 'inline-block',
              border: '1px solid #E5E5E5',
              borderRadius: 4,
              padding: '4px 14px',
              fontSize: '0.72rem',
              color: '#888',
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 500,
              letterSpacing: '0.02em',
            }}>
              Open Source Analytics
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2.4rem, 4.5vw, 3.75rem)',
              lineHeight: 1.15,
              color: '#111111',
              margin: '0 0 20px',
              letterSpacing: '-0.03em',
            }}
          >
            Stop reading dashboards.<br />
            <span style={{ color: '#F47B20' }}>Start understanding users.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '1.05rem',
              color: '#666666',
              lineHeight: 1.7,
              maxWidth: 400,
              margin: '0 0 36px',
              fontWeight: 400,
            }}
          >
            Advaita is a self-hosted, open-source analytics platform that gives you complete behavioral insights — without sending data to third parties.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32, flexWrap: 'wrap' }}>
            <a href="#waitlist" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 26px',
              background: '#111111',
              color: '#ffffff',
              borderRadius: 4,
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
              fontFamily: "'Manrope', sans-serif",
              transition: 'background 0.18s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#F47B20'}
              onMouseLeave={e => e.currentTarget.style.background = '#111111'}
            >
              Get Early Access
            </a>
            <a href="#how-it-works" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: '0.9rem',
              fontWeight: 500,
              color: '#F47B20',
              textDecoration: 'none',
              fontFamily: "'Manrope', sans-serif",
              transition: 'gap 0.18s',
            }}
              onMouseEnter={e => e.currentTarget.style.gap = '10px'}
              onMouseLeave={e => e.currentTarget.style.gap = '6px'}
            >
              See how it works →
            </a>
          </motion.div>

          {/* Stat chips */}
          <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            {/* Self-hosted — orange */}
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '8px 16px', borderRadius: 4,
              background: 'rgba(244,123,32,0.1)', color: '#b85a0d',
              border: '1px solid rgba(244,123,32,0.2)',
              fontSize: '0.78rem', fontWeight: 700,
              fontFamily: "'Manrope', sans-serif",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F47B20', display: 'inline-block', flexShrink: 0 }} />
              Self-hosted
            </span>

            {/* MIT Licensed — dark/green */}
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '8px 16px', borderRadius: 4,
              background: 'rgba(17,17,17,0.07)', color: '#333333',
              border: '1px solid rgba(17,17,17,0.12)',
              fontSize: '0.78rem', fontWeight: 700,
              fontFamily: "'Manrope', sans-serif",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#1A7A2E', display: 'inline-block', flexShrink: 0 }} />
              MIT Licensed
            </span>

            {/* Backed by iHub — blue */}
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '8px 16px', borderRadius: 4,
              background: 'rgba(49,120,198,0.08)', color: '#1a5fa8',
              border: '1px solid rgba(49,120,198,0.18)',
              fontSize: '0.78rem', fontWeight: 700,
              fontFamily: "'Manrope', sans-serif",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3178C6', display: 'inline-block', flexShrink: 0 }} />
              Backed by iHub
            </span>
          </motion.div>
          </div>
        </motion.div>

        {/* ── Right column (50%) — silk cloth canvas ── */}
        <div style={{
          flex: '0 0 50%',
          width: '50%',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          background: '#080808',
        }}>
          {/* Canvas animation fills the panel */}
          <ClothCanvas />

          {/* Left edge vignette — blends into white left panel */}
          <div style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, width: 80,
            background: 'linear-gradient(to right, #080808, transparent)',
            zIndex: 2, pointerEvents: 'none',
          }} />

          {/* Right edge vignette */}
          <div style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, width: 80,
            background: 'linear-gradient(to left, #080808, transparent)',
            zIndex: 2, pointerEvents: 'none',
          }} />

          {/* Ghost tagline centred over canvas */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute', inset: 0, zIndex: 3,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            <p style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              letterSpacing: '-0.035em',
              lineHeight: 1.25,
              textAlign: 'center',
              margin: 0,
              color: 'rgba(255,255,255,0.14)',
            }}>
              Know your users.
            </p>
            <p style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              letterSpacing: '-0.035em',
              lineHeight: 1.25,
              textAlign: 'center',
              margin: 0,
              color: 'rgba(255,255,255,0.22)',
            }}>
              Own your{' '}
              <span style={{ color: 'rgba(255,160,60,0.55)' }}>data.</span>
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  )
}