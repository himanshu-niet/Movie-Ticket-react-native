import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Row from "../components/Row";

const Seating = ({row,colum}) => {
       
 var rows = [];

for (let i = 1; i <=row; i++) {
  rows.push(
    <Row  row={i} colum={colum} />
  )}
  return (

    <ScrollView
      showsVerticalScrollIndicator={false}
      vertical={true}
      style={styles.row}
    >
      {rows}
      
    </ScrollView>
  );
}

export default Seating



const styles = StyleSheet.create({

  row: {
    width: "100%",
    marginTop: 20,
    
  },
});


