<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white border-b border-gray-200">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between"
      >
        <div>
          <h1 class="text-4xl font-bold text-gray-900">My Account</h1>
          <p class="text-gray-600 mt-2">Welcome back, John Doe!</p>
          <p
            class="mt-3 inline-flex items-center gap-2 text-sm font-medium text-amber-800 bg-amber-50 border border-amber-200 rounded-full px-3 py-1"
          >
            🧪 Demo mode — this is sample account data, not a real user
            session
          </p>
        </div>
        <button
          @click="handleLogout"
          class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-bold"
        >
          Sign Out
        </button>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-4 gap-6 mb-12">
        <!-- Profile Card -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="text-5xl mb-3">👤</div>
          <h3 class="text-lg font-bold text-gray-900">Account</h3>
          <p class="text-gray-600 text-sm mt-1">Manage your profile</p>
          <button
            class="mt-4 px-4 py-2 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
          >
            Edit Profile
          </button>
        </div>

        <!-- Orders Card -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="text-5xl mb-3">📦</div>
          <h3 class="text-lg font-bold text-gray-900">Orders</h3>
          <p class="text-gray-600 text-sm mt-1">View your orders</p>
          <p class="text-2xl font-bold text-blue-600 mt-3">
            {{ orders.length }}
          </p>
        </div>

        <!-- Addresses Card -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="text-5xl mb-3">📍</div>
          <h3 class="text-lg font-bold text-gray-900">Addresses</h3>
          <p class="text-gray-600 text-sm mt-1">Manage addresses</p>
          <button
            class="mt-4 px-4 py-2 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
          >
            Manage
          </button>
        </div>

        <!-- Settings Card -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="text-5xl mb-3">⚙️</div>
          <h3 class="text-lg font-bold text-gray-900">Settings</h3>
          <p class="text-gray-600 text-sm mt-1">Account settings</p>
          <button
            class="mt-4 px-4 py-2 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
          >
            Preferences
          </button>
        </div>
      </div>

      <!-- Order History -->
      <div class="bg-white rounded-lg shadow-md">
        <div class="p-6 border-b border-gray-200">
          <h2 class="text-2xl font-bold text-gray-900">Order History</h2>
        </div>

        <div v-if="orders.length === 0" class="p-12 text-center">
          <div class="text-5xl mb-4">📦</div>
          <p class="text-xl text-gray-600 mb-4">
            You haven't placed any orders yet
          </p>
          <NuxtLink
            to="/products"
            class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold"
          >
            Start Shopping
          </NuxtLink>
        </div>

        <div v-else class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th
                  class="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                >
                  Order ID
                </th>
                <th
                  class="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                >
                  Date
                </th>
                <th
                  class="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                >
                  Items
                </th>
                <th
                  class="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                >
                  Total
                </th>
                <th
                  class="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                >
                  Status
                </th>
                <th
                  class="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr
                v-for="order in orders"
                :key="order.id"
                class="hover:bg-gray-50 transition"
              >
                <td class="px-6 py-3 text-sm text-gray-900 font-medium">
                  #{{ order.id }}
                </td>
                <td class="px-6 py-3 text-sm text-gray-600">
                  {{ formatDate(order.createdAt) }}
                </td>
                <td class="px-6 py-3 text-sm text-gray-600">
                  {{ order.items.length }} item(s)
                </td>
                <td class="px-6 py-3 text-sm font-bold text-gray-900">
                  ${{ order.total.toFixed(2) }}
                </td>
                <td class="px-6 py-3 text-sm">
                  <span
                    :class="{
                      'bg-yellow-100 text-yellow-800':
                        order.status === 'pending',
                      'bg-blue-100 text-blue-800':
                        order.status === 'processing',
                      'bg-purple-100 text-purple-800':
                        order.status === 'shipped',
                      'bg-green-100 text-green-800':
                        order.status === 'delivered',
                    }"
                    class="px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {{ order.status }}
                  </span>
                </td>
                <td class="px-6 py-3 text-sm">
                  <button class="text-blue-600 hover:text-blue-700 font-medium">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Order } from "~/types";

const router = useRouter();

// Mock orders data
const orders = ref<Order[]>([
  {
    id: "001",
    userId: "1",
    items: [{ productId: "1", quantity: 2, size: "M", color: "Black" }],
    total: 25.98,
    status: "delivered",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "002",
    userId: "1",
    items: [{ productId: "2", quantity: 1, size: "L", color: "Brown" }],
    total: 18.99,
    status: "shipped",
    createdAt: "2024-02-10T14:30:00Z",
  },
]);

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function handleLogout() {
  // Mock logout
  console.log("Logged out");
  navigateTo("/login");
}
</script>
