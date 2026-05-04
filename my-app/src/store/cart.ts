import { defineStore } from 'pinia'
import { trackEvent } from '../lib/analytics'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as any[],
    isOpen: false
  }),

  actions: {
    addToCart(product: any, variant: any) {
      const existing = this.items.find(i => i.id === variant.id)

      if (existing) {
        existing.quantity++
      } else {
        this.items.push({
          id: variant.id,
          title: product.title,
          price: variant.price,
          image: variant.image,
          quantity: 1,
          isFavorite: false
        })
      }

      trackEvent({ type: 'ADD_TO_CART' })
    },

    removeFromCart(id: string) {
      this.items = this.items.filter(i => i.id !== id)
    },

    openCart() {
      this.isOpen = true
    },

    closeCart() {
      this.isOpen = false
    },

    clearCart() {
      this.items = []
    },

    toggleFavorite(id: string) {
      const item = this.items.find(i => i.id === id)
      if (item) item.isFavorite = !item.isFavorite
    }
  },

  getters: {
    totalPrice(state) {
      return state.items.reduce((sum, item) => {
        return sum + item.price * item.quantity
      }, 0)
    }
  }
})