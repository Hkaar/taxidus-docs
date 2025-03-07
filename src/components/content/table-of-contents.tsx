import type { MarkdownHeading } from "astro";
import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

interface TableOfContentsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "className" | "children"> {
  className?: string;
  items: MarkdownHeading[];
};

const TableOfContents = ({ className, items }: TableOfContentsProps) => {
  return (
    <nav className={className}>
      <ul>
        {items.length < 1 && (
          <span className="text-sm">No headings were found in this page</span>
        )}
        {items.map((item, index) => (
          <li key={`table-content-item-${index}`} style={{ paddingLeft: (item.depth - 1) * 16 }}>
            <a href={`#${item.slug}`} className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "py-0")}>

              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default TableOfContents;