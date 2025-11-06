import { Link } from 'react-router-dom'
import './Inicio.css'

const Inicio = () => {
  const heroImageUrl = encodeURI('/images/descarga (8).jpeg')
  
  return (
    <div className="inicio">
      <section 
        className="hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(184, 93, 43, 0.4) 0%, rgba(139, 62, 33, 0.5) 100%), url('${heroImageUrl}')`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Artemis</h1>
          <p className="hero-subtitle">Creaciones Artesanales en Yeso</p>
          <p className="hero-description">
            Piezas únicas moldeadas con dedicación y cuidado artesanal. 
            Cada creación cuenta una historia y transforma espacios con elegancia natural.
          </p>
          <div className="hero-buttons">
            <Link to="/catalogo" className="btn btn-primary">
              Ver Catálogo
            </Link>
            <Link to="/sobre" className="btn btn-secondary">
              Conoce más
            </Link>
          </div>
        </div>
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

