import { Link } from "react-router-dom";
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
    <article
      className="opacity-0 animate-drift-up"
      style={{ animationDelay: `${index * 0.15}s` }}
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
              <span className="bg-primary text-primary-foreground text-xs tracking-wider uppercase px-3 py-1 animate-reveal-left" style={{ animationDelay: `${index * 0.15 + 0.3}s` }}>
                New
              </span>
            )}
            {product.isBestSeller && (
              <span className="bg-accent text-accent-foreground text-xs tracking-wider uppercase px-3 py-1 animate-reveal-left" style={{ animationDelay: `${index * 0.15 + 0.4}s` }}>
                Best Seller
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="text-center">
          <h3 className="font-serif text-lg lg:text-xl tracking-tight mb-2 transition-colors duration-500 group-hover:text-accent">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm tracking-wide transition-opacity duration-500 group-hover:opacity-70">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </article>
  );
}
