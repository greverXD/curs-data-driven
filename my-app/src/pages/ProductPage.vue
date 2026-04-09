<script setup lang="ts">
import { useRoute } from 'vue-router'
import Header from '../widgets/Header.vue'
import Footer from '../widgets/Footer.vue'
import ProductGallery from '../entities/product/ProductGallery.vue'
import ProductInfo from '../entities/product/ProductInfo.vue'

const route = useRoute()
const productId = route.params.id as string

const products = [
  {
    id: '1',
    title: 'Nike Air',
    price: 100,
    description: 'Удобные кроссовки',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      'https://images.unsplash.com/photo-1528701800489-20be3c1ea4c4'
    ]
  },
  {
    id: '2',
    title: 'Adidas Boost',
    price: 120,
    description: 'Лёгкие и стильные',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552'
    ]
  }
]

const product = products.find(p => p.id === productId)
</script>

<template>
  <Header />

  <main v-if="product" class="grid grid-cols-2 gap-10 px-10 py-10">
    <ProductGallery :images="product.images" />
    <ProductInfo :product="product" />
  </main>

  <div v-else class="text-center py-20">
    Товар не найден
  </div>

  <Footer />
</template>