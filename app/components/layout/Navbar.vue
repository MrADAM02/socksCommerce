<template>
  <nav class="sticky top-0 z-40 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="shrink-0">
          <NuxtLink
            to="/"
            class="flex items-center gap-2 text-xl font-bold text-gray-900"
          >
            <div
              class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white"
            >
              🧦
            </div>
            <span>SocksCommerce</span>
          </NuxtLink>
        </div>

        <!-- Menu -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink to="/" class="text-gray-600 hover:text-gray-900 transition"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/products"
            class="text-gray-600 hover:text-gray-900 transition"
            >Products</NuxtLink
          >
          <NuxtLink to="/" class="text-gray-600 hover:text-gray-900 transition"
            >About</NuxtLink
          >
          <NuxtLink to="/" class="text-gray-600 hover:text-gray-900 transition"
            >Contact</NuxtLink
          >
        </div>

        <!-- Right Actions -->
        <div class="flex items-center gap-4">
          <!-- Auth Button -->
          <NuxtLink
            to="/login"
            class="hidden sm:inline-block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition"
          >
            Sign In
          </NuxtLink>

          <!-- Cart Icon with Badge -->
          <button
            @click="cartStore.openDrawer()"
            class="relative inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition"
          >
            <span class="text-2xl">🛒</span>
            <span
              v-if="cartItemCount > 0"
              class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
            >
              {{ cartItemCount }}
            </span>
          </button>

          <!-- Theme Toggle -->
          <button
            @click="toggleTheme()"
            class="inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            :title="theme === 'dark' ? 'Switch to light' : 'Switch to dark'"
          >
            <span class="text-xl">{{ theme === 'dark' ? '🌙' : '☀️' }}</span>
          </button>

          <!-- Mobile Menu Toggle -->
          <button
            class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition"
            @click="isMenuOpen = !isMenuOpen"
          >
            <span class="text-2xl">{{ isMenuOpen ? "✕" : "☰" }}</span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMenuOpen"
        class="md:hidden border-t border-gray-200 py-4 space-y-3"
      >
        <NuxtLink
          to="/"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
          @click="isMenuOpen = false"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/products"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
          @click="isMenuOpen = false"
        >
          Products
        </NuxtLink>
        <NuxtLink
          to="/"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
          @click="isMenuOpen = false"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
          @click="isMenuOpen = false"
        >
          Contact
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useTheme } from "../../../composables/useTheme";

const isMenuOpen = ref(false);

const cartStore = useCartStore();
const cartItemCount = computed(() => {
  return cartStore.items.reduce((total, item) => total + item.quantity, 0);
});

const { theme, toggleTheme } = useTheme()
</script>
