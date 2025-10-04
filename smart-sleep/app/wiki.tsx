import { Text, View, StyleSheet, Pressable } from 'react-native'
// import { Link } from 'expo-router'
// import { Badge } from 'react-native-paper';
// import { PaperProvider } from 'react-native-paper';

export default function Wiki() {
    return (
        // <PaperProvider>
        <View style={styles.container}>
            <Text>This is Wiki page.</Text>
            <Pressable 
                onPress={sendPostRequest}
                style={styles.button}>
                    <Text>Send Request</Text>
            </Pressable>
        </View>
        // </PaperProvider>
    )
}
const sendPostRequest = async () => {
  try {
    let backend_url = "http://192.168.8.103:12345/add"
    const response = await fetch(backend_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
        // Add any additional headers like authorization tokens
      },
      body: JSON.stringify({
        "content": 'Test wyslany z frontendu'
      })
    });

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error('Error:', error);
  }
};

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
})