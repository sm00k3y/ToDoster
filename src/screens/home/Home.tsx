import {
  Button,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useContext, useState } from "react";

import { ThemeContext } from "../../themes/ThemeProvider";
import themedStyles from "./Home.styles";
import NotesList from "../../components/notes-list/NotesList";
import { NoteType } from "../../types/notes";
import NoteInput from "../../components/note-input/NoteInput";

export default function Home() {
  const colors = useContext(ThemeContext).colors;

  const _notes: NoteType[] = [
    { text: "Take the dog for a walk" },
    { text: "Trash out" },
    { text: "Michael's birthday" },
    { text: "Take the dog for a walk" },
    { text: "Trash out" },
    { text: "Michael's birthday" },
    { text: "Take the dog for a walk" },
    { text: "Trash out" },
    { text: "Michael's birthday" },
    { text: "Take the dog for a walk" },
    { text: "Trash out" },
    { text: "Michael's birthday" },
  ];

  const [notes, setNotes] = useState(_notes);

  const addNote = (noteText: string) => {
    setNotes([...notes, { text: noteText }]);
  };

  const [inputActive, setInputActive] = useState<boolean>(false);

  const styles = themedStyles(colors, inputActive);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <NotesList notes={notes} colors={colors} />
        <Button title="Reset" onPress={() => setNotes([])} />
        <Text style={styles.text}>Add new note here</Text>
        <View style={styles.addNoteContainer}>
          <NoteInput submitFunction={addNote} colors={colors} setInputActive={setInputActive}/>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
