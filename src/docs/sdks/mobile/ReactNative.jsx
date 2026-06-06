import CodeBlock from '../../components/CodeBlock'

export const toc = [
  { id: 'install',  label: 'Installation',    level: 2 },
  { id: 'init',     label: 'Initialise',       level: 2 },
  { id: 'track',    label: 'Track events',     level: 2 },
  { id: 'identify', label: 'Identify users',   level: 2 },
  { id: 'config',   label: 'Config reference', level: 2 },
]

export default function ReactNativeSDK() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <span className="docs-badge docs-badge-purple">Mobile SDK</span>
        <span className="docs-badge">v1.0.0</span>
        <span className="docs-badge docs-badge-green">MIT License</span>
      </div>

      <h1>React Native SDK</h1>
      <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '24px' }}>
        <code>@acai/react-native-sdk</code> is backed by native iOS and Android modules via the React Native bridge. It supports session tracking, COPPA controls, and a middleware pipeline. Forked from <strong style={{ color: '#f6f6f1' }}>amplitude-react-native</strong> (MIT).
      </p>

      <h2 id="install">Installation</h2>
      <CodeBlock lang="bash">{`npm install @acai/react-native-sdk

# iOS — install native pods
cd ios && pod install`}</CodeBlock>

      <h2 id="init">Initialise</h2>
      <CodeBlock lang="js">{`import { Acai } from '@acai/react-native-sdk'

// Call once at app root, useEffect is ideal
useEffect(() => {
  async function setup() {
    const acai = Acai.getInstance()
    await acai.init('YOUR_API_KEY')
    await acai.setServerUrl('https://events.yourdomain.com/2/httpapi')
  }
  setup()
}, [])`}</CodeBlock>

      <h2 id="track">Track events</h2>
      <CodeBlock lang="js">{`const acai = Acai.getInstance()

await acai.logEvent('Button Clicked')

await acai.logEvent('Purchase Completed', {
  product_id: 'prod_123',
  price:       49.99,
  currency:    'USD',
})

// Flush the queue
await acai.uploadEvents()`}</CodeBlock>

      <h2 id="identify">Identify users</h2>
      <CodeBlock lang="js">{`import { Identify } from '@acai/react-native-sdk'

await acai.setUserId('user_abc123')

await acai.setUserProperties({ plan: 'pro', company: 'Acme Corp' })

const identify = new Identify()
identify.set('plan', 'pro')
identify.setOnce('signup_date', '2024-01-15')
identify.add('session_count', 1)
identify.unset('trial_active')
await acai.identify(identify)

await acai.setGroup('company', 'Acme Corp')

// Log out
await acai.setUserId(null)
await acai.regenerateDeviceId()`}</CodeBlock>

      <h2 id="config">Config reference</h2>
      <p>The React Native SDK uses method-based configuration (no config object at init):</p>
      <table className="docs-prop-table">
        <thead><tr><th>Method</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>setServerUrl(url)</code></td><td>Override the collector endpoint.</td></tr>
          <tr><td><code>setOptOut(bool)</code></td><td>Disable all event tracking.</td></tr>
          <tr><td><code>setEventUploadThreshold(n)</code></td><td>Events before automatic flush.</td></tr>
          <tr><td><code>setEventUploadPeriodMillis(ms)</code></td><td>Time-based flush interval.</td></tr>
          <tr><td><code>setEventUploadMaxBatchSize(n)</code></td><td>Max events per request.</td></tr>
          <tr><td><code>trackingSessionEvents(bool)</code></td><td>Auto-track session start/end events.</td></tr>
          <tr><td><code>setMinTimeBetweenSessionsMillis(ms)</code></td><td>Session gap threshold in ms.</td></tr>
          <tr><td><code>enableCoppaControl()</code></td><td>Enable COPPA mode (disables IDFA collection).</td></tr>
          <tr><td><code>disableCoppaControl()</code></td><td>Disable COPPA mode.</td></tr>
          <tr><td><code>enableLogging(bool)</code></td><td>Toggle verbose SDK logging.</td></tr>
          <tr><td><code>addEventMiddleware(fn)</code></td><td>Add an event enrichment middleware function.</td></tr>
        </tbody>
      </table>
    </>
  )
}
