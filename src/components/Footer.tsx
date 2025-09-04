import { Shield, Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold tracking-tight">Durion Base</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pioneering IT & Security Consulting. Securing the digital future through innovation and expertise.
            </p>
            <div className="flex space-x-4">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Software Assurance</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Security Engineering</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Research & Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Training & Education</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">News</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Durionbase@proton.me</li>
              <li className="text-muted-foreground">Dubai, UAE</li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Durion Base FZCO. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground font-mono">
              Security through innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};