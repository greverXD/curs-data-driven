<script setup>
import { ref } from 'vue'

import Footer from '../widgets/Footer.vue'
import Header from '../widgets/Header.vue'

const orderId = ref('')

const orderFound = ref(false)

const orderData = ref({
  status: 'В пути',
  date: '12 мая 2026',
  delivery: '15 мая 2026',
  city: 'Москва'
})

const trackOrder = () => {
  if (!orderId.value) return

  console.log('Track:', orderId.value)

  // временная заглушка
  orderFound.value = true
}
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
        Отследить заказ
      </h1>

      <!-- TRACK FORM -->
      <div
        class="
          border
          rounded-2xl
          p-5
          md:p-8
          mb-10
          bg-white
        "
      >

        <h2
          class="
            text-xl
            md:text-2xl
            font-semibold
            mb-6
            flex
            items-center
            gap-2
          "
        >
          🔍 Введите номер заказа
        </h2>

        <div class="mb-4">

          <label class="block mb-2 font-medium">
            Номер заказа
          </label>

          <input
            v-model="orderId"
            placeholder="Например: ORDER-123456"
            class="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
              transition
              focus:ring-2
              focus:ring-black
            "
          />

          <p class="text-sm text-gray-500 mt-2">
            Номер заказа можно найти
            в письме-подтверждении
          </p>

        </div>

        <button
          @click="trackOrder"
          class="
            w-full
            bg-black
            text-white
            py-3
            rounded-xl
            font-semibold
            transition-all
            duration-300
            hover:scale-[1.01]
            hover:opacity-90
            active:scale-[0.99]
          "
        >
          Отследить заказ
        </button>

      </div>

      <!-- RESULT -->
      <transition name="fade">

        <div
          v-if="orderFound"
          class="
            border
            rounded-2xl
            p-5
            md:p-8
            mb-10
            bg-gray-50
          "
        >

          <div
            class="
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-4
              mb-8
            "
          >

            <div>

              <p class="text-sm text-gray-500">
                Заказ
              </p>

              <h2 class="text-2xl font-bold">
                {{ orderId }}
              </h2>

            </div>

            <div
              class="
                bg-black
                text-white
                px-4
                py-2
                rounded-full
                text-sm
                w-fit
              "
            >
              {{ orderData.status }}
            </div>

          </div>

          <!-- TIMELINE -->
          <div class="space-y-6">

            <div class="flex gap-4">

              <div
                class="
                  w-10
                  h-10
                  rounded-full
                  bg-black
                  text-white
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                ✔
              </div>

              <div>
                <p class="font-semibold">
                  Заказ оформлен
                </p>

                <p class="text-sm text-gray-500">
                  {{ orderData.date }}
                </p>
              </div>

            </div>

            <div class="flex gap-4">

              <div
                class="
                  w-10
                  h-10
                  rounded-full
                  bg-black
                  text-white
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                🚚
              </div>

              <div>
                <p class="font-semibold">
                  Заказ в пути
                </p>

                <p class="text-sm text-gray-500">
                  Текущее местоположение:
                  {{ orderData.city }}
                </p>
              </div>

            </div>

            <div class="flex gap-4">

              <div
                class="
                  w-10
                  h-10
                  rounded-full
                  border-2
                  border-black
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                📦
              </div>

              <div>
                <p class="font-semibold">
                  Ожидаемая доставка
                </p>

                <p class="text-sm text-gray-500">
                  {{ orderData.delivery }}
                </p>
              </div>

            </div>

          </div>

        </div>

      </transition>

      <!-- FEATURES -->
      <div
        class="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-6
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

          <h3 class="font-semibold">
            Статус заказа
          </h3>

          <p class="text-sm text-gray-500 mt-2">
            Отслеживайте статус
            в реальном времени
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

          <h3 class="font-semibold">
            Доставка
          </h3>

          <p class="text-sm text-gray-500 mt-2">
            Информация о текущем
            местоположении
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

          <h3 class="font-semibold">
            Уведомления
          </h3>

          <p class="text-sm text-gray-500 mt-2">
            SMS и email о статусе доставки
          </p>

        </div>

      </div>

    </main>

    <Footer />

  </div>

</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>