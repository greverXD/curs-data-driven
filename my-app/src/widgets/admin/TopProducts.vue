<script setup lang="ts">
defineProps<{
  products: {
    title: string
    sold: number
  }[]
}>()
</script>

<template>
  <div class="bg-white rounded-2xl p-6 border border-gray-100 min-h-[300px]">
    <h3 class="text-xl font-bold mb-4">
      Популярные товары
    </h3>

    <div
      v-if="products.length === 0"
      class="text-gray-400"
    >
      Данных пока нет
    </div>

    <div
      v-for="item in products"
      :key="item.title"
      class="flex justify-between border-b py-3"
    >
      <p>
        {{ item.title }}
      </p>

      <p class="font-bold">
        {{ item.sold }} продаж
      </p>
    </div>
  </div>
</template>