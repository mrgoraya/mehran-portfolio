import { Fragment } from "react";

import AppRoutes from "./routes/AppRoutes";
import ToggleColorMode from "./components/button/ToggleColorMode";
import SideBar from "./pages/sideBar";
import { Box } from "@chakra-ui/react";

export const App = () => (
  <Fragment>
    <ToggleColorMode />
    <Box display="flex">
      <SideBar />
      <Box margin="1rem">
        <AppRoutes />
      </Box>
    </Box>
  </Fragment>
);
