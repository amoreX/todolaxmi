import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

const TodoHeader: React.FC = () => {
    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Continuous rotation animation for the sheep emoji
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: true, // Change to false
            })
        ).start();
    }, []);

    // Spin animation for the sheep emoji
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return (
        <View style={styles.header}>
            <Text style={styles.title}>TODO</Text>
            <Animated.Text
                style={[
                    styles.exclamation,
                    { transform: [{ rotate: spin }] }
                ]}
            >
                🐑
            </Animated.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#f0c14b',
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    exclamation: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#f0c14b',
        marginLeft: 5,
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
});

export default TodoHeader;
