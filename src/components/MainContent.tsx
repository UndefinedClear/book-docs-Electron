import { ArrowRight, Copy, CheckCircle, Zap, Shield, Layers, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";

export function MainContent() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built for speed with modern technologies and optimized performance."
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Enterprise-grade security with built-in best practices and encryption."
    },
    {
      icon: Layers,
      title: "Modular Design",
      description: "Flexible architecture that adapts to your specific needs and requirements."
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            Version 2.0 • Now Available
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            Build Amazing Projects
            <br />
            with Modern Tools
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Create, deploy, and scale your applications with our comprehensive platform. 
            Everything you need to build the next big thing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-lg transition-spring">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="transition-smooth hover:bg-accent/50">
              View Documentation
            </Button>
          </div>
          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur opacity-25 animate-glow"></div>
            <img 
              src={heroImage} 
              alt="Modern Documentation Platform" 
              className="relative w-full h-auto rounded-2xl shadow-2xl border border-border/20"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="interactive-hover border-border/50 animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="p-2 bg-gradient-primary rounded-lg w-fit shadow-glow">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Code Example */}
        <div className="mb-16 animate-scale-in">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Start Example</h2>
          <Card className="bg-muted/30 border-border/50 shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-mono">terminal</CardTitle>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Copy className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <pre className="text-sm font-mono text-foreground/90 overflow-x-auto">
                <code>{`npm create my-app@latest
cd my-app
npm run dev

# Your app is now running at http://localhost:3000`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "50K+", label: "Developers" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Support" },
            { value: "Global", label: "CDN" }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-secondary border-border/50 shadow-elegant">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Join thousands of happy developers</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Start building your next project today with our comprehensive toolkit and documentation.
            </p>
            <Button className="bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-lg transition-spring">
              Start Building Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}