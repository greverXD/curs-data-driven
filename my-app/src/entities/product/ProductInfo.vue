<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{
  product: any
  selectedVariant: any
  selectedSize: string | null
}>()


const selectedSize = ref<number | null>(null)

const sizes = computed(() =>
  props.product.variants.map((v: any) => v.size)
)
</script>

<template>
  <div>
  <h1 class="text-2xl font-bold">
    {{ product.title }}
  </h1>

  <p class="text-xl mt-2">
    {{ selectedVariant?.price }} $
  </p>

  <p class="mt-4 text-gray-600">
    {{ product.description }}
  </p>

  <div class="mt-4">
    <p class="mb-2">Размер</p>

    <div class="flex gap-2">
      <button
        v-for="v in product.variants"
        :key="v.id"
        @click="$emit('selectSize', v.size)"
        class="border px-3 py-1"
        :class="selectedSize === v.size && 'bg-black text-white'"
      >
        {{ v.size }}
      </button>
    </div>
  </div>
</div>
</template>