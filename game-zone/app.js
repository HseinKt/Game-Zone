import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import react, {useState} from 'react';

export default function App() {
  const [name, setName] = useState("Hussein");

  const handleButton = () => { 
    setName("AYA");
  }

  return (
    <View style={styles.container}>
      <View style={styles.boldText}>
        <Text>Hello there! my name is {name}</Text>
      </View>

      <TextInput 
        style={styles.inputText}
        placeholder='write here ...'
        onChangeText={(val) => setName(val)}
        multiline
      />
      
      <View style={styles.buttonContainer}>
        <Button title='click here' onPress={handleButton}/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    backgroundColor: 'yellow',
    fontWeight: 'bold',
    padding: 50,
  },
  buttonContainer: {
    backgroundColor: 'lightblue',
    borderBottomColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 50,
  },
  inputText: {
    marginTop: 50,
    backgroundColor: 'white',
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
  }
});
