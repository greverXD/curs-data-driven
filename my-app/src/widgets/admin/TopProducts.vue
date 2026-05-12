<!-- TopProducts.vue -->

<script setup lang="ts">
defineProps<{
  products: {
    title: string
    sold: number
  }[]
}>()
</script>

<template>

  <div>

    <div
      v-if="products.length === 0"
      class="text-gray-400"
    >
      Данных пока нет
    </div>

    <div
      v-for="item in products"
      :key="item.title"
      class="
        flex
        flex-col
        sm:flex-row
        sm:justify-between
        gap-2
        border-b
        py-3
      "
    >

      <p class="break-words">
        {{ item.title }}
      </p>

      <p
        class="
          font-bold
          shrink-0
        "
      >
        {{ item.sold }} продаж
      </p>

    </div>

  </div>

</template>