import { StyleSheet, Text, View , Card, ListItem, Icon, FlatList, Modal,Alert, TextInput,Pressable, Image} from 'react-native'
import React, {useState} from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DataTable } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import  SvgXml  from '../../assets/event_black_24dp.svg';
const Tab = createMaterialTopTabNavigator();



const UpdateRecord = ({navigation}) =>{ 
    return(
        <Tab.Navigator>
        <Tab.Screen name="Individual" component={Individual}/>
        <Tab.Screen name="All" component={All}/>
      </Tab.Navigator>
    )
}

function All(){
      return(
      <View>
   
</View>
    
    )
}
function Individual(){
    const [modalVisible, setModalVisible] = useState(false);
    const [blur,setBlur] = useState('');
    return(
<View style={[blur,{flex:1}]}>
        <View style={{alignItems:'center'}}>
            <TextInput 
                placeholder='Tex Id'
                style={[styles.input]}
            />
            <Pressable style={[blur,styles.button]}>
                 <Text style={styles.text}>Get Details</Text>
            </Pressable>
        </View>
        <Text style={{marginTop:50, marginLeft:30, fontSize:25}}>Name: Sourabh Kardile</Text>
        <View style={{backgroundColor:'white', height:70, flexDirection:'row', margin:10}}>
            <Text style={styles.amtText}>Amount Holding: </Text>
            <Text style={styles.amtText}>{'\u20B9'}500.00</Text>
        </View>
        <View style={{alignItems:'center',height:100, flexDirection:'row'}}>
        <Text style={{marginLeft:50, fontSize:20}}>Deduct:</Text>
        <TextInput 
                placeholder='Enter Amount'
                style={[styles.input,{width:'50%',height:50,marginLeft:20}]}
            />
        </View>
        <View style={{alignItems:'center'}}>
            
            <Modal
            
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
          setBlur(styles.normal)
        }}
      >
      {/* <BlurView
        blurType='light'
        style={styles.contentWrap}> */}
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[styles.modalText,{marginBottom:15}]}>Deduct Amount : 500</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible)
                setBlur(styles.normal)
              }
              }
            >
              <Text style={styles.textStyle}>Confirm </Text>
            </Pressable>
          </View>
        </View>
        {/* </BlurView> */}
      </Modal>
      <Pressable style={[blur,styles.button,{width:'40%'}]}
        onPress={() => {
            setModalVisible(true)
            setBlur(styles.blur)
        }
         }
        
      >
                    <Text style={[blur,styles.text]}>Submit</Text>
            </Pressable>
        </View>
        </View>
    )
}

export default UpdateRecord

const styles = StyleSheet.create({
  row:{
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-between',
  },
    container:{
        flex:1,
        paddingTop: 100,
        paddingHorizontal: 30,
    },
    inputContainer:{
    width:'80%',
    
    },
    textInput:{
        width:'100%',
    },
    text:{
        marginTop: 60,
        fontSize:20,
        

    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius: 10,
        marginTop: 50,
        width:'80%',
        marginBottom:50,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 7,
        elevation: 3,
        backgroundColor: '#2196F3',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      amtText:{marginTop:20, marginLeft:35,fontSize:20},
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
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      blur:{
        backgroundColor:'grey', opacity:0.2
      },
      normal:{
        opacity:1
      },
      tableText:{
        fontSize:20
      },
    })