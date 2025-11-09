import { useEffect, useMemo, useState, useRef } from 'react'

const IMAGE_PATH = '/images/photos-logo/'

const IMAGE_FILES = [
  'descarga (8).jpeg',
  'descarga (9).jpeg',
  'descarga (10).jpeg',
  'descarga (11).jpeg',
  'descarga (12).jpeg',
  'descarga (13).jpeg',
  'descarga (14).jpeg',
  'descarga (15).jpeg',
  'Dheepan Ratnam (@Dheepanratnam) on X.jpeg',
  'Myanmar(Burma).jpeg',
  'การตกแต่งด้วยหิน.jpeg'
]

/*
Componente Carrousel:
- Prepara las rutas de imágenes codificadas para evitar errores por espacios.
- Controla el índice activo y el autoplay con pausa por interacción.
- Ofrece navegación manual mediante flechas e indicadores.
*/
const Carrousel = ({ autoplayInterval = 5000 }) => {
  const images = useMemo(
    () => IMAGE_FILES.map((file) => encodeURI(`${IMAGE_PATH}${file}`)),
    []
  )
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(null)

  const goTo = (index) => {
    setCurrentIndex((prev) => {
      const nextIndex = (index + images.length) % images.length
      if (prev === nextIndex) {
        return prev
      }
      return nextIndex
    })
  }

  const goNext = () => goTo(currentIndex + 1)
  const goPrev = () => goTo(currentIndex - 1)

  useEffect(() => {
    if (images.length <= 1) return
    intervalRef.current = setInterval(goNext, autoplayInterval)
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [images.length, autoplayInterval, currentIndex])

  const pauseAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const resumeAutoplay = () => {
    if (!intervalRef.current && images.length > 1) {
      intervalRef.current = setInterval(goNext, autoplayInterval)
    }
  }

  return (
    <div className="carrousel" onMouseEnter={pauseAutoplay} onMouseLeave={resumeAutoplay}>
      <button className="nav-btn prev" onClick={goPrev} aria-label="Imagen anterior">
        ‹
      </button>

      <div className="viewport" role="region" aria-roledescription="Carrusel de imágenes">
        <div className="track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, index) => (
            <div className="slide" key={src} aria-hidden={currentIndex !== index}>
              <img src={src} alt={`Carrusel ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <button className="nav-btn next" onClick={goNext} aria-label="Imagen siguiente">
        ›
      </button>

      {images.length > 1 && (
        <div className="dots" role="tablist">
          {images.map((_, index) => (
            <button
              key={`dot-${index}`}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              aria-label={`Mostrar imagen ${index + 1}`}
              aria-selected={index === currentIndex}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        .carrousel {
          position: relative;
          width: min(960px, 95vw);
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .viewport {
          flex: 1;
          overflow: hidden;
          border-radius: 24px;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.22);
          background: #000;
        }

        .track {
          display: flex;
          transition: transform 0.6s ease;
        }

        .slide {
          min-width: 100%;
          aspect-ratio: 16 / 9;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .nav-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.4);
          background: rgba(0, 0, 0, 0.4);
          color: #fff;
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .nav-btn:hover {
          transform: translateY(-2px);
          background: rgba(0, 0, 0, 0.6);
        }

        .dots {
          position: absolute;
          bottom: 0.75rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 2;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.35);
          cursor: pointer;
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .dot.active {
          transform: scale(1.2);
          background: #fff;
        }

        @media (max-width: 768px) {
          .carrousel {
            width: 100%;
            gap: 0.75rem;
          }

          .nav-btn {
            width: 40px;
            height: 40px;
            font-size: 1.6rem;
          }

          .slide {
            aspect-ratio: 4 / 3;
          }
        }

        @media (max-width: 480px) {
          .carrousel {
            gap: 0.5rem;
          }

          .nav-btn {
            width: 34px;
            height: 34px;
            font-size: 1.4rem;
          }

          .slide {
            aspect-ratio: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default Carrousel
