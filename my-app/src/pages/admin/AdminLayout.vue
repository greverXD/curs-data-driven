<script setup lang="ts">
import AdminSidebar from '../../widgets/admin/AdminSidebar.vue';
import AdminTopbar from '../../widgets/admin/AdminTopbar.vue';
</script>

<template>
  <div class="min-h-screen bg-[#f5f7fb] flex">
    <!-- Sidebar -->
    <AdminSidebar />

    <!-- Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <AdminTopbar />

      <main class="p-6 overflow-y-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>