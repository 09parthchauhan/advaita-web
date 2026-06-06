export const toc = [
  { id: 'attribution', label: 'Open-source attribution', level: 2 },
  { id: 'available',   label: 'Available SDKs',          level: 2 },
  { id: 'choosing',    label: 'Choosing an SDK',          level: 2 },
  { id: 'common-api',  label: 'Common API surface',       level: 2 },
  { id: 'versioning',  label: 'Versioning & support',     level: 2 },
]

// ── Language Icons ────────────────────────────────────────────────────────────
const IconJS = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
    <path d="M9.5 24.5L11.8 23.1c.4.8.8 1.4 1.7 1.4.9 0 1.4-.3 1.4-1.7v-9h2.7v9.1c0 2.8-1.6 4-4 4-2.1 0-3.3-1.1-3.9-2.4zM19.5 24.2l2.3-1.4c.6 1 1.4 1.8 2.7 1.8 1.2 0 1.9-.6 1.9-1.4 0-1-.7-1.3-2-1.9l-.7-.3c-2-.8-3.3-1.9-3.3-4.1 0-2 1.5-3.6 3.9-3.6 1.7 0 3 .6 3.8 2.1l-2.1 1.4c-.5-.8-1-1.2-1.8-1.2-.8 0-1.3.5-1.3 1.2 0 .9.5 1.2 1.7 1.7l.7.3c2.3 1 3.7 2 3.7 4.3 0 2.4-1.9 3.8-4.5 3.8-2.5 0-4.1-1.2-4.9-2.8z" fill="#000"/>
  </svg>
)
const IconTS = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="4" fill="#3178C6"/>
    <path d="M8 17h4v10h2.5V17H19v-2H8v2zM20 21.5c0 1.1.9 2.3 2.8 2.3 1.5 0 2.5-.8 2.5-2 0-1.3-.9-1.8-2.4-2.3l-.7-.2c-.9-.3-1.2-.6-1.2-1.1 0-.6.5-.9 1.2-.9.7 0 1.2.4 1.4 1l2-.7c-.4-1.3-1.4-2.1-3.3-2.1-2 0-3.2 1.1-3.2 2.8 0 1.3.8 2 2.3 2.5l.7.2c.9.3 1.3.6 1.3 1.2 0 .6-.5 1.1-1.4 1.1-1 0-1.7-.5-1.9-1.5L20 21.5z" fill="white"/>
  </svg>
)
const IconNode = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="4" fill="#1a1a1a"/>
    <path d="M16 5L6 10.5v11L16 27l10-5.5v-11L16 5z" fill="#339933" opacity="0.9"/>
    <text x="16" y="20" textAnchor="middle" fill="#fff" fontSize="6.5" fontWeight="800" fontFamily="monospace">node</text>
  </svg>
)
const IconPython = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="4" fill="#1a1a2e"/>
    <path d="M16 4c-3.3 0-6 .7-6 2.4V9h6v1H8.5C6.6 10 5 11.7 5 14.5c0 2.8 1.5 4.5 3.5 4.5H10v-2.5C10 14.7 12 13 14 13h4c1.8 0 3-1.3 3-3V6.4C21 4.7 19.3 4 16 4zm-2 2a1 1 0 110 2 1 1 0 010-2z" fill="#3776AB"/>
    <path d="M16 28c3.3 0 6-.7 6-2.4V23h-6v-1h7.5c1.9 0 3.5-1.7 3.5-4.5 0-2.8-1.5-4.5-3.5-4.5H22v2.5C22 17.3 20 19 18 19h-4c-1.8 0-3 1.3-3 3v4.6C11 27.3 12.7 28 16 28zm2-2a1 1 0 110-2 1 1 0 010 2z" fill="#FFD43B"/>
  </svg>
)
const IconJava = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="4" fill="#1a1a2e"/>
    <path d="M12.5 20.5s-.9.5.6.7c1.8.2 2.8.2 4.8-.2 0 0 .5.3 1.3.6-4.6 2-10.5-.1-6.7-1.1zm-.5-2.3s-1 .8.5.9c2 .2 3.5.2 6.2-.3 0 0 .4.4 1 .6-5.5 1.6-11.6.1-7.7-1.2z" fill="#E76F00"/>
    <path d="M15.7 12c1.7 1.8-.4 3.4-.4 3.4s4.2-2.2 2.3-4.9c-1.8-2.5-3.2-3.8 4.3-8.1 0 0-11.7 2.9-6.2 9.6z" fill="#E76F00"/>
    <path d="M21.3 23.5s.7.6-.7.9c-2.6.8-10.9.9-13.2.1-.8-.4.7-.8 1.2-.9.5-.1.8-.1.8-.1-.9-.6-6.1 1.3-2.6 1.9 9.5 1.5 17.3-.7 14.5-1.9zm-8.8-6.4s-4.1 1-1.5 1.4c1.1.2 3.3.1 5.4-.1 1.7-.2 3.4-.5 3.4-.5s-.6.3-1 .5c-4 1.1-11.7.6-9.5-.4 1.9-.9 3.2-.9 3.2-.9zm7.4 4.1c4.1-2.1 2.2-4.1 .9-3.8-.3.1-.5.2-.5.2s.1-.2.4-.3c2.9-1 5.1 3-2.4 5.1.2-.1.5-.9 1.6-1.2z" fill="#5382A1"/>
    <path d="M17.5 4s2.4 2.4-2.3 6c-3.8 3-1 4.8 0 6.7-2.2-2-3.8-3.8-2.7-5.4 1.6-2.4 6-3.5 5-7.3z" fill="#E76F00"/>
    <path d="M13.9 27.9c3.9.3 9.9-.1 10-.9 0 0-.3.7-3.3 1.3-3.3.6-7.4.5-9.8-.1 0 0 .5.4 3.1-.3z" fill="#5382A1"/>
  </svg>
)
const IconGo = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="4" fill="#00ACD7" fillOpacity="0.12" stroke="#00ACD7" strokeWidth="1"/>
    <text x="16" y="21" textAnchor="middle" fill="#00ACD7" fontSize="14" fontWeight="900" fontFamily="monospace">Go</text>
  </svg>
)
const IconFlutter = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="4" fill="#0d1b2e"/>
    <path d="M19 4H12L4 12l4 4 3-3 8-9z" fill="#54C5F8"/>
    <path d="M4 20l4-4 4 4-4 4-4-4z" fill="#54C5F8"/>
    <path d="M8 16l4 4-4 4 8-8-8 0z" fill="#01579B"/>
    <path d="M12 20l4 4h-8l4-4z" fill="#29B6F6" opacity="0.7"/>
  </svg>
)
const IconRN = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="4" fill="#1a2332"/>
    <circle cx="16" cy="16" r="3" fill="#61DAFB"/>
    <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
    <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
    <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
  </svg>
)
const IconKotlin = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="4" fill="#1a1a2e"/>
    <path d="M4 4h24L16 16 28 28H4V4z" fill="url(#kg)"/>
    <defs><linearGradient id="kg" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#E44857"/><stop offset="0.5" stopColor="#C711E1"/><stop offset="1" stopColor="#7F52FF"/></linearGradient></defs>
  </svg>
)
const IconSwift = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="4" fill="#F05138"/>
    <path d="M25 18.5c.1-.4.2-.9.2-1.3 0-4.6-4.1-8.4-9.2-8.4-3.1 0-5.9 1.4-7.6 3.6 1.2-.7 2.8-1.1 4.4-1.1 3.6 0 5.8 1.9 5.8 1.9s-3.4-1.1-6.2.8c3.4 2.1 7.2 4.9 9.1 7.9.8-1 1.4-2.1 1.7-3.3l-3.4-1c.8-.5 5.2 1 5.2.9zm-18.5.3c0 3 2.4 5.4 5.5 5.4 1.7 0 3.3-.8 4.4-2-1.4.2-2.8-.1-4.1-.9C10 19.6 7.5 17.5 7 14.7c-.3.6-.5 1.3-.5 2 0 .7.1 1.4.4 2.1h-.4z" fill="white"/>
  </svg>
)

