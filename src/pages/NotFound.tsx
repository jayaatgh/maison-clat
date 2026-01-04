import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="text-center max-w-md stagger-children">
        {/* Decorative line */}
        <div className="mx-auto mb-8 h-px w-16 bg-primary/30 animate-line-grow" />
        
        {/* 404 Number */}
        <h1 className="font-serif text-8xl md:text-9xl font-light tracking-tight text-primary animate-blur-in">
          404
        </h1>
        
        {/* Subtitle */}
        <p className="mt-4 font-serif text-xl md:text-2xl text-foreground animate-drift-up" style={{ animationDelay: '0.1s' }}>
          Page Not Found
        </p>
        
        {/* Description */}
        <p className="mt-6 text-sm text-muted-foreground leading-relaxed animate-drift-up" style={{ animationDelay: '0.2s' }}>
          The page you're looking for seems to have wandered off. 
          Perhaps it's exploring our latest collection.
        </p>
        
        {/* Decorative line */}
        <div className="mx-auto my-8 h-px w-24 bg-border animate-line-grow" style={{ animationDelay: '0.3s' }} />
        
        {/* CTA Button */}
        <div className="animate-drift-up" style={{ animationDelay: '0.4s' }}>
          <Button asChild variant="luxury-outline" size="lg">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </Button>
        </div>
        
        {/* Quick Links */}
        <div className="mt-12 flex items-center justify-center gap-8 text-xs uppercase tracking-widest animate-drift-up" style={{ animationDelay: '0.5s' }}>
          <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
            Shop
          </Link>
          <span className="text-border">|</span>
          <Link to="/collections" className="text-muted-foreground hover:text-primary transition-colors">
            Collections
          </Link>
          <span className="text-border">|</span>
          <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
