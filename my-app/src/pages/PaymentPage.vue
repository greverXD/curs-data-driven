<script setup>
import Footer from '../widgets/Footer.vue';
import Header from '../widgets/Header.vue';

</script>

<template>
    <Header/>
  <div class="max-w-6xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-8">Оплата</h1>
    <div class="bg-black text-white rounded-2xl p-8 mb-10 flex items-center gap-4">
      <div class="text-3xl">🛡️</div>
      <div>
        <h2 class="text-xl font-semibold">Безопасные платежи</h2>
        <p class="text-gray-400 text-sm">
          Все платежи защищены по стандарту PCI DSS
        </p>
      </div>
    </div>
    <div class="grid md:grid-cols-2 gap-6 mb-10">
      
      <div class="border rounded-2xl p-6">
        <div class="text-2xl mb-2">💳</div>
        <h3 class="text-xl font-semibold mb-1">Банковские карты</h3>
        <p class="text-gray-500 mb-4">Visa, MasterCard, МИР</p>

        <ul class="text-gray-600 text-sm space-y-1">
          <li>• Мгновенное зачисление</li>
          <li>• 3D Secure защита</li>
          <li>• Возврат на карту</li>
        </ul>
      </div>

      <div class="border rounded-2xl p-6">
        <div class="text-2xl mb-2">📱</div>
        <h3 class="text-xl font-semibold mb-1">Электронные кошельки</h3>
        <p class="text-gray-500 mb-4">ЮMoney, QIWI, WebMoney</p>

        <ul class="text-gray-600 text-sm space-y-1">
          <li>• Быстрая оплата</li>
          <li>• Без комиссии</li>
          <li>• Удобный возврат</li>
        </ul>
      </div>

      <div class="border rounded-2xl p-6">
        <div class="text-2xl mb-2">🧾</div>
        <h3 class="text-xl font-semibold mb-1">Оплата при получении</h3>
        <p class="text-gray-500 mb-4">Наличными или картой</p>

        <ul class="text-gray-600 text-sm space-y-1">
          <li>• Оплата курьеру</li>
          <li>• Оплата в пункте выдачи</li>
          <li>• Возможность примерки</li>
        </ul>
      </div>

      <div class="border rounded-2xl p-6">
        <div class="text-2xl mb-2">💳</div>
        <h3 class="text-xl font-semibold mb-1">Рассрочка</h3>
        <p class="text-gray-500 mb-4">От 5000 ₽ на 3-12 месяцев</p>

        <ul class="text-gray-600 text-sm space-y-1">
          <li>• Без первого взноса</li>
          <li>• Без переплаты</li>
          <li>• Быстрое одобрение</li>
        </ul>
      </div>

    </div>
    <div class="border rounded-2xl p-6 mb-10">
      <h2 class="text-2xl font-semibold mb-6">Как происходит оплата</h2>

      <div class="space-y-4 text-gray-700">
        <div>
          <p class="font-semibold">1. Выберите способ оплаты</p>
          <p class="text-sm text-gray-500">
            При оформлении заказа выберите удобный способ
          </p>
        </div>

        <div>
          <p class="font-semibold">2. Подтвердите оплату</p>
          <p class="text-sm text-gray-500">
            Введите данные карты или войдите в кошелек
          </p>
        </div>

        <div>
          <p class="font-semibold">3. Получите подтверждение</p>
          <p class="text-sm text-gray-500">
            Вам придет SMS и email с деталями заказа
          </p>
        </div>
      </div>
    </div>
    <div class="mb-10">
      <h2 class="text-2xl font-semibold mb-4">Безопасность платежей</h2>

      <p class="text-gray-600 mb-4">
        Мы используем современные технологии шифрования для защиты ваших данных.
        Информация о вашей банковской карте передается только в зашифрованном виде
        и не сохраняется на наших серверах.
      </p>

      <ul class="text-gray-600 space-y-1 text-sm">
        <li>• SSL-сертификат для защиты данных</li>
        <li>• 3D Secure авторизация</li>
        <li>• PCI DSS сертификация</li>
        <li>• Защита от мошенничества</li>
      </ul>
    </div>
    <div>
      <h2 class="text-2xl font-semibold mb-4">Возврат средств</h2>

      <p class="text-gray-600">
        При возврате товара деньги возвращаются тем же способом, которым была произведена оплата.
        Срок возврата — 3-5 рабочих дней с момента получения товара на нашем складе.
      </p>
    </div>

  </div>
  <Footer/>
</template>