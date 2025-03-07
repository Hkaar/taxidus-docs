import { cn } from "@/lib/utils";
import { useState } from "react";

import Github from "@/components/icons/Github";
import { Menu } from "lucide-react";

import ThemeToggle from "@/components/ThemeToggle";
import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button, buttonVariants } from "@/components/ui/button";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Introduction",
    href: "/docs",
    description:
      "Get started reading the docs from here",
  },
  {
    title: "Core concepts",
    href: "/docs",
    description:
      "Explore the core concepts on which Taxidus is built",
  },
  {
    title: "Game engine",
    href: "/docs",
    description:
      "Read the documentation about the game engine that Taxidus uses",
  },
  {
    title: "API",
    href: "/docs",
    description:
      "Learn and read about the API that Taxidus Core provides"
  },
];

interface HeaderProps {
  path?: string;
  className?: string;
}

function Header({ className, path }: HeaderProps) {
  const [collapse, setCollapse] = useState(true);

  const toggleCollapse = () => setCollapse((prev) => !prev);

  return (
    <header
      className={cn(
        "border-b border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900",
        className
      )}
    >
      <div className="flex gap-3 lg:items-center flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:flex-row lg:items-center min-h-16">
          <div className="flex justify-between items-center gap-3 h-16 px-4 lg:px-0">
            <a
              href="/"
              className="lg:border-r border-gray-200 dark:border-neutral-800 h-16 flex items-center"
            >
              <h1 className="text-3xl font-extrabold tracking-tighter lg:px-6">
                TAXIDUS
              </h1>
            </a>

            <Button
              className="lg:hidden"
              variant={"outline"}
              size={"icon"}
              onClick={toggleCollapse}
            >
              <Menu size={18} />
            </Button>
          </div>

          <NavigationMenu
            orientation="vertical"
            className={cn(
              "items-start lg:items-center max-w-none lg:flex",
              collapse ? "hidden" : "flex"
            )}
          >
            <NavigationMenuList className="flex-col lg:flex-row lg:items-center w-full">
              <NavigationMenuItem className="w-full h-16">
                <NavigationMenuLink
                  href="/"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "items-start lg:items-center h-16 rounded-none px-6 border-r border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
                  )}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="w-full">
                <NavigationMenuTrigger className="items-start lg:items-center h-16 rounded-none border-r border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                  Getting started
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-200/50 dark:bg-neutral-800/50 to-gray-200 dark:to-neutral-800 p-6 no-underline outline-none focus:shadow-md "
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Getting started
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Read the guide on how to get started to play Taxidus
                            on your device
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>

                    <ListItem href="/guides" title="Introduction">
                      An introduction guide on how to play Taxidus
                    </ListItem>

                    <ListItem href="/guides/how-to-play" title="How to play">
                      Guides on how to play Taxidus on your device
                    </ListItem>

                    <ListItem href="/guides/references" title="References">
                      Extra stuff you might want to know when playing Taxidus
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="w-full">
                <NavigationMenuTrigger className="items-start lg:items-center h-16 rounded-none border-r border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                  Documentation
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
                buttonVariants({ variant: "ghost" }),
                "rounded-none px-9 h-16 border-none"
              )}
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
