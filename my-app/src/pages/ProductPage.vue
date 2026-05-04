<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from '../widgets/Header.vue'
import Footer from '../widgets/Footer.vue'
import ProductGallery from '../entities/product/ProductGallery.vue'
import ProductInfo from '../entities/product/ProductInfo.vue'
import { useCartStore } from '../store/cart'

const cart = useCartStore()
const route = useRoute()
const productId = route.params.id as string

const product = ref<any>(null)
const selectedSize = ref<string | null>(null)
const addToCart = () => {
  cart.addToCart(product.value)
}
onMounted(async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${productId}`)
    
    if (!res.ok) {
      throw new Error('Product not found')
    }

    const data = await res.json()

    console.log('PRODUCT:', data)

    product.value = data
        console.log('PRODUCT:', data)
    console.log('VARIANTS:', data?.variants)
    if (data?.variants?.length) {
      selectedSize.value = data.variants[0].size
    }

  } catch (e) {
    console.error(e)
  }
})

// выбранный вариант
const selectedVariant = computed(() => {
  const variant = product.value?.variants?.find(
    (v: any) => v.size === selectedSize.value
  )

  console.log('SELECTED VARIANT:', variant)

  return variant
})
</script>

<template>
  <Header />

  <main v-if="product" class="grid grid-cols-2 gap-10 px-10 py-10">
    
<ProductGallery 
  v-if="selectedVariant"
  :images="[selectedVariant.image]" 
/>

        <ProductInfo
  v-if="product && selectedVariant"
  :product="product"
  :selectedVariant="selectedVariant"
  :selectedSize="selectedSize"
  @selectSize="selectedSize = $event"
/>

<button @click="addToCart">Добавить в корзину</button>

  </main>

  <div v-else class="text-center py-20">
    Загрузка...
  </div>

  <Footer />
</template>