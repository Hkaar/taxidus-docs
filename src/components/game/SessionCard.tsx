import { buttonVariants } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { ContainerIcon, Clock, LogIn } from "lucide-react";

interface SessionCardProps {
  title: string;
  activeFor: number;
  href: string;
  className?: string;
  children?: React.ReactNode;
}

const calculateTime = (mins: number) => {
  if (mins < 60) {
    return <span>{mins} minute(s)</span>;
  }

  return <span>{Math.floor(mins / 60)} hour(s)</span>;
};

const SessionCard = ({
  title,
  activeFor,
  href,
  className,
  children,
}: SessionCardProps) => {
  return (
    <Card>
      <CardHeader className={cn("flex flex-row items-center gap-2", className)}>
        <ContainerIcon strokeWidth={1.5} />
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>{children}</CardContent>

      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock strokeWidth={1.5} size={18} />
          <span>{calculateTime(activeFor)}</span>
        </div>

        <a href={href} className={buttonVariants({ variant: "secondary" })}>
          <LogIn strokeWidth={1.5} />
          Join
        </a>
      </CardFooter>
    </Card>
  );
};

export default SessionCard;
