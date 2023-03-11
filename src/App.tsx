import { Fragment } from "react";

import AppRoutes from "./routes/AppRoutes";
import ToggleColorMode from "./components/button/ToggleColorMode";
import SideBar from "./pages/sideBar";
import { Box } from "@chakra-ui/react";

export const App = () => (
  <Fragment>
    <ToggleColorMode />
    <SideBar />
    <Box left={"15.625rem"} height={"100%"} width={"calc(100% - 15.625rem)"}>
      <AppRoutes />
    </Box>
  </Fragment>
);
