import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTodoStore } from '@/context/ToDoContext';

const TodoActions: React.FC = () => {
    const { markAllDone } = useTodoStore();

    return (
        <View style={styles.actionsContainer}>
            <TouchableOpacity
                style={styles.markAllButton}
                onPress={markAllDone}
            >
                <Text style={styles.markAllText}>Mark All Done</Text>
            </TouchableOpacity>

            <View style={styles.simplifyContainer}>
                <Text style={styles.simplifyText}>Made with Love for My Mimi 💙</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    actionsContainer: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 12,
        alignItems: 'center',
    },
    markAllButton: {
        backgroundColor: '#ffdac1', // pastel peach
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#333',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },
    markAllText: {
        color: '#333',
        fontWeight: 'bold',
        fontSize: 14,
    },
    simplifyContainer: {
        flex: 1,
        marginLeft: 10,
        backgroundColor: '#f0f0f0',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#333',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    simplifyText: {
        color: '#666',
        fontStyle: 'italic',
        fontSize: 13,
    },
});

export default TodoActions;
