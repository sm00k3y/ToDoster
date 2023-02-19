import { StyleSheet } from "react-native";

import { ThemeColorsType } from "../themes/colors";

const themedStyles = (colors: ThemeColorsType) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: colors.text,
      fontSize: 24,
      marginBottom: 15,
    },
    toggleContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    switch: {
      marginLeft: 12,
      marginRight: 12,
    },
    colorText: {
      color: colors.text,
      fontSize: 16,
    },
  });
  return styles;
};

export default themedStyles;
