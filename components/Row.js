import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Seat from "../components/Seat";

const Row = ({row,colum}) => {
    
 var seats = [];

for (let i = 1; i <=colum; i++) {
  seats.push(
    <Seat row={row} colum={i} />
  )}
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={styles.row}
    >
      {seats}
    </ScrollView>
  );
}

export default Row



const styles = StyleSheet.create({
  
  row: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    
    
  },
});

