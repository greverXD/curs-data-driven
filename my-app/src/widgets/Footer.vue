<template>
  <footer class="px-8 py-10 bg-black text-white grid grid-cols-4 gap-6">
    
    <div>
      <h3 class="font-bold mb-2">MyShop</h3>
      <p class="text-gray-400">Стиль начинается здесь</p>
    </div>

    <div>
      <h4 class="mb-2">Информация</h4>
      <ul class="text-gray-400 space-y-1">
        <router-link to="/about">Часто задаваемые вопросы</router-link>
        <li><router-link to="/delivery">Доставка</router-link></li>
        <li><router-link to="/return">Возврат</router-link></li>
        <li><router-link to="/contact">Контакты</router-link></li>
      </ul>
    </div>

    <div>
      <h4 class="mb-2">Помощь</h4>
      <ul class="text-gray-400 space-y-1">
        <li><router-link to="/about">FAQ</router-link></li>
        <li><router-link to="/payment">Оплата</router-link></li>
        <li><router-link to="/track">Отследить заказы</router-link></li>
      </ul>
    </div>

    <div>
      <h4 class="mb-2">Соц сети</h4>
      <ul class="text-gray-400 space-y-1">
        <li>Instagram</li>
        <li>Telegram</li>
      </ul>
    </div>

  </footer>
</template>