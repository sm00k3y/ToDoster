import { ThemeColorsType } from "../../themes/colors";
import { StyleSheet } from "react-native";

const themedStyles = (colors: ThemeColorsType, keyboardOffset: number) => {
  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      backgroundColor: colors.background,
      flexDirection: "row",
      width: "100%",
      height: "100%",
      justifyContent: "space-evenly",
      alignItems: "center",
      top: keyboardOffset,
      // borderWidth: 2,
      // borderColor: '#000',
      // borderStyle: 'solid',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
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
      color: colors.text,
      // borderWidth: 2,
      // borderColor: '#000',
      // borderStyle: 'solid',
    },
  });
  return styles;
};

export default themedStyles;
