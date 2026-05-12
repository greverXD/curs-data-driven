import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { i18n } from './i18n'
import { router } from './router/router'

import { createPinia } from 'pinia'
import { useAuthStore } from './store/auth'

import { detectLocale } from './shared/services/locale'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)

const authStore = useAuthStore()
authStore.init()

app.use(i18n)

app.use(router)

await detectLocale()

app.mount('#app')