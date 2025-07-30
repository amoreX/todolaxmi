import AsyncStorage from "@react-native-async-storage/async-storage";
import { Note } from "../types";

const STORAGE_KEY = "notes";

export const storeNotes = async (notes: Note[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (e) {
    console.error("Error storing notes", e);
  }
};

export const retrieveNotes = async (): Promise<Note[] | null> => {
  try {
    const notes = await AsyncStorage.getItem(STORAGE_KEY);
    return notes ? JSON.parse(notes) : null;
  } catch (e) {
    console.error("Error retrieving notes", e);
    return null;
  }
};
