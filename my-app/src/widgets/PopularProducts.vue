<script setup lang="ts">
import ProductCard from '../entities/product/ProductCard.vue'

const products = [
  { id: '1', title: 'Nike Air', price: 120, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
  { id: '2', title: 'Adidas', price: 140, image: 'https://images.unsplash.com/photo-1528701800489-20be3c1ea4c4' },
  { id: '3', title: 'Nike Air', price: 120, image: 'https://images.unsplash.com/photo-1519741497674-611481863552' },

]

</script>

<template>
<section class="px-8 py-10">
  <h2 class="text-2xl mb-6">Популярные товары</h2>
  <div class="grid grid-cols-4 gap-4">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      v-bind="product"
    />
  </div>
  </section>
</template>

  