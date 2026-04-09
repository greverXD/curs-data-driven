<script setup lang="ts">
import { ref } from 'vue'
import LoginForm from '../features/auth/LoginForm.vue'
import RegisterForm from '../features/auth/RegisterForm.vue'

const isLogin = ref(true)
</script>

<template>
  <div class="h-screen flex overflow-hidden">

    <div class="w-1/2 overflow-hidden">

      <div
        class="flex w-[200%] h-full transition-transform duration-700"
        :class="isLogin ? 'translate-x-0' : '-translate-x-1/2'"
      >
        <div class="w-1/2 flex items-center justify-center">
          <LoginForm @switch="isLogin = false" />
        </div>

        <div class="w-1/2 flex items-center justify-center">
          <RegisterForm @switch="isLogin = true" />
        </div>
      </div>

    </div>

    <div class="w-1/2 relative">

      <img
        :src="isLogin
          ? 'https://images.unsplash.com/photo-1521334884684-d80222895322?w=1200'
          : 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200'"
        class="w-full h-full object-cover transition duration-700"
      />

    </div>

  </div>
</template>