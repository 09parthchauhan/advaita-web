import CodeBlock from '../../components/CodeBlock'

export const toc = [
  { id: 'install',  label: 'Installation',    level: 2 },
  { id: 'init',     label: 'Initialise',       level: 2 },
  { id: 'track',    label: 'Track events',     level: 2 },
  { id: 'identify', label: 'Identify users',   level: 2 },
  { id: 'plugins',  label: 'Plugins',          level: 2 },
  { id: 'config',   label: 'Config reference', level: 2 },
]

export default function GoSDK() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <span className="docs-badge docs-badge-purple">Server SDK</span>
        <span className="docs-badge">v1.x</span>
        <span className="docs-badge" style={{ background: 'rgba(0,172,215,0.12)', color: '#00ACD7', border: '1px solid rgba(0,172,215,0.25)' }}>Apache 2.0</span>
      </div>

      <h1>Go SDK</h1>
      <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '24px' }}>
        <code>github.com/acai/analytics-go</code> is the Go server SDK with a plugin architecture, an <code>Identify</code> builder, and configurable retry and storage. Forked from <strong style={{ color: '#f6f6f1' }}>github.com/amplitude/analytics-go</strong> (Apache 2.0).
      </p>

      <h2 id="install">Installation</h2>
      <CodeBlock lang="bash">{`go get github.com/acai/analytics-go`}</CodeBlock>

      <h2 id="init">Initialise</h2>
      <CodeBlock lang="go">{`import (
    acai "github.com/acai/analytics-go"
    "time"
)

config := acai.NewConfig("YOUR_API_KEY")
config.ServerURL      = "https://events.yourdomain.com/2/httpapi"
config.FlushQueueSize = 200
config.FlushInterval  = 10 * time.Second

client := acai.NewClient(config)
defer client.Shutdown()`}</CodeBlock>

      <h2 id="track">Track events</h2>
      <CodeBlock lang="go">{`client.Track(acai.Event{
    EventType: "Purchase Completed",
    UserID:    "user_abc123",
    EventProperties: acai.NewEventProperties().
        Set("product_id", "prod_123").
        Set("price",      49.99).
        Set("currency",   "USD"),
})

client.Flush()`}</CodeBlock>

      <h2 id="identify">Identify users</h2>
      <CodeBlock lang="go">{`identify := acai.NewIdentify().
    Set("plan",        "enterprise").
    SetOnce("first_seen", "2024-01-15").
    Add("api_calls",   1).
    Append("roles",    "admin").
    Unset("trial_active")

client.Identify(identify, acai.EventOptions{UserID: "user_abc123"})

// Group assignment
client.SetGroup("company", []string{"Acme Corp"}, acai.EventOptions{
    UserID: "user_abc123",
})

// Set properties on the group itself
groupIdentify := acai.NewIdentify().Set("tier", "enterprise")
client.GroupIdentify("company", "Acme Corp", groupIdentify, acai.EventOptions{})`}</CodeBlock>

      <h2 id="plugins">Plugins</h2>
      <CodeBlock lang="go">{`type ServerContextPlugin struct{}

func (p *ServerContextPlugin) Name() string             { return "server-context" }
func (p *ServerContextPlugin) Type() acai.PluginType    { return acai.PluginTypeEnrichment }
func (p *ServerContextPlugin) Setup(config acai.Config) {}
func (p *ServerContextPlugin) Execute(event *acai.Event) *acai.Event {
    if event.EventProperties == nil {
        event.EventProperties = map[string]interface{}{}
    }
    event.EventProperties["region"] = os.Getenv("AWS_REGION")
    return event
}

client.Add(&ServerContextPlugin{})`}</CodeBlock>

      <h2 id="config">Config reference</h2>
      <table className="docs-prop-table">
        <thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>APIKey</code></td><td>string</td><td>required</td><td>Your project API key.</td></tr>
          <tr><td><code>ServerURL</code></td><td>string</td><td>US endpoint</td><td>Collector endpoint.</td></tr>
          <tr><td><code>UseBatch</code></td><td>bool</td><td><code>false</code></td><td>Use the <code>/batch</code> endpoint.</td></tr>
          <tr><td><code>FlushInterval</code></td><td>time.Duration</td><td><code>10s</code></td><td>Periodic flush interval.</td></tr>
          <tr><td><code>FlushQueueSize</code></td><td>int</td><td><code>200</code></td><td>Max events per batch.</td></tr>
          <tr><td><code>FlushMaxRetries</code></td><td>int</td><td><code>12</code></td><td>Max retry attempts.</td></tr>
          <tr><td><code>ConnectionTimeout</code></td><td>time.Duration</td><td><code>10s</code></td><td>HTTP connection timeout.</td></tr>
          <tr><td><code>OptOut</code></td><td>bool</td><td><code>false</code></td><td>Disable all event sending.</td></tr>
          <tr><td><code>ExecuteCallback</code></td><td>func(ExecuteResult)</td><td><code>nil</code></td><td>Called after each event is processed.</td></tr>
        </tbody>
      </table>
    </>
  )
}
