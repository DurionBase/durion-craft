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
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              {/* 3D Cube Network Structure */}
              <svg viewBox="0 0 40 40" className="w-full h-full">
                {/* Cube edges */}
                <g stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none">
                  {/* Front face */}
                  <path d="M12 12 L28 12 L28 28 L12 28 Z" className="opacity-80" />
                  {/* Back face */}
                  <path d="M8 8 L24 8 L24 24 L8 24 Z" className="opacity-60" />
                  {/* Connecting edges */}
                  <path d="M12 12 L8 8" className="opacity-70" />
                  <path d="M28 12 L24 8" className="opacity-70" />
                  <path d="M28 28 L24 24" className="opacity-70" />
                  <path d="M12 28 L8 24" className="opacity-70" />
                  {/* Internal connections */}
                  <path d="M20 12 L16 8" className="opacity-50" />
                  <path d="M20 28 L16 24" className="opacity-50" />
                </g>
                {/* Network nodes */}
                <g fill="hsl(var(--primary))">
                  <circle cx="12" cy="12" r="1.5" className="animate-pulse" />
                  <circle cx="28" cy="12" r="1.5" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <circle cx="28" cy="28" r="1.5" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                  <circle cx="12" cy="28" r="1.5" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                  <circle cx="8" cy="8" r="1.5" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                  <circle cx="24" cy="8" r="1.5" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <circle cx="24" cy="24" r="1.5" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <circle cx="8" cy="24" r="1.5" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
                  <circle cx="20" cy="20" r="1" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                </g>
              </svg>
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