import productBag from "@/assets/product-bag.jpg";
import productJewelry from "@/assets/product-jewelry.jpg";
import productScarf from "@/assets/product-scarf.jpg";
import productShoes from "@/assets/product-shoes.jpg";
import productBag2 from "@/assets/product-bag-2.jpg";
import productBracelet from "@/assets/product-bracelet.jpg";
import productBlazer from "@/assets/product-blazer.jpg";
import productDress from "@/assets/product-dress.jpg";
import productBelt from "@/assets/product-belt.jpg";
import productHeels from "@/assets/product-heels.jpg";
import productWallet from "@/assets/product-wallet.jpg";
import productCoat from "@/assets/product-coat.jpg";
import productWatch from "@/assets/product-watch.jpg";
import productBlouse from "@/assets/product-blouse.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  gender: "men" | "women" | "unisex";
  image: string;
  images?: string[];
  sizes?: string[];
  colors?: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  // Women's Collection
  {
    id: "noir-leather-tote",
    name: "Noir Leather Tote",
    description: "Handcrafted from the finest Italian leather, the Noir Tote embodies timeless sophistication. Its minimalist silhouette and impeccable construction make it the perfect companion for the modern individual.",
    price: 1890,
    category: "Bags",
    gender: "women",
    image: productBag,
    images: [productBag, productBag2],
    sizes: ["One Size"],
    colors: ["Noir", "Cognac", "Ivory"],
    isNew: true,
  },
  {
    id: "lumiere-pearl-necklace",
    name: "Lumière Pearl Necklace",
    description: "Freshwater pearls intertwined with 18k gold, creating a piece that captures light with every movement. A celebration of understated elegance.",
    price: 2450,
    category: "Jewelry",
    gender: "women",
    image: productJewelry,
    images: [productJewelry, productBracelet],
    colors: ["Gold/Pearl", "Rose Gold/Pearl"],
    isBestSeller: true,
  },
  {
    id: "heritage-cashmere-scarf",
    name: "Heritage Cashmere Scarf",
    description: "Woven from Grade A Mongolian cashmere, this scarf offers unparalleled softness and warmth. A staple piece that transcends seasons.",
    price: 580,
    category: "Accessories",
    gender: "unisex",
    image: productScarf,
    images: [productScarf],
    colors: ["Noir", "Camel", "Ivory", "Burgundy"],
    isNew: true,
  },
  {
    id: "elysee-silk-dress",
    name: "Élysée Silk Evening Dress",
    description: "A flowing silhouette crafted from pure silk charmeuse. This gown captures the essence of Parisian elegance with its subtle draping and luminous finish.",
    price: 3250,
    category: "Ready-to-Wear",
    gender: "women",
    image: productDress,
    images: [productDress, productBlouse],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Champagne", "Noir", "Ivory"],
    isNew: true,
  },
  {
    id: "grace-stiletto-pumps",
    name: "Grace Stiletto Pumps",
    description: "Hand-finished in our Florentine atelier, these pumps feature a sculpted heel and supple nappa leather. The epitome of feminine refinement.",
    price: 1450,
    category: "Footwear",
    gender: "women",
    image: productHeels,
    images: [productHeels],
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Nude", "Noir", "Burgundy"],
    isBestSeller: true,
  },
  {
    id: "aurora-diamond-bracelet",
    name: "Aurora Diamond Bracelet",
    description: "Pavé-set diamonds embrace the wrist in an eternal dance of light. Each stone is hand-selected for its exceptional clarity and brilliance.",
    price: 4850,
    category: "Jewelry",
    gender: "women",
    image: productBracelet,
    images: [productBracelet, productJewelry],
    colors: ["White Gold", "Yellow Gold", "Rose Gold"],
  },
  {
    id: "cherie-crossbody",
    name: "Chérie Crossbody Bag",
    description: "Compact yet capacious, the Chérie features our signature gold clasp and adjustable chain strap. Perfect for day-to-evening transitions.",
    price: 1680,
    category: "Bags",
    gender: "women",
    image: productBag2,
    images: [productBag2, productBag],
    colors: ["Noir", "Burgundy", "Forest Green"],
  },
  {
    id: "provence-cashmere-coat",
    name: "Provence Cashmere Coat",
    description: "Double-faced cashmere in a timeless silhouette. Unlined for a fluid drape, this coat represents the pinnacle of effortless luxury.",
    price: 4200,
    category: "Ready-to-Wear",
    gender: "women",
    image: productCoat,
    images: [productCoat],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Camel", "Noir", "Ivory"],
    isBestSeller: true,
  },
  {
    id: "belle-silk-blouse",
    name: "Belle Silk Blouse",
    description: "Crafted from fluid silk crêpe de chine, this blouse features a relaxed silhouette with mother-of-pearl buttons. An investment in everyday elegance.",
    price: 890,
    category: "Ready-to-Wear",
    gender: "women",
    image: productBlouse,
    images: [productBlouse],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Ivory", "Noir", "Powder Pink"],
  },
  // Men's Collection
  {
    id: "artisan-oxford-shoes",
    name: "Artisan Oxford Shoes",
    description: "Meticulously crafted by master artisans in Florence, these oxfords feature hand-burnished leather and Blake stitching for exceptional durability and comfort.",
    price: 1250,
    category: "Footwear",
    gender: "men",
    image: productShoes,
    images: [productShoes],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: ["Burgundy", "Noir", "Cognac"],
  },
  {
    id: "maison-wool-blazer",
    name: "Maison Wool Blazer",
    description: "Tailored from Super 150s wool in our Parisian atelier. Half-canvas construction ensures a perfect drape while maintaining structural integrity.",
    price: 2450,
    category: "Ready-to-Wear",
    gender: "men",
    image: productBlazer,
    images: [productBlazer],
    sizes: ["46", "48", "50", "52", "54", "56"],
    colors: ["Navy", "Charcoal", "Noir"],
    isNew: true,
  },
  {
    id: "signature-leather-belt",
    name: "Signature Leather Belt",
    description: "Full-grain leather with our iconic gold buckle. Reversible design offers versatility, while the hand-stitched edges speak to our commitment to craft.",
    price: 450,
    category: "Accessories",
    gender: "men",
    image: productBelt,
    images: [productBelt],
    sizes: ["85", "90", "95", "100", "105", "110"],
    colors: ["Noir/Cognac", "Navy/Burgundy"],
    isBestSeller: true,
  },
  {
    id: "heritage-leather-wallet",
    name: "Heritage Leather Wallet",
    description: "Hand-stitched from vegetable-tanned leather that develops a rich patina over time. Eight card slots and a bill compartment.",
    price: 520,
    category: "Accessories",
    gender: "men",
    image: productWallet,
    images: [productWallet],
    colors: ["Noir", "Cognac", "Burgundy"],
  },
  {
    id: "chronographe-watch",
    name: "Chronographe Timepiece",
    description: "Swiss movement housed in a 40mm rose gold case. Alligator leather strap hand-stitched in our Geneva atelier. Limited edition of 500 pieces.",
    price: 8500,
    category: "Accessories",
    gender: "men",
    image: productWatch,
    images: [productWatch],
    colors: ["Rose Gold/Brown", "White Gold/Black"],
    isNew: true,
  },
];

export const categories = [
  "All",
  "Bags",
  "Jewelry",
  "Accessories",
  "Footwear",
  "Ready-to-Wear",
];

export const genderFilters = ["All", "Women", "Men"];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter((product) => product.category === category);
}

export function getProductsByGender(gender: string): Product[] {
  if (gender === "All") return products;
  const genderLower = gender.toLowerCase();
  return products.filter(
    (product) => product.gender === genderLower || product.gender === "unisex"
  );
}

export function filterProducts(category: string, gender: string): Product[] {
  return products.filter((product) => {
    const categoryMatch = category === "All" || product.category === category;
    const genderMatch =
      gender === "All" ||
      product.gender === gender.toLowerCase() ||
      product.gender === "unisex";
    return categoryMatch && genderMatch;
  });
}
