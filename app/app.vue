<script setup lang="ts">
import ToastContainer from './components/ui/ToastContainer.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors">
    <LayoutNavbar />
    <CartDrawer />
    <NuxtPage />
    <ToastContainer />
  </div>
</template>
