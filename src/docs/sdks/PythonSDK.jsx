export const toc = [
  { id: 'installation', label: 'Installation', level: 2 },
  { id: 'configuration', label: 'Configuration', level: 2 },
  { id: 'track', label: 'track()', level: 2 },
  { id: 'identify', label: 'identify()', level: 2 },
  { id: 'async', label: 'Async usage', level: 2 },
  { id: 'options', label: 'Config options', level: 2 },
]

function Code({ children }) {
  return (
    <pre style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '10px', padding: '18px 20px', overflowX: 'auto', margin: '12px 0 20px' }}>
      <code style={{ fontFamily: "'Geist', ui-monospace, monospace", fontSize: '13px', lineHeight: 1.75, color: 'rgba(255,255,255,0.82)' }}>{children}</code>
    </pre>
  )
}

export default function PythonSDK() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <span className="docs-badge" style={{ background: 'rgba(167,139,250,0.12)', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.25)' }}>Python SDK</span>
        <span className="docs-badge docs-badge-green">Stable</span>
        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>v1.2.1</span>
      </div>

      <h1>Python SDK</h1>
      <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '32px' }}>
        The <code>advaita-sdk</code> Python package is designed for server-side tracking — backends, data pipelines, and ML workflows. It supports both synchronous and async usage.
      </p>

      <h2 id="installation">Installation</h2>
      <Code>{`pip install advaita-sdk`}</Code>

      <h2 id="configuration">Configuration</h2>
      <Code>{`from advaita import Advaita

advaita = Advaita(
    api_key=os.environ["ADVAITA_API_KEY"],
    project_id=os.environ["ADVAITA_PROJECT_ID"],
    # Optional
    flush_at=20,          # flush every N events
    flush_interval=5.0,   # flush every N seconds
    debug=False,
)`}</Code>

      <div className="docs-callout docs-callout-warning">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '1px' }}><path d="M8 2L1.5 14h13L8 2z" stroke="#f5d000" strokeWidth="1.4" strokeLinejoin="round"/><path d="M8 6v4M8 11.5v.5" stroke="#f5d000" strokeWidth="1.5" strokeLinecap="round"/></svg>
        <p>Call <code>advaita.flush()</code> or use the client as a context manager before your process exits to ensure all queued events are sent.</p>
      </div>

      <h2 id="track">track()</h2>
      <Code>{`advaita.track(
    user_id="user_9182",
    event="subscription_created",
    properties={
        "plan": "pro",
        "billing_cycle": "annual",
        "mrr": 79.00,
    },
)`}</Code>

      <h2 id="identify">identify()</h2>
      <Code>{`advaita.identify(
    user_id="user_9182",
    traits={
        "email": "alex@example.com",
        "name": "Alex Johnson",
        "company": "Acme Corp",
        "plan": "pro",
    },
)`}</Code>

      <h2 id="async">Async usage</h2>
      <p>For async frameworks like FastAPI or asyncio, use the async client:</p>
      <Code>{`from advaita import AsyncAdvaita

advaita = AsyncAdvaita(
    api_key=os.environ["ADVAITA_API_KEY"],
    project_id=os.environ["ADVAITA_PROJECT_ID"],
)

# In an async handler
async def on_signup(user):
    await advaita.track(
        user_id=user.id,
        event="user_signed_up",
        properties={"plan": user.plan},
    )`}</Code>

      <h2 id="options">Config options</h2>
      <table className="docs-prop-table">
        <thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>api_key</code></td><td><code>str</code></td><td>—</td><td>Required. Your server-side API key.</td></tr>
          <tr><td><code>project_id</code></td><td><code>str</code></td><td>—</td><td>Required. Found in Settings → Projects.</td></tr>
          <tr><td><code>flush_at</code></td><td><code>int</code></td><td><code>20</code></td><td>Number of events to queue before flushing.</td></tr>
          <tr><td><code>flush_interval</code></td><td><code>float</code></td><td><code>5.0</code></td><td>Seconds between automatic flushes.</td></tr>
          <tr><td><code>max_retries</code></td><td><code>int</code></td><td><code>3</code></td><td>Retry count on network failure.</td></tr>
          <tr><td><code>endpoint</code></td><td><code>str</code></td><td>Advaita cloud</td><td>Override for self-hosted deployments.</td></tr>
          <tr><td><code>debug</code></td><td><code>bool</code></td><td><code>False</code></td><td>Print events and errors to stdout.</td></tr>
        </tbody>
      </table>
    </>
  )
}
