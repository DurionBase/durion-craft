import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary via-accent to-primary rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse"></div>
              <span className="text-primary-foreground font-bold text-sm relative z-10">DB</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Durion Base
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="/#services" className="text-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="/#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-card/50 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="/#services"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="/#contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};