<script setup lang="ts">
const props = defineProps<{
  product: any
  selectedVariant: any
  selectedSize: string | null
}>()

defineEmits(['selectSize'])
</script>

<template>

  <div class="w-full min-w-0 max-w-full">

    <!-- TITLE -->
    <h1 class="text-3xl md:text-4xl font-bold">
      {{ product.title }}
    </h1>

    <!-- PRICE -->
    <div
  class="
    flex
    items-center
    gap-3
    mt-3
    flex-wrap
  "
>

  <!-- NEW PRICE -->
  <p class="text-3xl font-bold">
    {{
      Math.round(
        selectedVariant?.price *
        (
          1 -
          (product.discountPercent || 0) / 100
        )
      )
    }} $
  </p>

  <!-- OLD PRICE -->
  <p
    v-if="product.discountPercent"
    class="
      text-xl
      text-gray-400
      line-through
    "
  >
    {{ selectedVariant?.price }} $
  </p>

  <!-- DISCOUNT BADGE -->
  <div
    v-if="product.discountPercent"
    class="
      bg-red-500
      text-white
      text-sm
      px-3 py-1
      rounded-full
      font-semibold
    "
  >
    -{{ product.discountPercent }}%
  </div>

</div>

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