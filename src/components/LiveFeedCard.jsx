import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EVENT_DATA } from '../constants/index.jsx'

export function LiveFeedCard() {
  const [items, setItems] = useState(() => EVENT_DATA.slice(0, 3))

  useEffect(() => {
    const id = setInterval(() => {
      setItems(prev => {
        const next = EVENT_DATA[Math.floor(Math.random() * EVENT_DATA.length)]
        return [next, ...prev].slice(0, 3)
      })
    }, 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', padding: '16px', width: 220 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <span style={{ fontSize: 10, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Live Events</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 10, color: '#059669', fontWeight: 600 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#059669', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
          live
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        <AnimatePresence initial={false} mode="popLayout">
          {items.map((ev, i) => (
            <motion.div
              key={`${ev.name}-${ev.user}-${i}`}
              layout
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: ev.color, flexShrink: 0 }} />
                <span style={{ fontSize: 12, fontWeight: 500, color: '#1E293B' }}>{ev.name}</span>
              </div>
              <span style={{ fontSize: 10, color: '#94A3B8', fontFamily: 'monospace' }}>{ev.user}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
