<script setup lang="ts">
import { useCartStore } from '../store/cart';

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

    <!-- Items -->
    <div class="p-4 flex-1 overflow-y-auto">
      <div v-if="cart.items.length === 0">
        Корзина пуста
      </div>

      <div
        v-for="item in cart.items"
        :key="item.id"
        class="flex justify-between mb-4"
      >
        <div>
          <p>{{ item.title }}</p>
          <p class="text-sm text-gray-500">{{ item.price }} ₽</p>
        </div>

        <button @click="cart.removeFromCart(item.id)">✕</button>
      </div>
    </div>

    <!-- Footer -->
    <div class="p-4 border-t">
      <p class="mb-2">Итого: {{ cart.totalPrice }} ₽</p>

      <button class="w-full bg-black text-white p-3">
        Оформить заказ
      </button>
    </div>
    
  </div>
</template>