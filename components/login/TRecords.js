import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Cell, Col, Rows } from 'react-native-table-component';
import React , {useState} from 'react'

export default function TRecords() {
    const [tableHead, setTableHead] = useState( ['Tex ID', 'Name', 'Dept', 'Holding','Total'])
  const [tableData, setTableData]= useState( [
    ['101', 'Aditya Patil', 'CSE', '100', '1000'],
    ['102', 'Pratap Kakade', 'MECH', '0', '100'],
        ['103', 'Aditya Inamdar', 'ENTC', '400','400'],
        ['104', 'Sourabh Kardile', 'CSE', '500','1000']
  ])

      return(
        <View style={[styles.container]}>
        <ScrollView>
        <Table borderStyle={{borderWidth: 1, borderColor: '#c8e1ff'}}>
        <Row data={tableHead} flexArr={[1, 2, 1, 1,1]}  style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
          <Rows data={tableData} flexArr={[1,2, 1, 1]} style={styles.row} textStyle={styles.text}/>
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