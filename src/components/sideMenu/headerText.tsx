import * as React from "react";
import { Heading } from "@chakra-ui/react";

import { portfolioOwnerName } from "../../utils/static";

const menuText = {
  margin: "23px 0 0",
  fontWeight: "400",
  textTransform: "uppercase",
  fontSize: "14px",
  letterSpacing: "3px",
  color: "#0c0c14",
};

const SideMenuHeaderText = () => {
  return (
    <Heading as={"h5"} size={"sm"} sx={menuText}>
      {portfolioOwnerName}
    </Heading>
  );
};

export default SideMenuHeaderText;
