import { Text, StyleSheet} from 'react-native'
export default function MySubtitle({text}:any) {    
    return (
            <Text style={styles.subtitle}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        color: '#fff3fd',
        fontSize: 20,
        marginBottom: 40,
        fontFamily: 'monospace',

        
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    },
})