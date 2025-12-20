import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser'
import './Contacto.css'
import { trackEvent } from '../utils/analytics'

/*
Componente Contacto:
- Controla los datos del formulario y su envío.
- Presenta información de contacto, redes sociales y formulario.
- Organiza la página con cabecera, columnas de contenido y mensajes.
*/
const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null

  // Inicializar EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'qT6TwPgR6Z5FL0jpb'
    emailjs.init(publicKey)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Limpiar mensaje de estado al escribir
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus(null)

    // Configuración de EmailJS
    // Se pueden configurar mediante variables de entorno o usar los valores por defecto
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_drdjjzk'
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_241ae3s'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'qT6TwPgR6Z5FL0jpb'

    // Preparar los parámetros del template
    // Asegúrate de que estos nombres coincidan con las variables en tu template de EmailJS
    const templateParams = {
      to_email: 'artemisolavarria@gmail.com',
      from_name: formData.nombre,
      from_email: formData.email,
      user_email: formData.email, // Algunos templates usan user_email
      user_name: formData.nombre, // Algunos templates usan user_name
      telefono: formData.telefono || 'No proporcionado',
      phone: formData.telefono || 'No proporcionado', // Algunos templates usan phone
      message: formData.mensaje,
      user_message: formData.mensaje, // Algunos templates usan user_message
      reply_to: formData.email
    }

    try {
      // Enviar email usando EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey)
      console.log('Email enviado exitosamente:', response)

      // Éxito
      setSubmitStatus('success')
      trackEvent('contacto_formulario_enviado')
      
      // Limpiar formulario
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
      })

      // Limpiar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      console.error('Detalles del error:', {
        status: error?.status,
        text: error?.text,
        serviceId,
        templateId,
        publicKey: publicKey ? 'configurado' : 'no configurado',
        templateParams
      })
      setSubmitStatus('error')
      trackEvent('contacto_formulario_error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="contacto">
      <Helmet>
        <title>Contacto | Artemis Creaciones</title>
        <meta
          name="description"
          content="Escríbenos para consultas sobre piezas artesanales en yeso, pedidos personalizados o colaboraciones con Artemis."
        />
      </Helmet>
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
                {submitStatus === 'success' && (
                  <div className="form-message form-message-success">
                    ✅ ¡Gracias por tu mensaje! Te contactaremos pronto.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="form-message form-message-error">
                    ❌ Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente o contáctanos directamente por email.
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="nombre">Nombre completo</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
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
                    disabled={isLoading}
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
                    disabled={isLoading}
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
                    disabled={isLoading}
                    rows="6"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit" disabled={isLoading}>
                  {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
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

