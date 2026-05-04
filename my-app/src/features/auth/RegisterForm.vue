<script setup lang="ts">
import { ref, watch } from 'vue'
import { register, verify, resendCode } from './api'
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
const code = ref('')
const loading = ref(false)
const step = ref<'register' | 'verify'>('register')

const emailError = ref('')
const passwordError = ref('')

watch(email, () => {
  emailError.value = ''
  error.value = ''
})

watch(password, () => {
  passwordError.value = ''
  error.value = ''
})

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

const handleRegister = async () => {
  if (loading.value) return 

  error.value = ''
  success.value = ''

  if (!validate()) return

  loading.value = true

  try {
    const res = await register({
      email: email.value,
      password: password.value
    })

    if (res.data.isResend) {
      success.value = 'Аккаунт уже существует. Код отправлен повторно 📩'
    } else {
      success.value = 'Проверьте почту 📩'
    }

    step.value = 'verify'
    startTimer()

  } catch (e: any) {
    error.value = e.response?.data?.message || 'Ошибка'
  } finally {
    loading.value = false
  }
}

const handleVerify = async () => {
  try {
    const res = await verify({
      email: email.value,
      code: code.value
    })

    store.setAuth(res.data.user, res.data.token)
    router.push('/')

  } catch (e: any) {
    error.value = e.response?.data?.message || 'Неверный код'
  }
}



const timer = ref(10)
const canResend = ref(false)

let interval: any = null

const startTimer = () => {
  timer.value = 10
  canResend.value = false

  interval = setInterval(() => {
    timer.value--

    if (timer.value <= 0) {
      clearInterval(interval)
      canResend.value = true
    }
  }, 1000)
}



const handleResend = async () => {
  try {
    await resendCode(email.value)
    startTimer()
  } catch (e) {
    error.value = 'Ошибка при повторной отправке'
  }
}
const emit = defineEmits(['switch'])

const handleGoogleLogin = () => {
  window.location.href = 'http://localhost:3000/api/auth/google'
}
</script>

<template>
<div class="w-[350px]">

  <!-- 🔥 REGISTER -->
  <template v-if="step === 'register'">
    <h2 class="text-2xl font-bold mb-6">Регистрация</h2>

    <form @submit.prevent="handleRegister">
      
      <input v-model="name" placeholder="Имя" class="w-full border px-3 py-2 mb-3 rounded" />

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

      <button type="submit" class="w-full bg-black text-white py-2 rounded hover:opacity-90 mt-2">
        Создать аккаунт
      </button>

      <p v-if="success" class="text-green-500 text-sm mt-2">
        {{ success }}
      </p>

      <p v-if="error" class="text-red-500 text-sm mt-2">
        {{ error }}
      </p>
    </form>
  </template>

  <!-- 🔥 VERIFY -->
  <template v-else>
    <h2 class="text-2xl font-bold mb-6">Подтверждение</h2>

    <p class="text-sm text-gray-500 mb-3">
      Код отправлен на {{ email }}
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

    <p v-if="error" class="text-red-500 text-sm mt-2">
      {{ error }}
    </p>

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
    <span @click="emit('switch')" class="text-blue-500 cursor-pointer">
      Войти
    </span>
  </p>

</div>
</template>