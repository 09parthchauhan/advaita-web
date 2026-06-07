
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import DocsPage from './pages/DocsPage'
import Platform from './pages/Platform'
import ProductPage from './pages/ProductPage'
import ProductTeamPage from './pages/ProductTeamPage'
import AnalysisPage from './pages/AnalysisPage'
import FeaturesPage from './pages/FeaturesPage'
import Privacy from './pages/Privacy'
import TermsOfService from './pages/TermsOfService'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/docs/:section" element={<DocsPage />} />
        <Route path="/docs/:section/:page" element={<DocsPage />} />
        <Route path="/company/about" element={<About />} />
        <Route path="/company/careers" element={<Careers />} />
        <Route path="/company/contact" element={<Contact />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/teams/:team" element={<ProductTeamPage />} />
        <Route path="/product/analysis/:type" element={<AnalysisPage />} />
        <Route path="/platforms" element={<Platform />} />
        <Route path="/features/:feature" element={<FeaturesPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  )
}
