import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [numberFirst, setNumberFirst] = useState('');
  const [numberSecond, setNumberSecond] = useState('');
  const [result, setResult] = useState('');

  const CalcSum = () => {
    const result = parseFloat(numberFirst) + parseFloat(numberSecond)
    setResult(result)
    setNumberFirst(null)
    setNumberSecond(null)
  }

  const CalcSub = () => {
    const result = parseFloat(numberFirst) - parseFloat(numberSecond)
    setResult(result)
    setNumberFirst(null)
    setNumberSecond(null)
  }

  return (
    <View style={styles.container}>

    <Text>
        Result: {result}
    </Text>

    <TextInput
        keyboardType="numeric"
        style={{width: 100, borderColor: 'grey', borderWidth: 1}}
        onChangeText={numberFirst => setNumberFirst(numberFirst)}
        value={numberFirst} />
      
    <TextInput
        keyboardType="numeric"
        style={{width: 100, borderColor: 'grey', borderWidth: 1}}
        onChangeText={numberSecond => setNumberSecond(numberSecond)}
        value={numberSecond} />

    <View style={styles.buttonCont}>
    <Button title='+' onPress={CalcSum}/>
    <Button title='-' onPress={CalcSub}/>
    <StatusBar style="auto" />
    </View>
    </View>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonCont: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'lightblue',
    margin: 10,
    width: 100
  },

});