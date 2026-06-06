import { useState } from 'react'
import { NAV } from '../docsNav'

export default function DocsSidebar({ section, page, onNavigate }) {
  const [open, setOpen] = useState(() => {
    const initial = {}
    NAV.forEach(g => { initial[g.slug] = g.slug === section })
    return initial
  })

  const toggle = (slug) => setOpen(p => ({ ...p, [slug]: !p[slug] }))

  return (
    <aside style={{
      width: '260px',
      flexShrink: 0,
      borderRight: '1px solid rgba(255,255,255,0.07)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflowY: 'auto',
      scrollbarWidth: 'none',
    }}>
      {/* Section label at top of sidebar */}
      <div style={{ padding: '16px 18px 10px', borderBottom: '1px solid rgba(255,255,255,0.07)', flexShrink: 0 }}>
        <span style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)' }}>Documentation</span>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '4px 0 24px' }}>
        {NAV.map(group => {
          const isOpen = open[group.slug]
          return (
            <div key={group.slug} style={{ marginBottom: '2px' }}>
              <button
                onClick={() => toggle(group.slug)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 18px', background: 'transparent', border: 'none', cursor: 'pointer', color: isOpen ? '#f6f6f1' : 'rgba(255,255,255,0.45)', fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'left' }}
              >
                {group.group}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {isOpen && (
                <div style={{ paddingBottom: '4px' }}>
                  {group.items.map((item, i) => {
                    if (item.type === 'divider') {
                      return (
                        <div key={`divider-${i}`} style={{ padding: '8px 18px 4px 28px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)' }}>{item.label}</span>
                          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
                        </div>
                      )
                    }
                    const active = section === group.slug && page === item.slug
                    return (
                      <button
                        key={item.slug}
                        onClick={() => onNavigate(group.slug, item.slug)}
                        style={{
                          width: '100%', display: 'flex', alignItems: 'center', gap: '8px',
                          padding: '6px 18px 6px 28px', background: active ? 'rgba(245,130,10,0.12)' : 'transparent',
                          border: 'none', borderLeft: active ? '2px solid #f5820a' : '2px solid transparent',
                          cursor: 'pointer', color: active ? '#f5820a' : 'rgba(255,255,255,0.55)',
                          fontSize: '13px', fontWeight: active ? '600' : '400', textAlign: 'left',
                          transition: 'color 0.15s, background 0.15s',
                        }}
                        onMouseEnter={e => { if (!active) e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}
                        onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'rgba(255,255,255,0.55)' }}
                      >
                        {item.label}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* Footer links */}
      <div style={{ padding: '14px 18px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[['GitHub', 'https://github.com'], ['Status', 'https://status.acaiplatform.ai'], ['Support', '/company/contact']].map(([label, href]) => (
          <a key={label} href={href} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>
            {label}
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M2 2h6v6M2 8L8 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
          </a>
        ))}
      </div>
    </aside>
  )
}
