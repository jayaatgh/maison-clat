import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-editorial.jpg";
import latestReleaseImage from "@/assets/latest-release.jpg";
import seasonalWinterImage from "@/assets/seasonal-winter.jpg";

const Index = () => {
  const featuredProducts = products.slice(0, 4);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 animate-blur-in">
          <img
            src={heroImage}
            alt="Maison Éclat Editorial"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl stagger-children">
            <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-6">
              Collection 2026
            </p>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-8">
              Crafted elegance.
              <br />
              <span className="text-muted-foreground">Designed to endure.</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Timeless pieces meticulously crafted for the discerning individual.
              Where heritage meets contemporary refinement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="luxury" size="lg" asChild>
                <Link to="/shop">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="luxury-outline" size="lg" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Release Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="opacity-0 animate-reveal-left">
              <img
                src={latestReleaseImage}
                alt="Latest Release"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            <div className="stagger-children">
              <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-4">
                Just Arrived
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-6">
                Latest Release
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Discover our newest additions — a curated selection of pieces that 
                embody the essence of modern luxury. Each item tells a story of 
                exceptional craftsmanship and timeless design.
              </p>
              <Button variant="luxury" asChild>
                <Link to="/shop">
                  Shop New Arrivals
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Grid */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20 animate-drift-up">
            <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-4">
              New In
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl tracking-tight">
              New Arrivals
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {newArrivals.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Collection */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={seasonalWinterImage}
            alt="Seasonal Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-background/90 via-background/60 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="max-w-xl ml-auto text-right stagger-children">
            <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-4">
              Autumn/Winter 2026
            </p>
            <h2 className="font-serif text-4xl lg:text-6xl tracking-tight mb-6">
              Seasonal
              <br />
              <span className="text-muted-foreground">Collection</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Embrace the darker months with pieces designed for warmth and elegance.
              Rich textures, deep tones, and impeccable tailoring define this season's offerings.
            </p>
            <Button variant="luxury" asChild>
              <Link to="/collections">
                Explore the Season
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20 animate-drift-up">
            <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-4">
              Client Favourites
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl tracking-tight">
              Best Sellers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {bestSellers.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center mt-16 animate-drift-up" style={{ animationDelay: '0.5s' }}>
            <Button variant="luxury-outline" size="lg" asChild>
              <Link to="/shop">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-6 animate-drift-down">
              Our Philosophy
            </p>

            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.3] text-foreground animate-blur-in" style={{ animationDelay: '0.2s' }}>
              "True luxury lies not in excess, but in the quiet confidence of
              <span className="text-accent"> impeccable craftsmanship</span>."
            </blockquote>

            <div className="mt-12 animate-drift-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-px bg-accent mx-auto mb-6 animate-line-grow origin-center" style={{ animationDelay: '0.6s' }} />
              <p className="text-sm text-muted-foreground tracking-wide">
                Founded in France · Since 2020
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-xl mx-auto text-center stagger-children">
            <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-4">
              Stay Informed
            </p>

            <h2 className="font-serif text-3xl lg:text-4xl tracking-tight mb-6">
              Join Our World
            </h2>

            <p className="text-muted-foreground mb-8">
              Receive exclusive access to new collections, events, and stories
              from the Maison.
            </p>

            <form
              className="flex flex-col sm:flex-row gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-6 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors duration-500"
              />
              <Button variant="luxury" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
