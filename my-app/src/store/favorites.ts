import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritesStore =
  defineStore('favorites', () => {

    const favorites = ref<any[]>([])

    const isLiked = (id: string) => {
      return favorites.value.some(
        p => p.id === id
      )
    }

    const toggleFavorite = (
      product: any
    ) => {
      const exists =
        favorites.value.find(
          p => p.id === product.id
        )

      if (exists) {
        favorites.value =
          favorites.value.filter(
            p => p.id !== product.id
          )
      } else {
        favorites.value.push(product)
      }

      localStorage.setItem(
        'favorites',
        JSON.stringify(
          favorites.value
        )
      )
    }

    const loadFavorites = () => {
      const data =
        localStorage.getItem(
          'favorites'
        )

      if (data) {
        favorites.value =
          JSON.parse(data)
      }
    }

    return {
      favorites,
      isLiked,
      toggleFavorite,
      loadFavorites
    }
  })