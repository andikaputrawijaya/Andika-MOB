import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image, TouchableOpacity
} from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3ab8cf",
    paddingTop: 30
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:50,
  },
  loginbutton: {
    backgroundColor: "black",
    backgroundColor: "#000000",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    marginHorizontal: 50,
    padding: 20,
    marginHorizontal: 30,
  },

});

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
      
      <View style={{alignItems: 'center'}}>
        <Image style={{width: 150, height: 150}} source={require('../../assets/image/cat4.png')}/>
      </View>

      <View style={{flexDirection: 'row', paddingTop: 50}}>
        <Image style={{width: 150, height: 150}} source={require('../../assets/image/cat1.png')}/>
        <TouchableOpacity
          style={styles.loginbutton}
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={{
            color: "#fff",
            marginHorizontal: 30
          }}>Groaming</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', paddingTop: 50}}>
        <Image style={{width: 150, height: 150}} source={require('../../assets/image/cat1.png')}/>
        <TouchableOpacity
          style={styles.loginbutton}
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={{
            color: "#fff",
            marginHorizontal: 45
          }}>Vaksin</Text>
        </TouchableOpacity>
      </View>
 
  </View>
);

export default HomeScreen;