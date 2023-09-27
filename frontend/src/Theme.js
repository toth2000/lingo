import React from "react";
import { ThemeProvider } from "styled-components";

const Theme = ({ children }) => {
  const theme = {
    colors: {
      lingoBrown: "#231123",
      lingoGreen: "#c5d86d",
      lingoLightGrey: "#f7f7f2",
      lingoOrange: "#f05d23",
      lingoLightGreen: "##E4E6C3",
      lingoBackgroundWhite: "#EFEFEF",
      lingoWhite: "#fff",
      lingoBlack: "#000",
    },
    breakpoints: {
      mobile: "360px",
      tablet: "768px",
      laptop: "1366px",
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
