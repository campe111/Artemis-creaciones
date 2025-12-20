import { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import './Catalogo.css'
import { PRODUCTOS } from '../data/productos'
import { trackEvent } from '../utils/analytics'

/*
Componente Catalogo:
- Gestiona el estado de búsqueda y modal de imagen ampliada.
- Filtra el listado de productos según el término ingresado.
- Renderiza encabezado, buscador, grilla de combos y mensajes de resultado.
*/
const Catalogo = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const whatsappNumber = '+5492284569324'

  const productStructuredData = useMemo(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : ''
    const items = PRODUCTOS.map((producto) => ({
      '@type': 'Product',
      name: producto.nombre,
      description: producto.descripcion,
      image: `${origin}${producto.imagen}`,
    }))

    return {
      '@context': 'https://schema.org',
      '@type': 'ProductCollection',
      name: 'Catálogo de productos Artemis',
      description: 'Colección de combos artesanales en yeso de Artemis',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Combos artesanales en yeso',
        itemListElement: items.map((item, index) => ({
          '@type': 'OfferCatalog',
          position: index + 1,
          item: item,
        })),
      },
    }
  }, [])

  const productosFiltrados = useMemo(() => {
    const termino = searchTerm.trim().toLowerCase()

    if (!termino) return PRODUCTOS

    return PRODUCTOS.filter(producto => {
      const nombre = producto.nombre.toLowerCase()
      const descripcion = producto.descripcion.toLowerCase()
      return nombre.includes(termino) || descripcion.includes(termino)
    })
  }, [searchTerm])

  return (
    <div className="catalogo">
      <Helmet>
        <title>Catálogo de productos | Artemis Creaciones en Yeso</title>
        <meta
          name="description"
          content="Explora el catálogo completo de combos artesanales en yeso de Artemis. Encuentra bandejas, difusores, portavelas y más piezas únicas."
        />
        <script type="application/ld+json">{JSON.stringify(productStructuredData)}</script>
      </Helmet>
      <div className="catalogo-header">
        <div className="container">
          <h1>Catálogo de Productos</h1>
          <p>Descubre nuestras creaciones artesanales en yeso</p>
        </div>
      </div>

      <div className="catalogo-content">
        <div className="container">
          <div className="buscador">
            <label htmlFor="buscador-productos" className="buscador-label">Buscar productos por nombre o descripción</label>
            <input
              id="buscador-productos"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar productos..."
              className="buscador-input"
            />
          </div>

          <div className="productos-grid">
            {productosFiltrados.map(producto => (
              <div key={producto.id} className="producto-card">
                <div 
                  className="producto-imagen"
                  style={{ '--producto-imagen': `url(${producto.imagen})` }}
                  onClick={() => setSelectedImage(producto.imagen)}
                >
                  <img src={producto.imagen} alt={producto.nombre} className="producto-img" loading="lazy" />
                </div>
                <div className="producto-info">
                  <h3>{producto.nombre}</h3>
                  <p className="producto-descripcion">{producto.descripcion}</p>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, me interesa consultar sobre ${producto.nombre}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-producto"
                    onClick={() =>
                      trackEvent('catalogo_consulta', { producto: producto.nombre, origen: 'catalogo_card' })
                    }
                  >
                    Consultar Combo
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, quiero comprar el ${producto.nombre}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-producto btn-producto-secondary"
                    onClick={() =>
                      trackEvent('catalogo_compra', { producto: producto.nombre, origen: 'catalogo_card' })
                    }
                  >
                    Comprar ahora
                  </a>
                </div>
              </div>
            ))}
          </div>

          {selectedImage && (
            <div 
              className="image-modal"
              onClick={() => setSelectedImage(null)}
            >
              <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                <button 
                  className="image-modal-close"
                  onClick={() => setSelectedImage(null)}
                >
                  ×
                </button>
                <img src={selectedImage} alt="Vista ampliada" className="image-modal-img" loading="lazy" />
              </div>
            </div>
          )}

          {productosFiltrados.length === 0 && (
            <div className="no-productos">
              <p>No encontramos combos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Catalogo

