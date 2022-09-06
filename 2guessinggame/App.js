import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';
import React, { useState, useEffect } from 'react';


export default function App() {

  const [text, setText] = useState('')
  const [num, setNum] = useState('');
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(0)

  useEffect(() => againGuess(), [])

  const againGuess = () => {
    setRandom(Math.floor(Math.random() * 100) + 1);
    setText('Guess a number between 1-100')
    setCount(0);
    setNum('')
  }
  
  const guessNum = () => {
    if (random === parseInt(num)) {
      Alert.alert(`Good job! You guessed the number in ${count} guesses!`);
      againGuess();
    } 
    else if (random < parseInt(num)) {
      setText(`your guess ${num} is too high!`)
      setNum('');
    }
    else {
      setText(`your guess ${num} is too low!`)
      setNum('')
    }

    setCount(prevCount => prevCount + 1);

    }



  return (
    <View style={styles.container}>

      <Text style={{fontWeight: 'bold', fontSize: 20}}>{text}</Text>
      <TextInput
        keyboardType='numeric'
        style={{width: 100, borderColor: 'grey', borderWidth: 1, margin: 20}}
        onChangeText={num => setNum(num)}
        value={num} />

      <Button title='Make guess' onPress={guessNum}/>


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
});