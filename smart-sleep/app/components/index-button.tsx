import { Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { router } from 'expo-router';

interface RemBlockProps {
  text: string;
  route: string;
}

export default function IndexButton({ text, route }: any) {    
    return (
        <TouchableOpacity onPress={() => router.push(route)} style={styles.button}>
            <ImageBackground 
                source={require('../../assets/images/background6.jpg')} 
                style={styles.buttonBackground}
                imageStyle={styles.buttonImageStyle}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '80%',
        height: 70,
        borderRadius: 12,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#3a3a3a',
    },
    buttonBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonImageStyle: {
        borderRadius: 12,
    },
    buttonText: {
        fontFamily: 'cursive',
        fontSize: 21,
        color: '#322f3b',
        fontWeight: '500',

        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
});