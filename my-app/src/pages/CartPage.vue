<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToCatalog = () => {
  router.push('/catalog')
}
</script>

<template>

  <div
    class="
      min-h-[60vh]
      flex
      items-center
      justify-center
      px-4
      py-16
    "
  >

    <div
      class="
        w-full
        max-w-xl
        text-center
      "
    >

      <!-- ICON -->
      <div class="text-6xl mb-6">
        🛒
      </div>

      <!-- TITLE -->
      <h1 class="text-2xl md:text-4xl font-bold mb-4">
        Ваша корзина пуста
      </h1>

      <!-- TEXT -->
      <p
        class="
          text-gray-500
          text-sm md:text-base
          mb-8
          leading-7
        "
      >
        Добавьте товары, чтобы начать покупки
      </p>

      <!-- BUTTON -->
      <button
        @click="goToCatalog"
        class="
          w-full sm:w-auto
          bg-black
          text-white
          px-8
          py-4
          rounded-xl
          font-semibold
          transition-all
          duration-300
          hover:scale-105
          hover:bg-gray-800
          active:scale-95
        "
      >
        Перейти в каталог
      </button>

    </div>

  </div>

</template>