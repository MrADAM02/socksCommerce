<template>
  <!-- Loading -->
  <div
    v-if="isLoading"
    class="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900"
  >
    <div class="text-center">
      <div class="inline-block animate-spin text-4xl mb-4">⏳</div>
      <p class="text-gray-500 dark:text-gray-400 text-sm">Loading product…</p>
    </div>
  </div>

  <!-- Product page -->
  <div v-else-if="product" class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Breadcrumb -->
      <nav
        class="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 mb-8"
      >
        <NuxtLink
          to="/"
          class="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >Home</NuxtLink
        >
        <span>/</span>
        <NuxtLink
          to="/products"
          class="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >Products</NuxtLink
        >
        <span>/</span>
        <span
          class="text-gray-900 dark:text-white font-medium truncate max-w-50"
          >{{ product.name }}</span
        >
      </nav>

      <div class="grid md:grid-cols-2 gap-10 lg:gap-16">
        <!-- ── Image Gallery ── -->
        <div class="space-y-3">
          <!-- Main image -->
          <div
            class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 relative"
          >
            <img
              :src="currentImage"
              :alt="product.name"
              class="w-full aspect-square object-cover"
            />
            <div
              v-if="!product.inStock"
              class="absolute top-4 left-4 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg"
            >
              Out of Stock
            </div>
          </div>

          <!-- Thumbnails -->
          <div class="grid grid-cols-4 gap-2">
            <button
              v-for="(image, idx) in allImages"
              :key="idx"
              @click="currentImage = image"
              :class="
                currentImage === image
                  ? 'ring-2 ring-blue-600 ring-offset-2'
                  : 'ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-500'
              "
              class="rounded-xl overflow-hidden transition bg-white dark:bg-gray-800"
            >
              <img
                :src="image"
                :alt="`View ${idx + 1}`"
                class="w-full aspect-square object-cover"
              />
            </button>
          </div>
        </div>

        <!-- ── Product Details ── -->
        <div>
          <!-- Category pill -->
          <span
            class="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full mb-3"
          >
            {{ product.category }}
          </span>

          <h1
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-3"
          >
            {{ product.name }}
          </h1>

          <!-- Rating + stock -->
          <div class="flex items-center gap-3 mb-5">
            <div class="flex items-center gap-1">
              <span
                v-for="i in 5"
                :key="i"
                class="text-base"
                :class="
                  i <= Math.round(product.rating)
                    ? 'text-yellow-400'
                    : 'text-gray-200 dark:text-gray-600'
                "
                >★</span
              >
              <span
                class="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1"
                >{{ product.rating }}</span
              >
            </div>
            <span class="text-gray-300 dark:text-gray-600">|</span>
            <span
              v-if="product.inStock"
              class="flex items-center gap-1.5 text-sm font-medium text-green-600 dark:text-green-400"
            >
              <span
                class="w-2 h-2 rounded-full bg-green-500 inline-block"
              ></span>
              In Stock
            </span>
            <span
              v-else
              class="flex items-center gap-1.5 text-sm font-medium text-red-500"
            >
              <span class="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
              Out of Stock
            </span>
          </div>

          <!-- Price -->
          <div class="flex items-baseline gap-2 mb-4">
            <span class="text-4xl font-extrabold text-gray-900 dark:text-white"
              >${{ product.price.toFixed(2) }}</span
            >
          </div>

          <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            {{ product.description }}
          </p>

          <hr class="border-gray-100 dark:border-gray-800 mb-6" />

          <!-- Size -->
          <div class="mb-5">
            <div class="flex items-center justify-between mb-2.5">
              <label class="text-sm font-semibold text-gray-900 dark:text-white"
                >Size</label
              >
              <span
                class="text-xs text-blue-600 dark:text-blue-400 cursor-pointer hover:underline"
                >Size guide →</span
              >
            </div>
            <div class="grid grid-cols-5 gap-2">
              <button
                v-for="size in product.sizes"
                :key="size"
                @click="if (product.inStock) selectedSize = size;"
                :disabled="!product.inStock"
                :class="
                  selectedSize === size
                    ? 'bg-blue-600 text-white border-blue-600'
                    : product.inStock
                      ? 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:border-blue-400'
                      : 'bg-gray-50 dark:bg-gray-800 text-gray-300 dark:text-gray-600 border-gray-100 dark:border-gray-800 cursor-not-allowed'
                "
                class="py-2.5 rounded-xl text-sm font-semibold border transition"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <!-- Color -->
          <div class="mb-6">
            <label
              class="block text-sm font-semibold text-gray-900 dark:text-white mb-2.5"
            >
              Color —
              <span class="font-normal text-gray-500 dark:text-gray-400">{{
                selectedColor
              }}</span>
            </label>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="color in product.colors"
                :key="color"
                @click="if (product.inStock) selectedColor = color;"
                :disabled="!product.inStock"
                :class="
                  selectedColor === color
                    ? 'ring-2 ring-blue-600 ring-offset-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700'
                    : product.inStock
                      ? 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-300'
                      : 'bg-gray-50 dark:bg-gray-800 text-gray-300 dark:text-gray-600 border-gray-100 cursor-not-allowed'
                "
                class="px-3 py-1.5 rounded-xl text-sm border transition"
              >
                {{ color }}
              </button>
            </div>
          </div>

          <!-- Quantity -->
          <div class="mb-7">
            <label
              class="block text-sm font-semibold text-gray-900 dark:text-white mb-2.5"
              >Quantity</label
            >
            <div
              class="inline-flex items-center border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800"
            >
              <button
                @click="quantity = Math.max(1, quantity - 1)"
                :disabled="!product.inStock"
                class="w-11 h-11 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition disabled:opacity-40 disabled:cursor-not-allowed text-lg font-light"
              >
                −
              </button>
              <span
                class="w-12 text-center text-sm font-bold text-gray-900 dark:text-white border-x border-gray-200 dark:border-gray-700 h-11 flex items-center justify-center"
                >{{ quantity }}</span
              >
              <button
                @click="quantity++"
                :disabled="!product.inStock"
                class="w-11 h-11 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition disabled:opacity-40 disabled:cursor-not-allowed text-lg font-light"
              >
                +
              </button>
            </div>
          </div>

          <!-- CTA buttons -->
          <div class="flex gap-3 mb-8">
            <button
              @click="addToCart"
              :disabled="!product.inStock || !selectedSize || !selectedColor"
              class="flex-1 py-4 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 active:scale-[0.99] transition disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed disabled:text-gray-500"
            >
              {{ product.inStock ? "Add to Cart" : "Out of Stock" }}
            </button>
            <button
              class="w-14 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-xl text-gray-500 dark:text-gray-400 hover:border-red-300 hover:text-red-500 transition text-xl"
              aria-label="Save to wishlist"
            >
              ♡
            </button>
          </div>

          <!-- Delivery info strip -->
          <div class="grid grid-cols-3 gap-3 mb-6">
            <div class="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div class="text-xl mb-1">🚚</div>
              <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Free over $50
              </p>
            </div>
            <div class="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div class="text-xl mb-1">↩️</div>
              <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">
                30-day returns
              </p>
            </div>
            <div class="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div class="text-xl mb-1">🌿</div>
              <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Eco packaging
              </p>
            </div>
          </div>

          <!-- Product meta accordion-style list -->
          <div
            class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden text-sm"
          >
            <div class="flex items-center justify-between px-5 py-3.5">
              <span class="text-gray-500 dark:text-gray-400 font-medium"
                >Category</span
              >
              <span
                class="text-gray-900 dark:text-white font-semibold capitalize"
                >{{ product.category }}</span
              >
            </div>
            <div class="flex items-center justify-between px-5 py-3.5">
              <span class="text-gray-500 dark:text-gray-400 font-medium"
                >Available sizes</span
              >
              <span class="text-gray-900 dark:text-white font-semibold">{{
                product.sizes.join(", ")
              }}</span>
            </div>
            <div class="flex items-center justify-between px-5 py-3.5">
              <span class="text-gray-500 dark:text-gray-400 font-medium"
                >Available colors</span
              >
              <span class="text-gray-900 dark:text-white font-semibold"
                >{{ product.colors.length }} options</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- ── Related Products ── -->
      <div v-if="relatedProducts.length > 0" class="mt-20">
        <div class="flex items-end justify-between mb-6">
          <div>
            <p
              class="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-1"
            >
              You may also like
            </p>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
              Related Products
            </h2>
          </div>
          <NuxtLink
            :to="`/products?category=${product.category}`"
            class="text-sm font-semibold text-blue-600 hover:text-blue-700 transition hidden sm:block"
            >See all {{ product.category }} →</NuxtLink
          >
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <ProductCard
            v-for="related in relatedProducts"
            :key="related.id"
            :product="related"
            @add-to-cart="addRelatedToCart(related)"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- Not found -->
  <div
    v-else
    class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"
  >
    <div class="text-center">
      <p class="text-6xl mb-4">🧦</p>
      <p class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Product not found
      </p>
      <p class="text-gray-500 dark:text-gray-400 mb-6">
        This sock seems to have gone missing.
      </p>
      <NuxtLink
        to="/products"
        class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition text-sm"
        >← Back to Products</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types";
