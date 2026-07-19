import { defineStore } from "pinia";
import { products } from "../../data/products";

interface WishlistState {
  productIds: string[];
}

export const useWishlistStore = defineStore("wishlist", {
  state: (): WishlistState => ({
    productIds: [],
  }),

  getters: {
    count: (state) => state.productIds.length,

    items: (state) =>
      state.productIds
        .map((id) => products.find((p) => p.id === id))
        .filter((p): p is (typeof products)[number] => Boolean(p)),
  },

  actions: {
    isWishlisted(productId: string) {
      return this.productIds.includes(productId);
    },

    toggleWishlist(productId: string) {
      const idx = this.productIds.indexOf(productId);
      if (idx === -1) {
        this.productIds.push(productId);
      } else {
        this.productIds.splice(idx, 1);
      }
      this.saveToLocalStorage();
      return idx === -1;
    },

    loadFromLocalStorage() {
      if (import.meta.client) {
        const stored = localStorage.getItem("wishlist");
        if (stored) {
          try {
            const data = JSON.parse(stored);
            this.productIds = data.productIds || [];
          } catch (error) {
            console.error("Failed to load wishlist from localStorage:", error);
          }
        }
      }
    },

    saveToLocalStorage() {
      if (import.meta.client) {
        localStorage.setItem(
          "wishlist",
          JSON.stringify({ productIds: this.productIds }),
        );
      }
    },
  },
});
