<script setup lang="ts">
import { ref, watch } from 'vue'

import AdminSidebar from '../../widgets/admin/AdminSidebar.vue'
import AdminTopbar from '../../widgets/admin/AdminTopbar.vue'

const isSidebarOpen = ref(false)

watch(isSidebarOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : 'auto'
})
</script>

<template>

  <div class="min-h-screen bg-[#f5f7fb] flex">

    <!-- DESKTOP SIDEBAR -->
    <div class="hidden lg:block">
      <AdminSidebar />
    </div>

    <!-- MOBILE OVERLAY -->
    <transition name="fade">

      <div
        v-if="isSidebarOpen"
        class="fixed inset-0 bg-black/50 z-[90] lg:hidden"
        @click="isSidebarOpen = false"
      />

    </transition>

    <!-- MOBILE SIDEBAR -->
    <transition name="slide">

      <div
        v-if="isSidebarOpen"
        class="fixed left-0 top-0 z-[100] lg:hidden"
      >
        <AdminSidebar @close="isSidebarOpen = false" />
      </div>

    </transition>

    <!-- CONTENT -->
    <div class="flex-1 flex flex-col overflow-hidden">

      <AdminTopbar
        @openSidebar="isSidebarOpen = true"
      />

      <main
        class="
          flex-1
          p-4 md:p-6
          overflow-y-auto
        "
      >
        <router-view />
      </main>

    </div>

  </div>

</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>