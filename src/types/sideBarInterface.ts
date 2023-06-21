import { IconType } from "react-icons";

type Icons = {
  id: number;
  name: string;
  icon: IconType;
};

export interface SideBarTab extends Icons {
  path: string;
}

export interface SideBarSocialIcons extends Icons {
  link: string;
}
