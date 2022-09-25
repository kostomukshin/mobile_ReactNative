import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
  const [keyword, setKeyword] = useState('');
  const [region, setRegion] = useState({
    latitude: 60.229521,
    longitude: 25.023023,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0121,
  })

  const [location, setLocation] = useState(null)

  useEffect(() => {
    (async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('No permission to get location')
      return;
    }
    let location = await Location.getCurrentPositionAsync({})
    setLocation(location)
    })();
  }, []);



const fetchMap = () => {
  fetch(`https://www.mapquestapi.com/geocoding/v1/address?key=XPsObG5LAFRaGPTH442DwELtglDoA5Vy&location=${keyword}`)
  .then(response => response.json())
  .then(data => {
      setRegion({
        ...region,
        latitude: data.results[0].locations[0].latLng.lat,
        longitude: data.results[0].locations[0].latLng.lng,
      })
  })
  .catch(err => Alert.alert('Error', err))
}

  return (
    <View style={styles.container}>

<TextInput
    style={{fontSize: 20, marginTop: 70, marginLeft: 125, fontWeight: 'bold'}}
    placeholder='Address to search'
    onChangeText={text => setKeyword(text)}
    />
    <Button style={{marginBottom: 50}}
    title = 'Search'
    onPress = {fetchMap}
    />      

    <MapView style={{ flex: 1, marginBottom: 100}}
      region={region}>
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region. longitude,
          }}
          />
      </MapView>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
