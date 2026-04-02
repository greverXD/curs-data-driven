<script setup lang="ts">
import Header from '../widgets/Header.vue'
import Footer from '../widgets/Footer.vue'
import ProductGallery from '../entities/product/ProductGallery.vue'
import ProductInfo from '../entities/product/ProductInfo.vue'
</script>

<template>
  <Header />

  <main class="grid grid-cols-2 gap-10 px-10 py-10">
    <ProductGallery />
    <ProductInfo />
  </main>

  <Footer />
</template>