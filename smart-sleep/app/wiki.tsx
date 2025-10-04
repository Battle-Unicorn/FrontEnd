import { Text, View, StyleSheet} from 'react-native'
// import { Badge } from 'react-native-paper';
// import { PaperProvider } from 'react-native-paper';

export default function Wiki() {
    return (
        // <PaperProvider>
        <View style={styles.container}>
            <Text>This is Wiki page.</Text>
        </View>
        // </PaperProvider>
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