import React from 'react'
import Event from './EventRegisteration'
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text} from 'react-native'
import PaymentPage from './PaymentPage';

function Next(){
    return(
        <PaymentPage/>
    )
    
}

export default function EventRegStack(){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
          <Stack.Screen name='Event' component={Event} options={{headerShown:false}}/>
          <Stack.Screen name='NEXT' component={Next} options={{headerShown:false}}/>

        </Stack.Navigator>
    )
}