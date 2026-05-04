<script setup lang="ts">
import { useAuthStore } from '../../store/auth'

const auth = useAuthStore()
</script>

<template>
  <div>
    <h2 class="text-xl font-bold mb-4">Личные данные</h2>

    <input class="input" :value="auth.user?.email" />

    <button class="btn">Сохранить изменения</button>
  </div>
</template>