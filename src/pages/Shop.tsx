import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, genderFilters, filterProducts } from "@/data/products";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeGender, setActiveGender] = useState("All");

  const filteredProducts = filterProducts(activeCategory, activeGender);

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12 lg:mb-16 animate-drift-down">
            <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-4">
              The Collection
            </p>
            <h1 className="font-serif text-4xl lg:text-6xl tracking-tight">
              Shop
            </h1>
          </div>

          {/* Gender Filter */}
          <div className="flex justify-center gap-8 mb-8 lg:mb-12">
            {genderFilters.map((gender) => (
              <button
                key={gender}
                onClick={() => setActiveGender(gender)}
                className={`font-serif text-lg lg:text-xl tracking-tight transition-all duration-500 pb-2 border-b-2 ${
                  activeGender === gender
                    ? "text-foreground border-accent"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                {gender === "All" ? "All Collections" : `${gender}'s Collection`}
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-12 lg:mb-16 stagger-children">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-xs tracking-wider uppercase border transition-all duration-500 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-accent hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div
            key={`${activeCategory}-${activeGender}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 animate-blur-in">
              <p className="text-muted-foreground">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
