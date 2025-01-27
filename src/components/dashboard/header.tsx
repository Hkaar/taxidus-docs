import ThemeToggle from "@/components/ThemeToggle";

import { Button, buttonVariants } from "@/components/ui/button";
import Github from "@/components/icons/Github";
import { cn } from "@/lib/utils";
import { Menu, PanelLeft } from "lucide-react";
import { useState } from "react";
import { SideBarToggle } from "@/components/ui/sidebar";
import UserMenu from "../UserMenu";

interface HeaderProps {
  path?: string;
  className?: string;
}

const DashboardHeader = ({ className, path }: HeaderProps) => {
  const [collapse, setCollapse] = useState(true);

  const toggleCollapse = () => setCollapse((prev) => !prev);

  return (
    <header
      className={cn(
        "border-b border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900",
        className
      )}
    >
      <div className="flex lg:items-center flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <SideBarToggle
                sideBarId="dashboard-side-bar"
                className="xl:hidden"
              >
                <PanelLeft strokeWidth={1.5} />
              </SideBarToggle>

              <a
                href="/home"
                className="h-16 flex items-center"
              >
                <h1 className="text-3xl font-extrabold tracking-tighter lg:px-6">
                  TAXIDUS
                </h1>
              </a>
            </div>

            <Button
              className="lg:hidden"
              variant={"outline"}
              size={"icon"}
              onClick={toggleCollapse}
            >
              <Menu size={18} />
            </Button>
          </div>
        </div>

        <div
          className={`flex-col-reverse lg:flex-row lg:items-center lg:flex ${
            collapse ? "hidden" : "flex"
          }`}
        >
          <div className="flex items-center">
            <a
              href="/"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "rounded-none px-9 h-16 border-l border-gray-200 dark:border-neutral-800"
              )}
            >
              <Github />
              <span className="sr-only">Github</span>
            </a>

            <ThemeToggle className="px-9 h-16 rounded-none border-l border-gray-200 dark:border-neutral-800" />
          </div>

          <div className="flex items-center">
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
