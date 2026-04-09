import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router/router'
import { createPinia } from 'pinia'
import { useAuthStore } from './store/auth'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
app.use(router)

const auth = useAuthStore()
auth.init()

app.mount('#app')