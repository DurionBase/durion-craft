import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Secure your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                digital future
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We partner with ambitious teams to design, build and protect the software that powers 
              the next generation of digital business. Our consultants combine cutting-edge research 
              with an attacker's perspective to ensure resilience from concept through deployment.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center">
            <Button variant="hero" size="lg" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Speak with a consultant
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground font-mono">Uptime Achieved</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground font-mono">Threat Monitoring</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-primary">0</div>
              <div className="text-sm text-muted-foreground font-mono">Successful Breaches</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};