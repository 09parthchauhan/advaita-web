export const toc = [
  { id: 'installation', label: 'Installation', level: 2 },
  { id: 'configuration', label: 'Configuration', level: 2 },
  { id: 'track', label: 'track()', level: 2 },
  { id: 'identify', label: 'identify()', level: 2 },
  { id: 'middleware', label: 'Express middleware', level: 2 },
  { id: 'options', label: 'Config options', level: 2 },
]

function Code({ children }) {
  return (
    <pre style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '10px', padding: '18px 20px', overflowX: 'auto', margin: '12px 0 20px' }}>
      <code style={{ fontFamily: "'Geist', ui-monospace, monospace", fontSize: '13px', lineHeight: 1.75, color: 'rgba(255,255,255,0.82)' }}>{children}</code>
    </pre>
  )
}

export default function NodeSDK() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <span className="docs-badge docs-badge-green">Node.js SDK</span>
        <span className="docs-badge docs-badge-green">Stable</span>
        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>v1.3.0</span>
      </div>

      <h1>Node.js SDK</h1>
      <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '32px' }}>
        The <code>@advaita/node-sdk</code> package is built for server-side environments — APIs, background jobs, and webhooks. Use it to track server-initiated events that the browser SDK can't capture.
      </p>

      <h2 id="installation">Installation</h2>
      <Code>{`npm install @advaita/node-sdk`}</Code>

      <h2 id="configuration">Configuration</h2>
      <p>Initialise once at application startup and reuse across your handlers:</p>
      <Code>{`import { Advaita } from '@advaita/node-sdk'

export const advaita = new Advaita({
  apiKey:    process.env.ADVAITA_API_KEY,
  projectId: process.env.ADVAITA_PROJECT_ID,
})`}</Code>

      <h2 id="track">track()</h2>
      <Code>{`// In a route handler
app.post('/api/checkout', async (req, res) => {
  const order = await createOrder(req.body)

  advaita.track({
    userId:     req.user.id,
    event:      'order_completed',
    properties: {
      order_id:    order.id,
      total:       order.total,
      item_count:  order.items.length,
      currency:    'USD',
    },
  })

  res.json({ ok: true, orderId: order.id })
})`}</Code>

      <h2 id="identify">identify()</h2>
      <Code>{`// After user creation in your database
async function createUser(data) {
  const user = await db.users.create(data)

  advaita.identify({
    userId: user.id,
    traits: {
      email:      user.email,
      name:       user.name,
      plan:       'free',
      created_at: user.createdAt.toISOString(),
    },
  })

  return user
}`}</Code>

      <h2 id="middleware">Express middleware</h2>
      <p>Use the built-in middleware to auto-track every API request:</p>
      <Code>{`import { advaitaMiddleware } from '@advaita/node-sdk'

app.use(advaitaMiddleware(advaita, {
  // Extract userId from your session/auth
  getUserId: (req) => req.user?.id,
  // Filter out health-check routes
  ignore: ['/health', '/metrics'],
}))`}</Code>

      <h2 id="options">Config options</h2>
      <table className="docs-prop-table">
        <thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>apiKey</code></td><td><code>string</code></td><td>—</td><td>Required. Your server-side API key (never expose in browser).</td></tr>
          <tr><td><code>projectId</code></td><td><code>string</code></td><td>—</td><td>Required.</td></tr>
          <tr><td><code>flushAt</code></td><td><code>number</code></td><td><code>20</code></td><td>Flush after N events.</td></tr>
          <tr><td><code>flushInterval</code></td><td><code>number</code></td><td><code>5000</code></td><td>Flush every N ms.</td></tr>
          <tr><td><code>maxRetries</code></td><td><code>number</code></td><td><code>3</code></td><td>Retries on 5xx or network failure.</td></tr>
          <tr><td><code>timeout</code></td><td><code>number</code></td><td><code>10000</code></td><td>Request timeout in ms.</td></tr>
          <tr><td><code>endpoint</code></td><td><code>string</code></td><td>Advaita cloud</td><td>Self-hosted ingest URL.</td></tr>
        </tbody>
      </table>
    </>
  )
}
