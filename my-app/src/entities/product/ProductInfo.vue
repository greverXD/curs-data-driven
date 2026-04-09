<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  product: {
    id: string
    title: string
    price: number
    description: string
  }
}>()

const selectedSize = ref<number | null>(null)
const sizes = [38, 39, 40, 41, 42]

const finalPrice = computed(() => {
  if (!selectedSize.value) return props.product.price
  return props.product.price + (selectedSize.value - 38) * 5
})
</script>

<template>
  <div>
    <p class="text-gray-500">Обувь</p>

    <h1 class="text-2xl font-bold">
      {{ props.product.title }}
    </h1>

    <p class="text-xl mt-2">
      {{ finalPrice }} $
    </p>

    <p class="mt-4 text-gray-600">
      {{ props.product.description }}
    </p>

    <div class="mt-4">
      <p class="mb-2">Размер</p>

      <div class="flex gap-2">
        <button
          v-for="size in sizes"
          :key="size"
          @click="selectedSize = size"
          class="border px-3 py-1"
          :class="selectedSize === size && 'bg-black text-white'"
        >
          {{ size }}
        </button>
      </div>
    </div>

    <button class="mt-6 w-full bg-black text-white py-3 rounded">
      Добавить в корзину
    </button>

    <div class="mt-6 text-sm text-gray-500 space-y-1">
      <p>Бесплатная доставка от 5000 ₽</p>
      <p>Возврат в течение 30 дней</p>
      <p>Гарантия качества</p>
    </div>
  </div>
</template>