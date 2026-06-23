<template>
  <button
    @click="toggleTheme()"
    class="relative inline-flex items-center justify-center w-9 h-9 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    :title="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    :aria-label="
      theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
    "
  >
    <Transition name="theme-icon" mode="out-in">
      <span v-if="theme === 'dark'" key="moon" class="text-base">🌙</span>
      <span v-else key="sun" class="text-base">☀️</span>
    </Transition>
  </button>
</template>

<script setup lang="ts">
import { useTheme } from "~~/composables/useTheme";

const { theme, toggleTheme } = useTheme();
</script>

<style scoped>
.theme-icon-enter-active,
.theme-icon-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}
.theme-icon-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.6);
}
.theme-icon-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.6);
}
</style>
