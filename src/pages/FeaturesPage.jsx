import { useEffect, useRef, useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// ─── Reveal hook ─────────────────────────────────────────────────────────────
function useReveal(threshold = 0.14) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(e.target) } },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function ArrowIcon() {
  return (
    <svg className="arrow-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

// ─── Capability Icons ─────────────────────────────────────────────────────────
const CAP_ICONS = {
  message:     <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M3 4h14v10H3V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="m3 5 7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  chart:       <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M3 16V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M8 16V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M13 16v-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M18 16V4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M2 16h17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  refresh:     <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M4 10a6 6 0 1 0 1.2-3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M4 4v3.5H7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  filetext:    <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M5 3h7l4 4v11H5V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M12 3v5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M7 11h6M7 14h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  clock:       <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5"/><path d="M10 6v4.5l3 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  layers:      <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 2.5 2.5 7l7.5 4.5L17.5 7 10 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M2.5 11.5 10 16l7.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  sigma:       <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M14 4H6l5 6-5 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  filter:      <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M3 5h14M6 10h8M9 15h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  activity:    <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M2 10h3l2.5-6 3 12 2.5-8L15 10h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  flag:        <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M5 3v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M5 3h10l-3 4.5 3 4.5H5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  eye:         <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M2 10s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/></svg>,
  trophy:      <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M7 17h6M10 14v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M5 3h10v6a5 5 0 0 1-10 0V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M5 5.5H3a1.5 1.5 0 0 0 0 3h2M15 5.5h2a1.5 1.5 0 0 1 0 3h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  zap:         <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M11 2 4 11h7l-2 7 9-10h-7l2-6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  users:       <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M2 18c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M14 5a2.5 2.5 0 0 1 0 5M18 18c0-2.76-1.8-5.1-4.3-5.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  bell:        <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 2.5a6 6 0 0 1 6 6v3.5l1.5 2h-15L4 12V8.5a6 6 0 0 1 6-6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M8 15a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.5"/></svg>,
  sliders:     <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="7" cy="5" r="2" fill="white" stroke="currentColor" strokeWidth="1.4"/><circle cx="13" cy="10" r="2" fill="white" stroke="currentColor" strokeWidth="1.4"/><circle cx="8" cy="15" r="2" fill="white" stroke="currentColor" strokeWidth="1.4"/></svg>,
  trending:    <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M2 14l5-5 3 3 5-6 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 3h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  send:        <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M17 3 3 9l6 2 2 6 6-14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="m9 11 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  radar:       <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.4"/><circle cx="10" cy="10" r="1.5" fill="currentColor"/><path d="M10 10 15 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  grid:        <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>,
  play:        <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5"/><path d="M8.5 7.5l5 2.5-5 2.5v-5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>,
  branch:      <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="6" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="6" cy="15" r="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="14" cy="9" r="2" stroke="currentColor" strokeWidth="1.5"/><path d="M6 7v6M6 7c0 0 4-1 6 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  target:      <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5"/><circle cx="10" cy="10" r="1.5" fill="currentColor"/></svg>,
  list:        <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M7 5h10M7 10h10M7 15h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="4" cy="5" r="1" fill="currentColor"/><circle cx="4" cy="10" r="1" fill="currentColor"/><circle cx="4" cy="15" r="1" fill="currentColor"/></svg>,
}

// ─── Feature Copy ─────────────────────────────────────────────────────────────
const FEATURE_COPY = {
  chat: {
    eyebrow: 'AI Chatbot Analytics Agent',
    headlineLines: ['Ask your product data', 'anything. Get answers instantly.'],
    copy: 'ACAI understands your clickstream and answers plain-language questions with charts, cohort breakdowns, and evidence-backed explanations — no SQL, no dashboards required.',
    primary: 'Try the AI agent',
    secondary: 'See how it works',
    stats: [
      { label: 'Avg. time to insight', value: '< 30s', detail: 'vs hours of manual analysis' },
      { label: 'Questions answered', value: '10k+', detail: 'across all ACAI deployments' },
      { label: 'Data sources supported', value: '12+', detail: 'web, mobile, product events' },
    ],
    steps: [
      { title: 'Connect your clickstream', copy: 'Install the ACAI SDK in minutes. Every event, page view, and user action flows into the analysis engine automatically.' },
      { title: 'Ask in plain language', copy: 'Type any product question — "Why did activation drop this week?" or "Show users who churned after onboarding." No SQL needed.' },
      { title: 'Get evidence-backed answers', copy: 'ACAI queries your live event data, builds the relevant funnel or cohort, and returns a narrative summary with supporting charts.' },
      { title: 'Share and act', copy: 'Export answers as reports, pin insights to team dashboards, or schedule recurring analyses to keep everyone aligned.' },
    ],
    capabilities: [
      { icon: 'message',  title: 'Natural language queries', copy: 'Ask about funnels, cohorts, retention, drop-off, feature adoption, or any custom event in plain English.' },
      { icon: 'chart',    title: 'Instant chart generation', copy: 'Every answer comes with the right visualization — bar charts, funnels, retention curves, or cohort grids.' },
      { icon: 'refresh',  title: 'Context-aware follow-ups', copy: 'ACAI remembers your conversation so you can drill deeper without repeating yourself.' },
      { icon: 'filetext', title: 'Narrative summaries', copy: 'Receive written explanations that tell the story behind the numbers — ready to paste into a doc or slide.' },
      { icon: 'clock',    title: 'Scheduled reports', copy: 'Automate weekly or monthly summaries and get them delivered to your inbox or team channel.' },
      { icon: 'layers',   title: 'Multi-source analysis', copy: 'Combine web, mobile, and product events in a single question to see the full user journey.' },
    ],
    useCases: [
      { tag: 'Product', title: 'Why did sign-ups drop on Tuesday?', copy: 'ACAI isolates the traffic source, event sequence, and device breakdown that explain the dip — in under 30 seconds.' },
      { tag: 'Growth', title: 'Which campaign cohort retains best?', copy: 'Compare activation rates, D7 and D30 retention across every UTM source without building a single query.' },
      { tag: 'Data', title: 'Are all required events firing correctly?', copy: 'Ask ACAI to audit event coverage, flag missing properties, and summarise schema health across your SDK.' },
    ],
    carousel: [
      { label: 'Query speed', value: '28s', change: '↓ 94%', positive: true, insight: 'Average time from question to chart — down from 8 hours of analyst work.' },
      { label: 'Questions per week', value: '340', change: '+210%', positive: true, insight: 'Teams ask more questions when the barrier to answers drops to zero.' },
      { label: 'Reports automated', value: '12', change: '+8 new', positive: true, insight: 'Recurring Monday morning reports now run without manual effort.' },
    ],
    agent: {
      kicker: 'ACAI Chatbot Agent',
      headline: 'What teams stop asking analysts after the first week.',
      body: 'Once product and growth teams can type a question and get an instant answer backed by real events, the analyst queue empties. These numbers reflect that shift.',
      tags: ['Instant answers', 'No SQL required', 'Evidence-backed', 'Conversation memory'],
    },
    outcomes: [
      'Answer product questions in seconds, not hours',
      'Remove the analyst bottleneck from weekly reviews',
      'Give every team member direct access to clickstream truth',
      'Generate shareable reports without leaving the chat',
    ],
  },

  experiment: {
    eyebrow: 'Experiment Analysis',
    headlineLines: ['Know which variant wins', 'before you ship.'],
    copy: 'Run A/B tests with confidence. ACAI compares conversion paths, cohort behaviour, and statistical significance across every variant — and explains what drove the result.',
    primary: 'Analyse your experiments',
    secondary: 'View setup guide',
    stats: [
      { label: 'Confidence threshold', value: '95%', detail: 'statistical significance out of the box' },
      { label: 'Variants supported', value: 'Unlimited', detail: 'A/B, multivariate, and holdout groups' },
      { label: 'Analysis depth', value: '6 layers', detail: 'conversion, retention, segment, device, source, cohort' },
    ],
    steps: [
      { title: 'Define your experiment', copy: 'Name the variants, set the goal metric, and choose the user segments you want to include — all from the experiment builder.' },
      { title: 'Let events flow in', copy: 'ACAI captures every interaction for all variant groups from the moment the experiment is live, with no sampling.' },
      { title: 'Compare variants automatically', copy: 'As data arrives, ACAI calculates conversion rates, lift percentages, and statistical confidence for every variant in real time.' },
      { title: 'Get the ship decision', copy: 'ACAI explains which variant wins, why it won, which segments responded best, and what to watch after rollout.' },
    ],
    capabilities: [
      { icon: 'sigma',    title: 'Statistical significance engine', copy: 'Bayesian and frequentist methods with configurable confidence thresholds and minimum sample sizes.' },
      { icon: 'filter',   title: 'Segment-level breakdown', copy: 'See lift by device type, traffic source, user role, plan tier, geography, or any custom property.' },
      { icon: 'activity', title: 'Multi-metric tracking', copy: 'Track primary and guardrail metrics simultaneously so you catch regressions before they ship.' },
      { icon: 'flag',     title: 'Early stopping detection', copy: 'ACAI flags when a variant has enough data to call and warns against stopping too early.' },
      { icon: 'eye',      title: 'Post-ship monitoring', copy: 'Keep watching variant metrics after rollout to detect novelty effects and long-term retention changes.' },
      { icon: 'trophy',   title: 'AI winner explanation', copy: 'Plain-language summaries explain the primary driver, best segment, and recommended rollout plan.' },
    ],
    useCases: [
      { tag: 'Checkout', title: 'Does one-page checkout outperform multi-step?', copy: 'ACAI compares conversion, drop-off step, and mobile vs desktop behaviour across all variants with one click.' },
      { tag: 'Onboarding', title: 'Which welcome flow activates more users?', copy: 'Track activation rate, time-to-value, and D7 retention for each onboarding variant without manual cohort work.' },
      { tag: 'Pricing', title: 'Does annual pricing messaging lift upgrades?', copy: 'Compare upgrade rates, revenue per user, and expansion signals across pricing copy variants.' },
    ],
    carousel: [
      { label: 'Avg. experiment duration', value: '11d', change: '-38%', positive: true, insight: 'Faster statistical confidence means teams ship winners sooner.' },
      { label: 'Win rate accuracy', value: '96%', change: '+4%', positive: true, insight: 'AI-validated winner calls match post-ship reality at 96% accuracy.' },
      { label: 'Segments analysed', value: '18', change: 'per test', positive: true, insight: 'ACAI automatically breaks results down by device, source, and user type.' },
    ],
    agent: {
      kicker: 'Experiment Intelligence',
      headline: 'Numbers that change how teams decide what to ship.',
      body: 'Experiment analysis works when teams trust the result and act on it quickly. These metrics show how ACAI reduces experiment duration and improves winner call accuracy.',
      tags: ['Statistical confidence', 'Segment breakdown', 'Guardrail metrics', 'AI ship decision'],
    },
    outcomes: [
      'Ship winners faster with statistically valid decisions',
      'Avoid false positives with guardrail metric monitoring',
      'Understand which user segments respond to each variant',
      'Get a written rationale for every ship or no-ship call',
    ],
  },

  kpi: {
    eyebrow: 'KPI Growth Rate Tracking',
    headlineLines: ['Every metric that matters,', 'with AI context on every shift.'],
    copy: 'Track activation, retention, conversion, and churn in one view. ACAI alerts your team when KPIs move, explains why they moved, and shows what to do next.',
    primary: 'Track your KPIs',
    secondary: 'See dashboard demo',
    stats: [
      { label: 'Metrics tracked', value: '50+', detail: 'activation, retention, conversion, churn and custom' },
      { label: 'Alert latency', value: '< 5 min', detail: 'from event to notification' },
      { label: 'Trend forecast horizon', value: '30 days', detail: 'AI-powered forward projection' },
    ],
    steps: [
      { title: 'Choose your north star metrics', copy: 'Pick from activation, retention, conversion, churn, engagement, or define custom KPIs from any clickstream event combination.' },
      { title: 'Set thresholds and baselines', copy: 'Configure alert thresholds, rolling baselines, and comparison windows so you only hear about meaningful changes.' },
      { title: 'Watch metrics move in real time', copy: 'The live dashboard updates as events arrive. Sparklines, cohort grids, and trend lines refresh continuously.' },
      { title: 'Get AI context on every alert', copy: 'When a KPI shifts, ACAI explains the likely cause, affected segments, and recommended next action — automatically.' },
    ],
    capabilities: [
      { icon: 'zap',      title: 'Real-time metric engine', copy: 'KPIs update continuously from live clickstream data with sub-5-minute latency from event to dashboard.' },
      { icon: 'users',    title: 'Cohort-based retention', copy: 'Track D1, D7, D30, and custom-day retention for every user cohort, campaign source, or product segment.' },
      { icon: 'bell',     title: 'AI anomaly detection', copy: 'ACAI flags unexpected spikes or drops before they become crises, with context on which events or segments drove the change.' },
      { icon: 'sliders',  title: 'Custom KPI builder', copy: 'Combine any events, properties, and time windows into a custom metric with formula-based definitions.' },
      { icon: 'trending', title: 'Trend forecasting', copy: '30-day forward projections based on historical patterns, seasonal signals, and current trajectory.' },
      { icon: 'send',     title: 'Team alerts and digests', copy: 'Push alerts to Slack, email, or webhook. Schedule daily or weekly digest reports for leadership.' },
    ],
    useCases: [
      { tag: 'Weekly review', title: 'What moved in activation this week?', copy: 'ACAI surfaces the top three drivers of activation change with the exact cohort and event breakdown behind each shift.' },
      { tag: 'Retention', title: 'Is D30 retention improving after the onboarding fix?', copy: 'Compare retention cohorts before and after the change to confirm the fix is working — and by how much.' },
      { tag: 'Churn', title: 'Which accounts are at risk this month?', copy: 'ACAI flags low-engagement accounts with churn-predictive behaviour and suggests recovery actions.' },
    ],
    carousel: [
      { label: 'Activation rate', value: '68%', change: '+12%', positive: true, insight: 'Activation improved after reducing onboarding fields from six to three.' },
      { label: 'D30 retention', value: '44%', change: '+8d avg', positive: true, insight: 'Teams that complete setup in one session retain 8 days longer on average.' },
      { label: 'Churn rate', value: '6.2%', change: '-2.1%', positive: true, insight: 'Early intervention on low-engagement accounts reduced monthly churn.' },
    ],
    agent: {
      kicker: 'KPI Intelligence',
      headline: 'Metrics your team checks daily — with AI context on every shift.',
      body: 'Tracking a number is only useful if you know why it moved. ACAI pairs every KPI with an explanation, so weekly reviews go from "what changed?" to "here is what to do next."',
      tags: ['Real-time alerts', 'Cohort retention', 'Anomaly detection', '30-day forecasts'],
    },
    outcomes: [
      'Never miss a metric shift with real-time AI alerts',
      'Understand why KPIs move, not just that they moved',
      'Track retention cohorts without writing a single query',
      'Forecast next-month performance from current trajectory',
    ],
  },

  rootcause: {
    eyebrow: 'AI Root-Cause Analysis',
    headlineLines: ['Find why metrics changed', 'without hours of digging.'],
    copy: 'When a KPI drops or spikes, ACAI automatically isolates the affected segment, traces the causal event sequence, and delivers a recommended fix — grounded in your real clickstream data.',
    primary: 'Run root-cause analysis',
    secondary: 'See an example',
    stats: [
      { label: 'Mean time to root cause', value: '< 2 min', detail: 'vs days of manual investigation' },
      { label: 'Causal layers examined', value: '7+', detail: 'segment, event, device, time, source, cohort, flow' },
      { label: 'Fix accuracy', value: '91%', detail: 'of AI-recommended fixes confirmed by teams post-ship' },
    ],
    steps: [
      { title: 'Detect the anomaly', copy: 'ACAI monitors every KPI continuously. When activation, retention, or conversion shifts beyond the baseline, it triggers an investigation automatically.' },
      { title: 'Isolate the affected segment', copy: 'The analysis engine narrows down which users, devices, cohorts, or traffic sources are responsible for the change — and which are unaffected.' },
      { title: 'Trace the causal event chain', copy: 'ACAI replays the event sequences of affected versus unaffected users to identify the exact step, screen, or interaction that diverges.' },
      { title: 'Deliver the fix recommendation', copy: 'You receive a written root-cause summary, the supporting evidence, and a concrete recommended action with estimated impact.' },
    ],
    capabilities: [
      { icon: 'radar',    title: 'Automated anomaly triggers', copy: 'No manual setup. ACAI watches every tracked KPI and begins investigation when movement exceeds configurable thresholds.' },
      { icon: 'grid',     title: 'Multi-dimensional isolation', copy: 'Segment isolation across device, OS, traffic source, plan tier, geography, and any custom user property simultaneously.' },
      { icon: 'play',     title: 'Event sequence replay', copy: 'Compare the exact clickstream path of affected versus control users to find where the journey diverges.' },
      { icon: 'branch',   title: 'Counterfactual analysis', copy: 'ACAI models what the metric would have looked like without the causal factor to quantify the true impact.' },
      { icon: 'target',   title: 'Fix impact estimation', copy: 'Before you ship a fix, ACAI estimates the expected metric recovery based on historical patterns and affected user volume.' },
      { icon: 'list',     title: 'Audit trail', copy: 'Every investigation is logged with full evidence so you can review, share, or revisit the analysis at any time.' },
    ],
    useCases: [
      { tag: 'Activation', title: 'Activation dropped 8% — what happened?', copy: 'ACAI traces the drop to users who skipped onboarding step 3, shows the exact event divergence, and recommends a tooltip fix.' },
      { tag: 'Retention', title: 'D7 retention fell in the March cohort', copy: 'ACAI isolates the cohort, finds the missing habit-forming action, and estimates a 40% retention recovery with one product change.' },
      { tag: 'Conversion', title: 'Checkout conversion dipped on mobile', copy: 'ACAI compares mobile versus desktop event sequences, identifies the payment-step friction, and quantifies the revenue impact.' },
    ],
    carousel: [
      { label: 'Root causes found', value: '94%', change: 'of anomalies', positive: true, insight: 'ACAI successfully identifies a root cause for 94% of detected metric anomalies.' },
      { label: 'Investigation time', value: '1.8 min', change: '↓ 97%', positive: true, insight: 'Teams that used to spend days investigating now resolve root causes in under 2 minutes.' },
      { label: 'Fix confirmation rate', value: '91%', change: '+6%', positive: true, insight: 'AI-recommended fixes are confirmed effective by product teams in 91% of cases.' },
    ],
    agent: {
      kicker: 'Root-Cause Intelligence',
      headline: 'From metric drop to fix recommendation in under two minutes.',
      body: 'Manual investigation means days of pulling cohorts, replaying sessions, and guessing. ACAI automates the entire causal chain — isolation, evidence, and a recommended action with estimated impact.',
      tags: ['Auto-triggered', 'Causal evidence', 'Fix estimation', 'Full audit trail'],
    },
    outcomes: [
      'Resolve metric drops in minutes, not days',
      'Eliminate guesswork with evidence-grounded causal chains',
      'Get a recommended fix with estimated impact before you ship',
      'Build a searchable investigation history for future reference',
    ],
  },
}

// ─── Hero Visuals ─────────────────────────────────────────────────────────────

function ChatHeroVisual() {
  const messages = [
    { role: 'user', text: 'Why did activation drop this week?' },
    { role: 'ai', text: 'Activation fell 8.3% — users who skipped onboarding step 3 are churning 3× faster. 1,284 accounts affected.' },
    { role: 'user', text: 'Show me retention by acquisition source' },
    { role: 'ai', text: 'Organic: 71% D30 · Paid search: 54% D30 · Social: 41% D30. Organic users who complete setup retain at 84%.' },
  ]
  const [shown, setShown] = useState(2)
  useEffect(() => {
    if (shown >= messages.length) return
    const t = setTimeout(() => setShown(s => s + 1), 1600)
    return () => clearTimeout(t)
  }, [shown])

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-black/10 shadow-2xl" style={{ background: '#13131a' }}>
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/8" style={{ background: '#1a1a2e', borderColor: 'rgba(255,255,255,0.08)' }}>
        <img src="/logo.png" alt="" className="w-8 h-8 rounded-full" />
        <div>
          <div className="text-xs font-semibold text-white">ACAI · Analytics Agent</div>
          <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Connected to your clickstream</div>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-brand-green-mid" />
          <span className="text-[10px] text-brand-green-mid font-semibold">Live</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-4 min-h-[280px]">
        {messages.slice(0, shown).map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} gap-2`} style={{ animation: 'msgIn 0.3s ease' }}>
            {m.role === 'ai' && <img src="/logo.png" alt="" className="w-6 h-6 rounded-full mt-0.5 flex-shrink-0" />}
            <div className="max-w-[82%] px-3 py-2.5 rounded-xl text-xs text-white leading-relaxed"
              style={{
                background: m.role === 'user' ? 'rgba(167,139,250,0.18)' : 'rgba(255,255,255,0.07)',
                border: m.role === 'user' ? '0.5px solid rgba(167,139,250,0.28)' : '0.5px solid rgba(255,255,255,0.08)',
                borderRadius: m.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
              }}>{m.text}</div>
          </div>
        ))}
        {shown < messages.length && (
          <div className="flex items-center gap-1.5 pl-8">
            {[0,1,2].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.3)', animation: `bounce 1.2s ${i*0.2}s infinite` }} />)}
          </div>
        )}
      </div>
      <div className="flex gap-2 px-4 py-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="flex-1 rounded-lg px-3 py-2 text-[11px]" style={{ background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.3)' }}>Ask about your product data...</div>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #7b00f5, #a855f7)' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l10-5-5 10-1.5-4.5L2 7z" fill="white"/></svg>
        </div>
      </div>
    </div>
  )
}

function ExperimentHeroVisual() {
  const variants = [
    { name: 'Control', rate: '3.8%', lift: 'Baseline', color: '#8b8b8b' },
    { name: 'Variant A', rate: '4.9%', lift: '+28.9%', color: '#f5820a' },
    { name: 'Variant B', rate: '5.6%', lift: '+47.4%', color: '#4a9e1a' },
  ]
  const [bars, setBars] = useState(false)
  useEffect(() => { const t = setTimeout(() => setBars(true), 400); return () => clearTimeout(t) }, [])
  const heights = [42, 48, 51, 46, 58, 61, 65, 70, 74, 77, 82, 86]

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-black/10 shadow-2xl" style={{ background: '#10120f' }}>
      <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div>
          <div className="text-sm font-bold text-white">Checkout Flow Experiment</div>
          <div className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>14 days · 42,680 sessions · AI confidence 96%</div>
        </div>
        <div className="rounded-md px-2.5 py-1.5 text-[10px] font-bold" style={{ background: 'rgba(74,158,26,0.14)', border: '0.5px solid rgba(74,158,26,0.35)', color: '#86d296' }}>Variant B wins</div>
      </div>
      <div className="grid grid-cols-3 gap-2.5 p-4">
        {variants.map(v => (
          <div key={v.name} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.045)', border: '0.5px solid rgba(255,255,255,0.08)' }}>
            <div className="text-[10px] mb-2" style={{ color: 'rgba(255,255,255,0.38)' }}>{v.name}</div>
            <div className="text-2xl font-extrabold text-white mb-1">{v.rate}</div>
            <div className="text-[10px] font-bold" style={{ color: v.color }}>{v.lift}</div>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4">
        <div className="rounded-xl p-4" style={{ background: '#181b17', border: '0.5px solid rgba(255,255,255,0.08)' }}>
          <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>Conversion by day</div>
          <div className="flex items-end gap-1.5" style={{ height: '80px' }}>
            {heights.map((h, i) => (
              <div key={i} className="flex-1 rounded-t"
                style={{
                  height: bars ? `${h}%` : '0%',
                  background: i < 4 ? 'rgba(255,255,255,0.18)' : i < 8 ? 'rgba(245,130,10,0.62)' : 'rgba(74,158,26,0.72)',
                  transition: `height 0.7s ${i * 0.04}s cubic-bezier(0.16,1,0.3,1)`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="mt-2.5 rounded-lg px-3 py-2.5 flex gap-2.5 items-start" style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.07)' }}>
          <div className="w-2 h-2 mt-1 flex-shrink-0" style={{ background: '#4a9e1a' }} />
          <div>
            <div className="text-[11px] font-bold text-white mb-0.5">Ship recommendation</div>
            <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.52)' }}>Roll out Variant B — returning mobile users show strongest lift at +62%.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function KpiHeroVisual() {
  const metrics = [
    { label: 'Activation Rate', value: '68.4%', delta: '+12%', up: true },
    { label: 'D30 Retention', value: '44%', delta: '+8%', up: true },
    { label: 'Conversion', value: '4.2%', delta: '+3%', up: true },
    { label: 'Churn Rate', value: '6.2%', delta: '-2%', up: false },
  ]
  const sparkData = [38, 42, 40, 51, 48, 56, 60, 58, 65, 68, 72, 68]
  const maxS = Math.max(...sparkData)
  const points = sparkData.map((v, i) => `${(i / (sparkData.length - 1)) * 200},${60 - (v / maxS) * 50}`).join(' ')

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-black/10 shadow-2xl" style={{ background: '#13131f' }}>
      <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div>
          <div className="text-sm font-bold text-white">KPI Dashboard</div>
          <div className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>Last updated 14:41 · <span style={{ color: '#a78bfa' }}>AI analysing...</span></div>
        </div>
        <div className="rounded-md px-2.5 py-1.5 text-[10px] font-bold" style={{ background: 'rgba(167,139,250,0.12)', border: '0.5px solid rgba(167,139,250,0.3)', color: '#a78bfa' }}>✦ Live</div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-4">
        {metrics.map(m => (
          <div key={m.label} className="rounded-xl p-3" style={{ background: '#1c1c2e', border: '0.5px solid rgba(255,255,255,0.07)' }}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-md flex items-center justify-center text-xs flex-shrink-0"
                style={{ background: m.up ? 'rgba(74,158,26,0.2)' : 'rgba(245,130,10,0.2)' }}>
                {m.up ? '↗' : '↘'}
              </div>
              <span className="text-[11px] font-semibold text-white leading-tight">{m.label}</span>
            </div>
            <div className="text-xl font-bold text-white">{m.value}</div>
            <div className="text-[11px] font-bold mt-0.5" style={{ color: m.up ? '#4a9e1a' : '#f5820a' }}>{m.delta}</div>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4">
        <div className="rounded-xl p-3" style={{ background: '#1c1c2e', border: '0.5px solid rgba(255,255,255,0.07)' }}>
          <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>Activation trend (12 weeks)</div>
          <svg viewBox="0 0 200 60" className="w-full" style={{ height: '50px' }}>
            <defs>
              <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f5820a" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f5820a" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points={`0,60 ${points} 200,60`} fill="url(#sparkGrad)" />
            <polyline points={points} fill="none" stroke="#f5820a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function RootCauseHeroVisual() {
  const steps = [
    { num: '01', label: 'Anomaly detected', detail: 'Activation dropped 8.3% — March cohort vs Feb baseline', color: '#f5820a' },
    { num: '02', label: 'Segment isolated', detail: 'Users who skipped onboarding step 3 — 1,284 accounts', color: '#a78bfa' },
    { num: '03', label: 'Cause identified', detail: '72% exit before completing the setup checklist', color: '#f5d000' },
    { num: '04', label: 'Fix recommended', detail: 'Add guided tooltip — est. impact: −40% churn next cohort', color: '#4a9e1a' },
  ]
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-black/10 shadow-2xl" style={{ background: '#0f0f0f' }}>
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="w-2 h-2 rounded-full bg-brand-orange" />
        <span className="text-sm font-semibold text-white">AI Root-Cause Analysis</span>
        <span className="ml-auto text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>Triggered automatically</span>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="rounded-lg p-3" style={{ background: 'rgba(245,130,10,0.1)', border: '0.5px solid rgba(245,130,10,0.3)' }}>
          <div className="text-[11px] font-bold mb-1" style={{ color: '#f5820a' }}>⚠ Churn spike detected — +8.3%</div>
          <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.6)' }}>March cohort vs February baseline — investigation started</div>
        </div>
        {steps.map((s, i) => (
          <div key={s.num} className="flex gap-3 items-start" style={{ animation: `msgIn 0.4s ${0.1 + i * 0.15}s both` }}>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: `${s.color}20`, border: `0.5px solid ${s.color}40` }}>
              <span className="text-[9px] font-bold" style={{ color: s.color }}>{s.num}</span>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-white mb-0.5">{s.label}</div>
              <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Carousel ─────────────────────────────────────────────────────────────────
function FeatureCarousel({ cards }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => { setActive(0) }, [cards])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setActive(c => (c + 1) % cards.length), 4200)
    return () => clearInterval(t)
  }, [cards.length, paused])

  const card = cards[active]

  return (
    <div className="relative flex flex-col" style={{ minHeight: '260px' }}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div key={active} className="flex-1 flex flex-col" style={{ animation: 'fadeUp 0.4s ease both' }}>
        <span className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: '#f5820a' }}>{card.label}</span>
        <div className="flex items-baseline gap-3 mb-4">
          <strong className="text-6xl font-bold tracking-tighter text-jet-black leading-none">{card.value}</strong>
          <span className="text-sm font-bold px-2.5 py-1 rounded-md" style={{ background: card.positive ? 'rgba(74,158,26,0.1)' : 'rgba(245,130,10,0.1)', color: card.positive ? '#327211' : '#c06000' }}>{card.change}</span>
        </div>
        <p className="text-xl font-semibold text-jet-black leading-snug tracking-tight" style={{ maxWidth: '400px' }}>{card.insight}</p>
      </div>
      <div className="flex items-center gap-2 justify-end pt-6 border-t border-black/8 mt-4">
        <span className="text-xs font-semibold mr-1.5" style={{ color: '#aaa' }}>{active + 1} / {cards.length}</span>
        {['prev','next'].map((dir) => (
          <button key={dir} onClick={() => { setPaused(true); setActive(c => dir === 'prev' ? (c - 1 + cards.length) % cards.length : (c + 1) % cards.length) }}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: '#111', color: '#fff' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d={dir === 'prev' ? 'M10 3L5 8l5 5' : 'M6 3l5 5-5 5'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        ))}
      </div>
      {!paused && <div key={`${active}-p`} className="absolute bottom-0 left-0 h-0.5 rounded-full" style={{ background: '#f5820a', animation: 'progressRun 4.2s linear both' }} />}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FeaturesPage() {
  const { feature = 'chat' } = useParams()
  const page = useMemo(() => FEATURE_COPY[feature] || FEATURE_COPY.chat, [feature])

  const [stepsRef, stepsVisible] = useReveal(0.14)
  const [capsRef, capsVisible] = useReveal(0.14)
  const [useCasesRef, useCasesVisible] = useReveal(0.14)
  const [agentRef, agentVisible] = useReveal(0.14)
  const [outcomesRef, outcomesVisible] = useReveal(0.14)

  const HeroVisual = { chat: ChatHeroVisual, experiment: ExperimentHeroVisual, kpi: KpiHeroVisual, rootcause: RootCauseHeroVisual }[feature] || ChatHeroVisual

  return (
    <div className="min-h-screen bg-white text-jet-black overflow-x-hidden">
      <style>{`
        @keyframes msgIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounce { 0%,80%,100% { transform: scale(0); } 40% { transform: scale(1); } }
        @keyframes progressRun { from { width: 0; } to { width: 100%; } }
      `}</style>

      <Navbar bg="#ffffff" />

      <main>
        {/* ═══ HERO ════════════════════════════════════════════════════════ */}
        <section className="pt-24 pb-20 px-5">
          <div className="max-w-[1480px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Copy */}
            <div>
              <p className="anim-label inline-flex items-center gap-2 mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500">
                <span className="w-2 h-2 bg-brand-orange inline-block rounded-sm" />
                {page.eyebrow}
              </p>
              <h1 className="font-medium tracking-tight text-jet-black" style={{ fontSize: 'clamp(34px,4vw,58px)', lineHeight: 1.07, letterSpacing: '-0.04em' }}>
                {page.headlineLines.map((line, i) => (
                  <span key={line} className="block overflow-hidden pb-0.5">
                    <span className={`anim-word-${i + 1} inline-block`}>{line}</span>
                  </span>
                ))}
              </h1>
              <p className="anim-sub mt-5 text-base leading-relaxed font-normal max-w-[520px]" style={{ color: '#4c4f52' }}>{page.copy}</p>
              <div className="anim-cta flex flex-wrap gap-3 mt-8">
                <a href="https://signup.acaiplatform.ai/" className="arrow-button inline-flex items-center gap-3 px-6 h-13 border border-jet-black bg-jet-black text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:bg-brand-orange hover:border-brand-orange hover:-translate-y-0.5" style={{ minHeight: '52px' }}>
                  {page.primary}<ArrowIcon />
                </a>
                <a href="/docs#getting-started" className="arrow-button inline-flex items-center gap-3 px-6 border border-jet-black bg-transparent text-jet-black text-sm font-semibold rounded-lg transition-all duration-200 hover:bg-black/6 hover:-translate-y-0.5" style={{ minHeight: '52px' }}>
                  {page.secondary}<ArrowIcon />
                </a>
              </div>
            </div>

            {/* Visual */}
            <div className="anim-card-1 w-full max-w-[600px] mx-auto lg:mx-0">
              <HeroVisual />
            </div>
          </div>
        </section>

        {/* ═══ STATS STRIP ═════════════════════════════════════════════════ */}
        <section className="border-t border-b border-black/9" style={{ background: '#f5f5f3' }}>
          <div className="max-w-[1480px] mx-auto px-5 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/9">
            {page.stats.map((stat, i) => (
              <div key={stat.label} className={`px-8 py-10 anim-card-${i + 1}`}>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: '#888' }}>{stat.label}</p>
                <strong className="block font-bold tracking-tight text-jet-black mb-1.5" style={{ fontSize: 'clamp(32px,3vw,44px)', lineHeight: 1, letterSpacing: '-0.05em' }}>{stat.value}</strong>
                <p className="text-sm font-medium" style={{ color: '#787878' }}>{stat.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ HOW IT WORKS ════════════════════════════════════════════════ */}
        <section ref={stepsRef} className="py-20 px-5">
          <div className="max-w-[1480px] mx-auto">
            <div className={`scroll-reveal ${stepsVisible ? 'is-visible' : ''} mb-12 max-w-3xl`}>
              <p className="inline-flex items-center gap-2 mb-3 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: '#666' }}>
                <span className="w-2 h-2 bg-brand-orange inline-block rounded-sm" />How it works
              </p>
              <h2 className="font-medium tracking-tight text-jet-black" style={{ fontSize: 'clamp(30px,4vw,52px)', lineHeight: 1.07, letterSpacing: '-0.04em' }}>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line ${stepsVisible ? 'is-visible' : ''}`}>From your first event to your first answer.</span>
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-black/9 rounded-2xl overflow-hidden" style={{ background: 'rgba(17,17,17,0.09)', gap: '1px' }}>
              {page.steps.map((step, i) => (
                <article key={step.title}
                  className={`scroll-reveal ${stepsVisible ? 'is-visible' : ''} p-7 flex flex-col bg-[#f5f5f3]`}
                  style={{ minHeight: '270px', transitionDelay: `${0.1 + i * 0.1}s` }}>
                  <span className="inline-flex items-center justify-center w-9 h-9 mb-14 text-[11px] font-extrabold rounded-lg" style={{ background: 'rgba(245,130,10,0.12)', color: '#f5820a' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-semibold text-jet-black mb-2.5 tracking-tight" style={{ fontSize: '19px', lineHeight: 1.15, letterSpacing: '-0.03em' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#676665' }}>{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CAPABILITIES ════════════════════════════════════════════════ */}
        <section ref={capsRef} className="py-20 px-5" style={{ background: '#f5f5f3' }}>
          <div className="max-w-[1480px] mx-auto">
            <div className={`scroll-reveal ${capsVisible ? 'is-visible' : ''} mb-12`}>
              <p className="inline-flex items-center gap-2 mb-3 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: '#666' }}>
                <span className="w-2 h-2 bg-brand-orange inline-block rounded-sm" />Capabilities
              </p>
              <h2 className="font-medium tracking-tight text-jet-black" style={{ fontSize: 'clamp(30px,4vw,52px)', lineHeight: 1.07, letterSpacing: '-0.04em' }}>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line ${capsVisible ? 'is-visible' : ''}`}>Everything the feature does.</span>
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-black/9 rounded-2xl overflow-hidden" style={{ background: 'rgba(17,17,17,0.09)' }}>
              {page.capabilities.map((cap, i) => (
                <article key={cap.title}
                  className={`scroll-reveal ${capsVisible ? 'is-visible' : ''} p-7 bg-white`}
                  style={{ transitionDelay: `${0.08 + i * 0.08}s` }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-6" style={{ background: 'rgba(245,130,10,0.1)', color: '#f5820a' }}>
                    {CAP_ICONS[cap.icon]}
                  </div>
                  <h3 className="font-semibold mb-2 tracking-tight" style={{ fontSize: '18px', lineHeight: 1.2, letterSpacing: '-0.03em' }}>{cap.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#676665' }}>{cap.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ AI AGENT CAROUSEL ══════════════════════════════════════════ */}
        <section ref={agentRef} className="py-20 px-5">
          <div className="max-w-[1480px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className={`scroll-reveal ${agentVisible ? 'is-visible' : ''}`}>
              <p className="inline-flex items-center gap-2 mb-3 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: '#666' }}>
                <span className="w-2 h-2 bg-brand-orange inline-block rounded-sm" />{page.agent.kicker}
              </p>
              <h2 className="font-medium tracking-tight text-jet-black mb-4" style={{ fontSize: 'clamp(24px,3vw,38px)', lineHeight: 1.15, letterSpacing: '-0.04em', maxWidth: '460px' }}>
                {page.agent.headline}
              </h2>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: '#5b5f63', maxWidth: '460px' }}>
                {page.agent.body}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {page.agent.tags.map(tag => (
                  <span key={tag} className="border px-3 py-2 text-sm font-semibold rounded-lg" style={{ borderColor: 'rgba(17,17,17,0.12)', background: '#fff', color: '#333' }}>{tag}</span>
                ))}
              </div>
            </div>
            <div className={`scroll-reveal-right ${agentVisible ? 'is-visible' : ''}`}>
              <FeatureCarousel key={feature} cards={page.carousel} />
            </div>
          </div>
        </section>

        {/* ═══ USE CASES ═══════════════════════════════════════════════════ */}
        <section ref={useCasesRef} className="py-20 px-5" style={{ background: '#f5f5f3' }}>
          <div className="max-w-[1480px] mx-auto">
            <div className={`scroll-reveal ${useCasesVisible ? 'is-visible' : ''} mb-12`}>
              <p className="inline-flex items-center gap-2 mb-3 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: '#666' }}>
                <span className="w-2 h-2 bg-brand-orange inline-block rounded-sm" />Use Cases
              </p>
              <h2 className="font-medium tracking-tight text-jet-black" style={{ fontSize: 'clamp(30px,4vw,52px)', lineHeight: 1.07, letterSpacing: '-0.04em' }}>
                <span className="block overflow-hidden">
                  <span className={`headline-reveal-line ${useCasesVisible ? 'is-visible' : ''}`}>When teams reach for this feature.</span>
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {page.useCases.map((uc, i) => (
                <article key={uc.title}
                  className={`scroll-reveal ${useCasesVisible ? 'is-visible' : ''} rounded-2xl p-7 border border-black/9 bg-white flex flex-col`}
                  style={{ minHeight: '280px', transitionDelay: `${0.1 + i * 0.12}s` }}>
                  <span className="inline-flex items-center h-7 px-3 mb-5 text-[10px] font-bold uppercase tracking-widest rounded-md" style={{ background: 'rgba(245,130,10,0.1)', color: '#f5820a' }}>{uc.tag}</span>
                  <h3 className="font-semibold mb-3 tracking-tight" style={{ fontSize: '20px', lineHeight: 1.2, letterSpacing: '-0.03em' }}>{uc.title}</h3>
                  <p className="text-sm leading-relaxed mt-auto pt-4 border-t border-black/8" style={{ color: '#676665' }}>{uc.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ OUTCOMES ════════════════════════════════════════════════════ */}
        <section ref={outcomesRef} className="py-20 px-5">
          <div className="max-w-[1480px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center rounded-2xl p-10 lg:p-16" style={{ background: '#111111', border: '1px solid #111' }}>
              <div className={`scroll-reveal ${outcomesVisible ? 'is-visible' : ''}`}>
                <p className="inline-flex items-center gap-2 mb-4 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: 'rgba(255,255,255,0.48)' }}>
                  <span className="w-2 h-2 bg-brand-orange inline-block rounded-sm" />Outcomes
                </p>
                <h2 className="font-medium text-white tracking-tight" style={{ fontSize: 'clamp(28px,3.6vw,48px)', lineHeight: 1.08, letterSpacing: '-0.04em' }}>
                  What your team gains from day one.
                </h2>
                <div className="flex flex-wrap gap-3 mt-8">
                  <a href="https://signup.acaiplatform.ai/" className="arrow-button inline-flex items-center gap-3 px-6 h-13 border border-white bg-white text-jet-black text-sm font-semibold rounded-lg transition-all duration-200 hover:bg-brand-orange hover:border-brand-orange hover:text-white hover:-translate-y-0.5" style={{ minHeight: '52px' }}>
                    Get started free<ArrowIcon />
                  </a>
                  <a href="/docs#getting-started" className="arrow-button inline-flex items-center gap-3 px-6 border border-white/20 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:border-white/40 hover:-translate-y-0.5" style={{ minHeight: '52px' }}>
                    Read the docs<ArrowIcon />
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                {page.outcomes.map((outcome, i) => (
                  <div key={outcome}
                    className={`scroll-reveal ${outcomesVisible ? 'is-visible' : ''} flex items-center gap-3.5 rounded-xl px-5 py-4 border`}
                    style={{ background: '#1a1a1a', borderColor: 'rgba(255,255,255,0.1)', transitionDelay: `${0.12 + i * 0.1}s` }}>
                    <span className="w-2 h-2 flex-shrink-0 rounded-sm bg-brand-orange" />
                    <p className="text-white font-semibold tracking-tight" style={{ fontSize: '16px', letterSpacing: '-0.02em' }}>{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
