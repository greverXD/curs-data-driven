<!-- PaymentPage.vue -->

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
        max-w-6xl
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
        Оплата
      </h1>

      <!-- HERO -->
      <div
        class="
          bg-black
          text-white
          rounded-2xl
          p-6
          md:p-8
          mb-10
          flex
          flex-col
          sm:flex-row
          sm:items-center
          gap-4
        "
      >

        <div class="text-4xl">
          🛡️
        </div>

        <div>

          <h2
            class="
              text-xl
              font-semibold
            "
          >
            Безопасные платежи
          </h2>

          <p
            class="
              text-gray-400
              text-sm
              mt-1
            "
          >
            Все платежи защищены по стандарту PCI DSS
          </p>

        </div>

      </div>

      <!-- METHODS -->
      <div
        class="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          mb-10
        "
      >

        <div
          class="
            border
            rounded-2xl
            p-6
            hover:shadow-md
            transition
          "
        >
          <div class="text-3xl mb-3">
            💳
          </div>

          <h3 class="text-xl font-semibold mb-2">
            Банковские карты
          </h3>

          <p class="text-gray-500 mb-4">
            Visa, MasterCard, МИР
          </p>

          <ul
            class="
              text-gray-600
              text-sm
              space-y-2
            "
          >
            <li>• Мгновенное зачисление</li>
            <li>• 3D Secure защита</li>
            <li>• Возврат на карту</li>
          </ul>
        </div>

        <div
          class="
            border
            rounded-2xl
            p-6
            hover:shadow-md
            transition
          "
        >
          <div class="text-3xl mb-3">
            📱
          </div>

          <h3 class="text-xl font-semibold mb-2">
            Электронные кошельки
          </h3>

          <p class="text-gray-500 mb-4">
            ЮMoney, QIWI, WebMoney
          </p>

          <ul
            class="
              text-gray-600
              text-sm
              space-y-2
            "
          >
            <li>• Быстрая оплата</li>
            <li>• Без комиссии</li>
            <li>• Удобный возврат</li>
          </ul>
        </div>

      </div>

    </main>

    <Footer />

  </div>

</template>