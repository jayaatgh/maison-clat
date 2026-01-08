import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ProductCard";
import { useWishlist } from "@/context/WishlistContext";
import { useAuth } from "@/context/AuthContext";
import { getProductById } from "@/data/products";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function Wishlist() {
  const { wishlist, loading } = useWishlist();
  const { user } = useAuth();

  const wishlistProducts = wishlist
    .map((id) => getProductById(id))
    .filter((product) => product !== undefined);

  if (!user) {
    return (
      <Layout>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
            <h1 className="font-serif text-3xl lg:text-4xl mb-4">Your Wishlist</h1>
            <p className="text-muted-foreground mb-8">
              Sign in to save your favorite pieces
            </p>
            <Button variant="luxury" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="font-serif text-3xl lg:text-4xl mb-12 text-center">
            Your Wishlist
          </h1>

          {loading ? (
            <div className="text-center text-muted-foreground">Loading...</div>
          ) : wishlistProducts.length === 0 ? (
            <div className="text-center">
              <Heart className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
              <p className="text-muted-foreground mb-8">
                Your wishlist is empty. Start adding your favorite pieces.
              </p>
              <Button variant="luxury-outline" asChild>
                <Link to="/shop">Explore Collection</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {wishlistProducts.map((product, index) => (
                <ProductCard key={product!.id} product={product!} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
