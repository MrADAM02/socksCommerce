<template>
  <div
    class="fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2.5 items-stretch sm:items-end"
    aria-live="polite"
    aria-atomic="true"
  >
    <TransitionGroup name="toast">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        role="status"
        class="w-full sm:w-auto sm:min-w-[320px] sm:max-w-sm flex items-start gap-3 p-3.5 rounded-2xl shadow-lg backdrop-blur-sm text-sm border"
        :class="toastStyles[toast.type]"
        @mouseenter="pauseTimer(toast.id)"
        @mouseleave="resumeTimer(toast.id)"
      >
        <!-- Icon -->
        <span class="text-base leading-none mt-0.5 shrink-0">{{
          icons[toast.type]
        }}</span>

        <!-- Message -->
        <p class="flex-1 leading-snug font-medium pt-0.5">
          {{ toast.message }}
        </p>

        <!-- Dismiss -->
        <button
          @click="dismiss(toast.id)"
          class="shrink-0 w-5 h-5 rounded-full flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition leading-none"
          :aria-label="`Dismiss: ${toast.message}`"
        >
          <span class="text-xs">✕</span>
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { useCustomToast, type ToastType } from "../../../composables/useToast";

const { toasts, dismiss, pauseTimer, resumeTimer } = useCustomToast();

const toastStyles: Record<ToastType, string> = {
  success:
    "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800",
  error:
    "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border-red-200 dark:border-red-800",
  info: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-700",
};

const icons: Record<ToastType, string> = {
  success: "✓",
  error: "✕",
  info: "ℹ",
};
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.toast-enter-from {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(8px) scale(0.95);
}
.toast-move {
  transition: transform 0.25s ease;
}
</style>
