import { createWebHistory, createRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'
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
import CartPage from '../pages/CartPage.vue'
import AuthSuccess from '../pages/AuthSuccess.vue'
import AdminDashboard from '../pages/admin/AdminDashboard.vue'
import AccountLayout from '../pages/AccountLayout.vue'
import AddressesTab from '../widgets/account/AddressesTab.vue'
import FavoritesTab from '../widgets/account/FavoritesTab.vue'
import OrdersTab from '../widgets/account/OrdersTab.vue'
import PaymentTab from '../widgets/account/PaymentTab.vue'
import ProfileTab from '../widgets/account/ProfileTab.vue'
import SettingsTab from '../widgets/account/SettingsTab.vue'
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/product/:id', component: ProductPage },
    { path: '/', component: HomePage },
    { path: '/catalog', component: CatalogPage },
    { path: '/auth', component: AuthPage },
    { path: '/about', component: AboutPage },
    { path: '/payment', component: PaymentPage },
    { path: '/return', component: ReturnPage },
    { path: '/delivery', component: DeliveryPage },
    { path: '/contact', component: ContactsPage },
    { path: '/track', component: TrackOrderPage },
    { path: '/auth-success', component: AuthSuccess },
    { path: '/admin', component: AdminDashboard },

    {
      path: '/account',
      component: AccountLayout,
      children: [
        { path: '', name: 'profile', component: ProfileTab },
        { path: 'orders', name: 'orders', component: OrdersTab },
        { path: 'favorites', name: 'favorites', component: FavoritesTab },
        { path: 'addresses', name: 'addresses', component: AddressesTab },
        { path: 'payment', name: 'payment', component: PaymentTab },
        { path: 'settings', name: 'settings', component: SettingsTab }
      ]
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore()
//   const user = authStore.user

//   if (to.path.startsWith('/admin') && user?.role !== 'ADMIN') {
//     return next('/')
//   }

//   next()
// })






