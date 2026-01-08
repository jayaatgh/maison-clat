import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingBag, Heart, User, LogOut } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { itemCount } = useCart();
  const { user, signOut } = useAuth();
  const { scrollDirection, isAtTop } = useScrollDirection();

  const isVisible = scrollDirection === "up" || isAtTop || isMenuOpen;

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm transition-transform duration-500 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 -ml-2 transition-transform duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          {/* Desktop Navigation - Left */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.slice(0, 2).map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm tracking-wider uppercase luxury-link transition-colors duration-500 opacity-0 animate-drift-down ${
                  location.pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
          >
            <h1 className="font-serif text-2xl lg:text-3xl tracking-tight opacity-0 animate-blur-in">
              Maison Éclat
            </h1>
          </Link>

          {/* Desktop Navigation - Right */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.slice(2).map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm tracking-wider uppercase luxury-link transition-colors duration-500 opacity-0 animate-drift-down ${
                  location.pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <Link to="/wishlist" className="p-2 group hidden lg:block">
              <Heart className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            </Link>

            {/* User Menu */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="p-2 group hidden lg:block">
                  <User className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/wishlist" className="cursor-pointer">
                      <Heart className="h-4 w-4 mr-2" />
                      Wishlist
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login" className="p-2 group hidden lg:block">
                <User className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </Link>
            )}

            {/* Cart */}
            <Link to="/cart" className="relative p-2 -mr-2 lg:mr-0 group">
              <ShoppingBag className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-accent text-accent-foreground text-xs flex items-center justify-center rounded-full animate-blur-in">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-background border-t border-border overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-serif tracking-tight transition-all duration-500 ${
                  isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                } ${
                  location.pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ transitionDelay: isMenuOpen ? `${index * 0.05}s` : "0s" }}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Auth Links */}
            <div className="pt-4 border-t border-border">
              <Link
                to="/wishlist"
                onClick={() => setIsMenuOpen(false)}
                className={`text-xl font-serif tracking-tight transition-all duration-500 flex items-center gap-3 ${
                  isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                } text-muted-foreground hover:text-foreground`}
                style={{ transitionDelay: isMenuOpen ? `${navLinks.length * 0.05}s` : "0s" }}
              >
                <Heart className="h-5 w-5" />
                Wishlist
              </Link>
              
              {user ? (
                <>
                  <Link
                    to="/profile"
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-xl font-serif tracking-tight transition-all duration-500 flex items-center gap-3 mt-4 ${
                      isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                    } text-muted-foreground hover:text-foreground`}
                    style={{ transitionDelay: isMenuOpen ? `${(navLinks.length + 1) * 0.05}s` : "0s" }}
                  >
                    <User className="h-5 w-5" />
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    className={`text-xl font-serif tracking-tight transition-all duration-500 flex items-center gap-3 mt-4 ${
                      isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                    } text-muted-foreground hover:text-foreground`}
                    style={{ transitionDelay: isMenuOpen ? `${(navLinks.length + 2) * 0.05}s` : "0s" }}
                  >
                    <LogOut className="h-5 w-5" />
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-xl font-serif tracking-tight transition-all duration-500 flex items-center gap-3 mt-4 ${
                    isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  } text-muted-foreground hover:text-foreground`}
                  style={{ transitionDelay: isMenuOpen ? `${(navLinks.length + 1) * 0.05}s` : "0s" }}
                >
                  <User className="h-5 w-5" />
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
