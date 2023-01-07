import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Forgot Password" component={ForgotPassword}/>
      <Drawer.Screen name="Logout" component={Logout}/>
    </Drawer.Navigator>
  );
}

const Home_screen = () => {
  return (
    <View>
      <MyDrawer/>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default Home_screen

const styles = StyleSheet.create({})