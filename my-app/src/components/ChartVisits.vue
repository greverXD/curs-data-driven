<script setup lang="ts">
import { Line } from 'vue-chartjs'
import { computed } from "vue"
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

const props = defineProps<{
  data: { date: string; count: number }[]
}>()

const chartData = computed(() => ({
  labels: props.data.map(i => i.date),
  datasets: [
    {
      label: 'Visits',
      data: props.data.map(i => i.count)
    }
  ]
}))
</script>

<template>
  <Line :data="chartData" />
</template>