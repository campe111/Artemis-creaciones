import { Link } from 'react-router-dom'
import './Footer.css'

/*
Componente Footer:
- Resume identidad, navegación secundaria y datos de contacto.
- Ofrece accesos directos a redes sociales y actualiza el año dinámicamente.
*/
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
          <h4>Contacto</h4>
          <div className="footer-contact">
            <p>📧 artemisolavarria@gmail.com</p>
            <p>📱 <a href="https://wa.me/228456932" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>228456932</a></p>
            <p>📍 Olavarría, provincia de Buenos Aires, Argentina</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/artemisolavarria?igsh=MTQ1YTl4MGduMTdicg==" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              📷 Instagram
            </a>
            <a 
              href="https://www.facebook.com/share/1Gu7cVHHdR/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              📘 Facebook
            </a>
            <a 
              href="https://wa.me/228456932" 
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

