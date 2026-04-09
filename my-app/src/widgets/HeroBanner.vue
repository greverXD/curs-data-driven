<template>
  <section
    class="relative h-[500px] flex items-center justify-center text-white"
  >

    <img
      src="https://cdn.ranvik.ru/ranvik/lenta/content/39/9a/399adfcb0970c870d27173cd4040afb3_preview.webp"
      class="absolute w-full h-full object-cover"
    />

    <div class="absolute inset-0 bg-black/40"></div>

    <div class="relative text-center">
      <h2 class="text-4xl font-bold mb-4">Новая коллекция</h2>

      <button
        class="px-6 py-3 bg-white text-black rounded transition 
               hover:scale-110 hover:bg-gray-200"
      >
        <router-link to="/catalog">В каталог</router-link>
      </button>
    </div>
  </section>
</template>