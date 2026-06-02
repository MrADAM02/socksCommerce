<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Success Message -->
      <div class="bg-white rounded-lg shadow-md p-12 text-center mb-8">
        <div class="text-6xl mb-4 animate-bounce">✓</div>
        <h1 class="text-4xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
        <p class="text-xl text-gray-600 mb-6">
          Thank you for your purchase. Your order has been received.
        </p>

        <div class="bg-blue-50 border-l-4 border-blue-600 p-4 text-left mb-8">
          <p class="text-sm text-gray-600">Order Number</p>
          <p class="text-2xl font-bold text-blue-600">#{{ orderNumber }}</p>
        </div>

        <p class="text-gray-600 mb-8">
          A confirmation email has been sent to
          <span class="font-bold">{{ customerEmail }}</span>
        </p>
      </div>

      <!-- Order Details -->
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <!-- Shipping Address -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-4">Shipping Address</h2>
          <div class="text-gray-700 space-y-1">
            <p>{{ shippingInfo.name }}</p>
            <p>{{ shippingInfo.address }}</p>
            <p>
              {{ shippingInfo.city }}, {{ shippingInfo.state }}
              {{ shippingInfo.zip }}
            </p>
            <p class="text-sm text-gray-600 pt-2">
              Expected delivery: 5-7 business days
            </p>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
          <div class="space-y-3 text-gray-700">
            <div class="flex justify-between">
              <span>Subtotal:</span>
              <span>$48.99</span>
            </div>
            <div class="flex justify-between">
              <span>Shipping:</span>
              <span>$5.99</span>
            </div>
            <div class="flex justify-between">
              <span>Tax:</span>
              <span>$4.39</span>
            </div>
            <div
              class="flex justify-between text-lg font-bold border-t border-gray-200 pt-3"
            >
              <span>Total:</span>
              <span class="text-blue-600">$59.37</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Items -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div class="p-6 border-b border-gray-200">
          <h2 class="text-xl font-bold text-gray-900">Items</h2>
        </div>

        <div class="divide-y divide-gray-200">
          <div class="p-6 flex gap-6">
            <div class="w-20 h-20 bg-gray-100 rounded shrink-0">
              <img
                src="https://images.unsplash.com/photo-1598157816617-1b9bfe22e49f?w=200&h=200&fit=crop"
                alt="Product"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1">
              <p class="font-bold text-gray-900">Classic Cotton Crew Socks</p>
              <p class="text-sm text-gray-600">Black / M</p>
              <p class="text-sm text-gray-600">Quantity: 2</p>
            </div>
            <p class="font-bold text-gray-900">$25.98</p>
          </div>

          <div class="p-6 flex gap-6">
            <div class="w-20 h-20 bg-gray-100 rounded shrink-0">
              <img
                src="https://images.unsplash.com/photo-1595348046389-54ace5c1d0c5?w=200&h=200&fit=crop"
                alt="Product"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1">
              <p class="font-bold text-gray-900">Wool Hiking Socks</p>
              <p class="text-sm text-gray-600">Brown / L</p>
              <p class="text-sm text-gray-600">Quantity: 1</p>
            </div>
            <p class="font-bold text-gray-900">$18.99</p>
          </div>
        </div>
      </div>

      <!-- Next Steps -->
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h3 class="text-lg font-bold text-gray-900 mb-4">What's Next?</h3>
        <ul class="space-y-2 text-gray-700">
          <li class="flex gap-3">
            <span class="text-blue-600 font-bold">1</span>
            <span
              >You'll receive a shipping confirmation email with tracking
              information</span
            >
          </li>
          <li class="flex gap-3">
            <span class="text-blue-600 font-bold">2</span>
            <span>Track your order status in your account dashboard</span>
          </li>
          <li class="flex gap-3">
            <span class="text-blue-600 font-bold">3</span>
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
          class="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-bold text-center"
        >
          Continue Shopping
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const orderNumber = ref("100234567");
const customerEmail = ref("john@example.com");

const shippingInfo = ref({
  name: "John Doe",
  address: "123 Main Street",
  city: "San Francisco",
  state: "CA",
  zip: "94105",
});
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
