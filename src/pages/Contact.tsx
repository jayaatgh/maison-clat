import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto stagger-children">
            <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-6">
              Get in Touch
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl tracking-tight mb-8">
              Contact
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We'd love to hear from you. Whether you have a question about our
              collections, a bespoke request, or simply wish to share your
              thoughts, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <div className="opacity-0 animate-reveal-left">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs tracking-wider uppercase mb-3"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors duration-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs tracking-wider uppercase mb-3"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors duration-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs tracking-wider uppercase mb-3"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 bg-transparent border border-border text-foreground focus:outline-none focus:border-accent transition-colors duration-500 appearance-none cursor-pointer"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Question</option>
                    <option value="bespoke">Bespoke Request</option>
                    <option value="press">Press Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs tracking-wider uppercase mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors duration-500 resize-none"
                  />
                </div>

                <Button variant="luxury" size="lg" type="submit">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-12 opacity-0 animate-reveal-right" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xs tracking-wider uppercase text-muted-foreground mb-4">
                    Flagship Boutique
                  </h3>
                  <p className="font-serif text-xl mb-2">Paris</p>
                  <p className="text-muted-foreground leading-relaxed">
                    24 Rue du Faubourg Saint-Honoré
                    <br />
                    75008 Paris, France
                  </p>
                </div>

                <div>
                  <h3 className="text-xs tracking-wider uppercase text-muted-foreground mb-4">
                    Hours
                  </h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Saturday: 10:00 - 19:00</p>
                    <p>Sunday: By appointment</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs tracking-wider uppercase text-muted-foreground mb-4">
                    Client Services
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="mailto:contact@maisoneclat.com"
                      className="block text-foreground hover:text-accent transition-colors duration-500"
                    >
                      contact@maisoneclat.com
                    </a>
                    <a
                      href="tel:+33140200000"
                      className="block text-foreground hover:text-accent transition-colors duration-500"
                    >
                      +33 1 40 20 00 00
                    </a>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Our client services team is available Monday through Friday,
                    9:00 - 18:00 CET.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
