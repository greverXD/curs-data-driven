<script setup lang="ts">
import { useLike } from '../../features/like-product/like';

const { liked, toggle } = useLike()
</script>

<template>
  <div class="border p-3 rounded hover:shadow transition">
    <div class="relative">
      <img src="https://via.placeholder.com/200" />

      <button
        @click="toggle"
        class="absolute top-2 right-2 text-xl transition transform"
        :class="liked ? 'text-red-500 scale-125' : 'text-gray-400'"
      >
        ♥
      </button>
    </div>

    <h3 class="mt-2">Кроссовки</h3>
    <p class="text-gray-500">120$</p>
  </div>
</template>