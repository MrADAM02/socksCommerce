export default defineNuxtPlugin(() => {
  // See cart-persistence.ts: deferred to avoid a hydration mismatch between
  // the SSR-rendered (empty) state and the persisted client state.
  onNuxtReady(() => {
    const wishlistStore = useWishlistStore();
    wishlistStore.loadFromLocalStorage();
  });
});
