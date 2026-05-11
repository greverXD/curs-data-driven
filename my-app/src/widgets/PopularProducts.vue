<script setup lang="ts">
import { onMounted, ref } from 'vue'

import ProductCard from '../entities/product/ProductCard.vue'

const products = ref<any[]>([])

onMounted(async () => {
  const res = await fetch(
    import.meta.env.VITE_API_URL + '/api/products/popular'
  )

  products.value = await res.json()
})
</script>

<template>
  <section class="px-8 py-10">

    <h2 class="text-2xl mb-6">
      Популярные товары
    </h2>

    <div class="grid grid-cols-4 gap-4">

      <ProductCard
        v-for="product in products"
        :key="product.id"
        v-bind="product"
      />

    </div>

  </section>
</template>