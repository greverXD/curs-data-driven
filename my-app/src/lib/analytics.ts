import api from '../api/axios'

export const trackEvent = (event: {
  type: string
  page?: string
  productId?: string
}) => {
  
  if (
  window.location.pathname.startsWith('/admin')
) {
  return
}

api.post('/analytics/event', event)
}