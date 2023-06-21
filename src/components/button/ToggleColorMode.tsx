import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

type ToggleColorModeProps = {
  toggleColorMode: () => void;
  colorMode: string;
};

const ToggleColorMode = ({
  colorMode,
  toggleColorMode,
}: ToggleColorModeProps) => {
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
