<!-- AnalyticsDashboard.vue -->

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

  <!-- LOADING -->
  <div
    v-if="loading"
    class="text-center py-20 text-gray-500"
  >
    Загрузка аналитики...
  </div>

  <!-- CONTENT -->
  <div
    v-else-if="data"
    class="space-y-6"
  >

    <!-- GRID -->
    <div
      class="
        grid
        grid-cols-1
        xl:grid-cols-2
        gap-6
      "
    >

      <!-- FUNNEL -->
      <div
        class="
          bg-white
          rounded-2xl
          p-4 md:p-6
          border
          overflow-hidden
        "
      >

        <h2 class="text-2xl font-bold mb-6">
          Funnel
        </h2>

        <div class="space-y-4">

          <div
            class="
              flex
              justify-between
              gap-4
              text-sm md:text-base
            "
          >
            <span>PAGE_VIEW</span>
            <span>{{ data.funnel.pageViews }}</span>
          </div>

          <div
            class="
              flex
              justify-between
              gap-4
              text-sm md:text-base
            "
          >
            <span>PRODUCT_VIEW</span>
            <span>{{ data.funnel.productViews }}</span>
          </div>

          <div
            class="
              flex
              justify-between
              gap-4
              text-sm md:text-base
            "
          >
            <span>ADD_TO_CART</span>
            <span>{{ data.funnel.addToCart }}</span>
          </div>

          <div
            class="
              flex
              justify-between
              gap-4
              text-sm md:text-base
            "
          >
            <span>ORDER_CREATED</span>
            <span>{{ data.funnel.orders }}</span>
          </div>

        </div>

      </div>

      <!-- VISITS -->
      <div
        class="
          bg-white
          rounded-2xl
          p-4 md:p-6
          border
          overflow-hidden
        "
      >

        <h2 class="text-2xl font-bold mb-6">
          Visits by hour
        </h2>

        <div
          v-for="item in data.visitsByHour"
          :key="item.hour"
          class="
            flex
            justify-between
            mb-2
            text-sm md:text-base
          "
        >
          <span>{{ item.hour }}:00</span>

          <span>{{ item.visits }}</span>
        </div>

      </div>

      <!-- REVENUE -->
      <div
        class="
          bg-white
          rounded-2xl
          p-4 md:p-6
          border
          overflow-hidden
        "
      >

        <h2 class="text-2xl font-bold mb-6">
          Revenue
        </h2>

        <div
          v-for="item in data.orders"
          :key="item.date"
          class="
            flex
            justify-between
            gap-4
            mb-2
            text-sm md:text-base
          "
        >
          <span>{{ item.date }}</span>

          <span>₽ {{ item.revenue }}</span>
        </div>

      </div>

      <!-- TIMELINE -->
      <div
        class="
          bg-white
          rounded-2xl
          p-4 md:p-6
          border
          overflow-hidden
        "
      >

        <h2 class="text-2xl font-bold mb-6">
          Activity Timeline
        </h2>

        <div
          v-for="event in data.activity"
          :key="event.id"
          class="
            border-b
            py-3
            break-words
          "
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

          <p class="text-sm text-gray-500 break-all">
            {{ event.page || '—' }}
          </p>

        </div>

      </div>

    </div>

    <!-- HEATMAP -->
    <div
      class="
        bg-white
        rounded-2xl
        p-4 md:p-6
        border
        overflow-hidden
      "
    >

      <h2 class="text-2xl font-bold mb-6">
        Heatmap
      </h2>

      <div
        v-for="item in data.heatmap.topPages"
        :key="item.page"
        class="
          flex
          items-start
          justify-between
          gap-4
          mb-2
          break-all
        "
      >
        <span>{{ item.page }}</span>

        <span>{{ item.visits }}</span>
      </div>

    </div>

  </div>

</template>