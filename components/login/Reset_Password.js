import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'
import React, { useState } from 'react'

export default function Reset_Password() {
  const [email,setEmailId] = useState('')
  const [oldpassword,setOldPassword] = useState('')
  const [newpassword,setNewPassword] = useState('')
  return (
    <View>
  <View style={styles.inputContainer}>
    <TextInput
      value={email}
      placeholder="email"
      onChangeText={text =>setEmailId(text)}
      style={styles.input}/>
    <TextInput
      value={oldpassword}
      placeholder="old Password"
      onChangeText={text =>setOldPassword(text)}
      style={styles.input}/>
    <TextInput
      value={newpassword}
      placeholder="new password"
      onChangeText={text =>setNewPassword(text)}
      style={styles.input}/>
  </View>
  <View>
  <Button
      title="Reset Password"
      onPress={() => Alert.alert('Simple Button pressed')}/>
  </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      padding:10
  },
  inputContainer:{
  width:'80%',
  
  },
  input:{
      backgroundColor:'white',
      paddingHorizontal:15,
      paddingVertical:10,
      borderRadius: 10,
      marginTop: 5,
  },
  buttonContainer:{ 
      width: '20%',
      justifyContent: 'center',
      alignItems:'center',
      marginTop:40, 
      padding: 10
  },
  button:{
      backgroundColor:'#0782F9',
      width:'25%',
      padding:15,
      borderRadius:10,
      alignItems:'left',
      flex: 1
  },
  buttonOutline:{
      backgroundColor:'white',
      marginTop:5,
      borderColor:'#0782F9',
      borderWidth:2
  },
  buttonText:{
      color:'white',
      fontWeight:'700',
      fontSize:16
  },
  buttonOutlineText:{
      color:'#0782F9',
      fontWeight:'700',
      fontSize:16
  },
  
  
  
  })