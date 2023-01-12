import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Component } from 'react/cjs/react.production.min'
import Home_screen from './Home_screen'
import { useNavigation } from '@react-navigation/native';
import styles from './LoginStyle'



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
    style={styles.container}
    behavior="padding"
    >
     <View style={styles.inputContainer}>
        <TextInput
        value={email}
        placeholder="Email"
        onChangeText={text =>setEmail(text)}
        style={styles.input}

        />
         <TextInput
        placeholder="Password"
        onChangeText={text =>setPassword(text)}
        style={styles.input}
        secureTextEntry

        />
     </View>
     <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={() =>{
            navigation.navigate('DrawerNav')
            // if(email == 'sourabh@gmail.com' && password == '12345')
                
        }}
        style={styles.button}
        >
            <Text style={styles.buttonText}>
                Login
            </Text>
        </TouchableOpacity>
     </View>
    </View>
  )
}

export default Login_screen