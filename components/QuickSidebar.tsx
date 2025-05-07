import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuickSidebar: React.FC = () => {
    return (
        <View style={styles.quickSidebar}>
            <Text style={styles.quickText}> 💕 </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    quickSidebar: {
        position: 'absolute',
        right: 20,
        top: '50%',
        backgroundColor: '#ffb6c1',
        paddingVertical: 15,
        paddingHorizontal: 5,
        borderRadius: 5,
        transform: [{ translateY: -50 }],
    },
    quickText: {
        color: '#333',
        fontWeight: '600',
        transform: [{ rotate: '90deg' }],
    },
});

export default QuickSidebar;