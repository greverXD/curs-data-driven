<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from '../../api/axios'

type Address = {
  id: string
  city: string
  street: string
}

const addresses = ref<Address[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await axios.get('/users/addresses')
    addresses.value = res.data
  } finally {
    loading.value = false
  }
})
</script>

<template>

  <div>

    <div class="flex items-center justify-between mb-6">

      <div>

        <h2 class="text-2xl font-bold">
          Адреса
        </h2>

        <p class="text-gray-500 mt-1">
          Сохраненные адреса доставки
        </p>

      </div>

      <button
        class="
          bg-black
          text-white
          px-4 py-2
          rounded-xl
          text-sm
          hover:bg-gray-800
          transition
        "
      >
        Добавить
      </button>

    </div>

    <!-- LOADING -->
    <div
      v-if="loading"
      class="text-gray-400"
    >
      Загрузка...
    </div>

    <!-- EMPTY -->
    <div
      v-else-if="addresses.length === 0"
      class="
        border
        rounded-2xl
        p-10
        text-center
        text-gray-400
      "
    >
      Адресов пока нет
    </div>

    <!-- LIST -->
    <div
      v-else
      class="grid gap-4"
    >

      <div
        v-for="addr in addresses"
        :key="addr.id"
        class="
          border
          rounded-2xl
          p-5
          flex
          items-center
          justify-between
          gap-4
        "
      >

        <div>

          <p class="font-semibold">
            {{ addr.city }}
          </p>

          <p class="text-gray-500 text-sm mt-1">
            {{ addr.street }}
          </p>

        </div>

        <button
          class="
            text-red-500
            text-sm
          "
        >
          Удалить
        </button>

      </div>

    </div>

  </div>

</template>