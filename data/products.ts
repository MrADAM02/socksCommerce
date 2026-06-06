import type { Product } from "~/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Cotton Crew Socks",
    slug: "classic-cotton-crew",
    price: 12.99,
    description:
      "Comfortable and breathable cotton socks perfect for everyday wear.",
    image:
      "https://images.unsplash.com/photo-1598157816617-1b9bfe22e49f?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1598157816617-1b9bfe22e49f?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1587427014950-e477dd90f9c4?w=500&h=500&fit=crop",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray", "Navy"],
    category: "casual",
    rating: 4.5,
    inStock: true,
  },
  {
    id: "2",
    name: "Wool Hiking Socks",
    slug: "wool-hiking-socks",
    price: 18.99,
    description:
      "Durable wool socks designed for outdoor adventures and hiking.",
    image:
      "https://images.unsplash.com/photo-1595348046389-54ace5c1d0c5?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595348046389-54ace5c1d0c5?w=500&h=500&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Brown", "Green", "Gray", "Black"],
    category: "outdoor",
    rating: 4.8,
    inStock: true,
  },
  {
    id: "3",
    name: "Athletic Performance Socks",
    slug: "athletic-performance-socks",
    price: 16.99,
    description: "Moisture-wicking socks for sports and gym activities.",
    image:
      "https://images.unsplash.com/photo-1577222020803-bb0ff6d8e21a?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1577222020803-bb0ff6d8e21a?w=500&h=500&fit=crop",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Blue", "Red"],
    category: "sports",
    rating: 4.6,
    inStock: true,
  },
  {
    id: "4",
    name: "Cozy Thermal Socks",
    slug: "cozy-thermal-socks",
    price: 14.99,
    description: "Insulated socks to keep your feet warm during cold weather.",
    image:
      "https://images.unsplash.com/photo-1614707267537-b85fab00c77b?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1614707267537-b85fab00c77b?w=500&h=500&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Maroon", "Navy", "Black", "Cream"],
    category: "thermal",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "5",
    name: "Bamboo Eco Socks",
    slug: "bamboo-eco-socks",
    price: 13.99,
    description: "Sustainable bamboo socks that are eco-friendly and soft.",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Natural", "Black", "Gray", "Sage"],
    category: "eco-friendly",
    rating: 4.4,
    inStock: true,
  },
  {
    id: "6",
    name: "Premium Silk Socks",
    slug: "premium-silk-socks",
    price: 24.99,
    description: "Luxurious silk socks for a touch of elegance and comfort.",
    image:
      "https://images.unsplash.com/photo-1540268549336-e6e99c3679fe?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1540268549336-e6e99c3679fe?w=500&h=500&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Silver", "Gold", "Black", "White"],
    category: "premium",
    rating: 4.9,
    inStock: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function filterProducts(
  category?: string,
  minPrice?: number,
  maxPrice?: number,
  colors?: string[],
  sizes?: string[],
): Product[] {
  return products.filter((product) => {
    if (category && product.category !== category) return false;
    if (minPrice && product.price < minPrice) return false;
    if (maxPrice && product.price > maxPrice) return false;
    if (
      colors &&
      colors.length > 0 &&
      !colors.some((c) => product.colors.includes(c))
    )
      return false;
    if (
      sizes &&
      sizes.length > 0 &&
      !sizes.some((s) => product.sizes.includes(s))
    )
      return false;
    return true;
  });
}
