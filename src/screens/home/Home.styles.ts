import { ThemeColorsType } from "../../themes/colors";
import { StyleSheet } from "react-native";

const themedStyles = (colors: ThemeColorsType, inputActive: boolean) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      color: colors.text,
      backgroundColor: inputActive ? colors.blurredBackground : colors.background,
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 12,
    },
    text: {
      color: colors.text,
      fontSize: 28,
    },
    addNoteContainer: {
      width: "100%",
      height: 60,
      justifyContent: 'flex-end',
    },
  });
  return styles;
};

export default themedStyles;
