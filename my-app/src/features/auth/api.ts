import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export const register = (data: {
  email: string
  password: string
}) => {
  return api.post('/auth/register', data)
}

export const login = (data: {
  email: string
  password: string
}) => {
  return api.post('/auth/login', data)
}
export const verify = (data: { email: string; code: string }) => {
  return axios.post('/api/auth/verify', data)
}

export const resendCode = (email: string) => {
  return axios.post('/api/auth/resend', { email })
}