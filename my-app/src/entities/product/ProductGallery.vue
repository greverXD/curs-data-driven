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

  <div
    class="
      flex
      flex-col-reverse
      md:flex-row
      gap-4
    "
  >

    <!-- THUMBNAILS -->
    <div
      class="
        flex
        md:flex-col
        gap-2
        overflow-x-auto max-w-full
      "
    >

      <img
        v-for="img in props.images"
        :key="img"
        :src="img"
        class="
          w-16 h-16
          md:w-20 md:h-20
          object-cover
          cursor-pointer
          border
          rounded
          flex-shrink-0
        "
        @click="current = img"
      />

    </div>

    <!-- MAIN IMAGE -->
    <div class="relative w-full min-w-0">

      <img
        :src="current"
        class="
          w-full
          max-w-full
          h-[400px]
          md:h-[600px]
          object-cover
          rounded
        "
      />

      

    </div>

  </div>

</template>