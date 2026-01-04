import { Link } from "react-router-dom";
import { ArrowLeft, X, Plus, Minus } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, removeItem, updateQuantity, total } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <Layout>
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center max-w-md mx-auto animate-blur-in">
              <h1 className="font-serif text-4xl lg:text-5xl tracking-tight mb-6">
                Your Cart
              </h1>
              <p className="text-muted-foreground mb-8">
                Your cart is currently empty.
              </p>
              <Button variant="luxury" asChild>
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <Link
            to="/shop"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-500 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Link>

          <h1 className="font-serif text-4xl lg:text-5xl tracking-tight animate-drift-down">
            Your Cart
          </h1>
        </div>
      </section>

      {/* Cart Content */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="border-t border-border">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className="py-8 border-b border-border opacity-0 animate-drift-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <Link
                        to={`/product/${item.id}`}
                        className="w-24 h-32 bg-secondary flex-shrink-0 editorial-image"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <div>
                            <Link
                              to={`/product/${item.id}`}
                              className="font-serif text-lg hover:text-accent transition-colors duration-500"
                            >
                              {item.name}
                            </Link>
                            {(item.size || item.color) && (
                              <p className="text-sm text-muted-foreground mt-1">
                                {[item.size, item.color]
                                  .filter(Boolean)
                                  .join(" / ")}
                              </p>
                            )}
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                            aria-label="Remove item"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-auto flex items-end justify-between">
                          {/* Quantity */}
                          <div className="flex items-center border border-border">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-2 hover:bg-secondary transition-colors duration-300"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-10 text-center text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-2 hover:bg-secondary transition-colors duration-300"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          {/* Price */}
                          <p className="text-lg">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div
                className="bg-secondary p-8 lg:p-10 sticky top-32 opacity-0 animate-reveal-right"
                style={{ animationDelay: '0.3s' }}
              >
                <h2 className="font-serif text-2xl tracking-tight mb-8">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-accent">Complimentary</span>
                  </div>
                </div>

                <div className="border-t border-border pt-6 mb-8">
                  <div className="flex justify-between text-lg">
                    <span>Total</span>
                    <span className="font-serif">{formatPrice(total)}</span>
                  </div>
                </div>

                <Button variant="luxury" size="lg" className="w-full" asChild>
                  <Link to="/checkout">Proceed to Checkout</Link>
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-6">
                  Secure checkout powered by industry-leading encryption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
