export const toc = [
  { id: 'what-is-advaita', label: 'What is Advaita?', level: 2 },
  { id: 'how-it-works', label: 'How it works', level: 2 },
  { id: 'key-capabilities', label: 'Key capabilities', level: 2 },
  { id: 'architecture', label: 'Architecture', level: 2 },
  { id: 'next-steps', label: 'Next steps', level: 2 },
]

export default function Introduction() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <span className="docs-badge docs-badge-orange">Getting Started</span>
        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>5 min read</span>
      </div>

      <h1>Introduction to Advaita</h1>
      <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '32px' }}>
        Advaita is an AI-native product intelligence platform that turns raw clickstream events into decisions your team can trust — without writing SQL or building dashboards from scratch.
      </p>

      {/* Quick stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '40px' }}>
        {[
          ['< 5 min', 'Time to first event'],
          ['10+', 'Native SDKs'],
          ['100%', 'Event capture rate'],
        ].map(([v, l]) => (
          <div key={l} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px' }}>
            <strong style={{ display: 'block', fontSize: '24px', fontWeight: '700', letterSpacing: '-0.04em', color: '#f5820a', marginBottom: '4px' }}>{v}</strong>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>{l}</span>
          </div>
        ))}
      </div>

      <h2 id="what-is-advaita">What is Advaita?</h2>
      <p>
        Advaita Intelligence is a full-stack product analytics platform built around three pillars: a <strong style={{ color: '#f6f6f1' }}>clickstream capture layer</strong> that records every user interaction with zero configuration, an <strong style={{ color: '#f6f6f1' }}>AI analysis engine (ACAI)</strong> that answers questions in plain language, and a <strong style={{ color: '#f6f6f1' }}>structured data interface</strong> for exporting, querying, and preparing behavioural data.
      </p>
      <p>
        Unlike traditional analytics tools that require analysts to build queries and dashboards before a team can get answers, Advaita is designed so that anyone — product manager, growth lead, or engineer — can ask a question and get an evidence-backed answer in seconds.
      </p>

      <div className="docs-callout docs-callout-info">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '1px' }}><circle cx="8" cy="8" r="6.5" stroke="#a78bfa" strokeWidth="1.4"/><path d="M8 7v4M8 5v.5" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/></svg>
        <p>Advaita is currently in private beta. <a href="https://signup.acaiplatform.ai/">Request access</a> to get your workspace and API key.</p>
      </div>

      <h2 id="how-it-works">How it works</h2>
      <p>Advaita operates in three stages from event to insight:</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0', margin: '24px 0', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', overflow: 'hidden' }}>
        {[
          { num: '01', title: 'Capture', desc: 'Install the SDK in your web, mobile, or server-side app. Every page view, click, and custom event is captured and sent to the Advaita pipeline with full identity context.' },
          { num: '02', title: 'Process', desc: 'Events are validated against your schema, enriched with session and device context, and written to your project\'s clickstream store in real time.' },
          { num: '03', title: 'Analyse', desc: 'Use the ACAI chatbot, dashboard, or API to query your data. Build funnels, retention cohorts, or ask a natural-language question and get a chart-backed answer.' },
        ].map((s, i) => (
          <div key={s.num} style={{ display: 'flex', gap: '16px', padding: '20px 22px', borderTop: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none', background: 'rgba(255,255,255,0.02)' }}>
            <span style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(245,130,10,0.12)', border: '1px solid rgba(245,130,10,0.25)', color: '#f5820a', fontSize: '11px', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{s.num}</span>
            <div>
              <strong style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#f6f6f1', marginBottom: '4px' }}>{s.title}</strong>
              <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255,255,255,0.58)', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 id="key-capabilities">Key capabilities</h2>
      <ul>
        <li><strong style={{ color: '#f6f6f1' }}>ACAI Chatbot</strong> — Ask product questions in plain English. Get instant answers with charts, funnels, and cohort breakdowns from your live clickstream.</li>
        <li><strong style={{ color: '#f6f6f1' }}>Experiment Analysis</strong> — Run A/B tests and compare variants by conversion rate, retention, and segment. Get a statistically validated ship decision automatically.</li>
        <li><strong style={{ color: '#f6f6f1' }}>KPI Tracking</strong> — Monitor activation, retention, conversion, and churn with real-time alerts and AI-generated context on every metric shift.</li>
        <li><strong style={{ color: '#f6f6f1' }}>Root-Cause Analysis</strong> — When a KPI drops, ACAI traces the causal event chain, isolates the affected segment, and recommends a fix with estimated impact.</li>
        <li><strong style={{ color: '#f6f6f1' }}>Data Interface</strong> — Inspect raw events, validate schema health, and export clean, AI-ready datasets in CSV, JSON, or via the REST API.</li>
        <li><strong style={{ color: '#f6f6f1' }}>Self-Hosting</strong> — Deploy the full Advaita stack on your own infrastructure using Docker Compose or Kubernetes. Your data never leaves your environment.</li>
      </ul>

      <h2 id="architecture">Architecture</h2>
      <p>Advaita is built around a single-tenant event pipeline. Each project gets an isolated clickstream store, schema registry, and AI model context. Events flow from SDK → ingest API → pipeline → query engine → ACAI.</p>

      <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '20px', fontFamily: 'monospace', fontSize: '13px', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>
        <span style={{ color: '#f5820a' }}>SDK</span>
        <span style={{ color: 'rgba(255,255,255,0.3)' }}> → </span>
        <span style={{ color: '#f5d000' }}>POST /track</span>
        <span style={{ color: 'rgba(255,255,255,0.3)' }}> → </span>
        <span style={{ color: '#4a9e1a' }}>Pipeline (validate · enrich · store)</span>
        <span style={{ color: 'rgba(255,255,255,0.3)' }}> → </span>
        <span style={{ color: '#a78bfa' }}>ACAI Query Engine</span>
        <span style={{ color: 'rgba(255,255,255,0.3)' }}> → </span>
        <span style={{ color: '#f6f6f1' }}>Dashboard / API</span>
      </div>

      <h2 id="next-steps">Next steps</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {[
          { title: 'Quickstart',    desc: 'Install the SDK and send your first event in under 5 minutes.', href: '/docs/getting-started/quickstart',      badge: 'Start here' },
          { title: 'Core Concepts', desc: 'Understand events, identities, sessions, and the schema model.',  href: '/docs/getting-started/core-concepts',    badge: 'Concepts'   },
          { title: 'SDK Overview',  desc: 'Browse all available SDKs and pick the right one for your stack.',href: '/docs/sdks/overview',                    badge: 'SDKs'       },
          { title: 'API Reference', desc: 'Explore the full REST API for tracking, batching, and querying.', href: '/docs/api-reference/overview',           badge: 'Reference'  },
        ].map(card => (
          <a key={card.title} href={card.href} style={{ padding: '18px 20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', cursor: 'pointer', transition: 'border-color 0.15s, background 0.15s', textDecoration: 'none', display: 'block' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,130,10,0.4)'; e.currentTarget.style.background = 'rgba(245,130,10,0.04)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}>
            <span className="docs-badge docs-badge-orange" style={{ marginBottom: '10px', display: 'inline-flex' }}>{card.badge}</span>
            <strong style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#f6f6f1', marginBottom: '4px' }}>{card.title}</strong>
            <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.55 }}>{card.desc}</p>
          </a>
        ))}
      </div>
    </>
  )
}
