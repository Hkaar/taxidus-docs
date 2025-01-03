import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

import { Edit, PanelLeft } from "lucide-react";
import { SideBarToggle } from "@/components/ui/sidebar";

interface ContentTopBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "className" | "children"> {
  className?: string;
  title: string;
  lastModified?: string;
  editLink?: string;
};

const ContentTopBar = ({ className, title, lastModified, editLink }: ContentTopBarProps) => {
  return (
    <div className={cn("flex items-center w-full border-b border-gray-200 dark:border-neutral-800", className)}>
      <div className="xl:hidden px-4 py-3 border-r border-gray-200 dark:border-neutral-800">
        <SideBarToggle sideBarId="content-side-bar" className="xl:hidden">
          <PanelLeft strokeWidth={1.5} />
        </SideBarToggle>
      </div>

      <div className="px-4 py-3 flex-1 border-r border-gray-200 dark:border-neutral-800">
        <span className="text-2xl font-semibold capitalize line-clamp-1">{title}</span>
      </div>

      <div className="flex">
        <div className="px-4 py-3 border-r border-gray-200 dark:border-neutral-800 place-items-center hidden lg:grid">
          <span className="text-sm text-gray-500 dark:text-neutral-500 hidden lg:block">
            Last updated{" "}:{" "}
            {lastModified}
          </span>
        </div>

        <div className="px-4 py-3">
          <a href={editLink || "/"} className={cn(buttonVariants({ variant: "outline" }), "hidden md:flex",)}>
            Edit this page

            <Edit strokeWidth={1.5} />
          </a>

          <a href={editLink || "/"} className={cn(buttonVariants({ variant: "outline", size: "icon" }), "md:hidden")}>
            <Edit strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </div>
  )
};

export default ContentTopBar;