<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from '../../api/axios'

type Order = {
  id: string
  total: number
  createdAt: string
  items: any[]
  status?: string
}

const orders = ref<Order[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await axios.get('/orders/my')
    orders.value = res.data
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
})
</script>

<template>

  <div>

    <!-- HEADER -->
    <div class="mb-6">

      <h2 class="text-2xl font-bold">
        Мои заказы
      </h2>

      <p class="text-gray-500 mt-1">
        История ваших покупок
      </p>

    </div>

    <!-- LOADING -->
    <div
      v-if="loading"
      class="text-gray-400"
    >
      Загрузка...
    </div>

    <!-- EMPTY -->
    <div
      v-else-if="orders.length === 0"
      class="
        border
        rounded-2xl
        p-10
        text-center
      "
    >

      <div class="text-5xl mb-4">
        📦
      </div>

      <p class="text-gray-400">
        Заказов пока нет
      </p>

    </div>

    <!-- ORDERS -->
    <div
      v-else
      class="space-y-4"
    >

      <div
        v-for="order in orders"
        :key="order.id"
        class="
          border
          rounded-2xl
          p-5
          transition
          hover:shadow-sm
        "
      >

        <!-- TOP -->
        <div
          class="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-3
            mb-4
          "
        >

          <div>

            <p class="font-semibold text-lg">
              Заказ #{{ order.id.slice(0, 6) }}
            </p>

            <p class="text-gray-400 text-sm mt-1">
              {{ new Date(order.createdAt).toLocaleDateString() }}
            </p>

          </div>

          <div
            class="
              bg-green-100
              text-green-700
              text-sm
              px-3 py-1
              rounded-full
              w-fit
            "
          >
            {{ order.status || 'Оплачен' }}
          </div>

        </div>

        <!-- INFO -->
        <div
          class="
            flex
            items-center
            justify-between
            text-sm md:text-base
          "
        >

          <p class="text-gray-500">
            Товаров: {{ order.items.length }}
          </p>

          <p class="font-bold text-lg">
            {{ order.total }} ₽
          </p>

        </div>

      </div>

    </div>

  </div>

</template>