import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#822000",
    secondary: "#FFFFFF"
  },
  fonts: {
      primary:["sans-serif", "Roboto"],
      accent:["serif", "Roboto"]
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;