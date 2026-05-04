<script setup lang="ts">
import { ref } from 'vue'
import Header from '../widgets/Header.vue'
import Footer from '../widgets/Footer.vue'
import CatalogFilters from '../widgets/CatalogFilter.vue'
import CatalogList from '../widgets/CatalogList.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const selectedCategory = ref(
  (route.query.category as string) || 'Все'
)

const sortOrder = ref<'asc' | 'desc' | null>(null)
</script>

<template>
  <Header />

  <main class="px-10 py-10">
    <h1 class="text-3xl font-bold mb-6">Каталог</h1>

    <div class="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-10">
      
      <CatalogFilters
        v-model:category="selectedCategory"
        v-model:sort="sortOrder"
      />

      <CatalogList
        :category="selectedCategory"
        :sort="sortOrder"
      />

    </div>
  </main>

  <Footer />
</template>