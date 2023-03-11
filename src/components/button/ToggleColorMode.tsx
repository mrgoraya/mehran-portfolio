import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={() => toggleColorMode()}
      pos="absolute"
      top="0"
      right="0"
      m="1rem"
    >
      {colorMode === "dark" ? (
        <SunIcon color="orange.400" />
      ) : (
        <MoonIcon color="blue.700" />
      )}
    </Button>
  );
};

export default ToggleColorMode;
