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
  <Header/>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6">Личный кабинет</h1>

    <div class="flex gap-6">
      <!-- Sidebar -->
      <aside class="w-72 bg-white p-6 rounded-xl shadow">
        <div class="mb-6">
          <p class="font-semibold">
            {{ user?.email }}
          </p>
        </div>

        <nav class="flex flex-col gap-2">
          <router-link to="/account">Профиль</router-link>
          <router-link to="/account/orders">Мои заказы</router-link>
          <router-link to="/account/favorites">Избранное</router-link>
          <router-link to="/account/addresses">Адреса</router-link>
          <router-link to="/account/payment">Оплата</router-link>
          <router-link to="/account/settings">Настройки</router-link>
        </nav>
      </aside>

      <main class="flex-1 bg-white p-6 rounded-xl shadow">
        <router-view />
      </main>
    </div>
  </div>
  <Footer/>
</template>

<style scoped>
.link {
  padding: 10px;
  border-radius: 8px;
}
.link.router-link-active {
  background: black;
  color: white;
}
</style>