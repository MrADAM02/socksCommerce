<template>
  <nav
    class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-100 dark:border-gray-800"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="shrink-0">
          <NuxtLink to="/" class="flex items-center gap-2.5 group">
            <div
              class="w-8 h-8 bg-linear-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all"
            >
              S
            </div>
            <span
              class="text-base font-extrabold tracking-wide text-gray-900 dark:text-white uppercase"
            >
              Sharabat
            </span>
          </NuxtLink>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-1">
          <NuxtLink
            to="/"
            class="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            active-class="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
            exact
            >Home</NuxtLink
          >
          <NuxtLink
            to="/products"
            class="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            active-class="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
            >Products</NuxtLink
          >
          <NuxtLink
            to="/about"
            class="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            active-class="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
            >About</NuxtLink
          >
          <NuxtLink
            to="/contact"
            class="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            active-class="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
            >Contact</NuxtLink
          >
        </div>

        <!-- Right Actions -->
        <div class="flex items-center gap-1">
          <!-- Sign In -->
          <NuxtLink
            to="/login"
            class="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Sign in
          </NuxtLink>

          <!-- Divider -->
          <div
            class="hidden sm:block w-px h-5 bg-gray-200 dark:bg-gray-700 mx-1"
          ></div>

          <!-- Theme Toggle -->
          <ThemeToggle />

          <!-- Cart -->
          <button
            @click="cartStore.openDrawer()"
            class="relative inline-flex items-center justify-center w-9 h-9 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Open cart"
          >
            <span class="text-xl">🛒</span>
            <span
              v-if="cartItemCount > 0"
              class="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold rounded-full min-w-4.5 h-4.5 flex items-center justify-center px-1 leading-none"
            >
              {{ cartItemCount }}
            </span>
          </button>

          <!-- Mobile Menu Toggle -->
          <button
            class="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            @click="isMenuOpen = !isMenuOpen"
            :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
          >
            <span class="text-xl">{{ isMenuOpen ? "✕" : "☰" }}</span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition name="slide">
        <div
          v-if="isMenuOpen"
          class="md:hidden border-t border-gray-100 dark:border-gray-800 py-3 space-y-1 pb-4"
        >
          <NuxtLink
            to="/"
            class="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            @click="isMenuOpen = false"
            exact-active-class="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
            >🏠 Home</NuxtLink
          >
          <NuxtLink
            to="/products"
            class="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            @click="isMenuOpen = false"
            active-class="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
            >🧦 Products</NuxtLink
          >
          <NuxtLink
            to="/about"
            class="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            @click="isMenuOpen = false"
            >📖 About</NuxtLink
          >
          <NuxtLink
            to="/contact"
            class="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            @click="isMenuOpen = false"
            >✉️ Contact</NuxtLink
          >
          <div class="pt-2 border-t border-gray-100 dark:border-gray-800 mt-2">
            <NuxtLink
              to="/login"
              class="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              @click="isMenuOpen = false"
              >🔐 Sign in</NuxtLink
            >
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);
const cartStore = useCartStore();
const cartItemCount = computed(() =>
  cartStore.items.reduce((total, item) => total + item.quantity, 0),
);
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
