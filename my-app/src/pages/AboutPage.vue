<script setup lang="ts">
import { ref } from 'vue'
import { computed } from 'vue'
import Header from '../widgets/Header.vue'
import Footer from '../widgets/Footer.vue'
const phone = '+375291234567'
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

const link = computed(() => {
  if (isMobile) {
    return `tel:${phone}`
  }
  return `viber://chat?number=${phone.replace('+', '')}`
})
const activeIndex = ref<number | null>(null)

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqs = [
  {
    q: 'Как оформить заказ?',
    a: 'Выберите товар, добавьте его в корзину и перейдите к оформлению. Заполните данные доставки и подтвердите заказ.'
  },
  {
    q: 'Какие способы оплаты доступны?',
    a: 'Мы принимаем банковские карты, Apple Pay, Google Pay и оплату при получении.'
  },
  {
    q: 'Сколько стоит доставка?',
    a: 'Стоимость доставки рассчитывается автоматически при оформлении заказа и зависит от региона.'
  },
  {
    q: 'Как долго идет доставка?',
    a: 'В среднем доставка занимает от 2 до 7 рабочих дней в зависимости от города.'
  },
  {
    q: 'Могу ли я вернуть товар?',
    a: 'Да, вы можете вернуть товар в течение 30 дней при сохранении товарного вида.'
  },
  {
    q: 'Как узнать свой размер?',
    a: 'На странице товара есть таблица размеров. Также вы можете обратиться в поддержку.'
  },
  {
    q: 'Есть ли примерка при доставке?',
    a: 'В некоторых регионах доступна примерка перед покупкой — уточняйте при оформлении.'
  },
  {
    q: 'Как отследить заказ?',
    a: 'После отправки заказа вы получите трек-номер на email или в личном кабинете.'
  },
  {
    q: 'Можно ли обменять товар?',
    a: 'Да, обмен возможен в течение 30 дней при наличии товара на складе.'
  },
  {
    q: 'Какая гарантия на товары?',
    a: 'Мы предоставляем гарантию качества на все товары сроком до 6 месяцев.'
  },
  {
    q: 'Как связаться со службой поддержки?',
    a: 'Вы можете написать нам в чат на сайте или отправить письмо на support@shop.com.'
  },
  {
    q: 'Есть ли программа лояльности?',
    a: 'Да, мы начисляем бонусы за покупки, которые можно использовать для скидок.'
  }
]
</script>

<template>
  <Header />

  <main class="px-10 py-10 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Часто задаваемые вопросы</h1>

    <div class="space-y-3">
      <div
        v-for="(item, index) in faqs"
        :key="index"
        class="border rounded p-4 cursor-pointer transition hover:shadow"
        @click="toggle(index)"
      >
        <div class="flex justify-between items-center">
          <p class="font-medium">{{ item.q }}</p>
          <span>{{ activeIndex === index ? '−' : '+' }}</span>
        </div>

        <transition name="fade">
          <p
            v-if="activeIndex === index"
            class="mt-3 text-gray-600"
          >
            {{ item.a }}
          </p>
        </transition>
      </div>
    </div>
    <div class="bg-black text-white rounded-2xl p-8 mt-10 flex flex-col md:flex-row items-center justify-between">
    
    <div>
      <h2 class="text-2xl font-bold mb-2">
        Не нашли ответ на вопрос?
      </h2>
      <p class="text-gray-400">
        Позвоните нам — поможем за пару минут
      </p>
    </div>

    <a
      :href="link"
      class="mt-4 md:mt-0 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
    >
      {{ phone }}
    </a>

  </div>
  </main>

  <Footer />
</template>

<style>
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