import { products } from "../../../data/products";
import { useCustomToast } from "../../../composables/useToast";

const route = useRoute();
const cartStore = useCartStore();
const { show } = useCustomToast();

// ── State — declared first so computeds below can safely reference them ───────
const isLoading = ref(true);
const product = ref<Product | null>(null);
const currentImage = ref("");
const selectedSize = ref("");
const selectedColor = ref("");
const quantity = ref(1);

// ── Computeds — after refs ────────────────────────────────────────────────────
const allImages = computed(() => {
  if (!product.value) return [];
  const extras = product.value.images ?? [];
  return [
    product.value.image,
    ...extras.filter((i) => i !== product.value!.image),
  ];
});

const relatedProducts = computed(() => {
  if (!product.value) return [];
  return products
    .filter(
      (p) =>
        p.category === product.value?.category && p.id !== product.value?.id,
    )
    .slice(0, 4);
});

const title = computed(() =>
  product.value
    ? `${product.value.name} — Sharabat`
    : "Product — Sharabat",
);
const description = computed(() =>
  product.value ? product.value.description : "Product details",
);
useSeoMeta({ title, description });

// ── Data fetching ─────────────────────────────────────────────────────────────
async function loadProduct(slug: string) {
  isLoading.value = true;
  product.value = null;
  currentImage.value = "";
  selectedSize.value = "";
  selectedColor.value = "";
  quantity.value = 1;

  try {
    const data = await $fetch<Product>(`/api/products/${slug}`);
    product.value = data;
    currentImage.value = data.image;
    selectedSize.value = data.sizes[0] || "";
    selectedColor.value = data.colors[0] || "";
  } catch (error) {
    console.error("Failed to fetch product:", error);
    product.value = null;
  } finally {
    isLoading.value = false;
  }
}

// Load on mount
onMounted(() => loadProduct(route.params.slug as string));

// Re-load when navigating between product pages (Nuxt reuses the component)
watch(
  () => route.params.slug,
  (newSlug) => {
    if (newSlug) loadProduct(newSlug as string);
  },
);

// ── Actions ───────────────────────────────────────────────────────────────────
function addToCart() {
  if (!product.value || !selectedSize.value || !selectedColor.value) return;
  cartStore.addToCart(
    product.value,
    quantity.value,
    selectedSize.value,
    selectedColor.value,
  );
  quantity.value = 1;
  show("Added to cart", { type: "success" });
}

function addRelatedToCart(related: Product) {
  cartStore.addToCart(
    related,
    1,
    related.sizes[0] || "",
    related.colors[0] || "",
  );
  show("Added to cart", { type: "success" });
}
</script>
