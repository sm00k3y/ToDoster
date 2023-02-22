import { ThemeColorsType } from "../../themes/colors";
import { StyleSheet } from "react-native";

const themedStyles = (colors: ThemeColorsType) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      color: colors.text,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    text: {
      color: colors.text,
      fontSize: 28,
    },
    addNoteContainer: {
      flexDirection: "row",
      width: "80%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    textInputContainer: {
      height: 40,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      borderWidth: 2,
      borderColor: colors.text,
      borderStyle: "solid",
      borderRadius: 15,
    },
    textInput: {
      width: "80%",
      height: "100%",
      // borderWidth: 2,
      // borderColor: '#000',
      // borderStyle: 'solid',
    },
    addNoteButton: {
      transform: [{ rotate: "20 deg" }],
    },
  });
  return styles;
};

export default themedStyles;
