<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from '../widgets/Header.vue'
import Footer from '../widgets/Footer.vue'
import ProductGallery from '../entities/product/ProductGallery.vue'
import ProductInfo from '../entities/product/ProductInfo.vue'
import { useCartStore } from '../store/cart'
import { trackEvent } from '../lib/analytics'
const cart = useCartStore()
const route = useRoute()
const productId = route.params.id as string

const product = ref<any>(null)
const selectedSize = ref<string | null>(null)
const addToCart = () => {
  if (!selectedVariant.value) {
    alert('Выберите размер')
    return
  }

  cart.addToCart(product.value, selectedVariant.value)


}
onMounted(async () => {
  try {
    const res = await fetch(import.meta.env.VITE_API_URL + `/api/products/${productId}`)
    
    if (!res.ok) {
      throw new Error('Product not found')
    }

    const data = await res.json()
trackEvent({
  type: 'PRODUCT_VIEW',
  productId: data.id,
  page: window.location.pathname
})
    console.log('PRODUCT:', data)

    product.value = data

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
  <div class="min-h-screen flex flex-col overflow-x-hidden">

    <Header />

    <main
      v-if="product"
      class="
        flex-1
        max-w-full
        py-6 md:py-10
      "
    >

<div
  class="
    grid
    grid-cols-1
    xl:grid-cols-2
    gap-8 lg:gap-12
    items-start
    max-w-7xl
    mx-auto
    overflow-hidden
  "
>

        <ProductGallery
          v-if="selectedVariant"
          :images="[selectedVariant.image]"
        />

        <div>

          <ProductInfo
            v-if="product && selectedVariant"
            :product="product"
            :selectedVariant="selectedVariant"
            :selectedSize="selectedSize"
            @selectSize="selectedSize = $event"
          />

          <!-- BUTTON -->
          <button
            @click="addToCart"
            class="
              mt-8
              w-full md:w-auto
              px-8 py-4
              bg-black
              text-white
              rounded
              transition-all
              duration-300
              hover:scale-105
              hover:bg-gray-800
              active:scale-95
            "
          >
            Добавить в корзину
          </button>

        </div>

      </div>

    </main>

    <Footer />

  </div>
</template>