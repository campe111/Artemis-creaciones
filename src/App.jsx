// --- Dependencias y componentes globales ---
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import BackToTopButton from './components/BackToTopButton'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Inicio from './pages/Inicio'
import Catalogo from './pages/Catalogo'
import Sobre from './pages/Sobre'
import Contacto from './pages/Contacto'

// --- Componente auxiliar: restablece el scroll al cambiar de ruta ---
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// --- Aplicación principal: define la estructura de navegación y layout ---
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
        <BackToTopButton />
        <FloatingWhatsApp />
      </div>
    </Router>
  )
}

export default App

