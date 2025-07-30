import { create } from "zustand";
import { storeNotes, retrieveNotes } from "../utils/storage";
import { Note } from "../types";

interface NoteState {
  notes: Note[];
  selectedNoteId: string | null;
  setSelectedNoteId: (id: string | null) => void;
  createNote: () => void;
  updateNote: (id: string, fields: Partial<Note>) => void;
  deleteNote: (id: string) => void;
  loadNotes: () => Promise<void>;
}

export const useNoteStore = create<NoteState>((set, get) => ({
  notes: [],
  selectedNoteId: null,

  setSelectedNoteId: (id) => set({ selectedNoteId: id }),

  createNote: () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "Untitled Note",
      content: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const updatedNotes = [newNote, ...get().notes];
    set({ notes: updatedNotes, selectedNoteId: newNote.id });
    storeNotes(updatedNotes);
  },

  updateNote: (id, fields) => {
    const updatedNotes = get().notes.map((note) =>
      note.id === id
        ? { ...note, ...fields, updatedAt: new Date().toISOString() }
        : note,
    );
    set({ notes: updatedNotes });
    storeNotes(updatedNotes);
  },

  deleteNote: (id) => {
    const updatedNotes = get().notes.filter((note) => note.id !== id);
    const selectedNoteId = get().selectedNoteId;
    set({
      notes: updatedNotes,
      selectedNoteId: selectedNoteId === id ? null : selectedNoteId,
    });
    storeNotes(updatedNotes);
  },

  loadNotes: async () => {
    const storedNotes = await retrieveNotes();
    if (storedNotes) {
      set({ notes: storedNotes });
    }
  },
}));
