<script setup>
import { ref } from 'vue'
import Footer from '../widgets/Footer.vue';
import Header from '../widgets/Header.vue';

const orderId = ref('')

const trackOrder = () => {
  console.log('Track:', orderId.value)
}
</script>

<template>
    <Header/>
  <div class="max-w-5xl mx-auto px-4 py-10">

    <h1 class="text-3xl font-bold mb-8">Отследить заказ</h1>

    <div class="border rounded-2xl p-8 mb-10">
      <h2 class="text-xl font-semibold mb-6 flex items-center gap-2">
        🔍 Введите номер заказа
      </h2>

      <div class="mb-4">
        <label class="block mb-2 font-medium">Номер заказа</label>
        <input
          v-model="orderId"
          placeholder="Например: ORDER-123456"
          class="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
        />
        <p class="text-sm text-gray-500 mt-2">
          Номер заказа можно найти в письме-подтверждении
        </p>
      </div>

      <button
        @click="trackOrder"
        class="w-full bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90"
      >
        Отследить заказ
      </button>
    </div>
    <div class="grid md:grid-cols-3 gap-6">
      <div class="border rounded-2xl p-6 text-center">
        <div class="text-3xl mb-2">📦</div>
        <h3 class="font-semibold">Статус заказа</h3>
        <p class="text-sm text-gray-500">
          Отслеживайте статус в реальном времени
        </p>
      </div>

      <div class="border rounded-2xl p-6 text-center">
        <div class="text-3xl mb-2">🚚</div>
        <h3 class="font-semibold">Доставка</h3>
        <p class="text-sm text-gray-500">
          Информация о текущем местоположении
        </p>
      </div>

      <div class="border rounded-2xl p-6 text-center">
        <div class="text-3xl mb-2">✔</div>
        <h3 class="font-semibold">Уведомления</h3>
        <p class="text-sm text-gray-500">
          SMS и email о статусе доставки
        </p>
      </div>
    </div>

  </div>
  <Footer/>
</template>