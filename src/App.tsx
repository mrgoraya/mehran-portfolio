import React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import SideMenuBar from "./Pages/Menu/SideMenu"

export const App = () => (
  <ChakraProvider theme={theme}>
    <SideMenuBar/>
  </ChakraProvider>
)
