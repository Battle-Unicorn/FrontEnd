import { Text, StyleSheet} from 'react-native'
export default function MyTitle({text}:any) {    
    return (
            <Text style={styles.title}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#fff3fd',
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 8,
        width: '100%',
        textAlign: 'center',
    },
})