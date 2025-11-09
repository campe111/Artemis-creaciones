import { useState } from 'react'
import './Catalogo.css'

const Catalogo = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [selectedImage, setSelectedImage] = useState(null)

  // Productos con imágenes reales
  const productos = [
    { id: 1, nombre: 'Combo Shine', categoria: 'combos', imagen: '/images/producto-01.jpeg', descripcion: 'Este combo contiene una bandeja ovalada grande, una caramelera, un portavela con vela incluida y un difusor.' },
    { id: 2, nombre: 'Combo Caliz Glow', categoria: 'combos', imagen: '/images/producto-02.jpeg', descripcion: 'Este combo contiene una bandeja ovalada chica, un caliz con vela y un difusor.' },
    { id: 3, nombre: 'Combo Pink', categoria: 'combos', imagen: '/images/producto-03.jpeg', descripcion: 'Este combo contiene una bandeja ovalada chica, una caramelera y un florero con las flores secas.' },
    { id: 4, nombre: 'Combo Green', categoria: 'combos', imagen: '/images/producto-04.jpeg', descripcion: 'Este combo contiene una bandeja ovalada chica, una caramelera y un florero con las flores secas.' },
    { id: 5, nombre: 'Combo Gold', categoria: 'combos', imagen: '/images/producto-05.jpeg', descripcion: 'Este combo contiene una bandeja ovalada grande, una caramelera, un portavela con vela incluida y un portasahumerio de rosa.' },
    { id: 6, nombre: 'Combo White Shine', categoria: 'combos', imagen: '/images/producto-06.jpeg', descripcion: 'Este combo contiene una bandeja ovalada chica, un portavela con vela incluida y un portasahumerio sol y luna.' },
    { id: 7, nombre: 'Combo Buda gray', categoria: 'combos', imagen: '/images/producto-07.jpeg', descripcion: 'Este combo contiene una bandeja ovalada burbuja, un buda portasahumerio y un florero cilindro.' },
    { id: 8, nombre: 'Combo Salpicado Black', categoria: 'combos', imagen: '/images/producto-08.jpeg', descripcion: 'Este combo contiene una bandeja ovalada grande, un florero facetado con flores secas, vela , caliz y un difusor.' },
    { id: 9, nombre: 'Combo Love', categoria: 'combos', imagen: '/images/producto-09.jpeg', descripcion: 'Este combo contiene una bandeja ovalada chica , Love y un corazon portasahumerio.' },
    { id: 10, nombre: 'Combo Salpicado Red', categoria: 'combos', imagen: '/images/producto-10.jpeg', descripcion: 'Este combo contiene una bandeja ovalada chica , una caramelera,un difusor y vela.' },
    { id: 11, nombre: 'Combo Salpicado B&R', categoria: 'combos', imagen: '/images/producto-11.jpeg', descripcion: 'Este combo contiene una bandeja ovalada chica, un florero botella con flores secas, portavela y vela.' },
    { id: 12, nombre: 'Combo Aroma y Luz', categoria: 'combos', imagen: '/images/producto-12.jpeg', descripcion: 'Este combo contiene una bandeja ovalada grande, un florero facetado con flores secas,vela, difusor y caramelera.' },
    { id: 13, nombre: 'Combo Abundancia', categoria: 'combos', imagen: '/images/producto-13.jpeg', descripcion: 'Este combo contiene una bandeja ovalada chica, un adorno buda sobre elefante, vela y difusor.' },
    { id: 14, nombre: 'Combo Maceta Black', categoria: 'combos', imagen: '/images/producto-14.jpeg', descripcion: 'Este combo contiene una maseta diamante grande.' },
    { id: 15, nombre: 'Combo Gratefully', categoria: 'combos', imagen: '/images/producto-15.jpeg', descripcion: 'Este combo contiene una bandeja ovalada chica, un difusor y una cascada con portavela.' },
    { id: 16, nombre: 'Combo Rosa Splash', categoria: 'combos', imagen: '/images/producto-16.jpeg', descripcion: 'Este combo contiene una bandeja ovalada chica, un difusor, caramelera y un portasahumerio de rosa.' },
    { id: 17, nombre: 'Combo Alhajero Pico', categoria: 'combos', imagen: '/images/producto-18.jpeg', descripcion: 'Este combo contiene una bandeja ovalada chica, un florero con flores secas y un alhajero pico.' },
    { id: 18, nombre: 'Combo Full Black', categoria: 'combos', imagen: '/images/producto-18.jpeg', descripcion: 'Este combo contiene una bandeja ovalada grande, un portasahumerio rosa, una caramelera y un portavela.' },
    { id: 19, nombre: 'Combo Rosaura Mistica', categoria: 'combos', imagen: '/images/producto-19.jpeg', descripcion: 'Este combo contiene una bandeja ovalada chica, una caramelera y un portasahumerio rosa.' },
    { id: 20, nombre: 'Combo Brisa Rosa', categoria: 'combos', imagen: '/images/producto-20.jpeg', descripcion: 'Este combo contiene una bandeja ovalada grande, un florero con flores secas,un difusor,un portasahumerio rosa y de regalo 1 paquete de sahumerios tiple empaste.' },
    { id: 21, nombre: 'Combo Eclipse Rojo', categoria: 'combos', imagen: '/images/producto-21.jpeg', descripcion: 'Este combo contiene una bandeja ovalada chica, un difusor y caramelera.' },
    { id: 22, nombre: 'Combo Carmesi', categoria: 'combos', imagen: '/images/producto-22.jpeg', descripcion: 'Este combo contiene una bandeja ovalada chica, una caramelera con tapa corazon y un difusor.' },
    { id: 23, nombre: 'Combo Corazon de Caramelo ', categoria: 'combos', imagen: '/images/producto-23.jpeg', descripcion: 'Este combo contiene una bandeja corazon con burbuja,un corazon portasahumerio y un difusor.' },
    { id: 24, nombre: 'Combo Perlado ', categoria: 'combos', imagen: '/images/producto-24.jpeg', descripcion: 'Este combo contiene una bandeja corazon con burbuja,un corazon portasahumerio y un budita.' },
    { id: 25, nombre: 'Combo Estrella Portasahumerio', categoria: 'combos', imagen: '/images/producto-25.jpeg', descripcion: 'Este combo contiene un portasahumerio con forma de estrella.' },
    { id: 26, nombre: 'Combo Alba ', categoria: 'combos', imagen: '/images/producto-26.jpeg', descripcion: 'Este combo contiene una bandeja ovalada chica, una caramelera, un florero facetado con flores secas y un difusor.' },
    { id: 27, nombre: 'Combo Alba', categoria: 'combos', imagen: '/images/producto-27.jpeg', descripcion: 'Este combo contiene una bandeja ovalada chica, una caramelera y un florero facetado con flores secas.' },
    { id: 28, nombre: 'Combo Iluminacion', categoria: 'combos', imagen: '/images/producto-28.jpeg', descripcion: 'Este combo contiene una bandeja ovalada grande, una caramelera,un florero botella con flores secas y una vela burbuja.' },
    { id: 29, nombre: 'Combo Corazon de Marfil', categoria: 'combos', imagen: '/images/producto-29.jpeg', descripcion: 'Este combo contiene una bandeja Corazon con borde de burbuja, un budita y un difusor.' },
    { id: 30, nombre: 'Combo Zen Interior', categoria: 'combos', imagen: '/images/producto-30.jpeg', descripcion: 'Este combo contiene una bandeja ovalada chica, un caliz con vela Loto y un Budita.' },
    
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
                  <p className="producto-descripcion">{producto.descripcion}</p>
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

