import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router/router'
import { createPinia } from 'pinia'
import { useAuthStore } from './store/auth'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)

const authStore = useAuthStore()
authStore.init()

app.use(router)

app.mount('#app')