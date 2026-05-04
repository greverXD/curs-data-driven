<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ProductCard from '../entities/product/ProductCard.vue'

const props = defineProps<{
  category: string
  sort: 'asc' | 'desc' | null
}>()

const products = ref<any[]>([])

onMounted(async () => {
  const res = await fetch('http://localhost:3000/api/products')
  products.value = await res.json()
})

// 👇 ВСЯ логика в одном месте
const finalProducts = computed(() => {
  let result = products.value.map(p => ({
    ...p,
    price: p.variants?.[0]?.price || 0,
    image: p.variants?.[0]?.image || ''
  }))

  // фильтр
  if (props.category && props.category !== 'Все') {
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
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <ProductCard
      v-for="product in finalProducts"
      :key="product.id"
      v-bind="product"
    />
  </div>
</template>