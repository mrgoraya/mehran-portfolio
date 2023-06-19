import { Icon } from "@chakra-ui/react";

import { color } from "../../styles/color";
import { SideBarSocialIcons } from "../../utils/sideBarInterface";

type SideBarFooterProps = {
  socialIcons: SideBarSocialIcons;
  navSize: string;
};

const SideBarFooter = ({ socialIcons, navSize }: SideBarFooterProps) => {
  return (
    <Icon
      fontSize="1.3rem"
      margin={navSize === "small" ? "0 0 0.75rem 0.25rem" : "0 0.5rem 0 0"}
      _hover={{ color: color.green, cursor: "pointer" }}
      transition="ease all 0.25s"
    >
      <socialIcons.icon />
    </Icon>
  );
};

export default SideBarFooter;
