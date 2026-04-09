<script setup>
import { ref } from 'vue'
import Footer from '../widgets/Footer.vue';
import Header from '../widgets/Header.vue';

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
    <Header/>
  <div class="max-w-6xl mx-auto px-4 py-10">

    <h1 class="text-3xl font-bold mb-8">Контакты</h1>

    <div class="grid md:grid-cols-2 gap-6">
      <div class="space-y-6">

        <div class="border rounded-2xl p-6">
          <h2 class="text-xl font-semibold mb-4">Свяжитесь с нами</h2>

          <div class="space-y-4 text-gray-700">

            <div>
              <p class="font-medium">📞 Телефон</p>
              <p>+7 (495) 123-45-67</p>
              <p class="text-sm text-gray-500">Бесплатный звонок по России</p>
            </div>

            <div>
              <p class="font-medium">✉ Email</p>
              <p>info@fashion.ru</p>
              <p class="text-sm text-gray-500">Ответим в течение 24 часов</p>
            </div>

            <div>
              <p class="font-medium">📍 Адрес</p>
              <p>Москва, ул. Тверская, д. 15</p>
              <p class="text-sm text-gray-500">Наш флагманский магазин</p>
            </div>

            <div>
              <p class="font-medium">🕒 Режим работы</p>
              <p>Пн-Вс: 10:00 - 22:00</p>
              <p class="text-sm text-gray-500">Без выходных</p>
            </div>

          </div>
        </div>

        <div class="border rounded-2xl p-6">
          <h2 class="text-xl font-semibold mb-2">Служба поддержки</h2>
          <p class="text-gray-600">
            Наша команда всегда готова помочь вам с любыми вопросами
            по заказам, доставке или возврату товаров.
          </p>
          <p class="text-sm text-gray-500 mt-2">
            Среднее время ответа: 2 часа
          </p>
        </div>

      </div>

      <div class="border rounded-2xl p-6">
        <h2 class="text-xl font-semibold mb-4">Напишите нам</h2>

        <div class="space-y-4">

          <input
            v-model="form.name"
            placeholder="Ваше имя"
            class="w-full border rounded-xl px-4 py-3"
          />

          <input
            v-model="form.email"
            placeholder="your@email.com"
            class="w-full border rounded-xl px-4 py-3"
          />

          <input
            v-model="form.phone"
            placeholder="+7 (___) ___-__-__"
            class="w-full border rounded-xl px-4 py-3"
          />

          <textarea
            v-model="form.message"
            placeholder="Ваше сообщение..."
            class="w-full border rounded-xl px-4 py-3 h-32"
          />

          <button
            @click="submit"
            class="w-full bg-black text-white py-3 rounded-xl font-semibold"
          >
            Отправить сообщение
          </button>

        </div>
      </div>

    </div>

  </div>
  <Footer/>
</template>