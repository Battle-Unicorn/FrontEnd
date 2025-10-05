import { View, StyleSheet, ImageBackground} from 'react-native'

export default function MyContainer({content}:any) {    
    return (
            <View style={styles.container}>
                <ImageBackground 
                    source={require('../../assets/images/background18.jpg')} 
                    style={styles.background}
                >
                    {content}
                </ImageBackground>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#322f3b',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 0,
        
    },
    background: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingBottom:70,
    },

})