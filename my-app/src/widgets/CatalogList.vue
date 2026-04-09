<script setup lang="ts">
import { computed } from 'vue'
import ProductCard from '../entities/product/ProductCard.vue'

const props = defineProps<{
  category: string
  sort: 'asc' | 'desc' | null
}>()

const products = [
  { id: '1', title: 'Nike Air', price: 120, category: 'Кроссовки', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
  { id: '2', title: 'Футболка', price: 50, category: 'Футболки', image: 'https://images.unsplash.com/photo-1528701800489-20be3c1ea4c4' },
  { id: '3', title: 'Куртка', price: 200, category: 'Куртки', image: 'https://images.unsplash.com/photo-1519741497674-611481863552' }
]

// 👇 фильтрация + сортировка
const filteredProducts = computed(() => {
  let result = [...products]

  // фильтр
  if (props.category !== 'Все') {
    result = result.filter(p => p.category === props.category)
  }

  // сортировка
  if (props.sort === 'asc') {
    result.sort((a, b) => a.price - b.price)
  }

  if (props.sort === 'desc') {
    result.sort((a, b) => b.price - a.price)
  }

  return result
})
</script>

<template>
  <div class="grid grid-cols-3 gap-6">
    <ProductCard
      v-for="product in filteredProducts"
      :key="product.id"
      v-bind="product"
    />
  </div>
</template>