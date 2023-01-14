import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'
import React, { useState } from 'react'
import styles from './LoginStyle'

export default function Reset_Password() {
  const [email,setEmailId] = useState('')
  const [oldpassword,setOldPassword] = useState('')
  const [newpassword,setNewPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  return (
    <View style={[styles.container,{justifyContent:'space-evenly', alignItems:'center' }]} behavior="padding"
    >
  <View style={styles.inputContainer}>
  
    <Text style={{color:'#fff', marginLeft:5, opacity:0.79}}>OLD PASSWORD</Text>
    <TextInput
      value={oldpassword}
      
      onChangeText={text =>setOldPassword(text)}
      style={styles.input}/>
      <Text style={{color:'#fff', marginLeft:5, opacity:0.79}}>NEW PASSWORD</Text>
    <TextInput
      value={newpassword}
      
      onChangeText={text =>setNewPassword(text)}
      style={styles.input}/>
      <Text style={{color:'#fff', marginLeft:5, opacity:0.79}}>RE-ENTER PASSWORD</Text>
    <TextInput
      value={confirmPassword}
      
      onChangeText={text =>setConfirmPassword(text)}
      style={styles.input}/>
      <TouchableOpacity
        onPress={() =>{
            navigation.navigate('DrawerNav')
            // if(email == 'sourabh@gmail.com' && password == '12345')
                
        }}
        style={[{marginTop:40},styles.button]}
        >
            <Text style={styles.buttonText}>
                RESET PASSWORD
            </Text>
        </TouchableOpacity>
  </View>
  </View>
  
  )
}