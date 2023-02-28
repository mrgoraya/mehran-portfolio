import { Fragment } from "react";
import { Box } from "@chakra-ui/react";

import SideMenuBar from "./pages/sideMenu";
import AppRoutes from "./routes/AppRoutes";

export const App = () => (
  <Fragment>
    <SideMenuBar />
    <Box
      left={"15.625rem"}
      position={"absolute"}
      height={"100%"}
      width={"calc(100% - 15.625rem)"}
    >
      {/* <HomePage/> */}

      <AppRoutes />
    </Box>
  </Fragment>
);
