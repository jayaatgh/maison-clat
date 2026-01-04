import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getProductById, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/ProductCard";
import { useToast } from "@/hooks/use-toast";
import { SizeGuideModal } from "@/components/SizeGuideModal";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const { addItem } = useCart();
  const { toast } = useToast();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-6 lg:px-12 py-24 text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-accent hover:underline">
            Return to Shop
          </Link>
        </div>
      </Layout>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
    });

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 lg:px-12 py-8">
        <Link
          to="/shop"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-500"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <div className="aspect-[3/4] bg-secondary opacity-0 animate-reveal-left">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="lg:py-12 opacity-0 animate-reveal-right" style={{ animationDelay: '0.2s' }}>
              {/* Category */}
              <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-4">
                {product.category}
              </p>

              {/* Title */}
              <h1 className="font-serif text-4xl lg:text-5xl tracking-tight mb-6">
                {product.name}
              </h1>

              {/* Price */}
              <p className="text-2xl tracking-wide mb-8">
                {formatPrice(product.price)}
              </p>

              {/* Divider */}
              <div className="w-12 h-px bg-border mb-8 animate-line-grow origin-left" style={{ animationDelay: '0.4s' }} />

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs tracking-wider uppercase">Size</p>
                    <SizeGuideModal gender={product.gender as "women" | "men"} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 text-sm border transition-all duration-500 ${
                          selectedSize === size
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-transparent text-foreground border-border hover:border-accent"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-8">
                  <p className="text-xs tracking-wider uppercase mb-4">Color</p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-6 py-3 text-sm border transition-all duration-500 ${
                          selectedColor === color
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-transparent text-foreground border-border hover:border-accent"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-xs tracking-wider uppercase mb-4">
                  Quantity
                </p>
                <div className="inline-flex items-center border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-4 hover:bg-secondary transition-colors duration-300"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-16 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-4 hover:bg-secondary transition-colors duration-300"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                variant="luxury"
                size="xl"
                className="w-full"
                onClick={handleAddToCart}
              >
                Add to Cart — {formatPrice(product.price * quantity)}
              </Button>

              {/* Additional Info */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="grid grid-cols-1 gap-4 text-sm text-muted-foreground stagger-children">
                  <p>✓ Complimentary worldwide shipping</p>
                  <p>✓ Secure checkout with SSL encryption</p>
                  <p>✓ 30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16 animate-drift-up">
              <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-4">
                You May Also Like
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl tracking-tight">
                Related Pieces
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {relatedProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
