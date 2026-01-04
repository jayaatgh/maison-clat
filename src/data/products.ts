import productBag from "@/assets/product-bag.jpg";
import productJewelry from "@/assets/product-jewelry.jpg";
import productScarf from "@/assets/product-scarf.jpg";
import productShoes from "@/assets/product-shoes.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  images?: string[];
  sizes?: string[];
  colors?: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: "noir-leather-tote",
    name: "Noir Leather Tote",
    description: "Handcrafted from the finest Italian leather, the Noir Tote embodies timeless sophistication. Its minimalist silhouette and impeccable construction make it the perfect companion for the modern individual.",
    price: 1890,
    category: "Bags",
    image: productBag,
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
    image: productJewelry,
    colors: ["Gold/Pearl", "Rose Gold/Pearl"],
    isBestSeller: true,
  },
  {
    id: "heritage-cashmere-scarf",
    name: "Heritage Cashmere Scarf",
    description: "Woven from Grade A Mongolian cashmere, this scarf offers unparalleled softness and warmth. A staple piece that transcends seasons.",
    price: 580,
    category: "Accessories",
    image: productScarf,
    colors: ["Noir", "Camel", "Ivory", "Burgundy"],
    isNew: true,
  },
  {
    id: "artisan-oxford-shoes",
    name: "Artisan Oxford Shoes",
    description: "Meticulously crafted by master artisans in Florence, these oxfords feature hand-burnished leather and Blake stitching for exceptional durability and comfort.",
    price: 1250,
    category: "Footwear",
    image: productShoes,
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: ["Burgundy", "Noir", "Cognac"],
  },
];

export const categories = [
  "All",
  "Bags",
  "Jewelry",
  "Accessories",
  "Footwear",
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter((product) => product.category === category);
}
