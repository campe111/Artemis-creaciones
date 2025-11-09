// --- Dependencias de arranque ---
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Analytics } from '@vercel/analytics/react'
import './styles/index.css'

// --- Punto de entrada: hidrata la app y registra analíticas ---
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
)

