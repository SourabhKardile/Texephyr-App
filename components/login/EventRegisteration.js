import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import UserRegistration from './UserRegistration';
import Modal from "react-native-modal";


const TexId = () =>{
    const [texId,setTexId] = useState('')
    const [modalRegistrationVisible, setRegistrationtModalVisible] = useState(false);
    return(
        <View style={[styles.container, {
            flexDirection: "row"
          }]}>
        <View style={styles.inputContainer}>
          <TextInput
            value={texId}
            placeholder="textId"
            onChangeText={text =>setTexId(text)}
            style={styles.input}/>
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
              <ScrollView>
                <UserRegistration/>
                <Button title='close' onPress={()=>setRegistrationtModalVisible(!modalRegistrationVisible)}></Button>
              </ScrollView>
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
          setAccountModalVisible(!modalAccountVisible);
        }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalAccountView}>
            <View style={[styles.container, {
                flexDirection: "row"
            }]}>
                <Text>Email</Text>
                <TextInput 
                placeholder=""
                onChangeText={text =>setVerCode(text)}
                style={styles.input}
                secureTextEntry
                />
            </View>
                <Button title='Get Id' onPress={()=>setAccountModalVisible(!modalAccountVisible)}></Button>
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

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },
    inputContainer:{
    width:'80%',
    
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius: 10,
        marginTop: 5,
        borderColor: '#0782F9'
    },
    register:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius: 10,
        marginTop: 5,
        borderColor: '#0782F9'
    },
    buttonContainer:{ 
        width: '20%',
        justifyContent: 'center',
        alignItems:'center',
        marginTop:40, 
        padding: 10
    },
    button:{
        backgroundColor:'#0782F9',
        width:'25%',
        padding:15,
        borderRadius:10,
        alignItems:'left',
        flex: 1
    },
    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'#0782F9',
        borderWidth:2
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16
    },
    buttonOutlineText:{
        color:'#0782F9',
        fontWeight:'700',
        fontSize:16
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius:7,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      name: {
        fontSize: 32,
        color: '#0782F9'
      },
      finalPrice:{
        fontSize: 32,
        color: 'black',
        alignSelf: 'center'
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        width: '100%',
        height: '100%'
      },
      modalView: {
        width: '90%',
        height: '70%',
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
      },
      modalAccountView: {
        width: '70%',
        height: '25%',
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
    })