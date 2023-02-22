import { ThemeColorsType } from "../../themes/colors";
import { StyleSheet } from "react-native";

const themedStyles = (colors: ThemeColorsType) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      color: colors.text,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: colors.text,
    },
    addNoteContainer: {
      flexDirection: "row",
      width: "80%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    textInputContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      borderWidth: 2,
      borderColor: "#000",
      borderStyle: "solid",
      borderRadius: 15,
    },
    textInput: {
      width: "80%",
      height: "10%",
    },
  });
  return styles;
};

export default themedStyles;
