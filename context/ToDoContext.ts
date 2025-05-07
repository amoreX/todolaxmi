import { create } from "zustand";
import { storeTodos, retrieveTodos } from "../utils/storage";
import { Todo } from "../types";

interface TodoState {
  todos: Todo[];
  inputText: string;
  remainingCount: number;
  setInputText: (text: string) => void;
  addTodo: () => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  markAllDone: () => void;
  loadTodos: () => Promise<void>;
}

export const useTodoStore = create<TodoState>((set, get) => ({
  todos: [],
  inputText: "",
  remainingCount: 0,
  setInputText: (text) => set({ inputText: text }),
  addTodo: () => {
    const { inputText, todos } = get();
    if (inputText.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: inputText.trim(),
      completed: false,
    };
    const updatedTodos = [...todos, newTodo];
    set({
      todos: updatedTodos,
      inputText: "",
      remainingCount: updatedTodos.filter((todo) => !todo.completed).length,
    });
    storeTodos(updatedTodos);
  },
  toggleTodo: (id) => {
    const { todos } = get();
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    set({
      todos: updatedTodos,
      remainingCount: updatedTodos.filter((todo) => !todo.completed).length,
    });
    storeTodos(updatedTodos);
  },
  deleteTodo: (id) => {
    const { todos } = get();
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    set({
      todos: updatedTodos,
      remainingCount: updatedTodos.filter((todo) => !todo.completed).length,
    });
    storeTodos(updatedTodos);
  },
  markAllDone: () => {
    const { todos } = get();
    const updatedTodos = todos.map((todo) => ({ ...todo, completed: true }));
    set({ todos: updatedTodos, remainingCount: 0 });
    storeTodos(updatedTodos);
  },
  loadTodos: async () => {
    const storedTodos = await retrieveTodos();
    if (storedTodos) {
      set({
        todos: storedTodos,
        remainingCount: storedTodos.filter((todo) => !todo.completed).length,
      });
    }
  },
}));
