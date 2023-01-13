import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, FlatList, Pressable} from 'react-native'
import React, { useState } from 'react'
import {ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UserRegistration from './UserRegistration';
import Modal from "react-native-modal";
import styles from './LoginStyle'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PaymentPage from './PaymentPage';
import { FontAwesome } from '@expo/vector-icons'; 

const Stack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();


const TexId = () =>{
  const [blur,setBlur] = useState('');
    const [texId,setTexId] = useState('')
    const [modalRegistrationVisible, setRegistrationtModalVisible] = useState(false);

    const CancelBTN = ({ onPress, title }) => (
      <TouchableOpacity onPress={()=>
      {
        setBlur(styles.normal)
        setRegistrationtModalVisible(!modalRegistrationVisible)}
       }
        style={styles.cancelBtnContainer}>
        <Text style={styles.appButtonText}>X</Text>
      </TouchableOpacity>
    );

    return(
        <View style={[ blur,{marginTop:10,
            flexDirection: "row", justifyContent:'space-around',backgroundColor:'#171717'
          }]}>
          <View>
        
          <TextInput
            value={texId}
            placeholder="TEXID"
            placeholderTextColor="#D9D9D9"
            onChangeText={text =>setTexId(text)}
            style={styles.inputTex}/>
            </View>
        
        <View style={{alignItems:'center', justifyContent:'center'}}>
        <TouchableWithoutFeedback onPress={() => {
              setRegistrationtModalVisible(!modalRegistrationVisible);
              setBlur(styles.normal)
            }}>
            <View style={[{alignItems:'center', justifyContent:'center', backgroundColor:'#b24bf3', height:40, width:60},styles.register]}>
                <FontAwesome name="pencil-square-o" size={25} color='#fff' />
            </View>
        </TouchableWithoutFeedback>
        </View>
        {/* Modal that handles register user */}
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalRegistrationVisible}
        onRequestClose={() => {
          

          setRegistrationtModalVisible(!modalRegistrationVisible);
        }}
        >
            <View style={styles.centeredView}>
            
            <View style={styles.modalView}>
            <CancelBTN title="X" size="sm" backgroundColor="#007bff" />
            <ScrollView>
                <UserRegistration/>
                {/* <Button title='close' onPress={()=>setRegistrationtModalVisible(!modalRegistrationVisible)}></Button> */}
            </ScrollView>
            </View>
            </View>
        </Modal>
        </View>
    )
}

const events = [
    {id:1, name: 'CODESTORM', description: 'For all the codeers Texephyr brings code storm. Write out the optimized and most efficient code to prove your coding prowess. This event will not only test your coding but also evaluate your debugging. Event format: 1) Minor (Diploma and FE and SE), 2) Major (TE and BE), Prizes for both tracks are different', isChecked: false, noOfEntries: 1, branch: 0},
    {id:2, name: 'ALGOHOLICS', description: 'Algoholics, as the name suggests, is an algorithm-based event which tests your logical thinking rather than testing your coding abilities. The motto of the event is Think efficient, build efficient.', isChecked: false, noOfEntries: 4, branch: 0},
    {id:3, name: 'CATCH THE MURDERER', description: 'catch the murder', isChecked: false, noOfEntries: 2, branch: 1},
    {id:4, name: 'HACKATHON', description: 'college level hackathon', isChecked: false, noOfEntries: 4, branch: 2}
   ]

   const Item = ({ name }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );

