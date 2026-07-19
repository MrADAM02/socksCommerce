<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <!-- Hero -->
    <section
      class="bg-linear-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20"
    >
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          About Sharabat
        </h1>
        <p class="text-lg text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
          We believe the smallest piece of your outfit deserves the most
          thought. Since day one, we've been obsessed with making socks that
          feel as good as they look.
        </p>
      </div>
    </section>

    <!-- Story -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              class="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-2"
            >
              Our story
            </p>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Built from the ground up
            </h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Sharabat started with a simple frustration: most socks are an
              afterthought — thin, itchy, and built to wear out fast. We set out
              to change that by sourcing premium materials and obsessing over
              fit, durability, and comfort.
            </p>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Today we offer over 20 styles across casual, athletic, thermal,
              and eco-friendly lines — every pair tested by people who actually
              wear them every day.
            </p>
          </div>
          <div class="flex justify-center">
            <div
              class="w-56 h-56 bg-blue-50 dark:bg-gray-800 rounded-3xl flex items-center justify-center border border-blue-100 dark:border-gray-700"
            >
              <span class="text-[100px]">🧦</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section
      class="py-16 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <p
            class="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-2"
          >
            What we stand for
          </p>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
            Our values
          </h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div
            v-for="value in values"
            :key="value.title"
            class="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 text-center"
          >
            <div class="text-3xl mb-3">{{ value.emoji }}</div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
              {{ value.title }}
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-gray-50 dark:bg-gray-950">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Ready to find your pair?
        </h2>
        <p class="text-gray-500 dark:text-gray-400 mb-6">
          Browse the full collection and discover your new favourite socks.
        </p>
        <NuxtLink
          to="/products"
          class="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition text-sm"
          >Shop the Collection →</NuxtLink
        >
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "About — Sharabat",
  description:
    "Learn about Sharabat's story, mission, and the values behind every pair of socks we make.",
});

const values = [
  {
    emoji: "🧵",
    title: "Quality first",
    description:
      "We source premium materials and test every style for comfort and durability.",
  },
  {
    emoji: "🌍",
    title: "Sustainability",
    description:
      "Our eco-friendly line uses organic and recycled fibres wherever possible.",
  },
  {
    emoji: "❤️",
    title: "Customer obsessed",
    description:
      "Free returns, real support, and a comfort guarantee on every order.",
  },
];
</script>
