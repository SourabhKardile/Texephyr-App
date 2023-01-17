import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Component } from 'react/cjs/react.production.min'
import Home_screen from './Home_screen'
import { useNavigation } from '@react-navigation/native';
import styles from './LoginStyle'
import * as Font from 'expo-font';

async function loadFonts() {
    await Font.loadAsync({
      'ChakraPetch-Bold': require('../.././assets/fonts/ChakraPetch-Bold.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }
  
  loadFonts();



const Login_screen = ({navigation}) => {

  
const [email,setEmail] = useState('')
const [password, setPassword] = useState('')

React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        const action = e.data.action;
        e.preventDefault();

      })
  );
// await auth
// .createUserWithEmailAndPassword(email, password)
// .then((userDetail) => {
//     const user = userDetail.user;
//   console.log('User account created & signed in!'+user.email);
// })
// .catch(error => {
//   if (error.code === 'auth/email-already-in-use') {
//     console.log('That email address is already in use!');
//   }

//   if (error.code === 'auth/invalid-email') {
//     console.log('That email address is invalid!');
//   }

//   console.error(error);

// }
// )
// }

  return (
    <View
    style={[styles.container,{justifyContent:'space-evenly', alignItems:'center' }]} behavior="padding"
    >
    <View style={{alignItems:'center'}}>
    <Text style={{color:'#fff',fontSize: 35,lineHeight: 47, alignItems:'center', justifyContent:'center', fontFamily: 'ChakraPetch-Bold'}}>WELCOME</Text>
    <Text style={{color:'#fff',fontSize: 35,lineHeight: 47, alignItems:'center', justifyContent:'center', fontFamily: 'ChakraPetch-Bold'}}>TEAM TEXEPHYR</Text>
    </View>
      
     <View style={styles.inputContainer}>
     <Text style={{color:'#fff', marginLeft:5, opacity:0.79}}>Tex ID</Text>
        <TextInput
        value={email} 
        onChangeText={text =>setEmail(text)}
        style={styles.input}

        />

        <Text style={{color:'#fff', marginLeft:5, opacity:0.79}}>Password</Text>
         <TextInput
        placeholder="Password"
        onChangeText={text =>setPassword(text)}
        style={styles.input}
        secureTextEntry

        />
        <TouchableOpacity
        onPress={() =>{
            navigation.navigate('DrawerNav')
            // if(email == 'sourabh@gmail.com' && password == '12345')
                
        }}
        style={[{marginTop:40},styles.button]}
        >
            <Text style={styles.buttonText}>
                Login
            </Text>
        </TouchableOpacity>
     </View>
     <View style={styles.buttonContainer}>
        
     </View>
    </View>
  )
}

export default Login_screen