import { Text, View, StyleSheet} from 'react-native'

export default function SleepHistory() {
    return (
        <View style={styles.container}>
            your sleep history
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#25292e',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    }
})