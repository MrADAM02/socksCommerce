<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white">
          Wishlist
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mt-2">
          Products you've saved for later
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div v-if="wishlistStore.items.length === 0" class="text-center py-12">
        <div class="text-5xl mb-4">♡</div>
        <p class="text-2xl text-gray-600 dark:text-gray-400 mb-4">
          Your wishlist is empty
        </p>
        <NuxtLink
          to="/products"
          class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold"
        >
          Browse Products
        </NuxtLink>
      </div>

      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <ProductCard
          v-for="product in wishlistStore.items"
          :key="product.id"
          :product="product"
          is-wishlisted
          @add-to-cart="addToCart(product)"
          @toggle-wishlist="toggleWishlist(product)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types";
import { useCustomToast } from "../../composables/useToast";

useSeoMeta({
  title: "Wishlist — Sharabat",
  description: "Products you've saved for later at Sharabat.",
});

const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const { show } = useCustomToast();

function addToCart(product: Product) {
  cartStore.addToCart(
    product,
    1,
    product.sizes[0] || "",
    product.colors[0] || "",
  );
  show("Added to cart", { type: "success" });
}

function toggleWishlist(product: Product) {
  wishlistStore.toggleWishlist(product.id);
  show("Removed from wishlist", { type: "success" });
}
</script>
