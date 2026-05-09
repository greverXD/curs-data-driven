import api from '../api/axios'

export const trackEvent = (event: {
  type: string
  page?: string
  productId?: string
}) => {
  
  api.post('/analytics/event', event)
}