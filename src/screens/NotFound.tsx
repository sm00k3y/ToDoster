import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../themes/ThemeProvider";
import { ThemeColorsType } from "../themes/colors";

const NotFound = () => {
  const colors = useContext(ThemeContext).colors;
  const styles = themedStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page not found</Text>
      <Ionicons name="at" size={34} color="green" />
    </View>
  );
};

const themedStyles = (colors: ThemeColorsType) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
    },
    text: {
      color: colors.text,
      fontSize: 34,
    },
  });
  return styles;
};

export default NotFound;
