import { useState } from 'react'

export const toc = [
  { id: 'installation', label: 'Installation', level: 2 },
  { id: 'configuration', label: 'Configuration', level: 2 },
  { id: 'track', label: 'track()', level: 2 },
  { id: 'identify', label: 'identify()', level: 2 },
  { id: 'page', label: 'page()', level: 2 },
  { id: 'options', label: 'Config options', level: 2 },
  { id: 'typescript', label: 'TypeScript', level: 2 },
]

function Code({ children }) {
  const [copied, setCopied] = useState(false)
  const copy = () => { navigator.clipboard?.writeText(children); setCopied(true); setTimeout(() => setCopied(false), 1800) }
  return (
    <div style={{ position: 'relative', margin: '12px 0 20px' }}>
      <pre style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '10px', padding: '18px 48px 18px 20px', overflowX: 'auto', margin: 0 }}>
        <code style={{ fontFamily: "'Geist', ui-monospace, monospace", fontSize: '13px', lineHeight: 1.75, color: 'rgba(255,255,255,0.82)' }}>{children}</code>
      </pre>
      <button onClick={copy} style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '5px 8px', cursor: 'pointer', color: copied ? '#4a9e1a' : 'rgba(255,255,255,0.4)', fontSize: '11px', fontWeight: '600', transition: 'color 0.15s' }}>
        {copied ? '✓ Copied' : 'Copy'}
      </button>
    </div>
  )
}

export default function JavaScriptSDK() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <span className="docs-badge" style={{ background: 'rgba(245,208,0,0.12)', color: '#f5d000', border: '1px solid rgba(245,208,0,0.25)' }}>JavaScript SDK</span>
        <span className="docs-badge docs-badge-green">Stable</span>
        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>v1.4.2</span>
      </div>

      <h1>JavaScript SDK</h1>
      <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '32px' }}>
        The <code>@advaita/js-sdk</code> package runs in any modern browser. It auto-collects page views, session context, and device properties — you only need to call <code>track()</code> for custom events.
      </p>

      <h2 id="installation">Installation</h2>
      <Code>{`npm install @advaita/js-sdk`}</Code>
      <p>Or via CDN for non-bundled projects:</p>
      <Code>{`<script src="https://cdn.acaiplatform.ai/js/v1/advaita.min.js"></script>`}</Code>

      <h2 id="configuration">Configuration</h2>
      <p>Create one instance at your app's root and export it:</p>
      <Code>{`import { Advaita } from '@advaita/js-sdk'

export const advaita = new Advaita({
  apiKey:    'YOUR_WRITE_KEY',
  projectId: 'YOUR_PROJECT_ID',

  // Optional
  autoPageview:   true,   // auto-track page() on history changes
  sessionTimeout: 1800,   // seconds of inactivity before new session
  debug:          false,  // log events to console
})`}</Code>

      <h2 id="track">track()</h2>
      <p>Record any user action. The first argument is the event name; the second is an optional properties object.</p>
      <Code>{`advaita.track('checkout_started', {
  cart_value:  99.00,
  currency:    'USD',
  item_count:  3,
  coupon_code: 'LAUNCH20',
})`}</Code>

      <div className="docs-callout docs-callout-info">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '1px' }}><circle cx="8" cy="8" r="6.5" stroke="#a78bfa" strokeWidth="1.4"/><path d="M8 7v4M8 5v.5" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/></svg>
        <p>Event names must be non-empty strings. Use <code>snake_case</code> for consistency with ACAI's natural-language queries. Avoid spaces or special characters.</p>
      </div>

      <h2 id="identify">identify()</h2>
      <p>Call <code>identify()</code> when a user logs in or signs up. This merges the anonymous session into the user profile.</p>
      <Code>{`advaita.identify('user_9182', {
  email:      'alex@example.com',
  name:       'Alex Johnson',
  plan:       'pro',
  created_at: '2024-05-01T09:00:00Z',
})`}</Code>
      <p>Traits are persistent — you don't need to pass them on every identify call. Only send traits that have changed.</p>

      <h2 id="page">page()</h2>
      <p>When <code>autoPageview: true</code> (default), the SDK calls <code>page()</code> automatically on every route change. You can also call it manually:</p>
      <Code>{`advaita.page('Pricing', {
  variant: 'annual',
  source:  'navbar',
})`}</Code>

      <h2 id="options">Config options</h2>
      <table className="docs-prop-table">
        <thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>apiKey</code></td><td><code>string</code></td><td>—</td><td>Required. Your project's write-only public key.</td></tr>
          <tr><td><code>projectId</code></td><td><code>string</code></td><td>—</td><td>Required. Found in Settings → Projects.</td></tr>
          <tr><td><code>autoPageview</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Auto-track page views on URL changes.</td></tr>
          <tr><td><code>sessionTimeout</code></td><td><code>number</code></td><td><code>1800</code></td><td>Seconds of inactivity before a new session starts.</td></tr>
          <tr><td><code>batchSize</code></td><td><code>number</code></td><td><code>20</code></td><td>Flush queue after this many events.</td></tr>
          <tr><td><code>flushInterval</code></td><td><code>number</code></td><td><code>5000</code></td><td>Flush queue every N milliseconds.</td></tr>
          <tr><td><code>debug</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Log events and errors to the console.</td></tr>
          <tr><td><code>endpoint</code></td><td><code>string</code></td><td>Advaita cloud</td><td>Override for self-hosted deployments.</td></tr>
        </tbody>
      </table>

      <h2 id="typescript">TypeScript</h2>
      <p>The SDK ships with full TypeScript types. You can type your event properties for compile-time safety:</p>
      <Code>{`import { Advaita, TrackEvent } from '@advaita/js-sdk'

type AppEvents = {
  checkout_started: { cart_value: number; currency: string }
  button_clicked:   { button_id: string; page: string }
}

const advaita = new Advaita<AppEvents>({
  apiKey: 'YOUR_WRITE_KEY',
  projectId: 'YOUR_PROJECT_ID',
})

// ✓ Type-safe — TypeScript enforces correct properties
advaita.track('checkout_started', {
  cart_value: 99.00,
  currency: 'USD',
})`}</Code>
    </>
  )
}
