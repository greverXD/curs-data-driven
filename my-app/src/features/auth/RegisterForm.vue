<script setup lang="ts">
import { ref, watch } from 'vue'
import { register } from './api'
import { useAuthStore } from '../../store/auth'
import { useRouter } from 'vue-router'
import validator from 'validator'

const store = useAuthStore()
const router = useRouter()

const error = ref('')
const success = ref('')

const email = ref('')
const password = ref('')
const name = ref('')

const emailError = ref('')
const passwordError = ref('')

// очищаем ошибки при вводе
watch(email, () => {
  emailError.value = ''
  error.value = ''
})

watch(password, () => {
  passwordError.value = ''
  error.value = ''
})

// валидация
const validate = () => {
  emailError.value = ''
  passwordError.value = ''

  let isValid = true

  if (!validator.isEmail(email.value)) {
    emailError.value = 'Некорректный email'
    isValid = false
  }

  if (!password.value || password.value.length < 6) {
    passwordError.value = 'Пароль минимум 6 символов'
    isValid = false
  }

  return isValid
}

// регистрация
const handleRegister = async () => {
  console.log('CLICK REGISTER')
  error.value = ''
  success.value = ''

  if (!validate()) return

  try {
    const res = await register({
      email: email.value,
      password: password.value
    })

    console.log('REGISTER token:', res.data.token)

    store.setAuth(
      {
        email: email.value
      },
      res.data.token
    )

    success.value = 'Аккаунт создан 🎉'

    setTimeout(() => {
      router.push('/')
    }, 1000)

  } catch (e: any) {
    error.value = e.response?.data?.message || 'Ошибка'
  }
}

const emit = defineEmits(['switch'])

const handleGoogleLogin = () => {
  window.location.href = 'http://localhost:3000/api/auth/google'
}
</script>

<template v-if="step === 'register'">
  <div class="w-[350px]">
    <h2 class="text-2xl font-bold mb-6">Регистрация</h2>

    <!-- 🔥 FORM -->
    <form @submit.prevent="handleRegister">
      
      <!-- NAME -->
      <input
        v-model="name"
        placeholder="Имя"
        class="w-full border px-3 py-2 mb-3 rounded"
      />

      <!-- EMAIL -->
      <input
        v-model="email"
        placeholder="Email"
        :class="[
          'w-full px-3 py-2 mb-1 rounded border',
          emailError ? 'border-red-500' : 'border-gray-300'
        ]"
      />
      <p v-if="emailError" class="text-red-500 text-sm mb-2">
        {{ emailError }}
      </p>

      <!-- PASSWORD -->
      <input
        v-model="password"
        type="password"
        placeholder="Пароль"
        :class="[
          'w-full px-3 py-2 mb-1 rounded border',
          passwordError ? 'border-red-500' : 'border-gray-300'
        ]"
      />
      <p v-if="passwordError" class="text-red-500 text-sm mb-2">
        {{ passwordError }}
      </p>
      
      <!-- BUTTON -->
      <button
        type="submit"
        class="w-full bg-black text-white py-2 rounded hover:opacity-90 mt-2"
      >
        Создать аккаунт
      </button>

      <!-- SUCCESS -->
      <p v-if="success" class="text-green-500 text-sm mt-2">
        {{ success }}
      </p>

      <!-- ERROR -->
      <p v-if="error" class="text-red-500 text-sm mt-2">
        {{ error }}
      </p>
    </form>

    <!-- SOCIAL -->
    <div class="flex gap-4 mt-4">
      <button
        class="flex-1 border py-2 rounded hover:bg-gray-100"
        @click="handleGoogleLogin"
      >
        Google
      </button>
      <button class="flex-1 border py-2 rounded hover:bg-gray-100">
        Instagram
      </button>
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

<template v-else>
    <h2 class="text-2xl font-bold mb-4">Подтвердите почту</h2>

    <p class="text-sm text-gray-500 mb-3">
      Мы отправили код на {{ email }}
    </p>

    <input
      v-model="code"
      placeholder="Введите код"
      class="w-full border px-3 py-2 mb-3 rounded"
    />

    <button
      @click="handleVerify"
      class="w-full bg-black text-white py-2 rounded"
    >
      Подтвердить
    </button>

    <!-- таймер -->
    <p class="text-sm mt-3 text-gray-500">
      <span v-if="!canResend">
        Отправить повторно через {{ timer }} сек
      </span>

      <span
        v-else
        @click="handleResend"
        class="text-blue-500 cursor-pointer"
      >
        Отправить код снова
      </span>
    </p>
  </template>