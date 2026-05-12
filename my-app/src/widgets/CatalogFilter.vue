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
  <aside
    class="
      lg:sticky
      lg:top-10
      h-fit
      border
      p-4
      rounded
      shadow-sm
      bg-white
    "
  >

    <h2 class="font-bold text-xl mb-4">
      Фильтр
    </h2>

    <!-- CATEGORIES -->
    <div class="flex flex-wrap lg:flex-col gap-2 mb-6">

      <button
        v-for="cat in categories"
        :key="cat"
        @click="emit('update:category', cat)"
        class="
          text-sm md:text-base
          px-3 py-2
          rounded
          transition
          border
        "
        :class="
          category === cat
            ? 'bg-black text-white border-black'
            : 'hover:bg-gray-100 border-gray-200'
        "
      >
        {{ cat }}
      </button>

    </div>

    <!-- SORT -->
    <div>

      <h3 class="mb-2 font-medium">
        Цена
      </h3>

      <select
        class="w-full border px-3 py-2 rounded"
        @change="onSortChange"
        :value="sort || ''"
      >
        <option value="">
          Без сортировки
        </option>

        <option value="asc">
          По возрастанию
        </option>

        <option value="desc">
          По убыванию
        </option>
      </select>

    </div>

  </aside>
</template>