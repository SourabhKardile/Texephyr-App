import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home_screen from './components/login/Home_screen';
import Login_screen from './components/login/Login_screen';
import Splash_Screen from './components/login/Splash_Screen';
import ActionBarImage from './assets/logo.jpg';
import 'react-native-gesture-handler';
import DrawerNav from './components/Drawer_navigation'
import 'react-native-gesture-handler';
import React, { useState } from 'react';
const Stack = createNativeStackNavigator();



export default function App() {
  const [align, setAlign] = useState('center');
  const [alignsecond, setAlignsecond] = useState(false);

  setTimeout(() => {
    setAlign('flex-start'), setAlignsecond(true);
  }, 3000);
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="Splash" component={Splash_Screen} options={{
        headerShown:false,
      }}/>
      <Stack.Screen name="Login" component={Login_screen}/>
      <Stack.Screen name="Home" component={Home_screen}/>
      <Stack.Screen name="DrawerNav" component={DrawerNav} options={{
        headerShown:false,
      }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
