import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ── SDK tab data (reused from original) ─────────────────── */

const SDK_TABS = [
  {
    id: 'typescript',
    label: 'TypeScript',
    color: '#3178C6',
    install: 'npm install @advaita/acai',
    filename: 'analytics.ts',
    code: `import { AcaiAnalytics } from '@advaita/acai'

const analytics = new AcaiAnalytics({
  writeKey: 'YOUR_WRITE_KEY',
  flushInterval: 500,
})

// Track any event
analytics.track('Button Clicked', {
  page: 'dashboard',
  component: 'upgrade-cta',
  userId: currentUser.id,
})

// Identify a user with traits
analytics.identify(userId, {
  name: 'Jane Smith',
  plan: 'pro',
  company: 'Acme Corp',
})

// That's it. AI does the rest.`,
  },
  {
    id: 'python',
    label: 'Python',
    color: '#F5D000',
    install: 'pip install acai-python',
    filename: 'analytics.py',
    code: `from acai import Analytics

analytics = Analytics(
    write_key="YOUR_WRITE_KEY",
    flush_interval=0.5,
    batch_size=100,
)

# Track an event
analytics.track(
    user_id="user_123",
    event="Purchase Completed",
    properties={
        "revenue": 49.99,
        "plan": "pro",
        "currency": "USD",
    },
)

# Identify a user
analytics.identify(
    user_id="user_123",
    traits={"email": "jane@acme.com"},
)`,
  },
  {
    id: 'go',
    label: 'Go',
    color: '#00ACD7',
    install: 'go get github.com/advaita/acai-go',
    filename: 'main.go',
    code: `package main

import "github.com/advaita/acai-go"

func main() {
    client := acai.New(acai.Config{
        WriteKey:      "YOUR_WRITE_KEY",
        FlushInterval: 500 * time.Millisecond,
    })
    defer client.Close()

    // Track an event
    client.Track(acai.Track{
        UserId: "user_123",
        Event:  "Signup Completed",
        Properties: map[string]interface{}{
            "plan":   "pro",
            "source": "organic",
        },
    })
}`,
  },
  {
    id: 'kotlin',
    label: 'Kotlin',
    color: '#A97BFF',
    install: 'implementation("io.advaita:acai-kotlin:1.0.0")',
    filename: 'Analytics.kt',
    code: `import io.advaita.acai.Analytics
import io.advaita.acai.TrackEvent

val analytics = Analytics.Builder(
    context = applicationContext,
    writeKey = "YOUR_WRITE_KEY"
).build()

// Track an event
analytics.track(TrackEvent(
    event = "Screen Viewed",
    properties = buildJsonObject {
        put("screen", "Dashboard")
        put("userId", currentUser.id)
    }
))

// Identify a user
analytics.identify(
    userId = currentUser.id,
    traits = buildJsonObject {
        put("plan", "pro")
    }
)`,
  },
  {
    id: 'flutter',
    label: 'Flutter',
    color: '#54C5F8',
    install: 'flutter pub add acai_flutter',
    filename: 'main.dart',
    code: `import 'package:acai_flutter/acai_flutter.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  final analytics = await Analytics.create(
    Configuration(
      writeKey: 'YOUR_WRITE_KEY',
      flushInterval: const Duration(milliseconds: 500),
    ),
  );

  // Track an event
  analytics.track('App Opened', properties: {
    'version': '2.1.0',
    'platform': Platform.operatingSystem,
  });

  // Identify a user
  analytics.identify(userId: 'user_123',
    traits: {'plan': 'pro'});
}`,
  },
]

/* ── Syntax highlighter ──────────────────────────────────── */

