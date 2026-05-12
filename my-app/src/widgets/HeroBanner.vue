<template>
  <section
    class="relative h-[350px] md:h-[500px] flex items-center justify-center text-white overflow-hidden"
  >
    <img
      src="https://cdn.ranvik.ru/ranvik/lenta/content/39/9a/399adfcb0970c870d27173cd4040afb3_preview.webp"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <div class="absolute inset-0 bg-black/40"></div>

    <div class="relative text-center px-4">
      <h2 class="text-3xl md:text-5xl font-bold mb-4">
        Новая коллекция
      </h2>

      <router-link
        to="/catalog"
        class="inline-block px-6 py-3 bg-white text-black rounded transition hover:scale-105 hover:bg-gray-200"
      >
        В каталог
      </router-link>
    </div>
  </section>
</template>