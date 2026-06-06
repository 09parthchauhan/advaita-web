import { useState } from 'react'
import CodeBlock from '../components/CodeBlock'

export const toc = [
  { id: 'prerequisites', label: 'Prerequisites', level: 2 },
  { id: 'install-sdk', label: '1. Install the SDK', level: 2 },
  { id: 'initialise', label: '2. Initialise', level: 2 },
  { id: 'track-event', label: '3. Track your first event', level: 2 },
  { id: 'identify-user', label: '4. Identify a user', level: 2 },
  { id: 'verify', label: '5. Verify in dashboard', level: 2 },
  { id: 'next', label: 'Next steps', level: 2 },
]



function TabBar({ tabs, active, onSelect }) {
  return (
    <div style={{ display: 'flex', gap: '2px', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '0' }}>
      {tabs.map(t => (
        <button key={t} onClick={() => onSelect(t)}
          style={{ padding: '8px 16px', background: 'none', border: 'none', borderBottom: active === t ? '2px solid #f5820a' : '2px solid transparent', color: active === t ? '#f5820a' : 'rgba(255,255,255,0.45)', fontSize: '13px', fontWeight: active === t ? '600' : '400', cursor: 'pointer', marginBottom: '-1px', transition: 'color 0.15s' }}>
          {t}
        </button>
      ))}
    </div>
  )
}

const INSTALL = {
  npm:  'npm install @advaita/js-sdk',
  yarn: 'yarn add @advaita/js-sdk',
  pnpm: 'pnpm add @advaita/js-sdk',
}

const INIT = {
  JavaScript: `import { Advaita } from '@advaita/js-sdk'

const advaita = new Advaita({
  apiKey: 'YOUR_API_KEY',
  projectId: 'YOUR_PROJECT_ID',
})`,
  Python: `from advaita import Advaita

advaita = Advaita(
    api_key="YOUR_API_KEY",
    project_id="YOUR_PROJECT_ID",
)`,
  'Node.js': `const { Advaita } = require('@advaita/node-sdk')

const advaita = new Advaita({
  apiKey: process.env.ADVAITA_API_KEY,
  projectId: process.env.ADVAITA_PROJECT_ID,
})`,
}

const TRACK = {
  JavaScript: `advaita.track('button_clicked', {
  button_id: 'upgrade_cta',
  page: '/pricing',
  plan: 'pro',
})`,
  Python: `advaita.track(
    event="button_clicked",
    properties={
        "button_id": "upgrade_cta",
        "page": "/pricing",
        "plan": "pro",
    },
)`,
  'Node.js': `advaita.track({
  event: 'button_clicked',
  properties: {
    button_id: 'upgrade_cta',
    page: '/pricing',
    plan: 'pro',
  },
})`,
}

const IDENTIFY = {
  JavaScript: `advaita.identify('user_8291', {
  email: 'jane@example.com',
  name: 'Jane Smith',
  plan: 'pro',
  created_at: '2024-03-15',
})`,
  Python: `advaita.identify(
    user_id="user_8291",
    traits={
        "email": "jane@example.com",
        "name": "Jane Smith",
        "plan": "pro",
    },
)`,
  'Node.js': `advaita.identify({
  userId: 'user_8291',
  traits: {
    email: 'jane@example.com',
    name: 'Jane Smith',
    plan: 'pro',
  },
})`,
}

