import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  MessageCircle, 
  Phone,
  HelpCircle,
  Sparkles,
  MapPin,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const contactMethods = [
  {
    icon: Mail,
    title: "Send an Email",
    description: "We'll respond within 24 hours",
    action: "contact@maisoneclat.com",
    href: "mailto:contact@maisoneclat.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat with our team directly",
    action: "+33 1 40 20 00 00",
    href: "https://wa.me/33140200000",
  },
  {
    icon: Phone,
    title: "Apple Messages",
    description: "For iPhone and Mac users",
    action: "Message us on iMessage",
    href: "sms:+33140200000",
  },
  {
    icon: MessageCircle,
    title: "Facebook Messenger",
    description: "Connect via social",
    action: "@MaisonEclat",
    href: "https://m.me/maisoneclat",
  },
];

const helpLinks = [
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Find answers to common questions",
    href: "/faq",
  },
  {
    icon: Sparkles,
    title: "Care Service",
    description: "Product care and repairs",
    href: "/care",
  },
  {
    icon: MapPin,
    title: "Find a Store",
    description: "Visit our boutiques worldwide",
    href: "/about",
  },
];

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

      {/* Contact Methods */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 border border-border hover:border-accent transition-all duration-500 opacity-0 animate-drift-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <method.icon className="h-6 w-6 text-accent mb-6 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-serif text-lg tracking-tight mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {method.description}
                </p>
                <span className="text-sm text-foreground group-hover:text-accent transition-colors duration-300">
                  {method.action}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl tracking-tight">
              Need Help?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {helpLinks.map((link, index) => (
              <Link
                key={link.title}
                to={link.href}
                className="group flex items-start gap-4 p-6 bg-background border border-border hover:border-accent transition-all duration-500 opacity-0 animate-drift-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <link.icon className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-serif text-lg tracking-tight mb-1 group-hover:text-accent transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 mt-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <div className="opacity-0 animate-reveal-left">
              <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-6">
                Send a Message
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl tracking-tight mb-8">
                Write to Us
              </h2>
              
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
                    <option value="care">Product Care</option>
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
                    9:00 - 18:00 CET. For urgent matters, please contact us via WhatsApp.
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
