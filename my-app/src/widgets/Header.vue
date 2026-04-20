<script setup lang="ts">
import { useAuthStore } from '../store/auth'
import { useRouter } from 'vue-router'
const auth = useAuthStore()
const router = useRouter()
const handleLogout = () => {
  auth.logout()
  router.push('/')
}
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
  <template v-if="auth.token">
    <button @click="handleLogout">
      Выйти
    </button>
  </template>
      <template v-if="!auth.token">
      <router-link to="/auth">Войти</router-link>
      </template>
      <template v-if="!auth.token">
      <router-link to="/profile">👤</router-link>
      <button class="hover:scale-110 transition"><router-link to="/cart">🛒</router-link></button>
      </template>
    </div>
  </header>
</template>