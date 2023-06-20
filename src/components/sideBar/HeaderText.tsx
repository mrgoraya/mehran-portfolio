import { Heading } from "@chakra-ui/react";

import { portfolioOwnerName } from "../../utils/static";

type HeaderTextProp = {
  navSize: string;
};

const HeaderText = ({ navSize }: HeaderTextProp) => {
  return (
    <Heading
      as="h4"
      size="sm"
      margin="1.43rem 0 0 0.25rem"
      fontWeight="500"
      fontSize={navSize === "small" ? "0.75rem" : "1rem"}
      textTransform="uppercase"
      letterSpacing="0.1875rem"
      transition="width 250ms ease"
    >
      {portfolioOwnerName}
    </Heading>
  );
};

export default HeaderText;
