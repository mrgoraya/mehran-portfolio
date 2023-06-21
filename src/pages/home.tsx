import { Box } from "@chakra-ui/react";
import Home from "../components/home/Home";
import { ColorModeProps } from "../types/colorMode";

const HomePage = ({ colorMode }: ColorModeProps) => {
  return (
    <Box zIndex={"-2"}>
      <Home colorMode={colorMode} />
    </Box>
  );
};

export default HomePage;
