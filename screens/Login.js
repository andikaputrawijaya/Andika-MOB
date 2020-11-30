import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TextInput, TouchableOpacity,
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
  const [Email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handlerLogin = () => {
    navigation.navigate('BotTab');
  };

  return (
    
      <View style={styles.container}>
        <Image style={{width: 152, height: 152, marginBottom: 30}} source={require('../assets/image/logo.png')}/>
        <Text style={{marginBottom: 40, textAlign: "center", color: "#fff", fontSize: 30}}>Login </Text>
  
        <View>
          <TextInput style={styles.inputView}
            value={Email}
            onChangeText={setEmail}
            placeholder="Email"
          />
          <TextInput style={styles.inputView}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
          
            secureTextEntry
          />
          
          <View style={{flexDirection: 'row'}}>

          <TouchableOpacity
            style={{backgroundColor: '#000000', padding: 10, width: 150, borderRadius: 30, marginHorizontal: 2}}
            onPress={handlerLogin}
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