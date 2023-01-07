import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Login_screen = () => {
// const [email,setEmail] = useState('')
// const [password,setPassword] = useState('')

// const handleSignUp = async () =>{
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
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >
     <View style={styles.inputContainer}>
        <TextInput
        placeholder="Email"
        style={styles.input}

        />
         <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry

        />
     </View>
     <View style={styles.buttonContainer}>
        <TouchableOpacity
        style={styles.button}
        >
            <Text style={styles.buttonText}>
                Login
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.button,styles.buttonOutline]}
        >
            <Text style={styles.buttonOutlineText}>
                Register
            </Text>
        </TouchableOpacity>
     </View>
    </KeyboardAvoidingView>
  )
}

export default Login_screen

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
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
    width: '60%',
    justifyContent: 'center',
    alignItems:'center',
    marginTop:40, 

},
button:{
    backgroundColor:'#0782F9',
    width:'100%',
    padding:15,
    borderRadius:10,
    alignItems:'center'
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