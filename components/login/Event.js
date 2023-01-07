import { StyleSheet, Text, View , Card, ListItem, Icon, FlatList, StatusBar, Modal,Button} from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EventRegisteration from './EventRegisteration';
import { element } from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const users = [
    {name: 'codestorm', description: 'random bullshit 1'},{name: 'treasure hunt', description: 'random bullshit 2'},{name: 'catch the muderer', description: 'random bullshit 4'},{name: 'hackathon', description: 'random bullshit 3'}
   ]

   const Item = ({ name }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );

  const EventList = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [description, setDescription] = useState('');
    return (
      <View style={{width: '100%', height: '100%'}}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text>{description}</Text>
                <Button title='close' onPress={()=>setModalVisible(!modalVisible)}></Button>
            </View>
            </View>
        </Modal>
        <FlatList
        data={users}
        renderItem={({ item }) => (
            <TouchableWithoutFeedback onPress={() => {
                setModalVisible(!modalVisible);
                setDescription(item.description);
            }}>
            <Item name={item.name}/>
            </TouchableWithoutFeedback>
        )}
        keyExtractor={item => item.name}
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      }
  });