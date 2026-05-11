<script setup lang="ts">
import { onMounted, ref } from 'vue'

import Header from '../widgets/Header.vue'
import Footer from '../widgets/Footer.vue'

import ProductCard from '../entities/product/ProductCard.vue'

const products = ref<any[]>([])

onMounted(async () => {
  const res = await fetch(
    import.meta.env.VITE_API_URL + '/products/new'
  )

  products.value = await res.json()
})
</script>

<template>
  <Header />

  <main class="px-10 py-10">

    <h1 class="text-4xl font-bold mb-10">
      Новинки
    </h1>

    <div class="grid grid-cols-4 gap-6">

      <ProductCard
        v-for="product in products"
        :key="product.id"

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

  </main>

  <Footer />
</template>