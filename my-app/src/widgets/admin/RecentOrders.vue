<!-- RecentOrders.vue -->

<script setup lang="ts">
defineProps<{
  orders: any[]
}>()
</script>

<template>

  <div>

    <div
      v-if="orders.length === 0"
      class="text-gray-400"
    >
      Заказов пока нет
    </div>

    <div
      v-for="order in orders"
      :key="order.id"
      class="
        flex
        flex-col
        sm:flex-row
        sm:items-center
        sm:justify-between
        gap-3
        border-b
        py-3
      "
    >

      <div class="min-w-0">

        <p
          class="
            font-semibold
            break-all
          "
        >
          {{ order.user?.email }}
        </p>

        <p
          class="
            text-sm
            text-gray-400
          "
        >
          {{
            new Date(order.createdAt)
              .toLocaleDateString()
          }}
        </p>

      </div>

      <div
        class="
          font-bold
          shrink-0
        "
      >
        {{ order.total }} ₽
      </div>

    </div>

  </div>

</template>