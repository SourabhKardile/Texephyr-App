import { StyleSheet, Text, View , Card, ListItem, Icon, FlatList, Modal,Alert, TextInput,Pressable, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DataTable } from 'react-native-paper';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

const Tab = createMaterialTopTabNavigator();



const UpdateRecord = ({navigation}) =>{ 
    return(
        <Tab.Navigator screenOptions={{
          tabBarStyle: {
            backgroundColor: '#000',
            opacity:0.9
          },
        }}>
        <Tab.Screen name="Individual" component={Individual} options={{tabBarActiveTintColor:'#fff'}}/>
        <Tab.Screen name="All" component={All} options={{tabBarActiveTintColor:'#fff'}}/>
      </Tab.Navigator>
    )
}

function All(){
  const [tableHead, setTableHead] = useState( ['Tex ID', 'Name', 'Holding', 'Collect'])
    const [tableData, setTableData]= useState( [
        ['101', 'Aditya Patil', '300', '4'],
        ['102', 'Pratap Kakade', '10000', 'd'],
        ['103', 'Aditya Inamdar', '400', '4'],
        ['104', 'Sourabh Kardile', '300', 'd']
      ])

      const element = (data, index) => (
        <TouchableOpacity onPress={() => Alert.alert(`This is row ${index + 1}`)}>
          <View style={styles.btn1}>
            <Text style={styles.btnText1}>Collect</Text>
          </View>
        </TouchableOpacity>
      );
      return(
        <View style={[styles.container1]}>
    <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
      <Row data={tableHead} style={styles.head1} textStyle={styles.text1}/>
      {
        tableData.map((rowData, index) => (
          <TableWrapper key={index} style={styles.row1}>
            {
              rowData.map((cellData, cellIndex) => (
                <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData}/>
              ))
            }
          </TableWrapper>
        ))
      }
    </Table>
  </View>
      )
}
function Individual(){
    const [modalVisible, setModalVisible] = useState(false);
    const [blur,setBlur] = useState('');
    return(
<View style={[blur,{flex:1, backgroundColor:'#171717'}]}>
        <View style={{alignItems:'center', marginTop:10}}>
            <TextInput 
                placeholder='TEX ID'
                placeholderTextColor="#D9D9D9"
                style={[styles.input,{fontSize:20}]}
            />
            <Pressable style={[blur,styles.button]}>
                 <Text style={styles.text}>Get Details</Text>
            </Pressable>
        </View>
        <Text style={{marginTop:50, marginLeft:30, fontSize:25, color:'#fff'}}>Name: Sourabh Kardile</Text>
        <View style={{backgroundColor:'#5f5f5f', height:70, flexDirection:'row', margin:10}}>
            <Text style={styles.amtText}>Amount Holding: </Text>
            <Text style={styles.amtText}>{'\u20B9'}500.00</Text>
        </View>
        <View style={{alignItems:'center',height:100, flexDirection:'row'}}>
        <Text style={{marginLeft:50, fontSize:20, color:'#fff'}}>Deduct:</Text>
        <TextInput 
                placeholderTextColor="#D9D9D9"
                placeholder='Enter Amount'
                style={[styles.input,{width:'50%',height:50,marginLeft:20, fontSize:20}]}
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
  row: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 30,
  },
  inputContainer: {
    width: "80%",
  },
  textInput: {
    width: "100%",
  },
  text: {
    marginTop: 60,
    fontSize: 20,
  },
  input: {
    borderBottomColor: 'white',
        
        borderBottomWidth: 1,
        marginTop: 5,
        color: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        width: 270,
  },
  button: {
    marginTop:20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: "#2196F3",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  amtText: { marginTop: 20, marginLeft: 35, fontSize: 20 , color:'#fff'},
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    color:'#fff'
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  blur: {
    backgroundColor: "grey",
    opacity: 0.2,
  },
  normal: {
    opacity: 1,
  },
  tableText: {
    fontSize: 20,
  },
  container1: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#171717' },
    head1: { height: 40, backgroundColor: '#808B97', color:'#fff' },
    text1: { margin: 6 , color:'#fff'},
    row1: { flexDirection: 'row', height: 'auto', minHeight:40, color:'#fff'},
    btn1: { marginLeft:6 , width: 80, height: 25, backgroundColor: '#b24bf3',  borderRadius: 5, justifyContent: 'center' },
    btnText1: { textAlign: 'center', color: '#fff' }
});