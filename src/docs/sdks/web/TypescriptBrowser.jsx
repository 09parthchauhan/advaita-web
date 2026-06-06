import CodeBlock from '../../components/CodeBlock'

export const toc = [
  { id: 'install',  label: 'Installation',    level: 2 },
  { id: 'init',     label: 'Initialise',       level: 2 },
  { id: 'track',    label: 'Track events',     level: 2 },
  { id: 'identify', label: 'Identify users',   level: 2 },
  { id: 'plugins',  label: 'Plugins',          level: 2 },
  { id: 'config',   label: 'Config reference', level: 2 },
]

export default function TypescriptBrowserSDK() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <span className="docs-badge docs-badge-purple">Web SDK</span>
        <span className="docs-badge">v2.x</span>
        <span className="docs-badge docs-badge-green">MIT License</span>
      </div>

      <h1>TypeScript Browser SDK</h1>
      <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '24px' }}>
        <code>@acai/analytics-browser</code> is the modern browser SDK with first-class TypeScript support, a plugin architecture, and optional autocapture. Forked from <strong style={{ color: '#f6f6f1' }}>@amplitude/analytics-browser</strong> (MIT).
      </p>

      <h2 id="install">Installation</h2>
      <CodeBlock lang="bash">{`npm install @acai/analytics-browser`}</CodeBlock>

      <h2 id="init">Initialise</h2>
      <CodeBlock lang="ts">{`import * as acai from '@acai/analytics-browser'

acai.init('YOUR_API_KEY', {
  serverUrl: 'https://events.yourdomain.com/2/httpapi',
})`}</CodeBlock>

      <p>Pass a user ID at init or later via <code>setUserId</code>:</p>
      <CodeBlock lang="ts">{`acai.init('YOUR_API_KEY', {
  serverUrl: 'https://events.yourdomain.com/2/httpapi',
  userId:    'user_abc123',
})`}</CodeBlock>

      <h2 id="track">Track events</h2>
      <CodeBlock lang="ts">{`acai.track('Button Clicked')

acai.track('Purchase Completed', {
  product_id: 'prod_123',
  price:       49.99,
  currency:    'USD',
})

// Force flush the queue
await acai.flush().promise`}</CodeBlock>

      <h2 id="identify">Identify users</h2>
      <CodeBlock lang="ts">{`import { Identify } from '@acai/analytics-browser'

acai.setUserId('user_abc123')

const identifyObj = new Identify()
identifyObj.set('plan', 'pro')
identifyObj.setOnce('signup_date', '2024-01-15')
identifyObj.add('session_count', 1)
identifyObj.append('tags', 'power-user')
identifyObj.unset('trial_active')

acai.identify(identifyObj)

acai.setGroup('company', 'Acme Corp')`}</CodeBlock>

      <h2 id="plugins">Plugins</h2>

      <h3>Autocapture</h3>
      <CodeBlock lang="ts">{`import { autocapturePlugin } from '@acai/plugin-autocapture-browser'

acai.init('YOUR_API_KEY', { serverUrl: '...' })
acai.add(autocapturePlugin())`}</CodeBlock>

      <h3>Page view tracking</h3>
      <CodeBlock lang="ts">{`import { pageViewTrackingPlugin } from '@acai/plugin-page-view-tracking-browser'

acai.add(pageViewTrackingPlugin())`}</CodeBlock>

      <h3>Web attribution (UTM / referrer)</h3>
      <CodeBlock lang="ts">{`import { webAttributionPlugin } from '@acai/plugin-web-attribution-browser'

acai.add(webAttributionPlugin())`}</CodeBlock>

      <h3>Custom enrichment plugin</h3>
      <CodeBlock lang="ts">{`const myPlugin = {
  name: 'my-enrichment',
  type: 'enrichment',
  execute: async (event) => {
    event.event_properties = {
      ...event.event_properties,
      app_version: '2.1.0',
    }
    return event
  },
}

acai.add(myPlugin)`}</CodeBlock>

      <h2 id="config">Config reference</h2>
      <table className="docs-prop-table">
        <thead><tr><th>Option</th><th>Type</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>serverUrl</code></td><td>string</td><td>Full collector URL: <code>https://events.yourdomain.com/2/httpapi</code></td></tr>
          <tr><td><code>userId</code></td><td>string</td><td>Pre-set authenticated user ID.</td></tr>
          <tr><td><code>deviceId</code></td><td>string</td><td>Override the auto-generated device ID.</td></tr>
          <tr><td><code>optOut</code></td><td>boolean</td><td>Disable all event collection.</td></tr>
          <tr><td><code>flushQueueSize</code></td><td>number</td><td>Events per batch before an automatic flush.</td></tr>
          <tr><td><code>flushIntervalMillis</code></td><td>number</td><td>Max wait before flushing the queue (ms).</td></tr>
          <tr><td><code>logLevel</code></td><td>LogLevel</td><td><code>None</code> · <code>Error</code> · <code>Warn</code> · <code>Verbose</code></td></tr>
          <tr><td><code>autocapture</code></td><td>object</td><td>Fine-grained autocapture: <code>{'{ sessions, pageViews, networkTracking }'}</code></td></tr>
          <tr><td><code>serverZone</code></td><td>string</td><td><code>US</code> or <code>EU</code>. Ignored when <code>serverUrl</code> is set.</td></tr>
        </tbody>
      </table>
    </>
  )
}
