import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        {/* Image Container */}
        <div className="editorial-image aspect-[3/4] bg-secondary mb-6 relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-primary text-primary-foreground text-xs tracking-wider uppercase px-3 py-1">
                New
              </span>
            )}
            {product.isBestSeller && (
              <span className="bg-accent text-accent-foreground text-xs tracking-wider uppercase px-3 py-1">
                Best Seller
              </span>
            )}
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
        </div>

        {/* Product Info */}
        <div className="text-center">
          <h3 className="font-serif text-lg lg:text-xl tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm tracking-wide">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
