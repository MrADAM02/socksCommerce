import type { Product } from "../app/types";

export const products: Product[] = [
  // ── Original 7 (unchanged) ────────────────────────────────────────────────
  {
    id: "1",
    name: "Classic Cotton Crew Socks",
    slug: "classic-cotton-crew",
    price: 12.99,
    description:
      "Comfortable and breathable cotton socks perfect for everyday wear.",
    image:
      "https://plus.unsplash.com/premium_photo-1727286320353-815a792ca2da?w=600&h=600&fit=crop",
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
      "https://images.unsplash.com/photo-1733744237087-603787681bc5?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556821552-5f63b1c00533?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460353581641-c60327a6e09f?w=600&h=600&fit=crop",
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
    description:
      "Moisture-wicking composite fibers optimized for sports and high-intensity gym activities.",
    image:
      "https://images.unsplash.com/photo-1597843797221-e34b4a320b97?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460353581641-c60327a6e09f?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556821552-5f63b1c00533?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544367567-0d6fcffe7f1f?w=600&h=600&fit=crop",
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
    description:
      "Heavyweight insulated weave to keep your feet warm during cold winter weather.",
    image:
      "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556821552-5f63b1c00533?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460353581641-c60327a6e09f?w=600&h=600&fit=crop",
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
    description:
      "Vibrant, geometric patterns made with eco-friendly blends for a striking pop of color.",
    image:
      "https://images.unsplash.com/photo-1562015121-26e207a38da3?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544367567-0d6fcffe7f1f?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460353581641-c60327a6e09f?w=600&h=600&fit=crop",
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
    description:
      "Finely woven material providing a sleek sheen and comfortable fit for formal occasions.",
    image:
      "https://images.unsplash.com/photo-1460353581641-c60327a6e09f?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1460353581641-c60327a6e09f?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556821552-5f63b1c00533?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Silver", "Gold", "Black", "White"],
    category: "premium",
    rating: 4.9,
    inStock: false,
  },
  {
    id: "7",
    name: "Eco-Friendly Cotton Socks",
    slug: "eco-friendly-cotton",
    price: 12.99,
    description:
      "Soft and breathable cotton socks made from eco-friendly materials for a sustainable lifestyle.",
    image:
      "https://plus.unsplash.com/premium_photo-1755164641094-3b00ad813362?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556821552-5f63b1c00533?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460353581641-c60327a6e09f?w=600&h=600&fit=crop",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Green", "Blue", "Black", "White"],
    category: "eco-friendly",
    rating: 4.6,
    inStock: true,
  },

  // ── New 13 products ───────────────────────────────────────────────────────
  {
    id: "8",
    name: "Striped Crew Socks",
    slug: "striped-crew-socks",
    price: 11.99,
    description:
      "Bold blue, white, and yellow stripes that stand out. A casual staple for everyday colour.",
    image:
      "https://images.unsplash.com/photo-1585499583264-491df5142e83?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1566563634870-d566ab58a4df?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&h=600&fit=crop",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blue", "White", "Navy"],
    category: "casual",
    rating: 4.3,
    inStock: true,
  },
  {
    id: "9",
    name: "Forest Green Ankle Socks",
    slug: "forest-green-ankle-socks",
    price: 10.99,
    description:
      "Low-cut ankle socks in rich forest green, perfect for trainers and everyday sneaker wear.",
    image:
      "https://images.unsplash.com/photo-1640026199235-c24aa417b552?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1613151848917-80e67f421fff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589895869111-cab6bf8354c8?w=600&h=600&fit=crop",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Green", "Sage", "Black"],
    category: "casual",
    rating: 4.2,
    inStock: true,
  },
  {
    id: "10",
    name: "Mockup Studio Crew Socks",
    slug: "mockup-studio-crew-socks",
    price: 15.99,
    description:
      "Clean two-tone design in blue and black — minimal style for the modern wardrobe.",
    image:
      "https://images.unsplash.com/photo-1615486364462-ef6363adbc18?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1585499583264-491df5142e83?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1640025867572-f6b3a8410c81?w=600&h=600&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black", "Navy"],
    category: "premium",
    rating: 4.5,
    inStock: true,
  },
  {
    id: "11",
    name: "Sun-Pop Yellow Socks",
    slug: "sun-pop-yellow-socks",
    price: 9.99,
    description:
      "Bright yellow everyday socks that add instant energy to any outfit.",
    image:
      "https://images.unsplash.com/photo-1640025867572-f6b3a8410c81?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1564379976409-79bd0786fff1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566563634870-d566ab58a4df?w=600&h=600&fit=crop",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Natural", "Cream", "White"],
    category: "casual",
    rating: 4.1,
    inStock: true,
  },
  {
    id: "12",
    name: "Nike-Style Sport Socks",
    slug: "nike-style-sport-socks",
    price: 17.99,
    description:
      "Performance sport socks with arch support and cushioned sole for active training sessions.",
    image:
      "https://images.unsplash.com/photo-1631180543602-727e1197619d?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1597843797221-e34b4a320b97?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1730447153639-f559d50a91ec?w=600&h=600&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"],
    category: "sports",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "13",
    name: "Pastel Pop Socks",
    slug: "pastel-pop-socks",
    price: 13.49,
    description:
      "Playful pink and yellow tones for a fun, expressive look that pairs with casual and athleisure outfits.",
    image:
      "https://images.unsplash.com/photo-1564379976409-79bd0786fff1?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1640025867572-f6b3a8410c81?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566563634870-d566ab58a4df?w=600&h=600&fit=crop",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Cream", "Natural", "White"],
    category: "casual",
    rating: 4.3,
    inStock: true,
  },
  {
    id: "14",
    name: "Sneaker No-Show Socks",
    slug: "sneaker-no-show-socks",
    price: 8.99,
    description:
      "Ultra-low cut socks designed to stay hidden inside your favourite sneakers with an anti-slip heel grip.",
    image:
      "https://images.unsplash.com/photo-1730447153639-f559d50a91ec?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504659913281-61817e6e2e9b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631180543602-727e1197619d?w=600&h=600&fit=crop",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"],
    category: "casual",
    rating: 4.4,
    inStock: true,
  },
  {
    id: "15",
    name: "Lounge Bed Socks",
    slug: "lounge-bed-socks",
    price: 11.49,
    description:
      "Soft and lightweight socks ideal for relaxing at home, made for all-day indoor comfort.",
    image:
      "https://images.unsplash.com/photo-1589895869111-cab6bf8354c8?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1613151848917-80e67f421fff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&h=600&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Cream", "Gray"],
    category: "casual",
    rating: 4.5,
    inStock: true,
  },
  {
    id: "16",
    name: "Minimalist Gray Socks",
    slug: "minimalist-gray-socks",
    price: 10.49,
    description:
      "Understated gray ribbed socks crafted from a fine cotton-modal blend for an effortlessly clean look.",
    image:
      "https://images.unsplash.com/photo-1613151848917-80e67f421fff?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1640026199235-c24aa417b552?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589895869111-cab6bf8354c8?w=600&h=600&fit=crop",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Gray", "Black", "White"],
    category: "casual",
    rating: 4.2,
    inStock: true,
  },
  {
    id: "17",
    name: "Autumn Knit Thermal Socks",
    slug: "autumn-knit-thermal-socks",
    price: 16.49,
    description:
      "Chunky knit thermal socks with a warm earthy palette — ideal for layering in boots during cold months.",
    image:
      "https://images.unsplash.com/photo-1632944968588-3ec2870641ce?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1613151848917-80e67f421fff?w=600&h=600&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Brown", "Maroon", "Cream", "Navy"],
    category: "thermal",
    rating: 4.6,
    inStock: true,
  },
  {
    id: "18",
    name: "Birkenstock Companion Socks",
    slug: "birkenstock-companion-socks",
    price: 14.49,
    description:
      "Ribbed mid-length socks cut for sandal-and-sock styling — thick enough for comfort, slim enough to stay put.",
    image:
      "https://images.unsplash.com/photo-1504659913281-61817e6e2e9b?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553460588-3ba256b9aac9?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1640025867572-f6b3a8410c81?w=600&h=600&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray", "Natural"],
    category: "casual",
    rating: 4.0,
    inStock: true,
  },
  {
    id: "19",
    name: "Formal Oxford Dress Socks",
    slug: "formal-oxford-dress-socks",
    price: 19.99,
    description:
      "Slim-ribbed dress socks for suits and formal footwear — fine-gauge knit with a subtle sheen.",
    image:
      "https://images.unsplash.com/photo-1553460588-3ba256b9aac9?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504659913281-61817e6e2e9b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460353581641-c60327a6e09f?w=600&h=600&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Gray", "Silver"],
    category: "premium",
    rating: 4.8,
    inStock: false,
  },
  {
    id: "20",
    name: "Rainbow Festival Socks",
    slug: "rainbow-festival-socks",
    price: 12.49,
    description:
      "A kaleidoscope of colour — mixed-fibre festival socks that express your personality with every step.",
    image:
      "https://images.unsplash.com/photo-1566563634870-d566ab58a4df?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1564379976409-79bd0786fff1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1585499583264-491df5142e83?w=600&h=600&fit=crop",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Natural", "Sage", "Maroon", "Blue", "Red"],
    category: "eco-friendly",
    rating: 4.5,
    inStock: true,
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
