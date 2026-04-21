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
      if (token) {
        this.token = token
      }
    },
    setAuth(user: any, token: string) {
      this.user = user
      this.token = token
      localStorage.setItem('token', token)
    },

    logout() {
      this.user = null
      this.token = ''
      localStorage.removeItem('token')
    }
  }
})