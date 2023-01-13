import { StyleSheet, Text, View , Card, ListItem, Icon, FlatList, StatusBar, ImageBackground} from 'react-native'
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





const MyStatus = () =>{
    return(
        <View style={[styles.container]}>
        <ImageBackground source={require('../../assets/backDark.jpg')} resizeMode="cover" style={styles.image}>
        <Text style={{fontSize:20, marginTop:'30%', marginLeft:40, color:'#fff'}}>Money To be {"\n"}Submitted</Text>
        <Text style={{fontSize:30, marginLeft:40, fontWeight:'bold', color:'#fff'}}>{'\u20B9'}500</Text>
           
           
           </ImageBackground>
        </View>
    )
}

export default MyStatus

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    
    flex: 1,
    justifyContent:'flex-start'
  },
})