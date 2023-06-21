import { AiOutlineHome } from "react-icons/ai";
import { BsBookmarks, BsMap, BsCardHeading } from "react-icons/bs";
import {
  FaBlogger,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaRegIdBadge,
} from "react-icons/fa";

import { routes } from "./routes";
import { SideBarSocialIcons, SideBarTab } from "./sideBarInterface";

export const portfolioOwnerName = "Mehran Rasheed";

export const sideMenuTabs: SideBarTab[] = [
  { id: 1, name: "Home", icon: AiOutlineHome, path: routes.Home },
  { id: 2, name: "About Me", icon: FaRegIdBadge, path: routes.AboutMe },
  { id: 3, name: "Services", icon: BsCardHeading, path: routes.Services },
  { id: 4, name: "Portfolio", icon: BsBookmarks, path: routes.Portfolio },
  { id: 5, name: "Blogs", icon: FaBlogger, path: routes.Blogs },
  { id: 6, name: "Contact Me", icon: BsMap, path: routes.ContactMe },
];

export const sideMenuSocials: SideBarSocialIcons[] = [
  { id: 1, name: "facebook", icon: FaFacebookF, link: "" },
  { id: 2, name: "twitter", icon: FaTwitter, link: "" },
  { id: 3, name: "instagram", icon: FaInstagram, link: "" },
  { id: 4, name: "linkdin", icon: FaLinkedinIn, link: "" },
];
