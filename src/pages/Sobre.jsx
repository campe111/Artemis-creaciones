import './Sobre.css'

/*
Componente Sobre:
- Presenta la historia de la marca y su proceso creativo.
- Expone los valores principales mediante tarjetas visuales.
- Organiza el contenido en secciones alternadas con imágenes.
*/
const Sobre = () => {
  return (
    <div className="sobre">
      <div className="sobre-header">
        <div className="container">
          <h1>Sobre Artemis</h1>
          <p className="subtitle">La historia detrás de cada creación</p>
        </div>
      </div>

      <div className="sobre-content">
        <div className="container">
          <section className="sobre-section">
            <div className="sobre-text">
              <h2>Nuestra Historia</h2>
              <p>
                Artemis nació del amor por la artesanía y el deseo de crear piezas únicas 
                que transformen espacios comunes en lugares especiales. Cada creación es 
                el resultado de horas de dedicación, cuidado y pasión por el trabajo manual.
              </p>
              <p>
                Trabajamos con técnicas artesanales tradicionales que han sido transmitidas 
                de generación en generación, combinándolas con un diseño contemporáneo que 
                refleja la estética y sensibilidad de nuestros tiempos.
              </p>
            </div>
            <div className="sobre-image">
              <div className="image-placeholder">🖐️✨</div>
            </div>
          </section>

          <section className="sobre-section reverse">
            <div className="sobre-text">
              <h2>Nuestro Proceso</h2>
              <p>
                Cada pieza en Artemis comienza con la selección cuidadosa de materiales de 
                alta calidad. El yeso que utilizamos es preparado artesanalmente, asegurando 
                la durabilidad y belleza de cada creación.
              </p>
              <p>
                El proceso de moldeado es completamente manual, lo que permite que cada pieza 
                tenga características únicas. Después del secado, cada creación es pulida y 
                tratada con cuidado, asegurando un acabado perfecto que realza la belleza 
                natural del material.
              </p>
            </div>
            <div className="sobre-image">
              <div className="image-placeholder">🌿🪴</div>
            </div>
          </section>

          <section className="sobre-section valores">
            <h2>Nuestros Valores</h2>
            <div className="valores-grid">
              <div className="valor-card">
                <div className="valor-icon">❤️</div>
                <h3>Pasión</h3>
                <p>Amamos lo que hacemos y eso se refleja en cada detalle de nuestras creaciones.</p>
              </div>
              <div className="valor-card">
                <div className="valor-icon">🎨</div>
                <h3>Arte</h3>
                <p>Combinamos técnica artesanal con diseño contemporáneo para crear piezas únicas.</p>
              </div>
              <div className="valor-card">
                <div className="valor-icon">🌱</div>
                <h3>Sustentabilidad</h3>
                <p>Trabajamos con materiales naturales y procesos respetuosos con el medio ambiente.</p>
              </div>
              <div className="valor-card">
                <div className="valor-icon">🤝</div>
                <h3>Compromiso</h3>
                <p>Nos comprometemos con la calidad y la satisfacción de cada cliente.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Sobre

