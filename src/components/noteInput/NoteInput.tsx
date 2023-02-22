import React, { useRef, useState } from "react";
import { View, TextInput, Pressable, Animated, Keyboard } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import themedStyles from "./NoteInput.styles";
import { ThemeColorsType } from "../../themes/colors";

const NoteInput = ({
  submitFunction,
  colors,
}: {
  submitFunction: (textInput: string) => void;
  colors: ThemeColorsType;
}) => {
  const styles = themedStyles(colors);

  const [noteText, setNoteText] = useState<string>("");
  const textInputRef = useRef<TextInput>(null);

  const clearInput = () => {
    if (textInputRef.current) {
      textInputRef.current.clear();
      textInputRef.current.focus();
    }
  };

  const spinValue = useRef(new Animated.Value(0)).current;

  const animation = Animated.timing(spinValue, {
    toValue: 1,
    duration: 300,
    useNativeDriver: true,
  });

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const submit = () => {
    if (noteText) {
      submitFunction(noteText);
      setNoteText("");
    }
    Keyboard.dismiss();
    animation.reset();
    animation.start();
  };

  return (
    <>
      <View style={styles.textInputContainer}>
        <TextInput
          ref={textInputRef}
          style={styles.textInput}
          placeholder="Take the trash out..."
          defaultValue={noteText}
          onChangeText={(text) => setNoteText(text)}
        />
        <Pressable onPress={clearInput}>
          <FontAwesome name="times" size={24} color={colors.text} />
        </Pressable>
      </View>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <Pressable onPress={submit}>
          <FontAwesome name="plus-circle" size={34} color={colors.text} />
        </Pressable>
      </Animated.View>
    </>
  );
};

export default NoteInput;
