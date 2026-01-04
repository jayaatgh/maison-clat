import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { categories } from "@/data/products";

const collections = [
  {
    name: "Bags",
    description: "Handcrafted leather goods designed for timeless elegance",
    href: "/shop?category=Bags",
  },
  {
    name: "Jewelry",
    description: "Precious pieces that capture light and imagination",
    href: "/shop?category=Jewelry",
  },
  {
    name: "Accessories",
    description: "Essential accents for the discerning individual",
    href: "/shop?category=Accessories",
  },
  {
    name: "Footwear",
    description: "Artisan-crafted shoes of exceptional quality",
    href: "/shop?category=Footwear",
  },
];

const Collections = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-6">
              Explore
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl tracking-tight mb-8">
              Collections
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Each collection embodies our commitment to exceptional
              craftsmanship and timeless design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={collection.href}
                  className="group block relative aspect-[4/3] bg-secondary overflow-hidden"
                >
                  {/* Placeholder for collection image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground/20 text-sm tracking-wider uppercase">
                      {collection.name} Collection
                    </span>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                    <div className="bg-background/95 backdrop-blur-sm p-6 lg:p-8">
                      <h2 className="font-serif text-2xl lg:text-3xl tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
                        {collection.name}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-4">
                        {collection.description}
                      </p>
                      <span className="inline-flex items-center text-xs tracking-wider uppercase text-accent">
                        Explore Collection
                        <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-6">
              Bespoke Services
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-8">
              Made for You
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              For those seeking something truly unique, our atelier offers
              bespoke services. Work directly with our master artisans to create
              a one-of-a-kind piece tailored to your vision.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-sm tracking-wider uppercase luxury-link"
            >
              Inquire About Bespoke
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Collections;
