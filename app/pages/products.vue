<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 class="text-4xl font-bold text-gray-900">Products</h1>
        <p class="text-gray-600 mt-2">
          Browse our complete collection of premium socks
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Filters Sidebar -->
        <div class="md:col-span-1">
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h2 class="text-lg font-bold mb-6">Filters</h2>

            <!-- Category Filter -->
            <div class="mb-6">
              <h3 class="font-semibold text-gray-900 mb-3">Category</h3>
              <div class="space-y-2">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    v-model="selectedCategory"
                    type="radio"
                    value=""
                    class="rounded border-gray-300"
                  />
                  <span class="text-gray-700">All</span>
                </label>
                <label
                  v-for="cat in categories"
                  :key="cat"
                  class="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    v-model="selectedCategory"
                    type="radio"
                    :value="cat"
                    class="rounded border-gray-300"
                  />
                  <span class="text-gray-700 capitalize">{{ cat }}</span>
                </label>
              </div>
            </div>

            <!-- Price Filter — dual bound with validation -->
            <div class="mb-6">
              <h3 class="font-semibold text-gray-900 mb-3">Price Range</h3>
              <div
                class="flex items-center justify-between text-sm font-medium text-gray-700 mb-3"
              >
                <span>${{ minPrice }}</span>
                <span>–</span>
                <span>${{ maxPrice }}</span>
              </div>
              <div class="space-y-3">
                <div>
                  <label class="text-xs text-gray-500 mb-1 block"
                    >Min price</label
                  >
                  <input
                    v-model.number="minPrice"
                    type="range"
                    min="0"
                    :max="maxPrice - 1"
                    class="w-full accent-blue-600"
                  />
                </div>
                <div>
                  <label class="text-xs text-gray-500 mb-1 block"
                    >Max price</label
                  >
                  <input
                    v-model.number="maxPrice"
                    type="range"
                    :min="minPrice + 1"
                    max="100"
                    class="w-full accent-blue-600"
                  />
                </div>
              </div>
            </div>

            <!-- Size Filter -->
            <div class="mb-6">
              <h3 class="font-semibold text-gray-900 mb-3">Size</h3>
              <div class="space-y-2">
                <label
                  v-for="size in sizes"
                  :key="size"
                  class="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    v-model="selectedSizes"
                    type="checkbox"
                    :value="size"
                    class="rounded border-gray-300"
                  />
                  <span class="text-gray-700">{{ size }}</span>
                </label>
              </div>
            </div>

            <!-- Color Filter -->
            <div class="mb-6">
              <h3 class="font-semibold text-gray-900 mb-3">Color</h3>
              <div class="space-y-2">
                <label
                  v-for="color in colors"
                  :key="color"
                  class="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    v-model="selectedColors"
                    type="checkbox"
                    :value="color"
                    class="rounded border-gray-300"
                  />
                  <span class="text-gray-700">{{ color }}</span>
                </label>
              </div>
            </div>

            <!-- Reset Button -->
            <button
              @click="resetFilters"
              class="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium"
            >
              Reset Filters
            </button>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="md:col-span-3">
          <!-- Toolbar: sort + product count -->
          <div class="flex items-center justify-between mb-4 gap-4 flex-wrap">
            <!-- Product count -->
            <p class="text-sm text-gray-600">
              <template v-if="isLoading">Loading products…</template>
              <template v-else>
                Showing
                <span class="font-semibold text-gray-900">{{
                  filteredProducts.length
                }}</span>
                of
                <span class="font-semibold text-gray-900">{{
                  allProducts.length
                }}</span>
                products
              </template>
            </p>

            <!-- Sort dropdown -->
            <div class="flex items-center gap-2">
              <label for="sort" class="text-sm text-gray-600 whitespace-nowrap"
                >Sort by</label
              >
              <select
                id="sort"
                v-model="sortBy"
                class="text-sm border border-gray-300 rounded-lg px-3 py-1.5 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="default">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="name">Name A–Z</option>
              </select>
            </div>
          </div>

          <!-- Active filter tags -->
          <div
            v-if="activeFilterTags.length > 0"
            class="flex flex-wrap gap-2 mb-4"
          >
            <span
              v-for="tag in activeFilterTags"
              :key="tag.key + tag.value"
              class="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-sm rounded-full"
            >
              {{ tag.label }}
              <button
                @click="removeFilter(tag)"
                class="hover:text-blue-900 focus:outline-none leading-none"
                :aria-label="`Remove filter: ${tag.label}`"
              >
                ✕
              </button>
            </span>
            <button
              @click="resetFilters"
              class="text-sm text-gray-500 hover:text-gray-700 underline ml-1"
            >
              Clear all
            </button>
          </div>

          <!-- Skeleton loader -->
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

          <!-- Product grid -->
          <div
            v-else-if="sortedProducts.length > 0"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <div
              v-for="product in sortedProducts"
              :key="product.id"
              class="relative"
            >
              <!-- Out of stock badge -->
              <div
                v-if="!product.inStock"
                class="absolute top-3 left-3 z-10 px-2 py-1 bg-gray-800 text-white text-xs font-semibold rounded"
              >
                Out of Stock
              </div>

              <!-- Dim card when out of stock -->
              <div :class="{ 'opacity-60': !product.inStock }">
                <ProductCard
                  :product="product"
                  @add-to-cart="addToCart(product)"
                />
              </div>
            </div>
          </div>

          <!-- Empty state -->
          <div v-else class="text-center py-12">
            <p class="text-xl text-gray-600 mb-4">
              No products found matching your filters.
            </p>
            <button
              @click="resetFilters"
              class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>

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

