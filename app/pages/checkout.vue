<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 class="text-4xl font-bold text-gray-900">Checkout</h1>
      </div>
    </div>

    <div
      v-if="cartStore.items.length === 0"
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center"
    >
      <p class="text-2xl text-gray-600 mb-4">Your cart is empty</p>
      <NuxtLink
        to="/products"
        class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold"
      >
        Continue Shopping
      </NuxtLink>
    </div>

    <div v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Checkout Form -->
        <div class="lg:col-span-2">
          <!-- Step Indicator -->
          <div class="mb-8 flex items-center justify-between">
            <div
              v-for="(step, idx) in steps"
              :key="idx"
              class="flex items-center flex-1"
            >
              <div
                :class="{
                  'bg-blue-600 text-white': currentStep >= idx,
                  'bg-gray-200 text-gray-500': currentStep < idx,
                }"
                class="w-10 h-10 rounded-full flex items-center justify-center font-bold transition"
              >
                {{ currentStep > idx ? "✓" : idx + 1 }}
              </div>
              <span
                :class="{
                  'text-blue-600': currentStep >= idx,
                  'text-gray-500': currentStep < idx,
                }"
                class="ml-2 font-medium transition"
              >
                {{ step }}
              </span>
              <div
                v-if="idx < steps.length - 1"
                class="flex-1 h-0.5 ml-4 bg-gray-300"
              ></div>
            </div>
          </div>

          <!-- Step Content -->
          <div class="bg-white rounded-lg shadow-md p-8">
            <!-- Step 1: Shipping Address -->
            <div v-if="currentStep === 0">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">
                Shipping Address
              </h2>
              <form @submit.prevent="nextStep" class="space-y-4">
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >First Name</label
                    >
                    <input
                      v-model="formData.firstName"
                      type="text"
                      required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Last Name</label
                    >
                    <input
                      v-model="formData.lastName"
                      type="text"
                      required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Email</label
                  >
                  <input
                    v-model="formData.email"
                    type="email"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Address</label
                  >
                  <input
                    v-model="formData.address"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div class="grid md:grid-cols-3 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >City</label
                    >
                    <input
                      v-model="formData.city"
                      type="text"
                      required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >State</label
                    >
                    <input
                      v-model="formData.state"
                      type="text"
                      required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >ZIP Code</label
                    >
                    <input
                      v-model="formData.zip"
                      type="text"
                      required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div class="pt-4 flex gap-3">
                  <NuxtLink
                    to="/cart"
                    class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-bold"
                  >
                    Back to Cart
                  </NuxtLink>
                  <button
                    type="submit"
                    class="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold"
                  >
                    Continue to Shipping
                  </button>
                </div>
              </form>
            </div>

            <!-- Step 2: Shipping Method -->
            <div v-if="currentStep === 1">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">
                Shipping Method
              </h2>
              <div class="space-y-3 mb-6">
                <label
                  v-for="method in shippingMethods"
                  :key="method.id"
                  class="flex items-center p-4 border-2 rounded-lg cursor-pointer transition"
                  :class="
                    formData.shippingMethod === method.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  "
                >
                  <input
                    type="radio"
                    :value="method.id"
                    v-model="formData.shippingMethod"
                    class="w-4 h-4"
                  />
                  <div class="ml-4 flex-1">
                    <p class="font-semibold text-gray-900">{{ method.name }}</p>
                    <p class="text-sm text-gray-600">
                      {{ method.description }}
                    </p>
                  </div>
                  <p class="text-lg font-bold text-gray-900">
                    ${{ method.price.toFixed(2) }}
                  </p>
                </label>
              </div>

              <div class="pt-4 flex gap-3">
                <button
                  @click="previousStep"
                  class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-bold"
                >
                  Back
                </button>
                <button
                  @click="nextStep"
                  class="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold"
                >
                  Continue to Payment
                </button>
              </div>
            </div>

            <!-- Step 3: Payment -->
            <div v-if="currentStep === 2">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">
                Payment Information
              </h2>
              <form @submit.prevent="submitOrder" class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Card Holder Name</label
                  >
                  <input
                    v-model="formData.cardName"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Card Number</label
                  >
                  <input
                    v-model="formData.cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-mono"
                  />
                </div>

                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Expiry Date</label
                    >
                    <input
                      v-model="formData.cardExpiry"
                      type="text"
                      placeholder="MM/YY"
                      required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-mono"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >CVV</label
                    >
                    <input
                      v-model="formData.cardCvv"
                      type="text"
                      placeholder="123"
                      required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-mono"
                    />
                  </div>
                </div>

                <p class="text-sm text-gray-600 flex items-center gap-2">
                  <span>🔒</span>
                  Your payment information is secure and encrypted
                </p>

                <div class="pt-4 flex gap-3">
                  <button
                    type="button"
                    @click="previousStep"
                    class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-bold"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    :disabled="isProcessing"
                    class="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {{ isProcessing ? "Processing..." : "Place Order" }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 class="text-xl font-bold mb-6">Order Summary</h2>

            <div
              class="space-y-3 mb-6 max-h-64 overflow-y-auto pb-6 border-b border-gray-200"
            >
              <div
                v-for="(item, idx) in cartStore.cartItems"
                :key="`${item.productId}-${item.size}-${item.color}-${idx}`"
                class="flex items-center gap-3"
              >
                <div
                  class="w-16 h-16 bg-gray-100 rounded overflow-hidden shrink-0"
                >
                  <img
                    v-if="item.product"
                    :src="item.product.image"
                    :alt="item.product.name"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-semibold text-sm text-gray-900 line-clamp-1">
                    {{ item.product?.name }}
                  </p>
                  <p class="text-xs text-gray-600">
                    {{ item.size }} / {{ item.color }}
                  </p>
                  <p class="text-xs text-gray-600">Qty: {{ item.quantity }}</p>
                </div>
                <p class="font-bold text-gray-900">
                  ${{ item.subtotal.toFixed(2) }}
                </p>
              </div>
            </div>

            <!-- Pricing -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between text-gray-700">
                <span>Subtotal:</span>
                <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
              </div>
              <div
                v-if="currentStep >= 1"
                class="flex justify-between text-gray-700"
              >
                <span>Shipping:</span>
                <span>${{ selectedShippingPrice.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-gray-700">
                <span>Tax:</span>
                <span>${{ (cartStore.totalPrice * 0.08).toFixed(2) }}</span>
              </div>
              <div
                class="flex justify-between text-lg font-bold border-t border-gray-200 pt-3"
              >
                <span>Total:</span>
                <span class="text-blue-600">${{ finalTotal.toFixed(2) }}</span>
              </div>
            </div>

            <button
              @click="navigateTo('/products')"
              class="w-full px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition text-sm"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cartStore = useCartStore();
const router = useRouter();

const currentStep = ref(0);
const isProcessing = ref(false);

const steps = ["Shipping", "Method", "Payment"];

const shippingMethods = [
  {
    id: "standard",
    name: "Standard Shipping",
    description: "Arrives in 5-7 business days",
    price: 5.99,
  },
  {
    id: "express",
    name: "Express Shipping",
    description: "Arrives in 2-3 business days",
    price: 12.99,
  },
  {
    id: "overnight",
    name: "Overnight Shipping",
    description: "Arrives tomorrow",
    price: 24.99,
  },
];

const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  shippingMethod: "standard",
  cardName: "",
  cardNumber: "",
  cardExpiry: "",
  cardCvv: "",
});

const selectedShippingPrice = computed(() => {
  const method = shippingMethods.find(
    (m) => m.id === formData.value.shippingMethod,
  );
  return method?.price || 0;
});

const finalTotal = computed(() => {
  return (
    cartStore.totalPrice +
    selectedShippingPrice.value +
    cartStore.totalPrice * 0.08
  );
});

function nextStep() {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++;
  }
}

function previousStep() {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
}

async function submitOrder() {
  isProcessing.value = true;
  try {
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Clear cart
    cartStore.clearCart();

    // Redirect to confirmation
    await navigateTo("/order-confirmation");
  } catch (error) {
    console.error("Order failed:", error);
    alert("Order failed. Please try again.");
  } finally {
    isProcessing.value = false;
  }
}
</script>
