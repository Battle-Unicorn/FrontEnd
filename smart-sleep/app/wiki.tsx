import { Text, View, StyleSheet, Pressable } from 'react-native'
import MyTitle from './components/my-title';

export default function Wiki() {
    return (
        // <PaperProvider>
        <View style={styles.container}>
            <MyTitle text={'Our team'}/>

            <Text style={styles.text}>
                Embeded: Wiktor, Dariusz Moscicki
            </Text>
            <Text style={styles.text}>
                Backednd: Marek, Marcin Ożóg
            </Text>
            <Text style={styles.text}>
                FrontEnd: Izabella Ożóg, Marcin Ożóg
            </Text>
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
    },
    text: {
        color: "white",
        fontSize: 20,
    }
})