export default function Quickstart() {
  const [pkgTab, setPkgTab] = useState('npm')
  const [sdkTab, setSdkTab] = useState('JavaScript')
  const sdkTabs = ['JavaScript', 'Python', 'Node.js']

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <span className="docs-badge docs-badge-orange">Getting Started</span>
        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>10 min</span>
      </div>

      <h1>Quickstart</h1>
      <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '32px' }}>
        Install the Advaita SDK and send your first event in under five minutes. This guide uses the JavaScript SDK — swap the tab for Python or Node.js.
      </p>

      <h2 id="prerequisites">Prerequisites</h2>
      <ul>
        <li>An Advaita account — <a href="https://signup.acaiplatform.ai/">sign up here</a></li>
        <li>A Project created in the dashboard (Settings → Projects → New Project)</li>
        <li>Your <code>API Key</code> and <code>Project ID</code> from the dashboard</li>
      </ul>

      <div className="docs-callout docs-callout-warning">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '1px' }}><path d="M8 2L1.5 14h13L8 2z" stroke="#f5d000" strokeWidth="1.4" strokeLinejoin="round"/><path d="M8 6v4M8 11.5v.5" stroke="#f5d000" strokeWidth="1.5" strokeLinecap="round"/></svg>
        <p>Never expose your API key in client-side code. For browser SDKs use the public write-only key. For server SDKs use environment variables.</p>
      </div>

      <h2 id="install-sdk">1. Install the SDK</h2>
      <TabBar tabs={['npm', 'yarn', 'pnpm']} active={pkgTab} onSelect={setPkgTab} />
      <CodeBlock lang="bash">{`$ ${INSTALL[pkgTab]}`}</CodeBlock>

      <h2 id="initialise">2. Initialise</h2>
      <p>Create a single Advaita instance at your application's entry point and export it for use across your codebase.</p>
      <TabBar tabs={sdkTabs} active={sdkTab} onSelect={setSdkTab} />
      <CodeBlock lang="js">{INIT[sdkTab]}</CodeBlock>

      <h2 id="track-event">3. Track your first event</h2>
      <p>Call <code>track()</code> with an event name and a properties object. Event names should be in <code>snake_case</code>. Properties can be any JSON-serialisable values.</p>
      <TabBar tabs={sdkTabs} active={sdkTab} onSelect={setSdkTab} />
      <CodeBlock lang="js">{TRACK[sdkTab]}</CodeBlock>

      <div className="docs-callout docs-callout-success">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '1px' }}><circle cx="8" cy="8" r="6.5" stroke="#4a9e1a" strokeWidth="1.4"/><path d="M5 8l2.5 2.5L11 6" stroke="#4a9e1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <p>Events are batched automatically and flushed every 5 seconds or when 20 events accumulate — whichever comes first. No manual flush needed in most cases.</p>
      </div>

      <h2 id="identify-user">4. Identify a user</h2>
      <p>Call <code>identify()</code> after a user signs in or signs up. This links all future events to that user's profile and enables cohort analysis.</p>
      <TabBar tabs={sdkTabs} active={sdkTab} onSelect={setSdkTab} />
      <CodeBlock lang="js">{IDENTIFY[sdkTab]}</CodeBlock>

      <h2 id="verify">5. Verify in the dashboard</h2>
      <p>Open your Advaita dashboard and navigate to <strong style={{ color: '#f6f6f1' }}>Clickstream → Live Events</strong>. You should see your events appear within a few seconds.</p>

      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '10px', overflow: 'hidden', marginBottom: '24px' }}>
        <div style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4a9e1a' }} />
          <span style={{ fontSize: '11px', color: '#4a9e1a', fontWeight: '600' }}>Live Events — 3 received</span>
        </div>
        <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {[
            ['14:22:01', 'button_clicked', 'user_8291', 'OK'],
            ['14:22:00', 'page_view', 'user_8291', 'OK'],
            ['14:21:58', 'session_start', 'anon_4421', 'OK'],
          ].map(([ts, evt, uid, status]) => (
            <div key={ts} style={{ display: 'grid', gridTemplateColumns: '70px 1fr 120px 40px', gap: '12px', alignItems: 'center', padding: '6px 8px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
              <span style={{ fontSize: '11px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.3)' }}>{ts}</span>
              <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#f5d000', fontWeight: '600' }}>{evt}</span>
              <span style={{ fontSize: '11px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)' }}>{uid}</span>
              <span style={{ fontSize: '10px', fontWeight: '700', color: '#4a9e1a' }}>{status}</span>
            </div>
          ))}
        </div>
      </div>

      <h2 id="next">Next steps</h2>
      <ul>
        <li>Read <a href="/docs/getting-started/core-concepts">Core Concepts</a> to understand the event model, identity resolution, and sessions.</li>
        <li>Browse the <a href="/docs/sdks/overview">SDK reference</a> for your platform (JavaScript, Python, Node.js, Flutter).</li>
        <li>Set up <a href="/docs/clickstream/funnels">funnels and retention</a> in the Clickstream dashboard.</li>
        <li>Ask ACAI your first question in the <a href="/docs/ai-platform/overview">AI Platform</a>.</li>
      </ul>
    </>
  )
}
