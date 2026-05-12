<!-- StatsCards.vue -->

<script setup lang="ts">
const props = defineProps<{
  stats: {
    totalUsers: number
    totalOrders: number
    totalVisits: number
    revenue: number
  }

  funnel: {
    pageViews: number
    productViews: number
    addToCart: number
    orders: number
  }
}>()

const cards = [
  {
    title: 'Выручка',
    value: `₽ ${props.stats.revenue.toLocaleString()}`
  },
  {
    title: 'Заказы',
    value: props.stats.totalOrders.toLocaleString()
  },
  {
    title: 'Пользователи',
    value: props.stats.totalUsers.toLocaleString()
  },
  {
    title: 'Посещения',
    value: props.stats.totalVisits.toLocaleString()
  },
  {
    title: 'Просмотры товаров',
    value: props.funnel.productViews.toLocaleString()
  },
  {
    title: 'Добавлено в корзину',
    value: props.funnel.addToCart.toLocaleString()
  },
  {
    title: 'Оформлено заказов',
    value: props.funnel.orders.toLocaleString()
  }
]
</script>

<template>

  <div
    class="
      grid
      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-4
      gap-4
      mb-6
    "
  >

    <div
      v-for="item in cards"
      :key="item.title"
      class="
        bg-white
        rounded-2xl
        p-5
        shadow-sm
        border
        border-gray-100
      "
    >

      <p
        class="
          text-gray-400
          mb-2
          text-sm
        "
      >
        {{ item.title }}
      </p>

      <h3
        class="
          text-2xl
          md:text-3xl
          font-bold
          break-words
        "
      >
        {{ item.value }}
      </h3>

    </div>

  </div>

</template>