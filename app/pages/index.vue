<template>
  <div class="dark:bg-gray-900">
    <!-- ── Hero ──────────────────────────────────────────────────────────── -->
    <section
      class="relative overflow-hidden bg-gray-950 text-white pb-20 md:pb-24"
    >
      <!-- Gradient mesh background -->
      <div class="absolute inset-0">
        <div
          class="absolute -top-32 -left-24 w-lg h-128 bg-blue-600/40 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute top-1/3 -right-24 w-md h-112 bg-indigo-500/30 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute inset-0 opacity-[0.07]"
          :style="patternStyle"
        ></div>
      </div>

      <div
        class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28"
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
              class="text-5xl md:text-6xl font-extrabold leading-[1.05] mb-5 tracking-tight"
            >
              Step into
              <span
                class="bg-linear-to-r from-blue-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent"
                >Sharabat</span
              >
            </h1>
            <p class="text-lg text-blue-100/80 mb-8 max-w-md leading-relaxed">
              Comfort-first socks for every step — from everyday casuals to
              performance sport and luxury dress styles.
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
            <div class="mt-10 flex flex-wrap gap-6 text-blue-100/70 text-sm">
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
                class="grid grid-cols-2 gap-3 w-64 md:w-80 p-3 bg-white/5 rounded-3xl border border-white/15 backdrop-blur-sm"
              >
                <div
                  v-for="tile in showcaseTiles"
                  :key="tile.emoji"
                  class="aspect-square rounded-2xl flex items-center justify-center text-4xl md:text-5xl"
                  :class="tile.bg"
                >
                  {{ tile.emoji }}
                </div>
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

      <!-- Floating stats card, overlapping the section below -->
      <div
        class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20"
      >
        <div
          class="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 bg-white/10 border border-white/15 rounded-3xl backdrop-blur-lg shadow-2xl shadow-black/20"
        >
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="py-6 px-6 text-center"
          >
            <p class="text-2xl font-bold text-white">{{ stat.value }}</p>
            <p class="text-sm text-blue-100/70 mt-0.5">{{ stat.label }}</p>
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
            class="group bg-white dark:bg-gray-800 rounded-2xl p-5 text-center border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <div
              class="w-12 h-12 mx-auto mb-3 rounded-xl bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200"
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
            :is-wishlisted="wishlistStore.isWishlisted(product.id)"
            @add-to-cart="addToCart(product)"
            @toggle-wishlist="toggleWishlist(product)"
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
            class="flex flex-col items-start gap-3 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
              :class="prop.badge"
            >
              {{ prop.emoji }}
            </div>
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

    <!-- ── Newsletter CTA ───────────────────────────────────────────────────── -->
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 px-6 py-14 sm:px-14 text-center"
        >
          <div
            class="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          ></div>
          <div
            class="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          ></div>
          <div class="relative max-w-xl mx-auto">
            <h2 class="text-2xl sm:text-3xl font-bold text-white mb-2">
              Get 15% off your first order
            </h2>
            <p class="text-blue-100/80 text-sm sm:text-base mb-7">
              Join the Sharabat list for new drops, restocks, and
              subscriber-only deals.
            </p>
            <form
              @submit.prevent="subscribeToNewsletter"
              class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                v-model="newsletterEmail"
                type="email"
                required
                placeholder="you@example.com"
                class="flex-1 px-4 py-3 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-white/60"
              />
              <button
                type="submit"
                class="px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black transition text-sm shrink-0"
              >
                Subscribe
              </button>
            </form>
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
  title: "Sharabat — Premium Socks",
  description:
    "Discover premium socks for every occasion. Comfort meets style at Sharabat.",
});

const patternStyle = {
  backgroundImage:
    "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
  backgroundSize: "28px 28px",
};

const isLoading = ref(true);
const featuredProducts = ref<Product[]>([]);
const selectedProduct = ref<Product | null>(null);
const selectedSize = ref("");
const selectedColor = ref("");
const quantity = ref(1);

const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const { show } = useCustomToast();

const newsletterEmail = ref("");

const stats = [
  { value: "20+", label: "Sock styles" },
  { value: "4.8★", label: "Avg. rating" },
  { value: "6", label: "Categories" },
  { value: "Free", label: "Returns" },
];

const showcaseTiles = [
  { emoji: "🧦", bg: "bg-blue-500/20" },
  { emoji: "👟", bg: "bg-cyan-400/20" },
  { emoji: "⚡", bg: "bg-indigo-400/20" },
  { emoji: "✨", bg: "bg-blue-300/20" },
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
    badge: "bg-blue-50 dark:bg-blue-900/30",
  },
  {
    emoji: "↩️",
    title: "30-day hassle-free returns",
    description:
      "Changed your mind? Return any unworn pair within 30 days, no questions asked.",
    badge: "bg-amber-50 dark:bg-amber-900/30",
  },
  {
    emoji: "🌿",
    title: "Sustainable materials",
    description:
      "Our eco-friendly range uses organic and recycled fibres certified by GOTS.",
    badge: "bg-emerald-50 dark:bg-emerald-900/30",
  },
  {
    emoji: "⭐",
    title: "Comfort guarantee",
    description:
      "If your socks aren't the most comfortable you've worn, we'll make it right.",
    badge: "bg-violet-50 dark:bg-violet-900/30",
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

function toggleWishlist(product: Product) {
  const added = wishlistStore.toggleWishlist(product.id);
  show(added ? "Added to wishlist" : "Removed from wishlist", {
    type: "success",
  });
}

function subscribeToNewsletter() {
  show("Subscribed! Check your inbox for your 15% off code.", {
    type: "success",
  });
  newsletterEmail.value = "";
}
</script>
