<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from './store/auth'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { trackEvent } from './lib/analytics'
import CartDrawer from './components/CartDrawer.vue'
const auth = useAuthStore()

onMounted(() => {
  auth.init()
})
const route = useRoute()

watch(
  () => route.fullPath,
  (path) => {
    trackEvent({
      type: 'PAGE_VIEW',
      page: path
    })
  },
  { immediate: true }
)
</script>

<template>
<router-view />
<CartDrawer />
</template>