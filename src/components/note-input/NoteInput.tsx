import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  Animated,
  Keyboard,
  EmitterSubscription,
  Platform,
  useWindowDimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import themedStyles from "./NoteInput.styles";
import { ThemeColorsType } from "../../themes/colors";

const NoteInput = ({
  submitFunction,
  colors,
  setInputActive,
}: {
  submitFunction: (textInput: string) => void;
  colors: ThemeColorsType;
  setInputActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
    setTimeout(() => {
      Keyboard.dismiss();
    }, 300);
    animation.reset();
    animation.start();
  };

  const [keyboardOffset, setKeyboardOffset] = useState(0);

  const onKeyboardShow = (event: {
    endCoordinates: {
      height: React.SetStateAction<number>;
      screenX: React.SetStateAction<number>;
      screenY: React.SetStateAction<number>;
    };
  }) => {
    console.log("Height: ", event.endCoordinates.height);
    console.log("Start X: ", event.endCoordinates.screenX);
    console.log("Start Y: ", event.endCoordinates.screenY);
    setKeyboardOffset(event.endCoordinates.height);
    if (Platform.OS === "ios") {
      setKeyboardOffset((prev) => -prev + 80);
    } else {
      setKeyboardOffset((prev) => -prev);
    }
    setInputActive(true);
  };
  const onKeyboardHide = () => {
    setKeyboardOffset(0);
    setInputActive(false);
  };

  const keyboardDidShowListener = useRef<EmitterSubscription>();
  const keyboardDidHideListener = useRef<EmitterSubscription>();

  const styles = themedStyles(colors, keyboardOffset);

  useEffect(() => {
    if (Platform.OS === "ios") {
      keyboardDidShowListener.current = Keyboard.addListener(
        "keyboardWillShow",
        onKeyboardShow
      );
      keyboardDidHideListener.current = Keyboard.addListener(
        "keyboardWillHide",
        onKeyboardHide
      );
    } else {
      keyboardDidShowListener.current = Keyboard.addListener(
        "keyboardDidShow",
        onKeyboardShow
      );
      keyboardDidHideListener.current = Keyboard.addListener(
        "keyboardDidHide",
        onKeyboardHide
      );
    }

    return () => {
      if (keyboardDidShowListener.current && keyboardDidHideListener.current) {
        keyboardDidShowListener.current.remove();
        keyboardDidHideListener.current.remove();
      }
    };
  }, []);

  const { height, width } = useWindowDimensions();

  let containerView = null;

  const showMeasures = () => {
    // containerView.measure((fx, fy, wid, hei, px, py) => {
    //   console.log("\n");
    //   console.log("Component width is: " + wid);
    //   console.log("Component height is: " + hei);
    //   console.log("X offset to page: " + px);
    //   console.log("Y offset to page: " + py);
    //   console.log("Screen height: ", height)
    //   console.log("From the bottom: ", height - py);
    //   console.log("");
    // });
  };

  useLayoutEffect(() => {
    console.log("DUPAAAAAA");
    containerView.measure((fx, fy, wid, hei, px, py) => {
      console.log("\n");
      console.log("Component width is: " + wid);
      console.log("Component height is: " + hei);
      console.log("X offset to page: " + px);
      console.log("Y offset to page: " + py);
      console.log("Screen height: ", height);
      console.log("From the bottom: ", height - py);
      console.log("");
    });
  }, []);

  return (
    <View
      style={styles.container}
      ref={(view) => {
        containerView = view;
      }}
      onLayout={(event) => showMeasures()}
    >
      <View style={styles.textInputContainer}>
        <TextInput
          ref={textInputRef}
          style={styles.textInput}
          placeholder="Take the trash out..."
          placeholderTextColor={colors.placeholder}
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
    </View>
  );
};

export default NoteInput;
