import { StyleSheet, Text, View , Card, ListItem, Icon, FlatList, StatusBar, TextInput,Button} from 'react-native'
import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EventRegisteration from './EventRegisteration';
import { element } from 'prop-types';
import EventList from './Event';
import SelectDropdown from 'react-native-select-dropdown'

const UpdateRecord = () =>{
    const[texId,setTexId] = useState('');
    const[deductMoney,setDeduct] = useState('');
    return(
        <View style={styles.container} behavior = 'padding'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Tex Id"
                    onChangeText={text =>setDeduct(text)}
                    style={styles.input}
                />
            </View>
        </View>
    )
}

export default UpdateRecord
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