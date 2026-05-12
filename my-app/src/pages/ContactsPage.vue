<!-- ContactsPage.vue -->

<script setup>
import { ref } from 'vue'

import Header from '../widgets/Header.vue'
import Footer from '../widgets/Footer.vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submit = () => {
  console.log(form.value)
}
</script>

<template>

  <div class="min-h-screen flex flex-col">

    <Header />

    <main
      class="
        flex-1
        max-w-6xl
        mx-auto
        px-4
        sm:px-6
        md:px-8
        py-8 md:py-10
        w-full
      "
    >

      <h1
        class="
          text-3xl
          md:text-4xl
          font-bold
          mb-8
        "
      >
        Контакты
      </h1>

      <div
        class="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
        "
      >

        <!-- INFO -->
        <div class="space-y-6">

          <div
            class="
              border
              rounded-2xl
              p-4 md:p-6
              bg-white
            "
          >

            <h2
              class="
                text-xl
                font-semibold
                mb-4
              "
            >
              Свяжитесь с нами
            </h2>

            <div class="space-y-4 text-gray-700">

              <div>
                <p class="font-medium">
                  📞 Телефон
                </p>

                <p>+7 (495) 123-45-67</p>
              </div>

              <div>
                <p class="font-medium">
                  ✉ Email
                </p>

                <p>info@fashion.ru</p>
              </div>

              <div>
                <p class="font-medium">
                  📍 Адрес
                </p>

                <p>Москва</p>
              </div>

            </div>

          </div>

        </div>

        <!-- FORM -->
        <div
          class="
            border
            rounded-2xl
            p-4 md:p-6
            bg-white
          "
        >

          <h2
            class="
              text-xl
              font-semibold
              mb-4
            "
          >
            Напишите нам
          </h2>

          <div class="space-y-4">

            <input
              v-model="form.name"
              placeholder="Ваше имя"
              class="
                w-full
                border
                rounded-xl
                px-4 py-3
                outline-none
                focus:border-black
              "
            />

            <input
              v-model="form.email"
              placeholder="your@email.com"
              class="
                w-full
                border
                rounded-xl
                px-4 py-3
                outline-none
                focus:border-black
              "
            />

            <input
              v-model="form.phone"
              placeholder="+7..."
              class="
                w-full
                border
                rounded-xl
                px-4 py-3
                outline-none
                focus:border-black
              "
            />

            <textarea
              v-model="form.message"
              placeholder="Сообщение..."
              class="
                w-full
                border
                rounded-xl
                px-4 py-3
                h-32
                outline-none
                focus:border-black
              "
            />

            <button
              @click="submit"
              class="
                w-full
                bg-black
                text-white
                py-3
                rounded-xl
                font-semibold
                transition
                hover:bg-zinc-800
                active:scale-[0.98]
              "
            >
              Отправить сообщение
            </button>

          </div>

        </div>

      </div>

    </main>

    <Footer />

  </div>

</template>