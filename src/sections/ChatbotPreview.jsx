import { motion } from 'framer-motion'

const CHAT_MESSAGES = [
  { role: 'user', text: 'Why did DAU drop last Tuesday?' },
  {
    role: 'bot',
    text: 'DAU dropped 18% on Tuesday. Root cause: a deploy at 2pm caused checkout errors for mobile users (iOS 17+). 2,847 affected sessions.',
    hasChart: true,
  },
  { role: 'user', text: 'Which feature drives the most retention?' },
  {
    role: 'bot',
    text: "Users who complete 'Team Invite' within first 3 days have 4.2x higher 30-day retention. Currently only 23% reach this milestone.",
    hasChart: false,
  },
]

const MINI_SPARKLINE = [42, 45, 44, 38, 29, 27, 30, 33, 35]

function MiniSparkline() {
  const w = 80, h = 28
  const max = Math.max(...MINI_SPARKLINE)
  const min = Math.min(...MINI_SPARKLINE)
  const pts = MINI_SPARKLINE.map((v, i) => [
    (i / (MINI_SPARKLINE.length - 1)) * w,
    h - ((v - min) / (max - min)) * h * 0.85 + h * 0.075,
  ])
  const d = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block' }}>
      <path d={d} fill="none" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChatMessage({ msg, index }) {
  const isUser = msg.role === 'user'
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        alignItems: 'flex-end',
        gap: 8,
      }}
    >
      {/* Bot avatar */}
      {!isUser && (
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #7C3AED, #4F46E5)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginBottom: 2 }}>
          <svg viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.8" width="12" height="12">
            <circle cx="10" cy="10" r="8" /><path d="M7 8h.01M13 8h.01" /><path d="M7.5 13a4 4 0 0 0 5 0" />
          </svg>
        </div>
      )}

      <div style={{
        maxWidth: '72%',
        background: isUser ? '#F47B20' : 'rgba(255,255,255,0.07)',
        borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
        padding: '10px 14px',
        border: isUser ? 'none' : '1px solid rgba(255,255,255,0.1)',
      }}>
        <p style={{ fontSize: '0.82rem', color: isUser ? '#fff' : 'rgba(240,235,224,0.9)', lineHeight: 1.55, margin: 0, fontWeight: isUser ? 500 : 400 }}>
          {msg.text}
        </p>
        {msg.hasChart && (
          <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: 10 }}>
            <MiniSparkline />
            <div>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#EF4444' }}>-18% DAU</div>
              <div style={{ fontSize: '0.64rem', color: 'rgba(240,235,224,0.4)' }}>Tue vs Mon</div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function ChatbotPreview() {
  return (
    <section style={{ padding: '96px 0', background: '#FAFAF8', position: 'relative', overflow: 'hidden' }}>
      {/* Background blobs */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: 600, height: 600, top: '-10%', right: '-10%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)', filter: 'blur(70px)' }} />
        <div style={{ position: 'absolute', width: 500, height: 500, bottom: '-10%', left: '-5%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,123,32,0.06) 0%, transparent 65%)', filter: 'blur(70px)' }} />
      </div>

      <div className="lp-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 56, justifyContent: 'center' }}>

          {/* Left: text column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ maxWidth: 400, flex: '1 1 300px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F5F3FF', color: '#7C3AED', fontSize: '0.75rem', fontWeight: 700, padding: '6px 14px', borderRadius: 999, marginBottom: 18, border: '1px solid rgba(124,58,237,0.15)' }}>
              DS Bot · AI Analyst
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#0F172A', lineHeight: 1.15, marginBottom: 20 }}>
              Ask anything.<br />
              <span style={{ color: '#7C3AED', fontStyle: 'italic' }}>Get answers instantly.</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.7, fontWeight: 300, marginBottom: 28 }}>
              DS Bot is your embedded AI analyst. Type a question in plain English — it queries your data, finds anomalies, and explains the "why" behind every metric.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '⚡', label: 'No SQL required — ever' },
                { icon: '🔍', label: 'Root cause analysis in seconds' },
                { icon: '📊', label: 'Inline charts, tables, and insights' },
              ].map(({ icon, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: '0.9rem' }}>{icon}</span>
                  <span style={{ fontSize: '0.875rem', color: '#475569', fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: chat window */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ flex: '1 1 360px', maxWidth: 480, position: 'relative' }}
          >
            {/* Browser window */}
            <div style={{ background: '#0F172A', borderRadius: 20, overflow: 'hidden', boxShadow: '0 32px 64px rgba(15,23,42,0.22), 0 8px 24px rgba(0,0,0,0.1)', border: '1px solid rgba(255,255,255,0.06)' }}>
              {/* Browser chrome */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', background: '#1E293B', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'flex', gap: 5 }}>
                  {['#FF5F57','#FFBD2E','#28CA41'].map(c => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <div style={{ flex: 1, height: 22, background: 'rgba(255,255,255,0.07)', borderRadius: 6, display: 'flex', alignItems: 'center', paddingLeft: 8, gap: 5 }}>
                  <svg viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" width="9" height="9"><circle cx="7" cy="7" r="5"/><path d="M12 12l-2-2"/></svg>
                  <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>acaiplatform.ai/chat</span>
                </div>
              </div>

              {/* Chat body */}
              <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 14, minHeight: 320 }}>
                {CHAT_MESSAGES.map((msg, i) => (
                  <ChatMessage key={i} msg={msg} index={i} />
                ))}
              </div>

              {/* Input bar */}
              <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 12, padding: '9px 14px', fontSize: '0.8rem', color: 'rgba(240,235,224,0.3)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  Ask a question about your data...
                </div>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, cursor: 'pointer' }}>
                  <svg viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                    <line x1="2" y1="8" x2="14" y2="8" /><polyline points="9 3 14 8 9 13" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating "Powered by GPT-4o" badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'absolute',
                bottom: -16,
                right: 20,
                background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
                borderRadius: 12,
                padding: '7px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 7,
                boxShadow: '0 8px 24px rgba(124,58,237,0.35)',
              }}
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.8" width="13" height="13">
                <circle cx="10" cy="10" r="8" /><path d="M10 6v4l3 3" />
              </svg>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' }}>Powered by GPT-4o</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
