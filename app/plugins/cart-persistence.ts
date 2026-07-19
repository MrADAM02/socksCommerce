export default defineNuxtPlugin(() => {
  // Deferred until after hydration: loading persisted state beforehand makes
  // the initial client render diverge from the SSR markup (e.g. cart badge
  // count), and Vue's hydration mismatch handling is check-only — it warns
  // but won't patch the DOM.
  onNuxtReady(() => {
    const cartStore = useCartStore();
    cartStore.loadFromLocalStorage();
  });
})
