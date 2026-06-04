import { useMemo, useState } from 'react'

const sidebarGroups = [
  {
    title: 'Getting Started',
    links: [
      { label: 'Overview', href: '#overview' },
      { label: 'Quickstart', href: '#quickstart' },
      { label: 'Install with AI', href: '#install-with-ai' },
    ],
  },
  {
    title: 'SDKs',
    links: [
      { label: 'TypeScript', href: '#typescript-sdk' },
      { label: 'Python', href: '#python-sdk' },
      { label: 'Go', href: '#go-sdk' },
      { label: 'Node', href: '#node-sdk' },
      { label: 'Java / Kotlin', href: '#java-kotlin-sdk' },
      { label: 'Flutter', href: '#flutter-sdk' },
      { label: 'Browser JS', href: '#browser-js-sdk' },
    ],
  },
  {
    title: 'Concepts',
    links: [
      { label: 'Event model', href: '#event-model' },
      { label: 'Identity and users', href: '#identity' },
      { label: 'Plugin pipeline', href: '#plugin-pipeline' },
    ],
  },
  {
    title: 'Tutorials',
    links: [
      { label: 'Video tutorials', href: '#video-tutorials' },
      { label: 'Self-host the server', href: '#self-host' },
    ],
  },
  {
    title: 'Reference',
    links: [
      { label: 'POST /batch', href: '#api-reference' },
      { label: 'Changelog', href: '#changelog' },
    ],
  },
]

const onThisPage = [
  { label: 'Overview', href: '#overview' },
  { label: 'Quickstart', href: '#quickstart' },
  { label: 'SDKs', href: '#sdks' },
  { label: 'Event model', href: '#event-model' },
  { label: 'Video tutorials', href: '#video-tutorials' },
  { label: 'API reference', href: '#api-reference' },
]

const stats = [
  ['< 5 min', 'Time to first event'],
  ['10', 'Native SDKs'],
  ['MIT', 'License'],
  ['Yes', 'Self-host'],
]

const quickstartSteps = [
  {
    number: '01',
    title: 'Create a workspace and grab your write key',
    copy: 'Sign up, pick a project name, and copy the key from Settings to API.',
  },
  {
    number: '02',
    title: 'Install the SDK for your stack',
    copy: 'Pick from TypeScript, Python, Go, Java, Kotlin, Flutter, Node, Browser JS, or React Native.',
  },
  {
    number: '03',
    title: 'Identify the user and track your first event',
    copy: 'Send a track, identify, page, group, or alias call. Events appear live in the stream.',
  },
]

const sdkDocs = [
  {
    id: 'typescript-sdk',
    name: 'TypeScript',
    packageName: 'acai-typescript',
    folder: 'SDK/acai-typescript',
    summary: 'Typed product instrumentation for modern web apps and shared frontend packages.',
    install: 'npm install acai-typescript',
    code: `import { Acai } from 'acai-typescript'

const acai = new Acai({
  apiKey: 'YOUR_API_KEY',
  serverUrl: 'https://events.your-domain.com/2/httpapi',
})

acai.track('signup_completed', {
  userId: 'user_123',
  eventProperties: { plan: 'pro' },
})`,
  },
  {
    id: 'python-sdk',
    name: 'Python',
    packageName: 'acai-analytics',
    folder: 'SDK/acai-python',
    summary: 'Backend tracking for services, jobs, notebooks, and internal data pipelines.',
    install: 'pip install acai-analytics',
    code: `from acai.client import Acai
from acai.event import BaseEvent

client = Acai(
    api_key='YOUR_API_KEY',
    server_url='https://events.your-domain.com/2/httpapi'
)

client.track(BaseEvent(
    event_type='signup_completed',
    user_id='user_123',
    event_properties={'plan': 'pro'}
))
client.shutdown()`,
  },
  {
    id: 'go-sdk',
    name: 'Go',
    packageName: 'acai-analytics-go',
    folder: 'SDK/acai-analytics-go',
    summary: 'Fast server-side event capture for Go APIs and background workers.',
    install: 'go get github.com/acai/analytics-go',
    code: `package main

import "github.com/acai/analytics-go/acai"

func main() {
  client := acai.NewClient("YOUR_API_KEY")
  client.SetServerURL("https://events.your-domain.com/2/httpapi")

  client.Track(acai.Event{
    EventType: "signup_completed",
    UserID: "user_123",
    EventProperties: map[string]any{"plan": "pro"},
  })
}`,
  },
  {
    id: 'node-sdk',
    name: 'Node',
    packageName: 'acai-node',
    folder: 'SDK/acai-node',
    summary: 'Server-side Node instrumentation with retry support for backend event delivery.',
    install: 'npm install acai-node',
    code: `import { init } from 'acai-node'

const client = init('YOUR_API_KEY', {
  serverUrl: 'https://events.your-domain.com/2/httpapi',
})

client.logEvent({
  event_type: 'signup_completed',
  user_id: 'user_123',
  event_properties: { plan: 'pro' },
})`,
  },
  {
    id: 'java-kotlin-sdk',
    name: 'Java / Kotlin',
    packageName: 'acai-java, acai-kotlin',
    folder: 'SDK/acai-java, SDK/acai-kotlin',
    summary: 'JVM instrumentation for backend services and Android/Kotlin projects.',
    install: 'implementation "com.acai:acai-java-sdk:1.0.0"',
    code: `import com.acai.Acai;
import com.acai.Event;

Acai client = Acai.getInstance();
client.init("YOUR_API_KEY");
client.setServerUrl("https://events.your-domain.com/2/httpapi");

Event event = new Event("signup_completed", "user_123");
client.logEvent(event);
client.flushEvents();`,
  },
  {
    id: 'flutter-sdk',
    name: 'Flutter',
    packageName: 'acai_flutter',
    folder: 'SDK/acai-flutter',
    summary: 'Mobile analytics for Flutter apps across iOS, Android, and web targets.',
    install: 'flutter pub add acai_flutter',
    code: `import 'package:acai_flutter/acai.dart';

final acai = Acai('YOUR_API_KEY');

await acai.track(
  'signup_completed',
  eventProperties: {'plan': 'pro'},
);`,
  },
  {
    id: 'browser-js-sdk',
    name: 'Browser JS',
    packageName: 'acai-js',
    folder: 'SDK/acai-js',
    summary: 'Browser event collection with local persistence, UTM capture, and page context.',
    install: 'npm install acai-js',
    code: `import acai from 'acai-js'

acai.init('YOUR_API_KEY', null, {
  apiEndpoint: 'events.your-domain.com',
  forceHttps: true,
  saveEvents: true,
})

acai.setUserId('user_123')
acai.logEvent('signup_completed', { plan: 'pro' })`,
  },
]

