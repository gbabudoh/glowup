// data/products.js

// Category icons and colors
export const categories = [
  { name: "makeup", icon: "💄", color: "bg-pink-100" },
  { name: "lipstick", icon: "💋", color: "bg-red-100" },
  { name: "nail polish", icon: "💅", color: "bg-purple-100" },
  { name: "face cream", icon: "🧴", color: "bg-blue-100" }
];

// Enhanced product data
export const products = [
  {
    id: 1,
    name: "Velvet Matte Lipstick",
    description: "Long-lasting, moisturizing matte finish that doesn't dry out your lips. This premium formula glides on smoothly and stays put for up to 8 hours.",
    price: "$18.99",
    originalPrice: "$24.99",
    discount: 24,
    category: "lipstick",
    tags: ["matte", "long-lasting", "moisturizing"],
    image: "/images/Velvet-Matte-Lipstick.jpg", // Replace with actual image path
    affLink: "https://example.com/affiliate/velvet-matte-lipstick",
    rating: 4.7,
    reviewCount: 128,
    brand: "GlamCosmetics",
    features: [
      "8-hour wear", 
      "No transfer formula", 
      "Vitamin E enriched",
      "Cruelty-free and vegan"
    ],
    colors: [
      { name: "Ruby Red", code: "#b91c1c" },
      { name: "Coral Pink", code: "#f43f5e" },
      { name: "Dusty Rose", code: "#be185d" }
    ],
    popularity: 92, // Percentile rank of popularity
    isNew: false,
    isBestSeller: true
  },
  {
    id: 2,
    name: "24H Foundation",
    description: "Full coverage with natural finish that lasts all day. This lightweight foundation provides flawless coverage while letting your skin breathe.",
    price: "$24.99",
    originalPrice: "$29.99",
    discount: 17,
    category: "makeup",
    tags: ["foundation", "full-coverage", "long-lasting"],
    image: "/images/24H-Foundation.jpg", // Replace with actual image path
    affLink: "https://example.com/affiliate/24h-foundation",
    rating: 4.5,
    reviewCount: 203,
    brand: "BeautyBase",
    features: [
      "24-hour wear", 
      "SPF 25 protection", 
      "Oil-free formula",
      "Non-comedogenic"
    ],
    colors: [
      { name: "Ivory", code: "#f8efe6" },
      { name: "Beige", code: "#e8d0b0" },
      { name: "Tan", code: "#c19a6b" },
      { name: "Deep", code: "#6b4226" }
    ],
    popularity: 88,
    isNew: false,
    isBestSeller: true
  },
  {
    id: 3,
    name: "Quick Dry Nail Polish",
    description: "Chip-resistant formula, dries in 60 seconds. Get salon-quality nails at home with this ultra-fast drying, high-shine formula.",
    price: "$9.99",
    originalPrice: null,
    discount: null,
    category: "nail polish",
    tags: ["quick-dry", "chip-resistant", "glossy"],
    image: "/images/Quick-Dry-Nail-Polish.jpg", // Replace with actual image path
    affLink: "https://example.com/affiliate/quick-dry-nail-polish",
    rating: 4.2,
    reviewCount: 87,
    brand: "NailPro",
    features: [
      "Dries in 60 seconds", 
      "Up to 7 days chip-free wear", 
      "High-shine finish",
      "5-free formula (no harmful chemicals)"
    ],
    colors: [
      { name: "Cherry Red", code: "#c71f37" },
      { name: "Ballet Pink", code: "#f7cee0" },
      { name: "Midnight Blue", code: "#0c1b33" }
    ],
    popularity: 78,
    isNew: true,
    isBestSeller: false
  },
  {
    id: 4,
    name: "Hydrating Face Cream",
    description: "24-hour moisture with vitamin E. This rich but non-greasy formula provides deep hydration and helps improve skin elasticity over time.",
    price: "$29.99",
    originalPrice: "$34.99",
    discount: 14,
    category: "face cream",
    tags: ["hydrating", "anti-aging", "vitamin-e"],
    image: "/images/Hydrating-Face-Cream.jpg", // Replace with actual image path
    affLink: "https://example.com/affiliate/hydrating-face-cream",
    rating: 4.8,
    reviewCount: 175,
    brand: "SkinRevive",
    features: [
      "24-hour hydration", 
      "Contains hyaluronic acid", 
      "Fragrance-free",
      "Suitable for sensitive skin"
    ],
    colors: [],
    popularity: 95,
    isNew: false,
    isBestSeller: true
  },
  {
    id: 5,
    name: "Glitter Eyeshadow Palette",
    description: "10 highly pigmented shimmering shades that create stunning eye looks from subtle sparkle to bold glam. Long-wearing formula stays vibrant all day.",
    price: "$32.99",
    originalPrice: null,
    discount: null,
    category: "makeup",
    tags: ["eyeshadow", "glitter", "palette"],
    image: "/images/Glitter-Eyeshadow-Palette.jpg", // Replace with actual image path
    affLink: "https://example.com/affiliate/glitter-eyeshadow",
    rating: 4.4,
    reviewCount: 112,
    brand: "ShimmerGlow",
    features: [
      "10 shimmering shades", 
      "Highly pigmented", 
      "Minimal fallout",
      "Blendable formula"
    ],
    colors: [],
    popularity: 82,
    isNew: true,
    isBestSeller: false
  },
  {
    id: 6,
    name: "Gel Effect Nail Polish",
    description: "No UV lamp needed, salon-like finish that lasts up to 10 days. This innovative formula gives you the look of gel nails without the salon visit.",
    price: "$12.99",
    originalPrice: "$15.99",
    discount: 19,
    category: "nail polish",
    tags: ["gel", "long-lasting", "high-shine"],
    image: "/images/Gel-Effect-Nail-Polish.jpg", // Replace with actual image path
    affLink: "https://example.com/affiliate/gel-effect-polish",
    rating: 4.6,
    reviewCount: 94,
    brand: "NailPro",
    features: [
      "Gel-like finish", 
      "No UV lamp needed", 
      "Up to 10 days wear",
      "Easy removal"
    ],
    colors: [
      { name: "Petal Pink", code: "#fed2e6" },
      { name: "Ruby", code: "#9c0e2c" },
      { name: "Mauve", code: "#76697a" },
      { name: "Clear", code: "#ffffff" }
    ],
    popularity: 86,
    isNew: false,
    isBestSeller: false
  },
  {
    id: 7,
    name: "Plumping Lip Gloss",
    description: "Volumizing effect with hydrating formula that makes lips appear fuller and smoother. Subtle tingling sensation indicates the plumping effect.",
    price: "$15.99",
    originalPrice: null,
    discount: null,
    category: "lipstick",
    tags: ["plumping", "gloss", "hydrating"],
    image: "/images/Plumping-Lip-Gloss.jpg", // Replace with actual image path
    affLink: "https://example.com/affiliate/plumping-lip-gloss",
    rating: 4.3,
    reviewCount: 78,
    brand: "GlamCosmetics",
    features: [
      "Instant plumping effect", 
      "Hydrating formula", 
      "Non-sticky finish",
      "Peptide complex"
    ],
    colors: [
      { name: "Clear Shine", code: "#f5f5f5" },
      { name: "Peachy Glow", code: "#ffcba4" },
      { name: "Pink Shimmer", code: "#feb1dd" }
    ],
    popularity: 79,
    isNew: true,
    isBestSeller: false
  },
  {
    id: 8,
    name: "Anti-Aging Night Cream",
    description: "Rejuvenating formula with retinol that works overnight to reduce fine lines and improve skin texture. Wake up to visibly refreshed, younger-looking skin.",
    price: "$39.99",
    originalPrice: "$49.99",
    discount: 20,
    category: "face cream",
    tags: ["anti-aging", "retinol", "night-cream"],
    image: "/images/Anti-Aging-Night-Cream.jpg", // Replace with actual image path
    affLink: "https://example.com/affiliate/anti-aging-cream",
    rating: 4.7,
    reviewCount: 156,
    brand: "SkinRevive",
    features: [
      "Contains retinol", 
      "Reduces fine lines", 
      "Improves skin texture",
      "Antioxidant-rich formula"
    ],
    colors: [],
    popularity: 90,
    isNew: false,
    isBestSeller: true
  }
];