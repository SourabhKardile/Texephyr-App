import { StyleSheet, Text, View , Card, ListItem, Icon, FlatList, StatusBar, TextInput,Button} from 'react-native'
import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EventRegisteration from './EventRegisteration';
import { element } from 'prop-types';
import EventList from './Event';
import { ScrollView } from 'react-native-gesture-handler';

const UserRegisteration = () => {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [contactNo, setContactNo] = useState('')
    const [password, setPassword] = useState('')
    const [verCode, setVerCode] = useState('');
    const [collegeId, setCollegeId] = useState('');
    return(
        <ScrollView>
        <View style={styles.container}
        behavior="padding">
            <View style={styles.inputContainer}>
                <TextInput
                value={email}
                placeholder="Name"
                onChangeText={text =>setName(text)}
                style={styles.input}
                />
                <TextInput
                placeholder="Phone"
                onChangeText={text =>setContactNo(text)}
                style={styles.input}
                secureTextEntry
                />
                <TextInput
                placeholder="Email"
                onChangeText={text =>setEmail(text)}
                style={styles.input}
                secureTextEntry
                />
                <TextInput
                placeholder="Passowrd"
                onChangeText={text =>setPassword(text)}
                style={styles.input}
                secureTextEntry
                />
                <TextInput
                placeholder="College Id"
                onChangeText={text =>setCollegeId(text)}
                style={styles.input}
                secureTextEntry
                />
            </View>
            <View>
                <Button title='Send verification code'/>
            </View>
            <View style={[styles.container, {
            flexDirection: "row"
          }]}>
            <Text>verification code</Text>
            <TextInput
                placeholder=""
                onChangeText={text =>setVerCode(text)}
                style={styles.input}
                secureTextEntry
                />
          </View>
          <View>
            <Button title='Create'/>
          </View>
        </View>
        </ScrollView>
    )
}

export default UserRegisteration

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding: 20
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