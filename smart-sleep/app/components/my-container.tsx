import { View, StyleSheet} from 'react-native'

export default function MyContainer({content}:any) {    
    return (
            <View style={styles.container}>{content}</View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#322f3b',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        paddingBottom:70,
    },
})