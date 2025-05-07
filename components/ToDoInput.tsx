import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native';
import { useTodoStore } from "@/context/ToDoContext";

const TodoInput: React.FC = () => {
    const { inputText, setInputText, addTodo } = useTodoStore();

    const handleSubmitEditing = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>): void => {
        addTodo();
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Add a to-do item..."
                placeholderTextColor="#999"
                value={inputText}
                onChangeText={setInputText}
                onSubmitEditing={handleSubmitEditing}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={addTodo}
            >
                <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        borderWidth: 3,
        borderColor: '#333',
        borderRadius: 16,
        backgroundColor: '#fffdf5', // pastel cream
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },
    input: {
        flex: 1,
        height: 50,
        paddingHorizontal: 16,
        backgroundColor: 'transparent',
        fontSize: 16,
        color: '#333',
    },
    addButton: {
        backgroundColor: '#c0ebd7', // pastel mint green
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderLeftWidth: 3,
        borderColor: '#333',
        borderTopRightRadius: 14,
        borderBottomRightRadius: 14,
    },
    addButtonText: {
        color: '#333',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default TodoInput;
