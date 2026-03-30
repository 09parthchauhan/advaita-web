/* ─────────────────────────────────────────────────────────────
   MODULE-LEVEL CONSTANTS  (never redefined on render)
───────────────────────────────────────────────────────────── */

export const NAV_ITEMS = [
  {
    label: 'Product',
    links: [
      { label: 'Analytics',   desc: 'Track every event, every user' },
      { label: 'Funnels',     desc: 'Visualize conversion drop-off' },
      { label: 'Retention',   desc: 'Cohort analysis over any window' },
      { label: 'AI Insights', desc: 'Ask questions in plain English' },
    ],
  },
  {
    label: 'Solutions',
    links: [
      { label: 'Startups',     desc: 'Ship fast, learn faster' },
      { label: 'Enterprise',   desc: 'Scale with SOC2 compliance' },
      { label: 'Self-Hosted',  desc: 'Own your data, your infra' },
    ],
  },
  {
    label: 'Pricing',
    links: [
      { label: 'Plans',      desc: 'Free to enterprise tiers' },
      { label: 'Enterprise', desc: 'Custom contracts & SLAs' },
    ],
  },
  {
    label: 'Developers',
    links: [
      { label: 'SDK Docs',      desc: 'React, Node, Python, Go, Flutter' },
      { label: 'API Reference', desc: 'REST API & event schema' },
      { label: 'GitHub',        desc: 'Open source — star us' },
      { label: 'Changelog',     desc: "What's new in Advaita" },
    ],
  },
]

export const COMPANIES = [
  { name: 'Rakuten',    color: '#BF0000' },
  { name: 'Monday',     color: '#FF3D57' },
  { name: 'Disney',     color: '#1B4FFF' },
  { name: 'Dropbox',    color: '#0061FF' },
  { name: 'Stripe',     color: '#635BFF' },
  { name: 'Notion',     color: '#000000' },
  { name: 'Figma',      color: '#F24E1E' },
  { name: 'NCR',        color: '#0073CF' },
  { name: 'Shopify',    color: '#96BF48' },
  { name: 'Twilio',     color: '#F22F46' },
]

export const FEATURES = [
  {
    color: '#4F46E5', bg: 'rgba(79,70,229,0.08)',
    title: 'Real-time Ingestion',
    desc: 'Sub-5ms event capture with automatic schema detection across web, mobile, and backend.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    color: '#F47B20', bg: 'rgba(244,123,32,0.08)',
    title: 'AI Anomaly Detection',
    desc: 'Proactively surfaces unusual patterns before they become incidents — zero alert rules.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    color: '#0D9488', bg: 'rgba(13,148,136,0.08)',
    title: 'Natural Language Queries',
    desc: 'Ask "which feature drives retention?" and get SQL-free answers in seconds.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    color: '#C026D3', bg: 'rgba(192,38,211,0.08)',
    title: 'Funnel & Retention',
    desc: 'Visualize conversion drop-off and measure cohort retention over any time window.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    color: '#059669', bg: 'rgba(5,150,105,0.08)',
    title: 'Privacy First',
    desc: 'GDPR-compliant by default. Self-host or cloud. You always own your event data.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    color: '#7C3AED', bg: 'rgba(124,58,237,0.08)',
    title: 'DS Bot',
    desc: 'Your embedded AI analyst. Builds reports, finds anomalies, answers "why" questions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><path d="M8 15h.01" /><path d="M16 15h.01" />
      </svg>
    ),
  },
]

export const METRICS = [
  { value: 10,   suffix: 'B+', label: 'Events / day' },
  { value: 1.4,  suffix: 'M+', label: 'Engineers' },
  { value: 5,    prefix: '<',  suffix: 'ms', label: 'Latency' },
  { value: 99.9, suffix: '%',  label: 'Uptime' },
]

export const STEPS = [
  { n: '01', color: '#4F46E5', title: 'Install the SDK', desc: 'npm install @advaita/acai — SDKs for React, Node, Python, Go, Flutter.' },
  { n: '02', color: '#F47B20', title: 'Track any event',  desc: 'analytics.track() sends events in real-time with automatic schema detection.' },
  { n: '03', color: '#0D9488', title: 'Ask, don\'t query', desc: 'Type a question in plain English. DS Bot answers instantly — no SQL.' },
]

export const EVENT_DATA = [
  { name: 'Button Clicked',   user: 'u_7k2m', color: '#4F46E5' },
  { name: 'Page Viewed',      user: 'u_3x9p', color: '#0D9488' },
  { name: 'Checkout Started', user: 'u_9z2b', color: '#F47B20' },
  { name: 'User Identified',  user: 'u_1a4q', color: '#059669' },
  { name: 'Form Submitted',   user: 'u_5m8c', color: '#C026D3' },
]

export const FOOTER_LINKS = {
  Product:   ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Developers:['Documentation', 'SDK Reference', 'API', 'Status'],
  Company:   ['About', 'Blog', 'Careers', 'Privacy', 'Terms'],
}

export const SPARKLINE_PTS = [18, 28, 22, 40, 35, 50, 44, 62, 58, 74, 70, 86]

/* ─────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────────────────────── */

export const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}
