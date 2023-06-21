import { Fragment } from "react";

import AppRoutes from "./routes/AppRoutes";
import ToggleColorMode from "./components/button/ToggleColorMode";
import SideBar from "./pages/sideBar";
import { Box, useColorMode } from "@chakra-ui/react";

export const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Fragment>
      <ToggleColorMode
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
      />
      <Box display="flex">
        <SideBar />
        <Box margin="1rem">
          <AppRoutes colorMode={colorMode} />
        </Box>
      </Box>
    </Fragment>
  );
};
