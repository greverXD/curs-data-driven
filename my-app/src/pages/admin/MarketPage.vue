<!-- MarketPage.vue -->

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

    <div
      class="
        grid
        grid-cols-1
        xl:grid-cols-2
        gap-6
      "
    >

      <!-- CATEGORIES -->
      <div
        class="
          bg-white
          rounded-2xl
          p-4 md:p-6
          border
        "
      >

        <h2 class="text-2xl font-bold mb-4">
          Top Categories
        </h2>

        <div
          v-for="item in data.market.topCategories"
          :key="item.category"
          class="
            flex
            justify-between
            gap-4
            mb-3
          "
        >

          <span>{{ item.category }}</span>

          <span class="font-semibold">
            {{ item.sold }}
          </span>

        </div>

      </div>

      <!-- CONVERSION -->
      <div
        class="
          bg-white
          rounded-2xl
          p-4 md:p-6
          border
        "
      >

        <h2 class="text-2xl font-bold mb-4">
          Conversion
        </h2>

        <div class="space-y-4">

          <div
            class="
              flex
              justify-between
              border-b
              pb-3
            "
          >

            <span>Product → Cart</span>

            <span class="font-bold">
              {{ data.market.conversion.viewsToCart }}%
            </span>

          </div>

          <div
            class="
              flex
              justify-between
            "
          >

            <span>Cart → Order</span>

            <span class="font-bold">
              {{ data.market.conversion.cartToOrder }}%
            </span>

          </div>

        </div>

      </div>

      <!-- AVG ORDER -->
      <div
        class="
          bg-white
          rounded-2xl
          p-4 md:p-6
          border
        "
      >

        <h2 class="text-2xl font-bold mb-4">
          Average Order Value
        </h2>

        <p
          class="
            text-3xl
            md:text-4xl
            font-bold
            break-words
          "
        >
          ₽ {{ data.market.averageOrderValue.toFixed(0) }}
        </p>

      </div>

      <!-- SIZES -->
      <div
        class="
          bg-white
          rounded-2xl
          p-4 md:p-6
          border
        "
      >

        <h2 class="text-2xl font-bold mb-4">
          Top Sizes
        </h2>

        <div
          v-for="item in data.market.topSizes"
          :key="item.size"
          class="
            flex
            justify-between
            gap-4
            mb-3
          "
        >

          <span>{{ item.size }}</span>

          <span class="font-semibold">
            {{ item.sold }}
          </span>

        </div>

      </div>

    </div>

  </div>

</template>