import { View, Text, Button , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

export default function Records({navigation}) {
  return (
    <View style={{flex:1, flexDirection:'row'}}>
    <ScrollView>
    <View style={{width:'100%', justifyContent:'flex-start'}}>
<TouchableOpacity style={styles.box} onPress={() => {
    navigation.navigate('Update')
}}>
    <Text style={{color:'white', fontSize:25,padding:17, fontWeight:'bold'}}>UPDATE</Text>
</TouchableOpacity>


<TouchableOpacity style={[styles.box, {backgroundColor:'green'}]} onPress={() => {
    navigation.navigate('TresRecord')
}}>
    <Text style={{color:'white', fontSize:25,padding:17, fontWeight:'bold'}}>RECORDS</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.box, {backgroundColor:'red'}]}>
    <Text style={{color:'white', fontSize:25,padding:17, fontWeight:'bold'}}>EVENT SALES</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.box, {backgroundColor:'yellow'}]}>
    <Text style={{color:'white', fontSize:25,padding:17, fontWeight:'bold'}}>OVERALL</Text>
</TouchableOpacity>
    </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

    box:{
         height: 160,
          marginTop: 10,
           backgroundColor:'#2196F3',
            paddingTop:50
    }
})