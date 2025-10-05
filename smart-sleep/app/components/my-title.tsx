import { Text, StyleSheet} from 'react-native'
export default function MyTitle({text}:any) {    
    return (
            <Text style={styles.title}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#fff3fd',
        fontSize: 36,
        fontWeight: '600',
        marginBottom: 8,
        width: '100%',
        textAlign: 'center',
        fontFamily: 'Papyrus',
        marginTop: 20,

        
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    },
})