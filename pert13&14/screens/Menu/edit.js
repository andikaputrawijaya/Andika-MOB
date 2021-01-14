import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from '../firebase/index';

export default function updateScreen({ route, navigation }) {
    const [name, setname] =  useState(route.params.name);
    const [telepon, settelepon] =  useState(route.params.telepon);
    const [tanggal, settanggal] =  useState(route.params.tanggal);
  // const [age, setAge] = useState(route.params.age);

  function editFire() {
    try {
      firebase.bd.ref('/users/' + route.params.key).update({
        name: name,
        telepon: telepon,
        tanggal: tanggal
      })

    } catch (error) {
      alert(error);
    }
    finally {
      setname('');
      settelepon('');
      settanggal('');
      navigation.navigate("TampilanEdit")
    }
  }

  return (
    <View style={styles.container}>

        <Text style={styles.text}>Nama Pemilik</Text>
        <TextInput style={styles.textInput} onChangeText={name => setname(name)} value={name} />

        <Text style={styles.text}>telepon</Text>
        <TextInput style={styles.textInput} onChangeText={telepon => settelepon(telepon)} value={telepon} />

        <Text style={styles.text}>tanggal</Text>
        <TextInput style={styles.textInput} onChangeText={tanggal => settanggal(tanggal)} value={tanggal} />

        <TouchableOpacity style={styles.btnEnviar} onPress={() => { editFire() }}>
          <Text style={styles.text}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnEnviar} onPress={() => navigation.navigate("TampilanEdit")}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  btnEnviar: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 25,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
});