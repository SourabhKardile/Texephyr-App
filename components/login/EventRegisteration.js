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
import { FontAwesome, Entypo } from '@expo/vector-icons'; 

const Stack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();


const TexId = () =>{
  const [blur,setBlur] = useState('');
    const [texId,setTexId] = useState('')
    const [modalRegistrationVisible, setRegistrationtModalVisible] = useState(false);

    const CancelBTN = ({ onPress, title }) => (
      
      <TouchableOpacity  onPress={()=>
      {
        setBlur(styles.normal)
        setRegistrationtModalVisible(!modalRegistrationVisible)}
       }
        style={[styles.cancelBtnContainer,{alignSelf:'flex-end'}]}>
        <Text style={styles.appButtonText}><Entypo name="cross" size={24} color="black" /></Text>
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
            <View style={[{alignItems:'center', justifyContent:'center', backgroundColor:'#079779', height:40, width:60},styles.register]}>
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
    {id:1, name: 'CODESTROM', description: 'For all the codeers Texephyr brings code storm. Write out the optimized and most efficient code to prove your coding prowess. This event will not only test your coding but also evaluate your debugging. Event format: 1) Minor (Diploma and FE and SE), 2) Major (TE and BE), Prizes for both tracks are different', isChecked: false, noOfEntries: 4, branch: 0},
    {id:2, name: 'algoholics', description: 'Algoholics, as the name suggests, is an algorithm-based event which tests your logical thinking rather than testing your coding abilities. The motto of the event is Think efficient, build efficient.', isChecked: false, noOfEntries: 4, branch: 0},
    {id:3, name: 'catch the muderer', description: 'catch the murder', isChecked: false, noOfEntries: 2, branch: 1},
    {id:4, name: 'hackathon', description: 'college level hackathon', isChecked: false, noOfEntries: 4, branch: 2}
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
    const [groupVisible, setGroupVisible]  = useState(false);
    const [eventId, setEventId] = useState(0);


    const GetBTN = ({ onPress, title }) => (
      <TouchableOpacity onPress={onPress} style={{marginTop:20,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 7,
        elevation: 3,
        backgroundColor: "#079779"}}>
        <Text style={{color:'#fff'}}>{title}</Text>
      </TouchableOpacity>
    );
 
    const RegisterGroupBTN = ({ onPress, title }) => (
      <TouchableOpacity onPress={()=>{
        setGroupVisible(!groupVisible);
        registerConfirmed(eventId);
      }}
       style={styles.getBtnContainer}>
        <Text style={styles.appButtonText}><FontAwesome name="check" size={24} color="#fff" /></Text>
      </TouchableOpacity>
    );
    
    const CancelBTN = ({ onPress, title }) => (
      <TouchableOpacity onPress={()=>
      {
        setBlur(styles.normal)
        setAccountModalVisible(!modalAccountVisible)}
       }
        style={[styles.cancelBtnContainer,{alignSelf:'flex-end'}]}>
        <Text style={styles.appButtonText}><Entypo name="cross" size={24} color="#fff" /></Text>
      </TouchableOpacity>
    );

    const CancelGroupBTN = ({ onPress, title }) => (
      <TouchableOpacity onPress={()=>setGroupVisible(!groupVisible)} style={styles.cancelBtnContainer}>
        <Text style={styles.appButtonText}><Entypo name="cross" size={24} color="white" /></Text>
      </TouchableOpacity>
    );
    
    const [eventsBoxes,setEvent] = useState(events);

    const registerConfirmed = (id) => {
      let temp = eventsBoxes.map((event) =>{
        if(id == event.id){
          return { ...event, isChecked : !event.isChecked };
        }
        return event
      })
      setEvent(temp);
    }

    const handleChange = (id) => {
      let temp = eventsBoxes.map((event) => {
          if (id === event.id) {
            if(event.isChecked == false && event.noOfEntries >= 2){
              setGroupVisible(!groupVisible);
              setEventId(event.id);
            }
            else{
              return { ...event, isChecked : !event.isChecked };
            }
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
          <View>
            <Card style={{ margin: 5 }}>
          <View style={styles.card}>
              <View
                  style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'space-between',
                      alignItems:'center'
                  }}>
                  <TouchableWithoutFeedback onPress={() => handleChange(item.id)} >
                      <MaterialCommunityIcons
                          name={item.isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'} size={35} color="#079779" />
                  </TouchableWithoutFeedback>
                  <Text style={styles.EventRegistername}>{item.name}</Text>
              </View>
          </View>
          </Card>
          {
            groupVisible == true && eventId == item.id?
            <GroupRegisterForm/>
            :null
          }
          
          </View>
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
          <View>
            <Card style={{ margin: 5 }}>
          <View style={styles.card}>
              <View
                  style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'space-between',
                      alignItems:'center'
                  }}>
                  <TouchableWithoutFeedback onPress={() => handleChange(item.id)} >
                      <MaterialCommunityIcons
                          name={item.isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'} size={35} color="#079779" />
                  </TouchableWithoutFeedback>
                  <Text style={styles.EventRegistername}>{item.name}</Text>
              </View>
          </View>
          </Card>
          {
            groupVisible == true && eventId == item.id?
            <GroupRegisterForm/>
            :null
          }
          
          </View>
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
          <View>
            <Card style={{ margin: 5 }}>
          <View style={styles.card}>
              <View
                  style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'space-between',
                      alignItems:'center'
                  
                      
                  }}>
                  <TouchableWithoutFeedback onPress={() => handleChange(item.id)}>
                      <MaterialCommunityIcons
                          name={item.isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'} size={35} color="#079779" />
                  </TouchableWithoutFeedback>
                  <Text style={styles.EventRegistername}>{item.name}</Text>
              </View>
          </View>
          </Card>
          {
            groupVisible == true && eventId == item.id?
            <GroupRegisterForm/>
            :null
          }
          
          </View>
          :null
        )}
        keyExtractor={item => item.id}
      />
      </View>
      )
    }
  
  const GroupRegisterForm = () =>{
    return(
      <View style = {styles.item}>
        
            <Text style={styles.grpTextMember}>Group member 2</Text>
            <TexId/>
            <Text style={[styles.grpText, {marginTop:10}]}>Already have an account?</Text>
            <Text style={styles.grpTextMember}>Group member 3</Text>
            <TexId/>
            <Text style={[styles.grpText, {marginTop:10}]}>Already have an account?</Text>
            <Text style={styles.grpTextMember}>Group member 4</Text>
            <TexId/>
            
            <TouchableWithoutFeedback onPress={() => {
                setAccountModalVisible(!modalAccountVisible);
              }}>
            <Text style={[styles.grpText, {marginTop:10}]}>Already have an account?</Text>
            </TouchableWithoutFeedback>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly', marginTop:15}}>
            <CancelGroupBTN title="X" size="sm" backgroundColor="#007bff" />
            <RegisterGroupBTN title="V" size="sm" backgroundColor="#007bff" />
            
            </View>
      </View>
    )
  }

  return (
       <View style = {[blur,{flex:1, backgroundColor:'#171717'}]}>
        <TexId />
        <View style ={{padding:10, marginLeft:20, backgroundColor:'#171717'}}>
        <TouchableWithoutFeedback onPress={() => {
            setAccountModalVisible(!modalAccountVisible);
            
            }}>
            <Text style={{color:'#079779'}}>Already have an account?</Text>
        </TouchableWithoutFeedback>
        </View>

          <Tab.Navigator>
          <Tab.Screen name="CSE" component={CseEvent}/>
          <Tab.Screen name="MECH & ROBO" component={MechEvent}/>
          <Tab.Screen name="ENTC" component={EntcEvent}/>
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
            <View style={[styles.modalView,{backgroundColor:'#171717'}]}>
            <CancelBTN title="X" size="sm" backgroundColor="#007bff" />
            <View>
              
              <Text style={{color:'#fff', marginLeft:5, opacity:0.79, width:200}}>TEX ID</Text>
                <TextInput 
                
                onChangeText={text =>setVerCode(text)}
                style={styles.input}
                />


                
            </View>
                {/* <Button title='Get Id' onPress={()=>setAccountModalVisible(!modalAccountVisible)}></Button>
                <Button title='close' onPress={()=>setAccountModalVisible(!modalAccountVisible)}></Button> */}
                <GetBTN title="GET ID" size="sm" backgroundColor="#007bff" > </GetBTN>
            </View>
            </View>
        </Modal>
        <View style={styles.item}>
          <Text style={styles.cartText}>CART</Text>
          <FlatList
        data={selected}
        renderItem={({ item }) => (
          <View>
            <Card style={{ margin: 5 }}>
          <View style={styles.card}>
              <View
                  style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'space-between',
                      alignItems:'center'
                  }}>
                  <TouchableWithoutFeedback onPress={() => handleChange(item.id)} >
                      <MaterialCommunityIcons
                          name={item.isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'} size={30} color="#079779" />
                  </TouchableWithoutFeedback>
                  <Text style={styles.cartNames}>{item.name}</Text>
              </View>
          </View>
          </Card>
          </View>
        )}
        keyExtractor={item => item.id}
      />
        </View>
        <View style={{alignItems:'center'}}>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('NEXT')}>
          <Text style={styles.nextBtn}>NEXT</Text>
        </TouchableOpacity>
        </View>
        </View>
       
       
  )
}

export default EventRegisteration

