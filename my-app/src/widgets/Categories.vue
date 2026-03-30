<template>
  <section class="px-8 py-10">
    <h2 class="text-2xl mb-6">Категории</h2>

    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="i in 8"
        :key="i"
        class="h-32 bg-gray-100 flex items-center justify-center rounded 
               transition hover:bg-black hover:text-white hover:scale-105 cursor-pointer"
      >
        Одежда
      </div>
    </div>
  </section>
</template>