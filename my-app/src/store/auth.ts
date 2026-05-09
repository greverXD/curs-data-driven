import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | {
      id: string
      email: string
      role: string
    },
    token: ''
  }),

  actions: {
init() {
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')

  if (token) {
    this.token = token
  }

  if (user) {
    this.user = JSON.parse(user)
  }
},
setAuth(user: any, token: string) {
  this.user = user
  this.token = token

  localStorage.setItem('token', token)
  localStorage.setItem('user', JSON.stringify(user))
},

logout() {
  this.user = null
  this.token = ''

  localStorage.removeItem('token')
  localStorage.removeItem('user')
}
  }
})