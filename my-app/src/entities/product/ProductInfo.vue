<script setup lang="ts">
const props = defineProps<{
  product: any
  selectedVariant: any
  selectedSize: string | null
}>()

defineEmits(['selectSize'])
</script>

<template>

  <div class="max-w-[500px]">

    <!-- TITLE -->
    <h1 class="text-3xl md:text-4xl font-bold">
      {{ product.title }}
    </h1>

    <!-- PRICE -->
    <p class="text-2xl font-medium mt-3">
      {{ selectedVariant?.price }} $
    </p>

    <!-- DESCRIPTION -->
    <p class="mt-6 text-gray-600 leading-7">
      {{ product.description }}
    </p>

    <!-- SIZES -->
    <div class="mt-8">

      <p class="mb-3 font-medium">
        Размер
      </p>

      <div class="flex gap-3 flex-wrap">

        <button
          v-for="v in product.variants"
          :key="v.id"
          @click="$emit('selectSize', v.size)"
          class="
            border
            px-4 py-2
            rounded
            transition-all
            duration-200
          "
          :class="
            selectedSize === v.size
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-gray-300 hover:border-black'
          "
        >
          {{ v.size }}
        </button>

      </div>

    </div>

    <!-- STOCK -->
    <div class="mt-6 text-sm text-gray-500">

      <span v-if="selectedVariant?.stock > 0">
        В наличии: {{ selectedVariant.stock }}
      </span>

      <span v-else class="text-red-500">
        Нет в наличии
      </span>

    </div>

  </div>

</template>