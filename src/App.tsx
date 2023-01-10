import React from "react"
import {
  ChakraProvider,
} from "@chakra-ui/react"
import SideMenuBar from "./pages/menu/SideMenu"
import customeTheme from "./themes/theme"


export const App = () => (
  <ChakraProvider theme={customeTheme}>
    <SideMenuBar/>
  </ChakraProvider>
)
