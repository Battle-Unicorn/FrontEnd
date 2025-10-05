import { Text, Pressable, StyleSheet} from 'react-native'

export default function MyButton({content}:any) {    
    return (
        <>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>
                    {content}
                </Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff3fd',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#322f3b',
        fontSize: 16,
        fontWeight: '600',
    }
})