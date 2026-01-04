import { Layout } from "@/components/layout/Layout";

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
              Founded in 2020 in the heart of Paris, Maison Éclat was born from
              a singular vision: to create pieces that transcend trends and
              embody the essence of quiet luxury.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="opacity-0 animate-reveal-left">
              <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-6">
                Our Philosophy
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-8">
                Craftsmanship
                <br />
                <span className="text-muted-foreground">Without Compromise</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Every piece that bears the Maison Éclat name is the result of
                  meticulous attention to detail. We partner with the world's
                  finest artisans—master leather workers in Florence, pearl
                  cultivators in Japan, and cashmere weavers in Mongolia.
                </p>
                <p>
                  We believe that true luxury is not about logos or
                  ostentatious displays. It's about the quiet confidence that
                  comes from owning something made with intention, built to
                  last, and designed to become more beautiful with time.
                </p>
              </div>
            </div>

            <div
              className="aspect-[4/5] bg-muted opacity-0 animate-reveal-right"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-muted-foreground/30 text-sm tracking-wider uppercase">
                  Editorial Image
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
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
    </Layout>
  );
};

export default About;
