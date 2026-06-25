<template>
  <div>
    <!-- Backdrop -->
    <Transition name="fade">
      <div
        v-if="cartStore.isOpen"
        class="fixed inset-0 bg-gray-900/30 backdrop-blur-[2px] z-40 transition-opacity"
        @click="cartStore.closeDrawer()"
      />
    </Transition>

    <!-- Drawer -->
    <Transition name="slide">
      <div
        v-if="cartStore.isOpen"
        class="fixed top-0 right-0 w-full max-w-md h-screen bg-white dark:bg-gray-800 shadow-2xl z-50 flex flex-col"
      >
        <!-- Header -->
        <div
          class="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700"
        >
          <h2
            class="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2"
          >
            🛒 Shopping Cart
            <span
              v-if="cartStore.items.length > 0"
              class="text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full"
            >
              {{ itemCount }}
            </span>
          </h2>
          <button
            @click="cartStore.closeDrawer()"
            class="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        <!-- Items -->
        <div class="flex-1 overflow-y-auto p-6">
          <div
            v-if="cartStore.items.length === 0"
            class="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400"
          >
            <div class="text-5xl mb-4">🛒</div>
            <p
              class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Your cart is empty
            </p>
            <p class="text-sm text-gray-400 dark:text-gray-500 mb-5">
              Add some socks to get started.
            </p>
            <NuxtLink
              to="/products"
              @click="cartStore.closeDrawer()"
              class="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition"
            >
              Continue Shopping
            </NuxtLink>
          </div>

          <TransitionGroup v-else name="item" tag="div" class="space-y-4">
            <div
              v-for="(item, idx) in cartStore.cartItems"
              :key="`${item.productId}-${item.size}-${item.color}-${idx}`"
              class="flex gap-4 pb-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0 last:pb-0"
            >
              <!-- Image -->
              <NuxtLink
                :to="
                  item.product ? `/products/${item.product.slug}` : '/products'
                "
                @click="cartStore.closeDrawer()"
                class="shrink-0 w-20 h-20 bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <img
                  v-if="item.product"
                  :src="item.product.image"
                  :alt="item.product.name"
                  class="w-full h-full object-cover"
                />
              </NuxtLink>

              <!-- Details -->
              <div class="flex-1 min-w-0">
                <div class="flex items-start justify-between gap-2">
                  <h3
                    class="font-semibold text-sm text-gray-900 dark:text-white line-clamp-2 leading-snug"
                  >
                    {{ item.product?.name }}
                  </h3>
                  <button
                    @click="
                      cartStore.removeFromCart(
                        item.productId,
                        item.size,
                        item.color,
                      )
                    "
                    class="shrink-0 w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition"
                    aria-label="Remove item"
                  >
                    <span class="text-sm">🗑️</span>
                  </button>
                </div>

                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {{ item.size }} · {{ item.color }}
                </p>

                <div class="flex items-center justify-between mt-2.5">
                  <!-- Quantity stepper -->
                  <div
                    class="inline-flex items-center border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden"
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
                      class="w-7 h-7 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-sm"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span
                      class="w-7 text-center text-sm font-semibold text-gray-900 dark:text-white"
                      >{{ item.quantity }}</span
                    >
                    <button
                      @click="
                        cartStore.updateQuantity(
                          item.productId,
                          item.size,
                          item.color,
                          item.quantity + 1,
                        )
                      "
                      class="w-7 h-7 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-sm"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <p class="text-base font-bold text-gray-900 dark:text-white">
                    ${{ item.subtotal.toFixed(2) }}
                  </p>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>

        <!-- Footer -->
        <div
          v-if="cartStore.items.length > 0"
          class="border-t border-gray-100 dark:border-gray-700 p-6 space-y-4 bg-gray-50/50 dark:bg-gray-900/30"
        >
          <!-- Summary -->
          <div class="space-y-1.5 text-sm">
            <div class="flex justify-between text-gray-600 dark:text-gray-400">
              <span>Subtotal</span>
              <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-gray-600 dark:text-gray-400">
              <span>Shipping</span>
              <span class="text-green-600 dark:text-green-400 font-medium"
                >Free</span
              >
            </div>
            <div
              class="flex justify-between text-base font-bold text-gray-900 dark:text-white pt-2.5 border-t border-gray-200 dark:border-gray-700"
            >
              <span>Total</span>
              <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="space-y-2">
            <NuxtLink
              to="/checkout"
              @click="cartStore.closeDrawer()"
              class="block w-full px-4 py-3.5 bg-blue-600 text-white rounded-xl font-bold text-sm text-center hover:bg-blue-700 active:scale-[0.99] transition"
            >
              Checkout
            </NuxtLink>
            <button
              @click="cartStore.clearCart()"
              class="w-full px-4 py-2.5 text-gray-500 dark:text-gray-400 rounded-xl font-medium text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
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

const itemCount = computed(() =>
  cartStore.items.reduce((total, item) => total + item.quantity, 0),
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.item-enter-active,
.item-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.item-enter-from {
  opacity: 0;
  transform: translateX(12px);
}
.item-leave-to {
  opacity: 0;
  transform: translateX(-12px);
}
.item-move {
  transition: transform 0.2s ease;
}
</style>
