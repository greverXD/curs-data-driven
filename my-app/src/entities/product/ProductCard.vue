<script setup lang="ts">
import { useLike } from '../../features/like-product/like'

const { liked, toggle } = useLike()
import { useRouter } from 'vue-router'

const router = useRouter()

const goToProduct = () => {
  router.push(`/product/1`)
}

const images = [
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
  'https://images.unsplash.com/photo-1528701800489-20be3c1ea4c4',
  'https://images.unsplash.com/photo-1519741497674-611481863552',
]
</script>

<template>
  <div @click="goToProduct" class="cursor-pointer">
  <div class="border p-3 rounded hover:shadow transition">
    <div class="relative">
      <img
        :src="images[Math.floor(Math.random() * images.length)]"
        class="h-48 w-full object-cover rounded"
      />

      <button
        @click="toggle"
        class="absolute top-2 right-2 text-xl transition transform"
        :class="liked ? 'text-red-500 scale-125' : 'text-white'"
      >
        ♥
      </button>
    </div>

    <h3 class="mt-2">Кроссовки</h3>
    <p class="text-gray-500">120$</p>
  </div>
  </div>
</template>