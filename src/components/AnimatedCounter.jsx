import { memo, useRef, useState, useEffect } from 'react'
import { useInView, useMotionValue, animate } from 'framer-motion'

export const AnimatedCounter = memo(function AnimatedCounter({ value, prefix = '', suffix = '', label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const mv = useMotionValue(0)
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return
    const isFloat = value % 1 !== 0
    const ctrl = animate(mv, value, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate(v) { setDisplay(isFloat ? v.toFixed(1) : Math.floor(v).toString()) },
    })
    return ctrl.stop
  }, [inView, value, mv])

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: '3.5rem', lineHeight: 1, color: '#111111' }}>
        {prefix}{display}<span style={{ color: '#F47B20' }}>{suffix}</span>
      </div>
      <div style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
        {label}
      </div>
    </div>
  )
})
