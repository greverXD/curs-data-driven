import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '../pages/HomePages.vue'
import ProductPage from '../pages/ProductPage.vue'
import CatalogPage from '../pages/CatalogPage.vue'
import AuthPage from '../pages/AuthPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import PaymentPage from '../pages/PaymentPage.vue'
import ReturnPage from '../pages/ReturnPage.vue'
import DeliveryPage from '../pages/DeliveryPage.vue'
import ContactsPage from '../pages/ContactsPage.vue'
import TrackOrderPage from '../pages/TrackOrderPage.vue'
import AccountPage from '../pages/AccountPage.vue'
import CartPage from '../pages/CartPage.vue'
export const router = createRouter({
  history: createWebHistory(),
  routes: [
  { path: '/product/:id',component: ProductPage },
  { path: '/',name: "/", component: HomePage },
  { path: '/catalog',name:"/catalog" , component: CatalogPage},
  { path: '/auth',name: 'auth',component: AuthPage },
  { path: '/about',name: 'about',component: AboutPage },
  { path: '/payment',name: 'payment',component: PaymentPage },
  { path: '/return',name: 'return',component: ReturnPage },
  { path: '/delivery',name: 'delivery',component: DeliveryPage },
  { path: '/contact',name: 'contact',component: ContactsPage },
  { path: '/track',name: 'track',component: TrackOrderPage },
  ]
})





