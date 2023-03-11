import { useState } from "react";
import { Flex, IconButton, List } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

import { sideMenuSocials, sideMenuTabs } from "../utils/static";
import HeaderImage from "../components/sideBar/HeaderImage";
import HeaderText from "../components/sideBar/HeaderText";
import SideBarListItems from "../components/sideBar/SideBarListItems";
import SideBarFooter from "../components/sideBar/SideBarFooter";
import { color } from "../styles/color";

const SideBar = () => {
  const [navSize, setNavSize] = useState("large");

  const handleNavSize = () => {
    if (navSize === "small") {
      setNavSize("large");
    } else {
      setNavSize("small");
    }
  };

  const handleTabs = (name: string) => {
    console.log(name);
  };
  return (
    <Flex
      pos="sticky"
      h="100vh"
      w="16.625rem"
      flexDir="column"
      justifyContent="space-between"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.5)"
    >
      <Flex
        flexDir="column"
        alignItems="flex-start"
        position="relative"
        overflow="hidden"
        _after={{
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
          background: color.green,
        }}
      >
        <Flex flexDir="column" alignItems="flex-start" as="nav">
          <IconButton
            background="none"
            aria-label=""
            _hover={{ background: "none" }}
            icon={<FiMenu />}
            onClick={handleNavSize}
          />
        </Flex>
        <Flex
          flexDir="column"
          alignItems="center"
          width="100%"
          padding="2rem 0 1.5rem 0"
        >
          <HeaderImage />
          <HeaderText />
        </Flex>
      </Flex>
      <Flex>
        <List paddingTop="2.8rem" paddingBottom="2.8rem">
          {sideMenuTabs.map((sideBarTab) => {
            return (
              <SideBarListItems
                key={sideBarTab.id}
                sideBarTab={sideBarTab}
                onClick={handleTabs}
              />
            );
          })}
        </List>
      </Flex>
      <Flex p="5%" flexDir="column" w="100%" mb={4} alignItems="center">
        <Flex flexDir="row">
          {sideMenuSocials.map((obj, index) => {
            return <SideBarFooter key={index} socialIcons={obj} />;
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
