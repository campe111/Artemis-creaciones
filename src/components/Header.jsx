import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Header.css'

/*
Componente Header:
- Muestra la identidad de la marca y navegación principal.
- Controla el menú responsive bloqueando el scroll cuando está abierto.
- Cierra automáticamente el menú al cambiar de ruta.
*/
const Header = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header id="top" className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>🌿 Artemis</h1>
          <p className="logo-subtitle">Creaciones Artesanales</p>
        </Link>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>
            Inicio
          </Link>
          <Link to="/catalogo" className={`nav-link ${isActive('/catalogo')}`} onClick={closeMenu}>
            Catálogo
          </Link>
          <Link to="/sobre" className={`nav-link ${isActive('/sobre')}`} onClick={closeMenu}>
            Sobre Artemis
          </Link>
          <Link to="/contacto" className={`nav-link ${isActive('/contacto')}`} onClick={closeMenu}>
            Contacto
          </Link>
        </nav>
        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          aria-label="Menú"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header

