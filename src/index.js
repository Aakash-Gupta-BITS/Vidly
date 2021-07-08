import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Questions from "./components/Questions";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "dark",
  },
});
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Questions />
  </ChakraProvider>,
  document.getElementById("root")
);
