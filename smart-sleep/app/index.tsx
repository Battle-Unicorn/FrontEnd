import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { PaperProvider } from 'react-native-paper';
import MyContainer from "./components/my-container";
import MyTitle from "./components/my-title";
import { router } from 'expo-router';
import IndexButton from "./components/index-button";

export default function Index() {
  return (
    <MyContainer content={<>
      <Image 
        source={require('../assets/images/half_moon2.png')} 
        style={styles.logo}
      />
      <View style={styles.wrapMyTitle}>
      <MyTitle text={'Smart Sleep'}/>
      </View>
      <View style={styles.container}>

        <IndexButton text="Dreams Designer" route="/dream-design" />
        <IndexButton text="Sleep History" route="/history" />
        <IndexButton text="Setting" route="/config" />
        <IndexButton text="About" route="/wiki" />
        
        {/* <TouchableOpacity onPress={() => router.push(`/dream-design`)} style={styles.button}>
          <Text style={styles.buttonText}>DREAMS DESIGNER</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push(`/history`)} style={styles.button}>
          <Text style={styles.buttonText}>SLEEP HISTORY</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push(`/config`)} style={styles.button}>
          <Text style={styles.buttonText}>SETTINGS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push(`/wiki`)} style={styles.button}>
          <Text style={styles.buttonText}>ABOUT</Text>
        </TouchableOpacity> */}

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
  }
})