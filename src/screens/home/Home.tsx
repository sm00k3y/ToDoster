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
import NotesList from "../../components/notesList/NotesList";
import { NoteType } from "../../types/notes";
import NoteInput from "../../components/noteInput/NoteInput";

export default function Home() {
  const colors = useContext(ThemeContext).colors;
  const styles = themedStyles(colors);

  const _notes: NoteType[] = [
    { text: "Take the dog for a walk" },
    { text: "Trash out" },
    { text: "Michael's birthday" },
  ];

  const [notes, setNotes] = useState(_notes);

  const addNote = (noteText: string) => {
    setNotes([...notes, { text: noteText }]);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.text}>Add new note here</Text>
        <View style={styles.addNoteContainer}>
          <NoteInput submitFunction={addNote} colors={colors} />
        </View>
        <NotesList notes={notes} colors={colors} />
        <Button title="Reset" onPress={() => setNotes([])} />
      </View>
    </TouchableWithoutFeedback>
  );
}
