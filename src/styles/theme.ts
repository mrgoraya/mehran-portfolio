import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  components: {
    //components
  },
  config: {
    //light / dark mode configuration
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    menuBarColorDark: "#0c0c14",
    menuBarColorLight: "#f7f7ff",
  },
  fonts: {
    heading: "Dancing Script",
  },
});

export default customTheme;
