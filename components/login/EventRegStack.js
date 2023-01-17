import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, FlatList, Pressable, Image} from 'react-native'
import React, { useState } from 'react'
import Event from './EventRegisteration'
import { createStackNavigator } from '@react-navigation/stack';
import PaymentPage from './PaymentPage';
import Modal from "react-native-modal";
import styles from './LoginStyle'
import EventRegisteration from './EventRegisteration';
import {  Entypo } from '@expo/vector-icons'; 

const Stack = createStackNavigator();

function Next({navigation}){
    const [confirmVisible, setConfirmVisible] = useState(false);

    const CancelBTN = ({ onPress, title }) => (
        <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
        <TouchableOpacity onPress={()=>
        {
          setConfirmVisible(!confirmVisible)}
         }
          style={[styles.cancelBtnContainer,{marginLeft:180, margin:0}]}>
          <Text style={[styles.appButtonText]}><Entypo name="cross" size={24} color="#fff" /></Text>
        </TouchableOpacity>
        </View>
      );
    return(
        <View style={[{backgroundColor:'#171717', flex: 1}]}>
        <Text style={styles.paymentText}>Mode Of Payment</Text>
        <PaymentPage/>
        <TouchableOpacity
        onPress={() =>{
            setConfirmVisible(!confirmVisible);
        }}
        style={[styles.nextButton,{alignSelf:'center',width:'85%'}]}
        >
            <Text style={styles.nextBtn}>
                Purchase
            </Text>
        </TouchableOpacity>
        
        <Modal
        animationType="slide"
        transparent={true}
        visible={confirmVisible}
        
        onRequestClose={() => {
          setConfirmVisible(false);
        }}

        >
        <View style={styles.centeredView}>
            <View style={[styles.modalView,{width:'70%'}]}>
            <CancelBTN title="X" size="sm" backgroundColor="#007bff" />
            <Text style={{color:'#fff', fontSize:16}}> TEXID : TEX103 {"\n\n"} Cart items: {"\n"}{"\t\t"}CodeStorm {"\n"}{"\t\t"}Algoholics{"\n\n"} Team Members if Any: {"\n\n"} Total: 500</Text>
            
            <TouchableOpacity
                onPress={() =>{
                    navigation.navigate('EventRegisteration');
                    setConfirmVisible(!confirmVisible);
                }}
                style={[styles.button,{marginTop:40, backgroundColor:'#079779', width:200}]}
                >
                    <Text style={[styles.buttonText,{textTransform:'uppercase'}]}>
                        Confirm
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
            
           
            
        </Modal>
        </View>
    )
    
}

export default function EventRegStack(){
    return(
        <Stack.Navigator>
          <Stack.Screen name='EventRegisteration' component={EventRegisteration} options={{headerShown:false}}/>
          <Stack.Screen name='NEXT' component={Next} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}