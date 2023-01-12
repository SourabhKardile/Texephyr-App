import { StyleSheet, Text, View , ListItem, Icon, FlatList, StatusBar, Modal,Button, Alert, Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EventRegisteration from './EventRegisteration';
import { element } from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './LoginStyle'
import { Card } from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();
const events = [
    {name: 'codestorm', description: 'For all the codeers Texephyr brings code storm. Write out the optimized and most efficient code to prove your coding prowess. This event will not only test your coding but also evaluate your debugging. Event format: 1) Minor (Diploma and FE and SE), 2) Major (TE and BE), Prizes for both tracks are different',branch: 0},
    {name: 'algoholics', description: 'Algoholics, as the name suggests, is an algorithm-based event which tests your logical thinking rather than testing your coding abilities. The motto of the event is Think efficient, build efficient.', branch: 0},
    {name: 'catch the muderer', description: 'catch the murder', branch: 1},
    {name: 'hackathon', description: 'college level hackathon', branch: 2}
   ]

const EventListItem = ({ name }) => (

    <View style={{flex: 1, width:'90%', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
    <Image
     style={{
       flex: 1,
       height: 150
     }}
     source={require('../../assets/card.jpg')}
     />
      <Text style={{position: 'absolute', fontSize: 30, color:'white', textTransform:'uppercase'}}>{name}</Text>
    </View>
);
const BranchItem = ({ name }) => (
  <View style={styles.branchItem}>
    <Text style={styles.branchname}>{name}</Text>
  </View>
);


function CSE() {
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [blur,setBlur] = useState('');
  return (

    <View style={[blur,{alignSelf:'center', padding: 10
          }]}>
      <Modal
        style={styles.modalView}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          setBlur(styles.normal)
        }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={{padding:25}}>{description}</Text>
                <Button title='close' onPress={()=>
                  {
                    setModalVisible(!modalVisible)
                    setBlur(styles.normal)
                  }
                }></Button>
            </View>
            </View>
        </Modal>
        
    <FlatList
        data={events}
        renderItem={({ item }) => (
          item.branch == 0 ?
            <TouchableOpacity onPress={() => {
              setBlur(styles.blur)
              setModalVisible(!modalVisible);
              setDescription(item.description);
            }}>
          <EventListItem name={item.name}/>
          
          </TouchableOpacity>
          :null
        )}
        keyExtractor={item => item.name}
      />
 
      
    </View>
  );
}

function MECH() {
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [blur,setBlur] = useState('');
  return (
    <View style={[blur,{alignSelf:'center', padding: 10
  }]}>
      <Modal
        style={styles.modalView}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          setBlur(styles.normal)
        }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={{padding:25}}>{description}</Text>
                <Button title='close' onPress={()=>
                  {
                    setModalVisible(!modalVisible)
                    setBlur(styles.normal)
                  }
                }></Button>
            </View>
            </View>
        </Modal>
      <FlatList
        data={events}
        renderItem={({ item }) => (
          item.branch == 1 ?
            <TouchableOpacity onPress={() => {
              setBlur(styles.blur)
              setModalVisible(!modalVisible);
              setDescription(item.description);
            }}>
          <EventListItem name={item.name}/>
          </TouchableOpacity>
          :null
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
}

function Civil(){
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [blur,setBlur] = useState('');
  return (
    <View style={[blur,{alignSelf:'center', padding: 10
  }]}>
      <Modal
        style={styles.modalView}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        
          setModalVisible(!modalVisible);
          setBlur(styles.normal)
        }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={{padding:25}}>{description}</Text>
                <Button title='close' onPress={()=>
                  { 
                    setModalVisible(!modalVisible)
                    setBlur(styles.normal)
                  }
                }></Button>
            </View>
            </View>
        </Modal>
      <FlatList
        data={events}
        renderItem={({ item }) => (
          item.branch == 2 ?
            <TouchableOpacity onPress={() => {
              setModalVisible(!modalVisible);
              setBlur(styles.blur)
              setDescription(item.description);
            }}>
          <EventListItem name={item.name}/>
          </TouchableOpacity>
          :null
        )}
        keyExtractor={item => item.name}
      />
    </View>
  )
}
  const EventList = () => {
    const [branch, setBranch] = useState(0);
    return (
      <View style={{width: '100%', height: '100%'}}>
      <Tab.Navigator>
        <Tab.Screen name="CSE" component={CSE}/>
        <Tab.Screen name="MECH & Robo" component={MECH}/>
        <Tab.Screen name="ENTC" component={Civil}/>
      </Tab.Navigator>
      </View>
    )
  }

  export default EventList
