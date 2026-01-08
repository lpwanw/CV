import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from 'wouter'
import { ThemeProvider } from '@/contexts/theme-context'
import App from './App'
import './styles/globals.css'

// GitHub Pages SPA redirect handler
const spaRedirect = sessionStorage.getItem('spa-redirect')
if (spaRedirect) {
  sessionStorage.removeItem('spa-redirect')
  window.history.replaceState(null, '', spaRedirect)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </StrictMode>,
)
