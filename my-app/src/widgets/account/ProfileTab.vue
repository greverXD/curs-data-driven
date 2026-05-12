<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../../store/auth'

const auth = useAuthStore()

const email = ref(auth.user?.email || '')
</script>

<template>

  <div>

    <!-- HEADER -->
    <div class="mb-6">

      <h2 class="text-2xl font-bold">
        Личные данные
      </h2>

      <p class="text-gray-500 mt-1">
        Информация вашего аккаунта
      </p>

    </div>

    <!-- FORM -->
    <div class="space-y-5 max-w-xl">

      <div>

        <label class="block mb-2 text-sm text-gray-500">
          Email
        </label>

        <input
          v-model="email"
          class="
            w-full
            border
            rounded-xl
            px-4 py-3
            outline-none
            focus:border-black
            transition
          "
        />

      </div>

      <button
        class="
          w-full sm:w-auto
          bg-black
          text-white
          px-6 py-3
          rounded-xl
          transition-all
          duration-300
          hover:bg-gray-800
          hover:scale-105
          active:scale-95
        "
      >
        Сохранить изменения
      </button>

    </div>

  </div>

</template>