import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>🌿 Artemis</h3>
          <p>Creaciones artesanales en yeso con amor y dedicación</p>
        </div>
        
        <div className="footer-section">
          <h4>Navegación</h4>
          <nav className="footer-nav">
            <Link to="/">Inicio</Link>
            <Link to="/catalogo">Catálogo</Link>
            <Link to="/sobre">Sobre Artemis</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <div className="social-links">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              📷 Instagram
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              📘 Facebook
            </a>
            <a 
              href="https://whatsapp.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Artemis - Creaciones Artesanales. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer

