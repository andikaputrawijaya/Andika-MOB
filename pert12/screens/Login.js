import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TextInput, TouchableOpacity,Alert
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3ab8cf",
    alignItems:'center',
    justifyContent: 'center'
  },
  inputView:{
    width: 200,
    backgroundColor:"#F0FFFF",
    borderRadius:50,
    height:50,
    marginBottom:40,
    justifyContent:"center",
    padding: 5,
    marginRight:40,
    marginLeft:50,
  },

});

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const AuthLogin = async () => {
    const response = await fetch ("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAponwVUgKwHUYqeIijfYaE6iV0BE-dCeQ", {
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
      await navigation.navigate('BotTab')
  } else {
      Alert.alert ('An Error Occured!', resData.error.message, [{
          text: 'Okay'
      }])
  }
  }

  // const handlerLogin = () => {
  //   navigation.navigate('BotTab');
  // };

  return (
    
      <View style={styles.container}>
        <Image style={{width: 152, height: 152, marginBottom: 30}} source={require('../assets/image/logo.png')}/>
        <Text style={{marginBottom: 40, textAlign: "center", color: "#fff", fontSize: 30}}>Login </Text>
  
        <View>
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
          
          <View style={{flexDirection: 'row'}}>

          <TouchableOpacity
            style={{backgroundColor: '#000000', padding: 10, width: 150, borderRadius: 30, marginHorizontal: 2}}
            onPress={AuthLogin}
          >
            <Text style={{ 
              color:"white",
              textAlign: "center"
               }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={{backgroundColor: '#000000', padding: 15, width: 150, borderRadius: 30, marginHorizontal: 2}}
          >
            <Text style={{ color: "white", textAlign: "center"}}>Sign Up</Text>
          </TouchableOpacity>
      </View>
        </View>
      </View>
   
  );
};


export default LoginScreen;