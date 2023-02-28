import { Heading } from "@chakra-ui/react";

import { portfolioOwnerName } from "../../utils/static";
import { color } from "../../styles/color";

const menuText = {
  margin: "1.43rem 0 0",
  fontWeight: "500",
  textTransform: "uppercase",
  fontSize: "1rem",
  letterSpacing: "0.1875rem",
  color: color.lightBlack,
};

const HeaderText = () => {
  return (
    <Heading as={"h4"} size={"sm"} sx={menuText}>
      {portfolioOwnerName}
    </Heading>
  );
};

export default HeaderText;
