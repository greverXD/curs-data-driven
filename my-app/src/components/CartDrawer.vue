<script setup lang="ts">
import { useCartStore } from '../store/cart';
import { ref } from 'vue'
import api from '../api/axios'
const customerName = ref('')
const phone = ref('')
const address = ref('')
const comment = ref('')
const paymentMethod = ref('CARD')

const success = ref(false)
const loading = ref(false)
const checkout = async () => {
  try {
    loading.value = true

    await api.post('/orders', {
      customerName: customerName.value,
      phone: phone.value,
      address: address.value,
      comment: comment.value,
      paymentMethod: paymentMethod.value,

      items: cart.items.map(item => ({
        variantId: item.id,
        quantity: item.quantity
      }))
    })

    success.value = true

    cart.clearCart()

  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}
const cart = useCartStore()
</script>

<template>
  <!-- Overlay -->
  <div
    v-if="cart.isOpen"
    class="fixed inset-0 bg-black/50 z-40"
    @click="cart.closeCart()"
  />

  <!-- Drawer -->
  <div
    class="fixed top-0 right-0 h-full w-[400px] bg-white z-50 shadow-lg transition-transform duration-300"
    :class="cart.isOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <!-- Header -->
    <div class="flex justify-between items-center p-4 border-b">
      <h2 class="text-xl font-bold">Корзина</h2>
      <button @click="cart.closeCart()">✕</button>
    </div>

    <div class="p-4 flex-1 overflow-y-auto">
  <!-- ❌ пусто -->
  <div v-if="cart.items.length === 0" class="text-center text-gray-400">
    Корзина пуста
  </div>

  <!-- ✅ товары -->
  <div
    v-for="item in cart.items"
    :key="item.id"
    class="flex gap-4 mb-4 border-b pb-4"
  >
    <!-- 📸 Картинка -->
    <img
      :src="item.image"
      class="w-20 h-20 object-cover rounded"
    />

    <!-- 📦 Инфа -->
    <div class="flex-1">
      <p class="font-semibold">{{ item.title }}</p>

      <p class="text-sm text-gray-500">
        {{ item.price }} ₽ × {{ item.quantity }}
      </p>

      <!-- ➕➖ количество -->
      <div class="flex items-center gap-2 mt-2">
        <button
          @click="item.quantity--"
          class="px-2 border rounded"
        >
          -
        </button>

        <span>{{ item.quantity }}</span>

        <button
          @click="item.quantity++"
          class="px-2 border rounded"
        >
          +
        </button>
      </div>
    </div>

    <!-- ❤️ лайк -->
    <button @click="cart.toggleFavorite(item.id)" class="text-xl">
      <span v-if="item.isFavorite">❤️</span>
      <span v-else>🤍</span>
    </button>

    <!-- ❌ удалить -->
    <button @click="cart.removeFromCart(item.id)">✕</button>
  </div>
</div>

    <!-- Footer -->
    <div class="p-4 border-t">
      <p class="mb-2">Итого: {{ cart.totalPrice }} ₽</p>
      <div class="space-y-3 mb-4">

  <input
    v-model="customerName"
    placeholder="Ваше имя"
    class="w-full border p-3 rounded"
  />

  <input
    v-model="phone"
    placeholder="Телефон"
    class="w-full border p-3 rounded"
  />

  <input
    v-model="address"
    placeholder="Адрес доставки"
    class="w-full border p-3 rounded"
  />

  <textarea
    v-model="comment"
    placeholder="Комментарий"
    class="w-full border p-3 rounded"
  />

  <select
    v-model="paymentMethod"
    class="w-full border p-3 rounded"
  >
    <option value="CARD">
      💳 Карта
    </option>

    <option value="CASH">
      💵 Наличными
    </option>
  </select>

</div>
<button
  @click="checkout"
  :disabled="loading"
  class="w-full bg-black text-white p-3 rounded"
>
  <span v-if="loading">
    Оформление...
  </span>

  <span v-else>
    Оформить заказ
  </span>
</button>

<p
  v-if="success"
  class="text-green-600 text-center mt-3"
>
  Заказ успешно оформлен
</p>
    </div>
    
  </div>
</template>