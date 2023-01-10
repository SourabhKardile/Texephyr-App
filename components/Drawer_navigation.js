import { ImageBackground, StyleSheet, Text, View ,Button, Image} from 'react-native'
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
import { useState } from 'react';


const Drawer = createDrawerNavigator();

function LogoTitle() {
  return (
    <Image
      
      source={require('../assets/logo.png')}
    />
  );
}


const CustomerDrawer = (props) => {
  return(
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#fff'}}>
      <ImageBackground>
        <Text style ={{color: 'black', fontSize: 25}}>Your Name</Text>
        <Text style ={{color: 'black'}}>---------------------------------------------------------------------</Text>
      </ImageBackground>
      <DrawerItemList {...props}/>
      <Button
      title="Logout"
      onPress={() => Alert.alert('Simple Button pressed')}/>
    </DrawerContentScrollView>
    </View>
  )
}



export function MyDrawer(props) {
    const [header, setHeader] = useState(true)
  return (

    <Drawer.Navigator drawerContent={props => <CustomerDrawer {...props}/>}>
      <Drawer.Screen name="Home" component={Home_screen} options={{headerTitle: (props) => <LogoTitle {...props} />,headerTitleStyle: {color:'#0782F9'} }}/> 
      <Drawer.Screen name="Reset Password" component={Reset} options={{headerTitle: 'Texephyr',headerTitleStyle: {color:'#0782F9'}}}/>
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