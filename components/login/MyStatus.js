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
    <View style={styles.Item}>
      <Text style={styles.name}>{name}</Text>
    </View>
);

const MyStatus = () =>{
    return(
        <View>
           <Item name='Hello'/> 
        </View>
    )
}

export default MyStatus

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius:7,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      name: {
        fontSize: 32,
        color: '#0782F9'
      },
})