import {
  StyleSheet,
  Text,
  View,
  Card,
  ListItem,
  Icon,
  FlatList,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { element } from "prop-types";
import SelectDropdown from "react-native-select-dropdown";
import * as ImagePicker from "expo-image-picker";
import { Feather, Entypo } from '@expo/vector-icons';
const countries = ["MITWPU", "Harvard", "Yale", "Oxford"];

const CollegeSelect = () => {
  return (
    <View
      style={{
        marginTop:15,alignSelf:'center'
      }}
    >
      <SelectDropdown
        data={countries}
        
        defaultValue={countries[0]}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />
    </View>
  );
};

const UserRegisteration = () => {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [contactNo, setContactNo] = useState('')
    const [password, setPassword] = useState('')
    const [verCode, setVerCode] = useState('');
    const [pickedImagePath, setPickedImagePath] = useState('');
    const [showVerText,setShowVer] = useState(false);

  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,});

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

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
  };

  return (
    <View style={[styles.container]} behavior="padding">
      <View style={styles.inputContainer}>
        
               <TextInput
          value={name}
          placeholder="NAME"
          placeholderTextColor="#D9D9D9"
          onChangeText={(text) => setName(text)}
          style={[styles.input, { fontSize: 15 }]}
        />
        <TextInput
          
          placeholder="PHONE"
          placeholderTextColor="#D9D9D9"
          onChangeText={(text) => setName(text)}
          style={[styles.input, { fontSize: 15 }]}
        />
        <TextInput
          
          placeholder="EMAIL"
          placeholderTextColor="#D9D9D9"
          onChangeText={(text) => setName(text)}
          style={[styles.input, { fontSize: 15 }]}
        />
        <TextInput
          
          placeholder="PASSWORD"
          placeholderTextColor="#D9D9D9"
          onChangeText={text =>setPassword(text)}
          style={[styles.input, { fontSize: 15 }]}
          secureTextEntry
        />
                
                <CollegeSelect/>
            </View>
            <Text style={{color:'#fff'}}>------------------------------------------------------</Text>
            <Text style={{color:'#fff', alignSelf:'flex-start', marginLeft:25, marginTop:15}}>DOCUMENTS</Text>
            <View style={{flexDirection:"row", marginTop: 15, justifyContent:'space-around'}}>
                <TouchableOpacity style = {styles.modalButton} onPress={showImagePicker}>
                   <Text style = {{color:'#fff', fontSize:15}}>UPLOAD  <Feather name="upload" size={20} color="#fff" /> </Text>
                </TouchableOpacity>
                <Text style = {{color : 'white', marginTop:10, marginHorizontal:10}}> OR </Text>
                <TouchableOpacity style = {styles.modalButton} onPress={openCamera}>
                    <Text style = {{color:'#fff',fontSize:15}}>TAKE  <Entypo name="camera" size={20} color="#fff" /></Text>
                </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
            {
                pickedImagePath !== '' ?
                <Text style = {{color : '#079779'}}>Image Added successfully</Text>
                :<Text style = {{color : 'red'}}>Please select an image</Text>
                }
            </View>
            <View>
            <Text style={{color:'#fff'}}>------------------------------------------------------</Text>
            <TouchableOpacity style = {styles.modalButton} onPress={() => {
              setShowVer(!showVerText);
                    
                }}>
                   <Text style = {[styles.Text,{color:'#fff'}]}>Send Verification code</Text>
               </TouchableOpacity>
            </View>
            <View style={[styles.container, {
            flexDirection: "row"
          }]}>
            {
              showVerText == true ?
              <View>
              <TextInput
          
          placeholder="VERIFICATION CODE"
          placeholderTextColor="#D9D9D9"
          onChangeText={text =>setVerCode(text)}
          secureTextEntry
          style={[styles.input, { fontSize: 15 }]}
        />
              
              <View>
          <TouchableOpacity style = {[styles.modalButton, {marginTop:15}]} onPress={() => {
                    
                }}>
                   <Text style = {[styles.Text,{color:'#fff', textTransform:'uppercase'}]}>VERIFY & Create</Text>
               </TouchableOpacity>
          </View>
          </View>
              :null
            }
          </View>
        </View>
    )
}

export default UserRegisteration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginTop: 5,
    color: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    width: 270,
  },
  modalButton: {
    alignItems: "center",
    backgroundColor: "#079779",
    borderRadius: 5,
    padding: 10,
  },
});
