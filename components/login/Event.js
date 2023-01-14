import { StyleSheet, Text, View , ListItem, Icon, FlatList, StatusBar, Modal,Button, Alert, Image, TouchableOpacity, Dimensions} from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { element } from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './LoginStyle'
import { Card } from 'react-native-paper';
import * as Font from 'expo-font';

async function loadFonts() {
  await Font.loadAsync({
    'ChakraPetch-Bold': require('../.././assets/fonts/ChakraPetch-Bold.ttf'),
  });
  this.setState({ fontsLoaded: true });
}

loadFonts();

const Tab = createMaterialTopTabNavigator();
const events = [
    {name: 'codestorm', description: 'For all the codeers Texephyr brings code storm. Write out the optimized and most efficient code to prove your coding prowess. This event will not only test your coding but also evaluate your debugging. Event format: 1) Minor (Diploma and FE and SE), 2) Major (TE and BE), Prizes for both tracks are different',branch: 0},
    {name: 'algoholics', description: 'Algoholics, as the name suggests, is an algorithm-based event which tests your logical thinking rather than testing your coding abilities. The motto of the event is Think efficient, build efficient.', branch: 0},
    {name: 'catch the muderer', description: 'catch the murder', branch: 1},
    {name: 'hackathon', description: 'college level hackathon', branch: 2}
   ]
   const windowWidth = Dimensions. get('window').width
const EventListItem = ({ name }) => (
  
    <View style={{flex: 1,  justifyContent: 'center', alignItems: 'center', marginTop: 20, backgroundColor:'#4966f8', borderRadius:20, marginHorizontal:5}}>
    {/* <Image
     style={{
       flex: 1,
       height: 150,
       backgroundColor:'red'
     }}
     source={require('../../assets/card.jpg')}
     /> */}
     <View style={{flex:1, height:100, width:windowWidth}}><Text style={styles.eventName}>{name}</Text></View>
      
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

    <View style={[blur,{alignSelf:'center', padding: 10, backgroundColor:'#171717'
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
                <Text style={{padding:25, color:'#fff', fontSize:16}}>{description}</Text>
                <TouchableOpacity  onPress={()=>
                  {
                    setModalVisible(!modalVisible)
                    setBlur(styles.normal)
                  }
                } style={styles.modalButton}><Text>CLOSE</Text></TouchableOpacity>
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
    <View style={[blur,{alignSelf:'center', padding: 10,backgroundColor:'#171717'
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
                <Button style={{color:'red'}} title='close' onPress={()=>
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
    <View style={[blur,{alignSelf:'center',backgroundColor:'#171717'
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
      <Tab.Navigator screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000',
          opacity:0.9
        },
      }}>
        <Tab.Screen name="CSE" component={CSE} options={{tabBarActiveTintColor:'#fff'}}/>
        <Tab.Screen name="MECH & Robo" component={MECH} options={{tabBarActiveTintColor:'#fff'}}/>
        <Tab.Screen name="ENTC" component={Civil} options={{tabBarActiveTintColor:'#fff'}}/>
      </Tab.Navigator>
      </View>
    )
  }

  export default EventList
