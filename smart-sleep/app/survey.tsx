import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import MyTitle from './components/my-title';
import MyContainer from './components/my-container';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { router } from 'expo-router';

// rate sleep quality
// did u have dreams
// did u have lucid dreams 

export default function Survey() {
    const [quality, setQuality] = React.useState('');
    const [dreams, setDreams] = React.useState('');
    const [lucid_dreams, setLucidDreams] = React.useState('');

    return (
        <MyContainer content={<>
            <TextInput
              style={styles.input}
              value={quality}
              onChangeText={setQuality}
              placeholder="Rate your sleep quality"
            />
            <TextInput
              style={styles.input}
              value={dreams}
              onChangeText={setDreams}
              placeholder="Did you have dreams?"
            />
            
            <TextInput
              style={styles.input}
              value={lucid_dreams}
              onChangeText={setLucidDreams}
              placeholder="Did you have lucid dreams?"
            />

            <Pressable 
                onPress={() => {
                    saveData(quality, dreams, lucid_dreams);
                }}
                style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
            </Pressable>
        </>
        }/>
    );
};

const saveData = async (quality: any, dreams: any, lucid_dreams: any) => {
    let key = `survey`;
    try {
        const jsonValue = JSON.stringify({"quality": quality,"dreams": dreams,"lucid_dreams": lucid_dreams });
        await AsyncStorage.setItem(key, jsonValue);
        router.push("/");
    } catch (e) {
        console.error('Error saving data', e);
    }
    // () => router.push("/index")
};

const styles = StyleSheet.create({
    input: {
        borderColor: "#ffffff",
        color: "#fff",
        placeholderTextColor: "#999",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
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
    }});