import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [num, setNum] = useState("");
  const [num1, setNum1] = useState("");
  const [result, setResult] = useState(0);
  const [data, setData] = useState([]);

  const sum = () => {
    var add = parseFloat(num) + parseFloat(num1)
    setResult(add);
    setData([...data, {key: `${num} + ${num1} = ${add}`}]);
    setNum('');
    setNum1('');
  }

  const minus = () => {
    var sub = parseFloat(num) - parseFloat(num1)
    setResult(sub);
    setData([...data, {key: `${num} - ${num1} = ${sub}`}]);
    setNum('');
    setNum1('');
  }

  return (
    
    <View style={styles.container}>
      <Text style = {{marginTop: 100}}>Result: {result}</Text>
      
      <TextInput
        style ={{width: 200, borderColor: 'grey', borderWidth: 1, margin: 10}}
        keyboardType ={'numeric'}
        onChangeText={num=> setNum(num)}
        value={num}
        />
        <TextInput
        style ={{width: 200, borderColor: 'grey', borderWidth: 1}}
        keyboardType ={'numeric'}
        onChangeText={num1=> setNum1(num1)}
        value={num1}
        />
      
    <View style={{ flexDirection:"row" }}>
    <View style={styles.buttonStyle}>
      <Button 
        title='+'
        onPress = {sum}/>
    </View>
    <View style={styles.buttonStyle}>
      <Button 
        title='-'
        onPress = {minus}/>
    </View>
    </View>
    <View style={styles.container}>
    <Text>History:</Text>
    <FlatList 
        data={data}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
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
    marginTop: StatusBar.currentHeight || 0,
  },
  buttonStyle: {
    marginHorizontal: 20,
    marginTop: 5
  },
});