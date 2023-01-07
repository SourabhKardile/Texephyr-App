import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'
import React, { useState } from 'react'



const TexId = () =>{
    const [texId,setTexId] = useState('')
    return(
        <View style={[styles.container, {
            flexDirection: "row"
          }]}>
        <View style={styles.inputContainer}>
          <TextInput
            value={texId}
            placeholder="textId"
            onChangeText={text =>setTexId(text)}
            style={styles.input}/>
        </View>
        <View>
        <Button
            title="register"
            onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
        </View>
    )
}


export default function EventRegisteration() {
  return (
       <View style = {{width: '100%', height: '100%'}}>
        <TexId/>
        <Text>Final Price</Text>
        <Button title="Next"
            onPress={() => Alert.alert('Simple Button pressed')}/>
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