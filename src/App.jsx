import { useState, useRef, useEffect } from 'react'
import { AnnouncementBanner } from './components/AnnouncementBanner.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Hero } from './sections/Hero.jsx'
import { FunnelPreview } from './sections/FunnelPreview.jsx'
import { ChatbotPreview } from './sections/ChatbotPreview.jsx'
import { LogoStrip } from './sections/LogoStrip.jsx'
import { Features } from './sections/Features.jsx'
import { HowItWorks } from './sections/HowItWorks.jsx'
import { MetricsBar } from './sections/MetricsBar.jsx'
import { WaitlistCTA } from './sections/WaitlistCTA.jsx'
import { Footer } from './sections/Footer.jsx'

export default function App({ onLogin }) {
  const [bannerVisible, setBannerVisible] = useState(true)
  const [bannerHeight, setBannerHeight] = useState(38)
  const bannerRef = useRef(null)

  useEffect(() => {
    if (!bannerVisible) return
    const el = bannerRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setBannerHeight(el.offsetHeight))
    ro.observe(el)
    setBannerHeight(el.offsetHeight)
    return () => ro.disconnect()
  }, [bannerVisible])

  const offset = bannerVisible ? bannerHeight : 0

  return (
    <div className="grain" style={{ minHeight: '100vh', background: '#F0EEE8' }}>
      {bannerVisible && <AnnouncementBanner ref={bannerRef} onDismiss={() => setBannerVisible(false)} />}
      <Navbar offsetTop={offset} onLogin={onLogin} />
      <main style={{ paddingTop: offset + 76 }}>
        <Hero />
        <FunnelPreview />
        <ChatbotPreview />
        <LogoStrip />
        <Features />
        <HowItWorks />
        <MetricsBar />
        <WaitlistCTA />
      </main>
      <Footer />
    </div>
  )
}
