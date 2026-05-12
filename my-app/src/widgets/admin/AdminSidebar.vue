<script setup lang="ts">
defineEmits(['close'])

const links = [
  {
    title: 'Обзор',
    path: '/admin'
  },
  {
    title: 'Рынок',
    path: '/admin/market'
  },
  {
    title: 'Заказы',
    path: '/admin/orders'
  },
  {
    title: 'Клиенты',
    path: '/admin/customers'
  },
  {
    title: 'География',
    path: '/admin/geography'
  },
  {
    title: 'Аналитика',
    path: '/admin/analytics'
  },
  {
    title: 'Товары',
    path: '/admin/products'
  },
  {
    title: 'Настройки',
    path: '/admin/settings'
  }
]
</script>

<template>

  <aside
    class="
      w-[280px]
      h-screen
      bg-white
      border-r
      border-gray-200
      flex
      flex-col
    "
  >

    <!-- TOP -->
    <div
      class="
        h-[72px]
        flex
        items-center
        justify-between
        px-6
        border-b
        border-gray-200
      "
    >

      <h1 class="text-2xl font-bold">
        Admin
      </h1>

      <!-- MOBILE CLOSE -->
      <button
        class="lg:hidden text-3xl"
        @click="$emit('close')"
      >
        ✕
      </button>

    </div>

    <!-- NAV -->
    <nav
      class="
        flex-1
        p-4
        flex
        flex-col
        gap-2
        overflow-y-auto
      "
    >

      <router-link
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="
          px-4
          py-3
          rounded-xl
          transition-all
          duration-200
          text-gray-700
          hover:bg-black
          hover:text-white
        "
      >
        {{ link.title }}
      </router-link>

    </nav>

  </aside>

</template>

<style scoped>
.router-link-active {
  background: black;
  color: white;
}
</style>