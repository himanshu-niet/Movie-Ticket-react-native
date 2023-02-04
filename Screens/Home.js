import * as React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
import { resetAction} from "../redux/index";

export default function Home({ navigation }) {

   const dispatch = useDispatch();

    const [row,setRow]=React.useState(0);
    const [colum, setColum] = React.useState(0);

    function handleBook(){
      dispatch(resetAction());
        if(row>0 && colum>0){
            navigation.navigate("booking", {
              row: row,
              colum: colum,
            });

            setColum();
            setRow();
        }else{
            alert("Value Should be greater than 0");
        }
    
    }

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.text_center}>Ticket Booking</Text>
      </View>

      <View style={styles.container2}>
        <TextInput
          editable
          onChangeText={(text) => setRow(text)}
          value={row}
          placeholder="Enter No of Rows"
          style={styles.input}
          placeholderTextColor="#fff"
          keyboardType="numeric"
        />
        <TextInput
          editable
          onChangeText={(text) => setColum(text)}
          value={colum}
          placeholder="Enter No of Colum"
          style={styles.input}
          placeholderTextColor="#fff"
          keyboardType="numeric"
        />
       

        <TouchableOpacity onPress={handleBook}>
          <Text style={styles.book}>Book Ticket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingLeft: 10,
    paddingRight: 10,

    backgroundColor: "#070D2D",
    flex: 7,
  },

  nav: {
    flexDirection: "row",
    marginBottom: 50,
  },

  text_center: {
    flex: 1,
    textAlign: "center",
    color: "#fff",
    fontSize: 30,
    marginTop: 2,
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
  back_icon: {
    width: 30,
    resizeMode: "contain",
    height: 30,
    marginLeft: 10,
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    marginHorizontal: 30,
    marginVertical: 20,
    width: "100%",
    borderColor: "#546EE5",
    borderWidth: 1,
    paddingVertical: 10,
    shadowColor: "#546EE5",
    fontSize: 17,
    paddingHorizontal: 20,
    color: "#fff",
    borderRadius: 10,
    fontFamily: "Poppins",
  },

  book: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
    backgroundColor: "#546EE5",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 10,
    shadowColor: "#fff",
    marginTop: 20,
    fontFamily: "Poppins",
  },
});
