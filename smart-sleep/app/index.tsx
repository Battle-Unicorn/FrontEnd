import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router'
import { PaperProvider } from 'react-native-paper';

export default function Index() {
  return (
    //  <PaperProvider>

    <View style={styles.container}>
      <Text>Welcome to the main page.</Text>
      <Link href="/dream-design" style={styles.button}>
        <Text style={styles.buttonText}>Design Your Next Dream</Text>
      </Link>
      <Link href="/history" style={styles.button}>
        <Text style={styles.buttonText}>Sleep History</Text>
      </Link>
      <Link href="/config" style={styles.button}>
        <Text style={styles.buttonText}>Configure Your Smartdevice (?)</Text>
      </Link>
      <Link href="/wiki" style={styles.button}>
        <Text style={styles.buttonText}>Wiki</Text>
      </Link>
    </View>
    //  </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25292e',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})