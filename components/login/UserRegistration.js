import { StyleSheet, Text, View , Card, ListItem, Icon, FlatList, StatusBar, TextInput,Button, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { element } from 'prop-types';
import SelectDropdown from 'react-native-select-dropdown'
import * as ImagePicker from 'expo-image-picker';


const countries = ["MITWPU", "Harvard", "Yale", "Oxford"]

const CollegeSelect = () => {
    return(
        <View style={{alignSelf:'center',backgroundColor:'white', borderRadius: 20}}>
            <SelectDropdown
	        data={countries}
            defaultValue={countries[0]}
	        onSelect={(selectedItem, index) => {
		    console.log(selectedItem, index)
	        }}
	        buttonTextAfterSelection={(selectedItem, index) => {
		    // text represented after item is selected
		    // if data array is an array of objects then return selectedItem.property to render after item is selected
		    return selectedItem
	        }}
	        rowTextForSelection={(item, index) => {
		    // text represented for each item in dropdown
		    // if data array is an array of objects then return item.property to represent item in dropdown
		    return item
	        }}
        />
        </View>
    )
}

const UserRegisteration = () => {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [contactNo, setContactNo] = useState('')
    const [password, setPassword] = useState('')
    const [verCode, setVerCode] = useState('');
    const [pickedImagePath, setPickedImagePath] = useState('');

    const showImagePicker = async () => {
        // Ask the user for the permission to access the media library 
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("You've refused to allow this appp to access your photos!");
          return;
        }
    
        const result = await ImagePicker.launchImageLibraryAsync();
        
        // Explore the result
        console.log(result);

        if (!result.cancelled) {
          setPickedImagePath(result.uri);
          console.log(result.uri);
        }
      }
    
      const openCamera = async () => {
        // Ask the user for the permission to access the camera
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("You've refused to allow this appp to access your camera!");
          return;
        }
    
        const result = await ImagePicker.launchCameraAsync({ mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,});
    
        console.log(result);
    
        if (!result.cancelled) {
          setPickedImagePath(result.uri);
          console.log(result.uri);
          
        }
      }
    
    return(
        <View style={[styles.container]}
        behavior="padding">
            <View style={styles.inputContainer}>
                <TextInput
                value={name}
                placeholder="Name"
                onChangeText={text =>setName(text)}
                style={styles.input}
                />
                <TextInput
                placeholder="Phone"
                onChangeText={text =>setContactNo(text)}
                style={styles.input}
                
                />
                <TextInput
                placeholder="Email"
                onChangeText={text =>setEmail(text)}
                style={styles.input}
                />
                <TextInput
                placeholder="Password"
                onChangeText={text =>setPassword(text)}
                style={styles.input}
                secureTextEntry
                />
                <CollegeSelect/>
            </View>
            <View style={{flexDirection:"row", margin: 5}}>
                <TouchableOpacity style = {styles.modalButton} onPress={showImagePicker}>
                   <Text style = {styles.Text}>Select an image</Text>
                </TouchableOpacity>
                <Text style = {{color : 'white'}}> OR </Text>
                <TouchableOpacity style = {styles.modalButton} onPress={openCamera}>
                    <Text style = {styles.Text}>Click image</Text>
                </TouchableOpacity>
            </View>
            <View>
            {
                pickedImagePath !== '' ?
                <Text style = {{color : 'white'}}>Image Picked successfully</Text>
                :<Text style = {{color : 'white'}}>Please select an image</Text>
                }
            </View>
            <View>
            <TouchableOpacity style = {styles.modalButton} onPress={() => {
                    
                }}>
                   <Text style = {styles.Text}>Send Verification code</Text>
               </TouchableOpacity>
            </View>
            <View style={[styles.container, {
            flexDirection: "row"
          }]}>
            <TextInput
                placeholder="Verification Code"
                onChangeText={text =>setVerCode(text)}
                style={styles.input}
                secureTextEntry
                />
          </View>
          <View>
          <TouchableOpacity style = {styles.modalButton} onPress={() => {
                    
                }}>
                   <Text style = {styles.Text}>Create</Text>
               </TouchableOpacity>
          </View>
        </View>
    )
}

export default UserRegisteration

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    input: {
        color: 'black',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        backgroundColor:'#D3D3D3'
    },
    modalButton: {
        alignItems: 'center',
        backgroundColor: '#BB86FC',
        padding: 10,
        margin: 5
      },
})