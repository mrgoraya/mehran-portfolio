import { Box, Image } from "@chakra-ui/react";

import mehranImage from "../../assets/mehran.png";

const HeaderImage = () => {
  return (
    <Box
      width="7.5rem"
      height="7.5rem"
      overflow="hidden"
      display="inline-block"
      verticalAlign="top"
      borderRadius="50%"
      border="5px solid #fff"
    >
      <Image src={mehranImage}></Image>
    </Box>
  );
};

export default HeaderImage;