const searchIndex = [
  { label: 'Overview', href: '#overview' },
  { label: 'Quickstart', href: '#quickstart' },
  { label: 'Install with AI', href: '#install-with-ai' },
  { label: 'TypeScript SDK', href: '#typescript-sdk' },
  { label: 'Python SDK', href: '#python-sdk' },
  { label: 'Go SDK', href: '#go-sdk' },
  { label: 'Node SDK', href: '#node-sdk' },
  { label: 'Java Kotlin SDK', href: '#java-kotlin-sdk' },
  { label: 'Flutter SDK', href: '#flutter-sdk' },
  { label: 'Browser JS SDK', href: '#browser-js-sdk' },
  { label: 'Event model', href: '#event-model' },
  { label: 'Identity and users', href: '#identity' },
  { label: 'Plugin pipeline', href: '#plugin-pipeline' },
  { label: 'Video tutorials', href: '#video-tutorials' },
  { label: 'API reference', href: '#api-reference' },
  { label: 'Self host', href: '#self-host' },
]

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m14 14 3 3M8.8 15.2a6.4 6.4 0 1 1 0-12.8 6.4 6.4 0 0 1 0 12.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg className="arrow-icon" width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default function Docs() {
  const [query, setQuery] = useState('')

  const searchResults = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return []

    return searchIndex
      .filter((item) => item.label.toLowerCase().includes(normalized))
      .slice(0, 6)
  }, [query])

  return (
    <div className="docs-workspace">
      <header className="docs-topbar">
        <a href="/" className="docs-brand" aria-label="Go to Advaita home">
          <img src="/Logo.png" alt="" />
          <span>Advaita Docs</span>
        </a>

        <div className="docs-search">
          <SearchIcon />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search docs..."
            aria-label="Search docs"
          />
          <kbd>⌘K</kbd>
          {query && (
            <div className="docs-search-results">
              {searchResults.length > 0 ? (
                searchResults.map((result) => (
                  <a key={result.label} href={result.href} onClick={() => setQuery('')}>
                    {result.label}
                  </a>
                ))
              ) : (
                <p>No docs found</p>
              )}
            </div>
          )}
        </div>

        <div className="docs-topbar-actions">
          <a href="/">Home</a>
          <a href="https://signup.acaiplatform.ai/" className="docs-access-button arrow-button">
            Get early access
            <ArrowIcon />
          </a>
        </div>
      </header>

      <div className="docs-layout">
        <aside className="docs-sidebar">
          {sidebarGroups.map((group) => (
            <div key={group.title} className="docs-sidebar-group">
              <h2>{group.title}</h2>
              {group.links.map((link, index) => (
                <a key={link.href} href={link.href} className={index === 0 && group.title === 'Getting Started' ? 'is-active' : ''}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </aside>

        <article className="docs-content">
          <section id="overview" className="docs-article-section docs-overview">
            <div className="docs-pill">Documentation · v1.0</div>
            <h1>Overview - What is Advaita?</h1>
            <p className="docs-lead">
              Advaita is the open-source, self-hosted analytics platform you wish you had three ramp-ups ago.
              Drop in an SDK, point it at your ingest server, and get real-time events, funnels, retention,
              and AI insights without vendor lock-in.
            </p>

            <div className="docs-action-row">
              <a href="#quickstart" className="docs-solid-button arrow-button">Get started <ArrowIcon /></a>
              <a href="#sdks" className="docs-outline-button arrow-button">Browse SDKs <ArrowIcon /></a>
            </div>

            <div className="docs-stats-grid">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="quickstart" className="docs-article-section">
            <span className="docs-section-eyebrow">Get Started</span>
            <h2>Quickstart</h2>
            <p>Three steps. The first event lands in your dashboard within seconds.</p>

            <div className="docs-quickstart-list">
              {quickstartSteps.map((step) => (
                <div key={step.title} className="docs-quickstart-card">
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="install-with-ai" className="docs-article-section">
            <span className="docs-section-eyebrow">Install with AI</span>
            <h2>Use your assistant to instrument events.</h2>
            <p>
              Ask your AI coding assistant to install the SDK, identify the current user, and track key actions
              such as signup, activation, checkout, invite sent, and feature used.
            </p>
            <pre className="docs-code-block"><code>{`Add Advaita analytics to this app.
Use the right SDK for this stack, track signup_completed,
and keep event properties typed and consistent.`}</code></pre>
          </section>

          <section id="sdks" className="docs-article-section">
            <span className="docs-section-eyebrow">SDKs</span>
            <h2>SDK examples</h2>
            <p>Each SDK in the root SDK folder gets a short install command and a first-event example.</p>

            <div className="docs-sdk-docs">
              {sdkDocs.map((sdk) => (
                <section key={sdk.id} id={sdk.id} className="docs-sdk-doc-card">
                  <div className="docs-sdk-doc-header">
                    <div>
                      <h3>{sdk.name}</h3>
                      <p>{sdk.summary}</p>
                    </div>
                    <span>{sdk.folder}</span>
                  </div>
                  <div className="docs-install-line">
                    <small>Install</small>
                    <code>{sdk.install}</code>
                  </div>
                  <pre className="docs-code-block"><code>{sdk.code}</code></pre>
                </section>
              ))}
            </div>
          </section>

          <section id="event-model" className="docs-article-section">
            <span className="docs-section-eyebrow">Concepts</span>
            <h2>Event model</h2>
            <p>
              Advaita events should be clear, stable, and decision-ready. Use a descriptive event name,
              a known user or device id, and a small set of useful properties.
            </p>
            <ul className="docs-bullet-list">
              <li>Use action names like <code>signup_completed</code> or <code>report_exported</code>.</li>
              <li>Keep property names consistent across SDKs.</li>
              <li>Send revenue and plan information only when it helps analysis.</li>
            </ul>
          </section>

          <section id="identity" className="docs-article-section">
            <span className="docs-section-eyebrow">Concepts</span>
            <h2>Identity and users</h2>
            <p>
              Set the user id once you know who is using the product. Anonymous sessions can start with a device id
              and later merge into a known profile.
            </p>
          </section>

          <section id="plugin-pipeline" className="docs-article-section">
            <span className="docs-section-eyebrow">Concepts</span>
            <h2>Plugin pipeline</h2>
            <p>
              Plugins can enrich, filter, batch, or forward events before they reach your warehouse or Advaita dashboard.
            </p>
          </section>

          <section id="video-tutorials" className="docs-article-section docs-coming-soon">
            <span className="docs-section-eyebrow">Tutorials</span>
            <h2>Video tutorials</h2>
            <p>Coming soon: guided walkthroughs for SDK setup, event validation, dashboards, and self-hosting.</p>
          </section>

          <section id="self-host" className="docs-article-section">
            <span className="docs-section-eyebrow">Tutorials</span>
            <h2>Self-host the server</h2>
            <p>Point every SDK to your own collector endpoint to keep product event ownership inside your infrastructure.</p>
          </section>

          <section id="api-reference" className="docs-article-section">
            <span className="docs-section-eyebrow">Reference</span>
            <h2>POST /batch</h2>
            <pre className="docs-code-block"><code>{`{
  "api_key": "YOUR_API_KEY",
  "events": [
    {
      "event_type": "signup_completed",
      "user_id": "user_123",
      "event_properties": { "plan": "pro" }
    }
  ]
}`}</code></pre>
          </section>

          <section id="changelog" className="docs-article-section">
            <span className="docs-section-eyebrow">Reference</span>
            <h2>Changelog</h2>
            <p>SDK and documentation release notes will appear here as the public packages stabilize.</p>
          </section>
        </article>

        <aside className="docs-toc">
          <h2>On this page</h2>
          {onThisPage.map((item, index) => (
            <a key={item.href} href={item.href} className={index === 0 ? 'is-active' : ''}>{item.label}</a>
          ))}
        </aside>
      </div>
    </div>
  )
}
