<template>
  <div class="flex">
    <aside class="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 class="text-xl mb-6">Admin</h2>

      <router-link to="/admin">Dashboard</router-link>
    </aside>

    <main class="flex-1 p-6">
      <router-view />
    </main>
  </div>
</template>