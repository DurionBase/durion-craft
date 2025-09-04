import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Code, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Durion Base
            </span>
          </h1>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              At Durion Base, we believe security and innovation go hand in hand. Founded in the UAE, 
              our mission is to help organizations build, protect, and scale digital systems in an era 
              defined by rapid technological change.
            </p>
            
            <p>
              We specialize in IT consulting and blockchain development across all major ecosystems — 
              from Ethereum, Solana, and Polygon to emerging chains like Sui. Our expertise also extends 
              to crisis response and security auditing, helping companies detect vulnerabilities, recover 
              from incidents, and harden their infrastructure against future threats.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What sets us apart is our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              engineering-first approach
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Deep Technical Research</h3>
                  <p className="text-muted-foreground">
                    We combine deep technical research with hands-on development.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Community Contribution</h3>
                  <p className="text-muted-foreground">
                    We open-source tools and contribute back to the community.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all md:col-span-2">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Strategy Meets Execution</h3>
                  <p className="text-muted-foreground">
                    We align strategy with real-world execution so clients see lasting value, not one-off fixes.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              Durion Base works with forward-thinking businesses, startups, and institutions that want 
              to unlock the full potential of blockchain and web technologies. Whether you're launching 
              a new product, scaling an existing platform, or protecting critical infrastructure, our 
              role is to provide the clarity, confidence, and technical strength you need to move forward.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;