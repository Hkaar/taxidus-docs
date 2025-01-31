import * as React from "react";

import { cn } from "@/lib/utils";
import {
  Button,
  buttonVariants,
  type ButtonProps,
} from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

const ToggleSideBar = (elementID: string, forceClose?: boolean) => {
  const sidebar = document.getElementById(elementID);
  const overlay = document.getElementById(`${elementID}-overlay`);

  if (!sidebar) {
    console.error(`Sidebar with id ${elementID} does not exist!`);
    return;
  }

  if (forceClose || !sidebar.classList.contains("-translate-x-full")) {
    sidebar.classList.add("-translate-x-full");
    overlay?.classList.add("hidden");
  } else {
    sidebar.classList.remove("-translate-x-full");
    overlay?.classList.remove("hidden");
  }
};

export interface SideBarOverlayProps
  extends Omit<React.ComponentProps<"div">, "className" | "children"> {
  sideBarId: string;
  className?: string;
}

const SideBarOverlay = ({ sideBarId, className }: SideBarOverlayProps) => {
  return (
    <div
      id={`${sideBarId}-overlay`}
      className={cn(
        "fixed inset-0 bg-black/50 z-30 hidden",
        "xl:hidden",
        className
      )}
      onClick={() => ToggleSideBar(sideBarId, true)}
    />
  );
};

export interface SideBarContainerProps
  extends Omit<React.ComponentProps<"div">, "className" | "children"> {
  id: string;
  className?: string;
  children?: React.ReactNode;
}

const SideBarContainer = React.forwardRef<
  HTMLDivElement,
  SideBarContainerProps
>(({ id, className, children, ...props }, ref) => {
  return (
    <>
      <SideBarOverlay sideBarId={id} />
      <div
        className={cn(
          "fixed top-0 flex flex-col w-screen lg:w-full -translate-x-full overflow-y-auto max-w-full min-h-screen z-40 transition-all duration-300 ease-in-out md:max-w-80 xl:relative xl:z-0 xl:h-auto xl:translate-x-0 bg-white dark:bg-neutral-900",
          className
        )}
        ref={ref}
        id={id}
        {...props}
      >
        {children}
      </div>
    </>
  );
});

export interface SideBarHeaderProps
  extends Omit<React.ComponentProps<"div">, "className" | "children"> {
  className?: string;
  children?: React.ReactNode;
}

const SideBarHeader = React.forwardRef<HTMLDivElement, SideBarHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn("px-6 py-5 bg-white dark:bg-neutral-800/75", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export interface SideBarContentProps
  extends Omit<React.ComponentProps<"div">, "className" | "children"> {
  className?: string;
  children?: React.ReactNode;
}

const SideBarContent = React.forwardRef<HTMLDivElement, SideBarContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={cn("flex-1 px-6 py-3", className)} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

export interface SideBarFooterProps
  extends Omit<React.ComponentProps<"div">, "className" | "children"> {
  className?: string;
  children?: React.ReactNode;
}

const SideBarFooter = React.forwardRef<HTMLDivElement, SideBarFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn("px-6 py-5 bg-gray-200 dark:bg-neutral-800", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

interface SideBarToggleProps extends ButtonProps {
  sideBarId: string;
  variant?: "outline" | "ghost";
  forceClose?: boolean;
}

const SideBarToggle = ({
  className,
  children,
  variant,
  sideBarId,
  forceClose,
}: SideBarToggleProps) => {
  const handleToggle = () => ToggleSideBar(sideBarId, forceClose);

  return (
    <Button
      className={className}
      variant={variant || "outline"}
      size={"icon"}
      onClick={handleToggle}
    >
      {children}
    </Button>
  );
};

interface SideBarItemProps {
  title: string;
  href: string;
  icon?: React.ReactNode;
  className?: string;
}

const SideBarItem = ({ title, href, icon, className }: SideBarItemProps) => {
  return (
    <a
      href={href}
      className={cn(
        buttonVariants({variant: "ghost"}),
        "flex justify-start items-center gap-2 rounded-none py-6 w-full",
        className
      )}
    >
      {icon} {title}
    </a>
  );
};

export type SideBarMenuItem = {
  title: string;
  href: string;
  slug?: string;
};

interface SideBarMenuProps {
  title: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

const SideBarMenu = ({
  title,
  icon,
  children,
  className,
}: SideBarMenuProps) => {
  return (
    <Accordion type="single" className="w-full" collapsible>
      <AccordionItem value="item-1" className={cn("border-0", className)}>
        <AccordionTrigger className="border-b border-gray-200 dark:border-neutral-800 px-4">
          <span className="flex items-center gap-3 capitalize">
            {icon}
            {title}
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-0">{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export {
  SideBarContainer,
  SideBarHeader,
  SideBarContent,
  SideBarFooter,
  SideBarToggle,
  SideBarItem,
  SideBarMenu,
  ToggleSideBar,
};
