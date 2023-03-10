import { View, Text } from 'react-native'
import React from 'react'
import Record from './Records'
import TRecords from './TRecords'
import Update from './UpdateRecord'
import EventSales from './EventSales'
import OverAllSales from './OverAllSales'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function MainRecord() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Record" component={Record} options={{headerShown:false}}/>
    <Stack.Screen name="Update" component={Update} options={{ headerShown:false}}/>
    <Stack.Screen name="TresRecord" component={TRecords} options={{ headerShown:false}}/>
    <Stack.Screen name="EventSales" component={EventSales} options={{ headerShown:false}}/>
    <Stack.Screen name="OverAllSales" component={OverAllSales} options={{ headerShown:false}}/>
  </Stack.Navigator>
  )
}