<!-- RevenueChart.vue -->

<script setup lang="ts">
import { computed } from 'vue'

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js'

import { Line } from 'vue-chartjs'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
)

const props = defineProps<{
  data: {
    date: string
    revenue: number
  }[]
}>()

const chartData = computed(() => ({
  labels: props.data.map(i => i.date),

  datasets: [
    {
      label: 'Выручка',

      data: props.data.map(i => i.revenue),

      tension: 0.4,

      fill: true
    }
  ]
}))

const chartOptions = {
  responsive: true,

  maintainAspectRatio: false
}
</script>

<template>

  <div class="h-[300px] md:h-[350px]">
    <Line
      :data="chartData"
      :options="chartOptions"
    />
  </div>

</template>