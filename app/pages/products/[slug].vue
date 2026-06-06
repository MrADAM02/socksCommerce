<template>
  <div v-if="isLoading" class="flex items-center justify-center min-h-screen">
    <div class="text-center">
      <div class="inline-block animate-spin text-4xl mb-4">⏳</div>
      <p class="text-gray-600">Loading product...</p>
    </div>
  </div>

  <div v-else-if="product" class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Breadcrumb -->
      <div class="flex gap-2 text-sm text-gray-600 mb-8">
        <NuxtLink to="/" class="hover:text-blue-600">Home</NuxtLink>
        <span>/</span>
        <NuxtLink to="/products" class="hover:text-blue-600">Products</NuxtLink>
        <span>/</span>
        <span class="text-gray-900 font-medium">{{ product.name }}</span>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Image Gallery -->
        <div>
          <div class="bg-white rounded-lg overflow-hidden mb-4">
            <img
              :src="currentImage"
              :alt="product.name"
              class="w-full h-96 object-cover"
            />
          </div>
          <div class="grid grid-cols-4 gap-2">
            <button
              v-for="(image, idx) in product.images || [product.image]"
              :key="idx"
              @click="currentImage = image"
              :class="{
                'ring-2 ring-blue-600': currentImage === image,
                'ring-1 ring-gray-200': currentImage !== image,
              }"
              class="rounded-lg overflow-hidden transition"
            >
              <img
                :src="image"
                :alt="`${product.name} ${idx + 1}`"
                class="w-full h-24 object-cover"
              />
            </button>
          </div>
        </div>

        <!-- Product Details -->
        <div>
          <!-- Header -->
          <div class="mb-6">
            <h1 class="text-4xl font-bold text-gray-900 mb-2">
              {{ product.name }}
            </h1>
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-1">
                <span class="text-yellow-400 text-xl">★</span>
                <span class="font-semibold">{{ product.rating }}</span>
              </div>
              <span v-if="product.inStock" class="text-green-600 font-semibold"
                >In Stock</span
              >
              <span v-else class="text-red-600 font-semibold"
                >Out of Stock</span
              >
            </div>
          </div>

          <!-- Price -->
          <div class="mb-6">
            <p class="text-4xl font-bold text-blue-600 mb-2">
              ${{ product.price.toFixed(2) }}
            </p>
            <p class="text-gray-600">{{ product.description }}</p>
          </div>

          <!-- Divider -->
          <hr class="my-6" />

          <!-- Size Selection -->
          <div class="mb-6">
            <label class="block text-lg font-semibold text-gray-900 mb-3"
              >Size</label
            >
            <div class="grid grid-cols-5 gap-2">
              <button
                v-for="size in product.sizes"
                :key="size"
                @click="selectedSize = size"
                :disabled="!product.inStock"
                :class="{
                  'bg-blue-600 text-white': selectedSize === size,
                  'bg-gray-200 text-gray-700 hover:bg-gray-300':
                    selectedSize !== size && product.inStock,
                  'bg-gray-100 text-gray-400 cursor-not-allowed':
                    !product.inStock,
                }"
                class="py-3 rounded-lg font-semibold transition"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <!-- Color Selection -->
          <div class="mb-6">
            <label class="block text-lg font-semibold text-gray-900 mb-3"
              >Color</label
            >
            <div class="grid grid-cols-4 gap-2">
              <button
                v-for="color in product.colors"
                :key="color"
                @click="selectedColor = color"
                :disabled="!product.inStock"
                :class="{
                  'ring-2 ring-blue-600': selectedColor === color,
                  'ring-1 ring-gray-300': selectedColor !== color,
                  'opacity-50 cursor-not-allowed': !product.inStock,
                }"
                class="py-3 rounded-lg text-sm font-medium transition"
              >
                {{ color }}
              </button>
            </div>
          </div>

          <!-- Quantity -->
          <div class="mb-8">
            <label class="block text-lg font-semibold text-gray-900 mb-3"
              >Quantity</label
            >
            <div
              class="flex items-center gap-4 bg-gray-100 rounded-lg w-fit p-2"
            >
              <button
                @click="quantity = Math.max(1, quantity - 1)"
                :disabled="!product.inStock"
                class="px-4 py-2 hover:bg-gray-200 rounded transition disabled:cursor-not-allowed"
              >
                −
              </button>
              <input
                v-model.number="quantity"
                type="number"
                min="1"
                :disabled="!product.inStock"
                class="w-16 text-center font-semibold bg-transparent disabled:cursor-not-allowed"
              />
              <button
                @click="quantity++"
                :disabled="!product.inStock"
                class="px-4 py-2 hover:bg-gray-200 rounded transition disabled:cursor-not-allowed"
              >
                +
              </button>
            </div>
          </div>

          <!-- Add to Cart Button -->
          <div class="flex gap-3 mb-8">
            <button
              @click="addToCart"
              :disabled="!product.inStock || !selectedSize || !selectedColor"
              class="flex-1 bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {{ product.inStock ? "Add to Cart" : "Out of Stock" }}
            </button>
            <button
              class="px-6 py-4 border-2 border-gray-300 rounded-lg font-bold hover:border-gray-400 transition"
            >
              ♡
            </button>
          </div>

          <!-- Product Info -->
          <div class="bg-white rounded-lg p-6 space-y-4">
            <div class="border-b pb-4">
              <h3 class="font-semibold text-gray-900 mb-2">Category</h3>
              <p class="text-gray-600 capitalize">{{ product.category }}</p>
            </div>
            <div class="border-b pb-4">
              <h3 class="font-semibold text-gray-900 mb-2">Available Sizes</h3>
              <p class="text-gray-600">{{ product.sizes.join(", ") }}</p>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">Available Colors</h3>
              <p class="text-gray-600">{{ product.colors.join(", ") }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            :product="relatedProduct"
            @add-to-cart="addRelatedToCart(relatedProduct)"
          />
        </div>
      </div>
    </div>
  </div>

  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <p class="text-2xl text-gray-600 mb-4">Product not found</p>
      <NuxtLink
        to="/products"
        class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Back to Products
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types";
import { products } from "../../../data/products";
import { useCustomToast } from "../../../composables/useToast";

const route = useRoute();
const cartStore = useCartStore();

const title = computed(() =>
  product.value
    ? `${product.value.name} — SocksCommerce`
    : "Product — SocksCommerce",
);
const description = computed(() =>
  product.value ? product.value.description : "Product details",
);
useSeoMeta({
  title,
  description,
});
const { show } = useCustomToast();

const isLoading = ref(true);
const product = ref<Product | null>(null);
const currentImage = ref("");
const selectedSize = ref("");
const selectedColor = ref("");
const quantity = ref(1);

const relatedProducts = computed(() => {
  if (!product.value) return [];
  return products
    .filter(
      (p) =>
        p.category === product.value?.category && p.id !== product.value?.id,
    )
    .slice(0, 4);
});

onMounted(async () => {
  try {
    const slug = route.params.slug as string;
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
});

function addToCart() {
  if (!product.value || !selectedSize.value || !selectedColor.value) {
    return;
  }
  cartStore.addToCart(
    product.value,
    quantity.value,
    selectedSize.value,
    selectedColor.value,
  );
  // Reset form or show success message
  quantity.value = 1;
  show("Added to cart", { type: "success" });
}

function addRelatedToCart(relatedProduct: Product) {
  const size = relatedProduct.sizes[0] || "";
  const color = relatedProduct.colors[0] || "";
  cartStore.addToCart(relatedProduct, 1, size, color);
}
</script>
