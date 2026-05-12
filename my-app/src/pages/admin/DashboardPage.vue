<!-- DashboardPage.vue -->

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from '../../api/axios'

import StatsCards from '../../widgets/admin/StatsCards.vue'
import RevenueChart from '../../widgets/admin/RevenueChart.vue'
import RecentOrders from '../../widgets/admin/RecentOrders.vue'
import TopProducts from '../../widgets/admin/TopProducts.vue'

const data = ref<any>(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await axios.get('/analytics/dashboard')

    data.value = res.data
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
})
</script>

<template>

  <div
    v-if="loading"
    class="text-center py-20 text-gray-500"
  >
    Загрузка dashboard...
  </div>

  <div
    v-else-if="data"
    class="space-y-6"
  >

    <!-- STATS -->
    <StatsCards
      :stats="data.stats"
      :funnel="data.funnel"
    />

    <!-- FUNNEL -->
    <div
      class="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-4
      "
    >

      <div class="bg-white p-5 rounded-2xl border">
        <p class="text-gray-500 text-sm">
          PAGE VIEW
        </p>

        <h2 class="text-2xl md:text-3xl font-bold mt-2">
          {{ data.funnel.pageViews }}
        </h2>
      </div>

      <div class="bg-white p-5 rounded-2xl border">
        <p class="text-gray-500 text-sm">
          PRODUCT VIEW
        </p>

        <h2 class="text-2xl md:text-3xl font-bold mt-2">
          {{ data.funnel.productViews }}
        </h2>
      </div>

      <div class="bg-white p-5 rounded-2xl border">
        <p class="text-gray-500 text-sm">
          ADD TO CART
        </p>

        <h2 class="text-2xl md:text-3xl font-bold mt-2">
          {{ data.funnel.addToCart }}
        </h2>
      </div>

      <div class="bg-white p-5 rounded-2xl border">
        <p class="text-gray-500 text-sm">
          ORDERS
        </p>

        <h2 class="text-2xl md:text-3xl font-bold mt-2">
          {{ data.funnel.orders }}
        </h2>
      </div>

    </div>

    <!-- CHARTS -->
    <div
      class="
        grid
        grid-cols-1
        xl:grid-cols-2
        gap-6
      "
    >

      <!-- REVENUE -->
      <div
        class="
          bg-white
          rounded-2xl
          p-4 md:p-6
          min-h-[350px]
          border
          overflow-hidden
        "
      >

        <h3 class="text-xl font-bold mb-4">
          Выручка по дням
        </h3>

        <RevenueChart :data="data.orders" />

      </div>

      <!-- ORDERS -->
      <div
        class="
          bg-white
          rounded-2xl
          p-4 md:p-6
          min-h-[350px]
          border
        "
      >

        <h3 class="text-xl font-bold mb-4">
          Заказы по дням
        </h3>

        <div
          class="
            flex
            flex-col
            gap-3
          "
        >

          <div
            v-for="item in data.orders"
            :key="item.date"
            class="
              flex
              items-center
              justify-between
              border-b
              pb-3
              text-sm md:text-base
            "
          >

            <span>
              {{ item.date }}
            </span>

            <span class="font-semibold">
              {{ item.orders || 0 }}
            </span>

          </div>

        </div>

      </div>

    </div>

    <!-- BOTTOM -->
    <div
      class="
        grid
        grid-cols-1
        xl:grid-cols-2
        gap-6
      "
    >

      <div
        class="
          bg-white
          rounded-2xl
          p-4 md:p-6
          border
          min-h-[300px]
        "
      >

        <h3 class="text-xl font-bold mb-4">
          Популярные товары
        </h3>

        <TopProducts
          :products="data.topProducts"
        />

      </div>

      <div
        class="
          bg-white
          rounded-2xl
          p-4 md:p-6
          border
          min-h-[300px]
        "
      >

        <h3 class="text-xl font-bold mb-4">
          Последние заказы
        </h3>

        <RecentOrders
          :orders="data.recentOrders"
        />

      </div>

    </div>

  </div>

</template>