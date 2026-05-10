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

    <div class="grid grid-cols-2 gap-6">

      <!-- Latest users -->
      <div class="bg-white rounded-2xl p-6 border">

        <h2 class="text-2xl font-bold mb-4">
          Последние регистрации
        </h2>

        <div
          v-for="user in data.customers.latestUsers"
          :key="user.id"
          class="border-b py-3"
        >
          <p class="font-semibold">
            {{ user.email }}
          </p>
          <p class="text-sm text-gray-500">
  IP: {{ user.ipAddress }}
</p>
          <p class="text-sm text-gray-500">
            {{
              new Date(user.createdAt)
                .toLocaleDateString()
            }}
          </p>
        </div>

      </div>

      <!-- Active users -->
      <div class="bg-white rounded-2xl p-6 border">

        <h2 class="text-2xl font-bold mb-4">
          Самые активные
        </h2>

        <div
          v-for="user in data.customers.activeUsers"
          :key="user.email"
          class="border-b py-3"
        >
          <p class="font-semibold">
            {{ user.email }}
          </p>
        
          <p>
            Activity:
            {{ user.activity }}
          </p>

          <p>
            Orders:
            {{ user.orders }}
          </p>

          <p>
            Total spent:
            ₽ {{ user.totalSpent }}
          </p>
        </div>

      </div>

      <!-- Browser analytics -->
      <div class="bg-white rounded-2xl p-6 border">

        <h2 class="text-2xl font-bold mb-4">
          Browser Analytics
        </h2>

        <p class="mb-2">
          Chrome users:
          {{ data.customers.analytics.chromeUsers }}
        </p>

        <p>
          Mobile users:
          {{ data.customers.analytics.mobileUsers }}
        </p>

      </div>

    </div>

  </div>
</template>