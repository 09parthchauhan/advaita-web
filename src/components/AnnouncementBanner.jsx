export function AnnouncementBanner() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      padding: '13px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      flexWrap: 'wrap',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle animated shimmer */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(90deg, transparent 0%, rgba(244,123,32,0.06) 50%, transparent 100%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 3s linear infinite',
      }} />

      {/* iHub badge */}
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        background: 'rgba(245,208,0,0.12)', border: '1px solid rgba(245,208,0,0.28)',
        borderRadius: 999, padding: '3px 12px',
        fontSize: '0.68rem', fontWeight: 700, color: '#F5D000',
        textTransform: 'uppercase', letterSpacing: '0.08em', flexShrink: 0,
      }}>
        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#F5D000', animation: 'pulse 2s ease-in-out infinite' }} />
        iHub
      </span>

      <p style={{
        fontSize: '0.85rem',
        color: 'rgba(240,235,224,0.85)',
        fontWeight: 400,
        margin: 0,
        textAlign: 'center',
        fontFamily: "'Manrope', sans-serif",
        position: 'relative',
      }}>
        <span style={{ fontWeight: 700, color: '#F0EBE0' }}>Startup Srujan Grant S4</span>
        &nbsp;&mdash; backed by iHub
      </p>
    </div>
  )
}
