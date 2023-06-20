import { Box, Heading, Text } from "@chakra-ui/react";
import DownloadCVButton from "./DownloadCVButton";

const HomePageText = () => {
  return (
    <Box
      width="100%"
      height="auto"
      flex="1"
      flexBasis="0"
      margin="0.5rem"
      padding="0.5rem"
    >
      <Heading as="h6" size="lg" marginY="0.5rem">
        Hello, I am
      </Heading>
      <Heading as="h1" size="4xl" marginY="2rem">
        Mehran Rasheed
      </Heading>
      <Text fontSize="2xl" marginY="0.5rem">
        I Am Passionate
      </Text>
      <Text fontSize="large" marginY="0.5rem">
        A versatile full-stack developer skilled in TypeScript and Node.js, with
        expertise in DevOps practices. Additionally, a competent cloud engineer
        proficient in designing and managing cloud-based systems to ensure
        optimal performance and scalability.
      </Text>
      <DownloadCVButton />
    </Box>
  );
};

export default HomePageText;
