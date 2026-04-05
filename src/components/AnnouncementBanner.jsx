import { forwardRef } from 'react'

export const BANNER_H = 38

export const AnnouncementBanner = forwardRef(function AnnouncementBanner({ onDismiss }, ref) {
  return (
    <div ref={ref} style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 70,
      background: 'linear-gradient(90deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      padding: '7px 40px 7px 16px', minHeight: BANNER_H,
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      flexWrap: 'wrap',
    }}>
      {/* Subtle animated shimmer */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(90deg, transparent 0%, rgba(244,123,32,0.06) 50%, transparent 100%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 3s linear infinite',
      }} />

      {/* Badge */}
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        background: 'rgba(244,123,32,0.15)', border: '1px solid rgba(244,123,32,0.3)',
        borderRadius: 999, padding: '2px 10px',
        fontSize: '0.68rem', fontWeight: 700, color: '#F47B20',
        textTransform: 'uppercase', letterSpacing: '0.08em', flexShrink: 0,
      }}>
        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#F47B20', animation: 'pulse 2s ease-in-out infinite' }} />
        In Development
      </span>

      <p style={{ fontSize: '0.8rem', color: 'rgba(240,235,224,0.8)', fontWeight: 400, margin: 0, textAlign: 'center' }}>
        Advaita is currently in active development —&nbsp;
        <a href="#waitlist" style={{ color: '#F5D000', fontWeight: 600, textDecoration: 'none' }}
          onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
          onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
        >join the waitlist</a>
        &nbsp;to get early access.
      </p>

      <span className="banner-funding" style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        borderLeft: '1px solid rgba(255,255,255,0.1)',
        paddingLeft: 12, flexShrink: 0,
      }}>
        <span style={{ fontSize: '0.75rem', color: 'rgba(240,235,224,0.5)', fontWeight: 400 }}>🎉</span>
        <span style={{ fontSize: '0.78rem', color: 'rgba(240,235,224,0.75)', fontWeight: 400 }}>
          Backed by&nbsp;<span style={{ fontWeight: 700, color: '#F5D000' }}>iHub</span>
        </span>
      </span>

      {/* Dismiss */}
      <button
        onClick={onDismiss}
        aria-label="Dismiss"
        style={{
          position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'rgba(240,235,224,0.4)', lineHeight: 1, padding: 4, fontSize: '1rem',
          transition: 'color 0.15s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'rgba(240,235,224,0.9)'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,235,224,0.4)'}
      >✕</button>
    </div>
  )
})
