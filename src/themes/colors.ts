const Colors = {
  light: {
    background: "white",
    text: "black",
    placeholder: "gray",
    blurredBackground: "gray",
  },
  dark: {
    background: "black",
    text: "white",
    placeholder: "#a9a9a9",
    blurredBackground: "#181818",
  },
};

export type ThemeColorsKeyType = keyof typeof Colors;
export type ThemeColorsType = typeof Colors[ThemeColorsKeyType];

export default Colors;
