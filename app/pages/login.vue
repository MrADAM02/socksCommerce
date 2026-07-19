<template>
  <div
    class="min-h-screen bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4"
  >
    <div class="bg-white rounded-lg shadow-2xl max-w-md w-full p-8">
      <!-- Header -->
      <div class="text-center mb-8">
        <div class="text-5xl mb-3">🧦</div>
        <h1 class="text-3xl font-bold text-gray-900">Sign In</h1>
        <p class="text-gray-600 mt-2">Welcome back to Sharabat</p>
        <p
          class="mt-3 inline-flex items-center gap-2 text-sm font-medium text-amber-800 bg-amber-50 border border-amber-200 rounded-full px-3 py-1"
        >
          🧪 Demo mode — no real authentication, any credentials will "sign
          you in"
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="space-y-5">
        <!-- Email -->
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Email Address</label
          >
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="you@example.com"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
          />
        </div>

        <!-- Password -->
        <div>
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Password</label
          >
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="••••••••"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
          />
        </div>

        <!-- Remember Me -->
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            v-model="rememberMe"
            type="checkbox"
            class="rounded border-gray-300"
          />
          <span class="text-sm text-gray-700">Remember me</span>
        </label>

        <!-- Submit -->
        <button
          type="submit"
          class="w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      </form>

      <!-- Divider -->
      <div class="flex items-center gap-3 my-6">
        <div class="flex-1 border-t border-gray-300"></div>
        <span class="text-gray-500 text-sm">Or continue with</span>
        <div class="flex-1 border-t border-gray-300"></div>
      </div>

      <!-- Social Login -->
      <div class="grid grid-cols-2 gap-3">
        <button
          class="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-sm"
        >
          Google
        </button>
        <button
          class="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-sm"
        >
          GitHub
        </button>
      </div>

      <!-- Footer -->
      <p class="text-center text-gray-600 mt-6">
        Don't have an account?
        <NuxtLink to="/signup" class="text-blue-600 font-bold hover:underline"
          >Sign up</NuxtLink
        >
      </p>

      <p class="text-center text-sm text-gray-500 mt-4">
        <a href="#" class="hover:text-blue-600 transition"
          >Forgot your password?</a
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref("");
const password = ref("");
const rememberMe = ref(false);
const router = useRouter();

async function handleLogin() {
  // Mock login - in a real app, this would call an auth API
  console.log("Login attempt:", {
    email: email.value,
    password: password.value,
  });

  // For now, just redirect to dashboard
  // In production, you'd validate credentials and set auth token
  await navigateTo("/account");
}
</script>