const SDKS = {
  web: [
    { name: 'JavaScript',         pkg: 'acai-js',                    install: 'npm install acai-js',                       env: 'Browser',     status: 'stable', href: '/docs/sdks/javascript',         Icon: IconJS },
    { name: 'TypeScript Browser', pkg: '@acai/analytics-browser',    install: 'npm install @acai/analytics-browser',       env: 'Browser',     status: 'stable', href: '/docs/sdks/typescript-browser', Icon: IconTS },
  ],
  server: [
    { name: 'Node.js',  pkg: 'acai-node',                   install: 'npm install acai-node',                   env: 'Server',      status: 'stable', href: '/docs/sdks/node',   Icon: IconNode   },
    { name: 'Python',   pkg: 'acai-analytics',               install: 'pip install acai-analytics',              env: 'Server',      status: 'stable', href: '/docs/sdks/python', Icon: IconPython },
    { name: 'Java',     pkg: 'com.acai:acai-java-sdk',       install: 'implementation "com.acai:acai-java-sdk:1.0.0"', env: 'Server', status: 'stable', href: '/docs/sdks/java',   Icon: IconJava   },
    { name: 'Go',       pkg: 'github.com/acai/analytics-go', install: 'go get github.com/acai/analytics-go',     env: 'Server',      status: 'stable', href: '/docs/sdks/go',     Icon: IconGo     },
  ],
  mobile: [
    { name: 'Flutter',      pkg: 'acai_flutter',               install: 'acai_flutter: ^1.0.0 # pubspec.yaml',     env: 'iOS + Android', status: 'stable', href: '/docs/sdks/flutter',       Icon: IconFlutter },
    { name: 'React Native', pkg: '@acai/react-native-sdk',     install: 'npm install @acai/react-native-sdk',       env: 'iOS + Android', status: 'stable', href: '/docs/sdks/react-native',  Icon: IconRN      },
    { name: 'Android',      pkg: 'com.acai:analytics-android', install: 'implementation "com.acai:analytics-android:1.0.0"', env: 'Android', status: 'stable', href: '/docs/sdks/android', Icon: IconKotlin  },
    { name: 'iOS / Swift',  pkg: 'AcaiSwift',                  install: '.package(url: "…/Acai-Swift.git")',        env: 'iOS',           status: 'stable', href: '/docs/sdks/ios',           Icon: IconSwift   },
  ],
}

