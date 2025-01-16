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

const UserMenu = () => {
  return (
    <>
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
        <a href="/sign-up" className={buttonVariants({ variant: "default" })}>
          Sign up
        </a>

        <a href="/login" className={buttonVariants({ variant: "outline" })}>
          Login
        </a>
      </Guest>
    </>
  );
};

export default UserMenu;
