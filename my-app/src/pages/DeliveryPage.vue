<script setup>
import Footer from '../widgets/Footer.vue';
import Header from '../widgets/Header.vue';

</script>

<template>
    <Header/>
  <div class="max-w-5xl mx-auto px-4 py-10">

    <h1 class="text-3xl font-bold mb-8">Доставка</h1>
    <div class="grid md:grid-cols-3 gap-4 mb-10">
      <div class="border rounded-2xl p-6 text-center">
        📦
        <p class="font-semibold">Упаковка</p>
        <p class="text-sm text-gray-500">
          Надежная упаковка каждого заказа
        </p>
      </div>

      <div class="border rounded-2xl p-6 text-center">
        🚚
        <p class="font-semibold">Доставка</p>
        <p class="text-sm text-gray-500">
          По всей России
        </p>
      </div>

      <div class="border rounded-2xl p-6 text-center">
        ✔
        <p class="font-semibold">Получение</p>
        <p class="text-sm text-gray-500">
          Удобный способ получения
        </p>
      </div>
    </div>
    <div class="border rounded-2xl p-6 mb-10">
      <h2 class="text-xl font-semibold mb-4">Способы доставки</h2>

      <div class="space-y-4 text-gray-700">

        <div>
          <p class="font-semibold">Курьерская доставка</p>
          <p class="text-sm text-gray-500">
            Москва и СПб — 500 ₽ (бесплатно от 5000 ₽)
          </p>
          <p class="text-sm text-gray-500">
            Срок: 1-2 рабочих дня
          </p>
        </div>

        <div>
          <p class="font-semibold">Почта России</p>
          <p class="text-sm text-gray-500">
            По всей России — от 300 ₽
          </p>
          <p class="text-sm text-gray-500">
            Срок: 5-14 рабочих дней
          </p>
        </div>

        <div>
          <p class="font-semibold">Пункты выдачи</p>
          <p class="text-sm text-gray-500">
            СДЭК, Boxberry — от 250 ₽ (бесплатно от 5000 ₽)
          </p>
          <p class="text-sm text-gray-500">
            Срок: 2-5 рабочих дней
          </p>
        </div>

      </div>
    </div>
    <div class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Условия доставки</h2>

      <ul class="text-gray-600 space-y-1 text-sm">
        <li>• Бесплатная доставка от 5000 ₽</li>
        <li>• Оплата при получении доступна</li>
        <li>• Возможность примерки</li>
        <li>• SMS-уведомления</li>
        <li>• Доставка в день заказа (до 12:00)</li>
      </ul>
    </div>
    <div>
      <h2 class="text-xl font-semibold mb-4">Международная доставка</h2>

      <p class="text-gray-600">
        Доставка в страны СНГ и Европы рассчитывается индивидуально.
      </p>
    </div>

  </div>
  <Footer/>
</template>