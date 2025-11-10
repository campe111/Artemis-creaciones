// --- Dependencias de arranque ---
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import { Analytics } from '@vercel/analytics/react'
import './styles/index.css'

// --- Punto de entrada: hidrata la app y registra analíticas ---
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
    <Analytics />
  </React.StrictMode>,
)

