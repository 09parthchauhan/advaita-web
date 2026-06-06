export const toc = []

export default function ComingSoon({ section, page }) {
  return (
    <div style={{ paddingTop: '40px' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'rgba(245,130,10,0.08)', border: '1px solid rgba(245,130,10,0.2)', borderRadius: '8px', marginBottom: '28px' }}>
        <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#f5820a', animation: 'livePulse 2s ease infinite' }} />
        <span style={{ fontSize: '12px', color: '#f5820a', fontWeight: '600' }}>In progress</span>
      </div>
      <h1 style={{ fontSize: '32px', fontWeight: '600', letterSpacing: '-0.04em', color: '#f6f6f1', margin: '0 0 14px' }}>
        {page?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Coming Soon'}
      </h1>
      <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: '480px', margin: '0 0 40px' }}>
        This section of the documentation is being written. Check back soon or <a href="/company/contact" style={{ color: '#f5820a', textDecoration: 'none', borderBottom: '1px solid rgba(245,130,10,0.3)' }}>contact us</a> if you need immediate help.
      </p>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <a href="/docs" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#f6f6f1', fontSize: '13px', fontWeight: '600', textDecoration: 'none', transition: 'border-color 0.15s' }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}>
          ← Back to docs
        </a>
        <a href="https://signup.acaiplatform.ai/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', background: '#f5820a', border: '1px solid #f5820a', borderRadius: '8px', color: '#fff', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
          Open dashboard →
        </a>
      </div>
      <style>{`@keyframes livePulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }`}</style>
    </div>
  )
}
