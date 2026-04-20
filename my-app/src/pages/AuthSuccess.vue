<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useAuthStore } from '../store/auth'

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()

const loading = ref(true)
const error = ref('')

onMounted(() => {
  const token = route.query.token as string

  if (!token) {
    error.value = 'Ошибка авторизации'
    loading.value = false
    return
  }

  localStorage.setItem('token', token)
  auth.setAuth(true, token)

  setTimeout(() => {
    router.push('/')
  }, 1200)
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black text-white">
    
    <div class="w-[340px] bg-zinc-800/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-zinc-700">
      
      <!-- Loading -->
      <div v-if="loading && !error" class="flex flex-col items-center gap-4">
        
        <!-- Loader -->
        <div class="w-10 h-10 border-4 border-zinc-600 border-t-white rounded-full animate-spin"></div>

        <h2 class="text-lg font-semibold">Вход через Google</h2>
        <p class="text-sm text-zinc-400 text-center">
          Подождите, авторизуем вас...
        </p>
      </div>

      <!-- Error -->
      <div v-else class="flex flex-col items-center gap-4 text-center">
        <h2 class="text-lg font-semibold text-red-400">Ошибка</h2>
        <p class="text-sm text-zinc-400">{{ error }}</p>

        <button
          @click="$router.push('/login')"
          class="mt-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition"
        >
          Назад
        </button>
      </div>

    </div>

  </div>
</template>