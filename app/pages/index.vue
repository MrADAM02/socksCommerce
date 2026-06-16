<template>
  <div class="dark:bg-gray-900">
    <!-- ── Hero ──────────────────────────────────────────────────────────── -->
    <section
      class="relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-700 to-blue-900 text-white"
    >
      <!-- Subtle pattern overlay -->
      <div
        class="absolute inset-0 opacity-10"
        style="
          background-image: radial-gradient(
            circle at 1px 1px,
            white 1px,
            transparent 0
          );
          background-size: 28px 28px;
        "
      ></div>

      <div
        class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
      >
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <!-- Eyebrow -->
            <div
              class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-blue-100 mb-6"
            >
              <span
                class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
              ></span>
              Free shipping on orders over $50
            </div>

            <h1
              class="text-5xl md:text-6xl font-extrabold leading-tight mb-5 tracking-tight"
            >
              Premium Socks<br />
              <span class="text-blue-200">for Every Step</span>
            </h1>
            <p class="text-lg text-blue-100/90 mb-8 max-w-md leading-relaxed">
              Discover our curated collection of comfort-first socks — from
              everyday casuals to performance sport and luxury dress styles.
            </p>

            <div class="flex flex-wrap gap-3">
              <NuxtLink
                to="/products"
                class="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition shadow-lg shadow-blue-900/20 text-sm"
              >
                Shop the Collection
                <span class="text-base">→</span>
              </NuxtLink>
              <NuxtLink
                to="/products?category=premium"
                class="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition text-sm backdrop-blur-sm"
              >
                View Premium Line
              </NuxtLink>
            </div>

            <!-- Trust badges -->
            <div class="mt-10 flex flex-wrap gap-6 text-blue-100/80 text-sm">
              <span class="flex items-center gap-1.5"
                >✓ <span>30-day returns</span></span
              >
              <span class="flex items-center gap-1.5"
                >✓ <span>Premium materials</span></span
              >
              <span class="flex items-center gap-1.5"
                >✓ <span>Eco-friendly options</span></span
              >
            </div>
          </div>

          <!-- Hero visual -->
          <div class="flex justify-center md:justify-end">
            <div class="relative">
              <div
                class="w-64 h-64 md:w-80 md:h-80 bg-white/10 rounded-3xl flex items-center justify-center border border-white/20 backdrop-blur-sm"
              >
                <span
                  class="text-[120px] md:text-[150px] select-none drop-shadow-xl"
                  >🧦</span
                >
              </div>
              <!-- Floating stat badges -->
              <div
                class="absolute -top-4 -left-6 bg-white text-gray-900 rounded-2xl px-4 py-2.5 shadow-xl text-sm font-semibold"
              >
                ⭐ 4.8 avg. rating
              </div>
              <div
                class="absolute -bottom-4 -right-4 bg-white text-gray-900 rounded-2xl px-4 py-2.5 shadow-xl text-sm font-semibold"
              >
                🧦 20+ styles
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Stats bar ──────────────────────────────────────────────────────── -->
    <section
      class="border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 dark:divide-gray-800"
        >
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="py-5 px-6 text-center"
          >
            <p class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ stat.value }}
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Categories ─────────────────────────────────────────────────────── -->
    <section class="py-16 bg-gray-50 dark:bg-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-end justify-between mb-8">
          <div>
            <p
              class="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-1"
            >
              Browse
            </p>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
              Shop by Category
            </h2>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <NuxtLink
            v-for="cat in categories"
            :key="cat.slug"
            :to="`/products?category=${cat.slug}`"
            class="group bg-white dark:bg-gray-800 rounded-2xl p-5 text-center border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-200"
          >
            <div
              class="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200"
            >
              {{ cat.emoji }}
            </div>
            <p
              class="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            >
              {{ cat.name }}
            </p>
            <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
              {{ cat.count }} styles
            </p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ── Featured Products ──────────────────────────────────────────────── -->
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-end justify-between mb-10">
          <div>
            <p
              class="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-1"
            >
              Curated picks
            </p>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
              Featured Products
            </h2>
          </div>
          <NuxtLink
            to="/products"
            class="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
          >
            View all <span>→</span>
          </NuxtLink>
        </div>

        <!-- Skeleton -->
        <div
          v-if="isLoading"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div v-for="i in 6" :key="i" class="animate-pulse">
            <div
              class="bg-gray-100 dark:bg-gray-800 aspect-square rounded-2xl mb-4"
            ></div>
            <div class="h-4 bg-gray-100 dark:bg-gray-800 rounded mb-2"></div>
            <div class="h-4 bg-gray-100 dark:bg-gray-800 rounded w-3/4"></div>
          </div>
        </div>

        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product"
            @add-to-cart="addToCart(product)"
          />
        </div>

        <div class="mt-10 text-center sm:hidden">
          <NuxtLink
            to="/products"
            class="inline-flex items-center gap-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition text-sm"
            >View all products →</NuxtLink
          >
        </div>
      </div>
    </section>

    <!-- ── Value Props ─────────────────────────────────────────────────────── -->
    <section
      class="py-16 bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="prop in valueProps"
            :key="prop.title"
            class="flex flex-col items-start gap-3 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700"
          >
            <div class="text-3xl">{{ prop.emoji }}</div>
            <div>
              <p class="font-semibold text-gray-900 dark:text-white text-sm">
                {{ prop.title }}
              </p>
              <p
                class="text-gray-500 dark:text-gray-400 text-sm mt-1 leading-relaxed"
              >
                {{ prop.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Add to Cart Modal ──────────────────────────────────────────────── -->
    <div
      v-if="selectedProduct"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-6 shadow-2xl"
      >
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-5">
          {{ selectedProduct.name }}
        </h3>

        <div class="mb-4">
          <label
            class="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2"
            >Size</label
          >
          <div class="grid grid-cols-5 gap-2">
            <button
              v-for="size in selectedProduct.sizes"
              :key="size"
              @click="selectedSize = size"
              :class="
                selectedSize === size
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-600 hover:border-blue-400'
              "
              class="py-2 rounded-lg font-medium text-sm border transition"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <div class="mb-4">
          <label
            class="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2"
            >Color</label
          >
          <div class="grid grid-cols-4 gap-2">
            <button
              v-for="color in selectedProduct.colors"
              :key="color"
              @click="selectedColor = color"
              :class="
                selectedColor === color
                  ? 'ring-2 ring-blue-600 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                  : 'ring-1 ring-gray-200 dark:ring-gray-600 text-gray-600 dark:text-gray-300 hover:ring-blue-300'
              "
              class="py-2 rounded-lg text-sm transition"
            >
              {{ color }}
            </button>
          </div>
        </div>

        <div class="mb-6">
          <label
            class="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2"
            >Quantity</label
          >
          <div class="flex items-center gap-3">
            <button
              @click="quantity = Math.max(1, quantity - 1)"
              class="w-9 h-9 bg-gray-100 dark:bg-gray-700 rounded-lg font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              −
            </button>
            <span
              class="w-8 text-center font-semibold text-gray-900 dark:text-white"
              >{{ quantity }}</span
            >
            <button
              @click="quantity++"
              class="w-9 h-9 bg-gray-100 dark:bg-gray-700 rounded-lg font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              +
            </button>
          </div>
        </div>

        <div class="flex gap-3">
          <button
            @click="confirmAddToCart"
            class="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition text-sm"
          >
            Add to Cart
          </button>
          <button
            @click="selectedProduct = null"
            class="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 py-3 rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-gray-600 transition text-sm"
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

const stats = [
  { value: "20+", label: "Sock styles" },
  { value: "4.8★", label: "Avg. rating" },
  { value: "6", label: "Categories" },
  { value: "Free", label: "Returns" },
];

const categories = [
  { slug: "casual", name: "Casual", emoji: "👟", count: 8 },
  { slug: "sports", name: "Sports", emoji: "⚽", count: 2 },
  { slug: "thermal", name: "Thermal", emoji: "🔥", count: 2 },
  { slug: "eco-friendly", name: "Eco", emoji: "♻️", count: 3 },
  { slug: "outdoor", name: "Outdoor", emoji: "🥾", count: 1 },
  { slug: "premium", name: "Premium", emoji: "✨", count: 3 },
];

const valueProps = [
  {
    emoji: "🚚",
    title: "Free shipping over $50",
    description:
      "No minimum fuss — orders over $50 ship free anywhere in the country.",
  },
  {
    emoji: "↩️",
    title: "30-day hassle-free returns",
    description:
      "Changed your mind? Return any unworn pair within 30 days, no questions asked.",
  },
  {
    emoji: "🌿",
    title: "Sustainable materials",
    description:
      "Our eco-friendly range uses organic and recycled fibres certified by GOTS.",
  },
  {
    emoji: "⭐",
    title: "Comfort guarantee",
    description:
      "If your socks aren't the most comfortable you've worn, we'll make it right.",
  },
];

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
  if (!selectedProduct.value || !selectedSize.value || !selectedColor.value)
    return;
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
