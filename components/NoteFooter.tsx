import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NoteFooter: React.FC = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>Made with Love for My Mimi 💙</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop: 16,
  },
  footerText: {
    color: "#666",
    fontStyle: "italic",
    fontSize: 13,
    textAlign: "center",
  },
});

export default NoteFooter;
