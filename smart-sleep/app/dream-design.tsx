import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Pressable, ImageBackground } from 'react-native'
import { router } from 'expo-router';
import MyTitle from './components/my-title';
import MyContainer from './components/my-container';
import MySubtitle from './components/my-subtitle';
import MyButton from './components/my-button';

export default function DreamDesign() {
    const remPhases = ['REM 1', 'REM 2', 'REM 3', 'REM 4', 'REM 5', 'REM 6', 'REM 7'];
    
    return (
        <ScrollView style={styles.scroll}>
            <MyContainer content={
                <>
                    <MyTitle text={'Design your dreams'}/>
                    <MySubtitle text={'Sleep Length: 7h'}/>
                    
                    <View style={styles.remContainer}>
                        {remPhases.map((phase, index) => (
                            <TouchableOpacity 
                                key={index} 
                                style={styles.remBlock}
                                onPress={() => router.push(`/rem-config?phase=${index + 1}`)}
                            >
                                {/* <Text style={styles.remText}>{phase}</Text> */}

                                <ImageBackground 
                                    source={require('../assets/images/background6.jpg')} 
                                    style={styles.remBackground}
                                    imageStyle={styles.remImageStyle}
                                >
                                    <Text style={styles.remText}>{phase}</Text>
                                </ImageBackground>

                            </TouchableOpacity>
                        ))}
                    </View>
                    <Pressable style={styles.button}>
                                    <Text style={styles.buttonText}>
                                        Start Dreaming
                                    </Text>
                                </Pressable>
                </>
            }/>
        </ScrollView>
        
    )
}

// image background source to background19 and text style to remTextChecked

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
    },
    remBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    remImageStyle: {
        borderRadius: 12,
    },
    remContainer: {
        width: '100%',
        alignItems: 'center',
        gap: 12,
        marginBottom: 40,
    },
    remBlock: {
        backgroundColor: '#8d5ec1',
        width: '80%',
        height: 70,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#3a3a3a',
    },
    remText: {
        fontFamily: 'cursive',
        fontSize: 21,
        color: '#322f3b',
        fontWeight: '500',

        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    remTextChecked: {
        fontFamily: 'cursive',
        fontSize: 21,
        color: '#fff3fd',
        fontWeight: '500',

        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    button: {
        backgroundColor: '#fff3fd',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        
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
})