import { StyleSheet, Text, View , Card, ListItem, Icon, FlatList, StatusBar, TextInput,Button} from 'react-native'
import React, {useState} from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import EventRegisteration from './EventRegisteration';
// import { element } from 'prop-types';
// import EventList from './Event';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './LoginStyle'

const UserRegisteration = () => {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [contactNo, setContactNo] = useState('')
    const [password, setPassword] = useState('')
    const [verCode, setVerCode] = useState('');
    const [collegeId, setCollegeId] = useState('');
    const [modalUserRegistrationVisible, setUserRegistrationtModalVisible] = useState(false);

    const CancelBTN = ({title }) => (
        <TouchableOpacity onPress={()=>setAccountModalVisible(!modalAccountVisible)} style={styles.cancelBtnContainer}>
          <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
      );

    return(
        <ScrollView>
        <View style={styles.container}
        behavior="padding">
            <View style={styles.inputContainer}>
                <TextInput
                value={email}
                placeholder="Name"
                onChangeText={text =>setName(text)}
                style={styles.input}
                />
                <TextInput
                placeholder="Phone"
                onChangeText={text =>setContactNo(text)}
                style={styles.input}
                secureTextEntry
                />
                <TextInput
                placeholder="Email"
                onChangeText={text =>setEmail(text)}
                style={styles.input}
                secureTextEntry
                />
                <TextInput
                placeholder="Passowrd"
                onChangeText={text =>setPassword(text)}
                style={styles.input}
                secureTextEntry
                />
                <TextInput
                placeholder="College Id"
                onChangeText={text =>setCollegeId(text)}
                style={styles.input}
                secureTextEntry
                />
            </View>
            <View>
                <Button title='Send verification code'/>
            </View>
            <View style={[styles.container, {
            flexDirection: "row"
          }]}>
            <Text>verification code</Text>
            <TextInput
                placeholder=""
                onChangeText={text =>setVerCode(text)}
                style={styles.input}
                secureTextEntry
                />
          </View>
          <View>
            <Button title='Create'/>
          </View>
        </View>
        </ScrollView>
    )
}

export default UserRegisteration

