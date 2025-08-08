import { MenuItem } from "primeng/api";

export interface MyMenuItem extends MenuItem {
  label: string;
  subMenu?: SubMenuItem[];
}

export interface SubMenuItem {
  title: string
  items?: Item[];
  subItems?: Item[];
}

export interface Item {
  label: string;
}
