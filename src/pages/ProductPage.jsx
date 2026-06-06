import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import FaqSection from '../components/Faqsection'
import Footer from '../components/Footer'

const PLUS_BG = "url(\"data:image/svg+xml,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 11v10M11 15h10' stroke='%23111111' stroke-opacity='0.1' stroke-width='1' stroke-linecap='round'/%3E%3C/svg%3E\")"

function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(e.target) } },
      { threshold, rootMargin: '0px 0px -60px 0px' },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

// ─── Icons ────────────────────────────────────────────────────────────────────
const IconTeam = () => (
  <svg width="32" height="32" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="6" r="2.5" stroke="#111" strokeWidth="1.5"/>
    <path d="M5 17c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="4" cy="7.5" r="1.8" stroke="#111" strokeWidth="1.2"/>
    <path d="M1.5 17c0-1.66 1.34-3 3-3" stroke="#111" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="16" cy="7.5" r="1.8" stroke="#111" strokeWidth="1.2"/>
    <path d="M18.5 17c0-1.66-1.34-3-3-3" stroke="#111" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

const IconGrowth = () => (
  <svg width="32" height="32" viewBox="0 0 20 20" fill="none">
    <path d="M2 15l4-5 3 3 5-6 3-3" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 4h4v4" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconDatabase = () => (
  <svg width="32" height="32" viewBox="0 0 20 20" fill="none">
    <ellipse cx="10" cy="5.5" rx="6" ry="2.5" stroke="#111" strokeWidth="1.5"/>
    <path d="M4 5.5v4c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5v-4" stroke="#111" strokeWidth="1.5"/>
    <path d="M4 9.5v4c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5v-4" stroke="#111" strokeWidth="1.5"/>
  </svg>
)

const IconSparkle = () => (
  <svg width="32" height="32" viewBox="0 0 20 20" fill="none">
    <path d="M10 2l1.8 5.2L17 9l-5.2 1.8L10 16l-1.8-5.2L3 9l5.2-1.8L10 2z" stroke="#111" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M16 14l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z" stroke="#111" strokeWidth="1.1" strokeLinejoin="round"/>
  </svg>
)

const IconFlask = () => (
  <svg width="32" height="32" viewBox="0 0 20 20" fill="none">
    <path d="M7.5 3v5.5L4 14.5a1.5 1.5 0 001.4 2h9.2a1.5 1.5 0 001.4-2L12.5 8.5V3" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.5 3h5" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="9" cy="13" r="1" fill="#111"/>
    <circle cx="12" cy="15.5" r="0.8" fill="#111"/>
  </svg>
)

const IconSearch = () => (
  <svg width="32" height="32" viewBox="0 0 20 20" fill="none">
    <circle cx="9" cy="9" r="5.5" stroke="#111" strokeWidth="1.5"/>
    <path d="M13.5 13.5L17 17" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 9h4M9 7v4" stroke="#111" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
)

const IconChart = () => (
  <svg width="32" height="32" viewBox="0 0 20 20" fill="none">
    <path d="M3 16V10" stroke="#111" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M8 16V7" stroke="#111" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M13 16V11" stroke="#111" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M18 16V4" stroke="#111" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M2 16h16" stroke="#111" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

const IconGlobe = () => (
  <svg width="32" height="32" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="7.5" stroke="#111" strokeWidth="1.5"/>
    <path d="M10 2.5c-2.5 2-4 4.5-4 7.5s1.5 5.5 4 7.5" stroke="#111" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M10 2.5c2.5 2 4 4.5 4 7.5s-1.5 5.5-4 7.5" stroke="#111" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M2.5 10h15" stroke="#111" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M3.5 7h13M3.5 13h13" stroke="#111" strokeWidth="1" strokeLinecap="round"/>
  </svg>
)

const IconFunnel = () => (
  <svg width="32" height="32" viewBox="0 0 20 20" fill="none">
    <path d="M3 4h14l-5.5 6.5V16l-3-1.5V10.5L3 4z" stroke="#111" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
  </svg>
)

const IconMobile = () => (
  <svg width="32" height="32" viewBox="0 0 20 20" fill="none">
    <rect x="5.5" y="2" width="9" height="16" rx="2" stroke="#111" strokeWidth="1.5"/>
    <path d="M9 15.5h2" stroke="#111" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M5.5 5h9" stroke="#111" strokeWidth="1.2"/>
  </svg>
)

// ─── Card data ────────────────────────────────────────────────────────────────
const BY_TEAMS = [
  { title: 'Product Teams',  copy: 'Funnels, retention, feature adoption and cohort analysis for the team shipping the product.', tag: 'DEEPER PRODUCT INSIGHT',  href: '/product/teams/product', Icon: IconTeam     },
  { title: 'Growth Teams',   copy: 'Campaign attribution, activation lift, conversion paths and churn signals in one workflow.',  tag: 'STRONGER GROWTH LOOPS',   href: '/product/teams/growth',  Icon: IconGrowth   },
  { title: 'Data Teams',     copy: 'Schema health, live event validation, pipeline monitoring and AI-ready data preparation.',    tag: 'TRUSTED DATA FOUNDATION', href: '/product/teams/data',    Icon: IconDatabase },
]

const BY_FEATURES = [
  { title: 'AI Q&A',               copy: 'Ask plain-language questions about your clickstream and get AI-generated answers, charts and summaries instantly.', tag: 'INSTANT ANALYSIS',  href: '/features/chat',       Icon: IconSparkle },
  { title: 'Experiment Analysis',  copy: 'Compare variants, cohorts and conversion paths. See what is winning and what to ship next.',                        tag: 'FASTER DECISIONS',  href: '/features/experiment', Icon: IconFlask   },
  { title: 'Root Cause Analysis',  copy: 'Find why a metric changed without digging manually. Advaita explains the cause with evidence.',                     tag: 'CLEAR ROOT CAUSE',  href: '/features/rootcause',  Icon: IconSearch  },
  { title: 'KPI Tracking',         copy: 'Track activation, retention, conversion and churn. Get AI alerts when important metrics shift.',                     tag: 'METRIC CLARITY',    href: '/features/kpi',        Icon: IconChart   },
]

const BY_ANALYSIS = [
  { title: 'Web Analysis',     copy: 'Understand how users arrive, move through pages, trigger events and leave. Turn web behaviour into decisions.',       tag: 'WEB BEHAVIOUR CLARITY',    href: '/product/analysis/web',     Icon: IconGlobe  },
  { title: 'Product Analysis', copy: 'Track feature adoption, cohort health, account expansion and repeated product actions that signal intent.',           tag: 'PRODUCT OPERATING RHYTHM', href: '/product/analysis/product', Icon: IconFunnel },
  { title: 'Mobile Analysis',  copy: 'Analyze installs, screen flows, device behaviour, session depth and mobile cohort retention in one view.',            tag: 'MOBILE SESSION INSIGHT',   href: '/product/analysis/mobile',  Icon: IconMobile },
]

// ─── Card ─────────────────────────────────────────────────────────────────────
const CARD_BG = '#f5f5f3'

function Card({ card }) {
  const { title, copy, tag, href, Icon } = card
  return (
    <div className="flex flex-col gap-2">
      {/* Card */}
      <div
        className="relative flex flex-col border border-black/[0.07] rounded-xl overflow-hidden"
        style={{ minHeight: '280px', backgroundColor: CARD_BG, backgroundImage: PLUS_BG }}
      >
        {/* Title + icon */}
        <div className="flex items-start justify-between gap-3 px-6 pt-6">
          <h3 className="text-[19px] font-[500] text-jet-black leading-snug tracking-tight">
            {title}
          </h3>
          <span className="flex-shrink-0 mt-0.5 opacity-70">
            <Icon />
          </span>
        </div>

        {/* Push copy to bottom */}
        <div className="flex-1" />

        {/* Copy + tag + rule */}
        <div className="px-6 pb-5 flex flex-col gap-3">
          <p className="text-[15px] text-[#4d4d4d] leading-relaxed font-[400]">
            {copy}
          </p>
          <span className="text-[10px] font-[700] tracking-[0.16em] text-[#f5820a] uppercase">
            {tag}
          </span>
        </div>
      </div>

      {/* Read More — separate element below the card */}
      <a
        href={href}
        className="block w-full text-center text-[12px] font-[700] tracking-[0.1em] uppercase py-3.5 no-underline rounded-xl border border-black/[0.07] transition-colors duration-200 text-jet-black"
        style={{ backgroundColor: CARD_BG }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#f5820a'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#f5820a' }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = CARD_BG; e.currentTarget.style.color = '#111111'; e.currentTarget.style.borderColor = 'rgba(17,17,17,0.07)' }}
      >
        Read More
      </a>
    </div>
  )
}

// ─── Category block ───────────────────────────────────────────────────────────
function CategoryBlock({ label, cards, cols = 3, visible, baseDelay = 0 }) {
  const colClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  }[cols] ?? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
  return (
    <div>
      <div className={`scroll-reveal ${visible ? 'is-visible' : ''} flex items-center gap-4 mb-5`}>
        <span className="text-[11px] font-[700] tracking-[0.18em] text-[#989aa0] uppercase whitespace-nowrap">
          {label}
        </span>
        <div className="flex-1 h-px bg-black/[0.08]" />
      </div>
      <div className={`grid ${colClass} gap-4`}>
        {cards.map((card, i) => (
          <div
            key={card.title}
            className={`scroll-reveal ${visible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${baseDelay + i * 0.08}s` }}
          >
            <Card card={card} />
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ProductPage() {
  const [heroRef, heroVisible] = useReveal(0.05)
  const [teamsRef, teamsVisible] = useReveal()
  const [featRef, featVisible] = useReveal()
  const [anaRef, anaVisible] = useReveal()

  return (
    <div className="min-h-screen bg-white text-jet-black overflow-x-hidden">
      <Navbar bg="#ffffff" />

      {/* ═══ HERO ═══════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="pt-[clamp(80px,8vw,120px)] pb-[clamp(60px,7vw,100px)]">
        <div className="max-w-[1480px] mx-auto px-5">

          {/* Headline + sub */}
          <div className={`scroll-reveal ${heroVisible ? 'is-visible' : ''} mb-14`}>
            <h1
              className="font-[400] text-jet-black mb-5"
              style={{ fontSize: 'clamp(40px,5.6vw,72px)', lineHeight: 1.07, letterSpacing: '-0.045em' }}
            >
              <span className="block overflow-hidden">
                <span className="anim-word-1 block">Built for every product team,</span>
              </span>
              <span className="block overflow-hidden">
                <span className="anim-word-2 block">from first event to scale.</span>
              </span>
            </h1>
            <p className="anim-sub text-[17px] text-[#4d4d4d] leading-[1.7] font-[400] max-w-[520px]">
              Advaita connects product, growth and data teams through one shared layer of behavioral intelligence — turning clickstream events into decisions your team can trust.
            </p>
          </div>

          {/* Backed by — large label + inline items */}
          <div
            className={`scroll-reveal ${heroVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '0.3s' }}
          >
            <p
              className="font-[600] text-jet-black mb-5"
              style={{ fontSize: 'clamp(22px,2.8vw,36px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Backed by
            </p>
            <div className="flex items-center gap-8 flex-wrap">
              <a
                href="https://ihubgujarat.in/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 no-underline opacity-55 hover:opacity-100 transition-opacity duration-200"
              >
                <img src="/i-hub.png" alt="iHub Gujarat" className="h-5 w-auto object-contain grayscale" />
                <span className="text-[14px] font-[500] text-jet-black">iHub Gujarat</span>
              </a>
              <div className="w-px h-5 bg-black/[0.15]" />
              <a
                href="https://ihubgujarat.in/srujan"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 no-underline opacity-55 hover:opacity-100 transition-opacity duration-200"
              >
                <span className="w-2 h-2 bg-brand-orange rounded-[2px] flex-shrink-0" />
                <span className="text-[14px] font-[500] text-jet-black">Startup Srujan — Grant S4 Recipient</span>
              </a>
            </div>
          </div>

          {/* Page-width separator */}
          <div className="h-px bg-black/[0.07] mt-[clamp(48px,6vw,80px)]" />
        </div>
      </section>

      {/* ═══ CARDS ══════════════════════════════════════════════════════════ */}
      <section className="pb-[clamp(60px,7vw,100px)]">
        <div className="max-w-[1480px] mx-auto px-5 flex flex-col gap-14">

          <div ref={teamsRef}>
            <CategoryBlock label="By Teams"    cards={BY_TEAMS}    cols={3} visible={teamsVisible} baseDelay={0.04} />
          </div>

          <div ref={featRef}>
            <CategoryBlock label="By Features" cards={BY_FEATURES} cols={2} visible={featVisible}  baseDelay={0.04} />
          </div>

          <div ref={anaRef}>
            <CategoryBlock label="Analysis"    cards={BY_ANALYSIS} cols={3} visible={anaVisible}   baseDelay={0.04} />
          </div>

        </div>
      </section>

      <FaqSection />
      <Footer />
    </div>
  )
}
