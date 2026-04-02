<script setup lang="ts">
import { ref } from 'vue'
import { useLike } from '../../features/like-product/like'

const { liked, toggle } = useLike()

const images = [
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
  'https://images.unsplash.com/photo-1528701800489-20be3c1ea4c4',
  'https://images.unsplash.com/photo-1519741497674-611481863552',
]

const current = ref(images[0])
const zoom = ref(1)
const showHint = ref(true)

const onWheel = (e: WheelEvent) => {
  if (e.ctrlKey) {
    zoom.value += e.deltaY * -0.001
    zoom.value = Math.min(Math.max(1, zoom.value), 3)
    showHint.value = false
  }
}
</script>

<template>
  <div class="flex gap-4">

    <div class="flex flex-col gap-2">
      <img
        v-for="img in images"
        :key="img"
        :src="img"
        class="w-16 h-16 object-cover cursor-pointer border"
        @click="current = img"
      />
    </div>

    <div 
      class="relative overflow-hidden"
      @wheel="onWheel"
    >
      <img
        :src="current"
        class="w-[400px] h-[500px] object-cover transition"
        :style="{ transform: `scale(${zoom})` }"
      />

      <button
        @click.stop="toggle"
        class="absolute top-2 right-2 text-xl"
        :class="liked ? 'text-red-500' : 'text-white'"
      >
        ♥
      </button>

      <div
        v-if="showHint"
        class="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded"
      >
        Ctrl + колесо = zoom
      </div>
    </div>

  </div>
</template>