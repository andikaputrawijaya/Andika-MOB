import React from 'react';
import {
  StyleSheet, Text, View, Image, TextInput, TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from './firebase/index'
import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3ab8cf",
    alignItems:'center',
    justifyContent: 'center'
  },
  inputView:{
    width: 300,
    backgroundColor:"#F0FFFF",
    borderRadius:50,
    height:50,
    marginBottom:40,
    justifyContent:"center",
    padding: 5,
    marginRight:50,
    marginLeft:50,
  },

});

const DetailsScreen = ({ navigation }) => {
  const [NamaPemilik, setNamaPemilik] = React.useState('');
  const [Telepon, setTelepon] = React.useState('');
  const [Tanggal, setTanggal] = React.useState('');
  const app = () => {
    navigation.navigate('BotTab');
  };

  const [state, setState] = useState ({
    name: "",
    telepon: "",
    tanggal: ""
})

const handleChangeText = (name, value) => {
    setState ({ ...state, [name]: value})
}

const savecomment = async () => {
    if (state.name === '') {
        alert ('Please provide a name')
    }
    else {
        await firebase.bd.ref('/users').push({
            name: state.name,
            telepon: state.telepon,
            tanggal: state.tanggal,
        })
        alert('Seved!')
    }
}
return (
<View style={styles.container}>
<Image style={{width: 152, height: 152, marginBottom: 30}} source={require('../assets/image/cat4.png')}/>
        <Text style={{marginBottom: 40, textAlign: "center", color: "#fff", fontSize: 30}}>Formulir</Text>
  
        <View>
          <TextInput style={styles.inputView}
            // value={NamaPemilik}
            // onChangeText={setNamaPemilik}
            placeholder="Nama Pemilik"
            onChangeText= {(value) => handleChangeText ("name",value )}
          />
          <TextInput style={styles.inputView}
            // value={Telepon}
            // onChangeText={setTelepon}
            placeholder="Nomor Telepon"
            onChangeText= {(value) => handleChangeText ("telepon",value )}
          />
          <TextInput style={styles.inputView}
            // value={Tanggal}
            // onChangeText={setTanggal}
            placeholder="Tanggal - Bulan - Tahun"
            onChangeText= {(value) => handleChangeText ("tanggal",value )}
          />
        </View> 
        <TouchableOpacity onPress={savecomment} style={{
            width: 150, backgroundColor: '#000000', padding: 10,
            alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30
            }}>
            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Submit</Text>
        </TouchableOpacity>  
        <TouchableOpacity style={{borderRadiu:25}} 
        onPress={() => navigation.navigate('TampilanEdit')}>
        <Text style={{
            color: "white",
          }}>edit</Text>
        </TouchableOpacity> 
</View>

);
}
export default DetailsScreen;
