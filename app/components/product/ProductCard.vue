<template>
  <NuxtLink :to="`/products/${product.slug}`" class="block group">
    <div
      class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <!-- Image -->
      <div class="relative w-full aspect-square bg-gray-100 overflow-hidden">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div
          v-if="!product.inStock"
          class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <span class="text-white font-bold text-lg">Out of Stock</span>
        </div>
      </div>

      <!-- Content -->
      <div class="p-4">
        <h3
          class="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition"
        >
          {{ product.name }}
        </h3>

        <p class="text-sm text-gray-500 mt-1 line-clamp-2">
          {{ product.description }}
        </p>

        <!-- Rating -->
        <div class="flex items-center gap-1 mt-2">
          <span class="text-yellow-400">★</span>
          <span class="text-sm font-medium text-gray-700">{{
            product.rating
          }}</span>
        </div>

        <!-- Footer -->
        <div class="flex items-center justify-between mt-4">
          <span class="text-2xl font-bold text-blue-600"
            >${{ product.price.toFixed(2) }}</span
          >
          <button
            v-if="product.inStock"
            class="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition text-sm"
            @click.prevent="$emit('add-to-cart')"
          >
            Add
          </button>
          <button
            v-else
            disabled
            class="bg-gray-300 text-gray-500 px-3 py-2 rounded-lg text-sm cursor-not-allowed"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Product } from "~/types";

defineProps<{
  product: Product;
}>();

defineEmits<{
  "add-to-cart": [];
}>();
</script>
