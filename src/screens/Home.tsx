import { StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";

import { ThemeContext } from "../themes/ThemeProvider";
import { ThemeColorsType } from "../themes/colors";

export default function Home() {
  const colors = useContext(ThemeContext).colors;
  const styles = themedStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.tsx to start working on your app!
      </Text>
      <Text style={styles.text}>Hello</Text>
      <FontAwesome name="cloud" size={32} color={colors.text} />
      <FontAwesome name="cog" size={32} color={colors.text} />
      <Ionicons icon="at" size={32} color={colors.text} />
    </View>
  );
}

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
  });
  return styles;
};
