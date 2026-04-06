import { Navbar } from './components/Navbar.jsx'
import { Hero } from './sections/Hero.jsx'
import { FunnelPreview } from './sections/FunnelPreview.jsx'
import { ChatbotPreview } from './sections/ChatbotPreview.jsx'
// import { LogoStrip } from './sections/LogoStrip.jsx'
import { Features } from './sections/Features.jsx'
import { HowItWorks } from './sections/HowItWorks.jsx'
import { ProductCapabilities } from './sections/ProductCapabilities.jsx'
import { WaitlistCTA } from './sections/WaitlistCTA.jsx'
import { AnnouncementBanner } from './components/AnnouncementBanner.jsx'
import { Footer } from './sections/Footer.jsx'

export default function App({ onLogin, onPricing }) {
  return (
    <div className="grain" style={{ minHeight: '100vh', background: '#F0EEE8' }}>
      <Navbar offsetTop={0} onLogin={onLogin} onPricing={onPricing} />
      <main style={{ paddingTop: 76 }}>
        <Hero />
        <FunnelPreview />
        <ChatbotPreview />
        {/* <LogoStrip /> */}
        <Features />
        <HowItWorks />
        <ProductCapabilities />
        <WaitlistCTA />
      </main>
      <AnnouncementBanner />
      <Footer />
    </div>
  )
}
