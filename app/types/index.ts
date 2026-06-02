export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  image: string;
  images?: string[];
  sizes: string[];
  colors: string[];
  category: string;
  rating: number;
  inStock: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
  size: string;
  color: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered";
  createdAt: string;
}
