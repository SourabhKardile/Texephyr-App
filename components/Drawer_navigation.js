import { ImageBackground, StyleSheet, Text, View ,Button, Image, Pressable, Alert} from 'react-native'
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
import Event from './login/Event'


const Drawer = createDrawerNavigator();

function LogoTitle() {
  
  return (
    
    <Pressable >
    <Image
      
      source={require('../assets/logo.png')}
    />
    </Pressable>
  );
}


const CustomerDrawer = (props) => {
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
    <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#fff'}}>
      <ImageBackground>
        <Text style ={{color: 'black', fontSize: 25}}>Your Name</Text>
        <Text style ={{color: 'black'}}>---------------------------------------------------------------------</Text>
      </ImageBackground>
      <DrawerItemList {...props}/>
      <Pressable onPress={() => Alert.alert('Simple Button pressed')} style={styles.button} >
                 <Text style={styles.text}>LOGOUT</Text>
            </Pressable>
    </DrawerContentScrollView>
    </View>
  )
}



export function MyDrawer() {
    const [header, setHeader] = useState(true)
  return (

    <Drawer.Navigator drawerContent={props => <CustomerDrawer {...props}/>}>
      <Drawer.Screen name="Home" component={Home_screen} options={{headerTitle: (props) => <LogoTitle />,headerTitleStyle: {color:'#0782F9'} }}/> 
      <Drawer.Screen name="Reset Password" component={Reset} options={{headerTitle: 'Texephyr',headerTitleStyle: {color:'#0782F9'}}}/>
    </Drawer.Navigator>
    
  );
}

const Drawer_navigation = () => {
  return (
      <MyDrawer />
      
  )
}

export default Drawer_navigation

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: '#2196F3',
    width:'90%',
    marginLeft:10
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})