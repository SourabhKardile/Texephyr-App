import { StyleSheet, Text, View , Card, ListItem, Icon, FlatList, StatusBar} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EventRegisteration from './EventRegisteration';
import { element } from 'prop-types';
import EventList from './Event';
import Records from './Records';

const Item = ({ name }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
    </View>
);

const displayString = 'Hello ' + 'Sourabh' + ' SK1070'
var toBeSubmitted = 'Money to be submitted\n\n' + 1000;
var moneySubmitted = 'Money submitted\n\n' + 5000;

const MyStatus = () =>{
    return(
        <View style={{alignSelf:'center', padding:'5%'}}>
           <Item name={displayString}/>
           <Item name={toBeSubmitted}/>
           <Item name={moneySubmitted}/>
        </View>
    )
}

export default MyStatus

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: '5%',
        borderRadius:7,
        marginVertical: '5%'
      },
      name: {
        fontSize: 32,
        color: '#0782F9'
      },
})