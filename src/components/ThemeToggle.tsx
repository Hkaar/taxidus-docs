import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const [theme, setThemeState] = useState<
    "theme-light" | "dark" | "system"
  >("theme-light");

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  useEffect(() => {
    const isDark = theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun
            className={cn(
              "h-[1.2rem] w-[1.2rem] transition-all dark:stroke-gray-50",
              theme === "theme-light" ? "" : "hidden",
            )}
          />
          <Moon
            className={cn(
              "h-[1.2rem] w-[1.2rem] transition-all dark:stroke-gray-50",
              theme === "dark" ? "" : "hidden",
            )}
          />
          <Monitor
            className={cn(
              "h-[1.2rem] w-[1.2rem] transition-all dark:stroke-gray-50",
              theme === "system" ? "" : "hidden",
            )}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setThemeState("theme-light")}
          className={cn(
            theme === "theme-light" &&
              "bg-gray-100 text-neutral-900 dark:bg-neutral-900 dark:text-gray-100 dark:stroke-gray-100 stroke-neutral-900",
          )}
        >
          <Sun size={18} />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setThemeState("dark")}
          className={cn(
            theme === "dark" &&
              "bg-gray-100 text-neutral-900 dark:bg-neutral-900 dark:text-gray-100 dark:stroke-gray-100 stroke-neutral-900",
          )}
        >
          <Moon size={18} />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setThemeState("system")}
          className={cn(
            theme === "system" &&
              "bg-gray-100 text-neutral-900 dark:bg-neutral-900 dark:text-gray-100 dark:stroke-gray-100 stroke-neutral-900",
          )}
        >
          <Monitor size={18} />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeToggle;
