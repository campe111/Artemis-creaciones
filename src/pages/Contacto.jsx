import { useState } from 'react'
import './Contacto.css'

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí se puede agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.')
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    })
  }

  return (
    <div className="contacto">
      <div className="contacto-header">
        <div className="container">
          <h1>Contacto</h1>
          <p>Estamos aquí para ayudarte. ¡Escríbenos!</p>
        </div>
      </div>

      <div className="contacto-content">
        <div className="container">
          <div className="contacto-grid">
            <div className="contacto-info">
              <h2>Información de Contacto</h2>
              <p>
                ¿Tienes alguna pregunta sobre nuestras creaciones? ¿Quieres un diseño personalizado? 
                No dudes en contactarnos. Estaremos encantados de ayudarte.
              </p>

              <div className="contacto-details">
                <div className="contacto-item">
                  <div className="contacto-icon">📧</div>
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:artemisolavarria@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                      <p>artemisolavarria@gmail.com</p>
                    </a>
                  </div>
                </div>

                <div className="contacto-item">
                  <div className="contacto-icon">📱</div>
                  <div>
                    <h3>WhatsApp</h3>
                    <a 
                      href="https://wa.me/2284569324" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      <p>+5492284569324</p>
                    </a>
                  </div>
                </div>

                <div className="contacto-item">
                  <div className="contacto-icon">📍</div>
                  <div>
                    <h3>Ubicación</h3>
                    <p>Olavarría, provincia de Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>

              <div className="redes-sociales">
                <h3>Síguenos en redes sociales</h3>
                <div className="social-buttons">
                  <a 
                    href="https://www.instagram.com/artemisolavarria?igsh=MTQ1YTl4MGduMTdicg==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    📷 Instagram
                  </a>
                  <a 
                    href="https://www.facebook.com/share/1Gu7cVHHdR/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    📘 Facebook
                  </a>
                  <a 
                    href="https://wa.me/2284569324 " 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="contacto-form-container">
              <h2>Envíanos un Mensaje</h2>
              <form className="contacto-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre completo</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telefono">Teléfono (opcional)</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="011 1234-5678"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto

