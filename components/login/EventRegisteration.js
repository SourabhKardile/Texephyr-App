import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import {TouchableWithoutFeedback } from 'react-native-gesture-handler'
import UserRegistration from './UserRegistration';
import Modal from "react-native-modal";
import styles from './LoginStyle'


const TexId = () =>{
    const [texId,setTexId] = useState('')
    const [modalRegistrationVisible, setRegistrationtModalVisible] = useState(false);
    return(
        <View style={[styles.eventContainer, {
            flexDirection: "row"
          }]}>
        <View style={styles.eventInputContainer}>
          <TextInput
            value={texId}
            placeholder="textId"
            onChangeText={text =>setTexId(text)}
            style={styles.eventInput}/>
        </View>
        <View>
        <TouchableWithoutFeedback onPress={() => {
              setRegistrationtModalVisible(!modalRegistrationVisible);
            }}>
            <View style={styles.register}>
                <Text style={{fontSize:20}}>Register</Text>
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
                <UserRegistration/>
                <Button title='close' onPress={()=>setRegistrationtModalVisible(!modalRegistrationVisible)}></Button>
            </View>
            </View>
        </Modal>
        </View>
    )
}

const events = [
    {name: 'codestorm', description: 'For all the codeers Texephyr brings code storm. Write out the optimized and most efficient code to prove your coding prowess. This event will not only test your coding but also evaluate your debugging. Event format: 1) Minor (Diploma and FE and SE), 2) Major (TE and BE), Prizes for both tracks are different'},
    {name: 'algoholics', description: 'Algoholics, as the name suggests, is an algorithm-based event which tests your logical thinking rather than testing your coding abilities. The motto of the event is Think efficient, build efficient.'},
    {name: 'catch the muderer', description: 'catch the murder'},
    {name: 'hackathon', description: 'college level hackathon'}
   ]

   const Item = ({ name }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );

const EventRegisteration = () => {
    const [description, setDescription] = useState('');
    const [modalAccountVisible,setAccountModalVisible] = useState(false);

    const GetBTN = ({ onPress, title }) => (
      <TouchableOpacity onPress={onPress} style={styles.getBtnContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
    );
  
    const CancelBTN = ({ onPress, title }) => (
      <TouchableOpacity onPress={()=>setAccountModalVisible(!modalAccountVisible)} style={styles.cancelBtnContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
    );

  return (
       <View style = {{width: '100%', height: '100%'}}>
        <TexId/>
        <View style ={{padding:10}}>
        <TouchableWithoutFeedback onPress={() => {
            setAccountModalVisible(!modalAccountVisible);
            }}>
            <Text>Already have an account?</Text>
        </TouchableWithoutFeedback>
        </View>
        <Modal
        
        animationType="slide"
        transparent={true}
        visible={modalAccountVisible}
        
        onRequestClose={() => {
          setAccountModalVisible(false);
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
        
        <FlatList
        data={events}
        renderItem={({ item }) => (
            <TouchableWithoutFeedback onPress={() => {
            }}>
            <Item name={item.name}/>
            </TouchableWithoutFeedback>
        )}
        keyExtractor={item => item.name}
      />
        <Text style={styles.finalPrice}>Final Price</Text>
        <Button title="Next"
            // 
            />
       </View>
       
  )
}

export default EventRegisteration
