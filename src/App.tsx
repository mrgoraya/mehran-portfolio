import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import customeTheme from './themes/theme';
import SideMenuBar from './pages/sideMenu';

export const App = () => (
  <ChakraProvider theme={customeTheme}>
    <SideMenuBar />
  </ChakraProvider>
);
