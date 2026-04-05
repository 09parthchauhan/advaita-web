import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthPage from './Auth.jsx'
import Pricing from './pages/Pricing.jsx'

function Root() {
  const [page, setPage] = useState(() => {
    if (window.location.hash === '#auth') return 'auth'
    if (window.location.hash === '#pricing') return 'pricing'
    return 'home'
  })

  const goAuth    = () => { window.location.hash = '#auth';    setPage('auth') }
  const goHome    = () => { window.location.hash = '';         setPage('home') }
  const goPricing = () => { window.location.hash = '#pricing'; setPage('pricing') }

  if (page === 'auth')    return <AuthPage onBack={goHome} />
  if (page === 'pricing') return <Pricing  onBack={goHome} />
  return <App onLogin={goAuth} onPricing={goPricing} />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)

