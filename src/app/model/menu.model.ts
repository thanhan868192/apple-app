import { MenuItem } from "primeng/api";

export interface MyMenuItem extends MenuItem {
    label: string;
    subMenu?: SubMenuItem[];
}

export interface SubMenuItem {
    label: string;
    link?: string;
    icon?: string;
}