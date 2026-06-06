<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative bg-linear-to-r from-blue-600 to-blue-800 text-white py-20"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
              Premium Socks Collection
            </h1>
            <p class="text-xl text-blue-100 mb-8">
              Discover the perfect socks for every occasion. Comfort meets
              style.
            </p>
            <div class="flex gap-4">
              <NuxtLink
                to="/products"
                class="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition"
              >
                Shop Now
              </NuxtLink>
              <button
                class="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:bg-opacity-10 transition"
              >
                Learn More
              </button>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="text-9xl">🧦</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p class="text-xl text-gray-600">
            Handpicked favorites from our collection
          </p>
        </div>

        <div
          v-if="isLoading"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div v-for="i in 6" :key="i" class="animate-pulse">
            <div class="bg-gray-200 aspect-square rounded-lg mb-4"></div>
            <div class="h-4 bg-gray-200 rounded mb-2"></div>
            <div class="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>

        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product"
            @add-to-cart="addToCart(product)"
          />
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="bg-gray-100 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <NuxtLink
            to="/products?category=casual"
            class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center group"
          >
            <div class="text-5xl mb-3">👔</div>
            <h3 class="font-bold text-lg group-hover:text-blue-600">Casual</h3>
          </NuxtLink>
          <NuxtLink
            to="/products?category=sports"
            class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center group"
          >
            <div class="text-5xl mb-3">⚽</div>
            <h3 class="font-bold text-lg group-hover:text-blue-600">Sports</h3>
          </NuxtLink>
          <NuxtLink
            to="/products?category=thermal"
            class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center group"
          >
            <div class="text-5xl mb-3">🔥</div>
            <h3 class="font-bold text-lg group-hover:text-blue-600">Thermal</h3>
          </NuxtLink>
          <NuxtLink
            to="/products?category=eco-friendly"
            class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center group"
          >
            <div class="text-5xl mb-3">♻️</div>
            <h3 class="font-bold text-lg group-hover:text-blue-600">Eco</h3>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Add to Cart Modal -->
    <div
      v-if="selectedProduct"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <div class="bg-white rounded-lg max-w-md w-full p-6">
        <h3 class="text-2xl font-bold mb-4">{{ selectedProduct.name }}</h3>

        <!-- Size Selection -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2"
            >Size</label
          >
          <div class="grid grid-cols-4 gap-2">
            <button
              v-for="size in selectedProduct.sizes"
              :key="size"
              @click="selectedSize = size"
              :class="{
                'bg-blue-600 text-white': selectedSize === size,
                'bg-gray-200 text-gray-700 hover:bg-gray-300':
                  selectedSize !== size,
              }"
              class="py-2 rounded font-medium transition"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <!-- Color Selection -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2"
            >Color</label
          >
          <div class="grid grid-cols-4 gap-2">
            <button
              v-for="color in selectedProduct.colors"
              :key="color"
              @click="selectedColor = color"
              :class="{
                'ring-2 ring-blue-600': selectedColor === color,
                'ring-1 ring-gray-300': selectedColor !== color,
              }"
              class="py-2 rounded text-sm transition"
            >
              {{ color }}
            </button>
          </div>
        </div>

        <!-- Quantity -->
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2"
            >Quantity</label
          >
          <div class="flex items-center gap-3">
            <button
              @click="quantity = Math.max(1, quantity - 1)"
              class="px-3 py-1 bg-gray-200 rounded"
            >
              -
            </button>
            <input
              v-model.number="quantity"
              type="number"
              min="1"
              class="w-12 text-center border rounded"
            />
            <button @click="quantity++" class="px-3 py-1 bg-gray-200 rounded">
              +
            </button>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex gap-3">
          <button
            @click="confirmAddToCart"
            class="flex-1 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
          <button
            @click="selectedProduct = null"
            class="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types";
import { useCustomToast } from "../../composables/useToast";

useSeoMeta({
  title: "SocksCommerce — Premium Socks",
  description:
    "Discover premium socks for every occasion. Comfort meets style at SocksCommerce.",
});

const isLoading = ref(true);
const featuredProducts = ref<Product[]>([]);
const selectedProduct = ref<Product | null>(null);
const selectedSize = ref("");
const selectedColor = ref("");
const quantity = ref(1);

const cartStore = useCartStore();
const { show } = useCustomToast();

onMounted(async () => {
  try {
    const data = await $fetch<Product[]>("/api/products");
    featuredProducts.value = data.slice(0, 6);
  } catch (error) {
    console.error("Failed to fetch products:", error);
  } finally {
    isLoading.value = false;
  }
});

function addToCart(product: Product) {
  selectedProduct.value = product;
  selectedSize.value = product.sizes[0] || "";
  selectedColor.value = product.colors[0] || "";
  quantity.value = 1;
}

function confirmAddToCart() {
  if (!selectedProduct.value || !selectedSize.value || !selectedColor.value) {
    return;
  }
  cartStore.addToCart(
    selectedProduct.value,
    quantity.value,
    selectedSize.value,
    selectedColor.value,
  );
  selectedProduct.value = null;
  show("Added to cart", { type: "success" });
}
</script>
