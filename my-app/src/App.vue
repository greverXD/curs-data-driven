<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from './store/auth'

const auth = useAuthStore()

onMounted(() => {
  auth.init()
})
</script>

<template>
<router-view />
</template>