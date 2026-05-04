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
    <h2 class="text-xl font-bold mb-4">Адреса</h2>

    <div v-if="loading">Загрузка...</div>

    <div v-else-if="addresses.length === 0" class="text-gray-400">
      Адресов нет
    </div>

    <div v-else>
      <div v-for="addr in addresses" :key="addr.id">
        {{ addr.city }} {{ addr.street }}
      </div>
    </div>
  </div>
</template>