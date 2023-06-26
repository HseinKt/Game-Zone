import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import react, {useState} from 'react';

export default function App() {
  const [name, setName] = useState("Hussein");

  const handleButton = () => { 
    setName("AYA");
  }

  const [people, setPeople] = useState([
    { name: "John", age: "16", key: "1"},
    { name: "Alice", age: "12", key: "2"},
    { name: "Bob", age: "10", key: "3"},
    { name: "Aya", age: "25", key: "4"} ,
    { name: "John", age: "16", key: "5"},
    { name: "Alice", age: "12", key: "6"},
    { name: "Bob", age: "10", key: "3"},
    { name: "Aya", age: "25", key: "4"} 
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.boldText}>
        <Text>Hello there! my name is {name}</Text>
      </View>

      <ScrollView>
        {people.map((e) => {
        return (
          <View key={e.key}>
            <Text style={styles.listNames}> Hello Mr/Mss {e.name}</Text>
          </View>
        )
        })}
      </ScrollView>
      

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
    padding: '10%',
  },
  boldText: {
    backgroundColor: 'yellow',
    fontWeight: 'bold',
    padding: 50,
    marginTop: '20%',
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
  },
  listNames: {
    marginTop: 20,
    padding: 30,
    backgroundColor: 'pink',
    color: 'black',
    fontSize: '20',
  }
});
