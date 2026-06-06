import CodeBlock from '../../components/CodeBlock'

export const toc = [
  { id: 'install',  label: 'Installation',    level: 2 },
  { id: 'init',     label: 'Initialise',       level: 2 },
  { id: 'track',    label: 'Track events',     level: 2 },
  { id: 'identify', label: 'Identify users',   level: 2 },
  { id: 'screen',   label: 'Screen views',     level: 2 },
  { id: 'config',   label: 'Config reference', level: 2 },
]

export default function FlutterSDK() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <span className="docs-badge docs-badge-purple">Mobile SDK</span>
        <span className="docs-badge">v4.3.11</span>
        <span className="docs-badge docs-badge-green">MIT License</span>
      </div>

      <h1>Flutter SDK</h1>
      <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '24px' }}>
        <code>acai_flutter</code> supports iOS, Android, macOS, and Web from a single Dart codebase. On mobile it auto-tracks sessions, app lifecycles, screen views, and deep links. Forked from <strong style={{ color: '#f6f6f1' }}>amplitude_flutter</strong> (MIT).
      </p>

      <h2 id="install">Installation</h2>
      <p>Add to <code>pubspec.yaml</code>:</p>
      <CodeBlock lang="yaml">{`dependencies:
  acai_flutter: ^4.3.11`}</CodeBlock>
      <CodeBlock lang="bash">{`flutter pub get`}</CodeBlock>

      <h2 id="init">Initialise</h2>
      <CodeBlock lang="dart">{`import 'package:acai_flutter/acai_flutter.dart';

final acai = Acai(Configuration(
  apiKey:    'YOUR_API_KEY',
  serverUrl: 'https://events.yourdomain.com/2/httpapi',
  defaultTracking: DefaultTrackingOptions(
    sessions:      true,
    appLifecycles: true,
    screenViews:   true,
    deepLinks:     true,
  ),
  logLevel: LogLevel.warn,
));

await acai.isBuilt;`}</CodeBlock>

      <h2 id="track">Track events</h2>
      <CodeBlock lang="dart">{`acai.track(BaseEvent('Button Clicked'));

acai.track(BaseEvent(
  eventType: 'Purchase Completed',
  eventProperties: {
    'product_id': 'prod_123',
    'price':       49.99,
    'currency':    'USD',
  },
));

acai.flush();`}</CodeBlock>

      <h2 id="identify">Identify users</h2>
      <CodeBlock lang="dart">{`acai.setUserId('user_abc123');

final identify = Identify()
  ..set('plan', 'pro')
  ..setOnce('signup_date', '2024-01-15')
  ..add('session_count', 1)
  ..append('tags', 'power-user')
  ..unset('trial_active');

acai.identify(identify);

acai.setGroup('company', 'Acme Corp');

// Log out
acai.setUserId(null);
acai.reset();`}</CodeBlock>

      <h2 id="screen">Screen views</h2>
      <CodeBlock lang="dart">{`// Manual screen view
acai.track(BaseEvent(
  eventType: '[Acai] Screen Viewed',
  eventProperties: {'screen_name': 'Dashboard'},
));

// Or enable automatic via:
// defaultTracking: DefaultTrackingOptions(screenViews: true)`}</CodeBlock>

      <h2 id="config">Config reference</h2>
      <table className="docs-prop-table">
        <thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>apiKey</code></td><td>String</td><td>required</td><td>Your project API key.</td></tr>
          <tr><td><code>serverUrl</code></td><td>String?</td><td><code>null</code></td><td>Custom collector endpoint.</td></tr>
          <tr><td><code>flushQueueSize</code></td><td>int</td><td><code>30</code></td><td>Events per batch before flush.</td></tr>
          <tr><td><code>flushIntervalMillis</code></td><td>int</td><td><code>30000</code></td><td>Flush interval in ms.</td></tr>
          <tr><td><code>flushMaxRetries</code></td><td>int</td><td><code>5</code></td><td>Max retry attempts.</td></tr>
          <tr><td><code>optOut</code></td><td>bool</td><td><code>false</code></td><td>Disable all tracking.</td></tr>
          <tr><td><code>logLevel</code></td><td>LogLevel</td><td><code>warn</code></td><td><code>off · error · warn · debug</code></td></tr>
          <tr><td><code>useBatch</code></td><td>bool</td><td><code>false</code></td><td>Use the <code>/batch</code> endpoint.</td></tr>
          <tr><td><code>defaultTracking</code></td><td>DefaultTrackingOptions</td><td>—</td><td>Auto-track sessions, appLifecycles, screenViews, deepLinks.</td></tr>
          <tr><td><code>enableCoppaControl</code></td><td>bool</td><td><code>false</code></td><td>COPPA compliance.</td></tr>
          <tr><td><code>flushEventsOnClose</code></td><td>bool</td><td><code>true</code></td><td>Flush on app backgrounded/closed.</td></tr>
          <tr><td><code>migrateLegacyData</code></td><td>bool</td><td><code>true</code></td><td>Migrate data from older SDK versions.</td></tr>
          <tr><td><code>minTimeBetweenSessionsMillis</code></td><td>int</td><td><code>300000</code></td><td>Session gap threshold (5 min mobile).</td></tr>
        </tbody>
      </table>
    </>
  )
}
