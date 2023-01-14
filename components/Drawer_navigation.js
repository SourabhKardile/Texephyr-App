import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home_screen from "./login/Home_screen";
import Reset from "./login/Reset_Password";
import { useState } from "react";
import Event from "./login/Event";
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Font from 'expo-font';

async function loadFonts() {
    await Font.loadAsync({
      'ChakraPetch-Bold': require('.././assets/fonts/ChakraPetch-Bold.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }
  
  loadFonts();

const Drawer = createDrawerNavigator();

function LogoTitle() {
  return (
    <Pressable>
      <Image source={require("../assets/logo.png")} />
    </Pressable>
  );
}

const CustomerDrawer = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <DrawerContentScrollView {...props}>
        <ImageBackground>
          <Text style={{ color: "#fff", fontSize: 25 }}>Aditya Patil</Text>
          <Text style={{ color: "#fff" }}>
            ----------------------------------------------
          </Text>
        </ImageBackground>
        <DrawerItemList {...props} />

        <TouchableOpacity
          onPress={() => Alert.alert("Simple Button pressed")}
          style={styles.button}
        >
          <Text style={styles.text}>LOGOUT</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
};

export function MyDrawer() {
  const [header, setHeader] = useState(true);
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#171717",
          width: 240,
        },
      }}
      drawerContent={(props) => <CustomerDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home_screen}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <Entypo name="home" size={20} color={color} />
          ),
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "grey",
          headerTitle:"TEXEPHYR",
          // headerTitle: (props) => <LogoTitle />,
          // headerTitleStyle: { backgroundColor: "#0782F9" },
          headerStyle: {
            backgroundColor: "#079779",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: 'ChakraPetch-Bold',
            fontSize: 25
          },
        }}
      />
      <Drawer.Screen
      
        name="Reset Password"
        component={Reset}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="lock-reset" size={24} color={color} />
          ),
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "grey",
          headerTitle: "Texephyr",
          headerTitleStyle: { color: "#0782F9" , fontFamily: 'ChakraPetch-Bold'},
        }}
      />
    </Drawer.Navigator>
  );
}

const Drawer_navigation = () => {
  return <MyDrawer />;
};

export default Drawer_navigation;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: "#6c6c6c",
    width: "90%",
    marginLeft: 10,
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
