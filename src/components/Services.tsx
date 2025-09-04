import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Wrench, FlaskConical, GraduationCap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Shield,
    category: "Assurance",
    title: "Software Assurance",
    description: "Stage-appropriate security reviews across applications, blockchains, cryptography and AI/ML with severity-rated findings and actionable guidance.",
    features: ["Smart Contract Audits", "Cryptographic Reviews", "AI/ML Security", "Infrastructure Assessment"]
  },
  {
    icon: Wrench,
    category: "Engineering", 
    title: "Security Engineering",
    description: "Secure architecture design, vulnerability remediation and tooling across Rust, C++, Python, Solidity and more. From firmware to DevOps pipelines.",
    features: ["Secure Code Development", "Architecture Review", "DevSecOps Implementation", "Vulnerability Remediation"]
  },
  {
    icon: FlaskConical,
    category: "Research",
    title: "Research & Development", 
    description: "We advance the state of the art through continuous security research, open-source tooling and the discovery of emerging threats.",
    features: ["Threat Research", "Zero-day Discovery", "Tool Development", "Security Publications"]
  },
  {
    icon: GraduationCap,
    category: "Training",
    title: "Training & Education",
    description: "Hands-on workshops and customised courses in secure coding, threat modelling, smart contract development and incident response.",
    features: ["Security Workshops", "Custom Training", "Certification Programs", "Incident Response"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Core Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive security solutions tailored to your organization's unique challenges and requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 glow-card border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-primary uppercase tracking-wider mb-1">
                        {service.category}
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground font-mono">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};