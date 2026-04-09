<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToCatalog = () => {
  router.push('/catalog')
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-20 text-center">

    <h1 class="text-3xl font-bold mb-4">
      Ваша корзина пуста
    </h1>

    <p class="text-gray-500 mb-8">
      Добавьте товары, чтобы начать покупки
    </p>

    <button
      @click="goToCatalog"
      class="bg-black text-white px-8 py-3 rounded-xl font-semibold"
    >
      Перейти в каталог
    </button>

  </div>
</template>