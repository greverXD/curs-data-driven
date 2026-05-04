import axios from "axios"

export const trackEvent = (event: {
  type: string
  page?: string
}) => {
  axios.post('/analytics/event', event)
}