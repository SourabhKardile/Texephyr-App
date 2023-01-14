import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, FlatList, Pressable, Image} from 'react-native'
import React, { useState } from 'react'
import Event from './EventRegisteration'
import { createStackNavigator } from '@react-navigation/stack';
import PaymentPage from './PaymentPage';
import Modal from "react-native-modal";
import styles from './LoginStyle'
import EventRegisteration from './EventRegisteration';

const Stack = createStackNavigator();

function Next({navigation}){
    const [confirmVisible, setConfirmVisible] = useState(false);

    const CancelBTN = ({ onPress, title }) => (
        <TouchableOpacity onPress={()=>
        {
          setConfirmVisible(!confirmVisible)}
         }
          style={styles.cancelBtnContainer}>
          <Text style={styles.appButtonText}>X</Text>
        </TouchableOpacity>
      );
    return(
        <View style={[{backgroundColor:'#171717', flex: 1}]}>
        <PaymentPage/>
        <TouchableOpacity
        onPress={() =>{
            setConfirmVisible(!confirmVisible);
        }}
        style={[{marginTop:40},styles.button]}
        >
            <Text style={styles.buttonText}>
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
            <View style={styles.modalAccountView}>
            <CancelBTN title="X" size="sm" backgroundColor="#007bff" />
            <View style={[styles.eventRegContainer, {
                flexDirection: "row"
            }]}>
              
              <TouchableOpacity
                onPress={() =>{
                    navigation.navigate('EventRegisteration');
                    setConfirmVisible(!confirmVisible);
                }}
                style={[{marginTop:40},styles.button]}
                >
                    <Text style={styles.buttonText}>
                        Confirm
                    </Text>
                </TouchableOpacity>    
            </View>
                {/* <Button title='Get Id' onPress={()=>setAccountModalVisible(!modalAccountVisible)}></Button>
                <Button title='close' onPress={()=>setAccountModalVisible(!modalAccountVisible)}></Button> */}
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