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