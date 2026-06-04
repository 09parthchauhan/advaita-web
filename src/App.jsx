
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Docs from './pages/Docs'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/company/about" element={<About />} />
        <Route path="/company/careers" element={<Careers />} />
        <Route path="/company/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