const route = useRoute();
useSeoMeta({
  title: "Products — SocksCommerce",
  description:
    "Browse our complete collection of premium socks. Filter by size, color, and price.",
});
const router = useRouter();
const cartStore = useCartStore();
const { show } = useCustomToast();

// ── State ─────────────────────────────────────────────────────────────────────
const isLoading = ref(true);
const allProducts = ref<Product[]>([]);

const selectedCategory = ref("");
const minPrice = ref(0);
const maxPrice = ref(100);
const selectedSizes = ref<string[]>([]);
const selectedColors = ref<string[]>([]);
const sortBy = ref("default");

const selectedProduct = ref<Product | null>(null);
const selectedSize = ref("");
const selectedColor = ref("");
const quantity = ref(1);

// ── Static options ─────────────────────────────────────────────────────────────
const categories = [
  "casual",
  "sports",
  "thermal",
  "eco-friendly",
  "outdoor",
  "premium",
];
const sizes = ["XS", "S", "M", "L", "XL"];
const colors = [
  "White",
  "Black",
  "Gray",
  "Navy",
  "Brown",
  "Green",
  "Blue",
  "Red",
  "Maroon",
  "Cream",
  "Natural",
  "Sage",
  "Silver",
  "Gold",
];

// ── Filtered products ──────────────────────────────────────────────────────────
const filteredProducts = computed(() =>
  allProducts.value.filter((product) => {
    if (selectedCategory.value && product.category !== selectedCategory.value)
      return false;
    if (product.price < minPrice.value || product.price > maxPrice.value)
      return false;
    if (
      selectedSizes.value.length > 0 &&
      !selectedSizes.value.some((s) => product.sizes.includes(s))
    )
      return false;
    if (
      selectedColors.value.length > 0 &&
      !selectedColors.value.some((c) => product.colors.includes(c))
    )
      return false;
    return true;
  }),
);

// ── Sorted products ────────────────────────────────────────────────────────────
const sortedProducts = computed(() => {
  const list = [...filteredProducts.value];
  switch (sortBy.value) {
    case "price-asc":
      return list.sort((a, b) => a.price - b.price);
    case "price-desc":
      return list.sort((a, b) => b.price - a.price);
    case "rating":
      return list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    case "name":
      return list.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return list;
  }
});

// ── Active filter tags ─────────────────────────────────────────────────────────
type FilterTag = { key: string; value: string; label: string };

const activeFilterTags = computed<FilterTag[]>(() => {
  const tags: FilterTag[] = [];

  if (selectedCategory.value)
    tags.push({
      key: "category",
      value: selectedCategory.value,
      label: `Category: ${selectedCategory.value}`,
    });

  if (minPrice.value > 0)
    tags.push({
      key: "minPrice",
      value: String(minPrice.value),
      label: `Min $${minPrice.value}`,
    });

  if (maxPrice.value < 100)
    tags.push({
      key: "maxPrice",
      value: String(maxPrice.value),
      label: `Max $${maxPrice.value}`,
    });

  selectedSizes.value.forEach((s) =>
    tags.push({ key: "size", value: s, label: `Size: ${s}` }),
  );

  selectedColors.value.forEach((c) =>
    tags.push({ key: "color", value: c, label: `Color: ${c}` }),
  );

  return tags;
});

function removeFilter(tag: FilterTag) {
  switch (tag.key) {
    case "category":
      selectedCategory.value = "";
      break;
    case "minPrice":
      minPrice.value = 0;
      break;
    case "maxPrice":
      maxPrice.value = 100;
      break;
    case "size":
      selectedSizes.value = selectedSizes.value.filter((s) => s !== tag.value);
      break;
    case "color":
      selectedColors.value = selectedColors.value.filter(
        (c) => c !== tag.value,
      );
      break;
  }
}

// ── Lifecycle ──────────────────────────────────────────────────────────────────
onMounted(async () => {
  try {
    const data = await $fetch<Product[]>("/api/products");
    allProducts.value = data;

    if (route.query.category) {
      selectedCategory.value = route.query.category as string;
    }
  } catch (error) {
    console.error("Failed to fetch products:", error);
  } finally {
    isLoading.value = false;
  }
});

// ── Actions ────────────────────────────────────────────────────────────────────
function resetFilters() {
  selectedCategory.value = "";
  minPrice.value = 0;
  maxPrice.value = 100;
  selectedSizes.value = [];
  selectedColors.value = [];
}

function addToCart(product: Product) {
  if (!product.inStock) return;
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
