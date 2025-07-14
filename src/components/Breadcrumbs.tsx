import { ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-6">
      <Button variant="ghost" size="sm" className="h-6 px-1 hover-text-primary">
        <Home className="h-3 w-3" />
      </Button>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-1">
          <ChevronRight className="h-3 w-3" />
          <Button 
            variant="ghost" 
            size="sm" 
            className={`h-6 px-1 ${index === items.length - 1 ? 'text-foreground font-medium' : 'hover-text-primary'}`}
          >
            {item.title}
          </Button>
        </div>
      ))}
    </nav>
  );
}