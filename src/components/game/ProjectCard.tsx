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

interface ProjectCardProps {
  title: string;
  lastAccessed: string;
  href: string;
  tags: string[];
  className?: string;
  children?: React.ReactNode;
}

const ProjectCard = ({
  title,
  lastAccessed,
  href,
  className,
  children,
}: ProjectCardProps) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BoxIcon strokeWidth={1.5} />
            <CardTitle className="lowercase">{title}</CardTitle>
          </div>

          <span className="text-sm"> {lastAccessed} </span>
        </div>
      </CardHeader>

      <CardContent>
        {children || <span>No description was provided...</span>}
      </CardContent>

      <CardFooter>
        <a href={href} className={buttonVariants({ variant: "default" })}>
          Open
          <ArrowUpRight strokeWidth={1.5} />
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
