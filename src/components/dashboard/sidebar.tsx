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
    <SideBarContainer id="dashboard-side-bar" className="md:max-w-72">
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
          title="Explore"
          icon={<Compass strokeWidth={1.3} size={24} />}
          className={cn(
            "text-base [&_svg]:size-5 w-full justify-start",
            active === "explore" && "bg-gray-200 dark:bg-neutral-700"
          )}
          href="/explore"
        />

        <SideBarItem
          title="Creation Studio"
          icon={<Layers strokeWidth={1.3} size={24} />}
          className={cn(
            "text-base [&_svg]:size-5 w-full justify-start",
            active === "studio" && "bg-gray-200 dark:bg-neutral-700"
          )}
          href="/studio"
        />
      </SideBarContent>
    </SideBarContainer>
  );
};

export default DashboardSidebar;
