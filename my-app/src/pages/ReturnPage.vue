<script setup>
import Footer from '../widgets/Footer.vue';
import Header from '../widgets/Header.vue';

</script>

<template>
    <Header/>
  <div class="max-w-5xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-8">Возврат и обмен</h1>
    <div class="bg-black text-white rounded-2xl p-8 mb-10 flex items-center gap-4">
      <div class="text-3xl">🔄</div>
      <div>
        <h2 class="text-xl font-semibold">30 дней на возврат</h2>
        <p class="text-gray-400 text-sm">
          Вы можете вернуть товар в течение 30 дней
        </p>
      </div>
    </div>
    <div class="border rounded-2xl p-6 mb-10">
      <h2 class="text-2xl font-semibold mb-6">Условия возврата</h2>

      <div class="space-y-5">
        
        <div class="flex gap-3">
          <div class="text-green-600 text-xl">✔</div>
          <div>
            <p class="font-semibold">Товар не был в использовании</p>
            <p class="text-sm text-gray-500">
              Сохранены все ярлыки и заводская упаковка
            </p>
          </div>
        </div>

        <div class="flex gap-3">
          <div class="text-green-600 text-xl">✔</div>
          <div>
            <p class="font-semibold">Товарный вид сохранен</p>
            <p class="text-sm text-gray-500">
              Отсутствуют следы носки, пятна, повреждения
            </p>
          </div>
        </div>

        <div class="flex gap-3">
          <div class="text-green-600 text-xl">✔</div>
          <div>
            <p class="font-semibold">Наличие чека</p>
            <p class="text-sm text-gray-500">
              Кассовый или товарный чек, либо номер заказа
            </p>
          </div>
        </div>

      </div>
    </div>
    <div class="mb-10">
      <h2 class="text-2xl font-semibold mb-6">Как оформить возврат</h2>

      <div class="space-y-5 text-gray-700">

        <div>
          <p class="font-semibold">1. Свяжитесь с нами</p>
          <p class="text-sm text-gray-500">
            Позвоните по телефону или напишите на почту
          </p>
        </div>

        <div>
          <p class="font-semibold">2. Упакуйте товар</p>
          <p class="text-sm text-gray-500">
            Аккуратно упакуйте товар со всеми ярлыками
          </p>
        </div>

        <div>
          <p class="font-semibold">3. Отправьте товар</p>
          <p class="text-sm text-gray-500">
            Отправьте товар курьером или в пункт выдачи
          </p>
        </div>

        <div>
          <p class="font-semibold">4. Получите деньги</p>
          <p class="text-sm text-gray-500">
            Возврат средств в течение 3-5 рабочих дней
          </p>
        </div>

      </div>
    </div>
    <div class="mb-10">
      <h2 class="text-2xl font-semibold mb-4">Обмен товара</h2>

      <p class="text-gray-600 mb-4">
        Вы можете обменять товар на другой размер или цвет в течение 30 дней.
        Обмен производится бесплатно.
      </p>

      <p class="text-gray-600">
        Для оформления обмена свяжитесь с нашей службой поддержки.
      </p>
    </div>
    <div class="border border-red-200 bg-red-50 rounded-2xl p-6">
      <div class="flex items-start gap-3">
        <div class="text-red-600 text-xl">✖</div>
        <div>
          <h3 class="text-lg font-semibold mb-2">
            Не подлежат возврату:
          </h3>

          <ul class="text-sm text-gray-700 space-y-1">
            <li>• Нижнее белье и купальники</li>
            <li>• Товары со следами использования</li>
            <li>• Товары без ярлыков и упаковки</li>
            <li>• Товары по акции (если указано отдельно)</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
  <Footer/>
</template>