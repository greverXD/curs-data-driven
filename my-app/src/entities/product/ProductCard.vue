<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import { useFavoritesStore }
from '../../store/favorites'

const router = useRouter()

const favoritesStore =
  useFavoritesStore()

const props = defineProps<{
  id: string
  title: string
  price: number
  image: string
  discountPercent?: number
}>()

const goToProduct = () => {
  router.push(`/product/${props.id}`)
}

const liked = computed(() =>
  favoritesStore.isLiked(props.id)
)

const toggleLike = () => {
  favoritesStore.toggleFavorite({
    id: props.id,
    title: props.title,
    price: props.price,
    image: props.image,
    discountPercent:
      props.discountPercent
  })
}

const discountedPrice =
  (props.discountPercent || 0) > 0
    ? Math.round(
        props.price *
          (
            1 -
            (props.discountPercent || 0) /
              100
          )
      )
    : props.price
</script>

<template>

  <div class="cursor-pointer">

    <div
      @click="goToProduct"
      class="
        border
        p-3
        rounded-2xl
        hover:shadow-xl
        transition-all
        duration-300
        bg-white
      "
    >

      <!-- IMAGE -->
      <div class="relative overflow-hidden rounded-xl">

        <!-- DISCOUNT -->
        <div
          v-if="
            (props.discountPercent || 0) > 0
          "
          class="
            absolute
            top-2
            left-2
            bg-red-500
            text-white
            text-sm
            px-3
            py-1
            rounded-full
            font-semibold
            z-20
            shadow-lg
          "
        >
          -{{ props.discountPercent }}%
        </div>

        <!-- IMAGE -->
        <img
          :src="props.image"
          class="
            h-48
            w-full
            object-cover
            rounded-xl
            transition-transform
            duration-500
            hover:scale-105
          "
        />

        <!-- LIKE -->
        <button
          @click.stop="toggleLike"
          class="
            absolute
            top-2
            right-2
            w-10
            h-10
            rounded-full
            backdrop-blur-md
            bg-black/30
            flex
            items-center
            justify-center
            text-xl
            transition-all
            duration-300
            transform
            z-20
          "
          :class="
            liked
              ? 'text-red-500 scale-110'
              : 'text-white hover:text-red-300'
          "
        >
          ♥
        </button>

      </div>

      <!-- TITLE -->
      <h3
        class="
          mt-4
          font-semibold
          text-lg
          line-clamp-1
        "
      >
        {{ props.title }}
      </h3>

      <!-- PRICE -->
      <div
        class="
          flex
          items-center
          gap-2
          mt-2
          flex-wrap
        "
      >

        <!-- NEW PRICE -->
        <p
          class="
            font-bold
            text-xl
          "
        >
          ${{ discountedPrice }}
        </p>

        <!-- OLD PRICE -->
        <p
          v-if="
            (props.discountPercent || 0) > 0
          "
          class="
            text-gray-400
            line-through
            text-sm
          "
        >
          ${{ props.price }}
        </p>

      </div>

    </div>

  </div>

</template>