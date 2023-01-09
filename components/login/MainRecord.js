import { View, Text } from 'react-native'
import React from 'react'
import Record from './Records'
import Update from './Update'
import UpdateRecord from './UpdateRecord'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function MainRecord() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Record" component={Record} options={{headerShown:false}}/>
    <Stack.Screen name="Update" component={UpdateRecord} options={{headerShown:false}}/>
  </Stack.Navigator>
  )
}