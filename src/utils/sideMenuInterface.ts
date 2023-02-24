import { IconType } from "react-icons";

type Icons = {
  id: number;
  name: string;
  icon: IconType;
};

export interface SideMenuTab extends Icons {
  path: string;
}

export interface SideMenuSocial extends Icons {
  link: string;
}
