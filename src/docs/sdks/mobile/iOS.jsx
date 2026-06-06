import CodeBlock from '../../components/CodeBlock'

export const toc = [
  { id: 'install',  label: 'Installation',    level: 2 },
  { id: 'init',     label: 'Initialise',       level: 2 },
  { id: 'track',    label: 'Track events',     level: 2 },
  { id: 'identify', label: 'Identify users',   level: 2 },
  { id: 'plugins',  label: 'Plugins',          level: 2 },
  { id: 'config',   label: 'Config reference', level: 2 },
]

export default function iOSSDK() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <span className="docs-badge docs-badge-purple">Mobile SDK</span>
        <span className="docs-badge">v1.x</span>
        <span className="docs-badge docs-badge-green">MIT License</span>
      </div>

      <h1>iOS / Swift SDK</h1>
      <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '24px' }}>
        <code>AcaiSwift</code> supports iOS 13+, macOS 10.15+, tvOS 13+, and watchOS 7+. Features include autocapture (screen views, interactions, network requests), offline mode, COPPA controls, and a plugin pipeline. Forked from <strong style={{ color: '#f6f6f1' }}>Amplitude-Swift</strong> (MIT).
      </p>

      <h2 id="install">Installation</h2>
      <p><strong>Swift Package Manager</strong> (recommended):</p>
      <CodeBlock lang="swift" filename="Package.swift">{`dependencies: [
  .package(url: "https://github.com/your-org/Acai-Swift.git", from: "1.0.0")
],
targets: [
  .target(
    name: "YourApp",
    dependencies: [.product(name: "AcaiSwift", package: "Acai-Swift")]
  )
]`}</CodeBlock>

      <p><strong>CocoaPods:</strong></p>
      <CodeBlock lang="text" filename="Podfile">{`pod 'AcaiSwift', :git => 'https://github.com/your-org/Acai-Swift.git'`}</CodeBlock>

      <h2 id="init">Initialise</h2>
      <CodeBlock lang="swift">{`import AcaiSwift

let acai = Acai(configuration: Configuration(
    apiKey:    "YOUR_API_KEY",
    serverUrl: "https://events.yourdomain.com/2/httpapi",
    autocapture: [
        .sessions,
        .screenViews,
        .elementInteractions,
    ],
    logLevel: .warn,
))`}</CodeBlock>

      <h2 id="track">Track events</h2>
      <CodeBlock lang="swift">{`acai.track(eventType: "Button Tapped")

acai.track(eventType: "Purchase Completed", eventProperties: [
    "product_id": "prod_123",
    "price":       49.99,
    "currency":    "USD",
])

acai.flush()`}</CodeBlock>

      <h2 id="identify">Identify users</h2>
      <CodeBlock lang="swift">{`acai.identity.userId = "user_abc123"

let identify = Identify()
    .set(property: "plan",        value: "pro")
    .setOnce(property: "signup_date", value: "2024-01-15")
    .add(property: "session_count",   value: 1)
    .append(property: "tags",         value: "power-user")
    .unset(property: "trial_active")

acai.identify(identify: identify)

acai.setGroup(groupType: "company", groupName: "Acme Corp")

// Log out
acai.identity.userId = nil
acai.reset()`}</CodeBlock>

      <h2 id="plugins">Plugins</h2>
      <CodeBlock lang="swift">{`import AcaiSwift

class AppVersionPlugin: Plugin {
    var type: PluginType = .enrichment

    func execute(event: BaseEvent?) -> BaseEvent? {
        guard let event else { return nil }
        var props = event.eventProperties ?? [:]
        props["app_version"] = Bundle.main.infoDictionary?["CFBundleShortVersionString"]
        event.eventProperties = props
        return event
    }
}

acai.add(plugin: AppVersionPlugin())`}</CodeBlock>

      <h2 id="config">Config reference</h2>
      <table className="docs-prop-table">
        <thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>apiKey</code></td><td>String</td><td>required</td><td>Your project API key.</td></tr>
          <tr><td><code>serverUrl</code></td><td>String?</td><td><code>nil</code></td><td>Custom collector endpoint.</td></tr>
          <tr><td><code>autocapture</code></td><td>AutocaptureOptions</td><td><code>.sessions</code></td><td><code>.sessions · .screenViews · .elementInteractions · .networkTracking</code></td></tr>
          <tr><td><code>logLevel</code></td><td>LogLevelEnum</td><td><code>.warn</code></td><td><code>.off · .error · .warn · .log · .debug</code></td></tr>
          <tr><td><code>flushQueueSize</code></td><td>Int</td><td>30</td><td>Events per batch before flush.</td></tr>
          <tr><td><code>flushIntervalMillis</code></td><td>Int</td><td>30000</td><td>Flush interval in ms.</td></tr>
          <tr><td><code>optOut</code></td><td>Bool</td><td><code>false</code></td><td>Disable all tracking.</td></tr>
          <tr><td><code>flushEventsOnClose</code></td><td>Bool</td><td><code>true</code></td><td>Flush on app backgrounded.</td></tr>
          <tr><td><code>enableCoppaControl</code></td><td>Bool</td><td><code>false</code></td><td>COPPA compliance — disables IDFA.</td></tr>
          <tr><td><code>offline</code></td><td>Bool?</td><td><code>false</code></td><td>Queue events locally when offline.</td></tr>
          <tr><td><code>maxQueuedEventCount</code></td><td>Int</td><td><code>-1</code></td><td>Max queued events (-1 = unlimited).</td></tr>
          <tr><td><code>migrateLegacyData</code></td><td>Bool</td><td><code>true</code></td><td>Migrate data from older SDK versions.</td></tr>
        </tbody>
      </table>
    </>
  )
}
