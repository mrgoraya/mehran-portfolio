import { Flex, IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

const ToggleSideBar = () => {
  return (
    <Flex flexDir="column" alignItems="flex-start" as="nav">
      <IconButton
        background="none"
        aria-label=""
        _hover={{ background: "none" }}
        icon={<FiMenu />}
        onClick={() => {}}
      />
    </Flex>
  );
};

export default ToggleSideBar;
