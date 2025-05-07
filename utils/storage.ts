import AsyncStorage from "@react-native-async-storage/async-storage";
import { Todo } from "../types";

const STORAGE_KEY = "@todo_items";

export const storeTodos = async (todos: Todo[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error("Error saving todos", error);
  }
};

export const retrieveTodos = async (): Promise<Todo[]> => {
  try {
    const storedTodos = await AsyncStorage.getItem(STORAGE_KEY);
    return storedTodos !== null ? JSON.parse(storedTodos) : [];
  } catch (error) {
    console.error("Error loading todos", error);
    return [];
  }
};
