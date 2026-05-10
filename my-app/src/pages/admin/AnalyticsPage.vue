<script setup lang="ts">
import { onMounted, ref } from 'vue'
import api from '../../api/axios'

const data = ref<any>(null)

const loading = ref(true)

onMounted(async () => {
  try {
    const res = await api.get(
      '/analytics/dashboard'
    )

    data.value = res.data
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
})

const getActionText = (type: string) => {
  switch (type) {
    case 'PAGE_VIEW':
      return 'viewed page'

    case 'PRODUCT_VIEW':
      return 'viewed product'

    case 'ADD_TO_CART':
      return 'added to cart'

    case 'ORDER_CREATED':
      return 'created order'

    default:
      return type
  }
}
</script>

<template>

  <!-- Loading -->
  <div
    v-if="loading"
    class="text-center py-20 text-gray-500"
  >
    Загрузка аналитики...
  </div>

  <!-- Content -->
  <div
    v-else-if="data"
    class="space-y-6"
  >

    <div class="grid grid-cols-2 gap-6">

      <!-- Funnel -->
      <div class="bg-white rounded-2xl p-6 border">

        <h2 class="text-2xl font-bold mb-6">
          Funnel
        </h2>

        <div class="space-y-4">

          <div class="flex justify-between">
            <span>PAGE_VIEW</span>

            <span>
              {{ data.funnel.pageViews }}
            </span>
          </div>

          <div class="flex justify-between">
            <span>PRODUCT_VIEW</span>

            <span>
              {{ data.funnel.productViews }}
            </span>
          </div>

          <div class="flex justify-between">
            <span>ADD_TO_CART</span>

            <span>
              {{ data.funnel.addToCart }}
            </span>
          </div>

          <div class="flex justify-between">
            <span>ORDER_CREATED</span>

            <span>
              {{ data.funnel.orders }}
            </span>
          </div>

        </div>

      </div>

      <!-- Visits by hour -->
      <div class="bg-white rounded-2xl p-6 border">

        <h2 class="text-2xl font-bold mb-6">
          Visits by hour
        </h2>

        <div
          v-for="item in data.visitsByHour"
          :key="item.hour"
          class="flex justify-between mb-2"
        >
          <span>
            {{ item.hour }}:00
          </span>

          <span>
            {{ item.visits }}
          </span>
        </div>

      </div>

      <!-- Revenue -->
      <div class="bg-white rounded-2xl p-6 border">

        <h2 class="text-2xl font-bold mb-6">
          Revenue
        </h2>

        <div
          v-for="item in data.orders"
          :key="item.date"
          class="flex justify-between mb-2"
        >
          <span>
            {{ item.date }}
          </span>

          <span>
            ₽ {{ item.revenue }}
          </span>
        </div>

      </div>

      <!-- Timeline -->
      <div class="bg-white rounded-2xl p-6 border">

        <h2 class="text-2xl font-bold mb-6">
          Activity Timeline
        </h2>

        <div
          v-for="event in data.activity"
          :key="event.id"
          class="border-b py-3"
        >

          <p class="font-semibold">
            {{
              new Date(event.createdAt)
                .toLocaleTimeString()
            }}
          </p>

          <p>
            {{
              event.user?.email || 'Guest'
            }}

            {{ getActionText(event.type) }}
          </p>

          <p class="text-sm text-gray-500">
            {{ event.page || '—' }}
          </p>

        </div>

      </div>

    </div>

    <!-- Heatmap -->
    <div class="bg-white rounded-2xl p-6 border">

      <h2 class="text-2xl font-bold mb-6">
        Heatmap
      </h2>

      <div
        v-for="item in data.heatmap.topPages"
        :key="item.page"
        class="flex justify-between mb-2"
      >
        <span>
          {{ item.page }}
        </span>

        <span>
          {{ item.visits }}
        </span>
      </div>

    </div>

  </div>

</template>