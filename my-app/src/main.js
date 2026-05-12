import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { i18n } from './i18n'
import { router } from './router/router'

import { createPinia } from 'pinia'

import { useAuthStore } from './store/auth'
import { useFavoritesStore } from './store/favorites'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)

// auth
const authStore = useAuthStore()
authStore.init()

// favorites
const favoritesStore =
  useFavoritesStore()

favoritesStore.loadFavorites()

app.use(i18n)

app.use(router)

app.mount('#app')


// await detectLocale()
// // import { detectLocale } from './shared/services/locale'