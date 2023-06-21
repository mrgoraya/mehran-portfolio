import { Box } from "@chakra-ui/react";
import { ColorModeProps } from "../../types/colorMode";

// TODO: there is bug for the overflow in the circle

const HomePageImage = ({ colorMode }: ColorModeProps) => {
  return (
    <Box flex="1" flexBasis="0" position="relative">
      <Box
        width="56.25rem"
        height="56.25rem"
        borderRadius="80%"
        backgroundColor={colorMode === "dark" ? "#0b0b13" : "#f7f7ff"}
        position="absolute"
        transform="translate(-80px, -800px)"
        zIndex="-1"
      ></Box>
    </Box>
  );
};

export default HomePageImage;
