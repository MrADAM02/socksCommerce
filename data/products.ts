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
      "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&h=600&fit=crop",
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
      "Durable wool socks designed for outdoor adventures and hiking trails.",
    image:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&h=600&fit=crop",
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
    description: "Moisture-wicking composite fibers optimized for sports and high-intensity gym activities.",
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&h=600&fit=crop",
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
    description: "Heavyweight insulated weave to keep your feet warm during cold winter weather.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&h=600&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Maroon", "Navy", "Black", "Cream"],
    category: "thermal",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "5",
    name: "Retro Patterned Socks",
    slug: "retro-patterned-socks",
    price: 13.99,
    description: "Vibrant, geometric patterns made with eco-friendly blends for a striking pop of color.",
    image:
      "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=600&h=600&fit=crop",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Natural", "Black", "Gray", "Sage"],
    category: "eco-friendly",
    rating: 4.4,
    inStock: true,
  },
  {
    id: "6",
    name: "Premium Luxury Dress Socks",
    slug: "premium-luxury-dress",
    price: 24.99,
    description: "Finely woven material providing a sleek sheen and comfortable fit for formal occasions.",
    image:
      "https://images.unsplash.com/photo-1611106211090-8f3c79ee8552?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611106211090-8f3c79ee8552?w=600&h=600&fit=crop",
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