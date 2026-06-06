import { useState } from 'react'
import { Highlight, themes } from 'prism-react-renderer'

const LANG_LABELS = {
  js:         'JavaScript',
  jsx:        'JavaScript',
  ts:         'TypeScript',
  tsx:        'TypeScript',
  html:       'HTML',
  css:        'CSS',
  python:     'Python',
  py:         'Python',
  bash:       'Shell',
  sh:         'Shell',
  zsh:        'Shell',
  swift:      'Swift',
  kotlin:     'Kotlin',
  java:       'Java',
  go:         'Go',
  dart:       'Dart',
  yaml:       'YAML',
  json:       'JSON',
  xml:        'XML',
  gradle:     'Gradle',
  groovy:     'Groovy',
  text:       '',
}

// Map our short keys to prism language names
const LANG_MAP = {
  js: 'javascript', jsx: 'javascript',
  ts: 'typescript', tsx: 'typescript',
  py: 'python',
  sh: 'bash', zsh: 'bash',
  gradle: 'groovy',
}

// Custom dark theme tuned to the docs colour palette
const ACAI_THEME = {
  plain: {
    color: '#d4d4d4',
    backgroundColor: '#0e0e0e',
  },
  styles: [
    { types: ['comment', 'prolog', 'doctype', 'cdata'],      style: { color: '#6A9955' } },
    { types: ['punctuation'],                                 style: { color: '#808080' } },
    { types: ['property', 'tag', 'boolean', 'number'],       style: { color: '#b5cea8' } },
    { types: ['attr-name', 'builtin', 'constant'],           style: { color: '#9cdcfe' } },
    { types: ['string', 'char', 'attr-value'],               style: { color: '#ce9178' } },
    { types: ['variable', 'operator'],                       style: { color: '#d4d4d4' } },
    { types: ['function'],                                    style: { color: '#dcdcaa' } },
    { types: ['class-name'],                                  style: { color: '#4ec9b0' } },
    { types: ['keyword', 'selector', 'important', 'atrule'], style: { color: '#569cd6' } },
    { types: ['regex', 'url'],                               style: { color: '#d16969' } },
    { types: ['symbol', 'deleted'],                          style: { color: '#f44747' } },
    { types: ['inserted'],                                   style: { color: '#b5cea8' } },
  ],
}

export default function CodeBlock({ children, lang = 'text', filename }) {
  const [copied, setCopied] = useState(false)

  const code = (children || '').trim()
  const prismLang = LANG_MAP[lang] || lang
  const label = LANG_LABELS[lang] ?? lang.toUpperCase()

  const copy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div style={{ position: 'relative', margin: '0 0 22px', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
      {/* Header bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 14px', background: '#161616', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontFamily: 'ui-monospace, monospace', fontWeight: '500' }}>
          {filename || label}
        </span>
        <button
          onClick={copy}
          style={{ display: 'flex', alignItems: 'center', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', color: copied ? '#4a9e1a' : 'rgba(255,255,255,0.35)', fontSize: '11px', fontFamily: 'inherit', padding: '2px 6px', borderRadius: '4px', transition: 'color 0.2s' }}
          onMouseEnter={e => { if (!copied) e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
          onMouseLeave={e => { if (!copied) e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
        >
          {copied ? (
            <>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Copied
            </>
          ) : (
            <>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M1 8V1h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <Highlight theme={ACAI_THEME} code={code} language={prismLang}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              margin: 0,
              padding: '18px 20px',
              overflowX: 'auto',
              fontSize: '13px',
              lineHeight: '1.75',
              fontFamily: "'Geist Mono', 'Fira Code', ui-monospace, monospace",
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
