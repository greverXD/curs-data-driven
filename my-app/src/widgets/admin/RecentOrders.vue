<script setup lang="ts">
defineProps<{
  orders: any[]
}>()
</script>

<template>
  <div class="bg-white rounded-2xl p-6 border border-gray-100 min-h-[300px]">
    <h3 class="text-xl font-bold mb-4">
      Последние заказы
    </h3>

    <div
      v-if="orders.length === 0"
      class="text-gray-400"
    >
      Заказов пока нет
    </div>

    <div
      v-for="order in orders"
      :key="order.id"
      class="flex justify-between items-center border-b py-3"
    >
      <div>
        <p class="font-semibold">
          {{ order.user?.email }}
        </p>

        <p class="text-sm text-gray-400">
          {{ new Date(order.createdAt).toLocaleDateString() }}
        </p>
      </div>

      <div class="font-bold">
        {{ order.total }} ₽
      </div>
    </div>
  </div>
</template>