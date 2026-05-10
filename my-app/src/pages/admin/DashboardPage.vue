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
  <div v-if="loading">
    Загрузка dashboard...
  </div>

  <div v-else-if="data">
    
    <!-- Stats -->
    <StatsCards
  :stats="data.stats"
  :funnel="data.funnel"
/>
    <div class="grid grid-cols-4 gap-4 mb-6">

  <div class="bg-white p-6 rounded-2xl border">
    <p class="text-gray-500 text-sm">
      PAGE VIEW
    </p>

    <h2 class="text-3xl font-bold">
      {{ data.funnel.pageViews }}
    </h2>
  </div>

  <div class="bg-white p-6 rounded-2xl border">
    <p class="text-gray-500 text-sm">
      PRODUCT VIEW
    </p>

    <h2 class="text-3xl font-bold">
      {{ data.funnel.productViews }}
    </h2>
  </div>

  <div class="bg-white p-6 rounded-2xl border">
    <p class="text-gray-500 text-sm">
      ADD TO CART
    </p>

    <h2 class="text-3xl font-bold">
      {{ data.funnel.addToCart }}
    </h2>
  </div>

  <div class="bg-white p-6 rounded-2xl border">
    <p class="text-gray-500 text-sm">
      ORDERS
    </p>

    <h2 class="text-3xl font-bold">
      {{ data.funnel.orders }}
    </h2>
  </div>

</div>
    <!-- Charts -->
    <div class="grid grid-cols-2 gap-6 mb-6">
      <div class="bg-white rounded-2xl p-6 min-h-[350px] border border-gray-100">
        <h3 class="text-xl font-bold mb-4">
          Выручка по дням
        </h3>

        <RevenueChart :data="data.orders" />
      </div>

      <div class="bg-white rounded-2xl p-6 min-h-[350px] border border-gray-100">
        <h3 class="text-xl font-bold mb-4">
          Заказы по дням
        </h3>
      </div>
    </div>

    <!-- Bottom Blocks -->
    <div class="grid grid-cols-2 gap-6">
      <div class="bg-white rounded-2xl p-6 border border-gray-100 min-h-[300px]">
        <h3 class="text-xl font-bold mb-4">
          Популярные товары
        </h3>

        <TopProducts :products="data.topProducts" />
      </div>

      <div class="bg-white rounded-2xl p-6 border border-gray-100 min-h-[300px]">
        <h3 class="text-xl font-bold mb-4">
          Последние заказы
        </h3>

        <RecentOrders :orders="data.recentOrders" />
      </div>
    </div>

  </div>
</template>