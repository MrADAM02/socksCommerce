<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Shopping Cart</h1>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div v-if="cartStore.items.length === 0" class="text-center py-12">
        <div class="text-5xl mb-4">🛒</div>
        <p class="text-2xl text-gray-600 dark:text-gray-400 mb-4">Your cart is empty</p>
        <NuxtLink
          to="/products"
          class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold"
        >
          Continue Shopping
        </NuxtLink>
      </div>

      <div v-else class="grid lg:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-2">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div class="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                Order Summary ({{ cartStore.items.length }} items)
              </h2>
            </div>

            <div class="divide-y divide-gray-200 dark:divide-gray-700">
              <div
                v-for="(item, idx) in cartStore.cartItems"
                :key="`${item.productId}-${item.size}-${item.color}-${idx}`"
                class="p-6 flex gap-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition"
              >
                <!-- Image -->
                <NuxtLink
                  v-if="item.product"
                  :to="`/products/${item.product.slug}`"
                  class="shrink-0 w-32 h-32 bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    :src="item.product.image"
                    :alt="item.product.name"
                    class="w-full h-full object-cover"
                  />
                </NuxtLink>

                <!-- Details -->
                <div class="flex-1">
                  <NuxtLink
                    v-if="item.product"
                    :to="`/products/${item.product.slug}`"
                    class="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    {{ item.product?.name }}
                  </NuxtLink>
                  <p class="text-gray-600 dark:text-gray-400 mt-1">
                    {{ item.size }} / {{ item.color }}
                  </p>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Unit Price: ${{
                      (item.subtotal / item.quantity).toFixed(2)
                    }}
                  </p>

                  <!-- Quantity & Remove -->
                  <div class="flex items-center gap-4 mt-4">
                    <div
                      class="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded px-2 py-1"
                    >
                      <button
                        @click="
                          cartStore.updateQuantity(
                            item.productId,
                            item.size,
                            item.color,
                            item.quantity - 1,
                          )
                        "
                        class="px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition text-gray-900 dark:text-white"
                      >
                        −
                      </button>
                      <span class="w-8 text-center font-medium text-gray-900 dark:text-white">{{
                        item.quantity
                      }}</span>
                      <button
                        @click="
                          cartStore.updateQuantity(
                            item.productId,
                            item.size,
                            item.color,
                            item.quantity + 1,
                          )
                        "
                        class="px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition text-gray-900 dark:text-white"
                      >
                        +
                      </button>
                    </div>
                    <button
                      @click="
                        cartStore.removeFromCart(
                          item.productId,
                          item.size,
                          item.color,
                        )
                      "
                      class="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <!-- Price -->
                <div class="text-right">
                  <p class="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    ${{ item.subtotal.toFixed(2) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary Sidebar -->
        <div class="lg:col-span-1">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-20">
            <h2 class="text-xl font-bold mb-6 text-gray-900 dark:text-white">Order Summary</h2>

            <div class="space-y-3 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div class="flex justify-between text-gray-700 dark:text-gray-300">
                <span>Subtotal:</span>
                <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-gray-700 dark:text-gray-300">
                <span>Shipping:</span>
                <span class="text-green-600 dark:text-green-400 font-medium">Free</span>
              </div>
              <div class="flex justify-between text-gray-700 dark:text-gray-300">
                <span>Tax (estimated):</span>
                <span>${{ (cartStore.totalPrice * 0.08).toFixed(2) }}</span>
              </div>
            </div>

            <div class="flex justify-between text-xl font-bold mb-6 text-gray-900 dark:text-white">
              <span>Total:</span>
              <span class="text-blue-600 dark:text-blue-400"
                >${{ (cartStore.totalPrice * 1.08).toFixed(2) }}</span
              >
            </div>

            <NuxtLink
              to="/checkout"
              class="w-full block px-4 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition text-center mb-3"
            >
              Proceed to Checkout
            </NuxtLink>

            <NuxtLink
              to="/products"
              class="w-full block px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition text-center"
            >
              Continue Shopping
            </NuxtLink>

            <button
              @click="cartStore.clearCart()"
              class="w-full mt-3 px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition text-sm"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cartStore = useCartStore();
</script>
