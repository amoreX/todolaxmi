export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoContextType {
  todos: Todo[];
  inputText: string;
  setInputText: (text: string) => void;
  remainingCount: number;
  addTodo: () => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  markAllDone: () => void;
}
