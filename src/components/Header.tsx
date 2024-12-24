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
import Github from "@/components/icons/Github";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "How it works",
    href: "/docs/primitives/alert-dialog",
    description:
      "Describes how taxidus works as a game system and the details around it",
  },
  {
    title: "Core",
    href: "/docs/primitives/hover-card",
    description: "A guide on how taxidus-core works and it's components",
  },
  {
    title: "Concepts",
    href: "/docs/primitives/scroll-area",
    description: "Describes the concepts around how taxidus as a system works",
  },
  {
    title: "API layer",
    href: "/docs/primitives/progress",
    description:
      "A guide for developers looking to develop an app with taxidus",
  },
];

interface HeaderProps {
  active?: string;
}

function Header({ active }: HeaderProps) {
  return (
    <header className="py-4 border-b border-gray-200 dark:border-neutral-700">
      <div className="container max-w-[90rem] flex items-center flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <h1 className="text-3xl font-extrabold tracking-tighter">TAXIDUS</h1>

          <NavigationMenu orientation="vertical">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={navigationMenuTriggerStyle()}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-200/50 to-gray-200 p-6 no-underline outline-none focus:shadow-md"
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

                    <ListItem href="/docs" title="Introduction">
                      An introduction guide on how to play Taxidus
                    </ListItem>

                    <ListItem href="/docs/installation" title="How to play">
                      Guide on how to play Taxidus on your device
                    </ListItem>

                    <ListItem
                      href="/docs/primitives/typography"
                      title="Extras"
                    >
                      Extra guides for other extra stuff related to Taxidus
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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

        <div className="flex items-center gap-2">
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

          <div className="my-2 md:my-0 md:mx-1">
            <div className="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300 dark:bg-neutral-700">
            </div>
          </div>

          <div className="flex items-center gap-1">
            <Button variant={"default"}>
              Sign up
            </Button>

            <Button variant={"outline"}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
