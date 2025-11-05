import { useState } from 'react'
import './Catalogo.css'

const Catalogo = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos')

  // Datos de ejemplo - Reemplazar con datos reales
  const productos = [
    { id: 1, nombre: 'Vaso Artesanal', categoria: 'decorativos', precio: '$25.000', imagen: '🪴' },
    { id: 2, nombre: 'Portavelas Clásico', categoria: 'decorativos', precio: '$18.000', imagen: '🕯️' },
    { id: 3, nombre: 'Maceta Pequeña', categoria: 'funcionales', precio: '$20.000', imagen: '🌱' },
    { id: 4, nombre: 'Reloj de Pared', categoria: 'decorativos', precio: '$35.000', imagen: '🕐' },
    { id: 5, nombre: 'Maceta Grande', categoria: 'funcionales', precio: '$45.000', imagen: '🌿' },
    { id: 6, nombre: 'Porta Incienso', categoria: 'decorativos', precio: '$15.000', imagen: '💨' },
    { id: 7, nombre: 'Jarrón Decorativo', categoria: 'decorativos', precio: '$40.000', imagen: '🏺' },
    { id: 8, nombre: 'Maceta Mediana', categoria: 'funcionales', precio: '$30.000', imagen: '🪴' },
  ]

  const categorias = ['todos', 'decorativos', 'funcionales']

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
                {categoria === 'todos' ? 'Todos' : categoria.charAt(0).toUpperCase() + categoria.slice(1)}
              </button>
            ))}
          </div>

          <div className="productos-grid">
            {productosFiltrados.map(producto => (
              <div key={producto.id} className="producto-card">
                <div className="producto-imagen">
                  <div className="producto-emoji">{producto.imagen}</div>
                </div>
                <div className="producto-info">
                  <h3>{producto.nombre}</h3>
                  <p className="producto-categoria">{producto.categoria}</p>
                  <p className="producto-precio">{producto.precio}</p>
                  <button className="btn-producto">Ver Detalles</button>
                </div>
              </div>
            ))}
          </div>

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

