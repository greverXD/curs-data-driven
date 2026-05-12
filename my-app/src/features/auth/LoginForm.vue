<!-- LoginForm.vue -->

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
const loading = ref(false)

const handleLogin = async () => {
  if (loading.value) return

  try {
    loading.value = true

    const res = await login({
      email: email.value,
      password: password.value
    })

    store.setAuth(
      res.data.user,
      res.data.token
    )

    error.value = ''

    router.push('/')

  } catch (e: any) {
    error.value =
      e.response?.data?.message ||
      'Ошибка входа'
  } finally {
    loading.value = false
  }
}

const emit = defineEmits(['switch'])

const loginWithGoogle = () => {
  window.location.href =
    import.meta.env.VITE_API_URL +
    '/api/auth/google'
}
</script>

<template>

  <div
    class="
      w-full
      max-w-[380px]
    "
  >

    <h2
      class="
        text-3xl
        font-bold
        mb-8
        text-center
      "
    >
      Вход
    </h2>

    <!-- EMAIL -->
    <input
      v-model="email"
      placeholder="Email"
      class="
        w-full
        border
        px-4 py-3
        mb-4
        rounded-xl
        outline-none
        transition
        focus:border-black
      "
    />

    <!-- PASSWORD -->
    <input
      v-model="password"
      type="password"
      placeholder="Пароль"
      class="
        w-full
        border
        px-4 py-3
        mb-4
        rounded-xl
        outline-none
        transition
        focus:border-black
      "
    />

    <!-- BUTTON -->
    <button
      @click="handleLogin"
      :disabled="loading"
      class="
        w-full
        bg-black
        text-white
        py-3
        rounded-xl
        transition-all
        duration-200
        hover:bg-zinc-800
        active:scale-[0.98]
        disabled:opacity-50
      "
    >
      <span v-if="loading">
        Вход...
      </span>

      <span v-else>
        Войти
      </span>
    </button>

    <!-- SOCIAL -->
    <div class="flex gap-3 mt-5">

      <button
        class="
          flex-1
          border
          py-3
          rounded-xl
          transition
          hover:bg-gray-100
        "
        @click="loginWithGoogle"
      >
        Google
      </button>

      <button
        class="
          flex-1
          border
          py-3
          rounded-xl
          transition
          hover:bg-gray-100
        "
      >
        Instagram
      </button>

    </div>

    <!-- SWITCH -->
    <p
      class="
        mt-6
        text-sm
        text-center
      "
    >

      Нет аккаунта?

      <span
        @click="emit('switch')"
        class="
          text-blue-500
          cursor-pointer
          hover:underline
        "
      >
        Зарегистрироваться
      </span>

    </p>

    <!-- ERROR -->
    <p
      v-if="error"
      class="
        text-red-500
        text-sm
        mt-4
        text-center
      "
    >
      {{ error }}
    </p>

  </div>

</template>