import CodeBlock from '../../components/CodeBlock'

export const toc = [
  { id: 'install',  label: 'Installation',    level: 2 },
  { id: 'init',     label: 'Initialise',       level: 2 },
  { id: 'track',    label: 'Track events',     level: 2 },
  { id: 'identify', label: 'Identify users',   level: 2 },
  { id: 'plugins',  label: 'Plugins',          level: 2 },
  { id: 'config',   label: 'Config reference', level: 2 },
]

export default function PythonSDK() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <span className="docs-badge docs-badge-purple">Server SDK</span>
        <span className="docs-badge">v1.x</span>
        <span className="docs-badge docs-badge-green">MIT License</span>
      </div>

      <h1>Python SDK</h1>
      <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '24px' }}>
        <code>acai-analytics</code> is the Python server SDK. It processes events on a background thread, batches automatically, and supports a plugin pipeline for enrichment. Forked from <strong style={{ color: '#f6f6f1' }}>amplitude-analytics</strong> (MIT).
      </p>

      <h2 id="install">Installation</h2>
      <CodeBlock lang="bash">{`pip install acai-analytics`}</CodeBlock>

      <h2 id="init">Initialise</h2>
      <CodeBlock lang="python">{`from acai.client import Acai
from acai.config import Config

config = Config(
    api_key='YOUR_API_KEY',
    server_url='https://events.yourdomain.com/2/httpapi',
)

client = Acai('YOUR_API_KEY', configuration=config)`}</CodeBlock>

      <h2 id="track">Track events</h2>
      <CodeBlock lang="python">{`from acai.event import BaseEvent

client.track(
    BaseEvent(
        event_type='Purchase Completed',
        user_id='user_abc123',
        event_properties={
            'product_id': 'prod_123',
            'price': 49.99,
            'currency': 'USD',
        },
    )
)

# Flush buffered events
client.flush()

# Graceful shutdown (flushes then stops background thread)
client.shutdown()`}</CodeBlock>

      <div className="docs-callout docs-callout-info">
        <p>The SDK registers an <code>atexit</code> handler automatically, but calling <code>client.shutdown()</code> explicitly is recommended in long-running services.</p>
      </div>

      <h2 id="identify">Identify users</h2>
      <CodeBlock lang="python">{`from acai.event import Identify, EventOptions

identify = Identify()
identify.set('plan', 'enterprise')
identify.set_once('first_seen', '2024-01-15')
identify.add('api_call_count', 1)
identify.append('roles', 'admin')
identify.unset('trial_active')

client.identify(
    identify_obj=identify,
    event_options=EventOptions(user_id='user_abc123'),
)

# Group assignment
client.set_group(
    group_type='company',
    group_name='Acme Corp',
    event_options=EventOptions(user_id='user_abc123'),
)`}</CodeBlock>

      <h2 id="plugins">Plugins</h2>
      <CodeBlock lang="python">{`from acai.plugin import PluginType

class ServerContextPlugin:
    plugin_type = PluginType.ENRICHMENT

    def setup(self, client):
        pass

    def execute(self, event):
        event.event_properties = event.event_properties or {}
        event.event_properties['server_region'] = 'us-east-1'
        return event

client.add(ServerContextPlugin())`}</CodeBlock>

      <h2 id="config">Config reference</h2>
      <table className="docs-prop-table">
        <thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>api_key</code></td><td>str</td><td>required</td><td>Your project API key.</td></tr>
          <tr><td><code>server_url</code></td><td>str</td><td><code>None</code></td><td>Custom collector endpoint.</td></tr>
          <tr><td><code>flush_queue_size</code></td><td>int</td><td><code>200</code></td><td>Events per batch before flush.</td></tr>
          <tr><td><code>flush_interval_millis</code></td><td>int</td><td><code>10000</code></td><td>Max wait before flush (ms).</td></tr>
          <tr><td><code>flush_max_retries</code></td><td>int</td><td><code>12</code></td><td>Max retry attempts per batch.</td></tr>
          <tr><td><code>use_batch</code></td><td>bool</td><td><code>False</code></td><td>Use the <code>/batch</code> endpoint.</td></tr>
          <tr><td><code>opt_out</code></td><td>bool</td><td><code>False</code></td><td>Disable all event sending.</td></tr>
          <tr><td><code>min_id_length</code></td><td>int</td><td><code>None</code></td><td>Minimum length for user/device IDs.</td></tr>
          <tr><td><code>callback</code></td><td>callable</td><td><code>None</code></td><td>Called after each event: <code>(event, code, message)</code>.</td></tr>
          <tr><td><code>logger</code></td><td>Logger</td><td>default</td><td>Standard Python logging instance.</td></tr>
        </tbody>
      </table>
    </>
  )
}
