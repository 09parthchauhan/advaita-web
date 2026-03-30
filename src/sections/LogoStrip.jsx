import { COMPANIES } from '../constants/index.jsx'

function CompanyLogo({ name, color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 16px', borderRadius: 10, border: '1px solid rgba(0,0,0,0.07)', background: 'rgba(255,255,255,0.7)', flexShrink: 0 }}>
      {/* Color dot as brand indicator */}
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0 }} />
      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#334155', whiteSpace: 'nowrap', letterSpacing: '-0.01em' }}>
        {name}
      </span>
    </div>
  )
}

export function LogoStrip() {
  const doubled = [...COMPANIES, ...COMPANIES]
  return (
    <section style={{ borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)', background: '#F5F5F2', padding: '20px 0', overflow: 'hidden', position: 'relative' }}>
      <div style={{ textAlign: 'center', fontSize: '0.7rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 16 }}>
        Trusted by engineering teams at
      </div>
      {/* Edge fades */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, zIndex: 2, background: 'linear-gradient(to right, #F5F5F2, transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, zIndex: 2, background: 'linear-gradient(to left, #F5F5F2, transparent)', pointerEvents: 'none' }} />
      <div className="marquee-track" style={{ paddingLeft: 8, paddingRight: 8 }}>
        {doubled.map((c, i) => (
          <CompanyLogo key={`${c.name}-${i}`} name={c.name} color={c.color} />
        ))}
      </div>
    </section>
  )
}
