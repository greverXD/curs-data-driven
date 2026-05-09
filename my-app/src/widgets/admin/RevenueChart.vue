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
      tension: 0.4
    }
  ]
}))
</script>

<template>
  <Line :data="chartData" />
</template>