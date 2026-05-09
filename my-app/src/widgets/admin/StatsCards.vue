<script setup lang="ts">
const stats = [
  {
    title: 'Выручка',
    value: '₽ 245 000'
  },
  {
    title: 'Заказы',
    value: '1 245'
  },
  {
    title: 'Пользователи',
    value: '8 421'
  },
  {
    title: 'Посещения',
    value: '32 102'
  }
]
</script>

<template>
  <div class="grid grid-cols-4 gap-4 mb-6">
    <div
      v-for="item in stats"
      :key="item.title"
      class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
    >
      <p class="text-gray-400 mb-2">
        {{ item.title }}
      </p>

      <h3 class="text-3xl font-bold">
        {{ item.value }}
      </h3>
    </div>
  </div>
</template>