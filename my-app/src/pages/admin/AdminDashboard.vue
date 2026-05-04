<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getDashboard } from '../../api/admin'
import ChartVisits from '../../components/ChartVisits.vue'

const data = ref<any>(null)

onMounted(async () => {
  const res = await getDashboard()
  data.value = res.data
})
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Admin Dashboard</h1>

    <ChartVisits v-if="data" :data="data.visits" />
  </div>
</template>