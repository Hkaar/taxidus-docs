import ThemeToggle from "@/components/ThemeToggle";

import { Button, buttonVariants } from "@/components/ui/button";
import Github from "@/components/icons/Github";
import { cn } from "@/lib/utils";
import { Home, LogOut, Menu, PanelLeft, Settings, User2 } from "lucide-react";
import { useEffect, useState } from "react";
import { SideBarToggle } from "@/components/ui/sidebar";
import Authorized from "@/components/auth/Authorized";
import Guest from "@/components/auth/Guest";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import defaultAvatar from "@/assets/profile.png";
import { logout } from "@/utils/auth";

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
        "py-4 border-b border-gray-200 dark:border-neutral-800",
        className
      )}
    >
      <div className="px-6 flex gap-3 lg:items-center flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:flex-row lg:items-center gap-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-5">
              <SideBarToggle
                sideBarId="dashboard-side-bar"
                className="xl:hidden"
              >
                <PanelLeft strokeWidth={1.5} />
              </SideBarToggle>

              <a href="/">
                <h1 className="text-3xl font-extrabold tracking-tighter">
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
          className={`flex-row justify-between lg:items-center gap-2 lg:flex ${
            collapse ? "hidden" : "flex"
          }`}
        >
          <div className="flex items-center gap-1">
            <a
              href="/"
              className={buttonVariants({ variant: "ghost", size: "icon" })}
            >
              <Github />
              <span className="sr-only">Github</span>
            </a>

            <ThemeToggle />
          </div>

          <div className="hidden lg:block my-2 md:my-0 md:mx-1">
            <div className="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300 dark:bg-neutral-700"></div>
          </div>

          <div className="flex items-center gap-1">
            <Authorized invisible>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <img
                    src={defaultAvatar.src}
                    alt="Profile"
                    className="rounded-full aspect-square size-8"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <a href="/" className="flex items-center gap-2">
                      <User2 strokeWidth={1.5} />
                      Profile
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/" className="flex items-center gap-2">
                      <Home strokeWidth={1.5} />
                      Home
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/" className="flex items-center gap-2">
                      <Settings strokeWidth={1.5} />
                      Settings
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={async () => {
                      await logout();
                      globalThis.window.location.reload();
                    }}
                  >
                    <LogOut strokeWidth={1.5} />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Authorized>

            <Guest invisible>
              <a
                href="/sign-up"
                className={buttonVariants({ variant: "default" })}
              >
                Sign up
              </a>

              <a
                href="/login"
                className={buttonVariants({ variant: "outline" })}
              >
                Login
              </a>
            </Guest>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
