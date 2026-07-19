<template>
  <div
    class="min-h-screen bg-linear-to-br from-blue-600 to-blue-800 dark:from-gray-900 dark:to-blue-950 flex items-center justify-center p-4"
  >
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-md w-full p-8">
      <!-- Header -->
      <div class="text-center mb-8">
        <div class="text-5xl mb-3">🧦</div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Create Account</h1>
        <p class="text-gray-600 dark:text-gray-400 mt-2">Join Sharabat today</p>
        <p
          class="mt-3 inline-flex items-center gap-2 text-sm font-medium text-amber-800 dark:text-amber-200 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-full px-3 py-1"
        >
          🧪 Demo mode — no account is actually created, no data is stored
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSignup" class="space-y-4">
        <!-- Full Name -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >Full Name</label
          >
          <input
            id="name"
            v-model="name"
            type="text"
            placeholder="John Doe"
            required
            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
          />
        </div>

        <!-- Email -->
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >Email Address</label
          >
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="you@example.com"
            required
            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
          />
        </div>

        <!-- Password -->
        <div>
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >Password</label
          >
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="••••••••"
            required
            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
          />
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">At least 8 characters</p>
        </div>

        <!-- Confirm Password -->
        <div>
          <label
            for="confirmPassword"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >Confirm Password</label
          >
          <input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            placeholder="••••••••"
            required
            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
          />
        </div>

        <!-- Terms -->
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            v-model="agreeTerms"
            type="checkbox"
            required
            class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700"
          />
          <span class="text-sm text-gray-700 dark:text-gray-300">
            I agree to the
            <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline"
              >Terms of Service</a
            >
            and
            <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>
          </span>
        </label>

        <!-- Submit -->
        <button
          type="submit"
          class="w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition"
        >
          Create Account
        </button>
      </form>

      <!-- Divider -->
      <div class="flex items-center gap-3 my-6">
        <div class="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
        <span class="text-gray-500 dark:text-gray-400 text-sm">Or sign up with</span>
        <div class="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
      </div>

      <!-- Social Signup -->
      <div class="grid grid-cols-2 gap-3">
        <button
          type="button"
          class="px-4 py-3 border border-gray-300 dark:border-gray-600 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition font-medium text-sm"
        >
          Google
        </button>
        <button
          type="button"
          class="px-4 py-3 border border-gray-300 dark:border-gray-600 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition font-medium text-sm"
        >
          GitHub
        </button>
      </div>

      <!-- Footer -->
      <p class="text-center text-gray-600 dark:text-gray-400 mt-6">
        Already have an account?
        <NuxtLink to="/login" class="text-blue-600 dark:text-blue-400 font-bold hover:underline"
          >Sign in</NuxtLink
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCustomToast } from "../../composables/useToast";

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const agreeTerms = ref(false);
const { show } = useCustomToast();

async function handleSignup() {
  if (password.value !== confirmPassword.value) {
    show("Passwords don't match", { type: "error" });
    return;
  }

  // Mock signup - in a real app, this would call an auth API
  await navigateTo("/account");
}
</script>
