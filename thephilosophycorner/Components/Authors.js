import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, FlatList, TextInput, Button, Image } from 'react-native';
import { useState } from 'react';

export default function Authors() {

  const [keyword, setKeyword] = useState();
  const [data, setData] = useState([]);

  const fetchAllAuthors = () => {
    fetch('https://philosophyapi.pythonanywhere.com/api/philosophers/')
    .then(response => response.json())
    .then(data => setData(data.results))
    .catch(err => Alert.alert('Error', err))
  }

  const fetchAuthor = () => {
    fetch(`https://philosophyapi.pythonanywhere.com/api/philosophers/?search=${keyword}`)
    .then(response => response.json())
    .then(data => setData(data.results))
    .catch(err => Alert.alert('Error', err))
  }

  return (
    <View style={styles.container}>

    <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 20}}>The Philosophy Corner</Text>
    <TextInput
    style={{fontSize: 20, marginTop: 20}}
    placeholder='Find by surname'
    onChangeText={text => setKeyword(text)}
    />
    <Button
    title = 'Search'
    onPress = {fetchAuthor}
    />
    <Button
    title = 'Show all'
    onPress = {fetchAllAuthors}
    />

<FlatList
    keyExtractor={(item, index) => index.toString()}
    data = {data}
    renderItem = {({item}) =>
    <View style={styles.container}>
      <Text style={{fontSize: 22, marginTop: 20, fontWeight: 'bold'}}>{item.name}</Text>
      <Image
      style={{width: 200, height: 250}}
      source={{uri: item.photo}} />
      <Text style={{fontSize: 18}}>Date of birth : {item.born_date}</Text>
      <Text style={{fontSize: 18}}>Last day on earth: {item.death_date}</Text>
      <Text style={{fontSize: 18}}>Nationality : {item.nationality}</Text>
      <Text style={{fontSize: 18}}>Era: {item.era}</Text>
      <Text style={{fontSize: 18}}>School: {item.school.map((e)=> e + "/")} </Text>
      <Text style={{fontSize: 18, margin: 15}}>Ideas: {item.ideas[1]}; {item.ideas[3]}; {item.ideas[4]}</Text> 

    </View>
    }
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});