import { GitBookSidebar } from "@/components/GitBookSidebar";
import { GitBookHeader } from "@/components/GitBookHeader";
import { GitBookContent } from "@/components/GitBookContent";
import { TableOfContents } from "@/components/TableOfContents";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <GitBookSidebar />
      <div className="flex-1 flex flex-col">
        <GitBookHeader />
        <div className="flex-1 flex">
          <GitBookContent />
          <TableOfContents />
        </div>
      </div>
    </div>
  );
};

export default Index;
