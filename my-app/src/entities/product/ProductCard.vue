<script setup lang="ts">
import { useLike } from '../../features/like-product/like'

const { liked, toggle } = useLike()
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps<{
  id: string
  title: string
  price: number
  image: string
}>()
const goToProduct = () => {
  router.push(`/product/${props.id}`)
}

</script>

<template>
  <div @click="goToProduct" class="cursor-pointer">
  <div class="border p-3 rounded hover:shadow transition">
    <div class="relative">
      <img
        :src="props.image"
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

    <h3 class="mt-2">{{props.title}}</h3>
    <p class="text-gray-500">{{props.price}}</p>
  </div>
  </div>
</template>