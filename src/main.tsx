import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanaguageProvider } from './context/LanguageContext.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanaguageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanaguageProvider>
  </StrictMode>,
)
