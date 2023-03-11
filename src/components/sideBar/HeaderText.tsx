import { Heading } from "@chakra-ui/react";

import { portfolioOwnerName } from "../../utils/static";

const HeaderText = () => {
  return (
    <Heading
      as="h4"
      size="sm"
      margin="1.43rem 0 0"
      fontWeight="500"
      fontSize="1rem"
      textTransform="uppercase"
      letterSpacing="0.1875rem"
    >
      {portfolioOwnerName}
    </Heading>
  );
};

export default HeaderText;
