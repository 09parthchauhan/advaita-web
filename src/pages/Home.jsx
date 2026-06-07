import Navbar from '../components/Navbar'
import AnnouncementBar from '../components/Announcementbar'
import HeroSection from '../components/Herosection'
// import BackedBy from '../components/BackedBy'
import KeyFeaturesSection from '../components/KeyFeaturesSection'
import TeamsSection from '../components/Teamssection'
import HowItWorksSection from '../components/Howitworkssection'
import AnalysisCardsSection from '../components/Analysiscardssection'
import FaqSection from '../components/Faqsection'
import FinalCtaSection from '../components/Finalctasection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
     <AnnouncementBar />
      <Navbar bg="#ffffff" />
      <main>
        <HeroSection />
        <KeyFeaturesSection />
        <TeamsSection />
        <HowItWorksSection />
        <AnalysisCardsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  )
}
