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
    { id: 18, nombre: 'Combo Artesanal 18', categoria: 'combos', imagen: '/images/producto-18.jpeg' },
    { id: 19, nombre: 'Combo Artesanal 19', categoria: 'combos', imagen: '/images/producto-19.jpeg' },
    { id: 20, nombre: 'Combo Artesanal 20', categoria: 'combos', imagen: '/images/producto-20.jpeg' },
    { id: 21, nombre: 'Combo Artesanal 21', categoria: 'combos', imagen: '/images/producto-21.jpeg' },
    { id: 22, nombre: 'Combo Artesanal 22', categoria: 'combos', imagen: '/images/producto-22.jpeg' },
    { id: 23, nombre: 'Combo Artesanal 23', categoria: 'combos', imagen: '/images/producto-23.jpeg' },
    { id: 24, nombre: 'Combo Artesanal 24', categoria: 'combos', imagen: '/images/producto-24.jpeg' },
    { id: 25, nombre: 'Combo Artesanal 25', categoria: 'combos', imagen: '/images/producto-25.jpeg' },
    { id: 26, nombre: 'Combo Artesanal 26', categoria: 'combos', imagen: '/images/producto-26.jpeg' },
    { id: 27, nombre: 'Combo Artesanal 27', categoria: 'combos', imagen: '/images/producto-27.jpeg' },
    { id: 28, nombre: 'Combo Artesanal 28', categoria: 'combos', imagen: '/images/producto-28.jpeg' },
    { id: 29, nombre: 'Combo Artesanal 29', categoria: 'combos', imagen: '/images/producto-29.jpeg' },
    { id: 30, nombre: 'Combo Artesanal 30', categoria: 'combos', imagen: '/images/producto-30.jpeg' },
    { id: 31, nombre: 'Combo Artesanal 31', categoria: 'combos', imagen: '/images/producto-31.jpeg' },
    { id: 32, nombre: 'Combo Artesanal 32', categoria: 'combos', imagen: '/images/producto-32.jpeg' },
    { id: 33, nombre: 'Combo Artesanal 33', categoria: 'combos', imagen: '/images/producto-33.jpeg' },
    { id: 34, nombre: 'Combo Artesanal 34', categoria: 'combos', imagen: '/images/producto-34.jpeg' },
    { id: 35, nombre: 'Combo Artesanal 35', categoria: 'combos', imagen: '/images/producto-35.jpeg' },
    { id: 36, nombre: 'Combo Artesanal 36', categoria: 'combos', imagen: '/images/producto-36.jpeg' },
    { id: 37, nombre: 'Combo Artesanal 37', categoria: 'combos', imagen: '/images/producto-37.jpeg' },
    { id: 38, nombre: 'Combo Artesanal 38', categoria: 'combos', imagen: '/images/producto-38.jpeg' },
    { id: 39, nombre: 'Combo Artesanal 39', categoria: 'combos', imagen: '/images/producto-39.jpeg' },
    { id: 40, nombre: 'Combo Artesanal 40', categoria: 'combos', imagen: '/images/producto-40.jpeg' },
    { id: 41, nombre: 'Combo Artesanal 41', categoria: 'combos', imagen: '/images/producto-41.jpeg' },
    { id: 42, nombre: 'Combo Artesanal 42', categoria: 'combos', imagen: '/images/producto-42.jpeg' },
    { id: 43, nombre: 'Combo Artesanal 43', categoria: 'combos', imagen: '/images/producto-43.jpeg' },
    { id: 44, nombre: 'Combo Artesanal 44', categoria: 'combos', imagen: '/images/producto-44.jpeg' },
    { id: 45, nombre: 'Combo Artesanal 45', categoria: 'combos', imagen: '/images/producto-45.jpeg' },
    { id: 46, nombre: 'Combo Artesanal 46', categoria: 'combos', imagen: '/images/producto-46.jpeg' },
    { id: 47, nombre: 'Combo Artesanal 47', categoria: 'combos', imagen: '/images/producto-47.jpeg' },
    { id: 48, nombre: 'Combo Artesanal 48', categoria: 'combos', imagen: '/images/producto-48.jpeg' },
    { id: 49, nombre: 'Combo Artesanal 49', categoria: 'combos', imagen: '/images/producto-49.jpeg' },
    { id: 50, nombre: 'Combo Artesanal 50', categoria: 'combos', imagen: '/images/producto-50.jpeg' },
    { id: 51, nombre: 'Combo Artesanal 51', categoria: 'combos', imagen: '/images/producto-51.jpeg' },
    { id: 52, nombre: 'Combo Artesanal 52', categoria: 'combos', imagen: '/images/producto-52.jpeg' },
    { id: 53, nombre: 'Combo Artesanal 53', categoria: 'combos', imagen: '/images/producto-53.jpeg' },
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

