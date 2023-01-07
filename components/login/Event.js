import { StyleSheet, Text, View , Card, ListItem, Icon, FlatList, StatusBar} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EventRegisteration from './EventRegisteration';
import { element } from 'prop-types';

const users = [
    {name: 'codestorm'},{name: 'treasure hunt'},{name: 'catch the muderer'},{name: 'hackathon'}
   ]

   const Item = ({ name }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );

  const EventList = () => {
    const renderItem = ({ item }) => (
      <Item name={item.name} />
    );
    return (
      <View style={{width: '100%', height: '100%'}}>
        <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>
    )
  }

  export default EventList

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
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#fff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    name: {
      fontSize: 32,
      color: 'black'
    },
  });