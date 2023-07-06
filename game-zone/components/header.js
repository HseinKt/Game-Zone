import { StyleSheet, Text, View } from "react-native";

export default Header = () => {
    return ( 
        <View style={styles.header} >
            <Text style={styles.title}>My App</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: 'coral',
        width: '100%',
        paddingTop: 10,
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})