import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { useNoteStore } from "@/context/NoteContext";

const NoteEditor = () => {
  const { notes, selectedNoteId, updateNote, setSelectedNoteId, deleteNote } =
    useNoteStore();

  const note = notes.find((n) => n.id === selectedNoteId);

  if (!note) return null;

  return (
    <View style={styles.container}>
      <TextInput
        value={note.title}
        onChangeText={(text) => updateNote(note.id, { title: text })}
        style={styles.titleInput}
        placeholder="Title"
        placeholderTextColor="#999"
      />
      <TextInput
        value={note.content}
        onChangeText={(text) => updateNote(note.id, { content: text })}
        style={styles.contentInput}
        multiline
        placeholder="Start writing your note..."
        placeholderTextColor="#999"
      />

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setSelectedNoteId(null)}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {
            deleteNote(note.id);
          }}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  titleInput: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    padding: 12,
    backgroundColor: "#fffdfa",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#333",
  },
  contentInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    padding: 12,
    backgroundColor: "#fffdfa",
    textAlignVertical: "top",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#333",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  backButton: {
    backgroundColor: "#c0ebd7",
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#333",
  },
  backButtonText: {
    color: "#333",
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#ffc9c9",
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#333",
  },
  deleteButtonText: {
    color: "#333",
    fontWeight: "bold",
  },
});

export default NoteEditor;
