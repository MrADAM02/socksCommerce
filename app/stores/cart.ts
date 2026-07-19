import { defineStore } from "pinia";
import type { CartItem, Product } from "~/types";
import { products } from "../../data/products";

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

export const useCartStore = defineStore("cart", {
  state: (): CartState => ({
    items: [],
    isOpen: false,
  }),

  getters: {
    totalItems: (state) =>
      state.items.reduce((total, item) => total + item.quantity, 0),

    totalPrice: (state) => {
      return state.items.reduce((total, item) => {
        const product = products.find((p) => p.id === item.productId);
        return total + (product?.price || 0) * item.quantity;
      }, 0);
    },

    itemCount: (state) => state.items.length,

    cartItems: (state) => {
      return state.items.map((item) => ({
        ...item,
        product: products.find((p) => p.id === item.productId),
        subtotal:
          (products.find((p) => p.id === item.productId)?.price || 0) *
          item.quantity,
      }));
    },
  },

  actions: {
    addToCart(product: Product, quantity: number, size: string, color: string) {
      const existingItem = this.items.find(
        (item) =>
          item.productId === product.id &&
          item.size === size &&
          item.color === color,
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({
          productId: product.id,
          quantity,
          size,
          color,
        });
      }
      this.saveToLocalStorage();
    },

    removeFromCart(productId: string, size: string, color: string) {
      this.items = this.items.filter(
        (item) =>
          !(
            item.productId === productId &&
            item.size === size &&
            item.color === color
          ),
      );
      this.saveToLocalStorage();
    },

    updateQuantity(
      productId: string,
      size: string,
      color: string,
      quantity: number,
    ) {
      const item = this.items.find(
        (item) =>
          item.productId === productId &&
          item.size === size &&
          item.color === color,
      );
      if (item) {
        if (quantity <= 0) {
          this.removeFromCart(productId, size, color);
        } else {
          item.quantity = quantity;
          this.saveToLocalStorage();
        }
      }
    },

    clearCart() {
      this.items = [];
      this.saveToLocalStorage();
    },

    toggleDrawer() {
      this.isOpen = !this.isOpen;
    },

    openDrawer() {
      this.isOpen = true;
    },

    closeDrawer() {
      this.isOpen = false;
    },

    loadFromLocalStorage() {
      if (import.meta.client) {
        const stored = localStorage.getItem("cart");
        if (stored) {
          try {
            const data = JSON.parse(stored);
            this.items = data.items || [];
          } catch (error) {
            console.error("Failed to load cart from localStorage:", error);
          }
        }
      }
    },

    saveToLocalStorage() {
      if (import.meta.client) {
        localStorage.setItem("cart", JSON.stringify({ items: this.items }));
      }
    },
  },
});
