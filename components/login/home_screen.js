import { StyleSheet, Text, View , Card, ListItem, Icon, FlatList, StatusBar, Image} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EventRegisteration from './EventRegisteration';
import EventList from './Event';
import MyStatus from './MyStatus'
import MainRecord from './MainRecord'
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import EventRegStack from './EventRegStack'

function EventLogo() {
  return (
    <Image
      
      source={require('../../assets/calendar-days-solid.svg')}
    />
  );
}
const Home_screen = () => {

  return (
    <View style={{width: '100%', height: '100%'}}>
      <Stack.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#121212',
          opacity:0.9
        },
      }}
      // screenOptions={({ route }) => ({
      //     tabBarIcon: ({ focused, color, size }) => {
      //       let iconName;

      //       if (route.name === 'Event') {
      //         iconName = focused
      //           ? 'event'
      //           : 'event';
      //       } else if (route.name === 'Register') {
      //         iconName = focused ? 'pencil-square-o' : 'pencil-square-o';
      //       }

      //       // You can return any component that you like here!
      //       return <MaterialIcons name={iconName} size={24} color={color}/>;
      //     },
      //     tabBarActiveTintColor: 'black',
      //     tabBarInactiveTintColor: 'gray',
      //   })}
      >
    <Stack.Screen name="Event" component={EventList} options={{headerShown:false,tabBarLabel: 'Event', tabBarIcon: ({color}) => <MaterialIcons name="event" size={24} color={color}/>, tabBarActiveTintColor: '#fff',tabBarInactiveTintColor: 'gray'}} />
    <Stack.Screen name="Register" component={EventRegStack} options={{headerShown:false, tabBarIcon:({color})=> <FontAwesome name="pencil-square-o" size={24} color={color} />, tabBarActiveTintColor: '#fff',tabBarInactiveTintColor: 'gray'}}/>
    <Stack.Screen name="My Status" component={MyStatus} options={{headerShown:false, tabBarIcon:({color})=> <FontAwesome5 name="money-check-alt" size={24} color={color} />, tabBarActiveTintColor: '#fff',tabBarInactiveTintColor: 'gray'}}/>
    <Stack.Screen name="Records" component={MainRecord} options={{headerShown:false, tabBarIcon:({color})=> <FontAwesome name="address-book" size={24} color={color} />, tabBarActiveTintColor: '#fff',tabBarInactiveTintColor: 'gray'}}/>
  </Stack.Navigator>
  
    </View>
  )
}

export default Home_screen
const Stack = createBottomTabNavigator();
