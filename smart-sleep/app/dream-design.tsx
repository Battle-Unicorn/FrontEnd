import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
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
                    <MyTitle text={'Design your dreams today'}/>
                    <MySubtitle text={'Sleep Length: 7h'}/>
                    
                    <View style={styles.remContainer}>
                        {remPhases.map((phase, index) => (
                            <TouchableOpacity 
                                key={index} 
                                style={styles.remBlock}
                                onPress={() => router.push(`/rem-config?phase=${index + 1}`)}
                            >
                                <Text style={styles.remText}>{phase}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <MyButton text={'START DREAMING →'}/>
                </>
            }/>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
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
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    },
})