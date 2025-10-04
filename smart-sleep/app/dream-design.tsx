import { Text, View, StyleSheet} from 'react-native'

export default function DreamDesign() {
    return (
        <View style={styles.container}>
            <Text>Design your dream today</Text>
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