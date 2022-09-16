import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, TextInput, Button,FlatList, Image } from 'react-native';

export default function App() {

  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState('');

  const fetchMeal = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    .then(response => response.json())
    .then(data => setData(data.meals))
    .catch(err => Alert.alert('Error', err))
  }

  

  return (
    <View style={styles.container}>

    <Text style={{marginTop: 60, fontSize: 20, fontWeight: 'bold'}}>Recipe finder</Text>
    <TextInput
    style={{fontSize: 20, marginTop: 30}}
    placeholder='Meal to search'
    onChangeText={text => setKeyword(text)}
    />
    <Button
    title = 'Search'
    onPress = {fetchMeal}
    />

    <FlatList
    data = {data}
    renderItem = {({item}) =>
    <View style={{marginLeft: 20}}>
      <Text style={{fontSize: 18}}>{item.strMeal}</Text>
      <Image
      style={{width: 200, height: 120}}
      source={{uri: item.strMealThumb}} />
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
    justifyContent: 'center',
  },
});
