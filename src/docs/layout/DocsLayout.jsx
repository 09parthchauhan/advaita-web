import { useState, useEffect } from 'react'
import DocsSidebar from './DocsSidebar'
import DocsTableOfContents from './DocsTableOfContents'
import SearchModal from '../components/SearchModal'

export default function DocsLayout({ section, page, onNavigate, children, tocItems = [] }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // Cmd/Ctrl+K opens search
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Close mobile nav on navigation
  useEffect(() => { setMobileNavOpen(false) }, [section, page])

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#f6f6f1', fontFamily: "'Geist', sans-serif", display: 'flex', flexDirection: 'column' }}>
      {/* ── Top bar ── */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, height: '56px', background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: '0', flexShrink: 0 }}>
        {/* Left: brand (matches sidebar width) */}
        <div style={{ width: '260px', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '10px', padding: '0 20px', borderRight: '1px solid rgba(255,255,255,0.07)', height: '100%' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <img src="/logo.png" alt="Advaita" style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#f6f6f1', letterSpacing: '-0.02em' }}>ADVAITA DOCS</span>
          </a>
        </div>

        {/* Center: search trigger */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: '0 24px' }}>
          <button
            onClick={() => setSearchOpen(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', maxWidth: '420px', padding: '8px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', cursor: 'text', textAlign: 'left', transition: 'border-color 0.15s, background 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, color: 'rgba(255,255,255,0.3)' }}><circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3"/><path d="M10 10l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
            <span style={{ flex: 1, fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>Search docs...</span>
            <kbd style={{ padding: '2px 6px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontFamily: 'inherit' }}>⌘K</kbd>
          </button>
        </div>

        {/* Right: links + CTA */}
        <div style={{ padding: '0 20px', display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
          <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}
            onMouseEnter={e => e.currentTarget.style.color = '#f6f6f1'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>
            GitHub
          </a>
          <a href="https://signup.acaiplatform.ai/" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '7px 14px', background: '#f5820a', color: '#fff', fontSize: '12px', fontWeight: '700', borderRadius: '7px', textDecoration: 'none', transition: 'opacity 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            Get started
          </a>
          {/* Mobile hamburger */}
          <button onClick={() => setMobileNavOpen(o => !o)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#f6f6f1', padding: '4px' }} className="docs-mobile-menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
          </button>
        </div>
      </header>

      <style>{`
        @media (max-width: 768px) {
          .docs-sidebar-wrap { display: none !important; }
          .docs-toc-wrap { display: none !important; }
          .docs-mobile-menu { display: flex !important; }
          .docs-content-area { padding: 24px 20px 60px !important; }
        }
        .docs-mobile-overlay { display: none; }
        @media (max-width: 768px) {
          .docs-mobile-overlay { display: block; }
        }
        .docs-prose h1 { font-size: clamp(28px, 4vw, 40px); font-weight: 600; letter-spacing: -0.04em; color: #f6f6f1; margin: 0 0 18px; line-height: 1.15; }
        .docs-prose h2 { font-size: 24px; font-weight: 600; letter-spacing: -0.03em; color: #f6f6f1; margin: 52px 0 16px; padding-top: 52px; border-top: 1px solid rgba(255,255,255,0.07); line-height: 1.2; scroll-margin-top: 80px; }
        .docs-prose h3 { font-size: 18px; font-weight: 600; color: #f6f6f1; margin: 32px 0 12px; scroll-margin-top: 80px; }
        .docs-prose p { font-size: 16px; color: rgba(255,255,255,0.65); line-height: 1.8; margin: 0 0 18px; }
        .docs-prose ul { margin: 0 0 18px; padding-left: 0; list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .docs-prose ul li { font-size: 16px; color: rgba(255,255,255,0.65); line-height: 1.7; padding-left: 20px; position: relative; }
        .docs-prose ul li::before { content: ''; position: absolute; left: 0; top: 10px; width: 6px; height: 6px; background: #f5820a; border-radius: 1px; }
        .docs-prose ol { margin: 0 0 18px; padding-left: 22px; display: flex; flex-direction: column; gap: 10px; }
        .docs-prose ol li { font-size: 16px; color: rgba(255,255,255,0.65); line-height: 1.7; }
        .docs-prose a { color: #f5820a; text-decoration: none; border-bottom: 1px solid rgba(245,130,10,0.3); transition: border-color 0.15s; }
        .docs-prose a:hover { border-color: #f5820a; }
        .docs-prose code:not(pre code) { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; padding: 2px 6px; font-size: 13px; color: #f5d000; font-family: 'Geist', ui-monospace, monospace; }
        .docs-prose pre { background: #111; border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 20px; overflow-x: auto; margin: 0 0 20px; }
        .docs-prose pre code { font-size: 13px; line-height: 1.7; color: rgba(255,255,255,0.82); font-family: 'Geist', ui-monospace, monospace; background: none; border: none; padding: 0; }
        .docs-callout { display: flex; gap: 12px; padding: 14px 16px; border-radius: 10px; margin: 0 0 20px; }
        .docs-callout p { margin: 0; font-size: 14px; line-height: 1.6; }
        .docs-callout-info { background: rgba(167,139,250,0.08); border: 1px solid rgba(167,139,250,0.2); }
        .docs-callout-info p { color: rgba(167,139,250,0.9); }
        .docs-callout-warning { background: rgba(245,208,0,0.07); border: 1px solid rgba(245,208,0,0.22); }
        .docs-callout-warning p { color: rgba(245,208,0,0.85); }
        .docs-callout-success { background: rgba(74,158,26,0.08); border: 1px solid rgba(74,158,26,0.22); }
        .docs-callout-success p { color: rgba(74,158,26,0.9); }
        .docs-step { display: flex; gap: 16px; margin-bottom: 28px; }
        .docs-step-num { width: 28px; height: 28px; border-radius: 8px; background: rgba(245,130,10,0.14); border: 1px solid rgba(245,130,10,0.3); color: #f5820a; font-size: 12px; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
        .docs-step-body h3 { margin: 0 0 6px; font-size: 15px; font-weight: 600; color: #f6f6f1; }
        .docs-step-body p { margin: 0; font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.65; }
        .docs-badge { display: inline-flex; align-items: center; padding: 3px 8px; border-radius: 5px; font-size: 11px; font-weight: 700; letter-spacing: 0.04em; }
        .docs-badge-orange { background: rgba(245,130,10,0.14); color: #f5820a; border: 1px solid rgba(245,130,10,0.25); }
        .docs-badge-green { background: rgba(74,158,26,0.12); color: #4a9e1a; border: 1px solid rgba(74,158,26,0.25); }
        .docs-badge-purple { background: rgba(167,139,250,0.12); color: #a78bfa; border: 1px solid rgba(167,139,250,0.25); }
        .docs-prop-table { width: 100%; border-collapse: collapse; margin: 0 0 24px; font-size: 13px; }
        .docs-prop-table th { text-align: left; padding: 8px 12px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.45); font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
        .docs-prop-table td { padding: 10px 12px; border: 1px solid rgba(255,255,255,0.06); color: rgba(255,255,255,0.7); vertical-align: top; line-height: 1.55; }
        .docs-prop-table tr:hover td { background: rgba(255,255,255,0.02); }
      `}</style>

      {/* Search modal */}
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}

      {/* Mobile sidebar overlay */}
      {mobileNavOpen && (
        <div className="docs-mobile-overlay" style={{ position: 'fixed', inset: 0, zIndex: 40, display: 'flex' }}>
          <div style={{ width: '280px', background: '#0f0f0f', borderRight: '1px solid rgba(255,255,255,0.1)', overflowY: 'auto', height: '100vh' }}>
            <DocsSidebar section={section} page={page} onNavigate={(s, p) => { onNavigate(s, p); setMobileNavOpen(false) }} />
          </div>
          <div style={{ flex: 1, background: 'rgba(0,0,0,0.6)' }} onClick={() => setMobileNavOpen(false)} />
        </div>
      )}

      {/* ── Body ── */}
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        {/* Sidebar */}
        <div className="docs-sidebar-wrap" style={{ position: 'sticky', top: '56px', height: 'calc(100vh - 56px)', background: '#0d0d0d' }}>
          <DocsSidebar section={section} page={page} onNavigate={onNavigate} />
        </div>

        {/* Main content */}
        <main className="docs-content-area" style={{ flex: 1, minWidth: 0, padding: '40px 48px 80px', maxWidth: '860px' }}>
          <div className="docs-prose">
            {children}
          </div>

          {/* Prev / Next nav */}
        </main>

        {/* TOC */}
        {tocItems.length > 0 && (
          <div className="docs-toc-wrap" style={{ position: 'sticky', top: '56px', height: 'calc(100vh - 56px)', overflowY: 'auto', flexShrink: 0 }}>
            <DocsTableOfContents items={tocItems} />
          </div>
        )}
      </div>
    </div>
  )
}
