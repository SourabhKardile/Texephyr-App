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
import MainRecord from './MainRecord';

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

const MyStatus = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>My Status</Text>
  </View>
);


const Stack = createBottomTabNavigator();


const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#0782F9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 32,
    color: 'white'
  },
});
