import { Box } from "@chakra-ui/react";
import HomePageText from "./HomePageText";
import HomePageImage from "./HomePageImage";
import { ColorModeProps } from "../../utils/colorMode";

const Home = ({ colorMode }: ColorModeProps) => {
  return (
    <Box display="flex" height="90vh" alignItems="center">
      <HomePageText />
      <HomePageImage colorMode={colorMode} />
    </Box>
  );
};

export default Home;
