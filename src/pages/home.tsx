import { Box } from "@chakra-ui/react";
import { ColorModeProps } from "../types/colorMode";
import HomePageText from "../components/home/HomePageText";

const HomePage = ({ colorMode }: ColorModeProps) => {
  return (
    <Box
      display="flex"
      height="90vh"
      alignItems="center"
      position="relative"
      zIndex="-1"
      overflow="hidden"
      _after={{
        content: '""',
        position: "absolute",
        right: "-20vh",
        top: "-20vh",
        width: "95vh",
        height: "95vh",
        borderRadius: "50%",
        background: colorMode === "dark" ? "#0b0b13" : "#f7f7ff",
        zIndex: "-1",
      }}
    >
      <HomePageText />
      <Box flex="1" flexBasis="0">
        Paste picture here
      </Box>
    </Box>
  );
};

export default HomePage;
