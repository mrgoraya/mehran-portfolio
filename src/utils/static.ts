import { AiOutlineHome } from "react-icons/ai";
import { FaRegIdBadge } from "react-icons/fa";
import { BsCardHeading } from "react-icons/bs";
import { BsBookmarks } from "react-icons/bs";
import { FaBlogger } from "react-icons/fa";
import { BsMap } from "react-icons/bs";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

import { routes } from "../routes/routes";
import { SideMenuSocial, SideMenuTab } from "./sideMenuInterface";

export const portfolioOwnerName: string = "Mehran Rasheed";

export const sideMenuTabs: Array<SideMenuTab> = [
  { id: 1, name: "Home", icon: AiOutlineHome, path: routes.Home },
  { id: 2, name: "About Me", icon: FaRegIdBadge, path: routes.AboutMe },
  { id: 3, name: "Services", icon: BsCardHeading, path: routes.Services },
  { id: 4, name: "Portfolio", icon: BsBookmarks, path: routes.Portfolio },
  { id: 5, name: "Blogs", icon: FaBlogger, path: routes.Blogs },
  { id: 6, name: "Contact Me", icon: BsMap, path: routes.ContactMe },
];

export const sideMenuSocials: Array<SideMenuSocial> = [
  { id: 1, name: "facebook", icon: FaFacebookF, link: "" },
  { id: 2, name: "twitter", icon: FaTwitter, link: "" },
  { id: 3, name: "instagram", icon: FaInstagram, link: "" },
  { id: 4, name: "linkdin", icon: FaLinkedinIn, link: "" },
  { id: 5, name: "pinterest", icon: FaPinterest, link: "" },
];
