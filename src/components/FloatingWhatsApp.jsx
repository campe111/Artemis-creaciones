import './FloatingWhatsApp.css'
import { trackEvent } from '../utils/analytics'

const whatsappLink = 'https://wa.me/5492284569324?text=Hola%20Artemis%2C%20quiero%20coordinar%20una%20compra'

const FloatingWhatsApp = () => {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Abrir chat de WhatsApp con Artemis"
      onClick={() => trackEvent('floating_whatsapp_click')}
    >
      <svg
        className="floating-whatsapp-icon"
        viewBox="0 0 32 32"
        role="img"
        aria-label="WhatsApp"
      >
        <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.77.73 5.47 2.12 7.86L.54 31.46a1 1 0 0 0 1.27 1.32l7.88-2.86A15.43 15.43 0 0 0 16 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5Zm0 28c-2.3 0-4.53-.6-6.5-1.73a1 1 0 0 0-.78-.08l-6.06 2.2 2.2-6.06a1 1 0 0 0-.08-.78A12.5 12.5 0 1 1 16 28.5Zm6.07-9.43c-.33-.16-1.96-.96-2.26-1.07-.3-.1-.52-.16-.74.16s-.85 1.07-1.04 1.3-.38.24-.7.08c-.33-.16-1.37-.5-2.61-1.6-.96-.86-1.6-1.92-1.78-2.24-.18-.32-.02-.5.14-.66.14-.14.32-.36.48-.54.16-.18.2-.3.3-.5.1-.2.06-.38-.03-.54-.08-.16-.74-1.78-1.02-2.43-.27-.64-.54-.56-.74-.57-.19 0-.4-.01-.62-.01-.21 0-.55.08-.84.38-.29.3-1.1 1.08-1.1 2.64 0 1.56 1.13 3.07 1.29 3.28.16.22 2.22 3.4 5.37 4.72 3.16 1.32 3.16.88 3.73.82.56-.05 1.96-.79 2.24-1.55.28-.76.28-1.41.2-1.55-.08-.14-.3-.22-.64-.38Z" />
      </svg>
    </a>
  )
}

export default FloatingWhatsApp
