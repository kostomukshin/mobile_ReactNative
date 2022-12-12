import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, FlatList, TextInput, Button, Image } from 'react-native';
import { useState, useEffect } from 'react';

export default function Ideas() {

  const [keyword, setKeyword] = useState();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [idea, setIdea] = useState(false);


  const fetchIdeas = () => {
    fetch(`https://philosophyapi.pythonanywhere.com/api/ideas/?page=${page}`)
    .then(response => response.json())
    .then(data => setData(data.results))
    .catch(err => Alert.alert('Error', err))
  }

  const fetchIdeasByKeyword = () => {
    fetch(`http://philosophyapi.pythonanywhere.com/api/ideas/?search=${keyword}`)
    .then(response => response.json())
    .then(data => setData(data.results))
    .catch(err => Alert.alert('Error', err))
    setIdea == true;
  }

  useEffect(() => {
    fetchIdeas();
  }, [page])

  return (
    <View style={styles.container}>

    <Text style={{fontSize: 22, fontWeight: 'bold'}}>The Philosophy Corner</Text>
    <TextInput
    style={{fontSize: 20, marginTop: 20}}
    placeholder='Find quote by keyword'
    onChangeText={text => setKeyword(text)}
    />
    <Button
    title = 'Search'
    onPress = {fetchIdeasByKeyword}
    />
    <Button
    title = 'Show all ideas'
    onPress = {fetchIdeas}
    />

<FlatList
    keyExtractor={(item, index) => index.toString()}
    data = {data}
    onEndReached={() => setPage(page+1)}
    renderItem = {({item}) =>
    <View>
      <Text style={{fontSize: 18, marginTop: 20, fontWeight: 'bold'}}>{item.quote}.</Text>
      <Text style={{fontSize: 17}}>{item.author}</Text>
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
    padding: 20,
  },
});

