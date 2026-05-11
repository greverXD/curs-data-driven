<script setup lang="ts">
import { onMounted, ref } from 'vue'
import api from "../../api/axios"

const orders = ref<any[]>([])

const currentPage = ref(1)

const totalPages = ref(1)

const status = ref('')

const loadOrders = async () => {
  const query =
    `?page=${currentPage.value}&limit=5` +
    (status.value
      ? `&status=${status.value}`
      : '')

  const res = await api.get(
    `/orders/admin/all${query}`
  )

  orders.value = res.data.orders

  totalPages.value = res.data.totalPages
}
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++

    loadOrders()
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--

    loadOrders()
  }
}

onMounted(loadOrders)
</script>

<template>
  <div>

    <!-- Header -->
    <div class="flex justify-between items-center mb-6">

      <h1 class="text-3xl font-bold">
        Заказы
      </h1>

      <!-- Filter -->
      <select
        v-model="status"
        @change="loadOrders"
        class="border rounded-xl px-4 py-2"
      >
        <option value="">
          Все
        </option>

        <option value="PENDING">
          PENDING
        </option>

        <option value="PAID">
          PAID
        </option>

        <option value="DELIVERED">
          DELIVERED
        </option>
      </select>

    </div>

    <!-- Table -->
    <div class="bg-white rounded-2xl border overflow-hidden">

      <table class="w-full">

        <thead class="bg-gray-50 border-b">
          <tr>

            <th class="text-left p-4">
              ID
            </th>

            <th class="text-left p-4">
              User
            </th>

            <th class="text-left p-4">
              Total
            </th>

            <th class="text-left p-4">
              Status
            </th>

            <th class="text-left p-4">
              Date
            </th>

          </tr>
        </thead>

        <tbody>

          <tr
            v-for="order in orders"
            :key="order.id"
            class="border-b align-top"
          >
            <td class="p-4">
              {{ order.id.slice(0, 8) }}
            </td>

            <td class="p-4">
              {{ order.user?.email }}
            </td>

            <td class="p-4">
              ₽ {{ order.total }}
            </td>

            <td class="p-4">
              {{ order.status }}
            </td>

            <td class="p-4">
              {{
                new Date(order.createdAt)
                  .toLocaleDateString()
              }}
            </td>
          </tr>

        </tbody>

      </table>

    </div>

    <!-- Details -->
    <div
      v-for="order in orders"
      :key="order.id + '-details'"
      class="bg-white mt-6 rounded-2xl p-6 border"
    >

      <h2 class="text-2xl font-bold mb-4">
        Детали заказа
      </h2>

      <p>
        <b>Имя:</b>
        {{ order.customerName }}
      </p>

      <p>
        <b>Телефон:</b>
        {{ order.phone }}
      </p>

      <p>
        <b>Адрес:</b>
        {{ order.address }}
      </p>

      <p>
        <b>Оплата:</b>
        {{ order.paymentMethod }}
      </p>

      <p>
        <b>Комментарий:</b>
        {{ order.comment || '—' }}
      </p>

      <div class="mt-4">

        <h3 class="font-bold mb-2">
          Товары
        </h3>

        <div
          v-for="item in order.items"
          :key="item.id"
          class="border rounded-xl p-3 mb-2"
        >
          <p>
            {{ item.product.title }}
          </p>

          <p>
            Размер:
            {{ item.variant?.size }}
          </p>

          <p>
            Количество:
            {{ item.quantity }}
          </p>
        </div>

      </div>

    </div>

  </div>
  <div class="flex justify-center items-center gap-4 mt-8">

  <button
    @click="prevPage"
    class="px-4 py-2 border rounded-xl"
  >
    ← Prev
  </button>

  <span class="font-semibold">
    {{ currentPage }} / {{ totalPages }}
  </span>

  <button
    @click="nextPage"
    class="px-4 py-2 border rounded-xl"
  >
    Next →
  </button>

</div>
</template>