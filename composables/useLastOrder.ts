export interface LastOrderItem {
  productId: string;
  name: string;
  image: string;
  size: string;
  color: string;
  quantity: number;
  subtotal: number;
}

export interface LastOrder {
  orderNumber: string;
  email: string;
  shipping: {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
  };
  items: LastOrderItem[];
  subtotal: number;
  shippingPrice: number;
  tax: number;
  total: number;
}

export function useLastOrder() {
  return useState<LastOrder | null>("lastOrder", () => null);
}

export function generateOrderNumber(): string {
  return Math.floor(100000000 + Math.random() * 900000000).toString();
}
