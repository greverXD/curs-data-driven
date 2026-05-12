<template>
  <footer
    class="
      px-4 md:px-8
      py-10
      bg-black
      text-white
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-4
      gap-8
    "
  >

    <!-- BRAND -->
    <div>
      <h3 class="font-bold text-xl mb-2">
        MyShop
      </h3>

      <p class="text-gray-400">
        Стиль начинается здесь
      </p>
    </div>

    <!-- INFO -->
    <div>
      <h4 class="mb-3 font-semibold">
        Информация
      </h4>

      <ul class="text-gray-400 space-y-2">

        <li>
          <router-link to="/about">
            Часто задаваемые вопросы
          </router-link>
        </li>

        <li>
          <router-link to="/delivery">
            Доставка
          </router-link>
        </li>

        <li>
          <router-link to="/return">
            Возврат
          </router-link>
        </li>

        <li>
          <router-link to="/contact">
            Контакты
          </router-link>
        </li>

      </ul>
    </div>

    <!-- HELP -->
    <div>
      <h4 class="mb-3 font-semibold">
        Помощь
      </h4>

      <ul class="text-gray-400 space-y-2">

        <li>
          <router-link to="/about">
            FAQ
          </router-link>
        </li>

        <li>
          <router-link to="/payment">
            Оплата
          </router-link>
        </li>

        <li>
          <router-link to="/track">
            Отследить заказ
          </router-link>
        </li>

      </ul>
    </div>

    <!-- SOCIAL -->
    <div>
      <h4 class="mb-3 font-semibold">
        Соц сети
      </h4>

      <ul class="text-gray-400 space-y-2">

        <li class="hover:text-white transition cursor-pointer">
          Instagram
        </li>

        <li class="hover:text-white transition cursor-pointer">
          Telegram
        </li>

      </ul>
    </div>

  </footer>
</template>