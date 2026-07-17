<template>
  <div
    class="min-h-screen bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4"
  >
    <div class="bg-white rounded-lg shadow-2xl max-w-md w-full p-8">
      <!-- Header -->
      <div class="text-center mb-8">
        <div class="text-5xl mb-3">🧦</div>
        <h1 class="text-3xl font-bold text-gray-900">Create Account</h1>
        <p class="text-gray-600 mt-2">Join SocksCommerce today</p>
        <p
          class="mt-3 inline-flex items-center gap-2 text-sm font-medium text-amber-800 bg-amber-50 border border-amber-200 rounded-full px-3 py-1"
        >
          🧪 Demo mode — no account is actually created, no data is stored
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSignup" class="space-y-4">
        <!-- Full Name -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-2"
            >Full Name</label
          >
          <input
            id="name"
            v-model="name"
            type="text"
            placeholder="John Doe"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
          />
        </div>

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
          <p class="text-xs text-gray-600 mt-1">At least 8 characters</p>
        </div>

        <!-- Confirm Password -->
        <div>
          <label
            for="confirmPassword"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Confirm Password</label
          >
          <input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            placeholder="••••••••"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
          />
        </div>

        <!-- Terms -->
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            v-model="agreeTerms"
            type="checkbox"
            required
            class="rounded border-gray-300"
          />
          <span class="text-sm text-gray-700">
            I agree to the
            <a href="#" class="text-blue-600 hover:underline"
              >Terms of Service</a
            >
            and
            <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a>
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
        <div class="flex-1 border-t border-gray-300"></div>
        <span class="text-gray-500 text-sm">Or sign up with</span>
        <div class="flex-1 border-t border-gray-300"></div>
      </div>

      <!-- Social Signup -->
      <div class="grid grid-cols-2 gap-3">
        <button
          type="button"
          class="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-sm"
        >
          Google
        </button>
        <button
          type="button"
          class="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-sm"
        >
          GitHub
        </button>
      </div>

      <!-- Footer -->
      <p class="text-center text-gray-600 mt-6">
        Already have an account?
        <NuxtLink to="/login" class="text-blue-600 font-bold hover:underline"
          >Sign in</NuxtLink
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const agreeTerms = ref(false);
const router = useRouter();

async function handleSignup() {
  if (password.value !== confirmPassword.value) {
    alert("Passwords don't match");
    return;
  }

  console.log("Signup attempt:", { name: name.value, email: email.value });

  // Mock signup - in a real app, this would call an auth API
  await navigateTo("/account");
}
</script>
