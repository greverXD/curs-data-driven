<script setup lang="ts">
import { onMounted, ref } from 'vue'

import api from '../../api/axios'

const products = ref<any[]>([])

const loading = ref(true)

const form = ref({
  title: '',
  description: '',
  category: '',

  discountPercent: 0,

  variants: [
    {
      size: '',
      color: '',
      price: 0,
      stock: 0,
      image: ''
    }
  ]
})

const loadProducts = async () => {
  const res = await api.get('/products')

  products.value = res.data
}

onMounted(async () => {
  await loadProducts()

  loading.value = false
})

const createProduct = async () => {
  await api.post('/products', form.value)

  await loadProducts()

  form.value = {
    title: '',
    description: '',
    category: '',

    discountPercent: 0,

    variants: [
      {
        size: '',
        color: '',
        price: 0,
        stock: 0,
        image: ''
      }
    ]
  }
}

const deleteProduct = async (id: string) => {
  await api.delete(`/products/${id}`)

  await loadProducts()
}

const addVariant = () => {
  form.value.variants.push({
    size: '',
    color: '',
    price: 0,
    stock: 0,
    image: ''
  })
}
</script>

<template>

  <div v-if="loading">
    Загрузка...
  </div>

  <div v-else class="space-y-10">

    <!-- CREATE -->

    <div class="bg-white rounded-2xl border p-6">

      <h2 class="text-3xl font-bold mb-6">
        Create Product
      </h2>

      <div class="grid grid-cols-2 gap-4">

        <input
          v-model="form.title"
          placeholder="Название"
          class="border p-3 rounded-xl"
        />

        <input
          v-model="form.category"
          placeholder="Категория"
          class="border p-3 rounded-xl"
        />

        <textarea
          v-model="form.description"
          placeholder="Описание"
          class="border p-3 rounded-xl col-span-2"
        />

        <input
          v-model="form.discountPercent"
          type="number"
          placeholder="Скидка %"
          class="border p-3 rounded-xl"
        />

      </div>

      <!-- Variants -->

      <div class="mt-8">

        <div
          v-for="(variant, index) in form.variants"
          :key="index"
          class="border rounded-2xl p-4 mb-4"
        >

          <h3 class="font-bold mb-4">
            Variant {{ index + 1 }}
          </h3>

          <div class="grid grid-cols-2 gap-4">

            <input
              v-model="variant.size"
              placeholder="Размер"
              class="border p-3 rounded-xl"
            />

            <input
              v-model="variant.color"
              placeholder="Цвет"
              class="border p-3 rounded-xl"
            />

            <input
              v-model="variant.price"
              type="number"
              placeholder="Цена"
              class="border p-3 rounded-xl"
            />

            <input
              v-model="variant.stock"
              type="number"
              placeholder="Stock"
              class="border p-3 rounded-xl"
            />

            <input
              v-model="variant.image"
              placeholder="/uploads/image.jpg"
              class="border p-3 rounded-xl col-span-2"
            />

          </div>

        </div>

        <button
          @click="addVariant"
          class="border px-4 py-2 rounded-xl"
        >
          + Variant
        </button>

      </div>

      <button
        @click="createProduct"
        class="mt-8 bg-black text-white px-6 py-3 rounded-2xl"
      >
        Create
      </button>

    </div>

    <!-- PRODUCTS -->

    <div class="bg-white rounded-2xl border p-6">

      <h2 class="text-3xl font-bold mb-6">
        Products
      </h2>

      <div
        v-for="product in products"
        :key="product.id"
        class="border-b py-6"
      >

        <div class="flex justify-between">

          <div>

            <h3 class="text-2xl font-bold">
              {{ product.title }}
            </h3>

            <p class="text-gray-500">
              {{ product.category }}
            </p>

            <p class="mt-2">
              Discount:
              {{ product.discountPercent }}%
            </p>

          </div>

          <button
            @click="deleteProduct(product.id)"
            class="text-red-500"
          >
            Delete
          </button>

        </div>

        <!-- Variants -->

        <div class="mt-4 space-y-2">

          <div
            v-for="variant in product.variants"
            :key="variant.id"
            class="border rounded-xl p-3 flex justify-between"
          >

            <div>
              {{ variant.size }}
              /
              {{ variant.color }}
            </div>

            <div>
              ₽ {{ variant.price }}
            </div>

            <div>
              Stock:
              {{ variant.stock }}
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>