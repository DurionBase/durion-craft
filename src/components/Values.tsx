import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Shield, CheckCircle, Users } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We explore new protocols, techniques and paradigms to stay ahead of evolving threats."
  },
  {
    icon: Shield,
    title: "Resilience", 
    description: "We build systems with the expectation of failure and provide playbooks to recover quickly."
  },
  {
    icon: CheckCircle,
    title: "Integrity",
    description: "We deliver vendor-agnostic advice and act as a trusted partner at every stage."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We foster close collaboration with clients, sharing knowledge and building together."
  }
];

export const Values = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The principles that guide our approach to cybersecurity and client partnerships.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/30 backdrop-blur-sm">
                <CardHeader className="space-y-4 pb-4">
                  <div className="mx-auto p-4 rounded-xl bg-primary/10 border border-primary/20 w-fit">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};