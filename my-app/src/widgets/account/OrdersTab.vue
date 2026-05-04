<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from '../../api/axios'

type Order = {
  id: string
  total: number
  createdAt: string
  items: any[]
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
    <h2 class="text-xl font-bold mb-4">Мои заказы</h2>

    <!-- ⏳ loading -->
    <div v-if="loading">Загрузка...</div>

    <!-- ❌ пусто -->
    <div v-else-if="orders.length === 0" class="text-gray-400 text-center py-10">
      Заказов нет
    </div>

    <!-- ✅ данные -->
    <div v-else>
      <div
        v-for="order in orders"
        :key="order.id"
        class="border p-4 rounded-xl mb-4"
      >
        <p class="font-semibold">Заказ {{ order.id.slice(0, 6) }}</p>

        <p class="text-gray-400 text-sm">
          {{ new Date(order.createdAt).toLocaleDateString() }}
        </p>

        <p>Товаров: {{ order.items.length }}</p>

        <p class="font-semibold">{{ order.total }} ₽</p>
      </div>
    </div>
  </div>
</template>