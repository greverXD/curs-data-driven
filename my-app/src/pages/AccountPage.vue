<script setup>
import { ref } from 'vue'

const user = ref({
  name: 'Иван Петров',
  email: 'ivan@example.com',
  phone: '+7 (999) 123-45-67',
  birthday: ''
})

const save = () => {
  console.log('Saved:', user.value)
}
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-10">

    <h1 class="text-3xl font-bold mb-8">Личный кабинет</h1>

    <div class="grid md:grid-cols-3 gap-6">
      <div class="border rounded-2xl p-6">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            👤
          </div>
          <div>
            <p class="font-semibold">{{ user.name }}</p>
            <p class="text-sm text-gray-500">{{ user.email }}</p>
          </div>
        </div>
        <div class="space-y-2">

          <button class="w-full text-left px-4 py-2 rounded-xl bg-black text-white">
            👤 Профиль
          </button>

          <button class="w-full text-left px-4 py-2 rounded-xl hover:bg-gray-100">
            📦 Мои заказы
          </button>

          <button class="w-full text-left px-4 py-2 rounded-xl hover:bg-gray-100">
            ❤️ Избранное
          </button>

          <button class="w-full text-left px-4 py-2 rounded-xl hover:bg-gray-100">
            📍 Адреса
          </button>

          <button class="w-full text-left px-4 py-2 rounded-xl hover:bg-gray-100">
            💳 Оплата
          </button>

          <button class="w-full text-left px-4 py-2 rounded-xl hover:bg-gray-100">
            ⚙ Настройки
          </button>

          <button class="w-full text-left px-4 py-2 rounded-xl text-red-500 hover:bg-red-50">
            🚪 Выйти
          </button>

        </div>
      </div>
      <div class="md:col-span-2 border rounded-2xl p-6">

        <h2 class="text-2xl font-semibold mb-6">Личные данные</h2>

        <div class="space-y-4">

          <div>
            <label class="block mb-1 text-sm font-medium">Имя и фамилия</label>
            <input v-model="user.name" class="w-full border rounded-xl px-4 py-2" />
          </div>

          <div>
            <label class="block mb-1 text-sm font-medium">Email</label>
            <input v-model="user.email" class="w-full border rounded-xl px-4 py-2" />
          </div>

          <div>
            <label class="block mb-1 text-sm font-medium">Телефон</label>
            <input v-model="user.phone" class="w-full border rounded-xl px-4 py-2" />
          </div>

          <div>
            <label class="block mb-1 text-sm font-medium">Дата рождения</label>
            <input
              v-model="user.birthday"
              placeholder="дд.мм.гггг"
              class="w-full border rounded-xl px-4 py-2"
            />
          </div>

          <button
            @click="save"
            class="bg-black text-white px-6 py-2 rounded-xl mt-4"
          >
            Сохранить изменения
          </button>

        </div>

      </div>

    </div>

  </div>
</template>