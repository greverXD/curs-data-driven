<script setup lang="ts">
import { ref } from 'vue'

const period = ref('7d')
const region = ref('all')

const resetFilters = () => {
  period.value = '7d'
  region.value = 'all'
}
</script>

<template>
  <header class="h-[72px] bg-white border-b border-gray-200 px-6 flex items-center justify-between">
    <!-- Left -->
    <div>
      <h2 class="text-2xl font-bold">Dashboard</h2>
    </div>

    <!-- Filters -->
    <div class="flex items-center gap-3">
      <select
        v-model="period"
        class="border rounded-xl px-4 py-2 bg-white"
      >
        <option value="7d">7 дней</option>
        <option value="30d">30 дней</option>
        <option value="90d">90 дней</option>
      </select>

      <select
        v-model="region"
        class="border rounded-xl px-4 py-2 bg-white"
      >
        <option value="all">Все регионы</option>
        <option value="minsk">Минск</option>
        <option value="brest">Брест</option>
        <option value="vitebsk">Витебск</option>
        <option value="gomel">Гомель</option>
        <option value="grodno">Гродно</option>
        <option value="mogilev">Могилёв</option>
      </select>

      <button
        @click="resetFilters"
        class="bg-black text-white px-4 py-2 rounded-xl"
      >
        Сбросить
      </button>
    </div>
  </header>
</template>