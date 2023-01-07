import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home_screen from './login/Home_screen';
import Reset from './login/Reset_Password';



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={Home_screen}/>
      <Drawer.Screen name="Reset Password" component={Reset}/>
    </Drawer.Navigator>
    
  );
}

const Drawer_navigation = () => {
  return (
      <MyDrawer/>
      
  )
}

export default Drawer_navigation

const styles = StyleSheet.create({})