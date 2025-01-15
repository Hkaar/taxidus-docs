import {
  SideBarContainer,
  SideBarContent,
  SideBarHeader,
  SideBarItem,
  SideBarMenu,
  SideBarToggle,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  Box,
  Compass,
  Home,
  LayoutDashboard,
  Layers,
  Play,
  X,
  LibraryBig,
} from "lucide-react";

interface DashboardSideBarProps {
  active?: string;
}

const DashboardSidebar = ({ active }: DashboardSideBarProps) => {
  return (
    <SideBarContainer id="dashboard-side-bar" className="md:max-w-80">
      <SideBarHeader className="xl:hidden flex items-center justify-between">
        <span className="font-extrabold capitalize text-2xl">TAXIDUS</span>

        <SideBarToggle
          forceClose
          sideBarId="dashboard-side-bar"
          className="xl:hidden"
        >
          <X strokeWidth={1.5} />
        </SideBarToggle>
      </SideBarHeader>

      <SideBarContent className="flex flex-col gap-2 items-start px-3">
        <SideBarItem
          title="Home"
          icon={<Home strokeWidth={1.3} size={24} />}
          className={cn(
            "text-base [&_svg]:size-5 w-full justify-start",
            active === "home" && "bg-gray-200 dark:bg-neutral-700"
          )}
          href="/home"
        />
        <SideBarItem
          title="Start Playing"
          icon={<Play strokeWidth={1.3} size={24} />}
          className={cn(
            "text-base [&_svg]:size-5 w-full justify-start",
            active === "play" && "bg-gray-200 dark:bg-neutral-700"
          )}
          href="/session"
        />

        <SideBarItem
          title="Explore"
          icon={<Compass strokeWidth={1.3} size={24} />}
          className={cn(
            "text-base [&_svg]:size-5 w-full justify-start",
            active === "explore" && "bg-gray-200 dark:bg-neutral-700"
          )}
          href="/explore"
        />

        <SideBarMenu
          title="Creation studio"
          className="px-3"
          icon={<Layers className="size-5" strokeWidth={1.3} />}
        >
          <div className="flex flex-col items-start border-l-2 ps-2 border-gray-200 dark:border-neutral-800">
            <SideBarItem
              title="Asset Editor"
              icon={<LayoutDashboard strokeWidth={1.3} className="size-5" />}
              className={cn(
                "w-full justify-start [&_svg]:size-5",
                active === "develop.editor" && "bg-gray-200 dark:bg-neutral-700"
              )}
              href="/develop/editor"
            />
            <SideBarItem
              title="Manage Assets"
              icon={<Box strokeWidth={1.3} className="size-5" />}
              className={cn(
                "w-full justify-start [&_svg]:size-5",
                active === "develop.assets" && "bg-gray-200 dark:bg-neutral-700"
              )}
              href="/develop/assets"
            />
          </div>
        </SideBarMenu>
      </SideBarContent>
    </SideBarContainer>
  );
};

export default DashboardSidebar;
