<script setup lang="ts">
</script>

<template>
  <header class="flex justify-between items-center px-8 py-4 border-b h-[100px]">
    <div class="flex gap-6 items-center">
      <h1 class="font-bold text-xl">MyShop</h1>

      <nav class="flex gap-4 text-gray-600">
        <a href="#">Главная</a>
        <a href="#">Каталог</a>
        <a href="#">Новинки</a>
        <a href="#">Распродажа</a>
      </nav>
    </div>

    <div class="flex items-center gap-4 text-xl">

      <button class="hover:scale-110 transition">🔍</button>

      <button>Войти</button>
      <button class="hover:scale-110 transition">🛒</button>
    </div>
  </header>
</template>