const EventRegisteration = ({navigation}) => {
  const [blur,setBlur] = useState('');
    const [description, setDescription] = useState('');
    const [modalAccountVisible,setAccountModalVisible] = useState(false);
    const [modalGroupVisible, setGroupModalVisible] = useState(false); 
    const GetBTN = ({ onPress, title }) => (
      <TouchableOpacity onPress={onPress} style={styles.getBtnContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
    );
 
    const RegisterGroupBTN = ({ onPress, title }) => (
      <TouchableOpacity onPress={onPress} style={styles.getBtnContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
    );
    
    const CancelBTN = ({ onPress, title }) => (
      <TouchableOpacity onPress={()=>
      {
        setBlur(styles.normal)
        setAccountModalVisible(!modalAccountVisible)}
       }
        style={styles.cancelBtnContainer}>
        <Text style={styles.appButtonText}>X</Text>
      </TouchableOpacity>
    );

    const CancelGroupBTN = ({ onPress, title }) => (
      <TouchableOpacity onPress={()=>setGroupModalVisible(!modalGroupVisible)} style={styles.cancelBtnContainer}>
        <Text style={styles.appButtonText}>X</Text>
      </TouchableOpacity>
    );
    
    const [eventsBoxes,setEvent] = useState(events);


    const handleChange = (id) => {
      let temp = eventsBoxes.map((event) => {
          if (id === event.id) {
            if(event.isChecked == false && event.noOfEntries >= 2){
              setGroupModalVisible(!modalGroupVisible);
            }
            return { ...event, isChecked : !event.isChecked };
          }
          return event;
      });
      setEvent(temp);
    };

    let selected = eventsBoxes.filter((event) => event.isChecked == true);

    function CseEvent(){
      return(
        <View style={{flex:1, backgroundColor:'#171717'}}>
        <FlatList
        data={eventsBoxes}
        style={[styles.item]}
        renderItem={({ item }) => (
          item.isChecked == false && item.branch == 0 ?
          <Card style={{ margin: 5 }}>
          <View style={styles.card}>
              <View
                  style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'space-between',
                  }}>
                  <TouchableWithoutFeedback onPress={() => handleChange(item.id)} >
                      <MaterialCommunityIcons
                          name={item.isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'} size={35} color="#0782F9" />
                  </TouchableWithoutFeedback>
                  <Text style={{fontSize:18}}>{item.name}</Text>
              </View>
          </View>
          </Card>
          :null
        )}
        keyExtractor={item => item.id}
      />
      </View>
      )
    }

    function MechEvent(){
      return(
        <View style={{flex:1, backgroundColor:'#171717'}}>
        <FlatList
        data={eventsBoxes}
        style={styles.item}
        renderItem={({ item }) => (
          item.isChecked == false && item.branch == 1 ?
          <Card style={{ margin: 5 }}>
          <View style={styles.card}>
              <View
                  style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'space-between',
                  }}>
                  <TouchableWithoutFeedback onPress={() => handleChange(item.id)} >
                      <MaterialCommunityIcons
                          name={item.isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'} size={35} color="#0782F9" />
                  </TouchableWithoutFeedback>
                  <Text style={{fontSize:18}}>{item.name}</Text>
              </View>
          </View>
          </Card>
          :null
        )}
        keyExtractor={item => item.id}
      />
      </View>
      )
    }

    function EntcEvent(){
      return(
        <View style={{flex:1, backgroundColor:'#171717'}}>
        <FlatList
        data={eventsBoxes}
        style={styles.item}
        renderItem={({ item }) => (
          item.isChecked == false && item.branch == 2 ?
          <Card style={{ margin: 5 }}>
          <View style={styles.card}>
              <View
                  style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'space-between',
                  }}>
                  <TouchableWithoutFeedback onPress={() => handleChange(item.id)} >
                      <MaterialCommunityIcons
                          name={item.isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'} size={35} color="#0782F9" />
                  </TouchableWithoutFeedback>
                  <Text style={{fontSize:18}}>{item.name}</Text>
              </View>
          </View>
          </Card>
          :null
        )}
        keyExtractor={item => item.id}
      />
      </View>
      )
    }

  return (
       <View style = {[blur,{flex:1, backgroundColor:'#171717'}]}>
        <TexId />
        <View style ={{padding:10, marginLeft:20, backgroundColor:'#171717'}}>
        <TouchableWithoutFeedback onPress={() => {
            setAccountModalVisible(!modalAccountVisible);
            setBlur(styles.blur)
            }}>
            <Text style={{color:'#007bff'}}>Already have an account?</Text>
        </TouchableWithoutFeedback>
        </View>
        <Tab.Navigator screenOptions={{
        tabBarStyle: {
          backgroundColor: '#171717',
          opacity:0.9
        },
      }}>
          <Tab.Screen name="CSE" component={CseEvent} options={{tabBarActiveTintColor:'#fff'}}/>
          <Tab.Screen name="MECH & ROBO" component={MechEvent} options={{tabBarActiveTintColor:'#fff'}}/>
          <Tab.Screen name="ENTC" component={EntcEvent} options={{tabBarActiveTintColor:'#fff'}}/>
        </Tab.Navigator>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalAccountVisible}
        
        onRequestClose={() => {
          setAccountModalVisible(false);
          setBlur(styles.normal)
        }}

        >
            <View style={styles.centeredView}>
            <View style={styles.modalAccountView}>
            <CancelBTN title="X" size="sm" backgroundColor="#007bff" />
            <View style={[styles.eventRegContainer, {
                flexDirection: "row"
            }]}>
              
                {/* <Text>Email</Text> */}
                <TextInput 
                placeholder="Your email"
                onChangeText={text =>setVerCode(text)}
                style={styles.eventInput}
                secureTextEntry
                />


                
            </View>
                {/* <Button title='Get Id' onPress={()=>setAccountModalVisible(!modalAccountVisible)}></Button>
                <Button title='close' onPress={()=>setAccountModalVisible(!modalAccountVisible)}></Button> */}
                <GetBTN title="GET ID" size="sm" backgroundColor="#007bff" > </GetBTN>
            </View>
            </View>
        </Modal>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalGroupVisible}
        onRequestClose={() => {
          setGroupModalVisible(false);
        }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalGroupView}>
              <CancelGroupBTN title="X" size="sm" backgroundColor="#007bff" />
              <Text>Group member 2</Text>
              <TexId/>
              <Text>Group member 3</Text>
              <TexId/>
              <Text>Group member 4</Text>
              <TexId/>
              <TouchableWithoutFeedback onPress={() => {
                  setAccountModalVisible(!modalAccountVisible);
                }}>
              <Text>Already have an account?</Text>
              </TouchableWithoutFeedback>
              <RegisterGroupBTN title="Register group" size="sm" backgroundColor="#007bff" />
            </View>
            </View>
        </Modal>

        <View style={styles.item}>
          <Text style={{color:'#fff'}}>CART</Text>
        <FlatList
        data={selected}
        renderItem={({ item }) => (
          <Card style={{ margin: 5 }}>
          <View style={styles.card}>
              <View
                  style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'space-between',
                  }}>
                  <TouchableWithoutFeedback onPress={() => handleChange(item.id)} >
                      <MaterialCommunityIcons
                          name={item.isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'} size={30} color="#0782F9" />
                  </TouchableWithoutFeedback>
                  <Text>{item.name}</Text>
              </View>
          </View>
          </Card>
        )}
        keyExtractor={item => item.id}
      />
        </View>
        <View style={{alignItems:'center'}}>
        <TouchableOpacity style={{ backgroundColor:'#5F5F5F', height:40, marginBottom:10, alignItems:'center', justifyContent:'center', width:'50%', borderRadius:10}} onPress={() => navigation.navigate('NEXT')}>
          <Text style={{alignSelf:'center', color:'#fff'}}>NEXT</Text>
        </TouchableOpacity>
        </View>
       </View>
       
  )
}

export default EventRegisteration

