import { Sun, Moon, Github, Twitter, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 glass backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          {/* Center content */}
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="hidden md:flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live Documentation</span>
            </Badge>
          </div>

          {/* Right actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="transition-smooth hover:bg-accent/50">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="transition-smooth hover:bg-accent/50">
              <Twitter className="h-4 w-4" />
            </Button>
            <div className="h-4 w-px bg-border mx-2"></div>
            <Button variant="ghost" size="sm" className="transition-smooth hover:bg-accent/50">
              <Sun className="h-4 w-4" />
            </Button>
            <Button 
              className="bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-lg transition-spring"
              size="sm"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}