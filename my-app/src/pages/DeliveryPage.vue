<!-- DeliveryPage.vue -->

<script setup>
import Footer from '../widgets/Footer.vue'
import Header from '../widgets/Header.vue'
</script>

<template>

  <div class="min-h-screen flex flex-col">

    <Header />

    <main
      class="
        flex-1
        max-w-5xl
        mx-auto
        w-full
        px-4
        md:px-6
        py-6
        md:py-10
      "
    >

      <!-- TITLE -->
      <h1
        class="
          text-3xl
          md:text-4xl
          font-bold
          mb-8
        "
      >
        Доставка
      </h1>

      <!-- STEPS -->
      <div
        class="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-4
          mb-10
        "
      >

        <div
          class="
            border
            rounded-2xl
            p-6
            text-center
            hover:shadow-md
            transition
          "
        >
          <div class="text-4xl mb-3">
            📦
          </div>

          <p class="font-semibold">
            Упаковка
          </p>

          <p class="text-sm text-gray-500 mt-2">
            Надежная упаковка каждого заказа
          </p>
        </div>

        <div
          class="
            border
            rounded-2xl
            p-6
            text-center
            hover:shadow-md
            transition
          "
        >
          <div class="text-4xl mb-3">
            🚚
          </div>

          <p class="font-semibold">
            Доставка
          </p>

          <p class="text-sm text-gray-500 mt-2">
            По всей России
          </p>
        </div>

        <div
          class="
            border
            rounded-2xl
            p-6
            text-center
            hover:shadow-md
            transition
          "
        >
          <div class="text-4xl mb-3">
            ✔
          </div>

          <p class="font-semibold">
            Получение
          </p>

          <p class="text-sm text-gray-500 mt-2">
            Удобный способ получения
          </p>
        </div>

      </div>

      <!-- DELIVERY TYPES -->
      <div
        class="
          border
          rounded-2xl
          p-5
          md:p-6
          mb-10
        "
      >

        <h2
          class="
            text-2xl
            font-semibold
            mb-6
          "
        >
          Способы доставки
        </h2>

        <div class="space-y-6">

          <div>
            <p class="font-semibold">
              Курьерская доставка
            </p>

            <p class="text-sm text-gray-500 mt-1">
              Москва и СПб — 500 ₽
            </p>

            <p class="text-sm text-gray-500">
              Бесплатно от 5000 ₽
            </p>

            <p class="text-sm text-gray-500">
              Срок: 1–2 рабочих дня
            </p>
          </div>

          <div>
            <p class="font-semibold">
              Почта России
            </p>

            <p class="text-sm text-gray-500 mt-1">
              По всей России — от 300 ₽
            </p>

            <p class="text-sm text-gray-500">
              Срок: 5–14 рабочих дней
            </p>
          </div>

          <div>
            <p class="font-semibold">
              Пункты выдачи
            </p>

            <p class="text-sm text-gray-500 mt-1">
              СДЭК, Boxberry — от 250 ₽
            </p>

            <p class="text-sm text-gray-500">
              Бесплатно от 5000 ₽
            </p>

            <p class="text-sm text-gray-500">
              Срок: 2–5 рабочих дней
            </p>
          </div>

        </div>

      </div>

      <!-- CONDITIONS -->
      <div class="mb-10">

        <h2
          class="
            text-2xl
            font-semibold
            mb-5
          "
        >
          Условия доставки
        </h2>

        <ul
          class="
            text-gray-600
            space-y-3
            text-sm
          "
        >
          <li>• Бесплатная доставка от 5000 ₽</li>
          <li>• Оплата при получении доступна</li>
          <li>• Возможность примерки</li>
          <li>• SMS-уведомления</li>
          <li>• Доставка в день заказа (до 12:00)</li>
        </ul>

      </div>

      <!-- INTERNATIONAL -->
      <div
        class="
          border
          rounded-2xl
          p-5
          md:p-6
          bg-gray-50
        "
      >

        <h2
          class="
            text-2xl
            font-semibold
            mb-4
          "
        >
          Международная доставка
        </h2>

        <p class="text-gray-600 leading-7">
          Доставка в страны СНГ и Европы
          рассчитывается индивидуально.
        </p>

      </div>

    </main>

    <Footer />

  </div>

</template>