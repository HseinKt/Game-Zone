import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import react, {useState} from 'react';

export default function App() {
  const [name, setName] = useState("Hussein");

  const handleButton = () => { 
    setName("AYA");
  }

  const HandleTouchable = (id) => {
    console.log(id);
    setPeople((itemPressed) => {
      return itemPressed.filter(item => item.id != id)
    })
  }

  const [people, setPeople] = useState([
    { name: "John", age: "16", id: "1"},
    { name: "Alice", age: "12", id: "2"},
    { name: "Bob", age: "10", id: "3"},
    { name: "Aya", age: "25", id: "4"} ,
    { name: "John", age: "16", id: "5"},
    { name: "Alice", age: "12", id: "6"},
    { name: "Bob", age: "10", id: "7"},
    { name: "Aya", age: "25", id: "8"} 
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.boldText}>
        <Text>Hello there! my name is {name}</Text>
      </View>

      {/* ScrollView load all the items in the biginning and this is not helpfull when we have a large data */}
      {/* <ScrollView>
        {people.map((e) => {
        return (
          <View key={e.key}>
            <Text style={styles.listNames}> Hello Mr/Mss {e.name}</Text>
          </View>
        )
        })}
      </ScrollView> */}

       {/* Another way to scroll the items is using a flat list, and here not all the items load automatically
        into the screen and wait for the first render; only the first few and then more will load as you scroll down. */}
       <FlatList 
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => HandleTouchable(item.id)}>
            <Text style={styles.listNames}> Hello Mr/Mss {item.name}</Text>
          </TouchableOpacity>
        )}
       />

      <TextInput 
        style={styles.inputText}
        placeholder='write here ...'
        onChangeText={(val) => setName(val)}
        // multiline
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
