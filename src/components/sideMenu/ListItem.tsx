import { HStack, Icon, ListItem, Text } from "@chakra-ui/react";
import React from "react";

import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const menuListItems = {
  margin: "0",
  padding: "0.9375rem 1.875rem",
  color: "rgba(11, 11, 19, 0.7)",
  textDecoration: "none",
  transition: "ease all 0.35s",
  fontSize: "0.9rem",
  fontWeight: "400",
  letterSpacing: "0.12rem",
  textTransform: "uppercase",
  lineHeight: "1.125rem",
};

const SideMenuListItem = (props: any) => {
  const { sideMenuTab, onClick } = props;

  return (
    <ListItem
      width={"100%"}
      borderTop={sideMenuTab.id === 1 ? "" : "1px solid rgba(11, 11, 19, 0.03)"}
    >
      <NavLink to={sideMenuTab.path}>
        <HStack
          sx={menuListItems}
          onClick={() => onClick(sideMenuTab.name)}
          _hover={{ color: "#2fbf71", cursor: "pointer" }}
        >
          <Icon fontSize={"1.45rem"} fontWeight={"300"}>
            <sideMenuTab.icon />
          </Icon>
          <Text paddingLeft={"0.625rem"}>{sideMenuTab.name}</Text>
        </HStack>
      </NavLink>
    </ListItem>
  );
};

export default SideMenuListItem;
