import { track } from '@vercel/analytics'

export const trackEvent = (eventName, payload = {}) => {
  try {
    track(eventName, payload)
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn('No se pudo registrar el evento', eventName, error)
    }
  }
}
