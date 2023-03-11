import { Icon } from "@chakra-ui/react";

import { color } from "../../styles/color";
import { SideBarSocialIcons } from "../../utils/sideBarInterface";

type SideBarFooterProps = {
  socialIcons: SideBarSocialIcons;
};

const SideBarFooter = ({ socialIcons }: SideBarFooterProps) => {
  return (
    <Icon
      fontSize="1.3rem"
      marginRight="0.5rem"
      _hover={{ color: color.green, cursor: "pointer" }}
      transition="ease all 0.25s"
    >
      <socialIcons.icon />
    </Icon>
  );
};

export default SideBarFooter;
