import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, NavLink, Routes } from "react-router-dom";
import { Route } from "react-router";

import customeTheme from "./themes/theme";
import SideMenuBar from "./pages/sideMenu";
import HomePage from "./pages/home";
import { routes } from "./utils/routes";
import AboutMe from "./pages/aboutMe";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import Blog from "./pages/blog";
import ContactMe from "./pages/contactMe";

export const App = () => (
  <ChakraProvider theme={customeTheme}>
    <SideMenuBar />
    <Box
      left={"15.625rem"}
      position={"absolute"}
      height={"100%"}
      width={"calc(100% - 15.625rem)"}
    >
      {/* <HomePage/> */}

      <Routes>
        <Route path={routes.Home} element={<HomePage />} />
        <Route path={routes.AboutMe} element={<AboutMe />} />
        <Route path={routes.Services} element={<Services />} />
        <Route path={routes.Portfolio} element={<Portfolio />} />
        <Route path={routes.Blogs} element={<Blog />} />
        <Route path={routes.ContactMe} element={<ContactMe />} />
        <Route path={"/"} element={<HomePage />} />
      </Routes>
    </Box>
  </ChakraProvider>
);
