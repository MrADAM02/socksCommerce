<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4"
  >
    <div class="text-center max-w-md">
      <div class="text-6xl mb-4">🧦</div>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        {{ error?.statusCode === 404 ? "Page not found" : "Something went wrong" }}
      </h1>
      <p class="text-gray-600 dark:text-gray-400 mb-8">
        {{
          error?.statusCode === 404
            ? "The page you're looking for doesn't exist or may have moved."
            : "An unexpected error occurred. Please try again."
        }}
      </p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          @click="handleClear"
          class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold"
        >
          Back to Home
        </button>
        <NuxtLink
          to="/products"
          class="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition font-bold"
        >
          Browse Products
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

function handleClear() {
  clearError({ redirect: "/" });
}
</script>
