import { AnimatedCounter } from '../components/AnimatedCounter.jsx'
import { METRICS } from '../constants/index.jsx'

export function MetricsBar() {
  return (
    <section style={{ padding: '80px 0', background: '#fff', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="lp-wrap">
        <div className="lp-metrics-grid">
          {METRICS.map(m => <AnimatedCounter key={m.label} {...m} />)}
        </div>
      </div>
    </section>
  )
}
