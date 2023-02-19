import { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ThemeColorsType } from "../themes/colors";
import { ThemeContext } from "../themes/ThemeProvider";

export default function Database({ navigation }) {
  const colors = useContext(ThemeContext).colors;
  const styles = themedStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the database</Text>
      <Button
        title="Go to NotFound"
        onPress={() => navigation.navigate("NotFound")}
      />
    </View>
  );
}

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
    },
  });
  return styles;
};
