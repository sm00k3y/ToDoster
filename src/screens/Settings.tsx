import { useContext } from "react";
import { Switch, Text, View } from "react-native";

import { ThemeContext } from "../themes/ThemeProvider";
import themedStyles from "./Settings.styles";

export default function SettingsPage() {
  const theme = useContext(ThemeContext);
  const colors = theme.colors;

  const styles = themedStyles(theme.colors);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: colors.text }]}>Color Theme</Text>
      <View style={styles.toggleContainer}>
        <Text style={styles.colorText}>Light</Text>
        <Switch
          style={styles.switch}
          value={theme.colorTheme === "dark"}
          onValueChange={theme.toggleTheme}
        />
        <Text style={styles.colorText}>Dark</Text>
      </View>
    </View>
  );
}

