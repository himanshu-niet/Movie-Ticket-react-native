import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useDispatch } from 'react-redux';
import { increaseAction ,decreaseAction} from '../redux/index'

const Seat = (props) => {
  const price=props.row*100;

  const dispatch=useDispatch();

const [seat, setSeat] = React.useState(true);

function handleSeat(){
if(seat){
dispatch(increaseAction(price));

}else{
dispatch(decreaseAction(price));
}

setSeat(!seat);
  
}

  return (
    <TouchableOpacity
      style={[styles.seat, seat ? styles.unSelect_seat : styles.selected_seat]}
      onPress={handleSeat}
    >
      <Text style={seat ? styles.text2 : styles.text1}>
        R{props.row}-{props.colum}
      </Text>
     
    </TouchableOpacity>
  );
}

export default Seat


const styles = StyleSheet.create({
  seat: {
 
    marginLeft: 15,
    height: 30,
    width: 40,
    backgroundColor: "#fff",
    shadowColor: "#fff",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    elevation: 15,

    justifyContent: "center",
    alignItems: "center",
    overflow:'hidden'
  },

  selected_seat: {
    backgroundColor: "#B6116B",
    shadowColor: "#B6116B",
  },

  unSelect_seat: {
      backgroundColor: "#fff",
      shadowColor: "#fff",
  },
  
  text1:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:12,
  },

  text2:{
    color:'#000',
    fontWeight:'bold',
    fontSize:12
  }
});

