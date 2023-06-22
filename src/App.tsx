import { Fragment } from "react";
import { Box, useColorMode } from "@chakra-ui/react";

import AppRoutes from "./routes/AppRoutes";
import ToggleColorMode from "./components/button/ToggleColorMode";
import SideBar from "./pages/sideBar";

export const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Fragment>
      <ToggleColorMode
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
      />
      <Box id="mainContainer" display="flex">
        <SideBar />
        <Box w="100%">
          <AppRoutes colorMode={colorMode} />
        </Box>
      </Box>
    </Fragment>
  );
};
