import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from '../pages/HomePages.vue'
import ProductPage from '../pages/ProductPage.vue'

export const router = createRouter({
  history: createMemoryHistory(),
  routes: [
  { path: '/product/:id',component: ProductPage },
  { path: '/', component: HomePage },
  ]
})


