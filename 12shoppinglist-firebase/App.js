import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyA-cZzxSqOXPkBGHwm26fUAOgUeOxU62-c",
  authDomain: "shoppinglist-hh.firebaseapp.com",
  databaseURL: "https://shoppinglist-hh-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shoppinglist-hh",
  storageBucket: "shoppinglist-hh.appspot.com",
  messagingSenderId: "54083829750",
  appId: "1:54083829750:web:634db2ac0d786f924011d7"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function App() { 
ref(database, 'items/');

useEffect(() => {
  const itemsRef = ref(database, 'items/');
  onValue(itemsRef, (snapshot) => {
    const data = snapshot.val();
    setItems(Object.values(data));
  })
}, []);


const [amount, setAmount] = useState('');
const [product, setProduct] = useState('');
const [items, setItems] = useState([]);

const saveItem = () => {
  push(
    ref(database, 'items/'),
    { 'product' : product, 'amount' : amount});
}

const listSeparator = () => {
  return (
    <View
      style={{
        height: 5,
        width: "80%",
        backgroundColor: "#fff",
        marginLeft: "10%"
      }}
    />
  );
};

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold', marginTop: 100, fontSize: 20}}>Shopping List</Text>
      <TextInput placeholder='Product' style={{marginTop: 50, fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(product) => setProduct(product)}
        value={product}/>  
      <TextInput placeholder='Amount' keyboardType="numeric" style={{ marginTop: 5, marginBottom: 5,  fontSize:18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(amount) => setAmount(amount)}
        value={amount}/>      
      <Button onPress={saveItem} title="Save" /> 
      <FlatList 
        style={{marginLeft : "5%"}}
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({item}) => <View style={styles.listcontainer}><Text style={{fontSize: 18}}>{item.product}, {item.amount}</Text>
        </View>} 
        data={items} 
        ItemSeparatorComponent={listSeparator} 
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
