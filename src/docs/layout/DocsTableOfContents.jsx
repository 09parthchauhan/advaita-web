import { useEffect, useState } from 'react'

export default function DocsTableOfContents({ items }) {
  const [active, setActive] = useState(items[0]?.id || '')

  useEffect(() => {
    if (!items.length) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )
    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [items])

  if (!items.length) return null

  return (
    <aside style={{ width: '200px', flexShrink: 0, paddingTop: '32px', paddingLeft: '24px' }}>
      <p style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: '12px' }}>On this page</p>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {items.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            style={{
              fontSize: '12px',
              fontWeight: active === item.id ? '600' : '400',
              color: active === item.id ? '#f5820a' : 'rgba(255,255,255,0.4)',
              textDecoration: 'none',
              padding: '4px 0 4px 10px',
              borderLeft: active === item.id ? '2px solid #f5820a' : '2px solid transparent',
              transition: 'color 0.15s, border-color 0.15s',
              display: item.level === 3 ? 'block' : 'block',
              paddingLeft: item.level === 3 ? '20px' : '10px',
            }}
            onMouseEnter={e => { if (active !== item.id) e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
            onMouseLeave={e => { if (active !== item.id) e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}
