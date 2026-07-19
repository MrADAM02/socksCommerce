<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <!-- Header -->
    <div
      class="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Get in Touch
        </h1>
        <p class="text-gray-500 dark:text-gray-400">
          We'd love to hear from you. Send us a message and we'll respond within
          24 hours.
        </p>
      </div>
    </div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-2 gap-10">
        <!-- Contact form -->
        <div
          class="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-7"
        >
          <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-5">
            Send a message
          </h2>

          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                >Name</label
              >
              <input
                v-model="form.name"
                type="text"
                required
                placeholder="Your name"
                class="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                >Email</label
              >
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="you@example.com"
                class="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                >Subject</label
              >
              <select
                v-model="form.subject"
                class="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="order">Order question</option>
                <option value="returns">Returns &amp; exchanges</option>
                <option value="product">Product question</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                >Message</label
              >
              <textarea
                v-model="form.message"
                required
                rows="5"
                placeholder="How can we help?"
                class="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? "Sending…" : "Send Message" }}
            </button>

            <p
              v-if="submitted"
              class="text-sm text-green-600 dark:text-green-400 font-medium text-center"
            >
              ✓ Message sent! We'll be in touch soon.
            </p>
          </form>
        </div>

        <!-- Contact info -->
        <div class="space-y-4">
          <div
            v-for="info in contactInfo"
            :key="info.title"
            class="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 flex items-start gap-4"
          >
            <div class="text-2xl">{{ info.emoji }}</div>
            <div>
              <h3
                class="font-semibold text-gray-900 dark:text-white text-sm mb-1"
              >
                {{ info.title }}
              </h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ info.detail }}
              </p>
            </div>
          </div>

          <!-- FAQ teaser -->
          <div
            class="bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800 p-6"
          >
            <h3
              class="font-semibold text-gray-900 dark:text-white text-sm mb-1.5"
            >
              Looking for quick answers?
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Check our shipping, returns, and sizing info before reaching out —
              you might find what you need right away.
            </p>
            <NuxtLink
              to="/products"
              class="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Browse Products →
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Contact — Sharabat",
  description:
    "Get in touch with the Sharabat team for order questions, returns, or general inquiries.",
});

const form = reactive({
  name: "",
  email: "",
  subject: "order",
  message: "",
});

const isSubmitting = ref(false);
const submitted = ref(false);

const contactInfo = [
  { emoji: "✉️", title: "Email", detail: "support@sockscommerce.com" },
  {
    emoji: "📞",
    title: "Phone",
    detail: "+1 (555) 123-4567 — Mon–Fri, 9am–6pm",
  },
  {
    emoji: "📍",
    title: "Address",
    detail: "123 Comfort Lane, Portland, OR 97201",
  },
];

async function submitForm() {
  isSubmitting.value = true;
  // Simulate request — replace with real API call when ready
  await new Promise((resolve) => setTimeout(resolve, 800));
  isSubmitting.value = false;
  submitted.value = true;
  form.name = "";
  form.email = "";
  form.subject = "order";
  form.message = "";
}
</script>
