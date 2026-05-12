<!-- ReturnPage.vue -->

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
        Возврат и обмен
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
          🔄
        </div>

        <div>

          <h2
            class="
              text-xl
              font-semibold
            "
          >
            30 дней на возврат
          </h2>

          <p
            class="
              text-gray-400
              text-sm
              mt-1
            "
          >
            Вы можете вернуть товар в течение 30 дней
          </p>

        </div>

      </div>

      <!-- CONDITIONS -->
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
          Условия возврата
        </h2>

        <div class="space-y-6">

          <div class="flex gap-4">

            <div class="text-green-600 text-2xl">
              ✔
            </div>

            <div>

              <p class="font-semibold">
                Товар не был в использовании
              </p>

              <p class="text-sm text-gray-500 mt-1">
                Сохранены все ярлыки и заводская упаковка
              </p>

            </div>

          </div>

          <div class="flex gap-4">

            <div class="text-green-600 text-2xl">
              ✔
            </div>

            <div>

              <p class="font-semibold">
                Товарный вид сохранен
              </p>

              <p class="text-sm text-gray-500 mt-1">
                Отсутствуют следы носки и повреждения
              </p>

            </div>

          </div>

          <div class="flex gap-4">

            <div class="text-green-600 text-2xl">
              ✔
            </div>

            <div>

              <p class="font-semibold">
                Наличие чека
              </p>

              <p class="text-sm text-gray-500 mt-1">
                Подойдет чек или номер заказа
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>

    <Footer />

  </div>

</template>