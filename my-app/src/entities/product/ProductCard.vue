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
  discountPercent?: number
}>()
const goToProduct = () => {
  router.push(`/product/${props.id}`)
}
const discountedPrice =
  props.discountPercent
    ? Math.round(
        props.price *
          (1 -
            props.discountPercent /
              100)
      )
    : props.price
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
     <div
  v-if="props.discountPercent"
  class="
    absolute
    top-2
    left-2
    bg-red-500
    text-white
    text-sm
    px-3 py-1
    rounded-full
    font-semibold
  "
>
  -{{ props.discountPercent }}%
</div>
    <h3 class="mt-2">{{props.title}}</h3>
    <div class="flex items-center gap-2 mt-1">

  <p class="font-semibold">
    ${{ discountedPrice }}
  </p>

  <p
    v-if="props.discountPercent"
    class="text-gray-400 line-through text-sm"
  >
    ${{ props.price }}
  </p>

</div>
  </div>
  </div>
</template>