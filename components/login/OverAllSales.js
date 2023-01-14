import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Cell, Col, Rows } from 'react-native-table-component';
import React , {useState} from 'react'
import * as Font from 'expo-font';

async function loadFonts() {
    await Font.loadAsync({
      'ChakraPetch-Bold': require('../.././assets/fonts/ChakraPetch-Bold.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }
  
  loadFonts();

export default function OverAllSales() {
    const [tableHead, setTableHead] = useState( ['Title', 'Title', 'Title', 'Title'])
  const [tableData, setTableData]= useState( [
    ['A', 'A', 'A', 'A'],
    ['B', 'B', 'B', 'B'],
        ['C', 'C', 'C', 'C'],
        ['D', 'D', 'D', 'D']
  ])

      return(
        <View style={[styles.container]}>
        <ScrollView>
        <Table borderStyle={{borderWidth: 1, borderColor: '#c8e1ff'}}>
        <Row data={tableHead} flexArr={[2, 1, 1, 1,1]}  style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
          <Rows data={tableData} flexArr={[2,1, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
        </ScrollView>
      </View>
    
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#171717' },
  head: {  height: 40,  backgroundColor: '#5f5f5f'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center', color:'#fff', fontFamily:'ChakraPetch-Bold'}
  });