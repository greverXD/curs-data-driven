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
  isMenuOpen.value = false
}

const closeMenu = () => {
  isMenuOpen.value = false
}

watch(
  () => cart.isOpen,
  (val) => {
    document.body.style.overflow = val ? 'hidden' : 'auto'
  }
)

watch(isMenuOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : 'auto'
})
</script>

<template>
  <header class="sticky top-0 z-50 bg-white border-b">

    <div class="flex justify-between items-center px-4 md:px-8 h-[80px]">

      <!-- LEFT -->
      <div class="flex items-center gap-6">

        <h1 class="font-bold text-xl shrink-0">
          MyShop
        </h1>

        <!-- DESKTOP NAV -->
        <nav class="hidden md:flex gap-4 text-gray-600">
          <router-link to="/">Главная</router-link>

          <router-link to="/catalog">
            Каталог
          </router-link>

          <router-link to="/new">
            Новинки
          </router-link>

          <router-link to="/sale">
            Распродажа
          </router-link>
        </nav>

      </div>

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

      <!-- MOBILE BURGER -->
      <button
        class="md:hidden text-3xl"
        @click="isMenuOpen = true"
      >
        ☰
      </button>

    </div>

    <!-- OVERLAY -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-black/50 z-[90]"
        @click="closeMenu"
      />
    </transition>

    <!-- MOBILE MENU -->
    <transition name="slide">
      <div
        v-if="isMenuOpen"
        class="fixed top-0 right-0 h-full w-[280px] bg-white z-[100] shadow-2xl p-6 flex flex-col"
      >

        <div class="flex items-center justify-between mb-10">

          <h2 class="text-2xl font-bold">
            Menu
          </h2>

          <button
            class="text-3xl"
            @click="closeMenu"
          >
            ✕
          </button>

        </div>

        <nav class="flex flex-col gap-6 text-lg">

          <router-link to="/" @click="closeMenu">
            Главная
          </router-link>

          <router-link to="/catalog" @click="closeMenu">
            Каталог
          </router-link>

          <router-link to="/new" @click="closeMenu">
            Новинки
          </router-link>

          <router-link to="/sale" @click="closeMenu">
            Распродажа
          </router-link>

          <template v-if="isAuth">

            <router-link to="/account" @click="closeMenu">
              Аккаунт
            </router-link>

            <button
              class="text-left"
              @click="cart.openCart(); closeMenu()"
            >
              Корзина
            </button>

            <button
              class="text-left text-red-500"
              @click="handleLogout"
            >
              Выйти
            </button>

          </template>

          <template v-else>

            <router-link to="/auth" @click="closeMenu">
              Войти
            </router-link>

          </template>

        </nav>

      </div>
    </transition>

  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>