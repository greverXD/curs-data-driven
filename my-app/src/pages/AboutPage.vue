<!-- AboutPage.vue / FAQ -->

<script setup lang="ts">
import { ref, computed } from 'vue'

import Header from '../widgets/Header.vue'
import Footer from '../widgets/Footer.vue'

const phone = '+375291234567'

const isMobile =
  /Android|iPhone|iPad|iPod/i.test(
    navigator.userAgent
  )

const link = computed(() => {
  if (isMobile) {
    return `tel:${phone}`
  }

  return `viber://chat?number=${phone.replace('+', '')}`
})

const activeIndex = ref<number | null>(null)

const toggle = (index: number) => {
  activeIndex.value =
    activeIndex.value === index
      ? null
      : index
}

const faqs = [
  {
    q: 'Как оформить заказ?',
    a: 'Выберите товар, добавьте его в корзину и перейдите к оформлению.'
  },
  {
    q: 'Какие способы оплаты доступны?',
    a: 'Мы принимаем банковские карты, Apple Pay и Google Pay.'
  },
  {
    q: 'Сколько стоит доставка?',
    a: 'Стоимость зависит от региона.'
  }
]
</script>

<template>

  <div class="min-h-screen flex flex-col">

    <Header />

    <main
      class="
        flex-1
        px-4
        sm:px-6
        md:px-10
        py-8 md:py-10
        max-w-4xl
        mx-auto
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
        Часто задаваемые вопросы
      </h1>

      <div class="space-y-4">

        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="
            border
            rounded-2xl
            p-4 md:p-5
            cursor-pointer
            transition
            hover:shadow-lg
            bg-white
          "
          @click="toggle(index)"
        >

          <div
            class="
              flex
              justify-between
              items-center
              gap-4
            "
          >

            <p
              class="
                font-medium
                text-sm
                md:text-base
              "
            >
              {{ item.q }}
            </p>

            <span class="text-2xl shrink-0">
              {{ activeIndex === index ? '−' : '+' }}
            </span>

          </div>

          <transition name="fade">

            <p
              v-if="activeIndex === index"
              class="
                mt-4
                text-gray-600
                leading-7
              "
            >
              {{ item.a }}
            </p>

          </transition>

        </div>

      </div>

      <!-- CONTACT BLOCK -->
      <div
        class="
          bg-black
          text-white
          rounded-2xl
          p-6 md:p-8
          mt-10
          flex
          flex-col
          md:flex-row
          items-start
          md:items-center
          justify-between
          gap-6
        "
      >

        <div>

          <h2 class="text-2xl font-bold mb-2">
            Не нашли ответ?
          </h2>

          <p class="text-gray-400">
            Свяжитесь с нами
          </p>

        </div>

        <a
          :href="link"
          class="
            bg-white
            text-black
            px-6 py-3
            rounded-xl
            font-semibold
            hover:opacity-90
            transition
            w-full
            md:w-auto
            text-center
          "
        >
          {{ phone }}
        </a>

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
  transform: translateY(-5px);
}
</style>