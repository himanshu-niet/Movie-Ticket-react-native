import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Button ,} from 'react-native';
import { useSelector } from 'react-redux';
import Seating from '../components/Seating';

export default function Booking({route,navigation}) {
  const {row,colum}=route.params
  
  const {price,seats}=useSelector(state=>state)

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.nav}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              style={styles.back_icon}
              source={require("../assets/arrow.png")}
            />
          </TouchableOpacity>

          <Text style={styles.text_center}>Select Seat</Text>
        </View>
        <Image style={styles.screen} source={require("../assets/Screen.png")} />
      </View>

      <View style={styles.seating}>
        <Seating row={row} colum={colum} />
      </View>

      <View style={styles.last}>
        <View style={styles.bottom}>
          <View style={styles.ticket}>
            <Text style={styles.seats}>{seats} Seats</Text>
            <Text style={styles.price}>₹ {price}</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={()=>alert(`Thank you For Booking.\nTotal Price : ${price}\nSeats : ${seats}`)}>
              <Text style={styles.btn}>Buy Ticket</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#070D2D",
    flex: 7,
  },

  top: {
    flex: 2,
  },
  seating: {
    flex: 7,
    marginBottom: 20,
  },
  last: {
    flex: 1,
  },

  nav: {
    flexDirection: "row",
  },

  text_center: {
    flex: 1,
    textAlign: "center",
    color: "#fff",
    fontSize: 22,
    marginTop: 2,
    fontFamily: "Poppins",
  },
  back_icon: {
    width: 30,
    resizeMode: "contain",
    height: 30,
    marginLeft: 10,
  },
  screen: {
    resizeMode: "contain",
    width: "100%",
    marginTop: 20,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 5,
    marginHorizontal: 20,
  },
  ticket: {
    flex: 2,
  },
  button: {
    flex: 3,
  },
  seats: {
    color: "#fff",
    fontFamily: "Poppins",
  },
  price: {
    color: "#fff",
    fontSize: 23,
    color: "#B6116B",
    fontFamily: "Poppins",
  },
  btn: {
    color: "#fff",

    backgroundColor: "#546EE5",
    paddingVertical: 15,
    textAlign: "center",
    fontWeight:'900',
    borderRadius: 20,
    fontSize: 15,
    fontFamily: "Poppins",
  },
});

