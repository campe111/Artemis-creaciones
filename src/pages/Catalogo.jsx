import { useState } from 'react'
import './Catalogo.css'

const Catalogo = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [selectedImage, setSelectedImage] = useState(null)

  // Productos con imágenes reales
  const productos = [
    { id: 1, nombre: 'Combo Artesanal 1', categoria: 'combos', imagen: '/images/producto-01.jpeg' },
    { id: 2, nombre: 'Combo Artesanal 2', categoria: 'combos', imagen: '/images/producto-02.jpeg' },
    { id: 3, nombre: 'Combo Artesanal 3', categoria: 'combos', imagen: '/images/producto-03.jpeg' },
    { id: 4, nombre: 'Combo Artesanal 4', categoria: 'combos', imagen: '/images/producto-04.jpeg' },
    { id: 5, nombre: 'Combo Artesanal 5', categoria: 'combos', imagen: '/images/producto-05.jpeg' },
    { id: 6, nombre: 'Combo Artesanal 6', categoria: 'combos', imagen: '/images/producto-06.jpeg' },
    { id: 7, nombre: 'Combo Artesanal 7', categoria: 'combos', imagen: '/images/producto-07.jpeg' },
    { id: 8, nombre: 'Combo Artesanal 8', categoria: 'combos', imagen: '/images/producto-08.jpeg' },
    { id: 9, nombre: 'Combo Artesanal 9', categoria: 'combos', imagen: '/images/producto-09.jpeg' },
    { id: 10, nombre: 'Combo Artesanal 10', categoria: 'combos', imagen: '/images/producto-10.jpeg' },
    { id: 11, nombre: 'Combo Artesanal 11', categoria: 'combos', imagen: '/images/producto-11.jpeg' },
    { id: 12, nombre: 'Combo Artesanal 12', categoria: 'combos', imagen: '/images/producto-12.jpeg' },
    { id: 13, nombre: 'Combo Artesanal 13', categoria: 'combos', imagen: '/images/producto-13.jpeg' },
    { id: 14, nombre: 'Combo Artesanal 14', categoria: 'combos', imagen: '/images/producto-14.jpeg' },
    { id: 15, nombre: 'Combo Artesanal 15', categoria: 'combos', imagen: '/images/producto-15.jpeg' },
    { id: 16, nombre: 'Combo Artesanal 16', categoria: 'combos', imagen: '/images/producto-16.jpeg' },
    { id: 17, nombre: 'Combo Artesanal 17', categoria: 'combos', imagen: '/images/producto-17.jpeg' },
  ]

  const whatsappNumber = '+5492284569324'

  const categorias = ['todos', 'combos']

  const productosFiltrados = selectedCategory === 'todos' 
    ? productos 
    : productos.filter(p => p.categoria === selectedCategory)

  return (
    <div className="catalogo">
      <div className="catalogo-header">
        <div className="container">
          <h1>Catálogo de Productos</h1>
          <p>Descubre nuestras creaciones artesanales en yeso</p>
        </div>
      </div>

      <div className="catalogo-content">
        <div className="container">
          <div className="filtros">
                {categorias.map(categoria => (
                  <button
                    key={categoria}
                    className={`filtro-btn ${selectedCategory === categoria ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(categoria)}
                  >
                    {categoria === 'todos' ? 'Todos' : categoria === 'combos' ? 'Combos' : categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                  </button>
                ))}
          </div>

          <div className="productos-grid">
            {productosFiltrados.map(producto => (
              <div key={producto.id} className="producto-card">
                <div 
                  className="producto-imagen"
                  onClick={() => setSelectedImage(producto.imagen)}
                >
                  <img src={producto.imagen} alt={producto.nombre} className="producto-img" />
                </div>
                <div className="producto-info">
                  <h3>{producto.nombre}</h3>
                  <p className="producto-categoria">{producto.categoria}</p>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, me interesa consultar sobre ${producto.nombre}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-producto"
                  >
                    Consultar Combo
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
                <img src={selectedImage} alt="Vista ampliada" className="image-modal-img" />
              </div>
            </div>
          )}

          {productosFiltrados.length === 0 && (
            <div className="no-productos">
              <p>No hay productos disponibles en esta categoría.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Catalogo

