<script setup lang="ts">
import { ref } from 'vue'
import { login } from './api'
import { useAuthStore } from '../../store/auth'
import { useRouter } from 'vue-router'

const store = useAuthStore()
const router = useRouter()

const error = ref('')
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    const res = await login({
      email: email.value,
      password: password.value
    })
    store.setAuth(res.data.user, res.data.token)

    error.value = ''
    router.push('/')
  } catch (e: any) {
    error.value = e.response?.data?.message || 'Ошибка входа'
  }
}

const emit = defineEmits(['switch'])

const loginWithGoogle = () => {
  window.location.href = 'http://localhost:3000/api/auth/google'
}
</script>

<template>
  <div class="w-[350px]">
    <h2 class="text-2xl font-bold mb-6">Вход</h2>

    <input v-model="email" placeholder="Email" class="w-full border px-3 py-2 mb-3 rounded" />
    <input v-model="password" type="password" placeholder="Пароль" class="w-full border px-3 py-2 mb-3 rounded" />

    <button
      @click="handleLogin"
      class="w-full bg-black text-white py-2 rounded hover:opacity-90"
    >
      Войти
    </button>

    <div class="flex gap-4 mt-4">
      <button class="flex-1 border py-2 rounded hover:bg-gray-100;" @click="loginWithGoogle">
        Google
      </button>
      <button class="flex-1 border py-2 rounded hover:bg-gray-100;">
        Instagram
      </button>
    </div>

    <p class="mt-4 text-sm">
      Нет аккаунта?
      <span @click="emit('switch')" class="text-blue-500 cursor-pointer">
        Зарегистрироваться
      </span>
    </p>

    <p v-if="error" class="text-red-500 text-sm">
      {{ error }}
    </p>
  </div>
</template>