import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTodoStore } from "@/context/NoteContext";
import { Todo } from "../types";

interface TodoItemProps {
  item: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
  const { toggleTodo, deleteTodo } = useTodoStore();
  const itemFadeAnim = useRef(new Animated.Value(1)).current;

  const animateDelete = (callback: () => void): void => {
    Animated.timing(itemFadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(callback);
  };

  return (
    <Animated.View
      style={[
        styles.todoItem,
        item.completed ? styles.completedItem : styles.pendingItem,
        {
          opacity: itemFadeAnim,
          transform: [{ scale: itemFadeAnim }],
        },
      ]}
    >
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => toggleTodo(item.id)}
      >
        {item.completed ? (
          <View style={styles.checkedBox}>
            <Feather name="check" size={16} color="#fff" />
          </View>
        ) : (
          <View style={styles.uncheckedBox} />
        )}
      </TouchableOpacity>

      <Text style={[styles.todoText, item.completed && styles.completedText]}>
        {item.text}
      </Text>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => {
          animateDelete(() => deleteTodo(item.id));
        }}
      >
        <Feather name="x" size={18} color="#000" />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  pendingItem: {
    backgroundColor: "#fff6e5", // light pastel yellow
  },
  completedItem: {
    backgroundColor: "#dff8f3", // light pastel teal
  },
  checkbox: {
    marginRight: 12,
  },
  uncheckedBox: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#666",
  },
  checkedBox: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#68d391", // soft green
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#333",
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    fontFamily: "sans-serif",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5c6cb", // soft red-pink
    borderWidth: 2,
    borderColor: "#333",
  },
});

export default TodoItem;
