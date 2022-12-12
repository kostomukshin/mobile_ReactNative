import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from'@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'; 
import Authors from "./Components/Authors";
import Ideas from "./Components/Ideas"; 
import Books from "./Components/Books"; 
import Login from './Components/Login';
import Register from './Components/Register';
import { signIn, store } from './Components/SigninReducer';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;

    if (route.name === 'Authors') {
      iconName = 'finger-print-outline';
    } else if (route.name === 'Ideas') {
      iconName = 'leaf-outline';
    } else if (route.name === 'Books') {
      iconName = 'book-outline';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  }
});

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerStyle: {
            backgroundColor: 'darkorange',
          },
          headerTitle: ""
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerStyle: {
            backgroundColor: 'darkorange',
          }
        }}
      />
    </Stack.Navigator>
  );
};


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Authors" component={Authors} options={{
        headerRight: () => (
          <AntDesign.Button
          onPress={() => store.dispatch(signIn(false))}
          color="black"
          backgroundColor={'white'}
          name="logout"
          size={26}
          />
        ),
      }}  
      />
      <Tab.Screen name="Ideas" component={Ideas} options={{
        headerRight: () => (
          <AntDesign.Button
          onPress={() => store.dispatch(signIn(false))}
          color="black"
          backgroundColor={'white'}
          name="logout"
          size={26}
          />
        ),
      }}
        />
      <Tab.Screen name="Books" component={Books} options={{
        headerRight: () => (
          <AntDesign.Button
          onPress={() => store.dispatch(signIn(false))}
          color="black"
          backgroundColor={'white'}
          name="logout"
          size={26}
          />
        ),
      }}  
      />
  </Tab.Navigator>
  );
};

export default function App() {

  const [isSigned, setIsSigned] = useState(false);

  // Update state from redux
  store.subscribe(() => {
    setIsSigned(store.getState());
  })

  return (

    <NavigationContainer>
      {isSigned ? <BottomTabNavigator /> : <AuthStack />}
    </NavigationContainer>

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