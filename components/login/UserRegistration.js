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
import styles from './LoginStyle'

const countries = ["MITWPU", "Harvard", "Yale", "Oxford"]

const CollegeSelect = () => {
    return(
        <View style={{alignSelf:'center',backgroundColor:'white', padding:10}}>
            <SelectDropdown
	        data={countries}
            defaultValue={countries[0]}
	        onSelect={(selectedItem, index) => {
		    console.log(selectedItem, index)
	        }}
	        buttonTextAfterSelection={(selectedItem, index) => {
		    // text represented after item is selected
		    // if data array is an array of objects then return selectedItem.property to render after item is selected
		    return selectedItem
	        }}
	        rowTextForSelection={(item, index) => {
		    // text represented for each item in dropdown
		    // if data array is an array of objects then return item.property to represent item in dropdown
		    return item
	        }}
        />
        </View>
    )
}

const UserRegisteration = () => {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [contactNo, setContactNo] = useState('')
    const [password, setPassword] = useState('')
    const [verCode, setVerCode] = useState('');
    return(
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
                <CollegeSelect/>
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
    )
}

export default UserRegisteration