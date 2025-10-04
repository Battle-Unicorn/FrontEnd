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
    },
})