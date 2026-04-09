import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | { email: string },
    token: localStorage.getItem('token') || null
  }),

  actions: {
    setAuth(user: any, token: string) {
      this.user = user
      this.token = token

      localStorage.setItem('token', token)
    },
      init() {
    const token = localStorage.getItem('token')
    if (token) {
      this.token = token
      
    }
  },//???

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
    }
  }
})