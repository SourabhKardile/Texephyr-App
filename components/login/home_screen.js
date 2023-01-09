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
import styles from './LoginStyle'
import MyStatus from './MyStatus'
import MainRecord from './MainRecord'


const Home_screen = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Stack.Navigator 
    screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
    >

    <Stack.Screen name="Event" component={EventList} options={{headerShown:false}} />
    <Stack.Screen name="Register" component={EventRegisteration} options={{headerShown:false}}/>
    <Stack.Screen name="My Status" component={MyStatus} options={{headerShown:false}}/>
    <Stack.Screen name="Records" component={MainRecord} options={{headerShown:false}}/>
  </Stack.Navigator>
    </View>
  )
}

export default Home_screen

// test
const Stack = createBottomTabNavigator();
