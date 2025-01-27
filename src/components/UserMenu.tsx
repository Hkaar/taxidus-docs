import { logout } from "@/utils/auth";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Authorized from "@/components/auth/Authorized";
import Guest from "@/components/auth/Guest";
import { buttonVariants } from "@/components/ui/button";

import { User2, Home, Settings, LogOut } from "lucide-react";

import defaultAvatar from "@/assets/profile.png";
import { cn } from "@/lib/utils";

const UserMenu = () => {
  return (
    <>
      <Authorized invisible>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="px-5 h-16 flex items-center justify-center border-l border-gray-200 dark:border-neutral-800">
              <img
                src={defaultAvatar.src}
                alt="Profile"
                className="rounded-full aspect-square size-8"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <a href="/me" className="flex items-center gap-2">
                <User2 strokeWidth={1.5} />
                Profile
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/home" className="flex items-center gap-2">
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
          className={cn(
            buttonVariants({ variant: "default" }),
            "rounded-none px-9 h-16"
          )}
        >
          Sign up
        </a>

        <a
          href="/login"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "rounded-none px-9 h-16 border-none"
          )}
        >
          Login
        </a>
      </Guest>
    </>
  );
};

export default UserMenu;
