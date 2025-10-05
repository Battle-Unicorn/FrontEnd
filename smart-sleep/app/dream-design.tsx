import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Pressable, ImageBackground } from 'react-native'
import { useState, useEffect } from 'react'
import { router } from 'expo-router';
import MyTitle from './components/my-title';
import MyContainer from './components/my-container';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MySubtitle from './components/my-subtitle';
import MyButton from './components/my-button';

export default function DreamDesign() {
    const [isLoading, setIsLoading] = useState(false);
    const remPhases = ['REM 1', 'REM 2', 'REM 3', 'REM 4', 'REM 5', 'REM 6', 'REM 7'];
    const bg1 = require('../assets/images/background6.jpg');
    const bg2 = require('../assets/images/background19.jpg');
    let aaaaa = []
    const [remStates, setRemStates] = useState([]);

    useEffect(() => {
        const loadRemStates = async () => {
            const states = [];
            for (let i = 1; i <= 7; i++) {
                const key = `rem${i}`;
                const jsonValue = await AsyncStorage.getItem(key);
                states.push(jsonValue !== null);
            }
            setRemStates(states);
        };

        loadRemStates();
    }, []);

    
    // image background source to background19 and text style to remTextChecked
    const sendScenerio = async () => {
    setIsLoading(true);
    try {
        const backend_url = "http://192.168.8.102:8080/mobile/load_scenarios";
        let data = {
            "mobile_id":"DEV_001",
            "timestamp": new Date().toISOString(),
            "dream_keywords": [],
        };

        for (let i = 1; i <= 7; i++) {//TODO in far future make it not harcoded
            const key = `rem${i}`;
            const jsonValue = await AsyncStorage.getItem(key);
            if (jsonValue == null) {
                continue;
            }
            let item_json = JSON.parse(jsonValue);
            console.log(key, item_json);
            data["dream_keywords"].push(item_json);
        }
        console.log(data);
        

        const response = await fetch(backend_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
        });

        const json = await response.json();
        console.log("RESPONSE FORM SERVER:", json);

        
    } catch (error) {
        console.error('Error:', error);
    }
    await AsyncStorage.clear()
    router.push("/sleeping");
    };

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
                                    source={remStates[index] ? bg2 : bg1}
                                    style={styles.remBackground}
                                    imageStyle={styles.remImageStyle}
                                >
                                    <Text style={remStates[index] ? styles.remTextChecked : styles.remText}>{phase}</Text>
                                </ImageBackground>

                            </TouchableOpacity>
                        ))}
                    </View>

                    <Pressable onPress={sendScenerio} style={styles.button}>
                        <Text style={styles.buttonText}>
                            {isLoading ? 'Loading...' : 'Start Dreaming'}
                        </Text>
                    </Pressable>
                </>
            }/>
        </ScrollView>
        
    )
}

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
