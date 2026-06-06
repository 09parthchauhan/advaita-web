import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchDocs } from '../searchIndex'

const GROUP_LABELS = {
  'getting-started': 'Getting Started',
  'sdks':            'SDKs',
  'ai-platform':     'AI Platform',
  'dashboard':       'Dashboard',
  'data-interface':  'Data Interface',
  'api-reference':   'API Reference',
  'integrations':    'Integrations',
  'self-hosting':    'Self-Hosting',
}

export default function SearchModal({ onClose }) {
  const [query, setQuery]       = useState('')
  const [results, setResults]   = useState([])
  const [cursor, setCursor]     = useState(0)
  const inputRef                = useRef(null)
  const navigate                = useNavigate()

  // Focus input on mount
  useEffect(() => { inputRef.current?.focus() }, [])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Search as user types
  useEffect(() => {
    const res = searchDocs(query)
    setResults(res)
    setCursor(0)
  }, [query])

  const go = useCallback((href) => {
    navigate(href)
    onClose()
  }, [navigate, onClose])

  const handleKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setCursor(c => Math.min(c + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setCursor(c => Math.max(c - 1, 0))
    } else if (e.key === 'Enter' && results[cursor]) {
      go(results[cursor].href)
    }
  }

  const highlight = (text, q) => {
    if (!q || q.length < 2) return text
    const idx = text.toLowerCase().indexOf(q.toLowerCase())
    if (idx === -1) return text
    return (
      <>
        {text.slice(0, idx)}
        <mark style={{ background: 'rgba(245,130,10,0.3)', color: '#f5820a', borderRadius: '2px', padding: '0 2px' }}>
          {text.slice(idx, idx + q.length)}
        </mark>
        {text.slice(idx + q.length)}
      </>
    )
  }

  const DEFAULTS = [
    { title: 'Introduction',      href: '/docs/getting-started/introduction', section: 'getting-started', excerpt: 'What is Advaita and how does it work?' },
    { title: 'Quickstart',        href: '/docs/getting-started/quickstart',   section: 'getting-started', excerpt: 'Install the SDK and send your first event.' },
    { title: 'JavaScript SDK',    href: '/docs/sdks/javascript',              section: 'sdks',            excerpt: 'Browser SDK with TypeScript support.' },
    { title: 'API Reference',     href: '/docs/api-reference/overview',       section: 'api-reference',   excerpt: 'REST API for tracking and querying.' },
  ]

  const displayResults = query.trim().length >= 2 ? results : DEFAULTS

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', zIndex: 200 }}
      />

      {/* Modal */}
      <div style={{
        position: 'fixed', top: '12vh', left: '50%', transform: 'translateX(-50%)',
        width: 'min(640px, calc(100vw - 32px))', zIndex: 201,
        background: '#141414', border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '14px', overflow: 'hidden',
        boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.4)',
      }}>
        {/* Input row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, color: 'rgba(255,255,255,0.4)' }}>
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M11.5 11.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Search docs..."
            style={{
              flex: 1, background: 'none', border: 'none', outline: 'none',
              fontSize: '16px', color: '#f6f6f1', fontFamily: "'Geist', sans-serif",
            }}
          />
          {query && (
            <button onClick={() => setQuery('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.35)', padding: '2px', lineHeight: 1 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </button>
          )}
          <kbd style={{ padding: '3px 7px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '5px', fontSize: '11px', color: 'rgba(255,255,255,0.35)', fontFamily: 'inherit', flexShrink: 0 }}>esc</kbd>
        </div>

        {/* Results */}
        <div style={{ maxHeight: '420px', overflowY: 'auto', scrollbarWidth: 'none' }}>
          {displayResults.length === 0 && query.trim().length >= 2 ? (
            <div style={{ padding: '32px 20px', textAlign: 'center', color: 'rgba(255,255,255,0.35)', fontSize: '14px' }}>
              No results for <strong style={{ color: '#f6f6f1' }}>"{query}"</strong>
            </div>
          ) : (
            <>
              {query.trim().length < 2 && (
                <p style={{ padding: '10px 16px 4px', fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', margin: 0 }}>
                  Suggested
                </p>
              )}
              {displayResults.map((result, i) => (
                <button
                  key={result.href}
                  onClick={() => go(result.href)}
                  onMouseEnter={() => setCursor(i)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '11px 16px', background: cursor === i ? 'rgba(245,130,10,0.08)' : 'transparent',
                    border: 'none', borderLeft: cursor === i ? '2px solid #f5820a' : '2px solid transparent',
                    cursor: 'pointer', textAlign: 'left', transition: 'background 0.1s',
                  }}
                >
                  {/* Icon */}
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: cursor === i ? '#f5820a' : 'rgba(255,255,255,0.4)' }}>
                      <path d="M2 3h10v8H2V3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                      <path d="M4 6h6M4 8.5h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                      <span style={{ fontSize: '14px', fontWeight: '600', color: cursor === i ? '#f6f6f1' : 'rgba(255,255,255,0.85)' }}>
                        {highlight(result.title, query)}
                      </span>
                      <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', flexShrink: 0 }}>
                        {GROUP_LABELS[result.section] || result.section}
                      </span>
                    </div>
                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {highlight(result.excerpt, query)}
                    </span>
                  </div>

                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, color: cursor === i ? '#f5820a' : 'rgba(255,255,255,0.2)' }}>
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ))}
            </>
          )}
        </div>

        {/* Footer */}
        <div style={{ padding: '8px 16px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: '16px', alignItems: 'center' }}>
          {[['↵', 'select'], ['↑↓', 'navigate'], ['esc', 'close']].map(([key, label]) => (
            <span key={key} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>
              <kbd style={{ padding: '2px 5px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', fontFamily: 'inherit', fontSize: '10px' }}>{key}</kbd>
              {label}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
