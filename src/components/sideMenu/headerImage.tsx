import React from "react";

import { Box, Image } from "@chakra-ui/react";
import mehranImage from "../../assets/mehran.png";

const menuImage = {
  width: "7.5rem",
  height: "7.5rem",
  overflow: "hidden",
  display: "inline-block",
  verticalAlign: "top",
  borderRadius: "50%",
  border: "5px solid #fff",
};

const SideMenuHeaderImage = () => {
  return (
    <Box sx={menuImage}>
      <Image src={mehranImage}></Image>
    </Box>
  );
};

export default SideMenuHeaderImage;
