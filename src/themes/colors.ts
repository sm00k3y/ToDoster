const Colors = {
  light: {
    background: "white",
    text: "black",
  },
  dark: {
    background: "black",
    text: "white",
  },
};

export type ThemeColorsKeyType = keyof typeof Colors;
export type ThemeColorsType = typeof Colors[ThemeColorsKeyType];

export default Colors;
