import { StyleSheet, Text, View , Card, ListItem, Icon, FlatList, StatusBar, Modal,Button, Alert} from 'react-native'
import React, { useState } from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import EventRegisteration from './EventRegisteration';
// import { element } from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from './LoginStyle'


const events = [
    {name: 'codestorm', description: 'For all the codeers Texephyr brings code storm. Write out the optimized and most efficient code to prove your coding prowess. This event will not only test your coding but also evaluate your debugging. Event format: 1) Minor (Diploma and FE and SE), 2) Major (TE and BE), Prizes for both tracks are different',branch: 0},
    {name: 'algoholics', description: 'Algoholics, as the name suggests, is an algorithm-based event which tests your logical thinking rather than testing your coding abilities. The motto of the event is Think efficient, build efficient.', branch: 0},
    {name: 'catch the muderer', description: 'catch the murder', branch: 1},
    {name: 'hackathon', description: 'college level hackathon', branch: 2}
   ]

const EventListItem = ({ name }) => (
    <View style={styles.eventListItem}>
      <Text style={styles.eventName}>{name}</Text>
    </View>
);

const BranchItem = ({ name }) => (
  <View style={styles.branchItem}>
    <Text style={styles.branchname}>{name}</Text>
  </View>
);

  const EventList = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [description, setDescription] = useState('');
    const [branch, setBranch] = useState(0);
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
            <View style={styles.eventModalView}>
                <Text style={{padding:25}}>{description}</Text>
                <Button title='close' onPress={()=>setModalVisible(!modalVisible)}></Button>
            </View>
            </View>
        </Modal>
        <View style={[{alignSelf:'center', padding: 10,
            flexDirection: "row"
          }]}>
            <TouchableWithoutFeedback onPress={() => {
                setBranch(0);
            }}>
            <BranchItem style={styles.eventListItem} name='CSE'/>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {
                setBranch(1);
            }}>
            <BranchItem style={styles.eventListItem} name='Mech'/>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {
                setBranch(2);
            }}>
            <BranchItem style={styles.eventListItem} name='Civil'/>
            </TouchableWithoutFeedback>
        </View>
        <FlatList
        data={events}
        renderItem={({ item }) => (
          item.branch == branch ?
            <TouchableWithoutFeedback onPress={() => {
              setModalVisible(!modalVisible);
              setDescription(item.description);
            }}>
          <EventListItem name={item.name}/>
          </TouchableWithoutFeedback>
          :null
        )}
        keyExtractor={item => item.name}
      />
      </View>
    )
  }

  export default EventList