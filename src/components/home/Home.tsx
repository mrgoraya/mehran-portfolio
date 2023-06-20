import { Box } from "@chakra-ui/react";
import HomePageText from "./HomePageText";

const Home = () => {
  return (
    <Box display="flex" height="90vh" alignItems="center">
      <HomePageText />
      <Box flex="1" flexBasis="0">
        Picture
      </Box>
    </Box>
  );
};

export default Home;
