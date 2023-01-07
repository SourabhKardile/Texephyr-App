import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Home_screen = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Event" component={Event}  />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="My Status" component={MyStatus} />
    <Stack.Screen name="stats" component={Stats} />
  </Stack.Navigator>
  )
}

export default Home_screen
const Event = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Event</Text>
  </View>
);

const Register = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Register</Text>
  </View>
);

const MyStatus = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>My Status</Text>
  </View>
);

const Stats = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Stats</Text>
  </View>
);
const Stack = createBottomTabNavigator();



const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});