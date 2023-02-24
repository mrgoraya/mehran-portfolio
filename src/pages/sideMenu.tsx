import { Box, HStack, List } from "@chakra-ui/react";

import SideMenuHeaderText from "../components/sideMenu/HeaderText";
import SideMenuListItem from "../components/sideMenu/ListItem";
import MenuBarFooterSocials from "../components/sideMenu/FooterSocials";
import { sideMenuTabs } from "../utils/static";
import { sideMenuSocials } from "../utils/static";
import SideMenuHeaderImage from "../components/sideMenu/HeaderImage";

const menuHeaderTop = {
  textAlign: "center",
  position: "relative",
  padding: "4rem 1.5rem 1.5rem",
  "&:after": {
    content: '""',
    position: "absolute",
    top: "-11.25rem",
    left: "-3.125rem",
    right: "0",
    bottom: "0",
    zIndex: "-1",
    borderRadius: "0 0 50% 50%",
    width: "21.875rem",
    height: "21.875rem",
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
      width={"16.625rem"}
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
        <List paddingTop={"2.8rem"} paddingBottom={"2.8rem"}>
          {sideMenuTabs.map((tab) => {
            return <SideMenuListItem sideMenuTab={tab} onClick={handleTabs} />;
          })}
        </List>
      </Box>
      <HStack justifyContent={"center"} padding={"0.75rem 0"}>
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
