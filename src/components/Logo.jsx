export function Logo({ size = 'md' }) {
  const cfg = {
    sm: { outer: 30, mid: 19, inner: 10 },
    md: { outer: 42, mid: 27, inner: 13 },
    lg: { outer: 56, mid: 36, inner: 18 },
  }[size]
  return (
    <div style={{ width: cfg.outer, height: cfg.outer, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2.5px solid #F47B20' }} />
      <div style={{ position: 'absolute', width: cfg.mid, height: cfg.mid, borderRadius: '50%', border: '2px solid #F5D000' }} />
      <div style={{ width: cfg.inner, height: cfg.inner, borderRadius: '50%', background: '#1A7A2E' }} />
    </div>
  )
}
