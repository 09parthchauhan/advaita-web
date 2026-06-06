import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './Platform.module.css'

// ─── Scroll reveal hook ───────────────────────────────────────────────────────
function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(entry.target) } },
      { threshold, rootMargin: '0px 0px -60px 0px' },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

// ─── Arrow icon ───────────────────────────────────────────────────────────────
function ArrowIcon() {
  return (
    <svg className="arrow-icon" width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

// ─── Full-width hero dashboard preview ────────────────────────────────────────
function HeroDashboard() {
  const navGroups = [
    {
      items: [
        { label: 'Home', active: true, icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 6.5L8 2l6 4.5V14a1 1 0 01-1 1H3a1 1 0 01-1-1V6.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg> },
        { label: 'Live Events', icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3"/><circle cx="8" cy="8" r="2.5" fill="currentColor" opacity="0.5"/></svg> },
        { label: 'Funnels', icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 3h12l-4.5 5v5l-3-1.5V8L2 3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg> },
        { label: 'Retention', icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2a6 6 0 100 12A6 6 0 008 2zm0 0v6l4 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg> },
        { label: 'Cohorts', icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="5.5" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3"/><circle cx="10.5" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3"/><path d="M1 14c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg> },
      ],
    },
    {
      label: 'ACAI PLATFORM',
      items: [
        { label: 'Chat', icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 3a1 1 0 011-1h10a1 1 0 011 1v7a1 1 0 01-1 1H5l-3 2V3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg> },
        { label: 'Dashboard', icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.3"/><rect x="9" y="2" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.3"/><rect x="2" y="9" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.3"/><rect x="9" y="9" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.3"/></svg> },
        { label: 'Deep Research', icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 10l3.5 3.5M2 7a5 5 0 1010 0A5 5 0 002 7z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg> },
      ],
    },
    {
      label: 'DATA',
      items: [
        { label: 'Raw Events', icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg> },
        { label: 'Export', icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2v8M5 7l3 3 3-3M3 12h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg> },
        { label: 'AI Training', icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.3"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.2 3.2l1.4 1.4M11.4 11.4l1.4 1.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg> },
      ],
    },
    {
      label: 'SETTINGS',
      items: [
        { label: 'Projects', icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/></svg> },
        { label: 'Team', icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="6" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.3"/><path d="M1 14c0-2.5 1.8-4 5-4s5 1.5 5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><path d="M11 7c1 0 3 .8 3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><circle cx="12" cy="4.5" r="2" stroke="currentColor" strokeWidth="1.3"/></svg> },
        { label: 'Billing', icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="4" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M1.5 7h13" stroke="currentColor" strokeWidth="1.3"/></svg> },
        { label: 'API Keys', icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="5.5" cy="9.5" r="3.5" stroke="currentColor" strokeWidth="1.3"/><path d="M8.5 7l5-5M13.5 2l1 1-1.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg> },
      ],
    },
  ]

  return (
    <div className={styles.heroDash} aria-label="Advaita platform preview">
      <aside className={styles.hdSidebar}>
        {/* Brand */}
        <div className={styles.hdBrand}>
          <img src="/logo.png" alt="" />
          <strong>ADVAITA INTELLIGENCE</strong>
        </div>
        {/* Project selector */}
        <div className={styles.hdProjectRow}>
          <span className={styles.hdSideSection}>Project</span>
          <div className={styles.hdProjectSelect}>
            <span className={styles.hdProjectDash}>–</span>
            <span>No project selected</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <button className={styles.hdNewProject}>+ New project</button>
        </div>
        {/* Nav groups */}
        <nav className={styles.hdNav}>
          {navGroups.map((group, gi) => (
            <div key={gi} className={styles.hdNavGroup}>
              {group.label && <span className={styles.hdSideSection}>{group.label}</span>}
              {group.items.map(({ label, active, icon }) => (
                <div key={label} className={active ? styles.hdNavActive : styles.hdNavItem}>
                  <span className={styles.hdNavIcon}>{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          ))}
        </nav>
        {/* AI Credits footer */}
        <div className={styles.hdCredits}>
          <div className={styles.hdCreditsRow}>
            <span>AI Credits</span>
            <strong>7,820 / 10,000</strong>
          </div>
          <div className={styles.hdCreditsBar}><div style={{ width: '78.2%' }} /></div>
          <div className={styles.hdUser}>
            <div>
              <span className={styles.hdUserName}>Local Demo User</span>
              <span className={styles.hdUserEmail}>demo@acaiplatform.ai</span>
            </div>
            <button className={styles.hdLogout}>Logout</button>
          </div>
        </div>
      </aside>
      <main className={styles.hdMain}>
        <div className={styles.hdHeader}>
          <div>
            <small>Hello, product team</small>
            <h3>Product command center</h3>
          </div>
          <div className={styles.hdSearch}><svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><circle cx="5.5" cy="5.5" r="4" stroke="currentColor" strokeWidth="1.2" /><path d="M9 9l2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg> Ask ACAI...</div>
        </div>
        {/* ── Stats row ── */}
        <div className={styles.hdStats}>
          {[['Events captured', '42k', '+12%'], ['AI Credits', '7,820', '/ 10k'], ['Capture health', '96%', 'Optimal'], ['Active funnels', '8', '3 updated']].map(([k, v, sub]) => (
            <article key={k}>
              <span>{k}</span>
              <strong style={k === 'Capture health' ? { color: '#4a9e1a' } : {}}>{v}</strong>
              <em>{sub}</em>
            </article>
          ))}
        </div>
        {/* ── Charts row ── */}
        <div className={styles.hdCharts}>
          <section className={styles.hdChartMain}>
            <header><strong>Activation trend</strong><em>+14.2% this week</em></header>
            <svg viewBox="0 0 480 110" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 90 C44 70 64 84 96 54 C130 22 158 72 192 44 C228 14 260 58 296 30 C330 4 360 32 480 12" fill="none" stroke="#f5820a" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M0 90 C44 70 64 84 96 54 C130 22 158 72 192 44 C228 14 260 58 296 30 C330 4 360 32 480 12 L480 110 L0 110 Z" fill="#f5820a" opacity="0.07" />
              <path d="M0 80 C50 62 84 76 124 56 C166 34 196 60 240 42 C286 22 318 50 480 36" fill="none" stroke="#4a9e1a" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            </svg>
          </section>
          <section className={styles.hdChartMini}>
            <strong>ACAI insight</strong>
            <p>Setup completion predicts stronger D7 retention across all cohorts.</p>
            <div className={styles.hdInsightTag}>View analysis →</div>
          </section>
          <section className={styles.hdChartMini}>
            <strong>D7 retention</strong>
            {[['New users', '72%'], ['Activated', '84%'], ['Returning', '58%']].map(([label, w]) => (
              <div key={label} className={styles.hdBarRow}>
                <span>{label}</span>
                <div className={styles.hdBar}><div style={{ width: w }} /></div>
                <em>{w}</em>
              </div>
            ))}
          </section>
        </div>
        {/* ── Funnel snapshot ── */}
        <div className={styles.hdFunnel}>
          <strong>Onboarding funnel</strong>
          <div className={styles.hdFunnelSteps}>
            {[['Sign up', '100%', 1240], ['SDK install', '68%', 843], ['First event', '51%', 632], ['Dashboard view', '38%', 471]].map(([label, pct, count], i) => (
              <div key={label} className={styles.hdFunnelStep}>
                <div className={styles.hdFunnelBar} style={{ width: pct }}>
                  <span style={{ opacity: i === 0 ? 0.5 : 1 }}>{label}</span>
                  <em>{count.toLocaleString()}</em>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

// ─── Overview: tall analytics card ───────────────────────────────────────────
function OverviewCard() {
  return (
    <div className={styles.ovCard} aria-label="Analytics overview card">
      <span className={styles.ovLabel}>EVENTS CAPTURED</span>
      <strong className={styles.ovValue}>42k</strong>
      <p className={styles.ovSub}>↑ 24% from last period</p>
      <div className={styles.ovChart}>
        <svg viewBox="0 0 360 190" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="ovGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f5820a" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#f5820a" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 150 C30 128 50 140 80 108 C112 72 138 124 170 88 C204 50 228 86 264 58 C298 30 326 52 360 28" fill="none" stroke="#f5820a" strokeWidth="2" strokeLinecap="round" />
          <path d="M0 150 C30 128 50 140 80 108 C112 72 138 124 170 88 C204 50 228 86 264 58 C298 30 326 52 360 28 L360 190 L0 190 Z" fill="url(#ovGrad)" />
          <circle cx="264" cy="58" r="5" fill="#f5820a" />
        </svg>
        <div className={styles.ovTooltip}>
          <span>29 July · 14:00</span>
          <strong>220,342 <em>+3.4%</em></strong>
        </div>
      </div>
      <div className={styles.ovBars}>
        {[68, 82, 54, 90, 72, 86, 64].map((w, i) => (
          <div key={i} className={styles.ovBar}><div style={{ width: `${w}%` }} /></div>
        ))}
      </div>
    </div>
  )
}

// ─── Capability card SVGs — clean modern, light background ────────────────────
function ACAISvg() {
  return (
    <svg viewBox="0 0 360 300" fill="none" className={styles.capSvg} aria-hidden="true">
      {/* Window chrome */}
      <rect x="28" y="20" width="304" height="260" rx="12" fill="#fff" stroke="#e8e5de" strokeWidth="1.5" />
      {/* Topbar */}
      <rect x="28" y="20" width="304" height="40" rx="12" fill="#fafaf8" />
      <rect x="28" y="46" width="304" height="14" fill="#fafaf8" />
      <circle cx="48" cy="40" r="9" fill="#f5820a" />
      <circle cx="46" cy="38" r="3.5" fill="rgba(255,255,255,0.5)" />
      <rect x="64" y="35" width="72" height="10" rx="3" fill="#111" opacity="0.8" />
      <rect x="144" y="37" width="50" height="6" rx="3" fill="#ccc" />
      {/* Dot badge */}
      <circle cx="310" cy="40" r="6" fill="#4a9e1a" />
      <rect x="290" y="37" width="14" height="6" rx="3" fill="#e5e5e0" />
      {/* Divider */}
      <line x1="28" y1="60" x2="332" y2="60" stroke="#e8e5de" strokeWidth="1" />
      {/* AI message bubble */}
      <circle cx="50" cy="88" r="11" fill="#f5820a" opacity="0.15" />
      <circle cx="50" cy="88" r="7" fill="#f5820a" />
      <rect x="68" y="76" width="180" height="38" rx="10" fill="#f6f6f1" stroke="#e8e5de" strokeWidth="1" />
      <rect x="78" y="84" width="130" height="7" rx="3.5" fill="#555" />
      <rect x="78" y="95" width="100" height="7" rx="3.5" fill="#999" />
      {/* User bubble */}
      <rect x="148" y="128" width="160" height="30" rx="10" fill="#f5820a" opacity="0.12" stroke="rgba(245,130,10,0.25)" strokeWidth="1" />
      <rect x="158" y="136" width="80" height="6" rx="3" fill="#f5820a" opacity="0.7" />
      <rect x="158" y="145" width="55" height="5" rx="2.5" fill="#f5820a" opacity="0.4" />
      {/* AI response 2 */}
      <circle cx="50" cy="184" r="7" fill="#f5820a" />
      <rect x="68" y="172" width="200" height="50" rx="10" fill="#f6f6f1" stroke="#e8e5de" strokeWidth="1" />
      <rect x="78" y="180" width="110" height="6" rx="3" fill="#555" />
      <rect x="78" y="190" width="160" height="6" rx="3" fill="#999" />
      <rect x="78" y="200" width="130" height="6" rx="3" fill="#bbb" />
      {/* Output tags */}
      <rect x="78" y="212" width="52" height="18" rx="9" fill="rgba(74,158,26,0.1)" stroke="rgba(74,158,26,0.25)" strokeWidth="1" />
      <rect x="81" y="218" width="46" height="6" rx="3" fill="#4a9e1a" opacity="0.6" />
      <rect x="138" y="212" width="44" height="18" rx="9" fill="rgba(245,130,10,0.1)" stroke="rgba(245,130,10,0.25)" strokeWidth="1" />
      <rect x="141" y="218" width="38" height="6" rx="3" fill="#f5820a" opacity="0.6" />
      {/* Input bar */}
      <rect x="36" y="244" width="248" height="28" rx="8" fill="#f6f6f1" stroke="#e8e5de" strokeWidth="1" />
      <rect x="48" y="254" width="100" height="8" rx="4" fill="#ccc" />
      <rect x="290" y="246" width="32" height="24" rx="7" fill="#f5820a" />
      <path d="M300 258l6-4v8l-6-4z" fill="white" />
    </svg>
  )
}

function DashboardSvg() {
  return (
    <svg viewBox="0 0 360 300" fill="none" className={styles.capSvg} aria-hidden="true">
      {/* Card bg */}
      <rect x="20" y="16" width="320" height="268" rx="12" fill="#fff" stroke="#e8e5de" strokeWidth="1.5" />
      {/* Header */}
      <rect x="20" y="16" width="320" height="36" rx="12" fill="#fafaf8" />
      <rect x="20" y="38" width="320" height="14" fill="#fafaf8" />
      <line x1="20" y1="52" x2="340" y2="52" stroke="#e8e5de" strokeWidth="1" />
      <rect x="32" y="26" width="80" height="8" rx="4" fill="#111" opacity="0.75" />
      <rect x="32" y="38" width="50" height="6" rx="3" fill="#ccc" />
      {/* Live badge */}
      <circle cx="316" cy="34" r="5" fill="#4a9e1a" />
      <rect x="296" y="30" width="16" height="8" rx="4" fill="#e5efe0" />
      {/* 4 stat cards */}
      {[
        { x: 32, label: 'Events', value: '42k', color: '#111' },
        { x: 108, label: 'Credits', value: '7.8k', color: '#111' },
        { x: 184, label: 'Health', value: '96%', color: '#4a9e1a' },
        { x: 260, label: 'Funnels', value: '8', color: '#111' },
      ].map(({ x, label, value, color }) => (
        <g key={label}>
          <rect x={x} y="62" width="68" height="50" rx="8" fill="#f8f8f6" stroke="#e8e5de" strokeWidth="1" />
          <text x={x + 9} y="78" fill="#999" fontSize="8" fontWeight="700">{label}</text>
          <text x={x + 9} y="96" fill={color} fontSize="17" fontWeight="600">{value}</text>
        </g>
      ))}
      {/* Chart */}
      <rect x="32" y="122" width="296" height="100" rx="8" fill="#fafaf8" stroke="#e8e5de" strokeWidth="1" />
      <text x="42" y="138" fill="#555" fontSize="9" fontWeight="700">Activation trend · +14.2%</text>
      <path d="M42 202 C66 182 82 192 112 164 C144 132 164 172 196 150 C228 126 252 148 296 126" fill="none" stroke="#f5820a" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M42 202 C66 182 82 192 112 164 C144 132 164 172 196 150 C228 126 252 148 296 126 L296 212 L42 212 Z" fill="#f5820a" opacity="0.06" />
      <path d="M42 196 C72 178 104 184 148 166 C188 148 222 164 296 148" fill="none" stroke="#4a9e1a" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
      {/* Tooltip */}
      <rect x="188" y="136" width="72" height="28" rx="5" fill="#111" />
      <text x="196" y="148" fill="rgba(255,255,255,0.55)" fontSize="7">Events/session</text>
      <text x="196" y="159" fill="white" fontSize="9" fontWeight="700">+14.2%</text>
      {/* Bottom row */}
      <rect x="32" y="232" width="140" height="38" rx="8" fill="#f8f8f6" stroke="#e8e5de" strokeWidth="1" />
      <text x="42" y="246" fill="#999" fontSize="8" fontWeight="700">ACAI INSIGHT</text>
      <rect x="42" y="251" width="80" height="5" rx="2.5" fill="#ccc" />
      <rect x="42" y="259" width="60" height="5" rx="2.5" fill="#e0e0e0" />
      <rect x="182" y="232" width="146" height="38" rx="8" fill="#fff7f0" stroke="rgba(245,130,10,0.2)" strokeWidth="1" />
      <text x="192" y="246" fill="#f5820a" fontSize="8" fontWeight="700">D7 RETENTION</text>
      {[[72, 0], [84, 10], [58, 20]].map(([w, dy]) => (
        <g key={dy}>
          <rect x="192" y={251 + dy} width="100" height="5" rx="2.5" fill="rgba(245,130,10,0.12)" />
          <rect x="192" y={251 + dy} width={w * 100 / 100} height="5" rx="2.5" fill="#f5820a" opacity="0.6" />
        </g>
      ))}
    </svg>
  )
}

function DataSvg() {
  const rows = [
    { field: 'event_type', val: 'page_view', status: 'valid', ok: true },
    { field: 'user_id', val: 'usr_48291', status: 'valid', ok: true },
    { field: 'session_id', val: 'ses_8f2c9', status: 'valid', ok: true },
    { field: 'properties', val: '{ … }', status: 'partial', ok: false },
    { field: 'schema_health', val: '96%', status: '96%', ok: null },
  ]
  return (
    <svg viewBox="0 0 360 300" fill="none" className={styles.capSvg} aria-hidden="true">
      {/* Window */}
      <rect x="20" y="16" width="320" height="268" rx="12" fill="#fff" stroke="#e8e5de" strokeWidth="1.5" />
      {/* Header bar */}
      <rect x="20" y="16" width="320" height="38" rx="12" fill="#fafaf8" />
      <rect x="20" y="40" width="320" height="14" fill="#fafaf8" />
      <line x1="20" y1="54" x2="340" y2="54" stroke="#e8e5de" strokeWidth="1" />
      <rect x="32" y="25" width="6" height="6" rx="3" fill="#f5820a" />
      <rect x="44" y="25" width="70" height="6" rx="3" fill="#111" opacity="0.75" />
      <rect x="122" y="25" width="4" height="6" rx="3" fill="#e0e0e0" />
      <circle cx="320" cy="28" r="5" fill="#4a9e1a" />
      <rect x="300" y="25" width="14" height="6" rx="3" fill="#e5efe0" />
      {/* Column headers */}
      {[['FIELD', 32], ['VALUE', 148], ['TYPE', 240], ['STATUS', 298]].map(([h, x]) => (
        <text key={h} x={x} y="70" fill="#bbb" fontSize="8" fontWeight="800">{h}</text>
      ))}
      <line x1="20" y1="74" x2="340" y2="74" stroke="#e8e5de" strokeWidth="1" />
      {/* Data rows */}
      {rows.map(({ field, val, ok }, i) => {
        const y = 74 + i * 38
        const isHL = i === 0
        return (
          <g key={field}>
            {isHL && <rect x="20" y={y} width="320" height="38" fill="rgba(245,130,10,0.04)" />}
            <text x="32" y={y + 23} fill="#444" fontSize="9" fontFamily="monospace">{field}</text>
            <text x="148" y={y + 23} fill="#777" fontSize="9" fontFamily="monospace">{val}</text>
            <rect x="236" y={y + 12} width="36" height="14" rx="4" fill="rgba(17,17,17,0.05)" />
            <text x="240" y={y + 23} fill="#999" fontSize="8">string</text>
            {ok === true && (
              <>
                <rect x="292" y={y + 12} width="36" height="14" rx="7" fill="rgba(74,158,26,0.1)" />
                <text x="297" y={y + 23} fill="#4a9e1a" fontSize="8" fontWeight="700">valid</text>
              </>
            )}
            {ok === false && (
              <>
                <rect x="292" y={y + 12} width="40" height="14" rx="7" fill="rgba(245,208,0,0.15)" />
                <text x="296" y={y + 23} fill="#b08a00" fontSize="8" fontWeight="700">partial</text>
              </>
            )}
            {ok === null && (
              <>
                <rect x="292" y={y + 12} width="36" height="14" rx="7" fill="rgba(245,130,10,0.1)" />
                <text x="297" y={y + 23} fill="#f5820a" fontSize="8" fontWeight="700">96%</text>
              </>
            )}
            <line x1="20" y1={y + 38} x2="340" y2={y + 38} stroke="#f0ede6" strokeWidth="1" />
          </g>
        )
      })}
    </svg>
  )
}

// ─── Workflow step cards ──────────────────────────────────────────────────────
function InputVisual() {
  return (
    <div className={styles.wfInputWrap}>
      <div className={styles.wfInputBox}>
        <span>user clicks "upgrade"</span>
        <span className={styles.wfCursor} />
      </div>
    </div>
  )
}

function SphereVisual() {
  return (
    <div className={styles.wfSphereWrap}>
      <svg viewBox="0 0 120 120" fill="none" className={styles.wfSphere} aria-hidden="true">
        <defs>
          <radialGradient id="sp1" cx="36%" cy="34%" r="60%">
            <stop offset="0%" stopColor="#f5d000" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#f5820a" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#7a3a06" stopOpacity="1" />
          </radialGradient>
          <radialGradient id="sp2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="52" fill="url(#sp1)" />
        <circle cx="60" cy="60" r="52" fill="url(#sp2)" />
        <ellipse cx="60" cy="60" rx="34" ry="52" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <ellipse cx="60" cy="60" rx="52" ry="22" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <ellipse cx="46" cy="44" rx="14" ry="10" fill="rgba(255,255,255,0.12)" style={{ transform: 'rotate(-30deg)', transformOrigin: '46px 44px' }} />
      </svg>
    </div>
  )
}

function OutputVisual() {
  const icons = [
    <svg key="grid" viewBox="0 0 22 22" fill="none"><rect x="2" y="2" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><rect x="12" y="2" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><rect x="2" y="12" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><rect x="12" y="12" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" /></svg>,
    <svg key="star" viewBox="0 0 22 22" fill="none"><path d="M11 2.5l2.6 5.4 5.9.86-4.27 4.16.98 5.87L11 15.9 5.79 18.8l.98-5.87L2.5 8.76l5.9-.86L11 2.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>,
    <svg key="chart" viewBox="0 0 22 22" fill="none"><rect x="2" y="12" width="4" height="8" rx="0.8" fill="currentColor" opacity="0.5" /><rect x="8" y="8" width="4" height="12" rx="0.8" fill="currentColor" opacity="0.7" /><rect x="14" y="4" width="4" height="16" rx="0.8" fill="currentColor" /><rect x="20" y="10" width="0" height="0" /></svg>,
    <svg key="plus" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.4" /><path d="M11 7v8M7 11h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>,
  ]
  return (
    <div className={styles.wfOutputWrap}>
      {icons.map((ic, i) => (
        <div key={i} className={styles.wfOutputIcon}>{ic}</div>
      ))}
    </div>
  )
}

// ─── Feature section static preview — Advaita platform ───────────────────────
function FeatStaticPreview() {
  return (
    <div className={styles.featPreviewInner} aria-label="Advaita platform">
      <div className={styles.fpTopBar}>
        <div className={styles.fpDots}><span /><span /><span /></div>
        <span>Advaita Intelligence · meetscribe</span>
        <div className={styles.fpLiveDot}><span /><em>Live</em></div>
      </div>
      <div className={styles.fpBody}>
        <aside className={styles.fpSide}>
          <div className={styles.fpBrand}><img src="/logo.png" alt="" /><strong>Advaita</strong></div>
          {[
            ['Home', false],
            ['Live Events', true],
            ['Funnels', false],
            ['Retention', false],
          ].map(([l, a]) => (
            <div key={l} className={a ? styles.fpSideLinkActive : styles.fpSideLink}>{l}</div>
          ))}
          <div className={styles.fpSideSection}>ACAI PLATFORM</div>
          {['Chat', 'Dashboard', 'Deep Research'].map(l => (
            <div key={l} className={styles.fpSideLink}>{l}</div>
          ))}
          <div className={styles.fpSideSection}>DATA</div>
          {['Raw Events', 'Export', 'AI Training'].map(l => (
            <div key={l} className={styles.fpSideLink}>{l}</div>
          ))}
        </aside>
        <main className={styles.fpMain}>
          {/* Stats row */}
          <div className={styles.fpStats}>
            {[['Events', '42k', '+12%'], ['Credits', '7,820', '/ 10k'], ['Health', '96%', ''], ['Funnels', '8', 'active']].map(([k, v, s]) => (
              <div key={k} className={styles.fpStat}>
                <span>{k}</span>
                <strong style={k === 'Health' ? { color: '#4a9e1a' } : {}}>{v}</strong>
                {s && <em>{s}</em>}
              </div>
            ))}
          </div>
          {/* Live event stream */}
          <div className={styles.fpStreamHead}>
            <span>Live event stream</span>
            <em className={styles.fpPulse}><span />Streaming</em>
          </div>
          <div className={styles.fpStream}>
            {[
              { ts: '14:32:01', evt: 'page_view', uid: 'usr_4829', ok: true },
              { ts: '14:32:00', evt: 'button_click', uid: 'usr_1124', ok: true },
              { ts: '14:31:58', evt: 'funnel_step', uid: 'usr_8821', ok: true },
              { ts: '14:31:55', evt: 'session_start', uid: 'usr_3310', ok: false },
              { ts: '14:31:52', evt: 'page_view', uid: 'usr_9921', ok: true },
            ].map(({ ts, evt, uid, ok }) => (
              <div key={ts + evt} className={styles.fpStreamRow}>
                <code className={styles.fpTs}>{ts}</code>
                <code className={styles.fpEvt}>{evt}</code>
                <code className={styles.fpUid}>{uid}</code>
                <span className={ok ? styles.fpOk : styles.fpWarn}>{ok ? 'valid' : 'warn'}</span>
              </div>
            ))}
          </div>
          {/* ACAI insight bar */}
          <div className={styles.fpAcaiBar}>
            <span className={styles.fpAcaiIcon}><img src="/logo.png" alt="" /></span>
            <p>Setup completion rate predicts D7 retention — users completing onboarding retain 3.2× better.</p>
          </div>
        </main>
      </div>
    </div>
  )
}

// ─── Page data ────────────────────────────────────────────────────────────────
const CAPABILITIES = [
  { id: 'acai', title: 'ACAI Analysis Agent', copy: 'Ask product-data questions in plain English. Get AI-generated answers, cohort charts, PDFs and Python scripts from your live clickstream data.', Svg: ACAISvg },
  { id: 'dash', title: 'Advaita Dashboard', copy: 'Project setup, connection health, AI credits, and command controls in one view. Everything your team needs before diving into analysis.', Svg: DashboardSvg },
  { id: 'data', title: 'Data Interface', copy: 'Inspect live events, validate schemas, review raw payloads and monitor capture quality before data reaches dashboards or agents.', Svg: DataSvg },
]

const FEATURES = [
  {
    title: 'Project command layer',
    copy: 'Keep project ID, SDK status, migration health, connection state and AI credits visible at a glance — a single control surface for every active project.',
  },
  {
    title: 'Live data interface',
    copy: 'Inspect captured events, field types, raw payloads and schema quality before data reaches dashboards or ACAI. Find issues at the source.',
  },
  {
    title: 'ACAI research workflow',
    copy: 'Ask plain-language questions and generate analysis answers, cohort charts, PDF summaries and executable Python scripts from the same clickstream data.',
  },
  {
    title: 'Operational monitoring',
    copy: 'Track capture health, setup completeness, data freshness and model-readiness across every active project in one reliable view.',
  },
]

const RELIABILITY_BULLETS = [
  'Real-time capture health across all SDK connections',
  'Schema quality gates before data reaches analysis',
  'Model-readiness scores for ACAI agent training data',
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function UnifiedPlatformPage() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [animating, setAnimating] = useState(false)

  const handleFeatureClick = (i) => {
    if (i === activeFeature || animating) return
    setAnimating(true)
    setActiveFeature(i)
    setTimeout(() => setAnimating(false), 320)
  }

  const [heroRef, heroVisible] = useReveal(0.05)
  const [ovRef, ovVisible] = useReveal()
  const [capRef, capVisible] = useReveal()
  const [wfRef, wfVisible] = useReveal()
  const [darkRef, darkVisible] = useReveal(0.06)

  return (
    <div className={styles.page}>
      <Navbar bg="#ffffff" />

      <main>
        {/* ═══ HERO ═══════════════════════════════════════════════════════ */}
        <section ref={heroRef} className={styles.hero}>
          <div className={styles.shell}>
            <div className={`${styles.heroCopy} scroll-reveal ${heroVisible ? 'is-visible' : ''}`}>
              <h1>
                <span className={styles.lineClip}><span className="anim-word-1">A foundation for modern</span></span>
                <span className={styles.lineClip}><span className="anim-word-2">product intelligence.</span></span>
              </h1>
              <p className="anim-sub">
                Advaita provides a structured platform for capturing, inspecting, and understanding product behavior — built around precision, scale, and AI-driven analysis.
              </p>
              <div className={`${styles.heroActions} anim-cta`}>
                <a href="https://signup.acaiplatform.ai/" className={styles.btnPrimary}>Open platform <ArrowIcon /></a>
                <a href="/docs#getting-started" className={styles.btnGhost}>View setup guide <ArrowIcon /></a>
              </div>
            </div>

            <div className={`${styles.heroPreviewWrap} anim-card-1`}>
              {/* Same gradient as KeyFeaturesSection */}
              <div className={styles.heroGradBg} />
              <svg className={styles.heroNoise} aria-hidden="true">
                <filter id="up-noise"><feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
                <rect width="100%" height="100%" filter="url(#up-noise)" />
              </svg>
              <HeroDashboard />
            </div>
          </div>
        </section>

        {/* ═══ PLATFORM OVERVIEW ══════════════════════════════════════════ */}
        <section ref={ovRef} className={styles.ovSection}>
          <div className={`${styles.shell} ${styles.ovGrid}`}>
            {/* LEFT — tall analytics visual */}
            <div className={`${styles.ovVisualWrap} scroll-reveal ${ovVisible ? 'is-visible' : ''}`}>
              <div className={styles.ovDarkBg} />
              <svg className={styles.ovNoise} aria-hidden="true">
                <filter id="ov-noise"><feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
                <rect width="100%" height="100%" filter="url(#ov-noise)" />
              </svg>
              <OverviewCard />
            </div>
            {/* RIGHT — content */}
            <div className={`${styles.ovContent} scroll-reveal-right ${ovVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.12s' }}>
              <h2>Designed around how product teams actually work.</h2>
              <p>Modern product analytics is defined by interconnected data, automated processes, and continuous feedback loops. Advaita is built to support this reality — a structured platform that adapts to every team and business model.</p>
              <a href="https://signup.acaiplatform.ai/" className={styles.btnPrimary}>Book a demo <ArrowIcon /></a>
            </div>
          </div>
        </section>

        {/* ═══ CORE CAPABILITIES ══════════════════════════════════════════ */}
        <section ref={capRef} className={styles.capSection}>
          <div className={styles.shell}>
            <div className={styles.centerHead}>
              <h2>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line ${capVisible ? 'is-visible' : ''}`}>Core capabilities that</span>
                </span>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line headline-reveal-line-2 ${capVisible ? 'is-visible' : ''}`}>scale with your product.</span>
                </span>
              </h2>
            </div>

            <div className={styles.capGrid}>
              {CAPABILITIES.map(({ id, title, copy, Svg }, i) => (
                <article
                  key={id}
                  className={`${styles.capCard} scroll-reveal ${capVisible ? 'is-visible' : ''}`}
                  style={{ transitionDelay: `${0.08 + i * 0.12}s` }}
                >
                  <div className={styles.capVisualWrap}>
                    <div className={styles.capGradBg} />
                    <svg className={styles.capNoise} aria-hidden="true">
                      <filter id={`cap-noise-${id}`}><feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
                      <rect width="100%" height="100%" filter={`url(#cap-noise-${id})`} />
                    </svg>
                    <Svg />
                  </div>
                  <div className={styles.capContent}>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ HOW PLATFORM WORKS ═════════════════════════════════════════ */}
        <section ref={wfRef} className={styles.wfSection}>
          <div className={styles.shell}>
            <div className={styles.centerHead}>
              <h2>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line ${wfVisible ? 'is-visible' : ''}`}>Structured for complex</span>
                </span>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line headline-reveal-line-2 ${wfVisible ? 'is-visible' : ''}`}>product workflows.</span>
                </span>
              </h2>
            </div>

            <div className={styles.wfCards}>
              <article className={`${styles.wfCard} scroll-reveal ${wfVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.06s' }}>
                <span className={styles.wfNum}>01</span>
                <InputVisual />
                <h3>Capture</h3>
                <p>Collect behavioral events from web, mobile, and backend SDKs into one validated stream.</p>
              </article>

              <article className={`${styles.wfCardFloat} scroll-reveal ${wfVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.18s' }}>
                <span className={styles.wfNum}>02</span>
                <SphereVisual />
                <h3>Understand</h3>
                <p>Validate schemas, inspect live data, and build cohort models before analysis begins.</p>
              </article>

              <article className={`${styles.wfCard} scroll-reveal ${wfVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
                <span className={styles.wfNum}>03</span>
                <OutputVisual />
                <h3>Act</h3>
                <p>Ask ACAI for insights, charts, PDF reports, and next steps grounded in real clickstream data.</p>
              </article>
            </div>

            <div className={`${styles.wfCta} scroll-reveal ${wfVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <a href="https://signup.acaiplatform.ai/" className={styles.btnPrimary}>Transform your product <ArrowIcon /></a>
            </div>
          </div>
        </section>

        {/* ═══ FEATURES + RELIABILITY (dark) ══════════════════════════════ */}
        <section ref={darkRef} className={styles.darkSection}>

          {/* ── Features ─────────────────────────── */}
          <div className={styles.featBlock}>
            <div className={`${styles.shell} ${styles.featGrid}`}>
              {/* LEFT — static preview (never changes) */}
              <div className={`${styles.featPreviewWrap} scroll-reveal ${darkVisible ? 'is-visible' : ''}`}>
                <div className={styles.featPrevBg} />
                <FeatStaticPreview />
              </div>

              {/* RIGHT — content list */}
              <div className={`scroll-reveal-right ${darkVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.14s' }}>
                <h2 className={styles.darkH2}>Designed to support real-world platforms.</h2>
                <div className={styles.featList}>
                  {FEATURES.map((f, i) => (
                    <button
                      key={f.title}
                      className={`${styles.featRow} ${activeFeature === i ? styles.featRowActive : ''}`}
                      onClick={() => handleFeatureClick(i)}
                    >
                      <span className={styles.featRowTitle}>{f.title}</span>
                      <p className={`${styles.featRowBody} ${activeFeature === i && animating ? styles.featBodyIn : ''}`}>{f.copy}</p>
                      <div className={styles.featRowLine} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Reliability ──────────────────────── */}
          <div className={styles.relBlock}>
            <div className={`${styles.shell} ${styles.relGrid}`}>
              {/* LEFT */}
              <div className={`scroll-reveal ${darkVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
                <h2 className={styles.darkH2}>Built for demanding<br />product environments.</h2>
                <p className={styles.relDesc}>Advaita includes dedicated monitoring for capture health, data quality, and model-readiness — supporting teams that operate continuously and at scale.</p>
                <ul className={styles.relList}>
                  {RELIABILITY_BULLETS.map(item => (
                    <li key={item}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 1l1.5 3.2 3.5.5-2.5 2.5.6 3.5L7 9.2 3.9 10.7l.6-3.5L2 4.7l3.5-.5L7 1z" fill="#f5820a" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* RIGHT — gauge card */}
              <div className={`scroll-reveal-right ${darkVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.22s' }}>
                <div className={styles.relVisualWrap}>
                  <div className={styles.relCrosshatch} />
                  <div className={styles.relCard}>
                    <span className={styles.relCardLabel}>Capture health</span>
                    <div className={styles.relGauge}>
                      <svg viewBox="0 0 220 130" fill="none" aria-hidden="true">
                        <path d="M24 112 A88 88 0 0 1 196 112" stroke="rgba(17,17,17,0.08)" strokeWidth="20" strokeLinecap="round" />
                        <path d="M24 112 A88 88 0 0 1 196 112" stroke="url(#relGrad)" strokeWidth="20" strokeLinecap="round" strokeDasharray="276" strokeDashoffset="16" />
                        <defs>
                          <linearGradient id="relGrad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#ef4444" />
                            <stop offset="42%" stopColor="#f5820a" />
                            <stop offset="72%" stopColor="#f5d000" />
                            <stop offset="100%" stopColor="#4a9e1a" />
                          </linearGradient>
                        </defs>
                        {/* Needle */}
                        <circle cx="188" cy="76" r="8" fill="#f5820a" />
                        <circle cx="188" cy="76" r="5" fill="white" />
                      </svg>
                      <div className={styles.relScore}><strong>96</strong></div>
                    </div>
                    <p className={styles.relCardTitle}>Your capture health is optimal</p>
                    <small className={styles.relCardDate}>Last checked 2 min ago</small>
                    <button className={styles.relCardBtn}>What these stats mean?</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  )
}
