import type { SideBarMenuItem } from "@/components/ui/sidebar";
import type { RawMenuItem } from "@/types/content";

export type Menu = {
  title: string;
  subMenus: SideBarMenuItem[];
}

/**
 * Get the menu if it exists inside the haystack
 * 
 * @param needle The item to be searched for inside the haystack
 * @param haystack The collection of needles
 */
function getMenu(needle: string, haystack: Menu[]): Menu | undefined {
  return haystack.find(item => item.title === needle);
};

/**
 * Generate the menus and split them into single and nested menus
 * 
 * @param collectionName The name of the collection being passed
 * @param items The content of the collection
 */
function generateMenus(collectionName: string, items: RawMenuItem[]): [SideBarMenuItem[], Menu[]] {
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

export {
  generateMenus,
};