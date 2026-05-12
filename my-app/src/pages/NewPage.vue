<script setup lang="ts">
import { onMounted, ref } from 'vue'

import Header from '../widgets/Header.vue'
import Footer from '../widgets/Footer.vue'

import ProductCard from '../entities/product/ProductCard.vue'

const products = ref<any[]>([])

onMounted(async () => {
  const res = await fetch(
    import.meta.env.VITE_API_URL + '/api/products/new'
  )

  products.value = await res.json()
})
</script>

<template>

  <div class="min-h-screen flex flex-col">

    <Header />

    <main
      class="
        flex-1
        px-4 md:px-8 lg:px-10
        py-6 md:py-10
      "
    >

      <!-- TITLE -->
      <div class="mb-8 md:mb-10">

        <h1 class="text-3xl md:text-5xl font-bold">
          Новинки
        </h1>

        <p class="text-gray-500 mt-2">
          Последние поступления сезона
        </p>

      </div>

      <!-- PRODUCTS -->
      <div
        class="
          grid
          grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
          gap-4 md:gap-6
        "
      >

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

  </div>

</template>