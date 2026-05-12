<script setup lang="ts">
import { useAuthStore } from '../store/auth'
import { useRouter } from 'vue-router'
import { computed, watch, ref } from 'vue'
import { useCartStore } from '../store/cart'

const cart = useCartStore()
const auth = useAuthStore()
const router = useRouter()

const isAuth = computed(() => !!auth.token)

const isMenuOpen = ref(false)

const handleLogout = () => {
  auth.logout()
  router.push('/')
}

watch(
  () => cart.isOpen,
  (val) => {
    document.body.style.overflow = val ? 'hidden' : 'auto'
  }
)
</script>

<template>
  <header class="border-b bg-white sticky top-0 z-50">
    
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      
      <div class="flex items-center justify-between h-[70px]">

        <!-- LOGO -->
        <h1 class="font-bold text-xl shrink-0">
          MyShop
        </h1>

        <!-- DESKTOP NAV -->
        <nav class="hidden md:flex gap-6 text-gray-600">
          <router-link to="/">Главная</router-link>
          <router-link to="/catalog">Каталог</router-link>
          <router-link to="/new">Новинки</router-link>
          <router-link to="/sale">Распродажа</router-link>
        </nav>

        <!-- RIGHT -->
        <div class="hidden md:flex items-center gap-4 text-xl">
          
          <button class="hover:scale-110 transition">
            🔍
          </button>

          <template v-if="isAuth">
            <button @click="handleLogout">
              Выйти
            </button>

            <router-link to="/account">
              👤
            </router-link>

            <button @click="cart.openCart()">
              🛒
            </button>
          </template>

          <template v-else>
            <router-link to="/auth">
              Войти
            </router-link>
          </template>
        </div>

        <!-- MOBILE BUTTON -->
        <button
          class="md:hidden text-2xl"
          @click="isMenuOpen = !isMenuOpen"
        >
          ☰
        </button>
      </div>

      <!-- MOBILE MENU -->
      <div
        v-if="isMenuOpen"
        class="md:hidden flex flex-col gap-4 py-4 border-t"
      >
        <router-link to="/" @click="isMenuOpen = false">
          Главная
        </router-link>

        <router-link to="/catalog" @click="isMenuOpen = false">
          Каталог
        </router-link>

        <router-link to="/new" @click="isMenuOpen = false">
          Новинки
        </router-link>

        <router-link to="/sale" @click="isMenuOpen = false">
          Распродажа
        </router-link>

        <template v-if="isAuth">
          <router-link to="/account">
            Аккаунт
          </router-link>

          <button @click="cart.openCart()">
            Корзина
          </button>

          <button @click="handleLogout">
            Выйти
          </button>
        </template>

        <template v-else>
          <router-link to="/auth">
            Войти
          </router-link>
        </template>
      </div>

    </div>
  </header>
</template>