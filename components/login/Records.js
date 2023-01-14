import { View, Text, Button , StyleSheet, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './LoginStyle'



export default function Records({navigation}) {
  return (
    <View style={{flex:1, flexDirection:'column', backgroundColor:'#171717', justifyContent:'space-evenly'}}>
    <ScrollView>
    <View style={{width:'100%', justifyContent:'flex-start'}}>
<TouchableOpacity style={styles.boxRecords} onPress={() => {
    navigation.navigate('Update')
}}>
    <Text style={styles.textRecords}>UPDATE</Text>
</TouchableOpacity>


<TouchableOpacity style={[styles.boxRecords]} onPress={() => {
    navigation.navigate('TresRecord')
}}>
    <Text style={styles.textRecords}>RECORDS</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.boxRecords]} onPress={() => {
    navigation.navigate('EventSales')
}}>
    <Text style={styles.textRecords}>EVENT SALES</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.boxRecords]} onPress={() => {
    navigation.navigate('OverAllSales')
}}>
    <Text style={styles.textRecords}>OVERALL</Text>
</TouchableOpacity>
    </View>
    </ScrollView>
    </View>
  )
}

