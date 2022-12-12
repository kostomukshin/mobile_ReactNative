import React, { useState } from "react";
import { Text, View, TextInput, Alert, TouchableOpacity, Image } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import styles from './Styles';

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export default function Register({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const createNewUser = () => {
    try {
      if (email !== '' && password !== '') {
        createUserWithEmailAndPassword(auth, email.replace(' ', ''), password.replace(' ', ''))
          .then(() => Alert.alert('User Was Created Succesfully'))
          .then(() => navigation.goBack())
          .catch(error => {
            switch (error.code) {
              case 'auth/email-already-in-use':
                Alert.alert('Email Already Exists!')
                break;
              case 'auth/invalid-email':
                Alert.alert('Invalid Email!')
                break;
              case 'auth/weak-password':
                Alert.alert('Password Should Be at least 6 Characters!')
                break;
            }
          })
      } else {
        Alert.alert('Credentials Cannot Be Empty')
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <View style={styles.registerContainer}>
      <Text style={styles.registerTitle}>Register</Text>
      <View style={styles.registerInputView}>
        <TextInput
          style={styles.registerTextInput}
          value={email}
          placeholder="Email"
          autoCapitalize='none'
          keyboardType='email-address'
          onChangeText={(email) => setEmail(email)}
          
        />
      </View>
      <View style={styles.registerInputView}>
        <TextInput
          style={styles.registerTextInput}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          
        />
      </View>
      <TouchableOpacity onPress={createNewUser} style={styles.registerBtn}>
        <Text>Create user</Text>
      </TouchableOpacity>
    </View>
  );
}