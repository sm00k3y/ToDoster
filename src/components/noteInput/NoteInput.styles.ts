import { ThemeColorsType } from "../../themes/colors";
import { StyleSheet } from "react-native";

const themedStyles = (colors: ThemeColorsType) => {
  const styles = StyleSheet.create({
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
  });
  return styles;
};

export default themedStyles;
