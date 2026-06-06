export const toc = [
  { id: 'installation', label: 'Installation', level: 2 },
  { id: 'configuration', label: 'Configuration', level: 2 },
  { id: 'track', label: 'track()', level: 2 },
  { id: 'identify', label: 'identify()', level: 2 },
  { id: 'screen', label: 'screen()', level: 2 },
  { id: 'options', label: 'Config options', level: 2 },
]

function Code({ children }) {
  return (
    <pre style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '10px', padding: '18px 20px', overflowX: 'auto', margin: '12px 0 20px' }}>
      <code style={{ fontFamily: "'Geist', ui-monospace, monospace", fontSize: '13px', lineHeight: 1.75, color: 'rgba(255,255,255,0.82)' }}>{children}</code>
    </pre>
  )
}

export default function FlutterSDK() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <span className="docs-badge" style={{ background: 'rgba(86,200,245,0.12)', color: '#56c8f5', border: '1px solid rgba(86,200,245,0.25)' }}>Flutter SDK</span>
        <span className="docs-badge docs-badge-green">Stable</span>
        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>v1.1.0</span>
      </div>

      <h1>Flutter SDK</h1>
      <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '32px' }}>
        The <code>advaita_flutter</code> package works on iOS and Android. It automatically captures screen views when used with the <code>AdvaitaObserver</code> navigator observer.
      </p>

      <h2 id="installation">Installation</h2>
      <p>Add to your <code>pubspec.yaml</code>:</p>
      <Code>{`dependencies:
  advaita_flutter: ^1.1.0`}</Code>
      <p>Then run:</p>
      <Code>{`flutter pub get`}</Code>

      <h2 id="configuration">Configuration</h2>
      <p>Initialise in <code>main.dart</code> before <code>runApp()</code>:</p>
      <Code>{`import 'package:advaita_flutter/advaita_flutter.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await Advaita.init(
    apiKey:    'YOUR_WRITE_KEY',
    projectId: 'YOUR_PROJECT_ID',
  );

  runApp(const MyApp());
}`}</Code>

      <p>To auto-track screen views, add the observer to your <code>MaterialApp</code>:</p>
      <Code>{`MaterialApp(
  navigatorObservers: [AdvaitaObserver()],
  home: const HomeScreen(),
)`}</Code>

      <h2 id="track">track()</h2>
      <Code>{`Advaita.track(
  event: 'purchase_completed',
  properties: {
    'product_id':  'prod_4821',
    'price':       29.99,
    'currency':    'USD',
    'category':    'subscription',
  },
);`}</Code>

      <h2 id="identify">identify()</h2>
      <p>Call after login or sign-up to link the device session to a user profile:</p>
      <Code>{`Advaita.identify(
  userId: user.id,
  traits: {
    'email': user.email,
    'name':  user.displayName,
    'plan':  'pro',
  },
);`}</Code>

      <h2 id="screen">screen()</h2>
      <p>If you're not using <code>AdvaitaObserver</code>, call <code>screen()</code> manually in each screen's <code>initState</code>:</p>
      <Code>{`@override
void initState() {
  super.initState();
  Advaita.screen(
    name: 'CheckoutScreen',
    properties: {'step': 'payment'},
  );
}`}</Code>

      <h2 id="options">Config options</h2>
      <table className="docs-prop-table">
        <thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>apiKey</code></td><td><code>String</code></td><td>—</td><td>Required. Write-only public key.</td></tr>
          <tr><td><code>projectId</code></td><td><code>String</code></td><td>—</td><td>Required.</td></tr>
          <tr><td><code>flushAt</code></td><td><code>int</code></td><td><code>20</code></td><td>Flush after N events.</td></tr>
          <tr><td><code>flushInterval</code></td><td><code>Duration</code></td><td><code>5s</code></td><td>Flush interval.</td></tr>
          <tr><td><code>trackLifecycle</code></td><td><code>bool</code></td><td><code>true</code></td><td>Auto-track app foreground / background events.</td></tr>
          <tr><td><code>endpoint</code></td><td><code>String?</code></td><td>Advaita cloud</td><td>Self-hosted ingest URL.</td></tr>
        </tbody>
      </table>

      <div className="docs-callout docs-callout-info">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '1px' }}><circle cx="8" cy="8" r="6.5" stroke="#a78bfa" strokeWidth="1.4"/><path d="M8 7v4M8 5v.5" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/></svg>
        <p>The Flutter SDK stores events in SQLite on-device and retries failed sends automatically. Events are never dropped due to temporary connectivity loss.</p>
      </div>
    </>
  )
}
