import { Button } from "@/components/ui/button";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

const tocItems: TocItem[] = [
  { id: "introduction", title: "Introduction", level: 1 },
  { id: "getting-started", title: "Getting Started", level: 1 },
  { id: "installation", title: "Installation", level: 2 },
  { id: "basic-usage", title: "Basic Usage", level: 2 },
  { id: "configuration", title: "Configuration", level: 1 },
  { id: "options", title: "Available Options", level: 2 },
  { id: "examples", title: "Examples", level: 2 },
  { id: "api", title: "API Reference", level: 1 },
  { id: "methods", title: "Methods", level: 2 },
  { id: "events", title: "Events", level: 2 },
];

export function TableOfContents() {
  return (
    <div className="w-60 hidden xl:block">
      <div className="sticky top-16 p-4">
        <h4 className="text-sm font-medium mb-4 text-foreground">On this page</h4>
        <nav className="space-y-1">
          {tocItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={`w-full justify-start h-7 text-xs transition-gitbook hover-text-primary ${
                item.level === 2 ? 'ml-3 text-muted-foreground' : 'text-muted-foreground'
              }`}
            >
              {item.title}
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
}