import { useState } from 'react'
import './Catalogo.css'

const Catalogo = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [selectedImage, setSelectedImage] = useState(null)

  // Productos con imágenes reales
  const productos = [
    { id: 1, nombre: 'Combo Artesanal 1', categoria: 'combos', imagen: '/images/producto-01.jpeg', descripcion: 'Descripción del producto 1' },
    { id: 2, nombre: 'Combo Artesanal 2', categoria: 'combos', imagen: '/images/producto-02.jpeg', descripcion: 'Descripción del producto 2' },
    { id: 3, nombre: 'Combo Artesanal 3', categoria: 'combos', imagen: '/images/producto-03.jpeg', descripcion: 'Descripción del producto 3' },
    { id: 4, nombre: 'Combo Artesanal 4', categoria: 'combos', imagen: '/images/producto-04.jpeg', descripcion: 'Descripción del producto 4' },
    { id: 5, nombre: 'Combo Artesanal 5', categoria: 'combos', imagen: '/images/producto-05.jpeg', descripcion: 'Descripción del producto 5' },
    { id: 6, nombre: 'Combo Artesanal 6', categoria: 'combos', imagen: '/images/producto-06.jpeg', descripcion: 'Descripción del producto 6' },
    { id: 7, nombre: 'Combo Artesanal 7', categoria: 'combos', imagen: '/images/producto-07.jpeg', descripcion: 'Descripción del producto 7' },
    { id: 8, nombre: 'Combo Artesanal 8', categoria: 'combos', imagen: '/images/producto-08.jpeg', descripcion: 'Descripción del producto 8' },
    { id: 9, nombre: 'Combo Artesanal 9', categoria: 'combos', imagen: '/images/producto-09.jpeg', descripcion: 'Descripción del producto 9' },
    { id: 10, nombre: 'Combo Artesanal 10', categoria: 'combos', imagen: '/images/producto-10.jpeg', descripcion: 'Descripción del producto 10' },
    { id: 11, nombre: 'Combo Artesanal 11', categoria: 'combos', imagen: '/images/producto-11.jpeg', descripcion: 'Descripción del producto 11' },
    { id: 12, nombre: 'Combo Artesanal 12', categoria: 'combos', imagen: '/images/producto-12.jpeg', descripcion: 'Descripción del producto 12' },
    { id: 13, nombre: 'Combo Artesanal 13', categoria: 'combos', imagen: '/images/producto-13.jpeg', descripcion: 'Descripción del producto 13' },
    { id: 14, nombre: 'Combo Artesanal 14', categoria: 'combos', imagen: '/images/producto-14.jpeg', descripcion: 'Descripción del producto 14' },
    { id: 15, nombre: 'Combo Artesanal 15', categoria: 'combos', imagen: '/images/producto-15.jpeg', descripcion: 'Descripción del producto 15' },
    { id: 16, nombre: 'Combo Artesanal 16', categoria: 'combos', imagen: '/images/producto-16.jpeg', descripcion: 'Descripción del producto 16' },
    { id: 17, nombre: 'Combo Artesanal 17', categoria: 'combos', imagen: '/images/producto-18.jpeg', descripcion: 'Descripción del producto 17' },
    { id: 18, nombre: 'Combo Artesanal 18', categoria: 'combos', imagen: '/images/producto-19.jpeg', descripcion: 'Descripción del producto 18' },
    { id: 19, nombre: 'Combo Artesanal 19', categoria: 'combos', imagen: '/images/producto-20.jpeg', descripcion: 'Descripción del producto 19' },
    { id: 20, nombre: 'Combo Artesanal 20', categoria: 'combos', imagen: '/images/producto-21.jpeg', descripcion: 'Descripción del producto 20' },
    { id: 21, nombre: 'Combo Artesanal 21', categoria: 'combos', imagen: '/images/producto-22.jpeg', descripcion: 'Descripción del producto 21' },
    { id: 22, nombre: 'Combo Artesanal 22', categoria: 'combos', imagen: '/images/producto-23.jpeg', descripcion: 'Descripción del producto 22' },
    { id: 23, nombre: 'Combo Artesanal 23', categoria: 'combos', imagen: '/images/producto-24.jpeg', descripcion: 'Descripción del producto 23' },
    { id: 24, nombre: 'Combo Artesanal 24', categoria: 'combos', imagen: '/images/producto-25.jpeg', descripcion: 'Descripción del producto 24' },
    
    { id: 25, nombre: 'Combo Artesanal 25', categoria: 'combos', imagen: '/images/producto-26.jpeg', descripcion: 'Descripción del producto 25' },
    { id: 26, nombre: 'Combo Artesanal 31', categoria: 'combos', imagen: '/images/producto-32.jpeg', descripcion: 'Descripción del producto 31' },
    { id: 27, nombre: 'Combo Artesanal 27', categoria: 'combos', imagen: '/images/producto-28.jpeg', descripcion: 'Descripción del producto 27' },
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

