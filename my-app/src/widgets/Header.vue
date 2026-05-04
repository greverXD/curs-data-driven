<script setup lang="ts">
import { useAuthStore } from '../store/auth'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { useCartStore } from '../store/cart'
import {watch} from "vue"
const cart = useCartStore()
const auth = useAuthStore()
const router = useRouter()
const isAuth = computed(() => !!auth.token)
const handleLogout = () => {
  auth.logout()
  router.push('/')
}
console.log('HEADER token:', auth.token)
watch(
  () => cart.isOpen,
  (val) => {
    document.body.style.overflow = val ? 'hidden' : 'auto'
  }
)
</script>

<template>
  <header class="flex justify-between items-center px-8 py-4 border-b h-[100px]">
    <div class="flex gap-6 items-center">
      <h1 class="font-bold text-xl">MyShop</h1>

      <nav class="flex gap-4 text-gray-600">
        <router-link to="/">Главная</router-link>
        <router-link to="/catalog">Каталог</router-link>
        <a href="#">Новинки</a>
        <a href="#">Распродажа</a>
      </nav>
    </div>

    <div class="flex items-center gap-4 text-xl">

      <button class="hover:scale-110 transition">🔍</button>
<template v-if="isAuth">
  <button @click="handleLogout">Выйти</button>
</template>

<template v-else>
  <router-link to="/auth">Войти</router-link>
</template>
<template v-if="isAuth">
  <router-link to="/account">👤</router-link>
  <button @click="cart.openCart()">
    🛒
  </button>
</template>
    </div>
  </header>
</template>