import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

function App(): JSX.Element {
    const [count, setCount] = useState(0)
    const handleIncrease = () => {
        setCount((prev) => prev + 1)
    }

    return (
        <View style={styles.view}>
            <Text style={styles.text}>{count}</Text>
            <Pressable style={styles.button} onPress={handleIncrease}>
                <Text>Increase</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },
    text: {
        fontSize: 20,
    },
    button: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#ccc',
    },
})

export default App
