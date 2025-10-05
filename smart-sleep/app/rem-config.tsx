import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import MyTitle from './components/my-title';
import MyContainer from './components/my-container';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RemConfig() {
    const { phase } = useLocalSearchParams();
    // const [text, onChangeText] = React.useState('Useless Text');

    return (
        <MyContainer content={<>
            <MyTitle text={`Configure REM ${phase}`}/>
            <TextInput
              style={styles.input}
              placeholder="Place in a dream"
            />
            <TextInput
              style={styles.input}
              placeholder="Keywords"
            />

            <Pressable onPress={() => {saveData(phase)}} style={styles.button}>
                <Text style={styles.buttonText}>Save settings</Text>
            </Pressable>
            <Pressable onPress={() => {getData(phase)}} style={styles.button}>
                <Text style={styles.buttonText}>get settings</Text>
            </Pressable>
        </>
        }/>
    );
};

const saveData = async (phase) => {
    let key = `rem${phase}`;
    let data = 'jakeis dane'
    try {
        const jsonValue = JSON.stringify(data);
        console.log("AAA", jsonValue);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.error('Error saving data', e);
    }
};
const getData = async (phase) => {
    let key = `rem${phase}`;
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    console.log( jsonValue != null ? JSON.parse(jsonValue) : null);
  } catch (e) {
    console.error('Error reading value', e);
    return null;
  }
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