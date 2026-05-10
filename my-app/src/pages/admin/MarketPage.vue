<script setup lang="ts">
import { onMounted, ref } from 'vue'
import api from '../../api/axios'

const data = ref<any>(null)

onMounted(async () => {
  const res = await api.get('/analytics/dashboard')

  data.value = res.data
})
</script>

<template>
  <div v-if="data">

    <div class="grid grid-cols-2 gap-6">

      <!-- Categories -->
      <div class="bg-white rounded-2xl p-6 border">
        <h2 class="text-2xl font-bold mb-4">
          Top Categories
        </h2>

        <div
          v-for="item in data.market.topCategories"
          :key="item.category"
          class="flex justify-between mb-2"
        >
          <span>{{ item.category }}</span>
          <span>{{ item.sold }}</span>
        </div>
      </div>

      <!-- Conversion -->
      <div class="bg-white rounded-2xl p-6 border">
        <h2 class="text-2xl font-bold mb-4">
          Conversion
        </h2>

        <p>
          Product → Cart:
          {{ data.market.conversion.viewsToCart }}%
        </p>

        <p>
          Cart → Order:
          {{ data.market.conversion.cartToOrder }}%
        </p>
      </div>

      <!-- Average Order -->
      <div class="bg-white rounded-2xl p-6 border">
        <h2 class="text-2xl font-bold mb-4">
          Average Order Value
        </h2>

        <p class="text-4xl font-bold">
          ₽ {{ data.market.averageOrderValue.toFixed(0) }}
        </p>
      </div>

      <!-- Sizes -->
      <div class="bg-white rounded-2xl p-6 border">
        <h2 class="text-2xl font-bold mb-4">
          Top Sizes
        </h2>

        <div
          v-for="item in data.market.topSizes"
          :key="item.size"
          class="flex justify-between mb-2"
        >
          <span>{{ item.size }}</span>
          <span>{{ item.sold }}</span>
        </div>
      </div>

    </div>

  </div>
</template>