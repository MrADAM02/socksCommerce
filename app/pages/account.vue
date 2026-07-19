<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between"
      >
        <div>
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white">My Account</h1>
          <p class="text-gray-600 dark:text-gray-400 mt-2">Welcome back, John Doe!</p>
          <p
            class="mt-3 inline-flex items-center gap-2 text-sm font-medium text-amber-800 dark:text-amber-200 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-full px-3 py-1"
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
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div class="text-5xl mb-3">👤</div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">Account</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">Manage your profile</p>
          <button
            class="mt-4 px-4 py-2 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
          >
            Edit Profile
          </button>
        </div>

        <!-- Orders Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div class="text-5xl mb-3">📦</div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">Orders</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">View your orders</p>
          <p class="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-3">
            {{ orders.length }}
          </p>
        </div>

        <!-- Addresses Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div class="text-5xl mb-3">📍</div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">Addresses</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">Manage addresses</p>
          <button
            class="mt-4 px-4 py-2 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
          >
            Manage
          </button>
        </div>

        <!-- Settings Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div class="text-5xl mb-3">⚙️</div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">Settings</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">Account settings</p>
          <button
            class="mt-4 px-4 py-2 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
          >
            Preferences
          </button>
        </div>
      </div>

      <!-- Order History -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Order History</h2>
        </div>

        <div v-if="orders.length === 0" class="p-12 text-center">
          <div class="text-5xl mb-4">📦</div>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-4">
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
            <thead class="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th
                  class="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Order ID
                </th>
                <th
                  class="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Date
                </th>
                <th
                  class="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Items
                </th>
                <th
                  class="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Total
                </th>
                <th
                  class="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Status
                </th>
                <th
                  class="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr
                v-for="order in orders"
                :key="order.id"
                class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition"
              >
                <td class="px-6 py-3 text-sm text-gray-900 dark:text-white font-medium">
                  #{{ order.id }}
                </td>
                <td class="px-6 py-3 text-sm text-gray-600 dark:text-gray-400">
                  {{ formatDate(order.createdAt) }}
                </td>
                <td class="px-6 py-3 text-sm text-gray-600 dark:text-gray-400">
                  {{ order.items.length }} item(s)
                </td>
                <td class="px-6 py-3 text-sm font-bold text-gray-900 dark:text-white">
                  ${{ order.total.toFixed(2) }}
                </td>
                <td class="px-6 py-3 text-sm">
                  <span
                    :class="{
                      'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300':
                        order.status === 'pending',
                      'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300':
                        order.status === 'processing',
                      'bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300':
                        order.status === 'shipped',
                      'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300':
                        order.status === 'delivered',
                    }"
                    class="px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {{ order.status }}
                  </span>
                </td>
                <td class="px-6 py-3 text-sm">
                  <button class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
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
  // Mock logout - in a real app, this would clear the auth session
  navigateTo("/login");
}
</script>
