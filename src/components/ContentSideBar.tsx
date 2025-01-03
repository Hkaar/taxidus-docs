import { SideBarContainer, SideBarContent, SideBarHeader, SideBarItem, SideBarMenu, SideBarToggle, type SideBarContainerProps, type SideBarMenuItem } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import type { RawMenuItem } from "@/types/content";
import { X } from "lucide-react";

type Menu = {
  title: string;
  subMenus: SideBarMenuItem[];
}

const getMenu = (needle: string, haystack: Menu[]): Menu | undefined => {
  return haystack.find(item => item.title === needle);
};

const extractMenus = (collectionName: string, items: RawMenuItem[]): [SideBarMenuItem[], Menu[]] => {
  const nestedMenus: Menu[] = [];
  const menus: SideBarMenuItem[] = [];

  const baseURL = `${import.meta.env.PUBLIC_APP_URL}/${collectionName}`;

  items.forEach(item => {
    if (!item.group) {
      menus.push({
        title: item.title,
        href: `${baseURL}/${item.href}`
      })

      return;
    }

    let menu = getMenu(item.group, nestedMenus);

    if (!menu) {
      menu = {
        title: item.group,
        subMenus: []
      };
      nestedMenus.push(menu);
    }

    menu.subMenus.push({
      title: item.title,
      href: `${baseURL}/${item.href}`,
    });
  });

  return [menus, nestedMenus];
};

interface ContentSideBarProps extends Omit<SideBarContainerProps, "id"> {
  items?: RawMenuItem[];
  collection: string;
}

const ContentSideBar = ({ className, items = [], children, collection }: ContentSideBarProps) => {
  const [menus, nestedMenus] = extractMenus(collection, items);

  return (
    <SideBarContainer id="content-side-bar" className={cn(className)}>
      <SideBarHeader className="flex items-center justify-between gap-3">
        <span className="font-semibold capitalize">{collection}</span>

        <SideBarToggle sideBarId="content-side-bar" className="xl:hidden">
          <X strokeWidth={1.5} />
        </SideBarToggle>
      </SideBarHeader>

      <SideBarContent>
        <div className="flex flex-col gap-2 items-start">
          {menus.map((menu, index) => (
            <SideBarItem key={`menu-${index}`} title={menu.title} href={menu.href} className="px-0" />
          ))}
          {nestedMenus.map((menu, index) => (
            <SideBarMenu
              key={`nested-${index}`}
              title={menu.title}
              items={menu.subMenus}
            />
          ))}
        </div>

        {children}
      </SideBarContent>
    </SideBarContainer>
  );
};

export default ContentSideBar;