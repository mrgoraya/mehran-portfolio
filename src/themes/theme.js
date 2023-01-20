import { extendTheme } from "@chakra-ui/react";

const customeTheme = extendTheme({
  components: {
    //components
  },
  config: {
    //light / dark mode configuration
  },
  colors: {
    menuBarColorDark: "#0c0c14",
    menuBarColorLight: "#f7f7ff",
  },
});

export default customeTheme;