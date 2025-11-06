# 🌿 Artemis - Creaciones Artesanales en Yeso

Sitio web para el emprendimiento ARTEMIS , dedicado a la exhibición y venta de piezas artesanales en yeso. Este proyecto busca transmitir la estética, el cuidado y la identidad detrás de cada creación, combinando diseño visual con funcionalidad web.

---

## 🧱 Características del proyecto

- ✅ Catálogo visual de productos en yeso
- ✅ Diseño adaptable (responsive) para móviles y escritorio
- ✅ Estilo artesanal con enfoque en la estética y el detalle
- ✅ Secciones: Inicio, Catálogo, Sobre Artemis, Contacto
- ✅ Integración con redes sociales
- ✅ Navegación fluida con React Router
- ✅ Menú móvil funcional

---

## 🛠️ Tecnologías utilizadas

- **React** con Vite para desarrollo rápido
- **React Router DOM** para navegación
- **CSS personalizado** con gradientes, overlays y variables
- **Vercel** para despliegue
- **Git/GitHub** para control de versiones

---

## 📁 Estructura del proyecto

```
Artemis-creaciones/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── Header.jsx     # Navegación principal
│   │   ├── Header.css
│   │   ├── Footer.jsx     # Pie de página con redes sociales
│   │   └── Footer.css
│   ├── pages/             # Páginas principales
│   │   ├── Inicio.jsx     # Página de inicio
│   │   ├── Inicio.css
│   │   ├── Catalogo.jsx   # Catálogo de productos
│   │   ├── Catalogo.css
│   │   ├── Sobre.jsx      # Información sobre Artemis
│   │   ├── Sobre.css
│   │   ├── Contacto.jsx   # Formulario de contacto
│   │   └── Contacto.css
│   ├── styles/
│   │   └── index.css      # Estilos globales y variables
│   ├── App.jsx            # Componente principal con routing
│   └── main.jsx           # Punto de entrada
├── index.html
├── package.json
├── vite.config.js
├── vercel.json            # Configuración para Vercel
└── README.md
```

---

## 🚀 Instalación y uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos para ejecutar el proyecto

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   El proyecto estará disponible en `http://localhost:5173`

4. **Compilar para producción:**
   ```bash
   npm run build
   ```

5. **Previsualizar build de producción:**
   ```bash
   npm run preview
   ```

---

## 🎨 Personalización

### Colores

Los colores principales están definidos en `src/styles/index.css` como variables CSS:

- `--color-cream`: Color de fondo principal (#f5f1e8)
- `--color-light-brown`: Marrón claro (#d4c5b0)
- `--color-medium-brown`: Marrón medio (#8b7355)
- `--color-dark-brown`: Marrón oscuro (#65513a)
- `--color-dark`: Color oscuro (#3d3425)

### Contenido

- **Productos**: Editar el array `productos` en `src/pages/Catalogo.jsx`
- **Información de contacto**: Modificar `src/pages/Contacto.jsx`
- **Redes sociales**: Actualizar los enlaces en `src/components/Footer.jsx` y `src/pages/Contacto.jsx`

---

## 📱 Responsive Design

El sitio está completamente optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Escritorio (1024px+)

---

## 🌐 Despliegue en Vercel

1. Conecta tu repositorio de GitHub con Vercel
2. Vercel detectará automáticamente el proyecto React
3. El archivo `vercel.json` ya está configurado para SPA routing
4. ¡Listo! Tu sitio estará en línea

---

## 📝 Próximas mejoras

- [ ] Integración con base de datos para productos
- [ ] Sistema de carrito de compras
- [ ] Galería de imágenes reales
- [ ] Blog o sección de noticias
- [ ] Integración con pasarela de pagos
- [ ] Sistema de reseñas

---

## 📄 Licencia

Este proyecto es propiedad de Artemis - Creaciones Artesanales.

---

## 👤 Contacto

Para más información sobre las creaciones artesanales, visita el sitio web o contacta a través de las redes sociales.

---

**Hecho con ❤️ para Artemis**
