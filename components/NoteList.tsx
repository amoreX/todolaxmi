import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNoteStore } from "@/context/NoteContext";

const NoteList = () => {
  const notes = useNoteStore((s) => s.notes);
  const setSelectedNoteId = useNoteStore((s) => s.setSelectedNoteId);
  const createNote = useNoteStore((s) => s.createNote);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={createNote} style={styles.newNoteButton}>
        <Text style={styles.newNoteText}>+ New Note</Text>
      </TouchableOpacity>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedNoteId(item.id)}
            style={styles.noteItem}
          >
            <Text style={styles.title}>{item.title || "Untitled"}</Text>
            <Text style={styles.snippet}>
              {item.content.slice(0, 50) || "No content..."}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  newNoteButton: {
    marginBottom: 10,
    padding: 12,
    backgroundColor: "#ffdac1",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#333",
  },
  newNoteText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  noteItem: {
    backgroundColor: "#fffdfa",
    padding: 16,
    marginBottom: 10,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  snippet: {
    fontSize: 13,
    color: "#666",
    marginTop: 4,
  },
});

export default NoteList;
