import { useState, useEffect, useCallback } from 'react'
import './BackToTopButton.css'

/*
Componente BackToTopButton:
- Muestra un botón flotante al superar un umbral de desplazamiento.
- Permite regresar suavemente al inicio de la página.
- Escucha el evento de scroll de manera eficiente usando efectos.
*/
const BackToTopButton = ({ threshold = 240 }) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleBackToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  if (!isVisible) {
    return null
  }

  return (
    <button
      type="button"
      className="back-to-top"
      onClick={handleBackToTop}
      aria-label="Volver al inicio de la página"
    >
      <span className="back-to-top-icon" aria-hidden="true">⌃</span>
      <span className="back-to-top-text">Volver arriba</span>
    </button>
  )
}

export default BackToTopButton


