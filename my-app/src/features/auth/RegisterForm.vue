<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['switch'])

const name = ref('')
const email = ref('')
const password = ref('')
const handleGoogleLogin = () => {
  window.location.href = 'http://localhost:5173/api/auth/google'
}
</script>

<template>
  <div class="w-[350px]">
    <h2 class="text-2xl font-bold mb-6">Регистрация</h2>

    <input v-model="name" placeholder="Имя" class="w-full border px-3 py-2 mb-3 rounded" />
    <input v-model="email" placeholder="Email" class="w-full border px-3 py-2 mb-3 rounded" />
    <input v-model="password" type="password" placeholder="Пароль" class="w-full border px-3 py-2 mb-3 rounded" />

    <button class="w-full bg-black text-white py-2 rounded;">Создать аккаунт</button>

    <div class="flex gap-4 mt-4">
      <button class="flex-1 border py-2 rounded hover:bg-gray-100;" @click="handleGoogleLogin">Google</button>
      <button class="flex-1 border py-2 rounded hover:bg-gray-100;">Instagram</button>
    </div>

    <p class="mt-4 text-sm">
      Уже есть аккаунт?
      <span
        @click="emit('switch')"
        class="text-blue-500 cursor-pointer"
      >
        Войти
      </span>
    </p>
  </div>
</template>
