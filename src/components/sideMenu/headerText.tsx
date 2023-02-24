import * as React from "react";
import { Heading } from "@chakra-ui/react";

import { portfolioOwnerName } from "../../utils/static";
import { color } from "../../utils/color";

const menuText = {
  margin: "1.43rem 0 0",
  fontWeight: "400",
  textTransform: "uppercase",
  fontSize: "0.875rem",
  letterSpacing: "0.1875rem",
  color: color.black,
};

const SideMenuHeaderText = () => {
  return (
    <Heading as={"h5"} size={"sm"} sx={menuText}>
      {portfolioOwnerName}
    </Heading>
  );
};

export default SideMenuHeaderText;
