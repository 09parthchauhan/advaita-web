import CodeBlock from '../../components/CodeBlock'

export const toc = [
  { id: 'install',  label: 'Installation',    level: 2 },
  { id: 'init',     label: 'Initialise',       level: 2 },
  { id: 'track',    label: 'Track events',     level: 2 },
  { id: 'identify', label: 'Identify users',   level: 2 },
  { id: 'groups',   label: 'Groups',           level: 2 },
  { id: 'revenue',  label: 'Revenue',          level: 2 },
  { id: 'config',   label: 'Config reference', level: 2 },
]

export default function JavaScriptSDK() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <span className="docs-badge docs-badge-purple">Web SDK</span>
        <span className="docs-badge">v8.21.10</span>
        <span className="docs-badge docs-badge-green">MIT License</span>
      </div>

      <h1>JavaScript SDK</h1>
      <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '24px' }}>
        <code>acai-js</code> is the browser SDK for vanilla JavaScript projects. It persists events to <code>localStorage</code>, manages sessions, and auto-captures UTM parameters, referrer, and click IDs. Forked from <strong style={{ color: '#f6f6f1' }}>amplitude-js</strong> (MIT).
      </p>

      <div className="docs-callout docs-callout-info">
        <strong>Using React, Vue, or Svelte?</strong> Consider the <a href="/docs/sdks/typescript-browser">TypeScript Browser SDK</a> — it has a plugin system, autocapture, and first-class TypeScript support.
      </div>

      <h2 id="install">Installation</h2>
      <CodeBlock lang="bash">{`npm install acai-js
# or
yarn add acai-js`}</CodeBlock>

      <p>Or load via async snippet — paste in your <code>{'<head>'}</code>:</p>
      <CodeBlock lang="html">{`<script>
  (function(e,t){var n=e.acai||{};window.acai=n;
  var r=t.createElement("script");r.type="text/javascript";
  r.async=true;r.src="https://cdn.acaiplatform.ai/acai-js.min.js";
  var s=t.getElementsByTagName("script")[0];s.parentNode.insertBefore(r,s);
  n._q=[];var i=["init","logEvent","setUserId","setUserProperties",
  "identify","setGroup","logRevenueV2","setOptOut","regenerateDeviceId"];
  i.forEach(function(t){n[t]=function(){n._q.push([t,arguments])}});
  })(window,document);
  acai.init("YOUR_API_KEY");
</script>`}</CodeBlock>

      <h2 id="init">Initialise</h2>
      <CodeBlock lang="js">{`import acai from 'acai-js'

acai.init('YOUR_API_KEY', 'user@example.com', {
  apiEndpoint:    'events.yourdomain.com', // collector host, no https://
  includeUtm:      true,
  includeReferrer: true,
  batchEvents:     false,
  logLevel:        'WARN',
})`}</CodeBlock>

      <p>Multiple named instances:</p>
      <CodeBlock lang="js">{`const instance2 = acai.getInstance('instance2')
instance2.init('OTHER_API_KEY')`}</CodeBlock>

      <h2 id="track">Track events</h2>
      <CodeBlock lang="js">{`// Simple event
acai.logEvent('Button Clicked')

// With properties
acai.logEvent('Purchase Completed', {
  product_id: 'prod_123',
  price:      49.99,
  currency:   'USD',
})

// With callback
acai.logEvent('Sign Up', { method: 'email' }, (code, body) => {
  if (code === 200) console.log('Event sent')
})`}</CodeBlock>

      <h2 id="identify">Identify users</h2>
      <CodeBlock lang="js">{`// Set the authenticated user ID
acai.setUserId('user_abc123')

// Set user properties directly
acai.setUserProperties({ plan: 'pro', company: 'Acme Corp' })

// Fine-grained control with the Identify builder
const identify = new acai.Identify()
identify.set('plan', 'pro')                   // overwrite
identify.setOnce('signup_date', '2024-01-15') // write once
identify.add('login_count', 1)                // increment
identify.append('tags', 'power-user')         // append to array
identify.prepend('recent_events', 'login')
identify.unset('trial_active')               // remove property
identify.clearAll()                          // remove all user props

acai.identify(identify)`}</CodeBlock>

      <p>To log out a user:</p>
      <CodeBlock lang="js">{`acai.setUserId(null)
acai.regenerateDeviceId() // start a new anonymous session`}</CodeBlock>

      <h2 id="groups">Groups</h2>
      <CodeBlock lang="js">{`acai.setGroup('company', 'Acme Corp')
acai.setGroup('project', ['proj_1', 'proj_2']) // multiple values`}</CodeBlock>

      <h2 id="revenue">Revenue</h2>
      <CodeBlock lang="js">{`const revenue = new acai.Revenue()
revenue
  .setProductId('prod_premium')
  .setPrice(99.00)
  .setQuantity(1)
  .setRevenueType('subscription')
  .setEventProperties({ coupon: 'LAUNCH20' })

acai.logRevenueV2(revenue)`}</CodeBlock>

      <h2 id="config">Config reference</h2>
      <table className="docs-prop-table">
        <thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>apiEndpoint</code></td><td>string</td><td><code>api.acai.yourdomain.com</code></td><td>Collector host (no <code>https://</code>).</td></tr>
          <tr><td><code>forceHttps</code></td><td>boolean</td><td><code>true</code></td><td>Always use HTTPS for requests.</td></tr>
          <tr><td><code>batchEvents</code></td><td>boolean</td><td><code>false</code></td><td>Buffer events and send in batches.</td></tr>
          <tr><td><code>eventUploadThreshold</code></td><td>number</td><td><code>30</code></td><td>Batch size that triggers a flush.</td></tr>
          <tr><td><code>eventUploadPeriodMillis</code></td><td>number</td><td><code>30000</code></td><td>Flush interval in ms.</td></tr>
          <tr><td><code>saveEvents</code></td><td>boolean</td><td><code>true</code></td><td>Persist unsent events to <code>localStorage</code>.</td></tr>
          <tr><td><code>savedMaxCount</code></td><td>number</td><td><code>1000</code></td><td>Max events saved to storage.</td></tr>
          <tr><td><code>sessionTimeout</code></td><td>number</td><td><code>1800000</code></td><td>Session inactivity timeout (30 min).</td></tr>
          <tr><td><code>includeUtm</code></td><td>boolean</td><td><code>false</code></td><td>Auto-capture UTM parameters.</td></tr>
          <tr><td><code>includeReferrer</code></td><td>boolean</td><td><code>false</code></td><td>Auto-capture page referrer.</td></tr>
          <tr><td><code>includeFbclid</code></td><td>boolean</td><td><code>false</code></td><td>Auto-capture Facebook click ID.</td></tr>
          <tr><td><code>includeGclid</code></td><td>boolean</td><td><code>false</code></td><td>Auto-capture Google click ID.</td></tr>
          <tr><td><code>logLevel</code></td><td>string</td><td><code>WARN</code></td><td><code>DISABLE</code> · <code>ERROR</code> · <code>WARN</code> · <code>INFO</code></td></tr>
          <tr><td><code>optOut</code></td><td>boolean</td><td><code>false</code></td><td>Disable all tracking.</td></tr>
          <tr><td><code>disableCookies</code></td><td>boolean</td><td><code>false</code></td><td>Use <code>localStorage</code> instead of cookies.</td></tr>
          <tr><td><code>cookieExpiration</code></td><td>number</td><td><code>365</code></td><td>Cookie expiry in days.</td></tr>
          <tr><td><code>sameSiteCookie</code></td><td>string</td><td><code>Lax</code></td><td><code>Lax</code> · <code>Strict</code> · <code>None</code></td></tr>
          <tr><td><code>transport</code></td><td>string</td><td><code>http</code></td><td><code>http</code> or <code>beacon</code> (sendBeacon API).</td></tr>
          <tr><td><code>deferInitialization</code></td><td>boolean</td><td><code>false</code></td><td>Delay tracking until <code>enableTracking()</code> is called.</td></tr>
          <tr><td><code>onError</code></td><td>function</td><td>—</td><td>Called when an event fails to send.</td></tr>
        </tbody>
      </table>
    </>
  )
}
