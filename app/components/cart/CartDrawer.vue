<template>
  <div>
    <!-- Backdrop -->
    <Transition name="fade">
      <div
        v-if="cartStore.isOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        @click="cartStore.closeDrawer()"
      />
    </Transition>

    <!-- Drawer -->
    <Transition name="slide">
      <div
        v-if="cartStore.isOpen"
        class="fixed top-0 right-0 w-full max-w-md h-screen bg-white dark:bg-gray-800 shadow-lg z-50 flex flex-col"
      >
        <!-- Header -->
        <div
          class="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700"
        >
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            Shopping Cart
          </h2>
          <button
            @click="cartStore.closeDrawer()"
            class="text-2xl text-gray-500 dark:text-gray-200 hover:text-gray-700 dark:hover:text-white transition"
          >
            ✕
          </button>
        </div>

        <!-- Items -->
        <div class="flex-1 overflow-y-auto p-6">
          <div
            v-if="cartStore.items.length === 0"
            class="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-300"
          >
            <div class="text-5xl mb-4">🛒</div>
            <p class="text-lg mb-4">Your cart is empty</p>
            <NuxtLink
              to="/products"
              @click="cartStore.closeDrawer()"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Continue Shopping
            </NuxtLink>
          </div>

          <div v-else class="space-y-4">
            <div
              v-for="(item, idx) in cartStore.cartItems"
              :key="`${item.productId}-${item.size}-${item.color}-${idx}`"
              class="flex gap-4 pb-4 border-b border-gray-200 dark:border-gray-700"
            >
              <!-- Image -->
              <div
                class="shrink-0 w-24 h-24 bg-gray-100 rounded-lg overflow-hidden"
              >
                <img
                  v-if="item.product"
                  :src="item.product.image"
                  :alt="item.product.name"
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Details -->
              <div class="flex-1 min-w-0">
                <h3
                  class="font-semibold text-gray-900 dark:text-white line-clamp-2"
                >
                  {{ item.product?.name }}
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {{ item.size }} / {{ item.color }}
                </p>
                <p class="text-lg font-bold text-blue-600 mt-2">
                  ${{ item.subtotal.toFixed(2) }}
                </p>

                <!-- Quantity Controls -->
                <div class="flex items-center gap-2 mt-3">
                  <button
                    @click="
                      cartStore.updateQuantity(
                        item.productId,
                        item.size,
                        item.color,
                        item.quantity - 1,
                      )
                    "
                    class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                  >
                    −
                  </button>
                  <span class="w-8 text-center font-medium">{{
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
                    class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                  <button
                    @click="
                      cartStore.removeFromCart(
                        item.productId,
                        item.size,
                        item.color,
                      )
                    "
                    class="ml-auto px-2 py-1 text-red-600 hover:bg-red-50 rounded transition"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div
          v-if="cartStore.items.length > 0"
          class="border-t border-gray-200 p-6 space-y-4"
        >
          <!-- Summary -->
          <div class="space-y-2">
            <div class="flex justify-between text-gray-700">
              <span>Subtotal:</span>
              <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-gray-700">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div
              class="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-200"
            >
              <span>Total:</span>
              <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="space-y-2">
            <NuxtLink
              to="/checkout"
              @click="cartStore.closeDrawer()"
              class="block w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition text-center"
            >
              Checkout
            </NuxtLink>
            <button
              @click="cartStore.clearCart()"
              class="w-full px-4 py-3 bg-gray-200 text-gray-700 rounded-lg font-bold hover:bg-gray-300 transition"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const cartStore = useCartStore();
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
