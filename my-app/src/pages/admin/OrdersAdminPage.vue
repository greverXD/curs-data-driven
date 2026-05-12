<!-- OrdersAdminPage.vue -->

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

    <!-- HEADER -->
    <div
      class="
        flex
        flex-col
        md:flex-row
        md:items-center
        md:justify-between
        gap-4
        mb-6
      "
    >

      <h1 class="text-3xl font-bold">
        Заказы
      </h1>

      <select
        v-model="status"
        @change="loadOrders"
        class="
          border
          rounded-xl
          px-4 py-2
          w-full md:w-[220px]
        "
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

    <!-- MOBILE CARDS -->
    <div class="space-y-4 md:hidden">

      <div
        v-for="order in orders"
        :key="order.id"
        class="
          bg-white
          rounded-2xl
          border
          p-4
        "
      >

        <div class="space-y-2">

          <p class="font-bold break-all">
            {{ order.user?.email }}
          </p>

          <p>
            ID:
            {{ order.id.slice(0, 8) }}
          </p>

          <p>
            ₽ {{ order.total }}
          </p>

          <p>
            {{ order.status }}
          </p>

          <p class="text-gray-500 text-sm">
            {{
              new Date(order.createdAt)
                .toLocaleDateString()
            }}
          </p>

        </div>

      </div>

    </div>

    <!-- DESKTOP TABLE -->
    <div
      class="
        hidden
        md:block
        bg-white
        rounded-2xl
        border
        overflow-x-auto
      "
    >

      <table class="w-full min-w-[700px]">

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
            class="border-b"
          >

            <td class="p-4">
              {{ order.id.slice(0, 8) }}
            </td>

            <td class="p-4 break-all">
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

    <!-- DETAILS -->
    <div
      v-for="order in orders"
      :key="order.id + '-details'"
      class="
        bg-white
        mt-6
        rounded-2xl
        p-4 md:p-6
        border
      "
    >

      <h2 class="text-2xl font-bold mb-4">
        Детали заказа
      </h2>

      <div class="space-y-2 break-all">

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

      </div>

      <!-- ITEMS -->
      <div class="mt-6">

        <h3 class="font-bold mb-3">
          Товары
        </h3>

        <div class="space-y-3">

          <div
            v-for="item in order.items"
            :key="item.id"
            class="
              border
              rounded-xl
              p-3
            "
          >

            <p class="font-semibold">
              {{ item.product.title }}
            </p>

            <p class="text-sm text-gray-500">
              Размер:
              {{ item.variant?.size }}
            </p>

            <p class="text-sm text-gray-500">
              Количество:
              {{ item.quantity }}
            </p>

          </div>

        </div>

      </div>

    </div>

    <!-- PAGINATION -->
    <div
      class="
        flex
        justify-center
        items-center
        gap-4
        mt-8
        flex-wrap
      "
    >

      <button
        @click="prevPage"
        class="
          px-4 py-2
          border
          rounded-xl
        "
      >
        ← Prev
      </button>

      <span class="font-semibold">
        {{ currentPage }} / {{ totalPages }}
      </span>

      <button
        @click="nextPage"
        class="
          px-4 py-2
          border
          rounded-xl
        "
      >
        Next →
      </button>

    </div>

  </div>

</template>