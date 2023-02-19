import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { ThemeContext } from "./src/themes/ThemeProvider";
import Navigation from "./src/navigation";

const AppIntro = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <Navigation />
      <StatusBar style={theme.colorTheme === "light" ? "dark" : "light"} />
    </>
  );
};

export default AppIntro;
