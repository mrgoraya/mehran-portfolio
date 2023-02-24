import React from "react";
import { Box, HStack, List } from "@chakra-ui/react";

import SideMenuHeaderImage from "../components/sideMenu/headerImage";
import SideMenuHeaderText from "../components/sideMenu/headerText";
import SideMenuListItem from "../components/sideMenu/ListItem";
import MenuBarFooterSocials from "../components/sideMenu/FooterSocials";
import { sideMenuTabs } from "../utils/static";
import { sideMenuSocials } from "../utils/static";

const menuHeaderTop = {
  textAlign: "center",
  position: "relative",
  padding: "65px 25px 25px",
  "&:after": {
    content: '""',
    position: "absolute",
    top: "-180px",
    left: "-50px",
    right: "0",
    bottom: "0",
    zIndex: "-1",
    borderRadius: "0 0 50% 50%",
    width: "350px",
    height: "350px",
    background: "#2fbf71",
  },
};

const SideMenuBar = () => {
  const handleTabs = (name: string) => {
    console.log(name);
  };

  const handleSocials = (name: string) => {
    console.log(name);
  };

  return (
    <Box
      width={"250px"}
      position={"fixed"}
      bottom={0}
      top={0}
      backgroundColor={"menuBarColorLight"}
    >
      <Box height={"calc(100% - 50px);"}>
        <Box sx={menuHeaderTop}>
          <SideMenuHeaderImage />
          <SideMenuHeaderText />
        </Box>
        <List paddingTop={"45px"} paddingBottom={"45px"}>
          {sideMenuTabs.map((tab) => {
            return <SideMenuListItem sideMenuTab={tab} onClick={handleTabs} />;
          })}
        </List>
      </Box>
      <HStack justifyContent={"center"} padding={"12px 0"}>
        <Box>
          {sideMenuSocials.map((obj) => {
            return (
              <MenuBarFooterSocials socials={obj} onClick={handleSocials} />
            );
          })}
        </Box>
      </HStack>
    </Box>
  );
};

export default SideMenuBar;
