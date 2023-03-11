import { Fragment } from "react";

import AppRoutes from "./routes/AppRoutes";
import ToggleColorMode from "./components/button/ToggleColorMode";
import SideBar from "./pages/sideBar";
import { Box } from "@chakra-ui/react";

export const App = () => (
  <Fragment>
    <ToggleColorMode />
    <Box position="absolute" left="17.625rem" height="100%">
      <AppRoutes />
    </Box>
    <SideBar />
  </Fragment>
);