function TokenizedCode({ code }) {
  const lines = code.split('\n')

  const tokenize = (line, idx) => {
    const keywords = ['import', 'from', 'const', 'let', 'var', 'new', 'return',
      'func', 'package', 'main', 'defer', 'val', 'fun', 'void', 'async', 'await',
      'class', 'def', 'for', 'if', 'else', 'in', 'with']

    let colored = line
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

    colored = colored.replace(/(\/\/[^\n]*|#[^\n]*)/g, '<span style="color:rgba(148,163,184,0.45)">$1</span>')
    colored = colored.replace(/('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`)/g, '<span style="color:#86EFAC">$1</span>')
    colored = colored.replace(/\b(\d+\.?\d*)\b/g, '<span style="color:#FCD34D">$1</span>')
    keywords.forEach(kw => {
      colored = colored.replace(new RegExp(`\\b(${kw})\\b`, 'g'), '<span style="color:#93C5FD">$1</span>')
    })
    colored = colored.replace(/\.([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, '.<span style="color:#F9A8D4">$1</span>(')

    return (
      <div key={idx} style={{ display: 'flex', lineHeight: 1.75 }}>
        <span style={{ color: 'rgba(148,163,184,0.2)', userSelect: 'none', fontSize: '0.7rem', minWidth: 32, textAlign: 'right', paddingRight: 16, marginTop: 1, fontFamily: 'monospace' }}>
          {idx + 1}
        </span>
        <span style={{ whiteSpace: 'pre' }} dangerouslySetInnerHTML={{ __html: colored }} />
      </div>
    )
  }

  return (
    <div style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace", fontSize: '0.73rem', color: '#E2E8F0' }}>
      {lines.map((line, i) => tokenize(line, i))}
    </div>
  )
}

/* ── Preview card (overlaps bottom of code window) ────────── */

function PreviewCard({ eventsTracked }) {
  const barPct = Math.min(100, (eventsTracked / 5000) * 100)
  return (
    <div style={{
      background: '#ffffff',
      borderRadius: 16,
      padding: '20px 24px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
      display: 'flex',
      alignItems: 'center',
      gap: 20,
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#999', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: "'Manrope', sans-serif" }}>
          Events Tracked
        </div>
        <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#111', fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1, marginBottom: 10 }}>
          {eventsTracked.toLocaleString()}
        </div>
        <div style={{ height: 5, background: '#F0F0F0', borderRadius: 999 }}>
          <motion.div
            animate={{ width: `${barPct}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ height: '100%', background: 'linear-gradient(90deg, #F47B20, #F5D000)', borderRadius: 999 }}
          />
        </div>
        <div style={{ fontSize: '0.62rem', color: '#999', marginTop: 5, fontFamily: "'Manrope', sans-serif" }}>
          {barPct.toFixed(0)}% of daily limit
        </div>
      </div>
      <div style={{ flexShrink: 0, textAlign: 'center' }}>
        <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(244,123,32,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 6px' }}>
          <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
            <path d="M10 2v4M10 14v4M2 10h4M14 10h4" stroke="#F47B20" strokeWidth="2" strokeLinecap="round" />
            <circle cx="10" cy="10" r="3" fill="#F47B20" />
          </svg>
        </div>
        <div style={{ fontSize: '0.6rem', color: '#F47B20', fontWeight: 700, fontFamily: "'Manrope', sans-serif" }}>Live</div>
      </div>
    </div>
  )
}

/* ── Main component ──────────────────────────────────────── */

const EVENT_COUNTS = { typescript: 3847, python: 2156, go: 4921, kotlin: 1284, flutter: 987 }

export function SDKShowcase() {
  const [activeTab, setActiveTab] = useState('typescript')
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const activeSDK = SDK_TABS.find(t => t.id === activeTab)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <section style={{
      background: '#0F0F1A',
      padding: isMobile ? '64px 0 80px' : '96px 0 120px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background atmosphere */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          width: 700, height: 700,
          top: '-20%', left: '50%', transform: 'translateX(-50%)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244,123,32,0.07) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
      </div>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <h2 style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#ffffff',
            margin: '0 0 16px',
            letterSpacing: '-0.03em',
          }}>
            More insight, less{' '}
            <span style={{ color: '#555' }}>code</span>
          </h2>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: '1rem',
            color: '#999',
            maxWidth: 560,
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Drop in one of our SDKs and start tracking events in under 5 minutes. Works with TypeScript, Python, Go, Kotlin, and Flutter.
          </p>
        </motion.div>

        {/* Install pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '7px 14px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 8,
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            fontSize: '0.72rem',
            color: 'rgba(255,255,255,0.4)',
          }}>
            <span style={{ color: '#F47B20', fontSize: '0.65rem' }}>▸</span>
            {activeSDK.install}
          </div>
        </motion.div>

        {/* Code window */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div style={{
            background: '#1C1C2E',
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.08)',
            overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
            marginBottom: -40,
          }}>
            {/* Window chrome */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '12px 16px',
              background: '#111111',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div style={{ display: 'flex', gap: 5 }}>
                {['#FF5F57', '#FFBD2E', '#28CA41'].map(c => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }} />
                ))}
              </div>
              <div style={{
                flex: 1, height: 22,
                background: 'rgba(255,255,255,0.04)',
                borderRadius: 6, display: 'flex', alignItems: 'center', paddingLeft: 8,
              }}>
                <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.22)', fontFamily: 'monospace' }}>
                  {activeSDK.filename}
                </span>
              </div>
            </div>

            {/* Tab bar */}
            <div style={{
              display: 'flex',
              padding: '0 16px',
              background: '#111111',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              overflowX: 'auto',
              gap: 2,
            }}>
              {SDK_TABS.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '10px 14px',
                    background: 'none',
                    border: 'none',
                    borderBottom: activeTab === tab.id ? `2px solid ${tab.color}` : '2px solid transparent',
                    color: activeTab === tab.id ? tab.color : 'rgba(255,255,255,0.32)',
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'color 0.15s',
                    whiteSpace: 'nowrap',
                    fontFamily: "'Manrope', sans-serif",
                  }}
                  onMouseEnter={e => { if (activeTab !== tab.id) e.currentTarget.style.color = 'rgba(255,255,255,0.65)' }}
                  onMouseLeave={e => { if (activeTab !== tab.id) e.currentTarget.style.color = 'rgba(255,255,255,0.32)' }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Code body */}
            <div style={{ padding: '20px 20px 52px', maxHeight: 320, overflowY: 'auto', overflowX: 'auto' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                >
                  <TokenizedCode code={activeSDK.code} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Preview card — overlaps bottom of code window */}
          <div style={{ position: 'relative', zIndex: 2, padding: '0 40px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.35 }}
              >
                <PreviewCard eventsTracked={EVENT_COUNTS[activeTab]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
