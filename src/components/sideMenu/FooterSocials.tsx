import { Icon, theme } from "@chakra-ui/react";

import { color } from "../../utils/color";

const MenuBarFooterSocials = (props: any) => {
  const { socials, onClick } = props;
  return (
    <Icon
      color={theme.colors.black}
      fontSize={"1.3rem"}
      marginRight={"0.5rem"}
      _hover={{ color: color.green, cursor: "pointer" }}
      onClick={() => onClick(socials.name)}
      transition={"ease all 0.25s"}
    >
      <socials.icon />
    </Icon>
  );
};

export default MenuBarFooterSocials;
