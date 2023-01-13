import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, FlatList, Pressable, Image} from 'react-native'
import React, { useState } from 'react'
import {ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Modal from "react-native-modal";
import styles from './LoginStyle'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import QRCode from 'react-native-qrcode-svg'
import EventRegisteration from './EventRegisteration';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const PaymentPage = () => {
    const [onlineSelect, setOnline] = useState(false);
    const [offlineSelect, setOffline] = useState(false);
    const value = 'string';
    const getRef = 'getRef';

    const handleOnline = (checkValue) => {
        setOnline(!checkValue);
      };
    
    const handleOffline = (checkValue) => {
        setOffline(!checkValue);
    };

    return(
        <View>
        <View style={styles.item}>
        <View style={styles.card}>
        <TouchableWithoutFeedback onPress={() => handleOnline(onlineSelect)} >
            <MaterialCommunityIcons
                name={onlineSelect == true ? 'checkbox-marked' : 'checkbox-blank-outline'} size={35} color="#0782F9" />
        </TouchableWithoutFeedback>
        <Text style={{fontSize:18, color: 'white'}}>Online</Text>
        </View>
        {onlineSelect == true ?
        <View style={{alignSelf:'center'}}>
            <QRCode
            value={value}
            size={250}
            backgroundColor='white'
            />
        </View>
        :null}
        <View style={styles.card}>
        <TouchableWithoutFeedback onPress={() => handleOffline(offlineSelect)} >
            <MaterialCommunityIcons
                name={offlineSelect == true ? 'checkbox-marked' : 'checkbox-blank-outline'} size={35} color="#0782F9" />
        </TouchableWithoutFeedback>
        <Text style={{fontSize:18 , color: 'white'}}>Offline</Text>
        </View>
        </View>
        </View>
    )
}

export default PaymentPage