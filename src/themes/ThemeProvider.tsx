import React, { ReactNode, useState } from "react";
import Colors, { ThemeColorsType, ThemeColorsKeyType } from "./colors";
import PropTypes from "prop-types";

type ThemeContextType = {
  colorTheme: ThemeColorsKeyType;
  colors: ThemeColorsType;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  colorTheme: "light",
  colors: Colors["light"],
  toggleTheme: () => {
    return null;
  },
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [colorTheme, setColorTheme] = useState<ThemeColorsKeyType>("light");
  const toggleTheme = () =>
    setColorTheme(colorTheme === "light" ? "dark" : "light");

  const theme = {
    colorTheme,
    colors: Colors[colorTheme],
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThemeProvider;
