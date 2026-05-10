<script setup lang="ts">
import { onMounted, ref } from 'vue'
import api from '../../api/axios'

const data = ref<any>(null)

onMounted(async () => {
  const res = await api.get(
    '/analytics/dashboard'
  )

  data.value = res.data
})
</script>

<template>
  <div v-if="data">

    <div class="grid grid-cols-3 gap-6">

      <!-- Browsers -->
      <div class="bg-white p-6 rounded-2xl border">

        <h2 class="text-2xl font-bold mb-4">
          Browsers
        </h2>

        <div
          v-for="(value, key) in data.geography.browsers"
          :key="key"
          class="flex justify-between mb-2"
        >
          <span>{{ key }}</span>
          <span>{{ value }}</span>
        </div>

      </div>

      <!-- Devices -->
      <div class="bg-white p-6 rounded-2xl border">

        <h2 class="text-2xl font-bold mb-4">
          Devices
        </h2>

        <div
          v-for="(value, key) in data.geography.devices"
          :key="key"
          class="flex justify-between mb-2"
        >
          <span>{{ key }}</span>
          <span>{{ value }}</span>
        </div>

      </div>

      <!-- OS -->
      <div class="bg-white p-6 rounded-2xl border">

        <h2 class="text-2xl font-bold mb-4">
          Operating Systems
        </h2>

        <div
          v-for="(value, key) in data.geography.os"
          :key="key"
          class="flex justify-between mb-2"
        >
          <span>{{ key }}</span>
          <span>{{ value }}</span>
        </div>

      </div>

    </div>

  </div>
</template>