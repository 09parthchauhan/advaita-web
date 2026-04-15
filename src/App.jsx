import { Navbar } from './components/Navbar.jsx'
import { Hero } from './sections/Hero.jsx'
import { FeaturesCarousel } from './sections/FeaturesCarousel.jsx'
import { SDKShowcase } from './sections/SDKShowcase.jsx'
import { HowItWorks } from './sections/HowItWorks'
import { PricingSection } from './sections/PricingSection.jsx'
import { CTABanner } from './sections/CTABanner.jsx'
import { WaitlistCTA } from './sections/WaitlistCTA.jsx'
import { AnnouncementBanner } from './components/AnnouncementBanner.jsx'
import { Footer } from './sections/Footer.jsx'

export default function App({ onLogin, onPricing }) {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      <Navbar offsetTop={0} onLogin={onLogin} onPricing={onPricing} />
      <main style={{ paddingTop: 72 }}>
        {/* 1. Hero — split layout: heading left, dashboard preview right */}
        <Hero />

        {/* 2. Features Carousel — 3-card sliding carousel */}
        <FeaturesCarousel />

        {/* 3. SDK Code Snippet Section */}
        <SDKShowcase />

        <HowItWorks />

        {/* 4. Pricing — inline on landing page */}
        <PricingSection />

        {/* 5. Growth Potential CTA — orange rounded banner */}
        <CTABanner />

        {/* 6. Waitlist / email capture */}
        <WaitlistCTA />
      </main>

      {/* 7. iHub Announcement Banner */}
      <AnnouncementBanner />

      {/* 8. Footer */}
      <Footer />
    </div>
  )
}
