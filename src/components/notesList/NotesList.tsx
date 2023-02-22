import React from "react";
import { FlatList, Text, View } from "react-native";
import { ThemeColorsType } from "../../themes/colors";
import { NoteType } from "../../types/notes";
import themedStyles from "./NotesList.styles";

type NotesListProps = {
  notes: NoteType[];
  colors: ThemeColorsType;
};

const NotesList = (props: NotesListProps) => {
  const styles = themedStyles(props.colors);
  return (
    <View style={styles.container}>
      <FlatList
        data={props.notes}
        renderItem={({ item }) => (
          <SingleNoteItem note={item} colors={props.colors} />
        )}
      />
    </View>
  );
};

const SingleNoteItem = ({
  note,
  colors,
}: {
  note: NoteType;
  colors: ThemeColorsType;
}) => {
  const styles = themedStyles(colors);
  return <Text style={styles.item}>{note.text}</Text>;
};

export default NotesList;
