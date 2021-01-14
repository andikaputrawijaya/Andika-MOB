import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/image/logo.png')} style={styles.logo} />

            <Text style={{ fontSize: 40, fontWeight: "bold", paddingVertical: 20, paddingTop: 30 }}>My Profile</Text>
            <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', marginHorizontal: 50 }}>Andika Putra Wijaya - 1801010004</Text>
            <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', marginHorizontal: 50 }}>Sistem Informasi 2018</Text>
            <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', marginHorizontal: 50, fontWeight: "bold", marginTop: 20 }}>UTS MOB</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{
                    width: 200, backgroundColor: '#000000', padding: 10,
                    alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30
                }}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3ab8cf',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 300,
        height: 300,
        resizeMode: "contain",
    }
})