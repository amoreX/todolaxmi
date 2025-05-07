import React, { useRef, useEffect } from 'react';
import { StyleSheet, StatusBar, KeyboardAvoidingView, Platform, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTodoStore } from '@/context/ToDoContext';
import TodoHeader from '@/components/ToDoHeader';
import TodoInput from '@/components/ToDoInput';
import TodoActions from '@/components/ToDoActions';
import TodoList from '@/components/ToDoList';
import QuickSidebar from '@/components/QuickSidebar';

export default function App() {
  // Animation values for the entire app container
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const loadTodos = useTodoStore((state) => state.loadTodos);

  useEffect(() => {
    loadTodos();
  }, []);
  useEffect(() => {
    // Start app animations
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
      })
    ]).start();
  }, []);

  return (
    // <TodoProvider>
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
      >
        <Animated.View
          style={[
            styles.appContainer,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }]
            }
          ]}
        >
          <TodoHeader />
          <TodoInput />
          <TodoActions />
          <TodoList />
          <QuickSidebar />
        </Animated.View>
      </KeyboardAvoidingView>
    </SafeAreaView>
    // </TodoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6e9f2',
  },
  keyboardAvoid: {
    flex: 1,
  },
  appContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});