import { FilterIcon } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";

const ExploreSearchFilter = ({ filters }: { filters: string[] }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant={"secondary"}>
          <FilterIcon strokeWidth={1.5} />
          Filters
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96">
        <div className="flex flex-row flex-wrap gap-1 max-w-[28rem]">
          {filters.map((filter) => (
            <a
              href="/"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "flex-1"
              )}
            >
              {filter}
            </a>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ExploreSearchFilter };
