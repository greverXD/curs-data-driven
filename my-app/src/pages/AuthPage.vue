<!-- AuthPage.vue -->

<script setup lang="ts">
import { ref } from 'vue'

import LoginForm from '../features/auth/LoginForm.vue'
import RegisterForm from '../features/auth/RegisterForm.vue'

const isLogin = ref(true)
</script>

<template>

  <div
    class="
      min-h-screen
      flex
      flex-col
      lg:flex-row
      overflow-hidden
      bg-white
    "
  >

    <!-- FORM SIDE -->
    <div
      class="
        w-full
        lg:w-1/2
        flex
        items-center
        justify-center
        px-4
        sm:px-6
        py-10
      "
    >

      <div
        class="
          w-full
          max-w-md
          overflow-hidden
        "
      >

        <div
          class="
            flex
            w-[200%]
            transition-transform
            duration-700
          "
          :class="
            isLogin
              ? 'translate-x-0'
              : '-translate-x-1/2'
          "
        >

          <!-- LOGIN -->
          <div class="w-1/2 flex justify-center">
            <LoginForm @switch="isLogin = false" />
          </div>

          <!-- REGISTER -->
          <div class="w-1/2 flex justify-center">
            <RegisterForm @switch="isLogin = true" />
          </div>

        </div>

      </div>

    </div>

    <!-- IMAGE SIDE -->
    <div
      class="
        hidden
        lg:block
        w-1/2
        relative
      "
    >

      <img
        :src="
          isLogin
            ? 'https://images.unsplash.com/photo-1521334884684-d80222895322?w=1200'
            : 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200'
        "
        class="
          w-full
          h-full
          object-cover
          transition
          duration-700
        "
      />

      <div class="absolute inset-0 bg-black/20"></div>

    </div>

  </div>

</template>