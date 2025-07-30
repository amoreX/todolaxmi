import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNoteStore } from "@/context/NoteContext";
import NoteList from "@/components/NoteList";
import NoteEditor from "@/components/NoteEditor";
import NoteHeader from "@/components/NoteHeader";
import NoteFooter from "@/components/NoteFooter";
export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  const loadNotes = useNoteStore((state) => state.loadNotes);
  const selectedNoteId = useNoteStore((state) => state.selectedNoteId);

  useEffect(() => {
    loadNotes();
  }, []);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoid}
      >
        <Animated.View
          style={[
            styles.appContainer,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <NoteHeader />
          {selectedNoteId ? <NoteEditor /> : <NoteList />}
          <NoteFooter />
        </Animated.View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d6e9f2",
  },
  keyboardAvoid: {
    flex: 1,
  },
  appContainer: {
    flex: 1,
    padding: 20,
  },
});
