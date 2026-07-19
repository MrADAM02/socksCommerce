<template>
  <NuxtLink :to="`/products/${product.slug}`" class="block group">
    <div
      class="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none hover:-translate-y-0.5 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300"
    >
      <!-- Image -->
      <div
        class="relative w-full aspect-square bg-gray-50 dark:bg-gray-900 overflow-hidden"
      >
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        <!-- Out of stock overlay -->
        <div
          v-if="!product.inStock"
          class="absolute inset-0 bg-gray-900/60 backdrop-blur-[2px] flex items-center justify-center"
        >
          <span
            class="text-white font-semibold text-sm bg-gray-900/80 px-3.5 py-1.5 rounded-full border border-white/10"
          >
            Out of Stock
          </span>
        </div>

        <!-- Category badge -->
        <span
          class="absolute top-3 left-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-700 dark:text-gray-200 text-[11px] font-semibold px-2.5 py-1 rounded-full capitalize tracking-wide shadow-sm"
        >
          {{ product.category }}
        </span>

        <!-- Wishlist button -->
        <button
          @click.prevent="$emit('toggle-wishlist')"
          class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex items-center justify-center transition shadow-sm"
          :class="
            isWishlisted
              ? 'text-red-500 opacity-100'
              : 'text-gray-500 dark:text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100'
          "
          :aria-label="isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'"
        >
          <span class="text-sm">{{ isWishlisted ? "♥" : "♡" }}</span>
        </button>
      </div>

      <!-- Content -->
      <div class="p-4">
        <!-- Rating -->
        <div class="flex items-center gap-1 mb-1.5">
          <span class="text-yellow-400 text-xs">★</span>
          <span
            class="text-xs font-semibold text-gray-600 dark:text-gray-400"
            >{{ product.rating }}</span
          >
          <span class="text-xs text-gray-300 dark:text-gray-600">·</span>
          <span class="text-xs text-gray-400 dark:text-gray-500"
            >{{ product.colors.length }} colors</span
          >
        </div>

        <!-- Name -->
        <h3
          class="font-semibold text-gray-900 dark:text-white leading-snug line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1"
        >
          {{ product.name }}
        </h3>

        <!-- Description -->
        <p
          class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mb-3"
        >
          {{ product.description }}
        </p>

        <!-- Footer -->
        <div
          class="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700"
        >
          <span class="text-xl font-bold text-gray-900 dark:text-white">
            ${{ product.price.toFixed(2) }}
          </span>

          <button
            v-if="product.inStock"
            class="inline-flex items-center gap-1.5 bg-blue-600 text-white px-3.5 py-2 rounded-xl hover:bg-blue-700 active:scale-95 transition text-xs font-semibold shadow-sm"
            @click.prevent="$emit('add-to-cart')"
          >
            <span class="text-sm leading-none">+</span> Add
          </button>
          <button
            v-else
            disabled
            class="bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 px-3.5 py-2 rounded-xl text-xs font-semibold cursor-not-allowed"
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

withDefaults(
  defineProps<{
    product: Product;
    isWishlisted?: boolean;
  }>(),
  { isWishlisted: false },
);

defineEmits<{
  "add-to-cart": [];
  "toggle-wishlist": [];
}>();
</script>
