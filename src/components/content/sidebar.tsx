import { cn } from "@/lib/utils";
import type { RawMenuItem } from "@/types/content";
import { generateMenus } from "@/utils/contentUrl";

import {
  SideBarContainer,
  SideBarContent,
  SideBarHeader,
  SideBarItem,
  SideBarMenu,
  SideBarToggle,
  type SideBarContainerProps,
} from "@/components/ui/sidebar";
import { X } from "lucide-react";

interface ContentSideBarProps extends Omit<SideBarContainerProps, "id"> {
  items?: RawMenuItem[];
  collection: string;
  title?: string;
}

const ContentSideBar = ({
  className,
  items = [],
  children,
  collection,
  title,
}: ContentSideBarProps) => {
  const [menus, nestedMenus] = generateMenus(collection, items);

  return (
    <SideBarContainer id="content-side-bar" className={cn(className)}>
      <SideBarHeader className="flex items-center justify-between gap-3">
        <span className="font-semibold capitalize">{title || collection}</span>

        <SideBarToggle sideBarId="content-side-bar" className="xl:hidden">
          <X strokeWidth={1.5} />
        </SideBarToggle>
      </SideBarHeader>

      <SideBarContent>
        <div className="flex flex-col gap-2 items-start">
          {menus.map((menu, index) => (
            <SideBarItem
              key={`menu-${index}`}
              title={menu.title}
              href={menu.href}
              className="px-0"
            />
          ))}

          {nestedMenus.map((menu, index) => (
            <SideBarMenu key={`nested-${index}`} title={menu.title}>
              <ul className="border-l-2 border-gray-200 dark:border-neutral-800">
                {menu.subMenus?.map((item, index) => (
                  <li key={`nested-side-bar-item-${index}`}>
                    <SideBarItem title={item.title} href={item.href} />
                  </li>
                ))}
              </ul>
            </SideBarMenu>
          ))}
        </div>

        {children}
      </SideBarContent>
    </SideBarContainer>
  );
};

export default ContentSideBar;
