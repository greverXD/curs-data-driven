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

    <!-- MOBILE BURGER -->
    <button
      class="md:hidden text-3xl"
      @click="isMenuOpen = true"
    >
      ☰
    </button>

    <!-- LOGO -->
    <h1 class="font-bold text-xl shrink-0">
      MyShop
    </h1>

    <!-- DESKTOP NAV -->
    <nav class="hidden md:flex gap-4 text-gray-600">

      <router-link to="/">
        Главная
      </router-link>

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
  <div class="flex items-center gap-4 text-xl">

    <!-- DESKTOP -->
    <div class="hidden md:flex items-center gap-4">

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

      </template>

      <template v-else>

        <router-link to="/auth">
          Войти
        </router-link>

      </template>

    </div>

    <!-- CART -->
    <button
      @click="cart.openCart()"
      class="relative hover:scale-110 transition"
    >
      🛒

      <span
        v-if="cart.items.length"
        class="
          absolute
          -top-2
          -right-2
          bg-red-500
          text-white
          text-xs
          rounded-full
          w-5 h-5
          flex items-center justify-center
        "
      >
        {{ cart.items.length }}
      </span>

    </button>

  </div>

</div>

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