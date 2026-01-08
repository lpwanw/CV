import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from 'wouter'
import { ThemeProvider } from '@/contexts/theme-context'
import App from './App'
import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </StrictMode>,
)
