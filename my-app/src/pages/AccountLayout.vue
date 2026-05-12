<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getMe } from '../api/user'

import Header from '../widgets/Header.vue'
import Footer from '../widgets/Footer.vue'

const user = ref<any>(null)

onMounted(async () => {
  const res = await getMe()
  user.value = res.data
})
</script>

<template>

  <div class="min-h-screen flex flex-col">

    <Header />

    <main
      class="
        flex-1
        px-4 md:px-8 lg:px-10
        py-6 md:py-10
      "
    >

      <!-- TITLE -->
      <div class="mb-8">

        <h1 class="text-3xl md:text-4xl font-bold">
          Личный кабинет
        </h1>

        <p class="text-gray-500 mt-2">
          Управление аккаунтом и заказами
        </p>

      </div>

      <!-- LAYOUT -->
      <div
        class="
          flex
          flex-col
          lg:flex-row
          gap-6
        "
      >

        <!-- SIDEBAR -->
        <aside
          class="
            w-full
            lg:w-72
            bg-white
            p-5 md:p-6
            rounded-2xl
            shadow-sm
            border
            h-fit
          "
        >

          <!-- USER -->
          <div class="mb-6 pb-6 border-b">

            <div
              class="
                w-14 h-14
                rounded-full
                bg-black
                text-white
                flex items-center justify-center
                text-xl font-bold
                mb-3
              "
            >
              {{ user?.email?.[0]?.toUpperCase() }}
            </div>

            <p class="font-semibold break-all">
              {{ user?.email }}
            </p>

          </div>

          <!-- NAV -->
          <nav class="flex flex-col gap-2">

            <router-link
              to="/account"
              class="link"
            >
              Профиль
            </router-link>

            <router-link
              to="/account/orders"
              class="link"
            >
              Мои заказы
            </router-link>

            <router-link
              to="/account/favorites"
              class="link"
            >
              Избранное
            </router-link>

            <router-link
              to="/account/addresses"
              class="link"
            >
              Адреса
            </router-link>

            <router-link
              to="/account/payment"
              class="link"
            >
              Оплата
            </router-link>

            <router-link
              to="/account/settings"
              class="link"
            >
              Настройки
            </router-link>

          </nav>

        </aside>

        <!-- CONTENT -->
        <section
          class="
            flex-1
            bg-white
            p-5 md:p-6
            rounded-2xl
            shadow-sm
            border
            overflow-hidden
          "
        >

          <router-view />

        </section>

      </div>

    </main>

    <Footer />

  </div>

</template>

<style scoped>
.link {
  padding: 12px 14px;
  border-radius: 12px;
  transition: 0.2s;
}

.link:hover {
  background: #f3f4f6;
}

.link.router-link-active {
  background: black;
  color: white;
}
</style>