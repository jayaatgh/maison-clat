import { Layout } from "@/components/layout/Layout";
import { MapPin } from "lucide-react";
import aboutAtelierImage from "@/assets/about-atelier.jpg";
import storeParisImage from "@/assets/store-paris.jpg";
import storeIndiaImage from "@/assets/store-india.jpg";

const values = [
  {
    title: "Timeless Design",
    description:
      "We create pieces that transcend seasons and trends. Each design is intended to be worn and cherished for years to come.",
  },
  {
    title: "Ethical Sourcing",
    description:
      "From materials to manufacturing, we maintain the highest standards of ethical and sustainable practices throughout our supply chain.",
  },
  {
    title: "Artisan Heritage",
    description:
      "We work exclusively with master craftspeople who have honed their skills over generations, preserving traditional techniques.",
  },
];

const stores = [
  {
    city: "Paris",
    country: "France",
    status: "Flagship",
    address: "24 Rue du Faubourg Saint-Honoré, 75008",
    image: storeParisImage,
  },
  {
    city: "Mumbai",
    country: "India",
    status: "Open",
    address: "Palladium Mall, Lower Parel",
    image: storeIndiaImage,
  },
  {
    city: "Singapore",
    country: "Singapore",
    status: "Coming Soon",
    address: "Marina Bay Sands",
    image: null,
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto stagger-children">
            <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-6">
              Our Story
            </p>
            <h1 className="font-serif text-5xl lg:text-7xl tracking-tight mb-8">
              About Maison Éclat
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded in France in 2020, Maison Éclat was born from a singular vision: 
              to create pieces that transcend trends and embody the essence of quiet luxury. 
              From a small atelier in Paris to an international presence, our journey 
              has always been guided by an unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* The Beginning */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="opacity-0 animate-reveal-left">
              <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-6">
                Founded in France
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-8">
                Where It All
                <br />
                <span className="text-muted-foreground">Began</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  In the heart of Paris, in a sunlit atelier overlooking the Seine, 
                  Maison Éclat took its first breath. Our founder, inspired by generations 
                  of French savoir-faire, envisioned a house where traditional craftsmanship 
                  would meet contemporary sensibility.
                </p>
                <p>
                  The name "Éclat" — meaning brilliance, radiance, or a burst of light — 
                  captures our philosophy perfectly. We believe true luxury should illuminate 
                  the wearer, not overshadow them. Each piece is designed to enhance, 
                  not define.
                </p>
                <p>
                  Today, our Paris atelier remains the heart of our creative process, 
                  where every design is conceived and every piece is meticulously reviewed 
                  before it bears our name.
                </p>
              </div>
            </div>

            <div
              className="opacity-0 animate-reveal-right"
              style={{ animationDelay: '0.2s' }}
            >
              <img
                src={aboutAtelierImage}
                alt="Maison Éclat Atelier"
                className="w-full h-auto object-cover aspect-[16/10]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Behind Every Piece */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 lg:mb-20 animate-drift-up">
              <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-4">
                Our Craft
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl tracking-tight">
                Behind Every Piece
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              <div className="space-y-6 opacity-0 animate-drift-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-serif text-2xl tracking-tight">
                  The Artisans
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our leather goods are crafted by third-generation artisans in Florence, 
                  whose families have perfected their techniques over a century. Each bag 
                  passes through the hands of at least five master craftspeople before 
                  completion.
                </p>
              </div>

              <div className="space-y-6 opacity-0 animate-drift-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-serif text-2xl tracking-tight">
                  The Materials
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We source only the finest materials: Grade A Mongolian cashmere, 
                  Japanese Akoya pearls, and leather from tanneries that have operated 
                  for generations. Quality is never compromised.
                </p>
              </div>

              <div className="space-y-6 opacity-0 animate-drift-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="font-serif text-2xl tracking-tight">
                  The Process
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A single Maison Éclat bag requires over 40 hours of handwork. 
                  Our jewelry pieces are individually cast and finished by hand. 
                  We believe that time invested is elegance earned.
                </p>
              </div>

              <div className="space-y-6 opacity-0 animate-drift-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="font-serif text-2xl tracking-tight">
                  The Promise
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every piece that bears our name is designed to last a lifetime. 
                  We offer complimentary care services and repairs, ensuring your 
                  Maison Éclat pieces remain as beautiful as the day you acquired them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20 animate-drift-up">
            <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-4">
              Our Values
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl tracking-tight">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center opacity-0 animate-drift-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div
                  className="w-12 h-px bg-accent mx-auto mb-8 animate-line-grow origin-center"
                  style={{ animationDelay: `${index * 0.15 + 0.3}s` }}
                />
                <h3 className="font-serif text-2xl tracking-tight mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Locations */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20 animate-drift-up">
            <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-4">
              Visit Us
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl tracking-tight">
              Our Boutiques
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {stores.map((store, index) => (
              <div
                key={store.city}
                className="group opacity-0 animate-drift-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="aspect-[4/5] bg-muted mb-6 overflow-hidden">
                  {store.image ? (
                    <img
                      src={store.image}
                      alt={`${store.city} Store`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted">
                      <span className="text-muted-foreground/50 text-sm tracking-wider uppercase">
                        Coming 2026
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-serif text-xl tracking-tight">
                        {store.city}
                      </h3>
                      <span className={`text-xs tracking-wider uppercase px-2 py-1 ${
                        store.status === "Coming Soon" 
                          ? "bg-accent/20 text-accent" 
                          : store.status === "Flagship"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {store.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {store.address}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {store.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
