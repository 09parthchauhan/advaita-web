import CodeBlock from '../../components/CodeBlock'

export const toc = [
  { id: 'install',    label: 'Installation',    level: 2 },
  { id: 'init',       label: 'Initialise',       level: 2 },
  { id: 'track',      label: 'Track events',     level: 2 },
  { id: 'identify',   label: 'Identify users',   level: 2 },
  { id: 'middleware', label: 'Middleware',        level: 2 },
  { id: 'config',     label: 'Config reference', level: 2 },
]

export default function NodeSDK() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <span className="docs-badge docs-badge-purple">Server SDK</span>
        <span className="docs-badge">v1.0.0</span>
        <span className="docs-badge docs-badge-green">MIT License</span>
      </div>

      <h1>Node.js SDK</h1>
      <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '24px' }}>
        <code>acai-node</code> is the server-side Node.js SDK. It runs only in Node environments — if loaded in a browser it logs a warning and exits. Forked from <strong style={{ color: '#f6f6f1' }}>amplitude-node</strong> (MIT).
      </p>

      <div className="docs-callout docs-callout-warning">
        <p><strong>Server-only.</strong> Do not bundle <code>acai-node</code> into browser builds. Use <code>acai-js</code> or <code>@acai/analytics-browser</code> for client-side tracking.</p>
      </div>

      <h2 id="install">Installation</h2>
      <CodeBlock lang="bash">{`npm install acai-node`}</CodeBlock>

      <h2 id="init">Initialise</h2>
      <CodeBlock lang="js">{`import { init } from 'acai-node'

const client = init('YOUR_API_KEY', {
  serverUrl: 'https://events.yourdomain.com/2/httpapi',
  logLevel:  2, // 0=None 1=Error 2=Warn 3=Verbose
})`}</CodeBlock>

      <h2 id="track">Track events</h2>
      <CodeBlock lang="js">{`await client.logEvent({
  event_type: 'API Request',
  user_id:    'user_abc123',
  event_properties: {
    endpoint: '/api/v1/export',
    status:   200,
  },
})

// Flush before process exit
await client.flush()`}</CodeBlock>

      <div className="docs-callout docs-callout-info">
        <p>Always call <code>client.flush()</code> before your process exits to ensure all buffered events are sent.</p>
      </div>

      <h2 id="identify">Identify users</h2>
      <CodeBlock lang="js">{`import { Identify } from '@acai/identify'

const identify = new Identify()
identify.set('plan', 'enterprise')
identify.setOnce('first_seen', new Date().toISOString())
identify.add('api_call_count', 1)

await client.identify('user_abc123', undefined, identify)`}</CodeBlock>

      <h2 id="middleware">Middleware</h2>
      <CodeBlock lang="js">{`// Enrich every event with server-side context
client.addEventMiddleware((payload, next) => {
  payload.event.event_properties = {
    ...payload.event.event_properties,
    server_region: process.env.AWS_REGION,
  }
  next(payload)
})

// Filter — drop internal bot events
client.addEventMiddleware((payload, next) => {
  if (payload.event.user_id === 'internal_bot') return
  next(payload)
})`}</CodeBlock>

      <h2 id="config">Config reference</h2>
      <table className="docs-prop-table">
        <thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>serverUrl</code></td><td>string</td><td>—</td><td>Your collector endpoint.</td></tr>
          <tr><td><code>logLevel</code></td><td>number</td><td><code>0</code></td><td>0=None · 1=Error · 2=Warn · 3=Verbose</td></tr>
          <tr><td><code>debug</code></td><td>boolean</td><td><code>false</code></td><td>Shorthand for verbose logging.</td></tr>
          <tr><td><code>maxCachedEvents</code></td><td>number</td><td><code>16000</code></td><td>Max buffered events before forced flush.</td></tr>
          <tr><td><code>uploadIntervalInSec</code></td><td>number</td><td><code>0</code></td><td>Auto-flush interval (0 = next tick).</td></tr>
          <tr><td><code>retryTimeouts</code></td><td>number[]</td><td><code>[100, 100, 200…]</code></td><td>Retry delay schedule in ms.</td></tr>
          <tr><td><code>requestTimeoutMillis</code></td><td>number</td><td><code>10000</code></td><td>Per-request HTTP timeout.</td></tr>
          <tr><td><code>optOut</code></td><td>boolean</td><td><code>false</code></td><td>Disable all event sending.</td></tr>
          <tr><td><code>minIdLength</code></td><td>number</td><td><code>null</code></td><td>Minimum length for user/device IDs.</td></tr>
        </tbody>
      </table>
    </>
  )
}
