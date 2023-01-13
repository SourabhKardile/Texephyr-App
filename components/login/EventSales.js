import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Cell, Col, Rows } from 'react-native-table-component';
import React , {useState} from 'react'

export default function EventSales() {
    const [tableHead, setTableHead] = useState( ['Event Name', 'Online', 'Offline', 'Total Sales'])
  const [tableData, setTableData]= useState( [
    ['CodeStorm', '100', '200', '300'],
    ['Alogholics', '300', '400', '700'],
        ['Hackathon', '500', '300', '800'],
        ['Catch The Murderer', '1000', '500', '1500']
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
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' }
  });