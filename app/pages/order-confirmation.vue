<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div v-if="order" class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Success Message -->
      <div
        class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-12 text-center mb-8"
      >
        <div class="text-6xl mb-4 animate-bounce">✓</div>
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Order Confirmed!
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-6">
          Thank you for your purchase. Your order has been received.
        </p>

        <div
          class="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-600 p-4 text-left mb-8"
        >
          <p class="text-sm text-gray-600 dark:text-gray-400">Order Number</p>
          <p class="text-2xl font-bold text-blue-600 dark:text-blue-400">
            #{{ order.orderNumber }}
          </p>
        </div>

        <p class="text-gray-600 dark:text-gray-400 mb-8">
          A confirmation email has been sent to
          <span class="font-bold text-gray-900 dark:text-white">{{
            order.email
          }}</span>
        </p>
      </div>

      <!-- Order Details -->
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <!-- Shipping Address -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Shipping Address
          </h2>
          <div class="text-gray-700 dark:text-gray-300 space-y-1">
            <p>{{ order.shipping.name }}</p>
            <p>{{ order.shipping.address }}</p>
            <p>
              {{ order.shipping.city }}, {{ order.shipping.state }}
              {{ order.shipping.zip }}
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400 pt-2">
              Expected delivery: 5-7 business days
            </p>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Order Summary
          </h2>
          <div class="space-y-3 text-gray-700 dark:text-gray-300">
            <div class="flex justify-between">
              <span>Subtotal:</span>
              <span>${{ order.subtotal.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Shipping:</span>
              <span>${{ order.shippingPrice.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Tax:</span>
              <span>${{ order.tax.toFixed(2) }}</span>
            </div>
            <div
              class="flex justify-between text-lg font-bold border-t border-gray-200 dark:border-gray-700 pt-3"
            >
              <span>Total:</span>
              <span class="text-blue-600 dark:text-blue-400"
                >${{ order.total.toFixed(2) }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Items -->
      <div
        class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-8"
      >
        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">
            Items
          </h2>
        </div>

        <div class="divide-y divide-gray-200 dark:divide-gray-700">
          <div
            v-for="(item, idx) in order.items"
            :key="`${item.productId}-${item.size}-${item.color}-${idx}`"
            class="p-6 flex gap-6"
          >
            <div
              class="w-20 h-20 bg-gray-100 dark:bg-gray-900 rounded shrink-0"
            >
              <img
                v-if="item.image"
                :src="item.image"
                :alt="item.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1">
              <p class="font-bold text-gray-900 dark:text-white">
                {{ item.name }}
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ item.color }} / {{ item.size }}
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Quantity: {{ item.quantity }}
              </p>
            </div>
            <p class="font-bold text-gray-900 dark:text-white">
              ${{ item.subtotal.toFixed(2) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Next Steps -->
      <div
        class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8"
      >
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
          What's Next?
        </h3>
        <ul class="space-y-2 text-gray-700 dark:text-gray-300">
          <li class="flex gap-3">
            <span class="text-blue-600 dark:text-blue-400 font-bold">1</span>
            <span
              >You'll receive a shipping confirmation email with tracking
              information</span
            >
          </li>
          <li class="flex gap-3">
            <span class="text-blue-600 dark:text-blue-400 font-bold">2</span>
            <span>Track your order status in your account dashboard</span>
          </li>
          <li class="flex gap-3">
            <span class="text-blue-600 dark:text-blue-400 font-bold">3</span>
            <span>Receive your package and enjoy your new socks!</span>
          </li>
        </ul>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4">
        <NuxtLink
          to="/account"
          class="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold text-center"
        >
          View My Orders
        </NuxtLink>
        <NuxtLink
          to="/products"
          class="flex-1 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition font-bold text-center"
        >
          Continue Shopping
        </NuxtLink>
      </div>
    </div>

    <!-- No order in memory (e.g. direct navigation / page refresh) -->
    <div
      v-else
      class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
    >
      <div class="text-5xl mb-4">🧦</div>
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        No recent order found
      </h1>
      <p class="text-gray-600 dark:text-gray-400 mb-8">
        We couldn't find a completed order in this session. If you just
        placed one, check your account order history.
      </p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <NuxtLink
          to="/account"
          class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold"
        >
          View My Orders
        </NuxtLink>
        <NuxtLink
          to="/products"
          class="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition font-bold"
        >
          Continue Shopping
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLastOrder } from "../../composables/useLastOrder";

const order = useLastOrder();
</script>

<style scoped>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>