function SDKGroup({ title, sdks }) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <p style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '12px' }}>{title}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.07)', borderRadius: '10px', overflow: 'hidden' }}>
        {sdks.map(sdk => (
          <a key={sdk.name} href={sdk.href} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '13px 16px', background: '#0f0f0f', textDecoration: 'none', transition: 'background 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(245,130,10,0.06)'}
            onMouseLeave={e => e.currentTarget.style.background = '#0f0f0f'}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><sdk.Icon /></div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                <strong style={{ fontSize: '14px', color: '#f6f6f1' }}>{sdk.name}</strong>
                <span style={{ fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: '700', background: 'rgba(74,158,26,0.12)', color: '#4a9e1a', border: '1px solid rgba(74,158,26,0.25)' }}>{sdk.status}</span>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.28)' }}>{sdk.env}</span>
              </div>
              <code style={{ fontSize: '12px', color: 'rgba(255,255,255,0.38)', fontFamily: 'monospace' }}>{sdk.install}</code>
            </div>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0 }}><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        ))}
      </div>
    </div>
  )
}

export default function SDKOverview() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <span className="docs-badge docs-badge-purple">SDKs</span>
      </div>

      <h1>SDK Overview</h1>
      <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '32px' }}>
        Advaita provides official SDKs for web, server, and mobile. All SDKs share the same event model and a consistent <code>track / identify / setGroup / revenue / flush</code> API surface.
      </p>

      {/* Attribution banner */}
      <div style={{ display: 'flex', gap: '14px', padding: '16px 18px', background: 'rgba(167,139,250,0.06)', border: '1px solid rgba(167,139,250,0.2)', borderRadius: '10px', marginBottom: '36px' }}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: '1px' }}>
          <path d="M9 1L1 5v8l8 4 8-4V5L9 1z" stroke="#a78bfa" strokeWidth="1.4" strokeLinejoin="round"/>
          <path d="M9 9V5M9 12v.5" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <div>
          <strong style={{ display: 'block', fontSize: '13px', color: '#a78bfa', marginBottom: '4px' }}>Open-source attribution</strong>
          <p style={{ margin: 0, fontSize: '13px', color: 'rgba(167,139,250,0.8)', lineHeight: 1.6 }}>
            All Advaita SDKs are forks of <strong style={{ color: '#f6f6f1' }}>Amplitude's open-source SDKs</strong>, released under the <strong style={{ color: '#f6f6f1' }}>MIT License</strong> (Go SDK: Apache 2.0). We retain full MIT attribution and compliance. The wire protocol is compatible with Amplitude's HTTP API v2 format (<code>POST /2/httpapi</code>), pointing to your self-hosted Advaita collector instead.
          </p>
        </div>
      </div>

      <h2 id="available">Available SDKs</h2>
      <SDKGroup title="Web" sdks={SDKS.web} />
      <SDKGroup title="Server" sdks={SDKS.server} />
      <SDKGroup title="Mobile" sdks={SDKS.mobile} />

      <h2 id="choosing">Choosing an SDK</h2>
      <table className="docs-prop-table">
        <thead><tr><th>Use case</th><th>SDK</th><th>Package</th></tr></thead>
        <tbody>
          <tr><td>Single-page app (React, Vue, Svelte)</td><td>TypeScript Browser</td><td><code>@acai/analytics-browser</code></td></tr>
          <tr><td>Legacy browser or vanilla JS project</td><td>JavaScript</td><td><code>acai-js</code></td></tr>
          <tr><td>Node.js API or background job</td><td>Node.js</td><td><code>acai-node</code></td></tr>
          <tr><td>Python backend, FastAPI, Django</td><td>Python</td><td><code>acai-analytics</code></td></tr>
          <tr><td>Java server-side</td><td>Java</td><td><code>com.acai:acai-java-sdk</code></td></tr>
          <tr><td>Go microservice</td><td>Go</td><td><code>github.com/acai/analytics-go</code></td></tr>
          <tr><td>Cross-platform iOS + Android app</td><td>Flutter</td><td><code>acai_flutter</code></td></tr>
          <tr><td>React Native app</td><td>React Native</td><td><code>@acai/react-native-sdk</code></td></tr>
          <tr><td>Native Android (Kotlin/Java)</td><td>Android</td><td><code>com.acai:analytics-android</code></td></tr>
          <tr><td>Native iOS (Swift)</td><td>iOS / Swift</td><td><code>AcaiSwift</code></td></tr>
        </tbody>
      </table>

      <h2 id="common-api">Common API surface</h2>
      <p>Every SDK implements these core methods. Method names follow platform conventions (camelCase for JS/Kotlin/Swift, snake_case for Python, PascalCase for Go).</p>
      <table className="docs-prop-table">
        <thead><tr><th>Method</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>track / logEvent</code></td><td>Record a user action with an event name and optional properties object.</td></tr>
          <tr><td><code>identify</code></td><td>Set persistent user traits (name, email, plan, etc.) on the current user profile.</td></tr>
          <tr><td><code>setUserId</code></td><td>Associate all future events with an authenticated user ID.</td></tr>
          <tr><td><code>setGroup / groupIdentify</code></td><td>Assign a user to a group (company, workspace) and set group properties.</td></tr>
          <tr><td><code>revenue</code></td><td>Log a purchase with price, quantity, product ID, and revenue type.</td></tr>
          <tr><td><code>flush</code></td><td>Force-send all queued events immediately.</td></tr>
          <tr><td><code>setOptOut</code></td><td>Disable all event collection (e.g. for user privacy preference).</td></tr>
          <tr><td><code>add / remove</code></td><td>Add or remove an enrichment plugin (supported by TS, Python, Kotlin, Swift, Go).</td></tr>
        </tbody>
      </table>

      <h2 id="versioning">Versioning &amp; support</h2>
      <ul>
        <li>All SDKs follow <strong style={{ color: '#f6f6f1' }}>semantic versioning</strong>. Breaking changes only occur on major bumps.</li>
        <li>All SDKs accept a <code>serverUrl</code> / <code>apiEndpoint</code> config option to point to your self-hosted Advaita collector.</li>
        <li>The ingest payload format is <strong style={{ color: '#f6f6f1' }}>Amplitude HTTP API v2</strong>: <code>POST /2/httpapi</code> with <code>{'{ api_key, events: [...] }'}</code>.</li>
        <li>Minor and patch releases are always backward-compatible within a major version.</li>
      </ul>
    </>
  )
}
