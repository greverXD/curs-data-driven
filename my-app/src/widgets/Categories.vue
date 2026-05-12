<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const categories = [
  'Кроссовки',
  'Футболки',
  'Куртки',
  'Штаны',
  'Худи',
  'Аксессуары',
  'Шорты',
  'Рубашки'
]

const goToCategory = (category: string) => {
  router.push(`/catalog?category=${category}`)
}
</script>

<template>
  <section class="px-4 md:px-8 py-10">

    <h2 class="text-2xl md:text-3xl font-bold mb-6">
      Категории
    </h2>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">

      <div
        v-for="cat in categories"
        :key="cat"
        @click="goToCategory(cat)"
        class="
          h-24 md:h-32
          bg-gray-100
          flex
          items-center
          justify-center
          rounded
          transition
          hover:bg-black
          hover:text-white
          hover:scale-105
          cursor-pointer
          text-sm md:text-base
          font-medium
          text-center
          px-2
        "
      >
        {{ cat }}
      </div>

    </div>

  </section>
</template>