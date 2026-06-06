import CodeBlock from '../../components/CodeBlock'

export const toc = [
  { id: 'install',  label: 'Installation',    level: 2 },
  { id: 'init',     label: 'Initialise',       level: 2 },
  { id: 'track',    label: 'Track events',     level: 2 },
  { id: 'identify', label: 'Identify users',   level: 2 },
  { id: 'plugins',  label: 'Plugins',          level: 2 },
  { id: 'config',   label: 'Config reference', level: 2 },
]

export default function AndroidSDK() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <span className="docs-badge docs-badge-purple">Mobile SDK</span>
        <span className="docs-badge">v1.0.0</span>
        <span className="docs-badge docs-badge-green">MIT License</span>
      </div>

      <h1>Android SDK</h1>
      <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '24px' }}>
        <code>com.acai:analytics-android</code> is the native Android SDK written in Kotlin. It uses a plugin architecture and auto-tracks lifecycle events, sessions, deep links, and screen views. Forked from <strong style={{ color: '#f6f6f1' }}>com.amplitude:analytics-android</strong> (MIT).
      </p>

      <h2 id="install">Installation</h2>
      <p>Add to your app-level <code>build.gradle</code>:</p>
      <CodeBlock lang="groovy">{`dependencies {
    implementation("com.acai:analytics-android:1.0.0")
}`}</CodeBlock>

      <h2 id="init">Initialise</h2>
      <CodeBlock lang="kotlin">{`import com.acai.android.Acai
import com.acai.android.Configuration
import com.acai.android.DefaultTrackingOptions

val acai = Acai(
    Configuration(
        apiKey    = "YOUR_API_KEY",
        context   = applicationContext,
        serverUrl = "https://events.yourdomain.com/2/httpapi",
        defaultTracking = DefaultTrackingOptions(
            sessions      = true,
            appLifecycles = true,
            deepLinks     = true,
            screenViews   = true,
        ),
    )
)`}</CodeBlock>

      <h2 id="track">Track events</h2>
      <CodeBlock lang="kotlin">{`acai.track("Button Clicked")

acai.track(
    eventType = "Purchase Completed",
    eventProperties = mapOf(
        "product_id" to "prod_123",
        "price"      to 49.99,
        "currency"   to "USD",
    )
)

acai.flush()`}</CodeBlock>

      <h2 id="identify">Identify users</h2>
      <CodeBlock lang="kotlin">{`import com.acai.android.Identify

acai.setUserId("user_abc123")

val identify = Identify().apply {
    set("plan",        "pro")
    setOnce("signup_date", "2024-01-15")
    add("session_count", 1)
    append("tags",     "power-user")
    unset("trial_active")
}
acai.identify(identify)

acai.setGroup("company", "Acme Corp")

val groupIdentify = Identify().apply { set("tier", "enterprise") }
acai.groupIdentify("company", "Acme Corp", groupIdentify)

// Log out
acai.setUserId(null)
acai.reset()`}</CodeBlock>

      <h2 id="plugins">Plugins</h2>
      <CodeBlock lang="kotlin">{`import com.acai.android.plugin.Plugin

class BuildInfoPlugin : Plugin {
    override val type = Plugin.Type.Enrichment

    override fun execute(event: BaseEvent): BaseEvent {
        event.eventProperties = (event.eventProperties ?: mapOf()).toMutableMap().also {
            it["app_build"] = BuildConfig.VERSION_CODE
            it["app_version"] = BuildConfig.VERSION_NAME
        }
        return event
    }
}

acai.add(BuildInfoPlugin())`}</CodeBlock>

      <h2 id="config">Config reference</h2>
      <table className="docs-prop-table">
        <thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>apiKey</code></td><td>String</td><td>required</td><td>Your project API key.</td></tr>
          <tr><td><code>context</code></td><td>Context</td><td>required</td><td>Android application context.</td></tr>
          <tr><td><code>serverUrl</code></td><td>String</td><td>US endpoint</td><td>Custom collector endpoint.</td></tr>
          <tr><td><code>flushQueueSize</code></td><td>Int</td><td><code>30</code></td><td>Events per batch before flush.</td></tr>
          <tr><td><code>flushIntervalMillis</code></td><td>Long</td><td><code>30000</code></td><td>Flush interval in ms.</td></tr>
          <tr><td><code>logLevel</code></td><td>LogLevel</td><td><code>WARN</code></td><td><code>DISABLE · ERROR · WARN · DEBUG</code></td></tr>
          <tr><td><code>optOut</code></td><td>Boolean</td><td><code>false</code></td><td>Disable all tracking.</td></tr>
          <tr><td><code>defaultTracking</code></td><td>DefaultTrackingOptions</td><td>—</td><td>Auto-track sessions, appLifecycles, deepLinks, screenViews.</td></tr>
          <tr><td><code>useBatch</code></td><td>Boolean</td><td><code>false</code></td><td>Use the <code>/batch</code> endpoint.</td></tr>
          <tr><td><code>minIdLength</code></td><td>Int?</td><td><code>null</code></td><td>Minimum user/device ID length.</td></tr>
        </tbody>
      </table>
    </>
  )
}
