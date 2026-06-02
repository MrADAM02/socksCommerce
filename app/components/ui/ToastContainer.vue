<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="[
        'min-w-55 max-w-sm p-3 rounded-lg shadow-lg text-sm',
        toast.type === 'success'
          ? 'bg-green-600 text-white'
          : toast.type === 'error'
            ? 'bg-red-600 text-white'
            : 'bg-gray-800 text-white',
      ]"
    >
      {{ toast.message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCustomToast } from "../../../composables/useToast";
const { toasts } = useCustomToast();
</script>
