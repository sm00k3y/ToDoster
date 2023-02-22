import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useContext } from "react";

import { ThemeContext } from "../../themes/ThemeProvider";
import themedStyles from "./Home.styles";

export default function Home() {
  const colors = useContext(ThemeContext).colors;
  const styles = themedStyles(colors);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.text}>Add new note</Text>
        <View style={styles.addNoteContainer}>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.textInput} />
            <FontAwesome name="times" size={24} color={colors.text} />
          </View>
          <FontAwesome name="plus-circle" size={34} color={colors.text} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
