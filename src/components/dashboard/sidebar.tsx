import { cn } from "@/lib/utils";

import {
  SideBarContainer,
  SideBarContent,
  SideBarHeader,
  SideBarItem,
  SideBarToggle,
  type SideBarContainerProps,
} from "@/components/ui/sidebar";
import {
  Compass,
  Home,
  Layers,
  X,
} from "lucide-react";

interface DashboardSideBarProps extends SideBarContainerProps {
  active?: string;
}

const DashboardSidebar = ({ active, className, children }: DashboardSideBarProps) => {
  return (
    <SideBarContainer id="dashboard-side-bar" className={cn("md:max-w-72", className)}>
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

      <SideBarContent className="flex flex-col gap-0 items-start p-0">
        <SideBarItem
          title="Home"
          icon={<Home strokeWidth={1.3} size={24} />}
          className={cn(
            "text-base [&_svg]:size-5 w-full justify-start h-16",
            active === "home" && "bg-gray-200 dark:bg-neutral-700"
          )}
          href="/home"
        />

        <SideBarItem
          title="Explore"
          icon={<Compass strokeWidth={1.3} size={24} />}
          className={cn(
            "text-base [&_svg]:size-5 w-full justify-start h-16",
            active === "explore" && "bg-gray-200 dark:bg-neutral-700"
          )}
          href="/explore"
        />

        <SideBarItem
          title="Creation Studio"
          icon={<Layers strokeWidth={1.3} size={24} />}
          className={cn(
            "text-base [&_svg]:size-5 w-full justify-start h-16",
            active === "studio" && "bg-gray-200 dark:bg-neutral-700"
          )}
          href="/studio"
        />

        {children}
      </SideBarContent>
    </SideBarContainer>
  );
};

export default DashboardSidebar;
