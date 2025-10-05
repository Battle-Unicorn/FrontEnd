import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { PaperProvider } from 'react-native-paper';
import MyContainer from "./components/my-container";
import MyTitle from "./components/my-title";
import SleepingSubtitle from "./components/my-subtitle";
import { router } from 'expo-router';
import IndexButton from "./components/index-button";

export default function Sleeping() {
  return (
    <MyContainer content={<>
      <Image 
        source={require('../assets/images/half_moon2.png')} 
        style={styles.logo}
      />

      <View style={styles.wrapMyTitle}>
        <MyTitle text={'Sleeping...'}/>
        <Text style={styles.subtitle}>STATE: asleep</Text>
        <Text style={styles.subtitle}>PHASE: REM; music playing</Text>
      </View>

      <View style={styles.container}>
        <IndexButton text="Stop" route="/survey" />
      </View>

    </>}/>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    gap: 12,
    marginBottom: 40,
  },
  wrapMyTitle: {
    marginBottom:30,
  },
  button: {
    backgroundColor: '#8d5ec1',
    width: '80%',
    height: 70,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3a3a3a',
  },
  buttonText: {
    fontFamily: 'monospace',
    fontSize: 21,
    color: '#fff3fd',
    fontWeight: '500',

    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 30,
  },
  subtitle: {
        color: '#fff3fd',
        fontSize: 20,
        fontFamily: 'monospace',
        marginTop: 20,

        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
    },
})