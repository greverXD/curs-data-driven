<script setup lang="ts">
import { useFavoritesStore }
from '../../store/favorites'

import ProductCard
from '../../entities/product/ProductCard.vue'

const favoritesStore =
  useFavoritesStore()
</script>

<template>

  <div>

    <div
      v-if="
        !favoritesStore.favorites.length
      "
      class="
        text-gray-500
        text-center
        py-10
      "
    >
      Нет избранных товаров
    </div>

    <div
      v-else
      class="
        grid
        grid-cols-2
        md:grid-cols-3
        gap-4
      "
    >

      <ProductCard
        v-for="
          product
          in favoritesStore.favorites
        "
        :key="product.id"
        v-bind="product"
      />

    </div>

  </div>

</template>