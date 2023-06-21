import { NavLink } from "react-router-dom";
import { HStack, Icon, ListItem, Text } from "@chakra-ui/react";

import { color } from "../../styles/color";
import { SideBarTab } from "../../types/sideBarInterface";

type SideBarListItemProps = {
  sideBarTab: SideBarTab;
  onClick: (name: string) => void;
  navSize: string;
};

const SideBarListItems = ({
  sideBarTab,
  onClick,
  navSize,
}: SideBarListItemProps) => {
  return (
    <ListItem
      width="100%"
      borderTop={sideBarTab.id === 1 ? "" : "1px solid rgba(11, 11, 19, 0.03)"}
    >
      <NavLink to={sideBarTab.path}>
        <HStack
          margin="0"
          padding="0.9375rem 1.875rem"
          transition="ease all 0.35s"
          fontSize="0.9rem"
          fontWeight="400"
          letterSpacing="0.12rem"
          textTransform="uppercase"
          lineHeight="1.125rem"
          _hover={{ color: color.green, cursor: "pointer" }}
          onClick={() => onClick(sideBarTab.name)}
        >
          <Icon fontSize="1.45rem" fontWeight="300">
            <sideBarTab.icon />
          </Icon>
          {navSize === "small" ? null : (
            <Text paddingLeft="0.625rem">{sideBarTab.name}</Text>
          )}
        </HStack>
      </NavLink>
    </ListItem>
  );
};

export default SideBarListItems;
