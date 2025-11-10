import { useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './Inicio.css'
import { trackEvent } from '../utils/analytics'

/*
Componente Inicio:
- Configura el carrusel principal con imágenes destacadas.
- Gestiona el estado y la navegación manual/automática del slider.
- Renderiza secciones de hero, beneficios y llamado a la acción.
*/
const Inicio = () => {
  const heroImages = useMemo(
    () =>
      [
        '/images/photos-logo/descarga (8).jpeg',
        '/images/photos-logo/descarga (9).jpeg',
        '/images/photos-logo/descarga (10).jpeg',
        '/images/photos-logo/descarga (11).jpeg',
        '/images/photos-logo/descarga (12).jpeg',
        '/images/photos-logo/descarga (13).jpeg',
        '/images/photos-logo/descarga (14).jpeg',
        '/images/photos-logo/descarga (15).jpeg',
        '/images/photos-logo/Dheepan Ratnam (@Dheepanratnam) on X.jpeg',
        '/images/photos-logo/Myanmar(Burma).jpeg',
        '/images/photos-logo/การตกแต่งด้วยหิน.jpeg'
      ].map((path) => encodeURI(path)),
    []
  )

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (heroImages.length <= 1) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  const goToSlide = (index) => {
    if (heroImages.length === 0) return
    setCurrentSlide((index + heroImages.length) % heroImages.length)
  }

  const handlePrev = () => goToSlide(currentSlide - 1)
  const handleNext = () => goToSlide(currentSlide + 1)
  
  return (
    <div className="inicio">
      <Helmet>
        <title>Artemis | Creaciones Artesanales en Yeso</title>
        <meta
          name="description"
          content="Descubre Artemis, la marca de creaciones artesanales en yeso con combos únicos, diseños exclusivos y materiales naturales."
        />
      </Helmet>
      <section className="hero">
        <div className="hero-slider" aria-hidden={heroImages.length <= 1}>
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              role="img"
              aria-label="Imagen destacada de Artemis"
              aria-hidden={index !== currentSlide}
            >
              <img
                src={image}
                alt=""
                className="hero-slide-img"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        <div className="hero-content">
          <h1 className="hero-title">Artemis</h1>
          <p className="hero-subtitle">Creaciones Artesanales en Yeso</p>
          <p className="hero-description">
            Piezas únicas moldeadas con dedicación y cuidado artesanal.
            Cada creación cuenta una historia y transforma espacios con elegancia natural.
          </p>
          <div className="hero-buttons">
            <Link
              to="/catalogo"
              className="btn btn-primary"
              onClick={() => trackEvent('inicio_cta_catalogo')}
            >
              Ver Catálogo
            </Link>
            <Link
              to="/sobre"
              className="btn btn-secondary"
              onClick={() => trackEvent('inicio_cta_sobre')}
            >
              Conoce más
            </Link>
          </div>
        </div>

        {heroImages.length > 1 && (
          <>
            <div className="hero-controls">
              <button type="button" className="hero-control-btn prev" onClick={handlePrev} aria-label="Imagen anterior">
                ‹
              </button>
              <button type="button" className="hero-control-btn next" onClick={handleNext} aria-label="Imagen siguiente">
                ›
              </button>
            </div>
            <div className="hero-dots" role="tablist" aria-label="Selector de imágenes destacadas">
              {heroImages.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={index === currentSlide}
                  className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                >
                  <span className="sr-only">Imagen {index + 1}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">¿Por qué elegir Artemis?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🖐️</div>
              <h3>Hecho a Mano</h3>
              <p>Cada pieza es creada manualmente con técnicas artesanales tradicionales, garantizando calidad y originalidad.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Diseño Único</h3>
              <p>Creaciones exclusivas que reflejan la estética y el cuidado artesanal, perfectas para espacios especiales.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>Material Natural</h3>
              <p>Trabajamos con yeso de alta calidad, un material noble que aporta calidez y elegancia a tu hogar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>¿Listo para encontrar tu pieza perfecta?</h2>
          <p>Explora nuestro catálogo y descubre creaciones que transformarán tus espacios</p>
          <Link to="/catalogo" className="btn btn-primary">
            Explorar Catálogo
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Inicio

