import React from 'react';
import {
  StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, TextInput,Alert
} from 'react-native';
import Constants from 'expo-constants';
import { block } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3ab8cf",

  },
  inputView: {
    width: 200,
    backgroundColor: "#F0FFFF",
    borderRadius: 50,
    height: 50,
    justifyContent: "center",
    padding: 10,
    marginRight: 40,
    marginLeft: 50,
    marginTop: 30
  },
  loginbutton: {
    backgroundColor: "black",
    borderRadius: 20,
    backgroundColor: "#000000",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    marginRight: 100,
    marginLeft: 100,
  },


});

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPass, setConfirmPass] = React.useState('');

  const AuthSignup = async () => {
  const response = await fetch ("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAponwVUgKwHUYqeIijfYaE6iV0BE-dCeQ", {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        
        email: email,
        password: password,
        returnSecureToken: true
    })
})
const resData = await response.json()
if (response.ok){
  await navigation.navigate('Login')
} else {
  Alert.alert ('An Error Occured!', resData.error.message, [{
      text: 'Okay'
  }])
}
}

  // const app = () => {
  //   navigation.navigate('BotTab');
  // };

  return (
    <ScrollView style={styles.container}>
      <View >

        <View style={{ alignItems: 'center', marginTop: 50 }} >
          <Image style={{ width: 152, height: 152, marginBottom: 30 }} source={require('../assets/image/logo.png')} />
          <Text style={{ fontSize: 20, marginTop: 30, color: '#000000' }}>Account Create</Text>
          <TextInput style={styles.inputView}
            value={email}
            // onChangeText={setEmail}
            placeholder="Email"
            onChangeText= {(text) => {
              setEmail(text)
          }}

          />
          <TextInput style={styles.inputView}
            value={password}
            // onChangeText={setPassword}
            placeholder="Password"
            onChangeText= {(text) => {
              setPassword(text)
          }}
            secureTextEntry

          />
          <TextInput style={styles.inputView}
            value={confirmPass}
            // onChangeText={setConfirmPass}
            placeholder="Password"
            onChangeText= {(text) => {
              setConfirmPass(text)
          }}
            secureTextEntry

          />

        </View>

        <TouchableOpacity
          style={styles.loginbutton}
          onPress={AuthSignup}
        >
          <Text style={{
            color: "#fff"
          }}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;