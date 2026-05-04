<script setup lang="ts">
const props = defineProps<{
  category: string
  sort: 'asc' | 'desc' | null
}>()

const emit = defineEmits(['update:category', 'update:sort'])
const onSortChange = (e: Event) => {
  const target = e.target as HTMLSelectElement
  emit('update:sort', target.value)
}
const categories = [
  'Все',
  'Кроссовки',
  'Футболки',
  'Куртки',
  'Штаны',
  'Худи',
  'Аксессуары',
  'Шорты',
  'Рубашки'
]
</script>

<template>
  <aside class="sticky top-10 h-fit border p-4 rounded shadow">

    <h2 class="font-bold mb-4">Фильтр</h2>

    <!-- категории -->
    <div class="flex flex-col gap-2 mb-6">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="emit('update:category', cat)"
        class="text-left px-3 py-2 rounded transition"
        :class="category === cat 
          ? 'bg-black text-white' 
          : 'hover:bg-gray-100'"
      >
        {{ cat }}
      </button>
    </div>

    <!-- сортировка -->
    <div>
      <h3 class="mb-2">Цена</h3>

        <select
        class="w-full border px-2 py-1 rounded"
        @change="onSortChange"
        :value="sort || ''"
      >
        <option value="">Без сортировки</option>
        <option value="asc">По возрастанию</option>
        <option value="desc">По убыванию</option>
      </select>
    </div>

  </aside>
</template>