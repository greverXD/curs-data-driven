<script setup lang="ts">
import ProductCard from '../entities/product/ProductCard.vue';
</script>

<template>
  <section class="px-8 py-10">
    <h2 class="text-2xl mb-6">Популярные товары</h2>

    <div class="grid grid-cols-4 gap-4">
      <ProductCard v-for="i in 8" :key="i" />
    </div>
  </section>
</template>