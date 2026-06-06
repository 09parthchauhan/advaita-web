import CodeBlock from '../../components/CodeBlock'

export const toc = [
  { id: 'install',  label: 'Installation',    level: 2 },
  { id: 'init',     label: 'Initialise',       level: 2 },
  { id: 'track',    label: 'Track events',     level: 2 },
  { id: 'identify', label: 'Identify users',   level: 2 },
  { id: 'config',   label: 'Config reference', level: 2 },
]

export default function JavaSDK() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <span className="docs-badge docs-badge-purple">Server SDK</span>
        <span className="docs-badge">v1.0.0</span>
        <span className="docs-badge docs-badge-green">MIT License</span>
      </div>

      <h1>Java SDK</h1>
      <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '24px' }}>
        <code>com.acai:acai-java-sdk</code> is the server-side Java SDK. It uses a thread-safe event queue with configurable retries and an optional middleware pipeline. Forked from <strong style={{ color: '#f6f6f1' }}>com.amplitude:java-sdk</strong> (MIT).
      </p>

      <h2 id="install">Installation</h2>
      <p><strong>Gradle:</strong></p>
      <CodeBlock lang="groovy">{`implementation 'com.acai:acai-java-sdk:1.0.0'`}</CodeBlock>
      <p><strong>Maven:</strong></p>
      <CodeBlock lang="xml">{`<dependency>
  <groupId>com.acai</groupId>
  <artifactId>acai-java-sdk</artifactId>
  <version>1.0.0</version>
</dependency>`}</CodeBlock>

      <h2 id="init">Initialise</h2>
      <CodeBlock lang="java">{`import com.acai.Acai;

Acai client = Acai.getInstance();
client.init("YOUR_API_KEY");
client.setServerUrl("https://events.yourdomain.com/2/httpapi");
client.setEventUploadThreshold(10);
client.setEventUploadPeriodMillis(10_000);`}</CodeBlock>

      <p>For multiple isolated instances:</p>
      <CodeBlock lang="java">{`Acai instance2 = Acai.getInstance("analytics");
instance2.init("OTHER_API_KEY");`}</CodeBlock>

      <h2 id="track">Track events</h2>
      <CodeBlock lang="java">{`import com.acai.Event;
import org.json.JSONObject;

Event event = new Event("Purchase Completed", "user_abc123");
event.eventProperties = new JSONObject()
    .put("product_id", "prod_123")
    .put("price", 49.99)
    .put("currency", "USD");
event.time = System.currentTimeMillis();

client.logEvent(event);

// With a result callback
client.logEvent(event, new AcaiCallbacks() {
    public void onLogEventServerResponse(Event e, int status, String msg) {
        System.out.println("Status: " + status);
    }
});

client.flushEvents();`}</CodeBlock>

      <h2 id="identify">Identify users</h2>
      <CodeBlock lang="java">{`Event identifyEvent = new Event("$identify", "user_abc123");
identifyEvent.userProperties = new JSONObject()
    .put("$set", new JSONObject()
        .put("plan", "enterprise")
        .put("company", "Acme Corp"))
    .put("$setOnce", new JSONObject()
        .put("first_seen", "2024-01-15"))
    .put("$add", new JSONObject()
        .put("login_count", 1));

client.logEvent(identifyEvent);`}</CodeBlock>

      <h2 id="config">Config reference</h2>
      <table className="docs-prop-table">
        <thead><tr><th>Method</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>setServerUrl(url)</code></td><td><code>https://your-acai-server.com/2/httpapi</code></td><td>Collector endpoint.</td></tr>
          <tr><td><code>useBatchMode(bool)</code></td><td><code>false</code></td><td>Use the <code>/batch</code> endpoint.</td></tr>
          <tr><td><code>setEventUploadThreshold(n)</code></td><td><code>10</code></td><td>Event count before flush.</td></tr>
          <tr><td><code>setEventUploadPeriodMillis(ms)</code></td><td><code>10000</code></td><td>Time-based flush interval.</td></tr>
          <tr><td><code>setLogMode(LogMode)</code></td><td><code>ERROR</code></td><td><code>OFF</code> · <code>ERROR</code> · <code>WARN</code> · <code>DEBUG</code></td></tr>
          <tr><td><code>setProxy(Proxy)</code></td><td><code>Proxy.NO_PROXY</code></td><td>Custom HTTPS proxy.</td></tr>
          <tr><td><code>setCallbacks(cb)</code></td><td>—</td><td>Global event result callback.</td></tr>
        </tbody>
      </table>
    </>
  )
}
