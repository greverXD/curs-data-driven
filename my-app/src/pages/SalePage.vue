<script setup lang="ts">
import { onMounted, ref } from 'vue'

import Header from '../widgets/Header.vue'
import Footer from '../widgets/Footer.vue'

import ProductCard from '../entities/product/ProductCard.vue'

const products = ref<any[]>([])

onMounted(async () => {
  const res = await fetch(
    import.meta.env.VITE_API_URL + '/api/products/sale'
  )

  products.value = await res.json()
})
</script>

<template>
  <Header />

  <main class="px-10 py-10">

    <h1 class="text-4xl font-bold mb-10">
      Распродажа
    </h1>

    <div class="grid grid-cols-4 gap-6">

      <div
        v-for="product in products"
        :key="product.id"
        class="relative"
      >

        <!-- Badge -->
        <div
          class="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full z-10"
        >
          -{{ product.discountPercent }}%
        </div>

        <ProductCard
          :id="product.id"
          :title="product.title"

          :price="
            product.variants?.[0]?.price || 0
          "

          :image="
            product.variants?.[0]?.image || ''
          "
        />

      </div>

    </div>

  </main>

  <Footer />
</template>