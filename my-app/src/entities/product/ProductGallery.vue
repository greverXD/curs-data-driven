<script setup lang="ts">
import { ref } from 'vue'
import { useLike } from '../../features/like-product/like'

const { liked, toggle } = useLike()

const props = defineProps<{
  images: string[]
}>()

const current = ref(props.images[0])
</script>

<template>
  <div class="flex gap-4">

    <div class="flex flex-col gap-2">
      <img
        v-for="img in props.images"
        :key="img"
        :src="img"
        class="w-16 h-16 object-cover cursor-pointer border"
        @click="current = img"
      />
    </div>

    <div class="relative">
      <img
        :src="current"
        class="w-[400px] h-[500px] object-cover"
      />

      <button
        @click="toggle"
        class="absolute top-2 right-2 text-xl"
        :class="liked ? 'text-red-500' : 'text-white'"
      >
        ♥
      </button>
    </div>

  </div>
</template>