import { ThemeColorsType } from "../../themes/colors";
import { StyleSheet } from "react-native";

const themedStyles = (colors: ThemeColorsType) => {
  const styles = StyleSheet.create({
    container: {
      height: '50%',
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      // borderWidth: 2,
      // borderColor: '#000',
      // borderStyle: 'solid',
    },
    item: {
      color: colors.text,
      fontSize: 20,
    }
  });
  return styles;
};

export default themedStyles;
