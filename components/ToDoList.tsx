import React from 'react';
import { View, FlatList, Text, StyleSheet, ListRenderItemInfo } from 'react-native';
import TodoItem from './ToDoItem';
import { useTodoStore } from '@/context/ToDoContext';
import { Todo } from '../types';

const TodoList: React.FC = () => {
    const { todos, remainingCount } = useTodoStore();

    const renderItem = ({ item }: ListRenderItemInfo<Todo>) => (
        <TodoItem item={item} />
    );

    return (
        <View style={styles.todoListContainer}>
            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={(item: Todo) => item.id}
                contentContainerStyle={styles.todoList}
            />

            <View style={styles.counterContainer}>
                <Text style={styles.counterText}>
                    {remainingCount} items remaining
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    todoListContainer: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fffdfa', // nearly white pastel background
        borderRadius: 15,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#333', // cartoon outline
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 5,
        elevation: 4,
    },
    todoList: {
        padding: 12,
    },
    counterContainer: {
        padding: 12,
        borderTopWidth: 2,
        borderTopColor: '#333',
        backgroundColor: '#fdf6e3', // lighter pastel yellow for footer
    },
    counterText: {
        color: '#444',
        fontSize: 13,
        fontWeight: '500',
        fontStyle: 'italic',
    },
});

export default TodoList;
