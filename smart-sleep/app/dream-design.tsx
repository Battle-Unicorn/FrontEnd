import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import { router } from 'expo-router';
import MyTitle from './components/my-title';
import MyContainer from './components/my-container';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
                    <Pressable onPress={sendScenerio} style={styles.button}>
                        <Text style={styles.buttonText}>
                            START DREAMING →
                        </Text>
                    </Pressable>
                </>
            }/>
        </ScrollView>
        
    )
}

const sendScenerio = async () => {
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
        i++;
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
};

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
        color: '#fff3fd',
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'Verdana',
    },
    button: {
        backgroundColor: '#fff3fd',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        
    },
    buttonText: {
        fontFamily: 'Verdana',
        color: '#322f3b',
        fontSize: 18,
        fontWeight: '500',
    }
})