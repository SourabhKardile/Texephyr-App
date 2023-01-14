import { View, Text, Button , StyleSheet, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

export default function Records({navigation}) {
  return (
    <View style={{flex:1, flexDirection:'column', backgroundColor:'#171717', justifyContent:'space-evenly'}}>
    <ScrollView>
    <View style={{width:'100%', justifyContent:'flex-start'}}>
<TouchableOpacity style={styles.box} onPress={() => {
    navigation.navigate('Update')
}}>
    <Text style={{color:'white', fontSize:25,padding:17, fontSize:30, textTransform:'uppercase', fontWeight:'bold', letterSpacing:1}}>UPDATE</Text>
</TouchableOpacity>


<TouchableOpacity style={[styles.box]} onPress={() => {
    navigation.navigate('TresRecord')
}}>
    <Text style={{color:'white', fontWeight:'bold', fontSize:30, textTransform:'uppercase', padding:17, letterSpacing:1}}>RECORDS</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.box]} onPress={() => {
    navigation.navigate('EventSales')
}}>
    <Text style={{color:'white', fontSize:25,padding:17, fontSize:30, textTransform:'uppercase', fontWeight:'bold', letterSpacing:1}}>EVENT SALES</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.box]} onPress={() => {
    navigation.navigate('OverAllSales')
}}>
    <Text style={{color:'white', fontSize:25,padding:17,fontSize:30, textTransform:'uppercase',  fontWeight:'bold' , letterSpacing:1}}>OVERALL</Text>
</TouchableOpacity>
    </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

    box:{
         height: 100,
          marginTop:25,
          marginHorizontal:10,
           backgroundColor:'#4966f8',
            paddingTop:50,
            borderRadius:20,
            backgroundColor:'#171717',
            borderBottomColor: '#079779',
            borderBottomWidth: 2
    }
})