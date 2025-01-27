import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { BoxIcon, ArrowUpRight } from "lucide-react";

interface PackCardProps extends React.ComponentProps<"a"> {
  title: string;
  ranking: number;
  tags: string[];
}

const PackCard = ({
  title,
  ranking,
  href,
  tags,
  className,
  children,
}: PackCardProps) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BoxIcon strokeWidth={1.5} />
            <CardTitle className="lowercase">{title}</CardTitle>
          </div>

          <span className="text-lg"> #{ranking} </span>
        </div>

        <div className="flex items-center gap-1">
          {tags.map((tag) => (
            <Badge>{tag}</Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent>{children}</CardContent>

      <CardFooter>
        <a href={href} className={buttonVariants({ variant: "secondary" })}>
          More info
          <ArrowUpRight strokeWidth={1.5} />
        </a>
      </CardFooter>
    </Card>
  );
};

export default PackCard;
