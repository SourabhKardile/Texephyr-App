import { ImageBackground, StyleSheet, Text, View ,Button} from 'react-native'
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

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomerDrawer {...props}/>}>
      <Drawer.Screen name="Home" component={Home_screen} options={{headerTitle: 'Texephyr'}}/> 
      <Drawer.Screen name="Reset Password" component={Reset} options={{headerTitle: 'Texephyr'}}/>
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