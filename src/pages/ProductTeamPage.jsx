import { useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './ProductTeamPage.module.css'

// ─── Team copy ────────────────────────────────────────────────────────────────
const TEAM_COPY = {
  product: {
    eyebrow: 'Product Teams',
    headlineLines: ['See where users drop and', 'what to build next.'],
    copy: 'Advaita turns clickstream events into clear product analysis — funnels, cohorts, activation, retention and rapidly moving product surfaces in one view.',
    primary: 'Start product analysis',
    secondary: 'View setup guide',
    workflowHeadline: 'How product teams move from signal to decision.',
    workflowKicker: 'Product Analysis',
    loopHeadline: 'Turn product questions into repeatable analysis loops.',
    focus: ['Funnels', 'Drop-off users', 'Feature velocity', 'Retention cohorts'],
    snippets: [
      {
        type: 'funnel',
        title: 'Onboarding Funnel',
        steps: [
          { label: 'Sign up',       pct: 100 },
          { label: 'Profile setup', pct: 78  },
          { label: 'First report',  pct: 52  },
          { label: 'Invite team',   pct: 34  },
        ],
        foot: '34% reach full activation',
        tone: 'orange',
      },
      {
        type: 'bars',
        title: 'Retention Cohort',
        bigValue: '+12%',
        bigLabel: 'vs last month',
        rows: [
          { label: 'D1',  pct: 81 },
          { label: 'D7',  pct: 62 },
          { label: 'D30', pct: 44 },
        ],
        foot: 'High-intent teams retain fastest',
        tone: 'green',
      },
    ],
    evidence: [
      { label: 'Activation rate', value: '42%',  detail: '+8% after onboarding fix' },
      { label: 'Top drop-off',    value: 'Step 3', detail: '1,284 users left at plan_selected' },
      { label: 'Fastest mover',   value: 'AI chat', detail: '3.2× usage after launch' },
    ],
    plays: [
      'Compare first-session behaviour against retained users.',
      'Review cohorts before shipping an onboarding change.',
      'Ask ACAI to summarize the biggest weekly product movement.',
    ],
  },

  growth: {
    eyebrow: 'Growth Teams',
    headlineLines: ['Connect acquisition, activation', 'and retention in one place.'],
    copy: 'Track the journeys that convert, spot weak segments, and ask ACAI why campaigns or onboarding flows are moving — or stalling.',
    primary: 'Start growth analysis',
    secondary: 'Explore Data Interface',
    workflowHeadline: 'How growth teams connect campaigns to retained users.',
    workflowKicker: 'Growth Analysis',
    loopHeadline: 'Turn growth questions into repeatable acquisition loops.',
    focus: ['Activation lift', 'Campaign cohorts', 'Conversion paths', 'Churn signals'],
    snippets: [
      {
        type: 'funnel',
        title: 'Acquisition Sources',
        steps: [
          { label: 'Organic',     pct: 100 },
          { label: 'Paid search', pct: 74  },
          { label: 'Social',      pct: 48  },
          { label: 'Direct',      pct: 31  },
        ],
        foot: 'Organic activates 9% higher than paid',
        tone: 'orange',
      },
      {
        type: 'bars',
        title: 'Expansion Signals',
        bigValue: '+22%',
        bigLabel: 'workspace invites this week',
        rows: [
          { label: 'Workspace invites', pct: 78 },
          { label: 'Shared reports',    pct: 54 },
          { label: 'API usage',         pct: 32 },
        ],
        foot: 'Invites predict 3× long-term retention',
        tone: 'green',
      },
    ],
    evidence: [
      { label: 'Campaign lift',   value: '18%',   detail: 'organic cohort outperformed paid' },
      { label: 'Activation gap',  value: 'Day 1', detail: 'users stall before first insight' },
      { label: 'Churn signal',    value: 'Low events', detail: 'quiet accounts need recovery' },
    ],
    plays: [
      'Trace campaign traffic into activation and repeat usage.',
      'Segment churn by source, plan, and workspace activity.',
      'Generate a weekly growth narrative with charts attached.',
    ],
  },

  data: {
    eyebrow: 'Data Teams',
    headlineLines: ['Keep product signals clean,', 'typed and ready for analysis.'],
    copy: 'Validate event capture, inspect schema quality, monitor pipeline health and prepare behavioural data for AI-powered analysis.',
    primary: 'Inspect data quality',
    secondary: 'Read docs',
    workflowHeadline: 'How data teams keep product analysis trustworthy.',
    workflowKicker: 'Data Quality',
    loopHeadline: 'Turn schema gaps into clean, trusted data loops.',
    focus: ['Schema health', 'Live events', 'Property quality', 'AI-ready data'],
    snippets: [
      {
        type: 'ring',
        title: 'Event Coverage',
        pct: 96,
        desc: 'events carry required identifiers',
        checks: [
          { label: 'user_id coverage',    ok: true,  status: 'stable'   },
          { label: 'device_id mapping',   ok: true,  status: 'stable'   },
          { label: 'session.source',      ok: false, status: 'missing'  },
        ],
        foot: '4% flagged for identifier review',
        tone: 'green',
      },
      {
        type: 'schema',
        title: 'Schema Health',
        bigValue: '7',
        valueLabel: 'properties need review',
        checks: [
          { label: 'checkout.product_id', ok: false, status: 'unmapped' },
          { label: 'session.referrer',    ok: false, status: 'missing'  },
          { label: 'user.plan_type',      ok: true,  status: 'clean'    },
          { label: 'event.source',        ok: true,  status: 'clean'    },
        ],
        foot: 'Mostly unmapped checkout fields',
        tone: 'orange',
      },
    ],
    evidence: [
      { label: 'Schema coverage', value: '96%',  detail: 'core identifiers mapped' },
      { label: 'Live capture',    value: '2.8k', detail: 'events checked this hour' },
      { label: 'AI-ready fields', value: '34',   detail: 'typed properties approved' },
    ],
    plays: [
      'Review raw event shape before teams build dashboards.',
      'Spot missing identifiers and noisy custom properties.',
      'Prepare trusted datasets for analysis agents and exports.',
    ],
  },
}

const WORKFLOW_CARDS = {
  product: [
    { title: 'Map the funnel',            copy: 'Create funnels from onboarding, checkout, feature adoption or any custom journey your team wants to improve.' },
    { title: 'Find the users who dropped', copy: 'Inspect the exact users, sessions and events behind every drop-off instead of guessing from aggregate charts.' },
    { title: 'Track product movement',     copy: 'Watch new launches, experiment branches and feature usage move as soon as clickstream events arrive.' },
    { title: 'Ask what changed',           copy: 'Use ACAI to explain metric shifts, compare cohorts and generate charts or reports from the same product data.' },
  ],
  growth: [
    { title: 'Trace the acquisition source', copy: 'Map each campaign, channel and referrer to the users it produces and see how far down the funnel they travel.' },
    { title: 'Find the activation gap',      copy: 'Identify the step where paid and organic cohorts diverge and understand whether the gap is onboarding, product or timing.' },
    { title: 'Segment churn by cohort',      copy: 'Break churn into source, plan and engagement slices so recovery plays target the right users.' },
    { title: 'Generate a growth narrative',  copy: 'Ask ACAI to summarise weekly campaign performance, activation rates and expansion signals in one report.' },
  ],
  data: [
    { title: 'Validate live event capture', copy: 'Confirm that events are firing with the right identifiers, properties and timestamps before dashboards are built on top.' },
    { title: 'Inspect property quality',    copy: 'Surface unmapped, missing or noisy custom properties and route fixes to the right engineering owner.' },
    { title: 'Monitor pipeline health',     copy: 'Track event volume trends, schema drift alerts and capture gaps so problems surface before they reach analysts.' },
    { title: 'Prepare AI-ready data',       copy: 'Type, clean and approve the fields that power ACAI analysis so every answer is grounded in trusted behavioural data.' },
  ],
}

const ANALYSIS_LOOPS = {
  product: [
    { title: 'Start with the journey',   copy: 'Choose the signup, activation, purchase or feature path that matters this week and turn it into a measured funnel.' },
    { title: 'Inspect the breakpoints',  copy: 'Open the users behind each drop-off, compare their properties and identify whether the issue is product, segment or timing.' },
    { title: 'Ship the next move',       copy: 'Use the same data to brief the team, generate a chart and monitor whether the product change improved the metric.' },
  ],
  growth: [
    { title: 'Start with the source',    copy: 'Pick the campaign or channel with the biggest volume and trace it from first click to activation and beyond.' },
    { title: 'Find where growth stalls', copy: 'Compare activation rates across cohorts, spot the step with the biggest gap and identify whether it is product or messaging.' },
    { title: 'Close the loop',           copy: 'Take the retention or expansion signal back to the campaign — adjust spend, creative or onboarding and measure the change.' },
  ],
  data: [
    { title: 'Audit the schema',         copy: 'Pull the full event list, check identifier coverage and flag any properties that are missing, duplicated or incorrectly typed.' },
    { title: 'Route the gaps',           copy: 'Assign missing or broken fields to engineering owners, track fix status and verify capture in the live stream.' },
    { title: 'Ship clean data',          copy: 'Mark approved fields as AI-ready, export the trusted dataset and confirm that downstream analysis is grounded in verified events.' },
  ],
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function useSectionReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function ArrowIcon() {
  return (
    <svg className="arrow-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

// ─── Snippet card types ───────────────────────────────────────────────────────

function FunnelCard({ card, animated }) {
  const accent = card.tone === 'green' ? '#4a9e1a' : '#f5820a'
  return (
    <article className={styles.snippetCard}>
      <div className={styles.snippetHead}>
        <span className={styles.snippetTitle}>{card.title}</span>
        <span className={styles.snippetPeriod}>Last 30 days</span>
      </div>
      <div className={styles.funnelBody}>
        {card.steps.map((step, i) => (
          <div key={step.label} className={styles.funnelRow}>
            <div className={styles.funnelMeta}>
              <span className={styles.funnelLabel}>{step.label}</span>
              <span className={styles.funnelPct} style={{ color: accent }}>{step.pct}%</span>
            </div>
            <div className={styles.funnelTrack}>
              <div
                className={styles.funnelBar}
                style={{
                  width: animated ? `${step.pct}%` : '0%',
                  background: accent,
                  opacity: 1 - i * 0.14,
                  transitionDelay: `${0.08 + i * 0.14}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.snippetFoot}>{card.foot}</div>
    </article>
  )
}

function BarsCard({ card, animated }) {
  const accent = card.tone === 'green' ? '#4a9e1a' : '#f5820a'
  return (
    <article className={styles.snippetCard}>
      <div className={styles.snippetHead}>
        <span className={styles.snippetTitle}>{card.title}</span>
        <span className={styles.snippetPeriod}>Last 30 days</span>
      </div>
      <div className={styles.barsBody}>
        <div className={styles.barsHero}>
          <strong style={{ color: accent }}>{card.bigValue}</strong>
          <span>{card.bigLabel}</span>
        </div>
        <div className={styles.barsList}>
          {card.rows.map((row, i) => (
            <div key={row.label} className={styles.barsRow}>
              <span className={styles.barsLabel}>{row.label}</span>
              <div className={styles.barsTrack}>
                <div
                  className={styles.barsBar}
                  style={{
                    width: animated ? `${row.pct}%` : '0%',
                    background: accent,
                    transitionDelay: `${0.1 + i * 0.12}s`,
                  }}
                />
              </div>
              <span className={styles.barsPct}>{row.pct}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.snippetFoot}>{card.foot}</div>
    </article>
  )
}

function RingCard({ card, animated }) {
  const r = 50
  const circ = 2 * Math.PI * r
  const offset = animated ? circ * (1 - card.pct / 100) : circ
  return (
    <article className={styles.snippetCard}>
      <div className={styles.snippetHead}>
        <span className={styles.snippetTitle}>{card.title}</span>
        <span className={styles.snippetPeriod}>Live</span>
      </div>
      <div className={styles.ringBody}>
        <div className={styles.ringWrap}>
          <svg width="130" height="130" viewBox="0 0 130 130" aria-hidden="true">
            <circle cx="65" cy="65" r={r} fill="none" stroke="rgba(17,17,17,0.07)" strokeWidth="10" />
            <circle
              cx="65" cy="65" r={r} fill="none"
              stroke="#4a9e1a" strokeWidth="10"
              strokeDasharray={circ}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform="rotate(-90 65 65)"
              style={{ transition: 'stroke-dashoffset 1.6s cubic-bezier(0.16,1,0.3,1)' }}
            />
          </svg>
          <div className={styles.ringCenter}>
            <strong>{card.pct}%</strong>
          </div>
        </div>
        <div className={styles.ringMeta}>
          <p className={styles.ringDesc}>{card.desc}</p>
          {card.checks.map(c => (
            <div key={c.label} className={styles.ringCheck}>
              <span style={{ color: c.ok ? '#4a9e1a' : '#f5820a', fontWeight: 700 }}>{c.ok ? '✓' : '⚠'}</span>
              <span className={styles.ringCheckLabel}>{c.label}</span>
              <span className={styles.ringCheckStatus} style={{ color: c.ok ? '#4a9e1a' : '#f5820a' }}>{c.status}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.snippetFoot}>{card.foot}</div>
    </article>
  )
}

function SchemaCard({ card }) {
  return (
    <article className={styles.snippetCard}>
      <div className={styles.snippetHead}>
        <span className={styles.snippetTitle}>{card.title}</span>
        <span className={styles.snippetPeriod}>Live</span>
      </div>
      <div className={styles.schemaBody}>
        <div className={styles.schemaBig}>
          <strong style={{ color: '#f5820a' }}>{card.bigValue}</strong>
          <span>{card.valueLabel}</span>
        </div>
        <div className={styles.schemaChecks}>
          {card.checks.map(c => (
            <div key={c.label} className={`${styles.schemaRow} ${c.ok ? styles.schemaOk : styles.schemaWarn}`}>
              <span className={styles.schemaIcon}>{c.ok ? '✓' : '⚠'}</span>
              <span className={styles.schemaField}>{c.label}</span>
              <span className={styles.schemaStatus}>{c.status}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.snippetFoot}>{card.foot}</div>
    </article>
  )
}

function SnippetCard({ card, animated }) {
  if (card.type === 'funnel')  return <FunnelCard card={card} animated={animated} />
  if (card.type === 'bars')   return <BarsCard   card={card} animated={animated} />
  if (card.type === 'ring')   return <RingCard   card={card} animated={animated} />
  if (card.type === 'schema') return <SchemaCard card={card} />
  return null
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ProductTeamPage() {
  const { team = 'product' } = useParams()
  const page = useMemo(() => TEAM_COPY[team] || TEAM_COPY.product, [team])
  const key = TEAM_COPY[team] ? team : 'product'
  const workflowCards = WORKFLOW_CARDS[key]
  const analysisLoops = ANALYSIS_LOOPS[key]
  const [workflowRef, workflowVisible] = useSectionReveal()
  const [loopRef, loopVisible] = useSectionReveal()
  const [animated, setAnimated] = useState(false)

  // Trigger bar/ring animations shortly after mount
  useEffect(() => {
    setAnimated(false)
    const t = setTimeout(() => setAnimated(true), 550)
    return () => clearTimeout(t)
  }, [team])

  return (
    <div className={styles.page}>
      <Navbar bg="#ffffff" />
      <main>
        {/* ═══ HERO ══════════════════════════════════════════════════════ */}
        <section className={styles.hero}>
          <div className={styles.shell}>
            <div className={styles.heroCopy}>
              <p className={`${styles.kicker} anim-label`}><span />{page.eyebrow}</p>
              <h1>
                {page.headlineLines.map((line, i) => (
                  <span key={line} className={styles.lineClip}>
                    <span className={`anim-word-${i + 1}`}>{line}</span>
                  </span>
                ))}
              </h1>
              <p className="anim-sub">{page.copy}</p>
              <div className={`${styles.heroActions} anim-cta`}>
                <a href="https://signup.acaiplatform.ai/" className={`arrow-button ${styles.primaryAction}`}>
                  {page.primary}<ArrowIcon />
                </a>
                <a href="/docs#getting-started" className={`arrow-button ${styles.secondaryAction}`}>
                  {page.secondary}<ArrowIcon />
                </a>
              </div>
            </div>

            {/* Snippet cards */}
            <div className={styles.snippetGrid}>
              {page.snippets.map((card, i) => (
                <div key={card.title} className={`anim-card-${i + 1}`}>
                  <SnippetCard card={card} animated={animated} />
                </div>
              ))}
            </div>

            {/* Evidence strip */}
            <div className={styles.evidenceGrid}>
              {page.evidence.map((item, i) => (
                <article key={item.label} className={`${styles.evidenceCard} anim-card-${i + 1}`}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WORKFLOW ══════════════════════════════════════════════════ */}
        <section ref={workflowRef} className={styles.workflowSection}>
          <div className={styles.shell}>
            <div className={`${styles.sectionHeader} scroll-reveal ${workflowVisible ? 'is-visible' : ''}`}>
              <p className={styles.kicker}><span />{page.workflowKicker}</p>
              <h2>
                <span className={`headline-reveal-line ${workflowVisible ? 'is-visible' : ''}`}>{page.workflowHeadline}</span>
              </h2>
            </div>

            <div className={styles.workflowGrid}>
              {workflowCards.map((card, i) => (
                <article key={card.title} className={`${styles.workflowCard} scroll-reveal ${workflowVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${0.1 + i * 0.1}s` }}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </article>
              ))}
            </div>

            <div className={styles.focusStrip}>
              {page.focus.map((item, i) => (
                <span key={item} className={`scroll-reveal ${workflowVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${0.26 + i * 0.08}s` }}>{item}</span>
              ))}
            </div>

            <div ref={loopRef} className={styles.analysisLoop}>
              <div>
                <p className={`${styles.kicker} scroll-reveal ${loopVisible ? 'is-visible' : ''}`}><span />Team Workflow</p>
                <h2>
                  <span className={`headline-reveal-line ${loopVisible ? 'is-visible' : ''}`}>{page.loopHeadline}</span>
                </h2>
              </div>
              <div className={styles.loopList}>
                {analysisLoops.map((item, i) => (
                  <article key={item.title} className={`scroll-reveal ${loopVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${0.12 + i * 0.12}s` }}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className={`${styles.playbookCard} scroll-reveal ${loopVisible ? 'is-visible' : ''}`}>
              <div>
                <p className={styles.kicker}><span />Recommended Plays</p>
                <h2>
                  <span className={`headline-reveal-line ${loopVisible ? 'is-visible' : ''}`}>Use Advaita when the team needs evidence before the next product call.</span>
                </h2>
              </div>
              <ul>
                {page.plays.map((play) => (
                  <li key={play}>{play}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
