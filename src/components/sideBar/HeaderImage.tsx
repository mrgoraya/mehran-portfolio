import { Box, Image } from "@chakra-ui/react";

import mehranImage from "../../assets/mehran.png";

type HeaderImageProp = {
  navSize: string;
};

const HeaderImage = ({ navSize }: HeaderImageProp) => {
  return (
    <Box
      width={navSize === "small" ? "4.5rem" : "7.5rem"}
      height={navSize === "small" ? "4.5rem" : "7.5rem"}
      overflow="hidden"
      display="inline-block"
      verticalAlign="top"
      borderRadius="50%"
      border="5px solid #fff"
      transition="width 250ms ease"
    >
      <Image src={mehranImage}></Image>
    </Box>
  );
};

export default HeaderImage;
