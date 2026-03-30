import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthPage from './Auth.jsx'

function Root() {
  const [page, setPage] = useState(() =>
    window.location.hash === '#auth' ? 'auth' : 'home'
  )

  const goAuth = () => { window.location.hash = '#auth'; setPage('auth') }
  const goHome = () => { window.location.hash = ''; setPage('home') }

  if (page === 'auth') return <AuthPage onBack={goHome} />
  return <App onLogin={goAuth} />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
